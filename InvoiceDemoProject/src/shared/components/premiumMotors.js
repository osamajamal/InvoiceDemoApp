import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {addWishList, deleteWishList} from '../ApiMiddleware/api';
import {colors} from '../themes/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useRtlContext} from 'react-native-easy-localization-and-rtl';
import {localizedString} from '../localization/localization';
import {accessToken} from '../Constant/Constant';
import {useDispatch} from 'react-redux';
import * as openGuestPopup from '../../redux/action/Guestpopupaction';

const PremiumMotors = props => {
  const {isRtl} = useRtlContext();
  const dispatch = useDispatch();
  const [dataSource, setDataSource] = useState(props?.data);
  const [wishStatus, setWishStatus] = useState(null);
  const [incre, setIncre] = useState(0);

  const addWishListHandle = (id, key) => {
    let carData = {
      CarID: id,
    };
    if (
      accessToken?.access_token ? accessToken?.access_token : accessToken !== ''
    ) {
      addWishList(carData)
        .then(res => {
          console.log('RESPONSE =====> ', res);
          if (res.status === 'success') {
            setWishStatus(key);
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      dispatch(openGuestPopup.openGuestPopup(true));
    }
  };
  const deleteWishListHandle = val => {
    let Data = {
      PropertyID: val?.id,
    };
    if (
      accessToken?.access_token ? accessToken?.access_token : accessToken !== ''
    ) {
      deleteWishList(Data)
        .then(res => {
          console.log('DELETE RESPONSE =====> ', res);
          if (res.status === 'success') {
            dataSource.wishlistId = 0;
            setIncre(prev => prev + 1);
            setWishStatus(null);
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      dispatch(openGuestPopup.openGuestPopup(true));
    }
  };

  return (
    <TouchableOpacity
      key={props.key}
      activeOpacity={0.7}
      onPress={props.onPress}
      style={{
        flexDirection: isRtl ? 'row-reverse' : 'row',
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginRight: isRtl ? 0 : 8,
        marginLeft: isRtl ? 12 : 0,
      }}>
      <View style={{justifyContent: 'center'}}>
        <Image
          source={{uri: dataSource?.thumbnail}}
          style={{
            resizeMode: 'cover',
            height: isRtl ? 170 : 118,
            width: isRtl ? 170 : 118,
            borderTopLeftRadius: isRtl ? 0 : 10,
            borderBottomLeftRadius: isRtl ? 0 : 10,
            borderTopRightRadius: isRtl ? 10 : 0,
            borderBottomRightRadius: isRtl ? 10 : 0,
          }}
        />
        <View style={{position: 'absolute', top: 6, left: 2}}>
          {dataSource?.isVerified ? (
            <Image
              style={{height: 20, width: 78, resizeMode: 'contain'}}
              source={require('../assests/home/verified-image.png')}
            />
          ) : null}
        </View>
        <View style={{position: 'absolute', bottom: 6, right: 6}}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              if (dataSource.wishlistId > 0 || wishStatus === props.key) {
                deleteWishListHandle(dataSource);
              } else {
                addWishListHandle(dataSource?.id, props.key);
              }
            }}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <AntDesign
              size={26}
              color={colors.blue}
              name={
                dataSource.wishlistId > 0 || wishStatus === props.key
                  ? 'heart'
                  : 'hearto'
              }
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 12}}>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 14,
            color: '#191919',
            fontFamily: 'Inter-SemiBold',
            textAlign: isRtl ? 'right' : 'left',
          }}>
          {dataSource?.title.length > 25
            ? dataSource?.title.substring(0, 25) + '...'
            : dataSource?.title}
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: '#191919',
            fontFamily: 'Inter-Medium',
            textAlign: isRtl ? 'right' : 'left',
          }}>
          {dataSource?.address.length > 40
            ? dataSource?.address.substring(0, 40) + '...'
            : dataSource?.address}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#191919',
            fontFamily: 'Inter-Bold',
            paddingVertical: 8,
            textAlign: isRtl ? 'right' : 'left',
          }}>
          {localizedString.aed} {dataSource?.price.toLocaleString('en-US')}
        </Text>
        <View style={{flexDirection: isRtl ? 'row-reverse' : 'row'}}>
          <View
            style={{
              justifyContent: 'flex-end',
              paddingRight: 8,
              flexDirection: isRtl ? 'row-reverse' : 'row',
            }}>
            <View style={{justifyContent: 'center'}}>
              <View
                style={{
                  backgroundColor: '#0989B8',
                  height: 30,
                  width: 30,
                  borderRadius: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {/* <Image
                  resizeMode="contain"
                  style={{tintColor: '#FFF'}}
                  source={require('../assests/property/cog.png')}
                /> */}
              </View>
            </View>
            <View style={{justifyContent: 'center', paddingHorizontal: 6}}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 13,
                  fontFamily: 'Inter-Bold',
                  color: '#191919',
                  textAlign: isRtl ? 'right' : 'left',
                }}>
                {dataSource?.transmission}
              </Text>
              <Text
                style={{
                  color: '#191919',
                  fontSize: 10,
                  fontFamily: 'Inter-Medium',
                  opacity: 0.7,
                  textAlign: isRtl ? 'right' : 'left',
                }}>
                {localizedString.gearsText}
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              paddingRight: 8,
              flexDirection: isRtl ? 'row-reverse' : 'row',
            }}>
            <View style={{justifyContent: 'center'}}>
              <View
                style={{
                  backgroundColor: '#0989B8',
                  height: 30,
                  width: 30,
                  borderRadius: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {/* <Image
                  resizeMode="contain"
                  style={{tintColor: '#FFF'}}
                  source={require('../assests/home/Doornew.png')}
                /> */}
              </View>
            </View>
            <View style={{justifyContent: 'center', paddingHorizontal: 6}}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 13,
                  fontFamily: 'Inter-Bold',
                  color: '#191919',
                  textAlign: isRtl ? 'right' : 'left',
                }}>
                {isRtl
                  ? dataSource?.door?.replace('أبواب', '')
                  : dataSource?.door?.replace('Doors', '')}
              </Text>
              <Text
                style={{
                  color: '#191919',
                  fontSize: 10,
                  fontFamily: 'Inter-Medium',
                  opacity: 0.7,
                  textAlign: isRtl ? 'right' : 'left',
                }}>
                {localizedString.doorsText}
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              flexDirection: isRtl ? 'row-reverse' : 'row',
            }}>
            <View
              style={{
                backgroundColor: '#0989B8',
                height: 30,
                width: 30,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AntDesign size={14} color={'#FFF'} name={'dashboard'} />
            </View>
            <View style={{justifyContent: 'center', paddingHorizontal: 6}}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 12,
                  fontFamily: 'Inter-Bold',
                  color: '#191919',
                  textAlign: isRtl ? 'right' : 'left',
                }}>
                {isRtl
                  ? dataSource?.mileage == undefined ||
                    dataSource?.mileage == '' ||
                    dataSource?.mileage == 0
                    ? '-'
                    : dataSource?.mileage?.replace('عجلات', '')
                  : dataSource?.mileage == undefined ||
                    dataSource?.mileage == '' ||
                    dataSource?.mileage == 0
                  ? '-'
                  : dataSource?.mileage?.replace('Mileage', '')}
              </Text>
              <Text
                style={{
                  color: '#191919',
                  fontSize: 10,
                  fontFamily: 'Inter-Medium',
                  opacity: 0.7,
                  textAlign: isRtl ? 'right' : 'left',
                }}>
                {localizedString.mileageText}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PremiumMotors;
