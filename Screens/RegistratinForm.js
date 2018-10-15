import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
const util = require('util');

export default class RegistratinForm extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>
                        PATIENT ID
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Unique patient ID" />
                </View>
                <View>
                    <Text>
                        FULL NAME
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="E.g. Jone D doe" />
                </View>
                <View>
                    <Text>
                        EMAIL ID
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="E,g. joneddoe@gmail.com" />
                </View>
                <View>
                    <Text>
                        DATE OF BIRTH
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="E.g. 12/09/9999" />
                </View>
                <View>
                    <Text>
                        ZIPCODE
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="E.g. 60067" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        paddingHorizontal: 10
    }
})