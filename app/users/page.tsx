import React, { use } from 'react'

interface User {
    id: number;
    name: string;
    email: string
}

const UsersPage = async () => {


    const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        // { cache: 'no-store'}  Used to disable to cache
        // {next: { revalidate: 10 }}  This get fresh data from backend every 10 seconds
    )

    const users: User[] = await response.json();
    

    return (
        <>
            <h1 className='mb-5'> Users List </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {users.map( user =>
                    <>
                        <a key={user.id} className="block max-w-sm p-6 border border-black-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.name}</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">{user.email}</p>
                        </a>
                    </>
                )}
            </div>
        </>
    )
}

export default UsersPage