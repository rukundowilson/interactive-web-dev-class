import React from 'react';
import { useParams } from 'react-router-dom';

const IndividualPost = () => {
    const { postId } = useParams(); // Extract the post ID from the URL

    const posts = {
        1: { title: 'Learning React', content: 'React is a powerful library for building UI.' },
        2: { title: 'Understanding Nested Routes', content: 'Nested routes help organize your app structure.' },
        3: { title: 'React Router Basics', content: 'React Router is a library for routing in React apps.' },
    };

    const post = posts[postId];

    return (
        <div className="p-6 bg-white shadow-md rounded mt-8">
            {post ? (
                <>
                    <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                    <p className="text-gray-600">{post.content}</p>
                </>
            ) : (
                <p className="text-red-500">Post not found!</p>
            )}
        </div>
        
    );
};

export default IndividualPost;