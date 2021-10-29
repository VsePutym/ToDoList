import {createSlice} from "@reduxjs/toolkit";

let showWish = [];

const localStorageWish = window.localStorage.wishMemory;
if(localStorageWish){
  showWish = JSON.parse(localStorage.getItem('wishMemory'));
  console.log(localStorageWish)
}


const sliceWish = createSlice({
  name: 'wish',
  initialState:{
    wish: showWish
  },
  reducers: {
    addWish(state, action) {
      if (action.payload.text.trim().length > 0) {
        state.wish.push({
          id: new Date().toISOString(),
          text: action.payload.text,
          completed: false
        })
      }
      localStorage.setItem('wishMemory', JSON.stringify(state.wish));
    },

    wishCompleted(state, action) {
      const toggle = state.wish.find(wish => wish.id === action.payload.id);
      toggle.completed = !toggle.completed;
      localStorage.setItem('wishMemory', JSON.stringify(state.wish));
    },
    removeWish(state, action) {
      state.wish = state.wish.filter(wish => wish.id !== action.payload.id);
      localStorage.setItem('wishMemory', JSON.stringify(state.wish));
    }
  }
})

export const {wishCompleted, addWish, removeWish} = sliceWish.actions;
export default sliceWish.reducer;