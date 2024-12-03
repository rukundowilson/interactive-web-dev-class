import React, { useState } from 'react';
import Child from './Child';


const CounterMem = () => {
    const [parentCount, setParentCount] = useState(0);
    const staticProp = "I don't change!";

    return (
        <div className="p-6 bg-blue-100 p-4 m-4">
            <h1 className="text-2xl font-bold mb-4">Parent Component</h1>
            <p>Parent Count: {parentCount}</p>
            <button
                onClick={() => setParentCount(parentCount + 1)}
                className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
            >
                Increment Parent Count
            </button>
        </div>
    );
};

export default React.memo(CounterMem);
