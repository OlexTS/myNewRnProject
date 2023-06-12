import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!777a</Text>
      <StatusBar style="auto" />
      <View>
        <TextInput style={ styles.input} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff00ff00c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 20,
    padding: 10,
    borderWidth: 1,
  }
});
