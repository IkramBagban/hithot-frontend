package com.hithot

//import kotlinx.android.synthetic.main.activity_main.*
//import com.google.android.play.core.tasks.Task
import android.app.Activity
import android.app.Activity.RESULT_OK
import android.content.Intent
import android.content.IntentSender
import android.graphics.Color
import android.view.View
import androidx.annotation.NonNull
import com.facebook.react.bridge.BaseActivityEventListener
import com.facebook.react.bridge.LifecycleEventListener
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.android.material.snackbar.Snackbar
import com.google.android.play.core.appupdate.AppUpdateManager
import com.google.android.play.core.appupdate.AppUpdateManagerFactory
import com.google.android.play.core.install.InstallState
import com.google.android.play.core.install.InstallStateUpdatedListener
import com.google.android.play.core.install.model.AppUpdateType
import com.google.android.play.core.install.model.InstallStatus
import com.google.android.play.core.install.model.UpdateAvailability


class InAppUpdateModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext),
    InstallStateUpdatedListener,
    LifecycleEventListener {

//    private lateinit var appUpdateManager: AppUpdateManager
private var appUpdateManager: AppUpdateManager? = null
//private val appUpdateManager: AppUpdateManager by lazy {
//    AppUpdateManagerFactory.create(reactContext)
//}
    private val mActivityEventListener = object : BaseActivityEventListener() {
        override fun onActivityResult(
            activity: Activity?,
            requestCode: Int,
            resultCode: Int,
            data: Intent?
        ) {
            if (requestCode == MY_REQUEST_CODE) {
                if (resultCode != RESULT_OK) {
                    System.out.println("Update flow failed! Result code: $resultCode")
                    // If the update is cancelled or fails,
                    // you can request to start the update again.
                }
            }
        }
    }

    init {
        reactContext.addActivityEventListener(mActivityEventListener)
        reactContext.addLifecycleEventListener(this)
    }

    @NonNull
    override fun getName(): String {
        return "InAppUpdate"
    }

    @ReactMethod
    fun checkUpdate() {
        appUpdateManager = AppUpdateManagerFactory.create(reactContext)
        appUpdateManager!!.registerListener(this)
        val appUpdateInfoTask = appUpdateManager!!.getAppUpdateInfo()
        appUpdateInfoTask.addOnSuccessListener { appUpdateInfo ->
            if (appUpdateInfo.updateAvailability() == UpdateAvailability.UPDATE_AVAILABLE
                && appUpdateInfo.clientVersionStalenessDays() != null
                && appUpdateInfo.clientVersionStalenessDays()!! > STALE_DAYS
                && appUpdateInfo.isUpdateTypeAllowed(AppUpdateType.IMMEDIATE)
            ) {
                try {
                    appUpdateManager!!.startUpdateFlowForResult(
                        appUpdateInfo,
                        AppUpdateType.IMMEDIATE,
                        reactContext.currentActivity!!,
                        MY_REQUEST_CODE
                    )
                } catch (e: IntentSender.SendIntentException) {
                    e.printStackTrace()
                }
            } else {
                if (appUpdateInfo.updateAvailability() == UpdateAvailability.UPDATE_AVAILABLE
                    && appUpdateInfo.isUpdateTypeAllowed(AppUpdateType.FLEXIBLE)
                ) {
                    try {
                        appUpdateManager!!.startUpdateFlowForResult(
                            appUpdateInfo,
                            AppUpdateType.FLEXIBLE,
                            reactContext.currentActivity!!,
                            MY_REQUEST_CODE
                        )
                    } catch (e: IntentSender.SendIntentException) {
                        e.printStackTrace()
                    }
                }
            }
        }
    }

    override fun onStateUpdate(state: InstallState) {
        if (state.installStatus() == InstallStatus.DOWNLOADED) {
            popupSnackbarForCompleteUpdate()
        }
    }

    private fun popupSnackbarForCompleteUpdate() {
        val snackbar = Snackbar.make(
            reactContext.currentActivity?.findViewById<View>(android.R.id.content)?.rootView!!,
            "An update has just been downloaded.",
            Snackbar.LENGTH_INDEFINITE
        )
        snackbar.setAction("RESTART") { view -> appUpdateManager?.completeUpdate() }
        snackbar.setActionTextColor(Color.GREEN)
        snackbar.show()
    }

    override fun onHostResume() {
        if (appUpdateManager != null) {
            appUpdateManager!!.getAppUpdateInfo().addOnSuccessListener { appUpdateInfo ->
                if (appUpdateInfo.installStatus() == InstallStatus.DOWNLOADED) {
                    popupSnackbarForCompleteUpdate()
                }
                if (appUpdateInfo.updateAvailability() == UpdateAvailability.DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS) {
                    try {
                        appUpdateManager!!.startUpdateFlowForResult(
                            appUpdateInfo,
                            AppUpdateType.IMMEDIATE,
                            reactContext.currentActivity!!,
                            MY_REQUEST_CODE
                        )
                    } catch (e: IntentSender.SendIntentException) {
                        e.printStackTrace()
                    }
                }
            }
        }
    }

    override fun onHostPause() {}

    override fun onHostDestroy() {
        if (appUpdateManager != null) {
            appUpdateManager!!.unregisterListener(this)
        }
    }

    companion object {
        private const val STALE_DAYS = 5
        private const val MY_REQUEST_CODE = 0
    }
}