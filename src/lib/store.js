import { configureStore } from "@reduxjs/toolkit";
import theme from "../lib/hooks/theme";

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme,
    },
  });
};
