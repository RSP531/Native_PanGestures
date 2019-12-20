import React  from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Camera from './Camera.js';
export default class CameraParent extends React.Component {
    constructor(props){
        super(props);
        //process.nextTick = setImmediate;

        this.invoke = this.invoke.bind(this)
    }

    invoke(){
      console.log('hi')
      const Clarifai = require('clarifai');
      
      // Instantiate a new Clarifai app by passing in your API key.
      const app = new Clarifai.App({apiKey: 'c5f2ca65c41b4036bf09a94948da04dd'});
      
      // Predict the contents of an image by passing in a URL.
      app.models.predict(Clarifai.GENERAL_MODEL, 'https://fh-sites.imgix.net/sites/2321/2019/02/26203513/47098783_10157952075902802_1331939194657832960_n.jpg?auto=compress%2Cformat&fit=crop&crop=faces&w=720&h=480')
        .then(response => {
          console.log('yay');
          // console.log(response);
          console.log('----');
          console.log(response.outputs[0].data.concepts[0].name);
          console.log(response.outputs[0].data.concepts[1].name);
          console.log(response.outputs[0].data.concepts[2].name);
          console.log(response.outputs[0].data.concepts[3].name);
          console.log('----');
        })
        .catch(err => {
          console.log('nice try');
          console.log(err);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Camera />
              <Button 
                onPress ={this.invoke}
                title="Clarifai Stuff"
              />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',   
    }
});