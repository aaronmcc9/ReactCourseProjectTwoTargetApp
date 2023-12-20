import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient'




export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground resizeMode='cover'
        style={styles.rootScreen}
        source={require("./assets/images/background.png")}
        imageStyle={styles.backgroundImage}>
        <StartGameScreen></StartGameScreen>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    // backgroundColor: "#ddb2f",
    flex: 1
  },
  backgroundImage: {
    opacity: 0.75
  }
});
