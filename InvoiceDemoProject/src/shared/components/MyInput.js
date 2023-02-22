import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';

import IoIcon from '../components/Icon/IoIcon';
import {colors} from '../themes/theme';
import {useRtlContext} from 'react-native-easy-localization-and-rtl';
const MyInput = props => {
  const {RtlStyles, isRtl} = useRtlContext();
  return (
    <View style={{marginVertical: 0, ...props.container}}>
      <Text
        numberOfLines={1}
        style={[
          {
            color: '#191919',
            fontFamily: 'Inter-SemiBold',
            textAlign: isRtl ? 'right' : 'left',
          },
          props.customStyle,
        ]}>
        {props.formTitle}
      </Text>
      <View
        style={[
          props.desc ? Styles.containerDescription : Styles.container,
          // props.container,
        ]}>
        {props.number && props.number && (
          <View
            style={{
              width: '14%',
              //backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 9,
              marginTop: 3,
            }}>
            <Text
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF',
                textAlign: 'left',
                ...props.customStyle,
              }}>
              +971
            </Text>
          </View>
        )}
        <TextInput
          //onPressOut={Keyboard.dismiss()}
          multiline={props.multiline}
          returnKeyType={props.returnKeyType}
          maxLength={props.maxlength ? props.maxlength : 50000}
          placeholderTextColor={props.placeholderTextColor}
          placeholder={props.placeHolder}
          style={[
            {
              ...Styles.textInput,
              textAlign:
                props.number && props.number
                  ? 'left'
                  : isRtl
                  ? 'right'
                  : 'left',
              marginHorizontal: isRtl ? -5 : 5,
              color: '#000',
            },
            props.customTextInputStyle,
          ]}
          onChangeText={text => {
            props.onChange(text, props.formTitle);
          }}
          secureTextEntry={props.secureText ? true : false}
          keyboardType={props.keyboardType ? props.keyboardType : 'default'}
          value={props.value}
          editable={props.editable}
          // pointerEvents={props.pointerEvents}
          onFocus={props.onFocus ? props.onFocus : null}
        />
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    //backgroundColor: 'red',
    //flexDirection: 'row',
  },
  textInput: {
    // marginHorizontal: 2,
    // height: '80%',
    marginHorizontal: 5,
    width: '100%',

    // backgroundColor: 'red',
    // justifyContent: 'center',
    //  alignItems: 'center',
  },
  clickStyle: {
    height: 50,
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDescription: {
    height: 120,
    width: '100%',
    borderRadius: 10,
    marginTop: 4,
    borderWidth: 2,
    borderColor: 'lightgray',
    //flexDirection: 'row',
    //marginTop: 4,
    // backgroundColor: 'red',
  },
});
export default MyInput;
