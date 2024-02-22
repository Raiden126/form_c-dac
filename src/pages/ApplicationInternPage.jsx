import React from 'react'
import PersonalInformation from '../components/PersonalInformationForm/PersonalInformation'
import AcademicQualification from '../components/AcademicQualificationForm/AcademicQualification'
import TaskPreference from '../components/TaskPreference/TaskPreference'
import StudentDeclaration from '../components/StudentDeclaration/StudentDeclaration'
import BonafideCertificate from '../components/BonafideCertificate/BonafideCertificate'
import TermsAndCondition from '../components/TermsAndCondition/TermsAndCondition'

const ApplicationInternPage = () => {
    return (
        <main className='flex justify-center items-center h-full flex-col'>
            <div className='h-full w-2/4 border-2 border-black border-solid rounded-md shadow-2xl mt-5 mb-5'>
                <PersonalInformation />
                <AcademicQualification />
                <TaskPreference />
                <StudentDeclaration />
                <BonafideCertificate />
                <TermsAndCondition />
            </div>
        </main>
    )
}

export default ApplicationInternPage