import React, { Component } from 'react'
import Constants from '../CustomComponents/Constants'
import ListOfViews from '../CustomComponents/ListOfViews'

export default class ProfileInformation extends Component {
    static navigationOptions = {
        title: "Profile Information",
    };

    render() {
        var { navigate } = this.props.navigation;

        data = Constants.pageMap.filter(function (item) {
            return item.PageKey == 'ProfileInformation';
        });

        return (
            <ListOfViews
                List={data}
                PageNavigationReference={navigate}

            />
        );
    }
}
