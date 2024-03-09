

const EditQuiz = () => {
    // const [formData, setFormData] = useState({
    //     question: '',
    //     option1: '',
    //     option2: '',
    //     option3: '',
    //     option4: '',
    //     answer: '',
    //   });
    
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData) => ({
    //       ...prevData,
    //       [name]: value,
    //     }));
    //   };
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const responseString = Object.entries(formData)
    //       .map(([key, value]) => `${key}: ${value}`)
    //       .join('\n');
    //     alert(responseString);
    //     // You can do whatever you want with the responseString, e.g., send it to a server.
    //   };

  return (
    <div>
        <div className='mt-24 p-12'>
        <h1 className='text-2xl font-bold sm:text-5xl'>Edit quiz</h1>
        <div className="my-7">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name of the quiz:
            </label>
            <input
            type="text"
            id="name"
            name="name"
            // value={formData.question}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
        </div>
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
                    // value={formData.question}
                    // onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
                    // value={formData.option1}
                    // onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
                    // value={formData.option2}
                    // onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
                    // value={formData.option3}
                    // onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
                    // value={formData.option4}
                    // onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
                    // value={formData.answer}
                    // onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
            </div>
            
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
                Save
            </button>
        </form>

    </div>
    </div>
  )
}

export default EditQuiz