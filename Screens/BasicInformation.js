import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import KeyValueView from '../CustomComponents/KeyValueView'
import Constants from '../CustomComponents/Constants'


export default class BasicInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
        }
    }
    static navigationOptions = {
        title: "Your Profile",
    };

    render() {
            fetch('http://172.16.0.221:61758/fhir/Patient?Patient=1', {
                method: 'GET',
                headers: new Headers({
                    'Authorization': 'Bearer ' + Constants.access_token,
                    'Content-Type': 'application/octet-stream; charset=utf-8'
                }),
            })
                .then(response => 
                    response.json())
                .then((responseJson) => {
                    this.setState({
                        result: [{ 'Key': 'Name', 'Value': responseJson.entry[0].resource.name[0].family + " " + responseJson.entry[0].resource.name[0].given },
                        { 'Key': 'Patient ID', 'Value': responseJson.entry[0].resource.id },
                        { 'Key': 'Gender', 'Value': responseJson.entry[0].resource.gender },
                        { 'Key': 'Birth Date', 'Value': responseJson.entry[0].resource.birthDate },
                        { 'Key': 'Address', 'Value': responseJson.entry[0].resource.address[0].line },
                        ]
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
       
        let info = this.state.result.map((item, index) => {
            return (
                <View style={styles.ProfileContainer}>
                    <KeyValueView key={index} title={item.Key} Text={item.Value} />
                </View>);
        });

        return (
            <View >
                {info}
            </View>
        );
    }
}

const styles = StyleSheet.create({

    ProfileContainer: {
        height: 15,
        margin: 10,
        flexDirection: 'column',
        justifyContent: 'center',
    },
})