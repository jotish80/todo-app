import { Checkbox, Label } from 'flowbite-react';
import React from 'react';

const Todo = props => {
    const { task, id, isCompleted } = props.todo;

    return (
        <div
            onClick={() => props.completeTask(id)}
            className="my-2 capitalize rounded-lg flex cursor-pointer items-center gap-2 text-lg py-2 px-2 border-2 border-gray-200 shadow-md">
            {isCompleted ? <Checkbox id="agree" checked /> : <Checkbox id="agree" />}

            <p className="" style={isCompleted ? { textDecoration: 'line-through' } : {}}>
                {task}
            </p>
        </div>
    );
};

export default Todo;

