/* eslint-disable prettier/prettier */
//import { GetAllRequestConst, GetAllPackagesConst, getAllFeatureConst, GetAllNotificationConst, GetUserProfileConst, UpdateUserProfile, UpdateUserImage, setelectFeature } from "../Action/ActionConstants"
import {SET_CREATEINVOICE, SET_INVOICEFILTER} from '../Types/types';

export const createInvoice = data => {
  return async dispatch => {
    dispatch({
      type: SET_CREATEINVOICE,
      AllData: data,
    });
  };
};

export const setInvoiceFilter = filters => {
  return async dispatch => {
    dispatch({
      type: SET_INVOICEFILTER,
      AllFilter: filters,
    });
  };
};
