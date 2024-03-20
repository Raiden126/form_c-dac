import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserData = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get('http://10.248.1.56:8080/users/usersWithQualificationsAndSkills')
            .then((response) => {
                console.log(response.data);
                setUserData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    },[]);

    return (
            <div className="overflow-x-auto">
                <h1 className='uppercase my-2 ml-2 font-bold text-gray-700'>Applicant's Details</h1>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                Date Of Birth
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                Father's Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                Email ID
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                Phone No. (WhatsApp)
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                Alternate Phone No.
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                State
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                District
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                City
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                PIN Code
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                Education Type
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                Institute/College/University Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                Qualifying Degree
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                Branch
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                Semester
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                Grade Type
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                Grade
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                Registration/Roll No.
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                First, Second, Third Preference
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                Other Preference
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                Date of Submission
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                Student Photo
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                Student Signature
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                                Bonafide Signed Certificate
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {/* {userData.map((item, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.user.first_name} {item.user.middle_name} {item.user.last_name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.user.date_of_birth}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.user.father_name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.user.gender}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.user.email_id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.user.mobile_no}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                   null
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.user.state}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.user.district}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.user.city}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.user.pincode}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.user.image_url}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.user.bonafide_url}
                                </td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
    );
};

export default UserData;
