import React from 'react';
import profile1 from "../assets/forum/profile1.jpg";
import { userAuth } from '../Context/AuthContext';
const UserProfile = () => {

  const {currentUser} = userAuth()
  const occupations = [
    "Technology",
    "Construction",
    "Finance",
    "Healthcare",
    "Education",
    "Marketing",
    "Science",
    "Engineering",
    "Business",
    "Hospitality",
  ];

  return (
    <div className="flex bg-gray-100">
      {/* Sidebar 
      
      <div className="hidden sm:block bg-white w-1/4 sm:w-1/5 border-r border-gray-300">
        <div className="h-full p-4 border border-gray-300">
          <h2 className="text-2xl font-bold">Sidebar</h2>
          Add sidebar content here 
        </div>
      </div> */}

      {/* Main Content */}
      <div className="flex-1 py-8 text-sm font-sans  px-4 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto pl-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex justify-center">
              <img
                className="w-32 h-32 rounded-full object-cover"
                src="/assets/forum/user.png"
                alt="User Profile"
              />
            </div>
            <div className="sm:col-span-2  text-left">
              <div className="grid grid-cols-2 gap-6 text-left">
                <div>
                  <label className="text-gray-600">First Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John"
                    value={currentUser.displayName}
                  />

                </div>
                <div>
                  <label className="text-gray-600">Last Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <label className="text-gray-600">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="johndoe@example.com"

                  />
                </div>
                <div>
                  <label className="text-gray-600">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="123-456-7890"
                  />
                </div>
                <div>
                  <label className="text-gray-600">Address</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="123 Street, City"
                  />
                </div>
                <div>
                  <label className="text-gray-600">State</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Sample State"
                  />
                </div>
                <div>
                  <label htmlFor="occupation" className="font-sans">
                    Field of Occupation
                  </label>
                  <select
                    id="occupation"
                    name="occupation"
                    className="w-full font-sans rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  >
                    {" "}
                    <option disabled selected value="">
                      -- Select Occupation --
                    </option>
                    {occupations.map((occupation) => (
                      <option className="font-sans" key={occupation} value={occupation}>
                        {occupation}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
