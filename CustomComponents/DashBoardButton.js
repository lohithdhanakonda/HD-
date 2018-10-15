import React, { Component } from 'react';
import { TouchableHighlight, View, StyleSheet, Text, Image } from 'react-native';

class DashBoardButton extends Component {
    getProfile = async () => {

        var { navigate } = this.props.navigation;
        navigate('ProfileInformation', {});
        //     fetch('http://172.16.0.221:61758/fhir/Patient?Patient=1  ', {
        //       method: 'GET',
        //         headers: new Headers({
        //             'Authorization': 'Bearer '+btoa('username:password'), 
        //             'Content-Type': 'application/octet-stream; charset=utf-8'
        //           }), 
        //         })
        //       .then((response) => {
        //           if(response.status==200){
        //         this.setState({isLoginSuccess:true});
        //       }else{
        //         this.setState({isLoginSuccess:false});
        //       }
        //       response.json()})
        //       .then((responseJson) => {
        //           if(this.state.isLoginSuccess){
        //    Alert.alert(JSON.stringify(responseJson));
        //    var {navigate} = this.props.navigation;
        //    navigate('ProfileInformation', );
        // }else{
        //    Alert.alert("Login failed");
        // }
        //       })
        //       .catch((error) => {
        //         console.error(error);
        //       });
    }

    render() {
        return (
            <TouchableHighlight style={[styles.touchableHightlight, styles.buttonLight]} underlayColor={'transparent'} onPress={this.props.onPress}>
                <View style={styles.container}>
                    <Image style={styles.imageStyle} source={{ uri: this.props.uri }} resizeMode="contain" />
                    <Text style={[styles.button]}>{this.props.Text}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

export default DashBoardButton;
const styles = StyleSheet.create({
    touchableHightlight: {
        marginTop: 10,
        marginHorizontal: 30,
        borderRadius: 20
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        flex: 1,
        width: 15,
        height: 15,
        padding: 10
    },
    button: {
        flex: 6,
        padding: 10,
        borderRadius: 20,
        fontSize: 14
    },
    buttonLight: {
        borderWidth: 1,
        borderColor: '#5f2d03',
    },
})

