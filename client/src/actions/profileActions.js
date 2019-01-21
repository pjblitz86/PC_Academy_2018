import axios from 'axios';
import { GET_PROFILE, GET_PROFILES, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_ERRORS } from './types';
import { logoutUser } from '../actions/authActions';

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

export const getProfileByHandle = (handle) => dispatch => {
  dispatch(setProfileLoading());
  axios.get(`/profile/handle/${handle}`)
    .then(res => dispatch({
      type: GET_PROFILE,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_PROFILE,
      payload: null
    }))
}

export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/profile/all')
    .then(res => dispatch({
      type: GET_PROFILES,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_PROFILES,
      payload: null
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

export const addExperience = (expData, history) => dispatch => {
  axios
    .post('/profile/experience', expData)
    .then(res => history.push('/dashboard'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))

}

export const addEducation = (eduData, history) => dispatch => {
  axios
    .post('/profile/education', eduData)
    .then(res => history.push('/dashboard'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}

export const deleteExperience = (id) => dispatch => {
  if (window.confirm('Are you sure? This can not be undone!')) {
    axios
      .delete(`/profile/experience/${id}`)
      .then(res => dispatch({
        type: GET_PROFILE,
        payload: res.data
      }))
      .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }))
  }
}

export const deleteEducation = (id) => dispatch => {
  if (window.confirm('Are you sure? This can not be undone!')) {
    axios
      .delete(`/profile/education/${id}`)
      .then(res => dispatch({
        type: GET_PROFILE,
        payload: res.data
      }))
      .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }))
  }
}

export const deleteAccount = () => dispatch => {
  if (window.confirm('Are you sure? This can not be undone!')) {
    axios.delete('/profile')
      .then(res => {
        dispatch(logoutUser());
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        }))
  }
}
