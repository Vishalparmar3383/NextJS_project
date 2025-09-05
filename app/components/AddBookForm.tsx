/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useState } from 'react';
import { BookOpen, User, Calendar, Tag, Image, Hash, Package, FileText } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

const initialForm = {
  title: '',
  author: '',
  isbn: '',
  year: '',
  genre: '',
  image_url: '',
  description: '',
  quantity: '',
};

const years = Array.from({ length: 100 }, (_, i) =>
  String(new Date().getFullYear() - i)
);

export default function BookForm({ isEdit = false }: { isEdit?: boolean }) {
  const params = useParams();
  const bookId = isEdit ? params?.id : null;

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  // Load book data if editing
  useEffect(() => {
    const fetchBook = async () => {
      if (!isEdit || !bookId) return;

      try {
        console.log('Fetching book with ID:', bookId);
        const res = await fetch(`/api/librarian/books/${bookId}`);
        console.log('Fetch response status:', res.status);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log('Fetched book data:', data);

        if (data.success && data.book) {
          const book = data.book;
          setForm({
            title: book.title || '',
            author: book.author || '',
            isbn: book.isbn || '',
            year: book.year?.toString() || '',
            genre: book.genre || '',
            image_url: book.image_url || '',
            description: book.description || '',
            quantity: book.quantity?.toString() || '1',
          });
          console.log('Form set with book data:', book);
        } else {
          setMessage('❌ Failed to load book.');
          console.error('Failed to load book:', data);
        }
      } catch (error) {
        console.error('Error loading book:', error);
        setMessage('❌ Error loading book.');
      }
    };

    fetchBook();
  }, [isEdit, bookId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Prepare the request body
      const requestBody = {
        ...form,
        year: form.year ? Number(form.year) : null,
        quantity: Number(form.quantity) || 1,
      };

      console.log('Submitting form data:', requestBody);
      console.log('Edit mode:', isEdit, 'Book ID:', bookId);

      const response = await fetch(isEdit ? `/api/librarian/books/${bookId}/edit` : '/api/librarian/books/add', {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response data:', data);

      if (data.success) {
        setMessage(isEdit ? '✅ Book updated!' : '✅ Book and copies added!');
        if (isEdit) {
          // Optionally redirect or reset form after edit
          setTimeout(() => {
            setForm(initialForm)
            router.replace(`/librarian/books/${bookId}`);
          }, 0);
        }
        if (!isEdit) setForm(initialForm);
      } else {
        setMessage(data.message || '❌ Operation failed.');
        console.error('API Error:', data);
      }
    } catch (error) {
      console.error('Network Error:', error);
      setMessage('❌ Network error. Please check your connection.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl mb-4 shadow-lg">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-2">{isEdit ? "Edit Book" : "Add New Book"}</h1>
          <p className="text-slate-600 text-lg">Expand your library collection</p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 space-y-8">
          {/* Main Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Title */}
            <div className="lg:col-span-2">
              <label className="flex items-center text-sm font-semibold text-slate-700 mb-3">
                <BookOpen className="w-4 h-4 mr-2 text-indigo-600" />
                Book Title *
              </label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-200 text-slate-800 placeholder-slate-400"
                placeholder="Enter the book title..."
              />
            </div>

            {/* Author */}
            <div>
              <label className="flex items-center text-sm font-semibold text-slate-700 mb-3">
                <User className="w-4 h-4 mr-2 text-indigo-600" />
                Author *
              </label>
              <input
                name="author"
                value={form.author}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-200 text-slate-800 placeholder-slate-400"
                placeholder="Author name..."
              />
            </div>

            {/* Year */}
            <div>
              <label className="flex items-center text-sm font-semibold text-slate-700 mb-3">
                <Calendar className="w-4 h-4 mr-2 text-indigo-600" />
                Publication Year *
              </label>
              <select
                name="year"
                value={form.year}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-200 text-slate-800"
              >
                <option value="">Select year...</option>
                {years.map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            {/* ISBN */}
            <div>
              <label className="flex items-center text-sm font-semibold text-slate-700 mb-3">
                <Hash className="w-4 h-4 mr-2 text-indigo-600" />
                ISBN
              </label>
              <input
                name="isbn"
                value={form.isbn}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-200 text-slate-800 placeholder-slate-400"
                placeholder="978-3-16-148410-0"
              />
            </div>

            {/* Genre */}
            <div>
              <label className="flex items-center text-sm font-semibold text-slate-700 mb-3">
                <Tag className="w-4 h-4 mr-2 text-indigo-600" />
                Genre
              </label>
              <input
                name="genre"
                value={form.genre}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-200 text-slate-800 placeholder-slate-400"
                placeholder="Fiction, Mystery, Romance..."
              />
            </div>

            {/* Quantity */}
            <div>
              <label className="flex items-center text-sm font-semibold text-slate-700 mb-3">
                <Package className="w-4 h-4 mr-2 text-indigo-600" />
                Quantity *
              </label>
              <input
                name="quantity"
                type="number"
                min={1}
                value={form.quantity}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-200 text-slate-800 placeholder-slate-400"
                placeholder="How many copies?"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="flex items-center text-sm font-semibold text-slate-700 mb-3">
                <Image className="w-4 h-4 mr-2 text-indigo-600" />
                Cover Image URL
              </label>
              <input
                name="image_url"
                value={form.image_url}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-200 text-slate-800 placeholder-slate-400"
                placeholder="https://example.com/book-cover.jpg"
              />
            </div>

            {/* Image Preview */}
            {form.image_url && (
              <div className="flex justify-center items-center p-4 bg-slate-50/50 rounded-xl border-2 border-dashed border-slate-200">
                <div className="text-center">
                  <img
                    src={form.image_url}
                    alt="Book cover preview"
                    className="rounded-lg w-32 h-40 object-cover shadow-lg mx-auto mb-2 border border-slate-200"
                  />
                  <p className="text-xs text-slate-500">Cover Preview</p>
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="flex items-center text-sm font-semibold text-slate-700 mb-3">
              <FileText className="w-4 h-4 mr-2 text-indigo-600" />
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-200 text-slate-800 placeholder-slate-400 resize-none"
              placeholder="Brief description or summary of the book..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-w-[160px]"
            >
              <span className="flex items-center justify-center">
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    {isEdit ? "Editing..." : "Adding..."}
                  </>
                ) : (
                  <>
                    <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    {isEdit ? "Edit Book" : "Add Book"}
                  </>
                )}
              </span>
            </button>
          </div>

          {/* Message */}
          {message && (
            <div className={`text-center p-4 rounded-xl font-medium transition-all duration-300 ${message.startsWith('✅')
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
