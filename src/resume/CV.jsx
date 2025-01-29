import React from 'react';
import img1 from '../image/img1.png';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

let CV = () => {
    return (
        <>
            <div className='w-full md:w-[70%] m-auto mt-11 p-6 shadow-lg mb-6'>
                <header className='flex flex-col md:flex-row justify-between items-start'>
                    <div className='flex items-center'>
                        <div className='border-3 border-gray-500 rounded-full p-2'>
                            <img
                                src={img1}
                                alt="Header image showcasing something important"
                                className='w-24 h-24 rounded-full object-cover'
                            />
                        </div>
                        <div className='ml-4'>
                            <h1 className='text-2xl md:text-4xl font-bold'>AMIT</h1>
                            <h1 className='text-2xl md:text-4xl font-bold'>Gautam</h1>
                        </div>
                    </div>

                    <div className='flex flex-col mt-4 md:mt-0 ml-0 md:ml-8 space-y-3'>
                        <div className='flex items-center'>
                            <PhoneIcon className='mr-2' />
                            <span>+91 8573965259</span>
                        </div>
                        <div className='flex items-center'>
                            <EmailIcon className='mr-2' />
                            <span>gautamamit557@gmail.com</span>
                        </div>
                        <div className='flex items-center'>
                            <LocationOnIcon className='mr-2' />
                            <span>151/168 Rathkhana Molviganj, Lucknow, Uttar Pradesh 226018</span>
                        </div>
                        <div className='flex items-center'>
                            <GitHubIcon className='mr-2' />
                            <a href="https://github.com/amit496" target="_blank" rel="noopener noreferrer">https://github.com/amit496</a>
                        </div>
                        <div className='flex items-center'>
                            <LinkedInIcon className='mr-2' />
                            <a href="https://www.linkedin.com/in/amit-gautam-590695217/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/amit-gautam-590695217/</a>
                        </div>
                    </div>
                </header>

                <div className='education mt-3'>
                    <h1 className='text-xl font-semibold'>About Me</h1>
                    <hr className='my-2 border-t-2 border-gray-300' />
                    <div className='mt-2'>
                        <div className='flex justify-between'>
                            <h2 className='text-base md:text-l'>Experienced Laravel Developer with expertise in PHP and web application development. Skilled in optimizing performance, delivering scalable solutions, and collaborating with teams to enhance user experience. Focused on writing clean, efficient code and meeting project deadlines.</h2>
                        </div>
                    </div>
                </div>

                {/* Education Section */}
                <div className='education mt-3'>
                    <h1 className='text-xl font-semibold'>Education</h1>
                    <hr className='my-2 border-t-2 border-gray-300' />
                    <div className='mt-2'>
                        <div className='flex justify-between'>
                            <h2 className='text-base md:text-l'>Diploma in Information Technology</h2>
                            <h1 className="text-base md:text-l font-semibold">2019 - 2022</h1>
                        </div>
                        <p className='mt-1'>Hewett Polytechnic, Lucknow</p>
                    </div>
                </div>

                {/* Trainings Section */}
                <div className='education mt-3'>
                    <h1 className='text-xl font-semibold'>Trainings & Certifications</h1>
                    <hr className='my-2 border-t-2 border-gray-300' /> {/* Horizontal Line */}
                    <div className='mt-2'>
                        <p className='mt-2'>PHP Training from <strong>Mecatredz Technology Pvt Ltd</strong> Lucknow (45 days) :- Real Estate (Project). </p>
                    </div>
                </div>

                {/* Skills */}
                <div className="skills mt-3">
                    <h1 className="text-xl font-semibold">Technical Skills</h1>
                    <hr className="my-2 border-t-2 border-gray-300" />
                    <div className="mt-2 overflow-x-auto">
                        <table className="min-w-full table-auto border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-1 border-b text-left font-semibold text-gray-700">Languages</th>
                                    <th className="px-4 py-1 border-b text-left font-semibold text-gray-700">Frameworks</th>
                                    <th className="px-4 py-1 border-b text-left font-semibold text-gray-700">Database</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-1">HTML</td>
                                    <td className="px-4 py-1">Laravel</td>
                                    <td className="px-4 py-1">MySQL</td>
                                </tr>
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-1">CSS</td>
                                    <td className="px-4 py-1"></td>
                                    <td className="px-4 py-1">SQL Server</td>
                                </tr>
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-1">JavaScript</td>
                                    <td className="px-4 py-1"></td>
                                    <td className="px-4 py-1"></td>
                                </tr>
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-1">jQuery</td>
                                    <td className="px-4 py-1"></td>
                                    <td className="px-4 py-1"></td>
                                </tr>
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-1">PHP</td>
                                    <td className="px-4 py-1"></td>
                                    <td className="px-4 py-1"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Area of Interest Section */}
                <div className="areaofinterest mt-3">
                    <h1 className="text-xl font-semibold">Area of Interest</h1>
                    <hr className="my-2 border-t-2 border-gray-300" /> {/* Horizontal Line */}
                    <div className="mt-2">
                        <ol className="list-decimal pl-6 space-y-2">
                            <li className="text-lg text-gray-700">Web development (Backend & Frontend)</li>
                            <li className="text-lg text-gray-700">Networking</li>
                            <li className="text-lg text-gray-700">Hardware Maintenance</li>
                        </ol>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="areaofinterest mt-3">
                    <h1 className="text-xl font-semibold">Experience</h1>
                    <hr className="my-2 border-t-2 border-gray-300" />
                    <div className="mt-2">
                        <div className='flex justify-between items-center'>
                            <h1 className="text-base md:text-l font-semibold">Laravel Developer</h1>
                            <h1 className="text-base md:text-l font-semibold">May 2024 - Present</h1>
                        </div>
                        <div>
                            <h1 className='font-semibold'>Singsys Pte Ltd</h1>
                            <p>Developed and maintained key features as a Laravel Developer, optimizing system performance and enhancing user experience. Worked closely with cross-functional teams to implement scalable solutions, ensuring timely delivery and high-quality standards.</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className='flex justify-between items-center'>
                            <h1 className="text-base md:text-l font-semibold">Laravel Developer</h1>
                            <h1 className="text-base md:text-l font-semibold">Mar 2024 - Apr 2024</h1>
                        </div>
                        <div>
                            <h1 className='font-semibold'>Inventics Software PVT LTD</h1>
                            <p>Collaborated with product managers and designers to define system requirements and translate them into efficient, scalable code. Ensured the integration of new features with minimal disruption to existing services, maintaining system stability and high performance.</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className='flex justify-between items-center'>
                            <h1 className="text-base md:text-l font-semibold">PHP and Laravel Developer</h1>
                            <h1 className="text-base md:text-l font-semibold">May 2022 - Feb 2024</h1>
                        </div>
                        <div>
                            <h1 className='font-semibold'>Quick Infotech Technology PVT Ltd</h1>
                            <p>Developed and maintained key features as a Laravel Developer, optimizing system performance and enhancing user experience. Worked closely with cross-functional teams to implement scalable solutions, ensuring timely delivery and high-quality standards.</p>
                        </div>
                    </div>
                </div>

                {/* Project Section */}
                <div className="areaofinterest mt-3">
                    <h1 className="text-xl font-semibold">Projects</h1>
                    <hr className="my-2 border-t-2 border-gray-300" />
                    <div className="mt-2">
                        <div className='flex justify-between items-center'>
                            <h1 className="text-base md:text-l font-semibold">Aayansh R Health Care</h1>
                        </div>
                        <div>
                            <p>In the Ayansh R Health Care project, I developed APIs and managed dashboards, improving user experience and system performance.</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className='flex justify-between items-center'>
                            <h1 className="text-base md:text-l font-semibold">NSW Dogs</h1>
                        </div>
                        <div>
                            <p>In the “NSW Dogs” project, I modified the CRUD functionality of the form, improving data management and workflow.</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className='flex justify-between items-center'>
                            <h1 className="text-base md:text-l font-semibold">Dappr</h1>
                        </div>
                        <div>
                            <p>dappr is an e-commerce project in this project I managed the question screen and managed the booking status and reveal status according to the booking time.</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className='flex justify-between items-center'>
                            <h1 className="text-base md:text-l font-semibold">TTG Media </h1>
                        </div>
                        <div>
                            <p>TTG media experiance
                            In this project I performed CRUD operations by saving data using third party (Globaltics) API. Implemented "FOMO Pay" payment gateway for booking and created API for front end.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CV;