import React from 'react';
import { Button, ImageBackground, TouchableHighlight, View, StyleSheet, Text, Image } from 'react-native';

export default class SplashScreen extends React.Component {
    static navigationOptions = {
        title: "HD++",
    };
    render() {
        var { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../ImageResources/BackGround.jpg')} style={styles.container}>
                    <View style={styles.formContainer}>
                        <Text style={styles.textHeader}>ggk tech</Text>
                        <Text style={[styles.textHeader, styles.textColorWhite]}>HD++</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <TouchableHighlight style={styles.touchableHightlight} underlayColor={'transparent'} onPress={() => navigate("Login", {})}>
                            <Text style={[styles.button, styles.buttonLight]}>  SIGN IN  </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.buttonContainer, styles.touchableHightlight]} underlayColor={'transparent'} onPress={() => navigate("Register", {})}>
                            <Text style={[styles.button, styles.buttonLight]}> REGISTER </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.container}>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textHeader: {
        color: '#5f2d03',
        flex: 1,
        fontWeight: 'bold',
        fontSize: 40
    },
    textColorWhite: {
        color: '#c74b16',
        fontSize: 20
    },
    formContainer: {
        flex: 1,
        margin: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        margin: 20,
        alignItems: 'center',
        backgroundColor: '#c64a15',
    },
    imageContainer: {
        resizeMode: 'contain',
        flex: 1
    },
    touchableHightlight: {
        borderRadius: 20
    },
    button: {
        textAlign: 'center',
        padding: 10,
        borderRadius: 20,
        fontSize: 14,
        backgroundColor: '#c64a15',

    },
    buttonLight: {
        borderWidth: 1,
        borderColor: '#FFFFFF',
        color: '#FFFFFF'
    }
})
