import { View, Text } from 'react-native';
// import { RNCamera } from 'react-native-camera';



// const CameraScreen = () => {
//     const takePicture = async () => {
//       if (this.camera) {
//         const options = { quality: 0.5, base64: true };
//         const data = await this.camera.takePictureAsync(options);
//         console.log(data.uri);
//       }
//     };

const StoryMode = () => {
    return (
        <View>
            <Text>Here is the Owner Story</Text>
        </View>
    );
};


export default StoryMode;