//import liraries
import React, {Component, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useRtlContext} from 'react-native-easy-localization-and-rtl';
import {localizedString} from '../localization/localization';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../themes/theme';

// create a component
const PropertyCard = props => {
  const scrollViewRef = useRef(null);
  const {RtlStyles, isRtl} = useRtlContext();
  const nextPageHandle = index => {
    const nextIndex = index + 1;
    scrollViewRef.current?.scrollTo({
      x: props?.screen === 'Home' ? 290 * nextIndex : 290 * nextIndex,
      animated: true,
    });
  };
  const prevoiusPageHandle = index => {
    const previousIndex = index - 1;
    scrollViewRef.current?.scrollTo({
      x: props?.screen === 'Home' ? 290 * previousIndex : 290 * previousIndex,
      animated: true,
    });
  };
  return (
    <TouchableOpacity onPress={props.onClick}>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          width: 290,
          marginLeft: 13,
          marginTop: 8,
          shadowColor: '#000',
          borderRadius: 12,
          //flex: 1,
          ...props.conatinerStyle,
        }}>
        {/* <View style={{position: 'relative', height: 226}}>
          <Image
            source={{uri: props.item?.thumbnail}}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
              borderRadius: 12,
            }}
          /> */}

        {/* <View
          style={{
            position: 'absolute',
            bottom: 0,
            borderRadius: 12,
            borderRadius: 12,
            left: 0,
            right: 0,
          }}>
          <Image
            source={require('../../shared/assests/home/Rectangle.png')}
            style={{
              width: '100%',
              height: 226,
              borderRadius: 16,
              borderRadius: 16,
            }}
          />
        </View> */}

        {/* <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              width: '100%',
              top: 0,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                paddingVertical: 12,
                paddingLeft: 14,
              }}>
              {props.item?.isVerified ? (
                <Image
                  style={{height: 28, width: 98, resizeMode: 'contain'}}
                  source={require('../../shared/assests/home/verified-image.png')}
                />
              ) : null}
            </View>
            <View
              style={{
                justifyContent: 'center',
                paddingVertical: 12,
                paddingRight: 14,
              }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  props?.deleteWishList();
                }}>
                <AntDesign size={30} color={colors.blue} name={'heart'} />
              </TouchableOpacity>
            </View>
          </View> */}

        {/* <View
            style={{
              flexDirection: isRtl ? 'row-reverse' : 'row',
              position: 'absolute',
              bottom: 0,
              paddingHorizontal: 12,
              paddingBottom: 12,
            }}>
            <View
              style={{
                justifyContent: 'flex-end',
                paddingRight: isRtl ? null : 20,
                paddingLeft: isRtl ? 20 : null,
                flexDirection: isRtl ? 'row-reverse' : 'row',
              }}>
              <View style={{justifyContent: 'center'}}>
                <View
                  style={{
                    backgroundColor: '#1A586E',
                    height: 24,
                    width: 24,
                    borderRadius: 100,
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
                    fontSize: 12,
                    fontFamily: 'Inter-Bold',
                    color: '#FFF',
                  }}>
                  {isRtl
                    ? props.item?.rooms?.replace('سرير', '')
                    : props.item?.rooms?.replace('Beds', '')}
                </Text>
                <Text
                  style={{
                    color: '#FFF',
                    fontSize: 10,
                    fontFamily: 'Inter-Medium',
                    textAlign: isRtl ? 'right' : 'left',
                  }}>
                  {localizedString.bedText}
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                paddingRight: isRtl ? null : 20,
                paddingLeft: isRtl ? 20 : null,
                flexDirection: isRtl ? 'row-reverse' : 'row',
              }}>
              <View style={{justifyContent: 'center'}}>
                <View
                  style={{
                    backgroundColor: '#1A586E',
                    height: 24,
                    width: 24,
                    borderRadius: 100,
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
                    fontSize: 12,
                    fontFamily: 'Inter-Bold',
                    color: '#FFF',
                  }}>
                  {isRtl
                    ? props.item?.baths?.replace('الحمامات', '')
                    : props.item?.baths?.replace('Baths', '')}
                </Text>
                <Text
                  style={{
                    color: '#FFF',
                    fontSize: 10,
                    fontFamily: 'Inter-Medium',
                    textAlign: isRtl ? 'right' : 'left',
                  }}>
                  {localizedString.bathText}
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                paddingRight: isRtl ? null : 20,
                paddingLeft: isRtl ? 20 : null,
                flexDirection: isRtl ? 'row-reverse' : 'row',
              }}>
              <View style={{justifyContent: 'center'}}>
                <View
                  style={{
                    backgroundColor: '#1A586E',
                    height: 24,
                    width: 24,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 100,
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
                    color: '#FFF',
                  }}>
                  {isRtl
                    ? props.item?.size?.replace('قدم مربع', '')
                    : props.item?.size?.replace('sqft', '')}
                </Text>
                <Text
                  style={{
                    color: '#FFF',
                    fontSize: 10,
                    fontFamily: 'Inter-Medium',
                    textAlign: isRtl ? 'right' : 'left',
                  }}>
                  {localizedString.sqftText}
                </Text>
              </View>
            </View>
          </View> */}
        {/* </View> */}

        <ScrollView
          horizontal
          ref={scrollViewRef}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}>
          {props.item?.images?.map((val, index) => {
            return (
              <View key={index} style={{position: 'relative', height: 226}}>
                <Image
                  source={{uri: val}}
                  style={{
                    height: '100%',
                    width: props.screen === 'Home' ? 290 : 290,
                    resizeMode: 'cover',
                    borderRadius: 16,
                  }}
                />
                <TouchableOpacity
                  onPress={props?.onClick}
                  activeOpacity={0.9}
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
                      width: props?.screen === 'Home' ? 290 : 290,
                      height: 226,
                      borderRadius: 16,
                      borderRadius: 16,
                    }}
                  /> */}
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    top: 16,
                    left: isRtl ? null : 16,
                    right: isRtl ? 110 : null,
                  }}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    {/* {props.item?.isVerified ? (
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
                  {/* <View style={{flexDirection:'row'}}> */}
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
                      source={{uri: props.item?.vendorThumbnail}}
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
                      {props.item?.vendorName}
                    </Text>
                  </View>
                  {props?.IsWish && props?.IsWish == true ? (
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => {
                        props?.deleteWishList();
                        //  alert(props.item.wishlistId);
                      }}
                      style={{
                        justifyContent: 'center',
                        marginRight: isRtl ? null : 14,
                        marginLeft: isRtl ? 14 : null,
                      }}>
                      <AntDesign size={30} color={colors.blue} name={'heart'} />
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
                    onPress={() => prevoiusPageHandle(index)}
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
                    onPress={() => nextPageHandle(index)}
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

        <View style={{paddingHorizontal: 12, paddingTop: 12}}>
          <Text
            numberOfLines={1}
            style={{
              color: '#191919',
              fontSize: 14,
              fontFamily: 'Inter-Bold',
              textAlign: isRtl ? 'right' : 'left',
            }}>
            {props.item?.title}
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
            {props.item?.address}
          </Text>
        </View>
        <View style={{paddingHorizontal: 12, paddingBottom: 12}}>
          <Text
            style={{
              color: '#191919',
              fontSize: 16,
              fontFamily: 'Inter-SemiBold',
              textAlign: isRtl ? 'right' : 'left',
            }}>
            {localizedString.aed} {props.item?.price.toLocaleString('en-US')}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 12,
            paddingBottom: 12,
            // backgroundColor: 'red',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              justifyContent: 'flex-end',
              paddingRight: props.screen === 'Home' ? 5 : 20,
              flexDirection: 'row',
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
                  fontSize: 12,
                  textAlign: 'center',
                  fontFamily: 'Inter-Bold',
                  color: '#000',
                  textAlign: 'left',
                }}>
                {props.item?.rooms?.split(' ')[0] == 0 ||
                props.item?.rooms?.split(' ')[0] == ''
                  ? '-'
                  : props.item?.rooms?.split(' ')[0]}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 12,
                  textAlign: 'center',
                  fontFamily: 'Inter-Bold',
                  // color: '#000',
                  color: 'lightgray',
                }}>
                {props.item?.rooms?.split(' ')[1]}
              </Text>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'flex-end',
              paddingRight: props.screen === 'Home' ? 5 : 20,
              flexDirection: 'row',
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
                  fontSize: 12,
                  textAlign: 'center',
                  fontFamily: 'Inter-Bold',
                  color: '#000',
                  textAlign: 'left',
                }}>
                {props.item?.baths?.split(' ')[0] == 0 ||
                props.item?.baths?.split(' ')[0] == ''
                  ? '-'
                  : props.item?.baths?.split(' ')[0]}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 12,
                  textAlign: 'center',
                  fontFamily: 'Inter-Bold',
                  color: 'lightgray',
                }}>
                {props.item?.baths?.split(' ')[1] == 0 ||
                props.item?.baths?.split(' ')[1] == ''
                  ? '-'
                  : props.item?.baths?.split(' ')[1]}
              </Text>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'flex-end',
              paddingRight: props.screen === 'Home' ? 5 : 20,
              flexDirection: 'row',
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
                  textAlign: 'center',
                  fontFamily: 'Inter-Bold',
                  color: '#000',
                  textAlign: 'left',
                }}>
                {props.item?.size?.split(' ')[0] == 0 ||
                props.item?.size?.split(' ')[0] == ''
                  ? '-'
                  : Number(props.item?.size?.split(' ')[0]).toLocaleString()}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 12,
                  textAlign: 'center',
                  fontFamily: 'Inter-Bold',
                  color: 'lightgray',
                }}>
                {props.item?.size?.split(' ')[1]}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PropertyCard;
