import React, { Component } from 'react'
import Constants from '../CustomComponents/Constants'
import ListOfViews from '../CustomComponents/ListOfViews'

export default class Allergies extends Component {
    static navigationOptions = {
        title: "Allergies",
    };

    render() {
        var { navigate } = this.props.navigation;

        data = Constants.pageMap.filter(function (item) {
            return item.PageKey == 'Allergies';
        });

        return (
            <ListOfViews
                List={data}
                PageNavigationReference={navigate}
            />
        );
    }
}
