import React, { Component } from 'react'
import Constants from '../CustomComponents/Constants'
import ListOfViews from '../CustomComponents/ListOfViews'

export default class MyHealthInformation extends Component {
    static navigationOptions = {
        title: "My Health Information",
    };

    render() {
        var { navigate } = this.props.navigation;

        data = Constants.pageMap.filter(function (item) {
            return item.PageKey == 'MyHealthInformation';
        });

        return (
            <ListOfViews
                List={data}
                PageNavigationReference={navigate}

            />
        );
    }
}
