import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import DragAndDropScreen from './src/screens/DragAndDropScreen';
import Bucket from './src/components/Bucket';
import CameraParent from './src/components/CameraParent';
import ColorScreen from './src/components/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';
import TextingSMSScreen from './src/screens/TextingSMSScreen.js';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
    Bucket: Bucket,
    Photos: CameraParent,
    // Colors: ColorScreen,
    Squares: SquareScreen,
    TextInput: TextScreen,
    Boxes: BoxScreen,
    Texting: TextingSMSScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
