import React from 'react';

const Child = React.memo(({ message }) => {
    console.log('Child rendered!');
    return (
        <div className="p-4 bg-gray-100 border rounded shadow">
            <h2 className="text-xl font-bold">Child Component</h2>
            <p>Message from Parent: {message}</p>
        </div>
    );
});

export default React.memo(Child);
