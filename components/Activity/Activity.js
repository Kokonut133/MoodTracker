import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles.js'

export class Activity extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Icon reverse name={this.props.iconName}></Icon>
                <Text style={styles.belowButton}> styles </Text>
            </View>
        )
    }
}

export default Activity;