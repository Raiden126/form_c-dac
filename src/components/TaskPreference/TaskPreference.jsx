import React, { useState } from 'react'

const TaskPreference = () => {
    const [firstPreference, setFirstPreference] = useState('');
    const [secondPreference, setSecondPreference] = useState('');
    const [thirdPreference, setThirdPreference] = useState('');
    const [otherPreference, setOtherPreference] = useState('');

    const handleFirstPreferenceChange = (e) => {
        setFirstPreference(e.target.value)
    }

    const handleSecondPreferenceChange = (e) => {
        setSecondPreference(e.target.value)
    }

    const handleThirdPreferenceChange = (e) => {
        setThirdPreference(e.target.value)
    }

    const handleOtherPreferenceChange = (e) => {
        setOtherPreference(e.target.value)
    }

    return (
        <div>
            <h1 className='text-base font-medium m-1 md:ml-3 mt-4'>Project/Task Preference</h1>
            <hr className='border border-black m-1 md:ml-3 w-11/12' />
            <form action='' method=''>
                <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>First Preference:
                    <select
                        value={firstPreference}
                        onChange={handleFirstPreferenceChange}
                        required
                        className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                    >
                        <option value="">Select-An-Option</option>
                        <option value="Java">Java</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Python">Python</option>
                        <option value="HTML5 & CSS3">HTML5 & CSS3</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="AI/ML">AI/ML</option>
                        <option value="Php">Php</option>
                        <option value="MySQL">MySQL</option>
                        <option value="PostgreSQL">PostgreSQL</option>
                        <option value="MongoDB">MongoDB</option>
                        <option value="NodeJS">NodeJS</option>
                        <option value="ExpressJS">ExpressJS</option>
                        <option value="ReactJS">ReactJS</option>
                        <option value="NextJS">NextJS</option>
                    </select>
                </label>
                <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Second Preference:
                    <select
                        value={secondPreference}
                        onChange={handleSecondPreferenceChange}
                        required
                        className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                    >
                        <option value="">Select-An-Option</option>
                        <option value="Java">Java</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Python">Python</option>
                        <option value="HTML5 & CSS3">HTML5 & CSS3</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="AI/ML">AI/ML</option>
                        <option value="Php">Php</option>
                        <option value="MySQL">MySQL</option>
                        <option value="PostgreSQL">PostgreSQL</option>
                        <option value="MongoDB">MongoDB</option>
                        <option value="NodeJS">NodeJS</option>
                        <option value="ExpressJS">ExpressJS</option>
                        <option value="ReactJS">ReactJS</option>
                        <option value="NextJS">NextJS</option>
                    </select>
                </label>
                <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Third Preference:
                    <select
                        value={thirdPreference}
                        onChange={handleThirdPreferenceChange}
                        required
                        className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                    >
                        <option value="">Select-An-Option</option>
                        <option value="Java">Java</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Python">Python</option>
                        <option value="HTML5 & CSS3">HTML5 & CSS3</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="AI/ML">AI/ML</option>
                        <option value="Php">Php</option>
                        <option value="MySQL">MySQL</option>
                        <option value="PostgreSQL">PostgreSQL</option>
                        <option value="MongoDB">MongoDB</option>
                        <option value="NodeJS">NodeJS</option>
                        <option value="ExpressJS">ExpressJS</option>
                        <option value="ReactJS">ReactJS</option>
                        <option value="NextJS">NextJS</option>
                    </select>
                </label>
                <label  className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Other:
                    <input 
                    type='text' 
                    value={otherPreference}
                    onChange={handleOtherPreferenceChange}
                    placeholder='Java,Python etc separate with commas'
                    className='border border-black border-solid rounded-md w-11/12 block text-xs p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                    />
                </label>
            </form>
        </div>
    )
}

export default TaskPreference