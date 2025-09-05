/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

interface Book {
    book_id: number
    title: string
    author: string
    category: string
    publisher: string
    edition: string
    isbn: string
    cover_url?: string | null
}

export default function IssuePage() {
    const { id } = useParams()
    const [book, setBook] = useState<Book | null>(null)
    const [error, setError] = useState('')

    useEffect(() => {
        async function fetchBook() {
            try {
                const res = await fetch(`/api/patron/books/${id}`)
                const data = await res.json()
                if (data.success) {
                    setBook(data.book)
                } else {
                    setError(data.error || 'Failed to load book')
                }
            } catch (err) {
                setError('Failed to fetch book details')
            }
        }

        if (id) fetchBook()
    }, [id])

    if (error) {
        return <div className="p-6 text-red-600">Error: {error}</div>
    }

    if (!book) {
        return <div className="p-6">Loading book details...</div>
    }

    return (
        <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
            {book.cover_url && (
                <img src={book.cover_url} alt={book.title} className="w-full h-64 object-cover rounded mb-4" />
            )}
            <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
            <p className="text-gray-700"><strong>Author:</strong> {book.author}</p>
            <p className="text-gray-700"><strong>Category:</strong> {book.category}</p>
            <p className="text-gray-700"><strong>Publisher:</strong> {book.publisher}</p>
            <p className="text-gray-700"><strong>Edition:</strong> {book.edition}</p>
            <p className="text-gray-700"><strong>ISBN:</strong> {book.isbn}</p>
        </div>
    )
}
