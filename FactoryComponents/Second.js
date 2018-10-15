import React, { Component } from 'react';
import { StyleSheet, View, Alert, Platform, Button } from 'react-native';

class Second extends Component {

  SecondClassFunction = () => {

    Alert.alert("Second Class Function Without Argument Called");

  }

  SecondClassFunctionWithArgument = (Value) => {

    Alert.alert(Value);

  }
  GetInfo = (Value) => {
    Alert.alert(Value);
    const product1 = { 'Key': 'Patient Name', 'Value': 'James Doe' };
    const product2 = { 'Key': 'MRN', 'Value': '12354abc' };
    const product3 = { 'Key': 'Gender', 'Value': 'Male' };
    dataSource = [];
    dataSource.push(product1);
    dataSource.push(product2);
    dataSource.push(product3);
    Alert.alert('END');
    return dataSource;
  }
}
export default Second;