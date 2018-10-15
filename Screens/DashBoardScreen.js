import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Constants from '../CustomComponents/Constants'
import ListOfViews from '../CustomComponents/ListOfViews';

export default class DashBoardScreen extends Component {
    static navigationOptions = {
        title: "DASHBOARD",
    };

    render() {
        var { navigate } = this.props.navigation;

        data = Constants.pageMap.filter(function (item) {
            return item.PageKey == 'DashBoard';
        });

        return (
            <View style={styles.LayoutStyle}>
                <View style={styles.ProfileStyle}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Image style={{
                            alignSelf: 'center',
                            height: 150,
                            width: 150,
                        }}
                            source={require('../ImageResources/User.png')}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.PatientBasicInfo}>
                        <Text style={styles.PatientName}>Leitner john</Text>
                        <Text style={styles.PatientId}>PetientId: abcd1234</Text>
                    </View>
                </View>
                <View style={styles.PatientMenuDetails}>
                    <ListOfViews
                        List={data}
                        PageNavigationReference={navigate}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    LayoutStyle: {
        flex: 1,
        flexDirection: 'column',
        margin: 10
    },
    ProfileStyle: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    PatientBasicInfo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    PatientName: {
        fontSize: 15,
        textAlign: 'center',
    },
    PatientId: {
        fontSize: 10,
        textAlign: 'center',
    },
    PatientMenuDetails: {
        flex: 4,
        margin: 10,
        justifyContent: 'center',
        //backgroundColor:'rgb(234,160,74)'
    }
})