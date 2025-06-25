export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 ">
        <h1 className="p-2 m-2 font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-serif">
            Welcome To My Website
        </h1>
        <p className="mb-4 text-2xl">
            This is a simple Next.js application with a list of projects.
        </p>
        <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-white">
                Click Me
            </button>
            <button className="bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-white">
                Contact
            </button>
        </div>
    </div>
  );
}