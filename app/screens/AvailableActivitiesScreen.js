import React from 'react';
import {Activity} from '../components/Activity/Activity.js'
import {View, Text, AsyncStorage, Button, TextInput} from 'react-native';
import {Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';
import styles from './styles.js';

export default class availableActivitiesScreen extends React.Component {
  static navigationOptions = {
    title:'availableActivitiesScreen'
  };
  
  render() {
    return (
      <View style={styles.container}>
  
        <View style={styles.topBarArea}>
          <Text style={styles.titleText}>
            Add activity
          </Text>
        </View>

        <View style={styles.explanationArea}>
          <Text>Type in new Activity</Text>
          <TextInput ref="newActivityInput" 
              style={styles.input}
              onChangeText={this.handleActivityInput.bind(this)}
              />

            <Text>current state: {this.state.value}</Text>

            <Button onPress={this.addAvailableActivity}
              title="Add Activity"/>

            <Button onPress={this.clearAvailableActivities}
              title="Clear Activities"/>
            
            <Button onPress={this.displayAvailableActivities}
              title="Display Activities"/>
        </View>

      </View>
    );
  }

  constructor() {
    super()
    this.state = {}
    this.addAvailableActivity = this.addAvailableActivity.bind(this)
    this.availableActivities = AsyncStorage.getItem('availableActivities')
  } 

  handleActivityInput(newText){
    this.setState({
        value: newText
    })
  }

  async addAvailableActivity() {
    try {
      let activities = await AsyncStorage.getItem('availableActivities')
      let newActivity = this.state.value
      if (activities != null) {
        activities = JSON.parse(activities)
      } else {
        activities = []
      }
      if (newActivity != '' && !activities.includes(newActivity)){
        activities.push(newActivity)
        console.warn('Added ' + newActivity + '!')
      }
      await AsyncStorage.setItem('availableActivities', JSON.stringify(activities))
    } catch (error) {
      alert('Couldnt load activities!')
    }
  }

  async clearAvailableActivities(){
    await AsyncStorage.clear()
  }

  async displayAvailableActivities(){
    try{
      let activities = await AsyncStorage.getItem('availableActivities')
      if (activities != null){
        console.warn(JSON.parse(activities))
      } else {
        console.warn('Empty Available Activities!')
      }
    } catch(error){
      console.warn('Couldnt display activities!')
    }
  }
}
