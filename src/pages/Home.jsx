import { Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import Nav from '../components/Nav';
import Todo from '../components/Todo';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([])
    let id = 0;
    console.log(todos);

    const completeTask = id => {
        console.log(id);
        const tasks = todos.map(todo => {
            if (todo.id === id) {
                if (todo.isCompleted === true) {
                    todo.isCompleted = false;
                } else {
                    todo.isCompleted = true;
                }
            }
            return todo;
        });
        setTodos(tasks);
    };

    const addTodo = e => {
        if (e.keyCode == 13) {
            const todo = {
                id: id,
                task: e.target.value,
                isCompleted: false,
            };
            setTodos([...todos, todo]);
            e.target.value = '';
        }
        id++;
    };

    const completedTasks = () => {
        const tasks = todos.filter(todo => todo.isCompleted === true);
        setTodos(tasks);
    };

    return (
        <main>
            <Nav />
            <section className="border-2 border-gray-200 shadow-md rounded-lg h-[80vh] grid w-2/3 mx-auto items-end p-5">
                <div className="mx-24 border-1 border-gray-500  shadow-sm rounded-md py-2 flex items-center justify-around">
                    <button className="px-3 py-1 border-gray-400 border-1 rounded-md shadow-sm bg-blue-500 text-white border-blue-700">
                        My Tasks
                    </button>
                    <button className="px-3 py-1 hover:bg-blue-500 hover:border-blue-600 hover:text-white border-gray-200 border-2 rounded-md shadow-sm ">
                        Add Task
                    </button>
                    <button
                        onClick={completedTasks}
                        className="px-3 py-1 border-gray-200 border-2 rounded-md shadow-sm ">
                        Completed Tasks
                    </button>
                </div>
                <div className="mx-24">
                    {todos.map(todo => (
                        <Todo todo={todo} completeTask={completeTask} />
                    ))}
                </div>
                <br />
                <div className="w-full flex justify-center">
                    <TextInput
                        onKeyDown={addTodo}
                        id="base"
                        type="text"
                        sizing="lg"
                        className="w-4/5"
                        placeholder="Add Task Here"
                    />
                </div>
            </section>
        </main>
    );
};

export default Home;