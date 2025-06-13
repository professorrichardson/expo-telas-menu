import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Prof.Richardson</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  texto:{
    color: '#fff',
    fontSize: 40
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
