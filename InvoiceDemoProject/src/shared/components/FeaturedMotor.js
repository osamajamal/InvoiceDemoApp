//import liraries
import React, {useState, memo, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {localizedString} from '../localization/localization';
import {useRtlContext} from 'react-native-easy-localization-and-rtl';
import FastImage from 'react-native-fast-image';
import {colors} from '../themes/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {addWishList, deleteWishList} from '../ApiMiddleware/api';
import {SliderBox} from 'react-native-image-slider-box';
import Entypo from 'react-native-vector-icons/Entypo';
import {accessToken, _setLanguage} from '../Constant/Constant';
import {useDispatch, useSelector} from 'react-redux';
import * as openGuestPopup from '../../redux/action/Guestpopupaction';
import SuccessFailModel from './SuccessFailModel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import ImageLoad from 'react-native-image-placeholder';

// create a component
const FeaturedMotor = props => {
  //console.log(props?.wishStatus);
  const navigation = useNavigation();
  const {RtlStyles, isRtl, setLanguage} = useRtlContext();
  const dispatch = useDispatch();
  let popstate = useSelector(state => state.GuestPopup.popup);
  const [bannerImages, setbannerImages] = useState([
    props.item?.thumbnail,
    ...props.item?.images,
  ]);
  const [dataSource, setDataSource] = useState(props.item);

  const onTrigger = data => {
    props?.parentCallback && props.parentCallback(data);
  };
  // const addWishListHandle = (id, key) => {
  //   let carData = {
  //     CarID: id,
  //   };
  //   console.log("accessToken?.access_token ====> ", accessToken?.access_token);
  //   if (accessToken?.access_token ? accessToken?.access_token : accessToken !== "") {
  //     addWishList(carData)
  //     .then(res => {
  //       console.log("RESPONSE =====> ", res);
  //       if (res.status === 'success') {
  //         setWishStatus(key);
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   } else {
  //     dispatch(openGuestPopup.openGuestPopup(true));
  //   }
  // };
  // const deleteWishListHandle = (val) => {
  //   let Data = {
  //     CarID: val?.id,
  //   };
  //   console.log("accessToken?.access_token ====> ", accessToken?.access_token);
  //   if (accessToken?.access_token ? accessToken?.access_token : accessToken !== "") {
  //     deleteWishList(Data)
  //     .then(res => {
  //       console.log("DELETE RESPONSE =====> ", res);
  //       if (res.status === 'success') {
  //         dataSource.wishlistId = 0;
  //         setIncre(prev => prev + 1);
  //         setWishStatus(null);sta
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   } else {
  //     dispatch(openGuestPopup.openGuestPopup(true));
  //   }
  // };
  const scrollViewRef = useRef(null);
  const nextPageHandle = index => {
    const nextIndex = index + 1;
    scrollViewRef.current?.scrollTo({
      x:
        props.screen === 'Home'
          ? 290 * nextIndex
          : Dimensions.get('window').width * nextIndex * 0.93,
      animated: true,
    });
  };
  const prevoiusPageHandle = index => {
    const previousIndex = index - 1;
    scrollViewRef.current?.scrollTo({
      x:
        props.screen === 'Home'
          ? 280 * previousIndex
          : Dimensions.get('window').width * previousIndex * 0.93,
      animated: true,
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onClick}
      style={{
        ...styles.container,
        ...props.conatinerStyle,
      }}>
      <ScrollView
        horizontal
        ref={scrollViewRef}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}>
        {props?.item?.images?.map((val, key) => {
          return (
            <View key={key} style={{position: 'relative', height: 226}}>
              {/* <Image
                source={{uri: val}}
                style={{
                  height: '100%',
                  width:
                    props.screen === 'Home'
                      ? 290
                      : Dimensions.get('window').width * 0.93,
                  resizeMode: 'cover',
                  borderRadius: 16,
                }}
              /> */}
              <ImageLoad
                source={{uri: val}}
                style={{
                  height: '100%',
                  width:
                    props.screen === 'Home'
                      ? 290
                      : Dimensions.get('window').width * 0.93,
                  resizeMode: 'cover',
                  borderRadius: 16,
                }}
                borderRadius={16}
                isShowActivity={false}
                loadingStyle={{size: 'small', color: 'blue'}}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  borderRadius: 16,
                  borderRadius: 16,
                  left: 0,
                  right: 0,
                }}>
                {/* <Image
                  source={require('../../shared/assests/home/Rectangle.png')}
                  style={{
                    width:
                      props.screen === 'Home'
                        ? 290
                        : Dimensions.get('window').width * 0.93,
                    height: 226,
                    borderRadius: 16,
                    borderRadius: 16,
                  }}
                /> */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  top: 16,
                  left: isRtl ? null : 16,
                  right: isRtl ? 110 : null,
                }}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  {/* {dataSource?.isVerified ? (
                    <Image
                      style={{height: 28, width: 98, resizeMode: 'contain'}}
                      source={require('../../shared/assests/home/verified-image.png')}
                    />
                  ) : null} */}
                </View>
              </View>
              <View
                style={{
                  flexDirection: isRtl ? 'row-reverse' : 'row',
                  position: 'absolute',
                  padding: 10,
                  bottom: 10,
                  right: isRtl ? 10 : null,
                  left: isRtl ? null : 10,
                  zIndex: 99999,
                }}>
                <View style={{justifyContent: 'center'}}>
                  <Image
                    style={{
                      height: 45,
                      width: 45,
                      borderRadius: 100,
                      resizeMode: 'cover',
                      borderColor: '#FFF',
                      borderWidth: 1,
                    }}
                    source={{uri: dataSource?.vendorThumbnail}}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    marginHorizontal: 12,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Inter-Bold',
                      color: '#FFF',
                      opacity: 0.5,
                      textAlign: isRtl ? 'right' : 'left',
                    }}>
                    {localizedString.agency}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 16,
                      fontFamily: 'Inter-Bold',
                      color: '#FFF',
                      textAlign: isRtl ? 'right' : 'left',
                    }}>
                    {dataSource?.vendorName}
                  </Text>
                </View>
                {props?.IsWish && props?.IsWish == true ? (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      if (
                        dataSource?.wishlistId > 0 ||
                        props?.wishStatus === props.keys
                      ) {
                        const data = {
                          dataSource: dataSource,
                          key: props?.keys,
                          type: 'delete',
                        };
                        onTrigger(data);
                      } else {
                        const data = {
                          dataSource: dataSource,
                          key: props.keys,
                          type: 'add',
                        };
                        onTrigger(data);
                      }
                    }}
                    style={{
                      justifyContent: 'center',
                      marginRight: isRtl ? null : 14,
                      marginLeft: isRtl ? 14 : null,
                    }}>
                    <AntDesign
                      size={30}
                      color={colors.blue}
                      name={
                        (dataSource?.wishlistId &&
                          dataSource?.wishlistId > 0) ||
                        props.wishStatus === props.keys
                          ? 'heart'
                          : 'hearto'
                      }
                    />
                  </TouchableOpacity>
                ) : null}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  top: 14,
                  right: isRtl ? null : 14,
                  left: isRtl ? 14 : null,
                }}>
                <TouchableOpacity
                  onPress={() => prevoiusPageHandle(key)}
                  style={{
                    backgroundColor: '#FFF',
                    height: 30,
                    width: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 100,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,
                  }}>
                  <Entypo
                    size={14}
                    color={'#191919'}
                    name={'chevron-thin-left'}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => nextPageHandle(key)}
                  style={{
                    backgroundColor: '#FFF',
                    height: 30,
                    width: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 100,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,
                    marginLeft: 12,
                  }}>
                  <Entypo
                    size={14}
                    color={'#191919'}
                    name={'chevron-thin-right'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
      {isRtl ? (
        <>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 12,
              paddingBottom: 8,
              paddingTop: 12,
            }}>
            {dataSource?.isSold ? (
              <View
                style={{
                  flex: 0.3,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <View
                  style={{
                    backgroundColor: '#0989B8',
                    borderRadius: 8,
                    paddingVertical: 6,
                    paddingHorizontal: 16,
                  }}>
                  <Text
                    style={{
                      color: '#FFF',
                      fontSize: 10,
                      fontFamily: 'Inter-Bold',
                    }}>
                    مُباع
                  </Text>
                </View>
              </View>
            ) : null}
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text
                numberOfLines={1}
                style={{
                  color: '#191919',
                  fontSize: 14,
                  fontFamily: 'Inter-Bold',
                  textAlign: isRtl ? 'right' : 'left',
                }}>
                {dataSource?.title}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  paddingVertical: 4,
                  color: '#989898',
                  fontSize: 11,
                  fontFamily: 'Inter-Medium',
                  textAlign: isRtl ? 'right' : 'left',
                }}>
                {dataSource?.address}
              </Text>
            </View>
          </View>
          <View style={{paddingHorizontal: 12, paddingBottom: 12}}>
            <Text
              style={{
                color: '#191919',
                fontSize: 16,
                fontFamily: 'Inter-SemiBold',
                textAlign: isRtl ? 'right' : 'left',
              }}>
              {localizedString.aed}
              {' ' + dataSource?.price.toLocaleString('en-US')}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 12,
              paddingBottom: 12,
              //backgroundColor: 'red',
              //backgroundColor: 'red',
              justifyContent: 'space-between',
              // justifyContent: 'space-around',
            }}>
            <View
              style={{
                justifyContent: 'center',
                paddingRight: 20,
                flex: 1,
                flexDirection: 'row',
              }}>
              <View style={{justifyContent: 'center', paddingHorizontal: 6}}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 11,
                    textAlign: 'right',
                    fontFamily: 'Inter-Bold',
                    color: '#000',
                  }}>
                  {/* {dataSource?.transmission} */}

                  {dataSource?.transmission?.split(' ')[0] == 0 ||
                  dataSource?.transmission?.split(' ')[0] == ''
                    ? '-'
                    : dataSource?.transmission?.split(' ')[0]}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 10,
                    textAlign: 'right',
                    fontFamily: 'Inter-Bold',
                    color: '#000',
                  }}>
                  {dataSource?.transmission?.split(' ')[1] == undefined ||
                  dataSource?.transmission?.split(' ')[1] == ''
                    ? localizedString.transmissionText
                    : dataSource?.transmission?.split(' ')[1]}
                </Text>
              </View>
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
            </View>
            <View
              style={{
                justifyContent: 'center',
                paddingRight: 20,
                flex: 1,
                flexDirection: 'row',
              }}>
              <View style={{justifyContent: 'center', paddingHorizontal: 6}}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 11,
                    textAlign: 'right',
                    fontFamily: 'Inter-Bold',
                    color: '#000',
                  }}>
                  {/* {dataSource?.door} */}
                  {dataSource?.door?.split(' ')[0] == undefined ||
                  dataSource?.door?.split(' ')[0] == ''
                    ? '-'
                    : dataSource?.door?.split(' ')[0]}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 12,
                    textAlign: 'right',
                    fontFamily: 'Inter-Bold',
                    color: '#000',
                  }}>
                  {/* {dataSource?.door} */}
                  {dataSource?.door?.split(' ')[1] == undefined ||
                  dataSource?.door?.split(' ')[1] == ''
                    ? '-'
                    : dataSource?.door?.split(' ')[1]}
                </Text>
              </View>
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
            </View>
            <View
              style={{
                justifyContent: 'center',
                paddingRight: 0,
                flex: 1,
                flexDirection: 'row',
              }}>
              <View style={{justifyContent: 'center', paddingHorizontal: 6}}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 11,
                    textAlign: 'right',
                    fontFamily: 'Inter-Bold',
                    color: '#000',
                  }}>
                  {/* {dataSource?.mileage} */}
                  {dataSource?.mileage?.split(' ')[0] == undefined ||
                  dataSource?.mileage?.split(' ')[0] == ''
                    ? '-'
                    : dataSource?.mileage?.split(' ')[0]}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 11,
                    textAlign: 'right',
                    fontFamily: 'Inter-Bold',
                    color: '#000',
                  }}>
                  {localizedString.mileageText}
                  {/* {dataSource?.mileage?.split(' ')[1] == undefined ||
                  dataSource?.mileage?.split(' ')[1] == ''
                    ? '-'
                    : dataSource?.mileage?.split(' ')[1]} */}
                </Text>
              </View>
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
                  <AntDesign size={14} color={'#FFF'} name={'dashboard'} />
                </View>
              </View>
            </View>
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 12,
              paddingBottom: 8,
              paddingTop: 12,
            }}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text
                numberOfLines={1}
                style={{
                  color: '#191919',
                  fontSize: 14,
                  fontFamily: 'Inter-Bold',
                  textAlign: isRtl ? 'right' : 'left',
                }}>
                {dataSource?.title}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  paddingVertical: 4,
                  color: '#989898',
                  fontSize: 11,
                  fontFamily: 'Inter-Medium',
                  textAlign: isRtl ? 'right' : 'left',
                }}>
                {dataSource?.address}
              </Text>
            </View>
            {dataSource?.isSold ? (
              <View
                style={{
                  flex: 0.3,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <View
                  style={{
                    backgroundColor: '#0989B8',
                    borderRadius: 8,
                    paddingVertical: 6,
                    paddingHorizontal: 12,
                  }}>
                  <Text
                    style={{
                      color: '#FFF',
                      fontSize: 12,
                      fontFamily: 'Inter-Bold',
                    }}>
                    Sold
                  </Text>
                </View>
              </View>
            ) : null}
          </View>
          <View style={{paddingHorizontal: 12, paddingBottom: 12}}>
            <Text
              style={{
                color: '#191919',
                fontSize: 16,
                fontFamily: 'Inter-SemiBold',
                textAlign: isRtl ? 'right' : 'left',
              }}>
              {localizedString.aed} {props?.item?.price.toLocaleString('en-US')}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 12,
              paddingBottom: 12,
              justifyContent: 'space-evenly',
            }}>
            <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
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
                    fontSize: 12,
                    textAlign: 'center',
                    fontFamily: 'Inter-Bold',
                    color: '#000',
                    textAlign: 'left',
                  }}>
                  {dataSource?.transmission?.split(' ')[0]}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 11,
                    textAlign: 'left',
                    fontFamily: 'Inter-Bold',
                    color: 'lightgray',
                  }}>
                  {'Gears'}
                </Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
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
                    fontSize: 11,
                    textAlign: 'center',
                    fontFamily: 'Inter-Bold',
                    color: '#000',
                    // right: '20%',
                    textAlign: 'left',
                  }}>
                  {dataSource?.door?.split(' ')[0]}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 12,
                    textAlign: 'center',
                    fontFamily: 'Inter-Bold',
                    color: 'lightgray',
                  }}>
                  {dataSource?.door?.split(' ')[1]}
                </Text>
              </View>
            </View>
            <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
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
                  <AntDesign size={14} color={'#FFF'} name={'dashboard'} />
                </View>
              </View>
              <View style={{justifyContent: 'center', paddingHorizontal: 6}}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 11,
                    textAlign: 'center',
                    fontFamily: 'Inter-Bold',
                    color: '#000',
                    textAlign: 'left',
                  }}>
                  {dataSource?.mileage
                    ? Number(dataSource?.mileage).toLocaleString()
                    : // ?.split(' ')[0]
                      // ?.toLocaleString('en-US')
                      '-'}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 11,
                    textAlign: 'center',
                    fontFamily: 'Inter-Bold',
                    color: 'lightgray',
                  }}>
                  {/* {dataSource?.mileage
                    ? dataSource?.mileage?.split(' ')[1]
                    : 'Mileage'} */}
                  {'Mileage'}
                </Text>
              </View>
            </View>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: 290,
    height: '100%',
    marginLeft: 13,
    borderRadius: 15,
    marginTop: 3,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
    marginBottom: 10,
  },
  fastImageContainer: {
    width: '100%',
    height: 226,
    borderRadius: 10,
  },
});

function arePropsEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
  // alert(JSON.stringify(nextProps));
  // console.log(prevProps?.item?.thumbnail);
  if (prevProps?.item === nextProps?.item) {
    return true; // props are equal
  }
  // return prevProps?.item?.thumbnail === nextProps?.item?.thumbnail;
  return false;
}

//make this component available to the app
export default memo(FeaturedMotor, arePropsEqual);
//export default FeaturedMotor;
