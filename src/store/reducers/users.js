import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
  errors: false,
};

export const users = createSlice({
  name: "counter",
  initialState,
  reducers: {
    usersDetailsLoading: (state) => {
      state.isLoading = true;
    },
    userDetailsSuccess: (state, action) => {
      state.isLoading = false;
      state.data = [...action.payload];
    },
    userDetailsFailure: (state) => {
      state.isLoading = false;
      state.errors = true;
    },
    addUser: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const {
  usersDetailsLoading,
  userDetailsSuccess,
  userDetailsFailure,
  addUser,
} = users.actions;

export const fetchUserDetails = () => (dispatch) => {
  dispatch(usersDetailsLoading());
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      dispatch(userDetailsSuccess(data.splice(0, 15)));
    })
    .catch((e) => {
      dispatch(userDetailsFailure(e.message));
    });
};

export default users.reducer;
