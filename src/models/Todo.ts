import mongoose from "mongoose";

export interface ITodo extends mongoose.Document {
    text: string;
    completed: boolean;
  }

  const todoSchema = new mongoose.Schema({
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  });

  export default mongoose.model<ITodo>('Todo', todoSchema);