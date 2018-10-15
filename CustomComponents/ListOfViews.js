import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import DashBoardButton from '../CustomComponents/DashBoardButton'
import Navigation from '../App';

export default class ListOfViews extends Component {
    render() {
        var navigate = this.props.PageNavigationReference;

        var data = this.props.List.map(function ({ PageKey, ItemKey, ItemValue, Icon}) {
            return (
                <DashBoardButton
                    uri= {Icon}
                    Text={ItemValue}
                    onPress={() => navigate(ItemKey, {})}
                />)
        });

        return (
            <View style={Styles.ListViews}>
                {data}

            </View>
        );
    }
}

const Styles = StyleSheet.create({
    ListViews: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    }
});