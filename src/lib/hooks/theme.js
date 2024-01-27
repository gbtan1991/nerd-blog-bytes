import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setLight: (state) => {
      state.isDark = true;
    },
    setDark: (state) => {
      state.isDark = false;
    },
    handleChangeTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { handleChangeTheme, setDark, setLight } = theme.actions;
export default theme.reducer;
