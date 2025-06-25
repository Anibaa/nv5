export default function Formulaire() {
    
  return (
    <div className="bg-gray-200 p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Form</h1>
        <form action="POST" className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-md w-md mx-auto">
            <label htmlFor="fullName">Name:</label>
            <input type="text" name="fullName" className="border border-gray-300 p-2 rounded-md" />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" className="border border-gray-300 p-2 rounded-md" />
            <label htmlFor="message">Message:</label>
            <textarea name="message" className="border border-gray-300 p-2 rounded-md"></textarea>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
    </div>


  )
    
}