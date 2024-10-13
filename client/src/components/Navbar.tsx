import { useState } from "react";
import { LoginModal } from "./LoginModal";
import { Avatar } from "./Avatar";

export function Navbar() {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const token = localStorage.getItem("token");

  const handleLoginModalClose = () => setIsLoginModalVisible(false);
  const handleLoginModalOpen = () => setIsLoginModalVisible(true);

  return (
    <>
      <nav className="py-4 bg-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex-grow">
            <a href="/" className="text-gray-800 hover:text-gray-600">
              Home
            </a>
          </div>
          <div className="flex space-x-6">
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
          <div className="flex items-center ml-8">
            {token ? (
              <Avatar />
            ) : (
              <button
                onClick={handleLoginModalOpen}
                className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-100 "
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
      <LoginModal
        isOpen={isLoginModalVisible}
        onClose={handleLoginModalClose}
      />
    </>
  );
}
