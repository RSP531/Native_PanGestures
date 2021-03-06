import React, { Component } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
} from "react-native";

export default class DragAndDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1),
    };
    //this.isDropArea = this.isDropArea.bind(this)
  }

  componentWillMount() {
    // Add a listener for the delta value change
    this._val = { x:0, y:0 };
    this.state.pan.addListener((value) => this._val = value);

    // Initialize PanResponder with move handling
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),
      onPanResponderGrant: () =>  {
        this.state.pan.setOffset(this.state.pan.__getValue());
        this.state.pan.setValue({x:0,y:0})
      },
      onPanResponderRelease: (e, gesture) => {
        //console.log(gesture);
        if (gesture.moveY < 300) {
          console.log('1')
          Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 1000,
          }).start(() => 
            this.setState({
              showDraggable: false
            })
          );
        }
        // } else {
        //   Animated.spring(this.state.pan, {
        //     toValue: { x: 0, y: 0 },
        //     friction: 5
        //   }).start();
        // }
        //console.log(this.state.showDraggable)
      },
      // adjusting delta value
      //this.state.pan.setValue({ x:0, y:0})
    });
  }


  render() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    return (
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[panStyle, styles.circle]}
        />
    );
  }
}

let CIRCLE_RADIUS = 30;
let styles = StyleSheet.create({
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
  },
});
