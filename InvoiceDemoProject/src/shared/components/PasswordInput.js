import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import IoIcon from '../components/Icon/IoIcon';
import {colors} from '../themes/theme';
import {useRtlContext} from 'react-native-easy-localization-and-rtl';

//...RtlStyles.containerRow,
const PasswordInput = props => {
  const {RtlStyles, isRtl} = useRtlContext();
  return (
    <View style={{marginVertical: 5}}>
      <View style={{...RtlStyles.containerRow}}>
        <Text
          style={[{
            color: '#191919',
            fontWeight: '600',
            fontFamily: 'Inter-SemiBold',
          }, props.customStyle]}>
          {props.formTitle}
        </Text>
      </View>
      <View
        style={
          props.desc
            ? Styles.containerDescription
            : [Styles.container, RtlStyles.containerRow]
        }>
        <TextInput
          placeholderTextColor={props.placeholderTextColor}
          placeholder={props.placeHolder}
          style={[Styles.textInput, props.customTextInputStyle]}
          onChangeText={text => props.onChangeText(text, props.formTitle)}
          secureTextEntry={props.secure}
          keyboardType={props.keyboardType ? props.keyboardType : 'default'}
          value={props.value}
          returnKeyType={props.returnKeyType}
          //defaultValue={text}
        />
        <TouchableOpacity onPress={props.onIconPress} style={Styles.clickStyle}>
          <IoIcon name={props.iconName} color={colors.blue} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'lightgray',
    flexDirection: 'row',
    marginTop: 5,
    //backgroundColor: 'red',
  },
  textInput: {
    marginHorizontal: 9,
    height: 50,
    width: '70%',
    color: "#FFF",
  },
  clickStyle: {
    height: 50,
    width: '22%',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  containerDescription: {
    height: 120,
    width: '100%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'lightgray',
    flexDirection: 'row',
    marginTop: 5,
  },
});
export default PasswordInput;
