import { useState } from "react";

import { StartGameScreen } from "./screens/StartGameScreen";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GameScreen } from "./screens/GameScreen";

import { Colors } from "./constants/colors";
import { GameOverScreen } from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [number, setNumber] = useState<number>(0);
  const [gameOver, setGameOver] = useState(true);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const pickedNumberHandler = (pickedNumber: number) => {
    setNumber(pickedNumber);
    setGameOver(false);
  };
  const gameOverHandler = () => {
    setGameOver(true);
  };
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (number) {
    screen = <GameScreen userNumber={number} onGameOver={gameOverHandler} />;
  }
  if (gameOver && number) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary800, Colors.accent]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/Dice.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
