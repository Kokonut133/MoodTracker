import React from 'react';
import { AsyncStorage, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Icon } from 'react-native-elements'

class EntryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Entry
        </Text>

        <Icon name='rowing' reverse/>

        <TextInput style={styles.input}
          defaultValue={this.state.value}
          onChangeText={this.handleChangeText}
        />

        <Text style={styles.explanation}>
        Your activity is :{this.state.value}
        </Text>

        <TouchableOpacity onPress={this.displayActivityList}>
          <Text>Press me</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
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
  
  displayActivityList = async () => {
    try{
      let activities = await AsyncStorage.getAllKeys();
      alert(activities)
    } catch(error){
      alert(error)
    }
  }
  
}

class SecondScreen extends React.Component {
  render(){
    return(
    <View styles={styles.container}>
      <Text style={styles.explanation}>Type in new Activity</Text>

      <TouchableOpacity onPress={this.saveActivity}>
        <Text>Add Activity</Text>
      </TouchableOpacity>
    </View>
    )
  }

  saveActivity() {
    let newActivity = 'Coding';
    AsyncStorage.setItem('availableActivities', newActivity)
    alert('saved:' + newActivity)
  }
}

export default createMaterialBottomTabNavigator({
  EntryScreen: { 
    screen: EntryScreen,
    navigationOptions: {
      tabBarLabel: 'Entry',
    } 
  },
  SecondScreen: { 
    screen: SecondScreen 
  },
});

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#00008b',
  },
  title: {
    backgroundColor: 'green',
    height: 60,
    top: 30,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
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
  },

});