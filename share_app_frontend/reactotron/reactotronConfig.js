import Reactotron, { asyncStorage } from "reactotron-react-native"
Reactotron
  .configure() // controls connection & communication settings/specifies various settings related to them
  .useReactNative(asyncStorage()) // add all built-in react native plugins
  .connect() // let's connect!