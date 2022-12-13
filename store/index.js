import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import reptileSlice from './reptile-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, reptile: reptileSlice.reducer },
});

export default store;