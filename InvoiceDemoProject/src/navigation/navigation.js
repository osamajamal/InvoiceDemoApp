/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import InvoiceListting from '../module/Property/InvoiceListting';

import Filter from '../../src/module/Filter/Filter';
import CreateInvoice from '../module/SignIn/CreateInvoice';

const Stack = createNativeStackNavigator(); // Main stack

function navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateInvoice">
        <Stack.Screen
          options={{headerShown: false}}
          name={'CreateInvoice'}
          component={CreateInvoice}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name={'InvoiceListting'}
          component={InvoiceListting}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={'Filter'}
          component={Filter}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 23,
  },
  img: {
    height: 80,
    width: 80,
  },
  profiletab: {
    height: 100,
    width: 100,
  },
});

export default navigation;
