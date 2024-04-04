import React, { useState } from 'react'

const TaskPreference = ({formData, handleChange}) => {
    return (
        <div>
            <h1 className='text-base font-medium mt-4'>Project/Task Preference</h1>
            <hr className='border border-gray-400 mt-1 mb-1 w-11/12 ' />
            <form action='' method='' className='mt-3'>
                <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>First Preference:
                    <select
                        name='firstPreference'
                        value={formData.firstPreference}
                        onChange={handleChange}
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
                        name='secondPreference'
                        value={formData.secondPreference}
                        onChange={handleChange}
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
                        name='thirdPreference'
                        value={formData.thirdPreference}
                        onChange={handleChange}
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
                    name='otherPreference'
                    value={formData.otherPreference}
                    onChange={handleChange}
                    placeholder='Java,Python etc separate with commas'
                    className='border border-black border-solid rounded-md w-11/12 block text-xs p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                    />
                </label>
            </form>
        </div>
    )
}

export default TaskPreference