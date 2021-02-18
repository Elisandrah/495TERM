import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    'Inter-SemiBoldItalic':
      'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is a test</Text>
      <Text style={{ fontFamily: "The text here has been edited" }}>Inter Black</Text>
      <Text style={{ fontFamily: "We can now begin changing things within the app itself off of this" }}>
        Inter SemiBoldItalic
      </Text>
    </View>
  );
}
