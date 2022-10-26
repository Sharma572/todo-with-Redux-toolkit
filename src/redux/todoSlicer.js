import { createSlice } from "@reduxjs/toolkit";

const todoSlicer = createSlice({
name:'tasks',
initialState : [],
reducers:{
    addTask(state,action){
      const newTask = {
        id: new Date(),
        name: action.payload.task
      }
      state.push(newTask);
    },
    deleteTask(state,action){
      return state.filter((item)=> item.id !== action.payload.id)
    }
}
})

export const {addTask,deleteTask} = todoSlicer.actions;
export default todoSlicer.reducer;