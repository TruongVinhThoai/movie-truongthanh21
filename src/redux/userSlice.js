import { createSlice } from "@reduxjs/toolkit";
import { userLocalStorage } from "../services/localStorage";

// redux-toolkit

let initialState = {
  user: userLocalStorage.get(),
  infoUser: {},
};

// gom action, constant, reducer vao 1 chung noi goi la slice

let userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    // dinh nghia cac action
    setLogin: (state, action) => {
      state.user = action.payload;
      // khong can return ve object moi khi dung toolkit
    },
    setInfoUser: (state, { payload }) => {
      state.infoUser = payload;
    },
    removeLogin: (state, action) => {
      state.user = null;
    },
  },
});

export let { setLogin, removeLogin, setInfoUser } = userSlice.actions;
export default userSlice.reducer;
