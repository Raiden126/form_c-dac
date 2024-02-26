import React, { useState } from 'react'
import PersonalInformation from '../components/PersonalInformationForm/PersonalInformation'
import AcademicQualification from '../components/AcademicQualificationForm/AcademicQualification'
import TaskPreference from '../components/TaskPreference/TaskPreference'
import StudentDeclaration from '../components/StudentDeclaration/StudentDeclaration'
import BonafideCertificate from '../components/BonafideCertificate/BonafideCertificate'
import TermsAndCondition from '../components/TermsAndCondition/TermsAndCondition'

const ApplicationInternPage = () => {
    const [showPreview, setShowPreview] = useState(false);
    const [formData, setFormData] = useState({
        firstname: '',
        middlename: '',
        lastname: '',
        dob: '',
        fathersfirstname: '',
        fathersmiddlename: '',
        fatherslastname: '',
        gender: '',
        email: '',
        phonenumber: '',
        altphonenumber: '',
        firstPreference: '',
        secondPreference: '',
        thirdPreference: '',
        otherPreference: '',
        photo: null,
        studentDeclarationSignature: null,
        uploadForm: null,
        studentTermsAndCondition: null,
    })

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
            <div className={`p-3 h-full w-11/12 md:w-3/4 border border-gray-300 border-solid rounded-md mt-5 mb-5 ${showPreview ?'h-full; overflow-y-hidden' : 'overflow-auto'}`}>
                    <PersonalInformation formData={formData} handleChange={handleChange} />
                    <AcademicQualification />
                    <TaskPreference formData={formData} handleChange={handleChange} />
                    <StudentDeclaration formData={formData} handleChange={handleChange} />
                    <BonafideCertificate formData={formData} handleChange={handleChange} />
                    <TermsAndCondition onSubmit={handleSubmit} formData={formData} handleChange={handleChange} />
            </div>
            {showPreview && (
                <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-900 bg-opacity-50">
                <div className='w-11/12 md:w-4/6 text-black bg-white bg-opacity-95 border-2 h-96 border-black border-solid rounded-md shadow-red-950 shadow-2xl overflow-auto'>
                        <h1 className='mt-3 text-xl text-blue-600 font-medium m-3 md:ml-3'>Personal Information</h1>
                        <hr className='border border-black m-3 md:ml-3 w-11/12' />
                        <label className='text-base md:text-lg font-medium md:font-semibold mt-5 ml-3 md:ml-3 mb-3 sm:flex'>Full Name:
                            <p className='text-base md:text-lg font-medium md:font-semibold ml-3 sm:ml-3'>{formData.firstname} {formData.middlename} {formData.lastname}</p>
                        </label>
                        <label className='text-base md:text-lg font-medium md:font-semibold mt-5 ml-3 md:ml-3 mb-3 sm:flex'>Date of Birth:
                            <p className='text-base md:text-lg font-medium md:font-semibold ml-3 sm:ml-3'>{formData.dob}</p>
                        </label>
                        <label className='text-base md:text-lg font-medium md:font-semibold mt-5 ml-3 md:ml-3 mb-3 sm:flex'>Father's Full Name:
                            <p className='text-base md:text-lg font-medium md:font-semibold ml-3 sm:ml-3'>{formData.fathersfirstname} {formData.fathersmiddlename} {formData.fatherslastname}</p>
                        </label>
                        <label className='text-base md:text-lg font-medium md:font-semibold mt-5 ml-3 md:ml-3 mb-3 sm:flex'>Gender:
                            <p className='text-base md:text-lg font-medium md:font-semibold ml-3 sm:ml-3'>{formData.gender}</p>
                        </label>
                        <label className='text-base md:text-lg font-medium md:font-semibold mt-5 ml-3 md:ml-3 mb-3 sm:flex'>Email ID:
                            <p className='text-base md:text-lg font-medium md:font-semibold ml-3 sm:ml-3'>{formData.email}</p>
                        </label>
                        <label className='text-base md:text-lg font-medium md:font-semibold mt-5 ml-3 md:ml-3 mb-3 sm:flex'>Phone Number:
                            <p className='text-base md:text-lg font-medium md:font-semibold ml-3 sm:ml-3'>{formData.phonenumber}</p>
                        </label>
                        <label className='text-base md:text-lg font-medium md:font-semibold mt-5 ml-3 md:ml-3 mb-3 sm:flex'>Alternate Number:
                            <p className='text-base md:text-lg font-medium md:font-semibold ml-3 sm:ml-3'>{formData.altphonenumber}</p>
                        </label>
                        <label className='text-base md:text-lg font-medium md:font-semibold mt-5 ml-3 md:ml-3 mb-3 sm:flex'>Photo:
                            <p className='text-base md:text-lg font-medium md:font-semibold ml-3 sm:ml-3'>{formData.photo ? formData.photo.name : 'Please Upload Your Photo'}</p>
                        </label>
                        <h1 className='mt-3 text-xl text-blue-600 font-medium m-3 md:ml-3'>Task Preference</h1>
                        <hr className='border border-black m-3 md:ml-3 w-11/12' />
                        <label className='text-base md:text-lg font-medium md:font-semibold mt-5 ml-3 md:ml-3 mb-3 sm:flex'>First Preference:
                            <p className='text-base md:text-lg font-medium md:font-semibold ml-3 sm:ml-3'>{formData.firstPreference}</p>
                        </label>
                        <label className='text-base md:text-lg font-medium md:font-semibold mt-5 ml-3 md:ml-3 mb-3 sm:flex'>Second Preference:
                            <p className='text-base md:text-lg font-medium md:font-semibold ml-3 sm:ml-3'>{formData.secondPreference}</p>
                        </label>
                        <label className='text-base md:text-lg font-medium md:font-semibold mt-5 ml-3 md:ml-3 mb-3 sm:flex'>Third Preference:
                            <p className='text-base md:text-lg font-medium md:font-semibold ml-3 sm:ml-3'>{formData.thirdPreference}</p>
                        </label>
                        <label className='text-base md:text-lg font-medium md:font-semibold mt-5 ml-3 md:ml-3 mb-3 sm:flex'>Other Preference:
                            <p className='text-base md:text-lg font-medium md:font-semibold ml-3 sm:ml-3'>{formData.otherPreference}</p>
                        </label>
                        <h1 className='mt-3 text-xl text-blue-600 font-medium m-3 md:ml-3'>Student Declaration</h1>
                        <hr className='border border-black m-3 md:ml-3 w-11/12' />
                        <label className='text-base md:text-lg font-medium md:font-semibold mt-5 ml-3 md:ml-3 mb-3 sm:flex'>Signature Of Student:
                            <p className='text-base md:text-lg font-medium md:font-semibold ml-3 sm:ml-3'>{formData.studentDeclarationSignature ? formData.studentDeclarationSignature.name : 'Please Upload Your Signature'}</p>
                        </label>
                        <h1 className='mt-3 text-xl text-blue-600 font-medium m-3 md:ml-3'>Bonafide Certificate</h1>
                        <hr className='border border-black m-3 md:ml-3 w-11/12' />
                        <label className='text-base md:text-lg font-medium md:font-semibold mt-5 ml-3 md:ml-3 mb-3 sm:flex'>Signed Bonafide Certificate:
                            <p className='text-base md:text-lg font-medium md:font-semibold ml-3 sm:ml-3'>{formData.uploadForm ? formData.uploadForm.name : 'Please Upload Your Bonafide Certificate'}</p>
                        </label>
                        <h1 className='mt-3 text-xl text-blue-600 font-medium m-3 md:ml-3'>Terms And Condition</h1>
                        <hr className='border border-black m-3 md:ml-3 w-11/12' />
                        <label className='text-base md:text-lg font-medium md:font-semibold mt-5 ml-3 md:ml-3 mb-3 sm:flex'>Signature Of Student:
                            <p className='text-base md:text-lg font-medium md:font-semibold ml-3 sm:ml-3'>{formData.studentTermsAndCondition ? formData.studentTermsAndCondition.name : 'Please Upload Your Signature'}</p>
                        </label>
                        <button className='text-base md:text-lg mb-5 mt-3 font-medium md:font-semibold ml-3 md:ml-3 border border-solid border-black h-8 w-20 rounded-md bg-blue-800 text-white hover:bg-blue-600 text-center' onClick={closeButton}>Edit</button>
                        <button className='text-base md:text-lg mb-5 mt-3 font-medium md:font-semibold ml-3 md:ml-3 border border-solid border-black h-8 w-20 rounded-md bg-blue-800 text-white hover:bg-blue-600 text-center'>Continue</button>
                    </div>
                </div>
            )}
        </main>
    )
}

export default ApplicationInternPage