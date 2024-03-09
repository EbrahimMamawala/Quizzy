"use client";
import React from 'react'
import {useState} from 'react'
import Link from "next/link";

const CreateQuiz = ({ type, post, setPost, submitting, handleSubmit }) => {

  return (
    <div className='mt-24 p-12'>
        <h1 className='text-2xl font-bold sm:text-5xl'>Create a new quiz</h1>
        <div className="my-7">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name of the quiz:
            </label>
            <input
            type="text"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
            />
        </div>

        <div className='mt-6 py-4 px-4 rounded-lg bg-blue-300 w-36 cursor-pointer hover:bg-blue-400'>Add a Question</div>

        <form onSubmit={handleSubmit}>
            <div className='className="w-full mx-auto my-4 p-6 bg-white rounded-md shadow-md'>
                <div className="mb-4">
                    <label htmlFor="question" className="block text-sm font-medium text-gray-600">
                    Question:
                    </label>
                    <input
                    type="text"
                    id="question"
                    name="question"
                    value={post.q1}
                    onChange={(e) => setPost({ ...post, q1: e.target.value })}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="option1" className="block text-sm font-medium text-gray-600">
                    Option 1:
                    </label>
                    <input
                    type="text"
                    id="option1"
                    name="option1"
                    value={post.o11}
                    onChange={(e) => setPost({ ...post, o11: e.target.value })}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="option2" className="block text-sm font-medium text-gray-600">
                    Option 2:
                    </label>
                    <input
                    type="text"
                    id="option2"
                    name="option2"
                    value={formData.option2}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="option3" className="block text-sm font-medium text-gray-600">
                    Option 3:
                    </label>
                    <input
                    type="text"
                    id="option3"
                    name="option3"
                    value={formData.option3}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="option4" className="block text-sm font-medium text-gray-600">
                    Option 4:
                    </label>
                    <input
                    type="text"
                    id="option4"
                    name="option4"
                    value={formData.option4}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="answer" className="block text-sm font-medium text-gray-600">
                    Answer (option number):
                    </label>
                    <input
                    type="text"
                    id="answer"
                    name="answer"
                    value={formData.answer}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    pattern='[1-4]'
                    required
                    />
                </div>
            </div>
            <div className='flex-end mx-3 mb-5 gap-4'>
                <button
                    type="submit"
                    disabled={submitting}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    {submitting ? `${type}ing...` : type}
                </button>

                <Link href='/' className='text-gray-500 text-sm pl-5'>
                    Cancel
                </Link>
            </div>
        </form>

    </div>
  )
}

export default CreateQuiz