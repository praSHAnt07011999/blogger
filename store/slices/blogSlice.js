import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blog',
  initialState: [],
  reducers: {
    addBlog(state, action) {
      console.log('State before update');
      console.log(state);
      state.push(action.payload);
      console.log('State after update');
      console.log(state);
    },
    updateBlog(state, action) {},
    deleteBlog(state, action) {},
  },
});

export default blogSlice.reducer;
export const { addBlog, updateBlog, deleteBlog } = blogSlice.actions;
