import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FlatButton from '../../shared/components/FlatButton';
import AIcon from 'react-native-vector-icons/Entypo';
import {useRtlContext} from 'react-native-easy-localization-and-rtl';
import moment from 'moment';

const NewsCard = props => {
  const {RtlStyles, isRtl} = useRtlContext();
  return (
    <TouchableOpacity
      onPress={props.onClick}
      activeOpacity={0.7}
      style={{
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
        borderRadius: 10,
        width: '100%',
        height: 250,
        position: 'relative',
        marginTop: 12,
      }}>
      <Image
        source={{
          uri: props.item?.bannerImage,
        }}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 10,
        }}
      />
      <View
        style={{
          position: 'absolute',
          zIndex: 99999,
          bottom: 0,
          left: 15,
          right: 15,
          borderRadius: 10,
        }}>
        {/* <Image
          style={{
            width: "100%",
            height: 250,
            borderRadius:10,
            justifyContent:'flex-end',
          }}
          source={require('../../shared/assests/home/Rectangle.png')}
        /> */}
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 99999,
          bottom: 0,
          left: 30,
          right: 30,
        }}>
        <View
          style={{
            backgroundColor: '#191919',
            opacity: 0.8,
            width: 80,
            borderRadius: 4,
            paddingHorizontal: 8,
            paddingVertical: 4,
            marginBottom: 6,
          }}>
          <Text
            numberOfLines={2}
            style={{
              color: '#FFFFFF',
              fontSize: 12,
              fontFamily: 'Inter-Medium',
              textAlign: isRtl ? 'right' : 'left',
              textAlign: 'center',
            }}>
            {props.item?.badge}
          </Text>
        </View>
        <View>
          <Text
            numberOfLines={2}
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              fontFamily: 'Inter-Bold',
              textAlign: isRtl ? 'right' : 'left',
              lineHeight: 24,
            }}>
            {props.item?.title}
          </Text>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: 0}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text
              numberOfLines={2}
              style={{
                color: '#FFFFFF',
                fontSize: 12,
                fontFamily: 'Inter-Medium',
                textAlign: isRtl ? 'right' : 'left',
                opacity: 0.8,
              }}>
              {moment(props.item?.createdOn.split('T')[0]).format(
                'DD MMM, YYYY',
              )}
            </Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <FlatButton
              label={'Read Article'}
              buttonStyle={{
                paddingVertical: 6,
                backgroundColor: '#0989B8',
                borderRadius: 4,
              }}
              labelStyle={{fontSize: 11}}
              onPress={props.onClick}></FlatButton>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default NewsCard;
