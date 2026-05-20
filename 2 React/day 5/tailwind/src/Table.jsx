import React from 'react'

export default function Table({ userData, setUserData }) {

    const deleteUser = (index) => {
        const oldData = [...userData];
        oldData.splice(index, 1);
        setUserData(oldData);
    }


    return (
        <div className="min-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-8 overflow-x-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Registered Users
            </h2>

            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-blue-600 text-white">
                        <th className="text-left px-6 py-3">S.No.</th>
                        <th className="text-left px-6 py-3">Name</th>
                        <th className="text-left px-6 py-3">Email</th>
                        <th className="text-left px-6 py-3">Country</th>
                        <th className="text-left px-6 py-3">Gender</th>
                        <th className="text-left px-6 py-3">Skills</th>
                        <th className="text-center px-6 py-3">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        userData.map(
                            (value, index) => {
                                console.log(value);
                                return (
                                    <tr className="border-b hover:bg-gray-50">
                                        <td className="px-6 py-4">{index + 1}</td>
                                        <td className="px-6 py-4">{value.name}</td>
                                        <td className="px-6 py-4">{value.email}</td>
                                        <td className="px-6 py-4">{value.country}</td>
                                        <td className="px-6 py-4">{value.gender}</td>
                                        {/* <td className="px-6 py-4">{value.skills + " "}</td> */}

                                        <td className="px-6 py-4 text-center space-x-2">
                                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm">
                                                Edit
                                            </button>

                                            <button onClick={() => deleteUser(index)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        )
                    }


                </tbody>
            </table>
        </div>
    )
}
