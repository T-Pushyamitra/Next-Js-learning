import React, { use } from 'react'
import Link from 'next/link';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Blog Posts',
    description: "Blog posts"
}

const BlogPage = async () => {


    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        // { cache: 'no-store'}  Used to disable to cache
        // {next: { revalidate: 10 }}  This get fresh data from backend every 10 seconds
    )

    const posts: Blog[] = await response.json();
    

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

export default BlogPage;