import React, { useEffect, useState } from 'react'
import AddSemester from '../AddSemester';

const AcademicQualification = ({ onUpdateAcademicQualification }) => {
    const [selectedGraduation, setSelectedGraduation] = useState('');
    const [selectedPostGraduation, setSelectedPostGraduation] = useState('');

    const [selectedPostInstitute, setSelectedPostInstitute] = useState('');
    const [otherPostUniversity, setOtherPostUniversity] = useState('');
    const [selectedPostDegree, setSelectedPostDegree] = useState('');
    const [selectedPostBranch, setSelectedPostBranch] = useState('');
    const [selectedPostSemester, setSelectedPostSemester] = useState('');
    const [selectedPostRegistration, setSeclectedPostRegistration] = useState('');
    const [postGradeType, setPostGradeType] = useState('');
    const [postGrade, setPostGrade] = useState('');
    const [postAddSemester, setPostAddSemester] = useState([])

    const [selectedUnderInstitute, setSelectedUnderInstitute] = useState('');
    const [otherUnderUniversity, setOtherUnderUniversity] = useState('');
    const [selectedUnderDegree, setSelectedUnderDegree] = useState('');
    const [selectedUnderBranch, setSelectedUnderBranch] = useState('');
    const [selectedUnderRegistration, setSeclectedUnderRegistration] = useState('');
    const [selectedUnderSemester, setSelectedUnderSemester] = useState('');
    const [underGradeType, setUnderGradeType] = useState('');
    const [underGrade, setUnderGrade] = useState('');

    const handleGraduationChange = (e) => {
        const selectedGraduationChange = e.target.value;

        if (selectedGraduationChange === 'Post Graduate') {
            setSelectedGraduation('Post Graduate')
        } else if (selectedGraduationChange === 'Under Graduate') {
            setSelectedGraduation('Under Graduate')
        } else {
            setSelectedGraduation(selectedGraduationChange)
        }
    }

    const handlePostGraduationChange = (e) => {
        const selectedPostGraduationChange = e.target.value;

        if (selectedPostGraduationChange === 'Post Graduate') {
            setSelectedPostGraduation('Post Graduate')
        } else if (selectedPostGraduationChange === 'Under Graduate') {
            setSelectedPostGraduation('Under Graduate')
        } else {
            setSelectedPostGraduation(selectedPostGraduationChange)
        }
    }

    const handlePostInstituteChange = (e) => {
        const selectedValue = e.target.value;

        if (selectedValue === 'other') {
            setSelectedPostInstitute('other')
        } else {
            setSelectedPostInstitute(selectedValue)
        }
    }

    const handleInputChange = (field, value) => {
        if (field === 'selectedPostSemester') {
            if (value === '1' || value === '2' || value === '3' || value === '4' || value === '5' || value === '6' || value === '7' || value === '8') {
                setSelectedPostSemester(value);
            } else {
                setSelectedPostSemester('');
            }
        } else if (field === 'selectedPostDegree') {
            setSelectedPostDegree(value);
        }
    };

    const handleInputUnderChange = (field, value) => {
        if (field === 'selectedUnderSemester') {
            if (value === 'Completed') {
                setSelectedUnderSemester(value);
            } else {
                setSelectedUnderSemester('');
            }
        }
    };


    const handlePostAddSemester = (e) => {
        e.preventDefault();
        setPostAddSemester((prevSections) => [
            ...prevSections,
            { select: '', percentage: '', maxPercentage: '' },
        ]);
    };

    const handleRemoveSem = (e, index) => {
        e.preventDefault();
        setPostAddSemester((prevSections) =>
            prevSections.filter((_, i) => i !== index)
        );
    };

    const handleUnderInstituteChange = (e) => {
        const selectedValue = e.target.value;

        if (selectedValue === 'other') {
            setSelectedUnderInstitute('other')
        } else {
            setSelectedUnderInstitute(selectedValue)
        }
    }

    const handleOtherPostUnivesity = (e) => {
        setOtherPostUniversity(e.target.value);
    }

    const handleOtherUnderUnivesity = (e) => {
        setOtherUnderUniversity(e.target.value);
    }

    const handlePostDegreeChange = (e) => {
        setSelectedPostDegree(e.target.value)
    }

    const handleUnderDegreeChange = (e) => {
        setSelectedUnderDegree(e.target.value)
    }

    const handlePostBranchChange = (e) => {
        setSelectedPostBranch(e.target.value)
    }

    const handleUnderBranchChange = (e) => {
        setSelectedUnderBranch(e.target.value)
    }

    const handlePostRegistrationChange = (e) => {
        setSeclectedPostRegistration(e.target.value)
    }

    const handleUnderRegistrationChange = (e) => {
        setSeclectedUnderRegistration(e.target.value)
    }

    const handlePostGradeType = (e) => {
        setPostGradeType(e.target.value)
    }

    const handlePostGrade = (e) => {
        setPostGrade(e.target.value)
    }

    const handleUnderGradeType = (e) => {
        setUnderGradeType(e.target.value)
    }

    const handleUnderGrade = (e) => {
        setUnderGrade(e.target.value)
    }

    useEffect(() => {
        onUpdateAcademicQualification({
            selectedGraduation,
            selectedPostGraduation,
            selectedPostInstitute,
            otherPostUniversity,
            selectedPostDegree,
            selectedPostBranch,
            selectedPostSemester,
            selectedPostRegistration,
            postAddSemester,
            selectedUnderInstitute,
            otherUnderUniversity,
            selectedUnderDegree,
            selectedUnderBranch,
            selectedUnderRegistration,
            selectedUnderSemester,
            postGradeType,
            postGrade,
            underGradeType,
            underGrade
        })
    }, [selectedGraduation, selectedPostGraduation,selectedUnderSemester, selectedPostInstitute, otherPostUniversity, selectedPostDegree, selectedPostBranch, selectedPostSemester, selectedPostRegistration, postAddSemester, selectedUnderInstitute, otherUnderUniversity, selectedUnderDegree, selectedUnderBranch, selectedUnderRegistration, postGradeType, postGrade, underGrade, underGradeType])


    return (
        <div>
            <h1 className='text-base font-medium mt-4'>Academic Qualification</h1>
            <hr className='border border-gray-400 mt-1 mb-1 w-11/12 ' />
            <form action='' method='' className='mt-4'>
                <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Education Type:
                    <select
                        name='qualifyingdegree'
                        value={selectedGraduation}
                        onChange={handleGraduationChange}

                        className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                    >
                        <option value="">Select-An-Option</option>
                        <option value="Post Graduate">Post Graduate</option>
                        <option value="Under Graduate">Under Graduate</option>
                    </select>
                </label>
                {selectedGraduation === 'Post Graduate' && (
                    <>
                        <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Institute/ College/ University Name:
                            <select
                                name='postinstitutename'
                                value={selectedPostInstitute}
                                onChange={handlePostInstituteChange}

                                className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                            >
                                <option value="">Select-An-Option</option>
                                <option value="Assam University, Silchar">Assam University, Silchar</option>
                                <option value="Gurucharan College">Gurucharan College</option>
                                <option value="Guwahati University">Guwahati University</option>
                                <option value="Tezpur University">Tezpur University</option>
                                <option value="Karimganj College">Karimganj College</option>
                                <option value="Cachar College">Cachar College</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                        {selectedPostInstitute === 'other' && (
                            <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Other University Name:
                                <input
                                    type='text'
                                    name='otherpostuniversity'
                                    value={otherPostUniversity}

                                    className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                                    onChange={handleOtherPostUnivesity}
                                />
                            </label>
                        )}
                        <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Qualifying Degree:
                            <select
                                value={selectedPostDegree}
                                onChange={handlePostDegreeChange}

                                className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                            >
                                <option value="">Select-An-Option</option>
                                <option value="M.E">M.E</option>
                                <option value="M.TECH">M.TECH</option>
                            </select>
                        </label>
                        <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Course of Study/ Branch:
                            <select
                                value={selectedPostBranch}
                                onChange={handlePostBranchChange}

                                className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                            >
                                <option value="">Select-An-Option</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Computer Engineering">Computer Engineering</option>
                            </select>
                        </label>
                        <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>
                            Current Semester
                            <select
                                className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                                value={selectedPostSemester}
                                onChange={(e) => handleInputChange('selectedPostSemester', e.target.value)}
                            >
                                <option value=''>Select-An-Option</option>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                                    <option key={value} value={String(value)}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </label>
                        {selectedPostSemester === '1' && (
                            <>
                                <div className='md:flex'>
                                    <div className='md:basis-1/2'>
                                        <label className='ml-1 md:ml-3'>Grade Type:
                                            <select
                                                value={postGradeType}
                                                onChange={handlePostGradeType}
                                                className='border block border-black border-solid rounded-md w-11/12 ml-1 md:ml-3 p-1 sm:w-10/12 md:text-xs md:h-7 md:w-[78%]'
                                            >
                                                <option value=''>Select-An-Option</option>
                                                <option value='Percentage'>Percentage</option>
                                                <option value='CGPA'>CGPA</option>
                                                <option value='CPI'>CPI</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className='md:basis-1/2'>
                                        <label className='ml-1'>Grade:
                                            <input
                                                value={postGrade}
                                                onChange={handlePostGrade}
                                                type='text'
                                                placeholder='ex: 88 or 8.8'
                                                className='border block border-black border-solid rounded-md w-11/12 ml-1 p-1 sm:w-10/12 md:text-xs md:h-7 md:w-[78%]'
                                            />
                                        </label>
                                    </div>
                                </div>
                            </>
                        )}
                        {selectedPostSemester >= 2 && selectedPostSemester <= 8 && (
                            <>
                                <div className='md:flex'>
                                    <div className='md:basis-1/2'>
                                        <label className='ml-1 md:ml-3'>Grade Type:
                                            <select
                                                value={postGradeType}
                                                onChange={handlePostGradeType}
                                                className='border block border-black border-solid rounded-md w-11/12 ml-1 md:ml-3 p-1 sm:w-10/12 md:text-xs md:h-7 md:w-[78%]'
                                            >
                                                <option value=''>Select-An-Option</option>
                                                <option value='Percentage'>Percentage</option>
                                                <option value='CGPA'>CGPA</option>
                                                <option value='CPI'>CPI</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className='md:basis-1/2'>
                                        <label className='ml-1'>Grade:
                                            <input
                                                type='text'
                                                value={postGrade}
                                                onChange={handlePostGrade}
                                                placeholder='ex: 88 or 8.8'
                                                className='border block border-black border-solid rounded-md w-11/12 ml-1 p-1 sm:w-10/12 md:text-xs md:h-7 md:w-[78%]'
                                            />
                                        </label>
                                    </div>
                                </div>
                                {postAddSemester.map((section, index) => (
                                    <AddSemester
                                        key={index}
                                        {...section}
                                        onRemove={(e) => handleRemoveSem(e, index)}
                                    />
                                ))}
                                <button
                                    className='bg-[#0052CC] border border-solid border-black m-1 h-7 w-24 text-xs md:ml-3 rounded-md text-white hover:bg-white hover:text-[#0052CC]'
                                    onClick={handlePostAddSemester}
                                >
                                    Add Semester
                                </button>
                            </>
                        )}
                        <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Registration No/ Roll No:
                            <input
                                type='text'
                                placeholder='ex: 1234'
                                value={selectedPostRegistration}
                                onChange={handlePostRegistrationChange}

                                className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                            />
                        </label>
                        <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Education Type:
                            <select
                                name='qualifyingdegree'
                                value={selectedPostGraduation}
                                onChange={handlePostGraduationChange}

                                className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                            >
                                <option value="">Select-An-Option</option>
                                <option value="Under Graduate">Under Graduate</option>
                            </select>
                        </label>
                        {selectedPostGraduation === 'Under Graduate' && (
                            <>
                                <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Institute/ College/ University Name:
                                    <select
                                        name='underinstitutename'
                                        value={selectedUnderInstitute}
                                        onChange={handleUnderInstituteChange}

                                        className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                                    >
                                        <option value="">Select-An-Option</option>
                                        <option value="Assam University, Silchar">Assam University, Silchar</option>
                                        <option value="Gurucharan College">Gurucharan College</option>
                                        <option value="Guwahati University">Guwahati University</option>
                                        <option value="Tezpur University">Tezpur University</option>
                                        <option value="Karimganj College">Karimganj College</option>
                                        <option value="Cachar College">Cachar College</option>
                                        <option value="other">Other</option>
                                    </select>
                                </label>
                                {selectedUnderInstitute === 'other' && (
                                    <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Other University Name:
                                        <input
                                            type='text'
                                            name='otherunderuniversity'
                                            value={otherUnderUniversity}

                                            className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                                            onChange={handleOtherUnderUnivesity}
                                        />
                                    </label>
                                )}
                                <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Qualifying Degree:
                                    <select
                                        value={selectedUnderDegree}
                                        onChange={handleUnderDegreeChange}

                                        className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                                    >
                                        <option value="">Select-An-Option</option>
                                        <option value="B.E">B.E</option>
                                        <option value="B.TECH">B.TECH</option>
                                    </select>
                                </label>
                                <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Course of Study/ Branch:
                                    <select
                                        value={selectedUnderBranch}
                                        onChange={handleUnderBranchChange}

                                        className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                                    >
                                        <option value="">Select-An-Option</option>
                                        <option value="Computer Science">Computer Science</option>
                                        <option value="Computer Engineering">Computer Engineering</option>
                                    </select>
                                </label>
                                <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>
                                    Final Grade:
                                    <select
                                        className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                                        value={selectedUnderSemester}
                                        onChange={(e) => handleInputUnderChange('selectedUnderSemester', e.target.value)}
                                    >
                                        <option value=''>Select-An-Option</option>
                                        <option value='Completed'>Completed</option>
                                    </select>
                                </label>
                                {selectedUnderSemester === 'Completed' && (
                                    <>
                                        <div className='md:flex'>
                                            <div className='md:basis-1/2'>
                                                <label className='ml-1 md:ml-3'>Grade Type:
                                                    <select
                                                        value={underGradeType}
                                                        onChange={handleUnderGradeType}
                                                        className='border block border-black border-solid rounded-md w-11/12 ml-1 md:ml-3 p-1 sm:w-10/12 md:text-xs md:h-7 md:w-[78%]'
                                                    >
                                                        <option value=''>Select-An-Option</option>
                                                        <option value='Percentage'>Percentage</option>
                                                        <option value='CGPA'>CGPA</option>
                                                        <option value='CPI'>CPI</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div className='md:basis-1/2'>
                                                <label className='ml-1'>Grade:
                                                    <input
                                                        value={underGrade}
                                                        onChange={handleUnderGrade}
                                                        type='text'
                                                        placeholder='ex: 88 or 8.8'
                                                        className='border block border-black border-solid rounded-md w-11/12 ml-1 p-1 sm:w-10/12 md:text-xs md:h-7 md:w-[78%]'
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </>
                                )}
                                <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Registration No/ Roll No:
                                    <input
                                        type='text'
                                        placeholder='ex: 1234'
                                        value={selectedUnderRegistration}
                                        onChange={handleUnderRegistrationChange}

                                        className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                                    />
                                </label>
                            </>
                        )}
                    </>
                )}
                {selectedGraduation === 'Under Graduate' && (
                    <>
                        <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Institute/ College/ University Name:
                            <select
                                name='underinstitutename'
                                value={selectedUnderInstitute}
                                onChange={handleUnderInstituteChange}

                                className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                            >
                                <option value="">Select-An-Option</option>
                                <option value="Assam University, Silchar">Assam University, Silchar</option>
                                <option value="Gurucharan College">Gurucharan College</option>
                                <option value="Guwahati University">Guwahati University</option>
                                <option value="Tezpur University">Tezpur University</option>
                                <option value="Karimganj College">Karimganj College</option>
                                <option value="Cachar College">Cachar College</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                        {selectedUnderInstitute === 'other' && (
                            <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Other University Name:
                                <input
                                    type='text'
                                    name='otherunderuniversity'
                                    value={otherUnderUniversity}

                                    className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                                    onChange={handleOtherUnderUnivesity}
                                />
                            </label>
                        )}
                        <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Qualifying Degree:
                            <select
                                value={selectedUnderDegree}
                                onChange={handleUnderDegreeChange}

                                className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                            >
                                <option value="">Select-An-Option</option>
                                <option value="B.E">B.E</option>
                                <option value="B.TECH">B.TECH</option>
                            </select>
                        </label>
                        <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Course of Study/ Branch:
                            <select
                                value={selectedUnderBranch}
                                onChange={handleUnderBranchChange}

                                className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                            >
                                <option value="">Select-An-Option</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Computer Engineering">Computer Engineering</option>
                            </select>
                        </label>
                        <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>
                            Current Semester:
                            <select
                                className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                                value={selectedPostSemester}
                                onChange={(e) => handleInputChange('selectedPostSemester', e.target.value)}
                            >
                                <option value=''>Select-An-Option</option>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                                    <option key={value} value={String(value)}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </label>
                        {selectedPostSemester === '1' && (
                            <>
                                <div className='md:flex'>
                                    <div className='md:basis-1/2'>
                                        <label className='ml-1 md:ml-3'>Grade Type:
                                            <select
                                                value={underGradeType}
                                                onChange={handleUnderGradeType}
                                                className='border block border-black border-solid rounded-md w-11/12 ml-1 md:ml-3 p-1 sm:w-10/12 md:text-xs md:h-7 md:w-[78%]'
                                            >
                                                <option value=''>Select-An-Option</option>
                                                <option value='Percentage'>Percentage</option>
                                                <option value='CGPA'>CGPA</option>
                                                <option value='CPI'>CPI</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className='md:basis-1/2'>
                                        <label className='ml-1'>Grade:
                                            <input
                                                value={underGrade}
                                                onChange={handleUnderGrade}
                                                type='text'
                                                placeholder='ex: 88 or 8.8'
                                                className='border block border-black border-solid rounded-md w-11/12 ml-1 p-1 sm:w-10/12 md:text-xs md:h-7 md:w-[78%]'
                                            />
                                        </label>
                                    </div>
                                </div>
                            </>
                        )}
                        {selectedPostSemester >= 2 && selectedPostSemester <= 8 && (
                            <>
                                <div className='md:flex'>
                                    <div className='md:basis-1/2'>
                                        <label className='ml-1 md:ml-3'>Grade Type:
                                            <select
                                                value={underGradeType}
                                                onChange={handleUnderGradeType}
                                                className='border block border-black border-solid rounded-md w-11/12 ml-1 md:ml-3 p-1 sm:w-10/12 md:text-xs md:h-7 md:w-[78%]'
                                            >
                                                <option value=''>Select-An-Option</option>
                                                <option value='Percentage'>Percentage</option>
                                                <option value='CGPA'>CGPA</option>
                                                <option value='CPI'>CPI</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className='md:basis-1/2'>
                                        <label className='ml-1'>Grade:
                                            <input
                                                type='text'
                                                value={underGrade}
                                                onChange={handleUnderGrade}
                                                placeholder='ex: 88 or 8.8'
                                                className='border block border-black border-solid rounded-md w-11/12 ml-1 p-1 sm:w-10/12 md:text-xs md:h-7 md:w-[78%]'
                                            />
                                        </label>
                                    </div>
                                </div>
                                {postAddSemester.map((section, index) => (
                                    <AddSemester
                                        key={index}
                                        {...section}
                                        onRemove={(e) => handleRemoveSem(e, index)}
                                    />
                                ))}
                                <button
                                    className='bg-[#0052CC] border border-solid border-black m-1 h-7 w-24 text-xs md:ml-3 rounded-md text-white hover:bg-white hover:text-[#0052CC]'
                                    onClick={handlePostAddSemester}
                                >
                                    Add Semester
                                </button>
                            </>
                        )}
                        <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Registration No/ Roll No:
                            <input
                                type='text'
                                placeholder='ex: 1234'
                                value={selectedUnderRegistration}
                                onChange={handleUnderRegistrationChange}

                                className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                            />
                        </label>
                    </>
                )}
            </form>
        </div>
    )
}

export default AcademicQualification