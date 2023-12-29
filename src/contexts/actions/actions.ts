import { actionTypes } from "../AppContext";

export const setCounty = (countyDetails: { name: string; id: string }) => ({
  type: actionTypes.SET_COUNTY,
  payload: countyDetails,
});

export const resetCounty = () => ({
  type: actionTypes.RESET_COUNTY,
});

export const openCountyDetailModal = () => ({
  type: actionTypes.OPEN_COUNTY_DETAILS,
});

export const closeCountyDetailModal = () => ({
  type: actionTypes.CLOSE_COUNTY_DETAILS,
});
