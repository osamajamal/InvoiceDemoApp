/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
//import liraries
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  StatusBar,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import Text from '../../shared/components/DerivedText';
import FlatButton from '../../shared/components/FlatButton';
import MyInput from '../../shared/components/MyInput';
import {useSelector, useDispatch} from 'react-redux';
import * as Filteraction from '../../redux/action/Filteraction';
import {colors} from '../../shared/themes/theme';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
// create a component
const CreateInvoice = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    BankName: '',
    AccountName: '',
    CustomerName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    Country: '',
    City: '',
    DocumentId: '',
    DocumentName: '',
    InvoiceId: '',
    InvoiceDescripation: '',
    InvoiceTitle: '',
    TrackNo: '',
    Status: '',
    Price: '',
    InvoiceDate: '',
  });

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    setState(prevState => ({
      ...prevState,
      InvoiceDate: date,
    }));
    hideDatePicker();
  };

  function Validation() {
    if (email === '' || password === '') {
      seterrorValidation('Fields are Empty');
      setIspopupvisble(true);
      return false;
    }
    var emailPattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    );

    if (emailPattern.test(email) === false) {
      seterrorValidation('Email is Not Correct');
      setIspopupvisble(true);
      return false;
    }

    return true;
  }
  const onChangeText = (value, name) => {
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(JSON.stringify(state));
  }, [state]);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''}>
      <ImageBackground
        source={require('../../shared/assests/splash/th.jpg')}
        style={{height: '100%'}}>
        <StatusBar barStyle={'light-content'} backgroundColor={'black'} />

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ScrollView>
            <View style={styles.topContainer}></View>

            <Text style={styles.buttonText}>Create Invoice</Text>
            <View style={styles.parentContainer}>
              <View style={styles.contentContainer}>
                <View style={styles.inputContainer}>
                  <MyInput
                    formTitle={'BankName'}
                    placeHolder={'Enter Bank Name'}
                    keyboardType="email-address"
                    onChange={onChangeText}
                    returnKeyType={'next'}
                    customStyle={{color: '#FFF'}}
                    customTextInputStyle={{color: '#FFF'}}
                    placeholderTextColor={'#FFF'}
                    container={{width: '48%'}}
                  />
                  <MyInput
                    formTitle={'AccountName'}
                    placeHolder={'Enter your account no'}
                    keyboardType="email-address"
                    onChange={onChangeText}
                    returnKeyType={'next'}
                    customStyle={{color: '#FFF'}}
                    customTextInputStyle={{color: '#FFF'}}
                    placeholderTextColor={'#FFF'}
                    container={{width: '48%'}}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <MyInput
                    formTitle={'CustomerName'}
                    placeHolder={'Enter First Name'}
                    keyboardType="email-address"
                    onChange={onChangeText}
                    returnKeyType={'next'}
                    customStyle={{color: '#FFF'}}
                    customTextInputStyle={{color: '#FFF'}}
                    placeholderTextColor={'#FFF'}
                    container={{width: '48%'}}
                  />
                  <MyInput
                    formTitle={'LastName'}
                    placeHolder={'Email'}
                    keyboardType="email-address"
                    onChange={onChangeText}
                    returnKeyType={'next'}
                    customStyle={{color: '#FFF'}}
                    customTextInputStyle={{color: '#FFF'}}
                    placeholderTextColor={'#FFF'}
                    container={{width: '48%'}}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <MyInput
                    formTitle={'Email'}
                    placeHolder={'Enter Email'}
                    keyboardType="email-address"
                    onChange={onChangeText}
                    returnKeyType={'next'}
                    customStyle={{color: '#FFF'}}
                    customTextInputStyle={{color: '#FFF'}}
                    placeholderTextColor={'#FFF'}
                    container={{width: '48%'}}
                  />
                  <MyInput
                    formTitle={'PhoneNumber'}
                    placeHolder={'Enter Phone number'}
                    keyboardType="email-address"
                    onChange={onChangeText}
                    returnKeyType={'next'}
                    customStyle={{color: '#FFF'}}
                    customTextInputStyle={{color: '#FFF'}}
                    placeholderTextColor={'#FFF'}
                    container={{width: '48%'}}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <MyInput
                    formTitle={'Country'}
                    placeHolder={'Enter Country name'}
                    keyboardType="email-address"
                    onChange={onChangeText}
                    returnKeyType={'next'}
                    customStyle={{color: '#FFF'}}
                    customTextInputStyle={{color: '#FFF'}}
                    placeholderTextColor={'#FFF'}
                    container={{width: '48%'}}
                  />
                  <MyInput
                    formTitle={'City'}
                    placeHolder={'Enter City name'}
                    keyboardType="email-address"
                    onChange={onChangeText}
                    returnKeyType={'next'}
                    customStyle={{color: '#FFF'}}
                    customTextInputStyle={{color: '#FFF'}}
                    placeholderTextColor={'#FFF'}
                    container={{width: '48%'}}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <MyInput
                    formTitle={'DocumentId'}
                    placeHolder={'Enter Document Id'}
                    keyboardType="email-address"
                    onChange={onChangeText}
                    returnKeyType={'next'}
                    customStyle={{color: '#FFF'}}
                    customTextInputStyle={{color: '#FFF'}}
                    placeholderTextColor={'#FFF'}
                    container={{width: '48%'}}
                  />
                  <MyInput
                    formTitle={'DocumentName'}
                    placeHolder={'Enter Document Name'}
                    keyboardType="email-address"
                    onChange={onChangeText}
                    returnKeyType={'next'}
                    customStyle={{color: '#FFF'}}
                    customTextInputStyle={{color: '#FFF'}}
                    placeholderTextColor={'#FFF'}
                    container={{width: '48%'}}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <MyInput
                    formTitle={'InvoiceId'}
                    placeHolder={'Enter Invoice Id'}
                    keyboardType="email-address"
                    onChange={onChangeText}
                    returnKeyType={'next'}
                    customStyle={{color: '#FFF'}}
                    customTextInputStyle={{color: '#FFF'}}
                    placeholderTextColor={'#FFF'}
                    container={{width: '48%'}}
                  />
                  <MyInput
                    formTitle={'InvoiceDescripation'}
                    placeHolder={'Enter Invoice Descripation'}
                    keyboardType="email-address"
                    onChange={onChangeText}
                    returnKeyType={'next'}
                    customStyle={{color: '#FFF'}}
                    customTextInputStyle={{color: '#FFF'}}
                    placeholderTextColor={'#FFF'}
                    container={{width: '48%'}}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <MyInput
                    formTitle={'InvoiceTitle'}
                    placeHolder={'Enter Invoice Title'}
                    keyboardType="email-address"
                    onChange={onChangeText}
                    returnKeyType={'next'}
                    customStyle={{color: '#FFF'}}
                    customTextInputStyle={{color: '#FFF'}}
                    placeholderTextColor={'#FFF'}
                    container={{width: '48%'}}
                  />
                  <MyInput
                    formTitle={'Price'}
                    placeHolder={'Enter Price'}
                    keyboardType="email-address"
                    onChange={onChangeText}
                    returnKeyType={'next'}
                    customStyle={{color: '#FFF'}}
                    customTextInputStyle={{color: '#FFF'}}
                    placeholderTextColor={'#FFF'}
                    container={{width: '48%'}}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <MyInput
                    formTitle={'TrackNo'}
                    placeHolder={'Enter Invoice Number'}
                    keyboardType="email-address"
                    onChange={onChangeText}
                    returnKeyType={'next'}
                    customStyle={{color: '#FFF'}}
                    customTextInputStyle={{color: '#FFF'}}
                    placeholderTextColor={'#FFF'}
                    container={{width: '48%'}}
                  />
                  <MyInput
                    formTitle={'Status'}
                    placeHolder={'Enter  Status'}
                    keyboardType="email-address"
                    onChange={onChangeText}
                    returnKeyType={'next'}
                    customStyle={{color: '#FFF'}}
                    customTextInputStyle={{color: '#FFF'}}
                    placeholderTextColor={'#FFF'}
                    container={{width: '48%'}}
                  />
                </View>

                <FlatButton
                  label="Selecte Invoice Date"
                  // eslint-disable-next-line react-native/no-inline-styles
                  buttonStyle={{
                    backgroundColor: '#0989B8',
                    paddingVertical: 14,
                  }}
                  labelStyle={{fontSize: 14, textTransform: 'uppercase'}}
                  onPress={showDatePicker}
                />

                <FlatButton
                  label="Create Invoice"
                  buttonStyle={{
                    backgroundColor: '#0989B8',
                    paddingVertical: 14,
                  }}
                  labelStyle={{fontSize: 14, textTransform: 'uppercase'}}
                  onPress={() => {
                    dispatch(Filteraction.createInvoice(state));
                    navigation.navigate('InvoiceListting');
                  }}
                />
              </View>
            </View>
          </ScrollView>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.authBgGray,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  parentContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    // height: '10%',
    marginTop: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentContainer: {
    width: '95%',
    marginTop: 12,
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 6,
    //backgroundColor: 'red',
  },
  bottomContainer: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  passworddiv: {},
  backgroundImg: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 21,
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 23,
  },
});

export default CreateInvoice;
