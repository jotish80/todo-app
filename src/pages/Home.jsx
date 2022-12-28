import { Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import Nav from '../components/Nav';
import Todo from '../components/Todo';

const Home = () => {
    const [todos, setTodos] = useState([]);
    let id = 0;
    const addTodo = (e) => {
        console.log(e.keyCode)
        if (e.keyCode == 13) {
            const todo = {
                id: id,
                task: e.target.value,
                isCompleted: false
            }
            setTodos([...todos, todo])
        }
        id++;
    }
    return (
        <main>
            <Nav />
            <section className='border-2 border-gray-400 h-[80vh] grid w-full items-end p-5'>
                <div className='mx-24'>
                    {
                        todos.map(todo => <Todo
                            todo={todo}
                        />)
                    }
                </div> <br />
                <div className='w-full flex justify-center'>
                    <TextInput onKeyDown={addTodo}
                        id="base"
                        type="text"
                        sizing="lg"
                        className='w-4/5'
                        placeholder='Add Task Here'
                    />
                </div>
            </section>
        </main>
    );
};

export default Home;