import React from 'react';
import { useParams } from 'react-router-dom';

const IndividualPost = () => {
    const { postId } = useParams();

    const posts = {
        1: { title: 'First Post', content: 'This is the first blog post.' },
        2: { title: 'Second Post', content: 'This is the second blog post.' },
        3: { title: 'Third Post', content: 'This is the third blog post.' },
    };

    const post = posts[postId];

    return (
        <div className="p-6 bg-white shadow-md rounded mt-8">
            <h2 className="text-2xl font-bold mb-4">{post ? post.title : 'Post Not Found'}</h2>
            <p className="text-gray-600">{post ? post.content : 'Sorry, this post does not exist.'}</p>
        </div>
    );
};

export default IndividualPost;
