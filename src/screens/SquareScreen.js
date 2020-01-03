
// import React, { useState } from "react";
import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {  
  //state === {red:number, green: number, blue:number};
  //action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
  //convention //action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }

  switch(action.type){
    case 'change_red':
      // never going to do
      // state.red = state.red - 15;
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : {...state, red: state.red + action.payload};
      //makes a brand new object & copy paste into new one
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : {...state, green: state.green + action.payload};
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : {...state, blue: state.blue + action.payload};
    default: 
      return state;
  }
}; //best practice is to define outside of component

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0} )
  const {red, green, blue } = state; 
  //dispatch = "invoke my reducer"
  // console.log(state) //{red: 0, green: 0, blue: 0} 

  // const [red, setRed] = useState(0);  //delete
  // const [green, setGreen] = useState(0); //hooks
  // const [blue, setBlue] = useState(0); //hooks

// const setColor = (color, change) => {
//   switch (color) {
//     case 'red':
//       red + change > 255 || red + change < 0 ? null : setRed(red + change);
//       return
//     case 'green':
//       green + change > 255 || green + change < 0 ? null : setGreen(green + change);
//       return;
//     case 'blue':
//       blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
//       return;
//     default:
//       return;
//   }
// };

return (
  <View>
    <ColorCounter
      // onIncrease={() => setColor('red', COLOR_INCREMENT)}
      // onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
      onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
      onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
      color="red"
    />
    <ColorCounter
      // onIncrease={() => setColor('green', COLOR_INCREMENT)}
      // onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
      onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
      onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
      color="blue"
    />
    <ColorCounter
      // onIncrease={() => setColor('blue', COLOR_INCREMENT)}
      // onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
      onIncrease={() => dispatch({ type: 'change_green', payload1: COLOR_INCREMENT })}
      onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
      color="green"
    />
    <View
      style={{
        height: 150,
        width: 150,
        alignSelf: 'center',
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
      }}
    />
  </View>
)

}

const styles = StyleSheet.create ({
  colorButton: {
    width: 50,
  }
})

export default SquareScreen;