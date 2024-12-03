import React, { useState } from 'react';
import Child from './Child';


const Parent = () => {
    const staticProp = "I do not re-render unnecesary!";

    return (
        <div className="p-6 bg-blue-100">
            <div className="mt-6">
                <Child message={staticProp} />
            </div>
        </div>
    );
};

export default Parent;
