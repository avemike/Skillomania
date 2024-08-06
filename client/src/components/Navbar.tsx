export function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav className="bg-transparent py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-grow">
          <a href="/" className="text-gray-800 hover:text-gray-600">
            Home
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="/contact" className="text-gray-800 hover:text-gray-600">
            Contact
          </a>
          <a href="/about" className="text-gray-800 hover:text-gray-600">
            About
          </a>
          <a href="/challenges" className="text-gray-800 hover:text-gray-600">
            Challenges
          </a>
        </div>
        <div className="flex items-center ml-auto">
          {token ? (
            <span className="text-gray-800">Logged in</span>
          ) : (
            <button className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-100">
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
