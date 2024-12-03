import React from 'react';

const TodoList = React.memo(({ todos, removeTodo }) => {
    console.log('TodoList Component Rendered!');

    return (
        <ul className="list-disc pl-6">
            {todos.map((todo, index) => (
                <li key={index} className="flex justify-between items-center mb-2">
                    <span>{todo}</span>
                    <button
                        onClick={() => removeTodo(index)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                        Remove
                    </button>
                </li>
            ))}
        </ul>
    );
});

export default TodoList;
