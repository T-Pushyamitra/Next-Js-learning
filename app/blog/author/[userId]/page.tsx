import React, { use } from 'react'
import { Metadata } from 'next';
import Link from 'next/link';

// Dynamic metadata for authors
export const generateMetadata = async ({params}: { params: { userId: number}}): Promise<Metadata> => {

    const user: User = await getUserById(params.userId);
    return {
        title: user.name + "'s Posts" || "Posts",
    }
}


// Returns all the post by user id.
const getPostByUserId = async (userId: number) => {

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/`,
        { cache: 'no-store'}
    )
    const posts: Blog[] = await response.json().then((posts) => {
        return posts.filter((post: Blog) => post.userId == userId)
    });
    return posts;
};

// Returns user by id
const getUserById =async (userId: number) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        { cache: 'no-store' }
    )
    const user: User = await response.json()
    return user;
}


const UserBlogs = async ({ params } : { params: { userId: number}}) => {

    const posts: Blog[] = await getPostByUserId(params.userId);
    
    return (
        <>
            <h1 className='mb-5 text-2xl font-bold'> Posts List </h1>

            <div className="grid grid-cols-6 md:grid-cols-4 gap-4">
                {posts.map( post =>
                    <div key={post.id} className="block max-w-sm p-6 border border-black-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{post.title.slice(0, 10)}</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{post.body.slice(0, 30)}</p>

                        <Link className='font-normal text-white-700 dark:text-white-400' href={`/blog/${post.id}`}>Read More....</Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default UserBlogs;