import { useLoaderData } from '@remix-run/react'
import React from 'react'
import { User } from '~/types/user'
import { Comment } from '~/types/comments'

export async function loader({
    params,
}: { params: { id: string } }) {
    const { id } = params

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()

    const commentsres = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const comments = await commentsres.json()

    return {
        id,
        data,
        comments
    }
}

export default function Index() {
    const params = useLoaderData<{ id: string, data: User, comments: Comment[] }>()
    return (
        <div>
            <h1 className='text-2xl font-bold py-4'>{params.data.title}</h1>
            <p>{params.data.body}</p>
            <h2 className='text-xl font-bold mt-8'>Comments</h2>
            <ul>
                {params.comments.map((comment) => (
                    <li key={comment.id} className='p-4 border rounded shadow mt-4'>
                        <h3 className='text-lg font-bold'>{comment.name}</h3>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
