import react, { Component } from 'react';
import { Alert } from 'react-native';

class GetInformation extends Component {
    constructor(props) {
        super(props);
    }

    GetInfo = (value) => {
        Alert.alert(value);
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

    SecondClassFunction = () => {

        Alert.alert("Second Class Function Without Argument Called");

    }

    SecondClassFunctionWithArgument = (Value) => {

        Alert.alert(Value);

    }

}
export default GetInformation;