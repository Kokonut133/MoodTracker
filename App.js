import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {}

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          MoodTracker
        </Text>
        <Text style={styles.explanation}>
          Please enter your Activity:
        </Text>
        <TextInput style={styles.input}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  title: {
    backgroundColor: 'green',
    height: 50,
  },
  explanation: {
    backgroundColor: 'lightblue',
    height: 50,
  },
  activity: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  input: {
    height: 50,
    backgroundColor: 'white',
  }
});
