import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Blog = () => {
    const posts = [
        { id: 1, title: 'React Basics' },
        { id: 2, title: 'Understanding Props and State' },
        { id: 3, title: 'React Router in Depth' },
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <ul className="list-disc pl-6 mb-4">
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/blog/${post.id}`} className="text-blue-500 underline">
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet /> {/* Renders the nested route's component */}
        </div>
    );
};

export default Blog;
