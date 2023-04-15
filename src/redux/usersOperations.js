import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6437d0e80c58d3b14579ffe7.mockapi.io/api/';

export const getAllUsers = createAsyncThunk(
    'users/getAll',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('users');
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const followUser = createAsyncThunk(
    'users/follow',
    async ({ id, followers, isFollow }, { rejectWithValue }) => {
        try {
            await axios.put(`users/${id}`, { followers });
            return { id, followers, isFollow };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
