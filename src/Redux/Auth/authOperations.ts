import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IDataReturned, ILogInPayload, IUser, TToken } from '../../types/appTypes';
import { RootState } from '../store';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token:TToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk<IDataReturned,ILogInPayload,{rejectValue:void}>(
  'auth/register',
  async (credentials:ILogInPayload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error:any) {
      rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/login',
  async (credentials:ILogInPayload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error:any) {
      rejectWithValue(error.message);
    }
  }
);
export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error:any) {
      rejectWithValue(error.message);
    }
  }
);
export const fetchCurrentUser = createAsyncThunk<IUser,void,{ rejectValue: void }>(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
