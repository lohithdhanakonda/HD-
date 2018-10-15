import React, { Component } from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView, ImageBackground, TouchableHighlight, TextInput, Alert } from 'react-native'
import Constants from '../CustomComponents/Constants'

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: "Login",
    };
    constructor(props) {
        super(props)

        this.state = {
            username: 'anewman@test.com',
            password: 'Password123',
            isLoginSuccess: false,
        }
    }

    handlePress = async () => {
        var details = {
            'userName': this.state.username,
            'password': this.state.password,
            'grant_type': 'password'
        };

        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch('http://172.16.0.221:61758/authtoken', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
        })
            .then((response) => {
                if (response.status == 200) {
                    this.setState({ isLoginSuccess: true });
                } else {
                    this.setState({ isLoginSuccess: false });
                }
                return response.json()
            })
            .then((responseJson) => {
                if (this.state.isLoginSuccess) {
                    Constants.access_token = responseJson.access_token;
                    var { navigate } = this.props.navigation;
                    navigate('DashBoardScreen', {});
                } else {
                    alert("Login failed");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        var { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <ImageBackground source={require('../ImageResources/BackGround.jpg')} style={styles.container}>
                    <View style={styles.formTitleContainer}>
                        <Text style={styles.textHeader}>ggk tech</Text>
                        <Text style={[styles.textHeader, styles.textColorBlack]}>HD++</Text>
                    </View>
                    <View style={{ flex: 7 }}>
                        <Text style={styles.questionHeader}>USERNAME</Text>
                        <TextInput
                            placeholderTextColor='#cacaca'
                            style={styles.input}
                            placeholder="E.g. Johndo@gmail.com"
                            returnKeyType="next"
                            defaultValue='anewman@test.com'
                            onSubmitEditing={() => this.passWordInput.focus()}
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(text) => this.setState({ username: text })}
                        />
                        <Text style={styles.questionHeader}>PASSWORD</Text>
                        <TextInput
                            placeholderTextColor='#cacaca'
                            style={styles.input}
                            placeholder="**********"
                            defaultValue='Password123'
                            secureTextEntry
                            onChangeText={(text) => this.setState({ password: text })}
                            returnKeyType="go"
                            ref={(input) => this.passWordInput = input}
                        />
                        <Text style={styles.textHeading} onPress={() => navigate('ForgotPassWordPatientID')}> FORGOT PASSWORD? </Text>

                        <TouchableHighlight style={styles.touchableHightlight} underlayColor={'transparent'} onPress={() => this.handlePress()}>
                            <Text style={[styles.button, styles.buttonLight]}>   Login   </Text>
                        </TouchableHighlight>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        height: 40,
        paddingHorizontal: 10,
        marginTop: 10,
        marginHorizontal: 30,
        textAlign: 'left'
    },

    questionHeader: {
        color: '#5f2d03',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'left',
        marginTop: 30,
        marginHorizontal: 30
    },
    textColorBlack: {
        color: '#c74b16',
        fontSize: 20
    },
    touchableHightlight: {
        marginTop: 10,
        marginHorizontal: 30,
        borderRadius: 20
    },
    button: {
        textAlign: 'center',
        padding: 10,
        borderRadius: 20,
        fontSize: 14
    },
    buttonLight: {
        borderWidth: 1,
        borderColor: '#5f2d03',
        color: '#5f2d03'
    },
    formTitleContainer: {
        flex: 1,
        margin: 30,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {
        color: '#5f2d03',
        flex: 1,
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    textHeading: {
        color: '#5f2d03',
        fontWeight: 'bold',
        fontSize: 10,
        margin: 10,
        marginHorizontal: 30,
        textAlign: 'right'
    }
})