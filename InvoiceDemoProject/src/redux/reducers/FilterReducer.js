/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import {SET_CREATEINVOICE, SET_INVOICEFILTER} from '../Types/types';
const initialState = {
  invoiceData: [],
  invoiceFilter: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CREATEINVOICE:
      let alldata = [...state.invoiceData];
      alldata.push(action.AllData);
      return {
        ...state,
        invoiceData: alldata,
      };
    case SET_INVOICEFILTER:
      return {
        ...state,
        invoiceFilter: action.AllFilter,
      };
  }
  return state;
};
