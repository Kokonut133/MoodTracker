import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

class EntryScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      value: "Edit me",
    }
    this.handleChangeText = this.handleChangeText.bind(this)
  }

  handleChangeText(newText) {
    this.setState({
      value: newText
    })
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

        <TextInput style={styles.input}
          defaultValue={this.state.value}
          onChangeText={this.handleChangeText}
        />

        <Text style={styles.explanation}>
        Your activity is :{this.state.value}
        </Text>
        
      </View>
    );
  }
}

class SecondScreen extends React.Component {
  render(){
    return(
    <View>
      <Text>New Stuff</Text>
    </View>
    )
  }
}

export default createMaterialBottomTabNavigator({
  EntryScreen: { 
    screen: EntryScreen,
    navigationOptions: {
      tabBarLabel: 'Entry',
      /*
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24} />
      )
      */
    } 
  },
  SecondScreen: { 
    screen: SecondScreen 
  },
});

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#00008b'
  },
  title: {
    backgroundColor: 'green',
    height: 60,
    top: 25,
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
    borderWidth: 2,
    margin: 5,
  }
});
