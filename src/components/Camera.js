import React from 'react';
import { StyleSheet, Dimensions, Alert, ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CaptureButton from './CaptureButton.js';

export default class Camera extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      identifiedAs: '',
      loading: false
    }
  }
  takePicture = async function(){
    if (this.camera) {
      //Pause the camera's preview
      this.camera.pausePreview();
      //Set the activity indicator
      this.setState((previousState, props) => ({
        loading:true
      }));
      //Set options
      const options = {
        base64: true
      };
      //Get the base64 version of the image
      const data = await this.camera.takePictureAsync(options)
      // Get the identified image
      this.identifyImage(data.base64);
    }
  }

  identifyImage(imageData){
    //Initialise Clarifai api
    const Clarifai = require('clarifai');
    const app = new Clarifai.App({
      apiKey: 'c5f2ca65c41b4036bf09a94948da04dd'
    });
    //Identify the image
    // app.models.predict(Clarifai.GENERAL_MODEL, {base64:imageData})
    //   .then((response) => this.displayAnswer(response.outputs[0].data.concepts[0].name)
    //   .catch((err) => alert(err))
    // );
    app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg')
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
  }

  displayAnswer(identifiedImage){
    //Dismiss the activity indicator
    this.setState((prevState, props) => ({
      identifiedAs:identifiedImage,
      loading:false
    }));
    //show an Alert with the answer on
    Alert.alert(
      this.state.identifiedAs,
      '',
      { cancelable: false }
    )
    //resume the preview
    this.camera.resumePreview();
  }

  render() {
    return (
      <RNCamera 
        ref={ref => {
          this.camera = ref;
        }} 
        style={styles.preview}>
        {/* <ActivityIndicator 
          size="large"
          style={styles.loadingIndicator}
          color="#fff"
          animating={this.state.loading}
        />
        <CaptureButton 
          buttonDisabled={this.state.loading}
          onClick={this.takePicture.bind(this)}
        /> */}
      </RNCamera>
    );
  }
}


const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
