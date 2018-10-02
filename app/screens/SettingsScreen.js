import React from 'react';
import {View, Text, ScrollView} from 'react-native'
import styles from './styles.js';
import Navigation from '../../App.js';

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        title:'Settings'
      };

    render(){
      return(
        <View style={styles.container}>

          <View style={styles.topBarArea}>
            <Text stlye={styles.titleText}>
              Settings
            </Text>
          </View>

          <ScrollView>
            <View key='1' style={styles.settingsItem}>
              <Text style={styles.settingsFont}>Activities</Text>
            </View>
          </ScrollView>

        </View>

      )
    }
}