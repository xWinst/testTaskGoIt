import { createSlice } from '@reduxjs/toolkit';
import { getAllUsers, followUser } from './usersOperations';

const initialState = {
    list: [],
    following: [],
    filter: 'all',
    sortBy: 'unsorted',
    isLoading: false,
    error: null,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,

    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        resetError: state => {
            state.error = null;
        },
    },

    extraReducers: builder => {
        builder
            .addCase(getAllUsers.pending, state => {
                state.isLoading = true;
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.list = action.payload;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(followUser.pending, state => {
                state.isLoading = true;
            })
            .addCase(followUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(followUser.fulfilled, (state, action) => {
                const { id, followers, isFollow } = action.payload;

                state.list = state.list.map(user => {
                    if (user.id === id) user.followers = followers;
                    return user;
                });
                if (isFollow)
                    state.following = state.following.filter(
                        userId => userId !== id
                    );
                else state.following.push(id);
                state.isLoading = false;
            });
    },
});

export const { resetError, setFilter, setSortBy } = usersSlice.actions;

export default usersSlice.reducer;
