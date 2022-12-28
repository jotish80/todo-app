import { Checkbox, Label } from 'flowbite-react';
import React from 'react';

const Todo = ({ task }) => {
    return (
        <div>
            <div className="flex items-center gap-2 text-lg">
                <Checkbox id="agree" />
                <Label htmlFor="agree">
                    {task}
                </Label>
            </div>
        </div>
    );
};

export default Todo;