/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useRtlContext} from 'react-native-easy-localization-and-rtl';

const InvoiceListting = props => {
  const dispatch = useDispatch();
  const {isRtl} = useRtlContext();
  const [Allinvoices, setAllinvoices] = useState([]);
  const [search, setsearch] = useState('');
  const [autoFocus, setautoFocus] = useState(false);

  let allInvoices = useSelector(state => state.propertyFilter.invoiceData);
  let InvoicesFilter = useSelector(state => state.propertyFilter.invoiceFilter);

  useEffect(() => {
    // Apply Filters
    if (InvoicesFilter != null) {
      allInvoices = allInvoices.filter(
        data => data.Status == InvoicesFilter?.Status,
      );
      if (InvoicesFilter?.highestToLow == false) {
        allInvoices = allInvoices.sort(
          (a, b) => parseFloat(a.Price) - parseFloat(b.Price),
        );
      } else if (InvoicesFilter?.highestToLow == true) {
        allInvoices = allInvoices.sort(
          (a, b) => parseFloat(b.Price) - parseFloat(a.Price),
        );
      }
    }
    setAllinvoices(allInvoices);
  }, [InvoicesFilter]);

  const renderHeader = () => {
    return (
      <View style={styles.topContainer}>
        <View
          style={{
            height: 53,
            borderColor: '#19191933',
            backgroundColor: '#F1F3F5',
            borderWidth: 1,
            width: '100%',
            borderRadius: 50,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            paddingHorizontal: 20,
            marginTop: 20,
          }}>
          <View
            style={{
              flex: 1,

              flexDirection: 'row',
            }}>
            <TextInput
              value={search}
              autoFocus={autoFocus}
              placeholder={'Search Invoice'}
              placeholderTextColor="#19191933"
              style={{fontSize: 15, textAlign: isRtl ? 'right' : 'left'}}
              onChangeText={txt => {
                setsearch(txt);
              }}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <View style={styles.backtopContainer}>{renderHeader()}</View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Filter', {name: 'Car', type: 'Motor'});
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            paddingHorizontal: '10%',
          }}>
          {'Apply Filter'}
        </Text>
      </TouchableOpacity>

      {/* Show Invoice Listing */}
      {allInvoices && allInvoices.length > 0 ? (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Allinvoices}
            style={{marginTop: 1}}
            numColumns={1}
            bounces={false}
            renderItem={({item, index}) => {
              if (
                item?.CustomerName?.toUpperCase()?.includes(
                  search?.toUpperCase(),
                )
              ) {
                return (
                  <View
                    style={{
                      width: '100%',
                      //  height: 120,
                      backgroundColor: 'lightgray',
                      //borderWidth: 1,
                      borderRadius: 8,
                      padding: 10,
                      marginTop: 5,
                    }}>
                    <Text>{'Invoice id ' + item?.InvoiceId}</Text>
                    <Text>{item?.CustomerName}</Text>
                    <Text>{item?.Country}</Text>
                    <Text>{item?.InvoiceTitle}</Text>
                    <Text>{item?.InvoiceDescripation}</Text>
                    <Text>{item?.BankName}</Text>
                    <Text>{'Track No # ' + item?.TrackNo}</Text>
                    <Text>{'Status ' + item?.Status}</Text>
                    <Text>{'Price ' + +item?.Price}</Text>
                  </View>
                );
              }
            }}
            keyExtractor={(item, index) => index.toString()}
            legacyImplementation={true}
            updateCellsBatchingPeriod={90}
            removeClippedSubviews={true}
            maxToRenderPerBatch={50}
            windowSize={70}
            onEndReachedThreshold={3}
          />
        </>
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'black', fontSize: 12, fontWeight: 'bold'}}>
            No Filter Data Avaliable
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F1F3F5',
  },
  topContainer: {
    // flex: 1,
    marginHorizontal: 20,
    backgroundColor: '#F1F3F5',
    marginBottom: 12,
  },
  topHeader: {
    flexDirection: 'row',
    width: '100%',
    //height: '30%',
    marginTop: 20,
    backgroundColor: '#F1F3F5',
  },
  propertryContainer: {
    bottom: 30,
    width: '100%',
    backgroundColor: '#F1F3F5',
  },
  backtopContainer: {
    //height: 90,
    width: '100%',
    zIndex: 0,
  },
  backtopHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    padding: 12,
  },
});

export default InvoiceListting;
