import { Dimensions, StatusBar } from "react-native"

export default {
  vw: Dimensions.get('screen').width,
  vh: Dimensions.get('screen').height,
  androidStatusBar: StatusBar.currentHeight,
  bgColor: "#212A45",
  buttonColor: "#3265FF",
  inputBgColor: "#1A2038",
  white: "#ffffff",
  grey: "#6D7385",
  black: "#1B1B1B",
  error: 'red',
  buttonBorder: 'magenta'
}