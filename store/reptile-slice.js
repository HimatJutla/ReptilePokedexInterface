import { createSlice } from '@reduxjs/toolkit';

const reptileSlice = createSlice({
  name: 'reptile',
  initialState: {
    reptiles: [],
    individualSelectedReptile: null
  },
  reducers: {
    populateAllReptiles(state, action) {
        state.reptiles = action.payload.allReptiles
    },
    populateIndividualReptile(state, action) {
      state.individualSelectedReptile = action.payload.individualSelectedReptile;
    },
  },
});

export const reptileActions = cartSlice.actions;

export default reptileSlice;