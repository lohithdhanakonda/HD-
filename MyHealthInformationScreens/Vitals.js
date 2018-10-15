import React, { Component } from 'react'
import Constants from '../CustomComponents/Constants'
import ListOfViews from '../CustomComponents/ListOfViews'

export default class Vitals extends Component {
    static navigationOptions = {
        title: "Vitals",
    };

    render() {
        var { navigate } = this.props.navigation;

        data = Constants.pageMap.filter(function (item) {
            return item.PageKey == 'Vitals';
        });

        return (
            <ListOfViews
                List={data}
                PageNavigationReference={navigate}
            />
        );
    }
}
