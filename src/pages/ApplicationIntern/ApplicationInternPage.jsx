import React, { useState, useEffect } from 'react'
import PersonalInformation from '../../components/PersonalInformationForm/PersonalInformation'
import AcademicQualification from '../../components/AcademicQualificationForm/AcademicQualification'
import TaskPreference from '../../components/TaskPreference/TaskPreference'
import StudentDeclaration from '../../components/StudentDeclaration/StudentDeclaration'
import BonafideCertificate from '../../components/BonafideCertificate/BonafideCertificate'
import TermsAndCondition from '../../components/TermsAndCondition/TermsAndCondition'
import axios from 'axios'

const ApplicationInternPage = () => {
    const [showPreview, setShowPreview] = useState(false);
    const [formData, setFormData] = useState({
        firstname: '',
        middlename: '',
        lastname: '',
        dob: '',
        fatherfullname: '',
        gender: '',
        email: '',
        phonenumber: '',
        altphonenumber: '',
        state: '',
        district: '',
        city: '',
        pincode: '',
        firstPreference: '',
        secondPreference: '',
        thirdPreference: '',
        otherPreference: '',
        photo: null,
        studentDeclarationSignature: null,
        uploadForm: null,
        studentTermsAndCondition: null,
        termsDob: '',
        termsPlace: '',
        termsAndConditionAccepted: false
    })
    const [error, setError] = useState('')

    const continueButton = async (e) => {
        e.preventDefault();
        alert("Your Form Have Been Submitted Successfully");
    
        const mappedFormData = {
            first_name: formData.firstname,
            middle_name: formData.middlename,
            last_name: formData.lastname,
            date_of_birth: formData.dob,
            father_name: formData.fatherfullname,
            gender: formData.gender,
            email_id: formData.email,
            mobile_number: formData.phonenumber,
            alternate_mobile_number: formData.altphonenumber,
            document: formData.photo,
            city: formData.city,
            district: formData.district,
            state: formData.state,
            pincode: formData.pincode,
            type_of_exam: academicQualificationData.selectedGraduation,
            institute_name: (academicQualificationData.selectedPostInstitute || academicQualificationData.selectedUnderInstitute !== 'other') ? (  academicQualificationData.selectedUnderInstitute || academicQualificationData.selectedPostInstitute) : (academicQualificationData.otherPostUniversity || academicQualificationData.otherUnderUniversity),
            qualifying_degree: academicQualificationData.selectedPostDegree || academicQualificationData.selectedUnderDegree,
            branch: academicQualificationData.selectedPostBranch || academicQualificationData.selectedUnderBranch,
            current_semister: academicQualificationData.selectedPostSemester || academicQualificationData.selectedUnderSemester,
            grade_type: academicQualificationData.underGradeType || academicQualificationData.postGradeType,
            percentage_or_cpi_or_cgpa : academicQualificationData.underGrade || academicQualificationData.postGrade,
            maximum_percentage_or_cpi_or_cgpa: academicQualificationData.underGrade || academicQualificationData.postGrade,
            first_preference: formData.firstPreference,
            second_preference: formData.secondPreference,
            third_preference: formData.thirdPreference,
            other_preference: formData.otherPreference,
            registration_number : academicQualificationData.selectedPostRegistration || academicQualificationData.selectedUnderRegistration,
            documentsignature: formData.studentDeclarationSignature,
            documentbonafide: formData.uploadForm,
            termsAndConditionAccepted: formData.termsAndConditionAccepted,
            created_date: formData.termsDob
        };
    
        const backendUrl = 'http://192.168.60.24:8081/users/validate';
    
        const formDataToSend = new FormData();
        for (const key in mappedFormData) {
            formDataToSend.append(key, mappedFormData[key]);
        }

        await axios.post(backendUrl, formDataToSend, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
            .then(res => {
                console.log('axios response:', res);
                location.reload();
            })
            .catch(err => {
                console.error('axios error:', err);
                setError('There Is An Error, Please Check That Everything Is Correct On Your Form')
            });
    };

    const [academicQualificationData, setAcademicQualificationData] = useState({});
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);
        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);

    const updateAcademicQualification = (data) => {
        setAcademicQualificationData(data);
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target
        console.log(e.target)

        if (type === 'file') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: files[0],
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    }

    const closeButton = (e) => {
        e.preventDefault();
        setShowPreview(false)
    }

    const handleSubmit = () => {
        setShowPreview(true)
    }

    return (
        <main className='flex justify-center items-center h-full flex-col'>
            <div className={`p-3 h-full w-11/12 md:w-3/4 border border-gray-300 border-solid rounded-md mt-3 mb-5 ${showPreview ? 'h-full; overflow-y-hidden' : 'overflow-auto'}`}>
                <PersonalInformation formData={formData} handleChange={handleChange} />
                <AcademicQualification onUpdateAcademicQualification={updateAcademicQualification} />
                <TaskPreference formData={formData} handleChange={handleChange} />
                <StudentDeclaration formData={formData} handleChange={handleChange} />
                <BonafideCertificate formData={formData} handleChange={handleChange} />
                <TermsAndCondition onSubmit={handleSubmit} formData={formData} handleChange={handleChange}/>
            </div>
            {showPreview && (
                <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-900 bg-opacity-50">
                    <div className='w-11/12 md:w-4/6 text-black bg-white bg-opacity-95 border-2 h-4/5 border-solid rounded-lg shadow-red-950 shadow-2xl overflow-auto'>
                        <div className='top-2 left-0 right-0 shadow-sm mt-1 flex justify-center items-center h-16'>
                            <h1 className='text-2xl text-blue-600 font-semibold'>Preview</h1>
                        </div>
                        <h1 className='mt-2 text-xl text-blue-600 font-medium ml-3 mb-1 md:ml-3'>Personal Information</h1>
                        <hr className='border border-black ml-3 mt-1 mb-3 md:ml-3 w-11/12' />
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Full Name:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.firstname} {formData.middlename} {formData.lastname}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Date of Birth:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.dob}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Father's Full Name:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.fatherfullname}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Gender:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.gender}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Email ID:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.email}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Phone Number:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.phonenumber}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Alternate Number:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.altphonenumber}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>State:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.state}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>District:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.district}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>City:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.city}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>PIN Code:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.pincode}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Photo:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.photo ? formData.photo.name : 'Please Upload Your Photo'}</p>
                            </div>
                        </div>
                        <h1 className='mt-6 text-xl text-blue-600 font-medium ml-3 mb-1 md:ml-3'>Academic Qualification</h1>
                        <hr className='border border-black ml-3 mt-1 mb-3 md:ml-3 w-11/12' />
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Education Type:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.selectedGraduation}</p>
                            </div>
                        </div>
                        {academicQualificationData.selectedGraduation === 'Post Graduate' && (
                            <>
                                <div className='flex'>
                                    <div className='basis-2/5'>
                                        <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Institute Name:</label>
                                    </div>
                                    <div className='basis-3/5'>
                                        {academicQualificationData.selectedPostInstitute === 'other' ? <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.otherPostUniversity}</p> : <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.selectedPostInstitute}</p>}
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='basis-2/5'>
                                        <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Qualifying Degree:</label>
                                    </div>
                                    <div className='basis-3/5'>
                                        <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.selectedPostDegree}</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='basis-2/5'>
                                        <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Branch:</label>
                                    </div>
                                    <div className='basis-3/5'>
                                        <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.selectedPostBranch}</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='basis-2/5'>
                                        <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Current Semester:</label>
                                    </div>
                                    <div className='basis-3/5'>
                                        <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.selectedPostSemester}</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='basis-2/5'>
                                        <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>{academicQualificationData.postGradeType}:</label>
                                    </div>
                                    <div className='basis-3/5'>
                                        <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.postGrade}</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='basis-2/5'>
                                        <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Registration/Roll No:</label>
                                    </div>
                                    <div className='basis-3/5'>
                                        <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.selectedPostRegistration}</p>
                                    </div>
                                </div>


                                {/* Under Graduate */}


                                <div className='flex'>
                                    <div className='basis-2/5'>
                                        <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Education Type:</label>
                                    </div>
                                    <div className='basis-3/5'>
                                        <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.selectedPostGraduation}</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='basis-2/5'>
                                        <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Institute Name:</label>
                                    </div>
                                    <div className='basis-3/5'>
                                        {academicQualificationData.selectedUnderInstitute === 'other' ? <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.otherUnderUniversity}</p> : <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.selectedUnderInstitute}</p>}
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='basis-2/5'>
                                        <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Qualifying Degree:</label>
                                    </div>
                                    <div className='basis-3/5'>
                                        <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.selectedUnderDegree}</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='basis-2/5'>
                                        <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Branch:</label>
                                    </div>
                                    <div className='basis-3/5'>
                                        <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.selectedUnderBranch}</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='basis-2/5'>
                                        <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Current Semester:</label>
                                    </div>
                                    <div className='basis-3/5'>
                                        <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.selectedUnderSemester}</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='basis-2/5'>
                                        <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>{academicQualificationData.underGradeType}:</label>
                                    </div>
                                    <div className='basis-3/5'>
                                        <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.underGrade}</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='basis-2/5'>
                                        <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Registration/Roll No:</label>
                                    </div>
                                    <div className='basis-3/5'>
                                        <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.selectedUnderRegistration}</p>
                                    </div>
                                </div>
                            </>
                        )}
                        {academicQualificationData.selectedGraduation === 'Under Graduate' && (
                            <>
                                <div className='flex'>
                                    <div className='basis-2/5'>
                                        <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Institute Name:</label>
                                    </div>
                                    <div className='basis-3/5'>
                                        {academicQualificationData.selectedUnderInstitute === 'other' ? <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.otherUnderUniversity}</p> : <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.selectedUnderInstitute}</p>}
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='basis-2/5'>
                                        <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Qualifying Degree:</label>
                                    </div>
                                    <div className='basis-3/5'>
                                        <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.selectedUnderDegree}</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='basis-2/5'>
                                        <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Branch:</label>
                                    </div>
                                    <div className='basis-3/5'>
                                        <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.selectedUnderBranch}</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='basis-2/5'>
                                        <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Current Semester:</label>
                                    </div>
                                    <div className='basis-3/5'>
                                        <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.selectedPostSemester}</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='basis-2/5'>
                                        <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>{academicQualificationData.underGradeType}:</label>
                                    </div>
                                    <div className='basis-3/5'>
                                        <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.underGrade}</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='basis-2/5'>
                                        <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Registration/Roll No:</label>
                                    </div>
                                    <div className='basis-3/5'>
                                        <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{academicQualificationData.selectedUnderRegistration}</p>
                                    </div>
                                </div>
                            </>
                        )}
                        <h1 className='mt-6 text-xl text-blue-600 font-medium ml-3 mb-1 md:ml-3'>Task Preference</h1>
                        <hr className='border border-black ml-3 mt-1 mb-3 md:ml-3 w-11/12' />
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>First Preference:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.firstPreference}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Second Preference:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.secondPreference}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Third Preference:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.thirdPreference}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Other Preference:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.otherPreference}</p>
                            </div>
                        </div>
                        <h1 className='mt-6 text-xl text-blue-600 font-medium ml-3 mb-1 md:ml-3'>Student Declaration</h1>
                        <hr className='border border-black ml-3 mt-1 mb-3 md:ml-3 w-11/12' />
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Sign. Of Student:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.studentDeclarationSignature ? formData.studentDeclarationSignature.name : 'Please Upload Your Signature'}</p>
                            </div>
                        </div>
                        <h1 className='mt-6 text-xl text-blue-600 font-medium ml-3 mb-1 md:ml-3'>N.O.C Certificate</h1>
                        <hr className='border border-black ml-3 mt-1 mb-3 md:ml-3 w-11/12' />
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>N.O.C Certificate:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.uploadForm ? formData.uploadForm.name : 'Please Upload Your Bonafide Certificate'}</p>
                            </div>
                        </div>
                        <h1 className='mt-6 text-xl text-blue-600 font-medium ml-3 mb-1 md:ml-3'>Terms And Condition</h1>
                        <hr className='border border-black ml-3 mt-1 mb-3 md:ml-3 w-11/12' />
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Sign. Of Student:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.studentTermsAndCondition ? formData.studentTermsAndCondition.name : 'Please Upload Your Signature'}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Date Of Submission:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.termsDob}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='basis-2/5'>
                                <label className={`text-base ${windowWidth < 450 && 'text-xs'} md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-[0.10rem] sm:flex`}>Your Address:</label>
                            </div>
                            <div className='basis-3/5'>
                                <p className={`text-base ${windowWidth < 450 && 'text-xs mt-[0.33rem]'} md:text-lg font-medium md:font-normal ml-10 sm:ml-6`}>{formData.termsPlace}</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='text-base md:text-lg mb-2 mt-3 font-medium md:font-semibold ml-3 md:ml-3 border border-solid border-black h-8 w-20 rounded-md bg-blue-800 text-white hover:bg-blue-600 text-center' onClick={closeButton}>Edit</button>
                            <button className='text-base md:text-lg mb-2 mt-3 font-medium md:font-semibold ml-3 md:ml-3 border border-solid border-black h-8 w-20 rounded-md bg-blue-800 text-white hover:bg-blue-600 text-center' onClick={continueButton}>Continue</button>
                            
                        </div>
                        <p className={`text-base ${windowWidth < 450 && 'text-xs'} text-red-700 md:text-lg font-medium md:font-semibold mt-0 ml-4 md:ml-6 mb-3 sm:flex`}>{error}</p>
                    </div>
                </div>
            )}
        </main>
    )
}

export default ApplicationInternPage