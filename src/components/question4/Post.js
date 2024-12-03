import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { id } = useParams();

    const postDetails = {
        1: 'React is a powerful JavaScript library for building user interfaces.',
        2: 'Props and State are essential concepts in React for managing data.',
        3: 'React Router is used for creating navigation in React applications.',
    };

    return (
        <div className="mt-4 p-4 border rounded bg-gray-100">
            <h2 className="text-2xl font-bold">Post ID: {id}</h2>
            <p className="text-gray-700 mt-2">{postDetails[id] || 'Post not found.'}</p>
        </div>
    );
};

export default Post;
