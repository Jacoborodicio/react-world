import axios  from "axios";

export const globalTodo = () => axios.get('https://jsonplaceholder.typicode.com/todos/1');