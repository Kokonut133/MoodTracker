import React from 'react';
import { AsyncStorage, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Activity } from './components/Activity/Activity.js'


class EntryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.topBarArea}>
          <Text stlye={styles.titleText}>
            Entry
          </Text>
        </View>

        <View style={styles.activityButtonsArea}>
          <Activity style={styles.activityButton} iconName='rowing'></Activity>
          <Activity style={styles.activityButton} iconName='rowing'></Activity>
          <Activity style={styles.activityButton} iconName='rowing'></Activity>
          <Activity style={styles.activityButton} iconName='rowing'></Activity>
          <Activity style={styles.activityButton} iconName='rowing'></Activity>
          <Activity style={styles.activityButton} iconName='rowing'></Activity>
          <Activity style={styles.activityButton} iconName='rowing'></Activity>
          <Activity style={styles.activityButton} iconName='rowing'></Activity>
        </View>

        <View style={styles.explanationArea}>
          <TextInput ref="newActivityInput" 
            style={styles.input} 
            defaultValue={this.state.activity}
            onChangeText={this.handleActivityInput.bind(this)}
            />

          <Text>current state: {this.state.activityButtons}</Text>

          <TouchableOpacity onPress={this.addAvailableActivity}>
            <Text>Add activity</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.loadAvailableActivities}>
            <Text>Load Activities</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }

  constructor() {
    super()
    this.state = {}
    this.addAvailableActivity = this.addAvailableActivity.bind(this)
  } 

  handleActivityInput(newText){
    this.setState({
        activity: newText
    })
  }

  addAvailableActivity(){

  }

  /*
  async addAvailableActivity(event){
    alert("adding")
    const activity = this.activity
    alert(activity)
    const availableActivities = await AsyncStorage.getItem('availableActivities')
    let newAvailableActivities = JSON.parse(availableActivities)
    if (!newAvailableActivities) {
      newAvailableActivities = []
    }
    newAvailableActivities.push(activity)
    await AsyncStorage.setItem("availableActivities", JSON.stringify(newAvailableActivities));
  }

  async loadAvailableActivities() {
    try {
      var activities = await AsyncStorage.getItem("availableActivities");
      alert(activities)
      return activities
    } catch (error) {
      return ("Couldn't load Activities!")
    }
  }

*/
}

class SecondScreen extends React.Component {
  render(){
    return(
    <View styles={styles.container}>
      <View style={styles.explanationArea}>
        <Text>Type in new Activity</Text>

        <TouchableOpacity onPress={this.extendAvailableActivities}>
          <Text>Add Activity</Text>
        </TouchableOpacity>
      </View>

    </View>
    )
  }

  async extendAvailableActivities() {
    try{
      let activities = await this.loadAvailableActivities()
      return activities
    } catch (error){
      alert("Couldn't extend Acivities!")
    }
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
  },
  topBarArea: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
  },
  activityButtonsArea: {
    flex: 6,
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'center',
  },
  activityButton: {
    backgroundColor:'red',
    margin: 3,
  },
  explanationArea: {
    flex: 2,
    backgroundColor: 'lightblue',
  },
  inputArea: {
    height: 60,
    backgroundColor: 'white',
    padding: 20,
  },

});