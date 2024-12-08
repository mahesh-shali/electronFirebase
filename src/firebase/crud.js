import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "./fire";

// Create a new todo item
export const createTodo = async (data) => {
  try {
    const todosCol = collection(db, "todo"); // Use collection reference
    const res = await addDoc(todosCol, data);
    return { res, status: 200 };
  } catch (error) {
    return { error: error.message, status: 500 }; // Return a consistent error format
  }
};

// Get all todo items
export const getAllTodo = async () => {
  try {
    const todosCol = collection(db, "todo");
    const q = query(todosCol);
    const querySnapshot = await getDocs(q);

    const todos = [];
    querySnapshot.forEach((doc) => {
      todos.push({ id: doc.id, ...doc.data() });
    });

    return { todos, status: 200 };
  } catch (error) {
    return { error: error.message, status: 500 }; // Return a consistent error format
  }
};
