import React from 'react'

export default function Form({ addUser }) {



    const userRegister = (event) => {
        event.preventDefault();

        const currentUser = {
            name: event.target.userName.value,
            email: event.target.userEmail.value,
            country: event.target.userCountry.value,
            gender: event.target.gender.value
        }
        addUser(currentUser);
        event.target.reset();
    }

    return (
        <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Registration Form
            </h2>

            <form className="space-y-6" onSubmit={userRegister}>
                {/* Full Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        name='userName'
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name='userEmail'
                        placeholder="Enter your email"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                {/* Dropdown */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Country
                    </label>
                    <select name='userCountry' className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                        <option value="">Choose a country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                    </select>
                </div>

                {/* Radio Buttons */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                        Gender
                    </label>

                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 text-gray-700">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                            Male
                        </label>

                        <label className="flex items-center gap-2 text-gray-700">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                            Female
                        </label>

                        <label className="flex items-center gap-2 text-gray-700">
                            <input
                                type="radio"
                                name="gender"
                                value="other"
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                            Other
                        </label>
                    </div>
                </div>

                {/* Checkboxes */}
                {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Skills
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  name='skill'
                />
                HTML
              </label>

              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  name='skill'
                />
                CSS
              </label>

              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  name='skill'
                />
                JavaScript
              </label>

              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  name='skill'
                />
                React
              </label>
            </div>
          </div> */}
                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
                >
                    Register
                </button>
            </form>
        </div>
    )
}
