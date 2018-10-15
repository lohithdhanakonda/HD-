import React, { Component } from 'react'
import Constants from '../CustomComponents/Constants'
import ListOfViews from '../CustomComponents/ListOfViews'

export default class MedicalConditions extends Component {
    static navigationOptions = {
        title: "MedicalConditions",
    };

    render() {
        var { navigate } = this.props.navigation;

        data = Constants.pageMap.filter(function (item) {
            return item.PageKey == 'MedicalConditions';
        });

        return (
            <ListOfViews
                List={data}
                PageNavigationReference={navigate}
            />
        );
    }
}
