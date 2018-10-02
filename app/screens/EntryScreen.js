import React from 'react';
import {Activity} from '../components/Activity/Activity.js'
import {View, Text} from 'react-native';
import styles from './styles.js';

export default class EntryScreen extends React.Component {
  static navigationOptions = {
    title:'EntryScreen'
  };
  
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
        
      </View>
    );
  }
}
