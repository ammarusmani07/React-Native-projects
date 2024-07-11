import React, { useState, useEffect } from "react";
import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { setupPlayer, addTrack } from "../musicPlayerServices";
import MusicPlayer from "./Screens/MusicPlayer";

function App() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    try {
      let isSetup = await setupPlayer();

      if (isSetup) {
        await addTrack();
      }

      setIsPlayerReady(isSetup);
    } catch (error) {
      console.error('Error initializing Track Player:', error);
    }
  }

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // To make it visually consistent with the player screen
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // To match the rest of the app
  },
});

export default App;
