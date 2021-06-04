import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My name is Nibirsssss</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://c.ndtvimg.com/2019-10/kbn7tvqg_shakib-al-hasan_625x300_21_October_19.jpg?output-quality=60&output-format=webp&downsize=555:*',
        }}
        // style={{height: 100, width:100}}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    height: 400, width:400
  }
});
