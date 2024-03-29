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
                console.error('Error fetcitem.user && hing user data:', error);
            });
    }, []);

    return (
        <div className="overflow-x-auto">
            <h1 className='uppercase my-2 ml-2 text-base font-bold text-gray-700 text-center'>Applicant's Details</h1>
            <h1 className='uppercase my-2 ml-2 text-sm font-bold text-gray-700'>Total Number Of Applicant's:- {userData.length}</h1>
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
                    {userData.map((item, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.user && item.user.first_name} {item.user && item.user.middle_name ? item.user.middle_name : null} {item.user && item.user.last_name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.user && item.user.date_of_birth}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.user && item.user.father_name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.user && item.user.gender}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.user && item.user.email_id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.user && item.user.mobile_number}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.user && (item.user.alternate_mobile_number ? item.user.alternate_mobile_number : null)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.user && item.user.state}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.user && item.user.district}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.user && item.user.city}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.user && item.user.pincode}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.academicQualification && item.academicQualification.type_of_exam}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.academicQualification && item.academicQualification.institute_name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.academicQualification && item.academicQualification.qualifying_degree}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.academicQualification && item.academicQualification.branch}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.academicQualification && item.academicQualification.current_semister}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.marksheetDetails && item.marksheetDetails.grade_type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.marksheetDetails && item.marksheetDetails.percentage_or_cpi_or_cgpa}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.academicQualification && item.academicQualification.registration_number}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.skills && item.skills.first_preference}, {item.skills && item.skills.second_preference}, {item.skills && item.skills.third_preference}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.skills && item.skills.other_preference}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item.user && item.user.created_date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <a className='underline' href={`http://10.248.1.56:8080/uploads/${item.user.image_url}`}>Applicant's Passport Photo</a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <a className='underline' href={`http://10.248.1.56:8080/uploads/${item.user.signature_url}`}>Applicant's Signature</a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <a className='underline' href={`http://10.248.1.56:8080/uploads/${item.user.bonafide_url}`}>Bonafide Pdf</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserData;
