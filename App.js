import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createStackNavigator ,
} from 'react-navigation';
import SplashScreen from './Screens/SplashScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import ForgotPasswordGetOTP from './Screens/ForgotPasswordGetOTP';
import ForgotPassWordPatientID from './Screens/ForgotPassWordPatientID';
import ResetPassword from './Screens/ResetPassword';
import ConfirmOrResendOTP from './Screens/ConfirmOrResendOTP';
import DashBoardScreen from './Screens/DashBoardScreen';
import ProfileInformation from './DashBoardScreens/ProfileInformation';
import BasicInformation from './Screens/BasicInformation';
import MyHealthInformation from './DashBoardScreens/MyHealthInformation';
import Vitals from './MyHealthInformationScreens/Vitals';
import MedicalConditions from './MyHealthInformationScreens/MedicalConditions';
import ProviderNotes from './MyHealthInformationScreens/ProviderNotes';
import Allergies from './MyHealthInformationScreens/Allergies';
import ListOfViews from './CustomComponents/ListOfViews';

const Navigation = createStackNavigator ({
  Splash: { screen: SplashScreen},
  Register: {screen: RegistrationScreen},
  Login: {screen: LoginScreen},
  ConfirmOrResendOTP:{screen: ConfirmOrResendOTP},
  ForgotPasswordGetOTP:{screen: ForgotPasswordGetOTP},
  ResetPassword:{screen: ResetPassword},
  ForgotPassWordPatientID:{screen: ForgotPassWordPatientID},
  DashBoardScreen:{screen: DashBoardScreen},
  ProfileInformation:{screen: ProfileInformation},
  BasicInformation:{screen: BasicInformation},
  MyHealthInformation:{screen: MyHealthInformation},
  Vitals:{screen: Vitals},
  MedicalConditions:{screen: MedicalConditions},
  ProviderNotes:{screen: ProviderNotes},
  Allergies:{screen: Allergies},
  ListOfViews:{screen: ListOfViews}
})

export default Navigation;