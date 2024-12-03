import React from 'react';

const ProfileCard = ({ name, age, email ,minHeight,widthCard}) => {
    return (
        <div className="p-6 bg-white border rounded-lg shadow-md" style={{minHeight: minHeight,width: widthCard}}>
            <div className='bg-gray-100 flex items-center justify-center p-4 w-20 h-20 block m-auto rounded-full'>
                <h1 className='capitalize font-bold text-xl '>{name[0]}</h1>
            </div>
            <br/>
            <hr/>
            <br/>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">{name}</h2>
            <p className="text-gray-600 mb-1">
                <strong>Age:</strong> {age}
            </p>
            <p className="text-gray-600">
                <strong>Email:</strong> {email}
            </p>
        </div>
    );
};

export default ProfileCard;
