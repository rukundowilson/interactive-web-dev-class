import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);

    return (
        <div className="p-6 bg-gray-100 max-w-sm rounded shadow-lg text-center">
            <h1 className="text-2xl font-bold mb-4">Counter</h1>
            <div className="mb-4 text-4xl font-semibold text-gray-800">{count}</div>
            <div className="flex justify-center space-x-4">
                <button
                    onClick={decrement}
                    className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600"
                >
                    Decrement
                </button>
                <button
                    onClick={increment}
                    className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
                >
                    Increment
                </button>
            </div>
        </div>
    );
};

export default Counter;
