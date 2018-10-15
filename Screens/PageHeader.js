import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class PageHeader extends Component {
    render() {
        return (
            <View style={styles.formTitle}>
                <View style={styles.formTitleContainer}>
                    <Text style={styles.textHeader}>ggk tech</Text>
                    <Text style={[styles.textHeader, styles.textColorBlack]}>HD++</Text>
                </View>
                <Text style={styles.textHeading}>-----------FORGOT PASSWORD-----------</Text>
            </View>
        );
    }
}

export default PageHeader;

const styles = StyleSheet.create({
    formTitleContainer: {
        flex: 1,
        margin: 30,
        padding: 20,
        flexDirection: 'row',
    },
    formTitle: {
        flex: 1,
        margin: 30,
        padding: 20,
        flexDirection: 'column',
    },
    textHeader: {
        color: '#5f2d03',
        flex: 1,
        fontWeight: 'bold',
        fontSize: 30,
    },
    textHeading: {
        color: '#5f2d03',
        fontWeight: 'bold',
        fontSize: 10,
        textAlign: 'center',
    }
})