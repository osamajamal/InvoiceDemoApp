import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {addWishList, deleteWishList} from '../ApiMiddleware/api';
import {colors} from '../themes/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useRtlContext} from 'react-native-easy-localization-and-rtl';
import {localizedString} from '../localization/localization';
import {useDispatch} from 'react-redux';
import * as openGuestPopup from '../../redux/action/Guestpopupaction';
import {accessToken} from '../Constant/Constant';

const PremiumProperties = props => {
  const {isRtl} = useRtlContext();
  const dispatch = useDispatch();
  const [dataSource, setDataSource] = useState(props?.data);
  const [wishStatus, setWishStatus] = useState(null);
  const [incre, setIncre] = useState(0);

  const addWishListHandle = (id, key) => {
    let propertyData = {
      PropertyID: id,
    };
    if (
      accessToken?.access_token ? accessToken?.access_token : accessToken !== ''
    ) {
      addWishList(propertyData)
        .then(res => {
          // console.log("RESPONSE =====> ", res);
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
          // console.log('DELETE RESPONSE =====> ', res);
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
            height: isRtl ? 140 : 118,
            width: isRtl ? 140 : 118,
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
          {dataSource?.address.length > 45
            ? dataSource?.address.substring(0, 45) + '...'
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
                <Image
                  resizeMode="contain"
                  source={require('../assests/property/bednew.png')}
                />
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
                  ? dataSource?.rooms?.replace('سرير', '')
                  : dataSource?.rooms?.includes('0') != -1
                  ? dataSource?.rooms?.replace('Beds', '')
                  : '-'}
              </Text>
              <Text
                style={{
                  color: '#191919',
                  fontSize: 10,
                  fontFamily: 'Inter-Medium',
                  opacity: 0.7,
                  textAlign: isRtl ? 'right' : 'left',
                }}>
                {localizedString.bedText}
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
                <Image
                  resizeMode="contain"
                  source={require('../assests/property/bath.png')}
                />
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
                  ? dataSource?.baths?.replace('الحمامات', '')
                  : dataSource?.rooms?.includes('0') != -1
                  ? dataSource?.baths?.replace('Baths', '')
                  : '-'}
              </Text>
              <Text
                style={{
                  color: '#191919',
                  fontSize: 10,
                  fontFamily: 'Inter-Medium',
                  opacity: 0.7,
                  textAlign: isRtl ? 'right' : 'left',
                }}>
                {localizedString.bathText}
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
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
                <Image
                  resizeMode="contain"
                  source={require('../assests/property/ruler-triangle-new.png')}
                />
              </View>
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
                  ? dataSource?.size?.replace('قدم مربع', '')
                  : dataSource?.size?.includes('0') != -1
                  ? dataSource?.size?.replace('sqft', '')
                  : '-'}
              </Text>
              <Text
                style={{
                  color: '#191919',
                  fontSize: 10,
                  fontFamily: 'Inter-Medium',
                  opacity: 0.7,
                  textAlign: isRtl ? 'right' : 'left',
                }}>
                {localizedString.sqftText}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PremiumProperties;
