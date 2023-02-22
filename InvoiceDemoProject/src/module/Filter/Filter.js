/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import FlatButton from '../../shared/components/FlatButton';
import * as Filteraction from '../../redux/action/Filteraction';

import {useSelector, useDispatch} from 'react-redux';
import {localizedString} from '../../shared/localization/localization';

import {languagee} from '../../shared/Constant/Constant';
import {useRtlContext} from 'react-native-easy-localization-and-rtl';

const data = [
  {label: 'Lowest Invoice Price', value: '4'},
  {label: 'Highest Invoice  Price', value: '3'},
];

const InvoiceStatusdata = [
  {label: 'Paid Status', value: '4'},
  {label: 'UnPaid Status', value: '3'},
];

const Filter = ({navigation, route}) => {
  const {isRtl} = useRtlContext();
  const {name} = route.params;

  const dispatch = useDispatch();
  const [buttonLoader, setButtonLoader] = useState(false);
  const [dropdown, setDropdown] = useState('4');
  const [categorydropdown, setcategoryDropdown] = useState('4');

  const resetInvoiceFilter = () => {
    // Reset Filters
    dispatch(Filteraction.setInvoiceFilter(null));
    setTimeout(() => {
      navigation.navigate('InvoiceListting', {type: 'Invoice'});
    }, 100);
  };

  const SetInvoiceFilter = () => {
    // Set Filters
    dispatch(
      Filteraction.setInvoiceFilter({
        highestToLow: dropdown == 4 ? false : true,
        Status: categorydropdown == 4 ? 'Paid' : 'UnPaid',
      }),
    );
    setTimeout(() => {
      navigation.navigate('InvoiceListting', {type: 'Invoice'});
    }, 100);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: 46,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flex: 1, justifyContent: 'center', marginLeft: 14}}>
          <Icon
            name="arrow-back"
            size={20}
            color="#191919"
            onPress={() =>
              name === 'Property'
                ? navigation.navigate('PropertyFilter')
                : navigation.navigate('CarFilter')
            }
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text
            style={{
              color: '#191919',
              fontSize: 20,
              fontFamily: 'Inter-Bold',
              textAlign: 'center',
            }}>
            {localizedString.filterText}
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}></View>
      </View>
      <ScrollView
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}>
        <View
          style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <View style={{marginVertical: 12, marginHorizontal: 20}}>
              <Text
                style={{
                  color: '#191919',
                  fontSize: 15,
                  fontFamily: 'Inter-Medium',
                }}>
                {localizedString.sortByText}
              </Text>
            </View>
            <ScrollView
              horizontal
              style={{marginHorizontal: 20}}
              showsHorizontalScrollIndicator={false}>
              {languagee !== 'ar'
                ? data?.map((val, key) => {
                    return (
                      <TouchableOpacity
                        key={key}
                        onPress={() => {
                          //     alert(val?.value);
                          setDropdown(val?.value);
                        }}
                        style={{
                          backgroundColor:
                            dropdown === val?.value ? '#0989B826' : null,
                          borderColor:
                            dropdown === val?.value ? '#0989B8' : '#19191933',
                          ...styles.slideBoxStyle,
                        }}>
                        <View style={{justifyContent: 'center'}}>
                          <Text
                            style={{
                              color:
                                dropdown === val?.value ? '#0989B8' : '#A3A3A3',
                              fontSize: 13,
                              fontFamily: 'Inter-Medium',
                            }}>
                            {val?.label}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })
                : null}
            </ScrollView>
            <View
              style={{marginBottom: 12, marginTop: 26, marginHorizontal: 20}}>
              <Text
                style={{
                  color: '#191919',
                  fontSize: 15,
                  fontFamily: 'Inter-Medium',
                }}>
                {localizedString.categoriesText}
              </Text>
            </View>
            <ScrollView
              horizontal
              style={{marginHorizontal: 20}}
              showsHorizontalScrollIndicator={false}>
              {languagee !== 'ar'
                ? InvoiceStatusdata?.map((val, key) => {
                    return (
                      <TouchableOpacity
                        key={key}
                        onPress={() => {
                          //     alert(val?.value);
                          setcategoryDropdown(val?.value);
                        }}
                        style={{
                          backgroundColor:
                            categorydropdown === val?.value
                              ? '#0989B826'
                              : null,
                          borderColor:
                            categorydropdown === val?.value
                              ? '#0989B8'
                              : '#19191933',
                          ...styles.slideBoxStyle,
                        }}>
                        <View style={{justifyContent: 'center'}}>
                          <Text
                            style={{
                              color:
                                categorydropdown === val?.value
                                  ? '#0989B8'
                                  : '#A3A3A3',
                              fontSize: 13,
                              fontFamily: 'Inter-Medium',
                            }}>
                            {val?.label}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })
                : null}
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 0,
          bottom: 0,
          width: '100%',
          height: 140,
        }}>
        <FlatButton
          label={localizedString.applyfilterText}
          buttonStyle={{
            width: '81%',
            paddingVertical: 14,
            backgroundColor: '#0989B8',
            borderRadius: 7,
          }}
          loading={buttonLoader}
          labelStyle={{textTransform: 'uppercase', fontSize: 16}}
          onPress={() => SetInvoiceFilter()}
        />
        <TouchableOpacity
          style={{paddingTop: 8, paddingBottom: 24}}
          onPress={() => resetInvoiceFilter()}>
          <Text
            style={{
              color: '#000',
              fontSize: 14,
              fontFamily: 'Inter-Bold',
            }}>
            {localizedString.clearAllText}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#F6F8F9',
  },
  dropdown: {
    borderColor: '#19191933',
    height: 48,
    borderRadius: 100,
    borderWidth: 1,
    marginTop: 6,
    width: '100%',
  },
  icon: {
    marginRight: 5,
    width: 18,
    height: 18,
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  slideBoxStyle: {
    flexDirection: 'row',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: 'auto',
    borderRadius: 100,
    marginRight: 12,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#191919',
  },
  modalView: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 17,
    paddingVertical: 20,
    height: Dimensions.get('window').height / 1.2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    color: '#191919',
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    textTransform: 'capitalize',
  },
});

export default Filter;
