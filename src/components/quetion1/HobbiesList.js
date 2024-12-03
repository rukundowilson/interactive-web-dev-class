import React from 'react';
import Hobby from './Hobby';

const HobbiesList = () => {
    const hobbies = ["Reading", "Traveling", "Cooking", "Photography"];

    return (
        <div className="p-6 bg-gray-100 m-10">
            <h1 className='m-2 font-bold text-xl' >Questin1.2: parent component with a list of hobbies and a child component that
            displays each hobby.</h1> <br/>
            <h1 className="text-2xl font-bold mb-4">My Hobbies</h1>
            <ul className="space-y-2">
                {hobbies.map((hobby, index) => (
                    <Hobby key={index} name={hobby} />
                ))}
            </ul>
        </div>
    );
};

export default HobbiesList;
