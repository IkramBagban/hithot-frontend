import Sound from 'react-native-sound';
import HapticFeedback from 'react-native-haptic-feedback';
import { Sounds } from '../assets/sounds';
import SoundPlayer from 'react-native-sound-player';

const playSound = soundFile => {
    const sound = new Sound(soundFile, Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('Failed to load the sound', error);
            return;
        }
        sound.play(() => {
            sound.release();
        });
    });
};

const playLikeSound = () => {
    try {
        SoundPlayer.setVolume(0.1);
        SoundPlayer.playAsset(Sounds.likeSound);
    } catch (e) {
        console.log('error in like sound', e);
    }
};

const triggerHaptic = (type = 'impactLight') => {
    const options = {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
    };
    HapticFeedback.trigger(type, options);
};

const SoundUtils = {
    playSound,
    triggerHaptic,
    playLikeSound,
};

export default SoundUtils;
