import { Link, useLoaderData } from '@remix-run/react';
import { User } from '~/types/user';

export const loader = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return data
};
export default function Index() {
    const data = useLoaderData<User[]>()
    return (
        <div className='pt-6'>
            <h1 className='text-2xl font-bold pb-4'>All</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {data.map((user) => (
                    <Link to={`/list/${user.id}`} key={user.id} className='p-6 border rounded shadow'>
                        <h2 className='text-xl font-bold'>{user.title}</h2>
                        <p className='mt-4'>{user.body}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
