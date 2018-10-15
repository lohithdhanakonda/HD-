import React, { Component } from 'react';
import { Button, ImageBackground, TouchableHighlight, View, StyleSheet, Text, Image, TextInput } from 'react-native';

class ResetPassword extends Component {
    static navigationOptions = {
        title: "",
    };
    render() {
        var { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ImageBackground source={{ uri: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/yI9FRzo/animated-collapsing-crumbling-wall-of-white-boxes-with-reflective-surface-2-transparent-background-alpha-channel-embedded-with-hd-png-file-good-for-video-transition-or-similar-effects-very-easy-to-put-any-video-or-image-in-the-background_v1ie0fg7__S0000.jpg' }} style={styles.container}>
                    <View>
                        <View style={styles.formTitleContainer}>
                            <Text style={styles.textHeader}>ggk tech</Text>
                            <Text style={[styles.textHeader, styles.textColorBlack]}>HD++</Text>
                        </View>
                        <Text style={styles.textHeading}>-----------FORGOT PASSWORD-----------</Text>
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={styles.questionHeader}>ENTER PASSWORD</Text>
                        <TextInput
                            placeholder='Enter here'
                            placeholderTextColor='#cacaca'
                            style={styles.input}
                        />
                        <Text style={styles.questionHeader}>RE-TYPE PASSWORD</Text>
                        <TextInput
                            placeholder='Enter here'
                            placeholderTextColor='#cacaca'
                            style={styles.input}
                        />
                        <TouchableHighlight style={styles.touchableHightlight} underlayColor={'transparent'} onPress={() => navigate('Login')}>
                            <Text style={[styles.button, styles.buttonLight]}>   SUBMIT   </Text>
                        </TouchableHighlight>
                        <Text style={{ color: '#cacaca', paddingHorizontal: 30, marginTop: 10 }}>Note:</Text>
                        <Text style={{ color: '#cacaca', paddingHorizontal: 30 }}>. OTP - one time verification code</Text>
                        <Text style={{ color: '#cacaca', paddingHorizontal: 30 }}>. original account caretion date and member data will remain the same </Text>
                        <Text style={{ color: '#cacaca', paddingHorizontal: 30 }}>. Previous activities and service requests under your old account will remain the same </Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default ResetPassword;

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
        color: '#000000',
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
        textAlign: 'center'
    }
})