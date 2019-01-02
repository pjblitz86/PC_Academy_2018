import axios from 'axios';
import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_ERRORS } from './types';

export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios.get('/profile/current')
    .then(res => dispatch({
      type: GET_PROFILE,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_PROFILE,
      payload: {}
    }))
}

export const createProfile = (profileData, history) => dispatch => {
  axios
    .post('/profile/createoredit', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  }
}

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  }
}
