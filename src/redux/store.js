import { configureStore } from "@reduxjs/toolkit";
import modeSwitch from "./modeSwitch";

export const store = configureStore({
  reducer: { theme: modeSwitch },
});
