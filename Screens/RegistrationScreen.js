import React from 'react';
import { TextInput, Text, Button, View } from 'react-native';
import RegistartionForm from './RegistratinForm';
const util = require('util');

export default class RegistrationScreen extends React.Component {
    static navigationOptions = {
        title: "Registration",
    };
    render() {
        return (
            <View>
                <Text>---------------Registration---------------</Text>
                <RegistartionForm />
                <Button
                    title="Register Me"
                    color="#006fb9" />
            </View>
        );
    }
}

