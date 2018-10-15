import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class KeyValueView extends Component {
    render() {
        return (
            <View style={styles.ProfileView}>
                <Text style={styles.Profileproperty}>{this.props.title}</Text>
                <Text style={styles.ProfileValue}>{this.props.Text}</Text>
            </View>
        );
    }
}

export default KeyValueView;
const styles = StyleSheet.create({

    ProfileView: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    Profileproperty: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    ProfileValue: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    //backgroundColor:'rgb(234,160,74)'

})