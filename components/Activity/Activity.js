import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles.js'

export class Activity extends Component {
    constructor(props) {
        super(props)
        this.name = this.props.iconName
    }
    render() {
        return (
            <View style={styles.buttonAndText}>
                <Icon reverse name={this.props.iconName}></Icon>
                <Text> {this.name} </Text>
            </View>
        )
    }
}

export default Activity;