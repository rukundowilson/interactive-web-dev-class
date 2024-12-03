import React from 'react';

function Hobby({name}){
    return (
        <>
            <li className="p-2 bg-white shadow rounded">
                {name}
            </li>
        </>
        
    )
}


export default Hobby;
