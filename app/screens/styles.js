import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex:1,
    },
    topBarArea: {
      height: 60,
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      fontSize: 20,
    },
    activityButtonsArea: {
      flex: 3,
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
    settingsItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      backgroundColor: 'rgb(51, 153, 255)'
    },
    settingsFont: {
      fontSize: 20,
      fontWeight: 'bold'
    }
  
  });