import DriveIcon from'../images/drive-icon.png';
import HomeIcon from '../images/home-icon.png';
import MyDriveIcon from '../images/mydrive-icon.png';
import ComputerIcon from '../images/computer-icon.png';
import SharedIcon from '../images/shared-with-me-icon.png';
import RecentIcon from '../images/recent-icon.png';
import StarredIcon from '../images/starred-icon.png';
import SpamIcon from '../images/spam-icon.png';
import TrashIcon from '../images/trash-icon.png';
import StorageIcon from '../images/cloud-icon.png';
import CalenderIcon from '../images/calender-icon.png'
import KeepIcon from '../images/keep-icon.png';
import TasksIcon from '../images/tasks-icon.png';
import ContactsIcon from '../images/contacts-icon.png';
import backgroundImage from '../images/bg.png';

import RightPanelComp from '../components/RightPanelComp';
import FileDispComp from '../components/FileDispComp';
import SidePanelComp from '../components/SidePanelComp';
import DropDownComp from '../components/DropDownComp';
import FileUploadComp from '../components/FileUploadComp';

import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {

    const [files,setFiles] = useState(null);

    const compStyle = {
        backgroundImage: `url('${DriveIcon}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top'
    }

    const handleUpload = () => {
        const modalOverlay = document.querySelector(".modal-overlay");
        modalOverlay.classList.remove("hidden");
    }

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const user = localStorage.getItem('user');
                const apiLoad = { user: user };
                
                const responseLiked = await axios.post('http://localhost:8000/api/v1/file/userfiles', apiLoad, {
                    headers: { 'Content-Type': 'application/json' }
                });
                console.log(responseLiked.data.data);
                setFiles(responseLiked.data.data);
                
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchFiles();
    }, []);

    return(
        <div className="flex text-[#e1e1e0] h-[100vh] flex-row py-4 p-3 bg-[#181818]" style={{fontFamily:'Inter'}}>
            <div className='modal-overlay fixed left-0 top-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center hidden'>
                <div>
                    <FileUploadComp/>
                </div>
            </div>
            <div className='w-[17rem]'>
                <div className='flex justify-between items-center gap-4 mb-8 p-3 w-max'>
                    <div style={compStyle} className='w-14 h-14'></div>
                    <div className='text-xl'>Drive</div>
                </div>
                <div className='flex justify-between items-center gap-2 bg-[#2f3233] hover:bg-[#00416B] cursor-pointer p-4 px-5 rounded-2xl w-max' onClick={() => handleUpload()}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    <div className='text-sm'>New</div>
                </div>
                <div className='mt-3'>
                    <div className='flex flex-col mb-4'>
                        <SidePanelComp text={"Home"} image={HomeIcon} />
                        <SidePanelComp text={"MyDrive"} image={MyDriveIcon} />
                        <SidePanelComp text={"Computers"} image={ComputerIcon} />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <SidePanelComp text={"Shared with me"} image={SharedIcon} />
                        <SidePanelComp text={"Recent"} image={RecentIcon} />
                        <SidePanelComp text={"Starred"} image={StarredIcon} />
                    </div>
                    <div className='flex flex-col'>
                        <SidePanelComp text={"Spam"} image={SpamIcon} />
                        <SidePanelComp text={"Trash"} image={TrashIcon} />
                        <SidePanelComp text={"Storage (94% full)"} image={StorageIcon} />
                        <div className='w-[100%] h-[0.4rem] bg-[#fbaea5] rounded-3xl mx-6 mt-3 mb-3 mr-3'></div>
                        <p className='mx-6 text-sm'>14.12 GB of 15 GB used</p>
                        <div className='flex justify-center items-center text-[#AD857F] text-sm border-[0.1rem] rounded-3xl border-[#AD857F] p-2 px-4 mt-5 mx-4'>Get more storage</div>
                    </div>
                </div>
            </div>
            <div className='w-[100%] ml-16'>
                <div className='w-[100%] h-12 flex justify-between items-center'>
                    <div className='w-[35rem] p-3 px-4 rounded-3xl bg-[#222626]'>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-start w-max gap-3'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                                <div>Search in Drive</div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sliders-horizontal">
                                    <line x1="21" x2="14" y1="4" y2="4"/>
                                    <line x1="10" x2="3" y1="4" y2="4"/>
                                    <line x1="21" x2="12" y1="12" y2="12"/>
                                    <line x1="8" x2="3" y1="12" y2="12"/>
                                    <line x1="21" x2="16" y1="20" y2="20"/>
                                    <line x1="12" x2="3" y1="20" y2="20"/>
                                    <line x1="14" x2="14" y1="2" y2="6"/>
                                    <line x1="8" x2="8" y1="10" y2="14"/>
                                    <line x1="16" x2="16" y1="18" y2="22"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-4 mr-4'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                                <path d="M12 17h.01"/>
                            </svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grip">
                                <circle cx="12" cy="5" r="1"/>
                                <circle cx="19" cy="5" r="1"/>
                                <circle cx="5" cy="5" r="1"/>
                                <circle cx="12" cy="12" r="1"/>
                                <circle cx="19" cy="12" r="1"/>
                                <circle cx="5" cy="12" r="1"/>
                                <circle cx="12" cy="19" r="1"/>
                                <circle cx="19" cy="19" r="1"/>
                                <circle cx="5" cy="19" r="1"/>
                            </svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 w-[100%] h-[93%] mt-3'>
                    <div className='w-[100%] bg-[#141414] rounded-2xl p-8'>
                        <div className='flex justify-between items-center w-max gap-3 mb-6'>
                            <h1 className='text-[#B4B4B4] text-2xl'>My Drive</h1>
                            <div className='w-8'>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#e1e1e0" stroke="#ffffff" strokeWidth="0.00024000000000000003">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.192"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <rect x="0" fill="none" width="24" height="24"></rect>
                                        <g>
                                            <path d="M7 10l5 5 5-5"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className='flex justify-between w-max gap-3 mb-8'>
                            <DropDownComp text={"Type"}/>
                            <DropDownComp text={"People"}/>
                            <DropDownComp text={"Modified"}/>
                        </div>
                        {files ? (
                            <div className="grid grid-cols-1 h-[85%] p-1 md:grid-cols-2 lg:grid-cols-4 gap-3 overflow-y-auto custom-scrollbar">
                                {files.map((file) => (
                                    <FileDispComp key={file._id} _id={file._id} text={file.name} url={file.url} ext={file.file_type} />
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 h-[85%] p-1 md:grid-cols-2 lg:grid-cols-4 gap-3 overflow-y-auto custom-scrollbar">
                                <div className="bg-[#1c1d1d] w-[15rem] h-[17rem] rounded-xl p-2 flex flex-col">
                                    <div className='flex justify-between items-center p-3'>
                                        <div className='w-[6rem] h-[1.3rem] bg-[#ffffff94] rounded-lg animate-pulse'></div>
                                        <div className='w-[1.7rem] h-[1.3rem] bg-[#ffffff94] rounded-md animate-pulse'></div>
                                    </div>
                                    <div className='bg-[#ffffff94] text-[#ffffff94] rounded-xl m-1 flex-grow animate-pulse' style={{ height: 'calc(100% - 0.5rem)' }}>&nbsp;</div>
                                </div>
                                <div className="bg-[#1c1d1d] w-[15rem] h-[17rem] rounded-xl p-2 flex flex-col">
                                    <div className='flex justify-between items-center p-3'>
                                        <div className='w-[6rem] h-[1.3rem] bg-[#ffffff94] rounded-lg animate-pulse'></div>
                                        <div className='w-[1.7rem] h-[1.3rem] bg-[#ffffff94] rounded-md animate-pulse'></div>
                                    </div>
                                    <div className='bg-[#ffffff94] text-[#ffffff94] rounded-xl m-1 flex-grow animate-pulse' style={{ height: 'calc(100% - 0.5rem)' }}>&nbsp;</div>
                                </div>
                                <div className="bg-[#1c1d1d] w-[15rem] h-[17rem] rounded-xl p-2 flex flex-col">
                                    <div className='flex justify-between items-center p-3'>
                                        <div className='w-[6rem] h-[1.3rem] bg-[#ffffff94] rounded-lg animate-pulse'></div>
                                        <div className='w-[1.7rem] h-[1.3rem] bg-[#ffffff94] rounded-md animate-pulse'></div>
                                    </div>
                                    <div className='bg-[#ffffff94] text-[#ffffff94] rounded-xl m-1 flex-grow animate-pulse' style={{ height: 'calc(100% - 0.5rem)' }}>&nbsp;</div>
                                </div>
                                <div className="bg-[#1c1d1d] w-[15rem] h-[17rem] rounded-xl p-2 flex flex-col">
                                    <div className='flex justify-between items-center p-3'>
                                        <div className='w-[6rem] h-[1.3rem] bg-[#ffffff94] rounded-lg animate-pulse'></div>
                                        <div className='w-[1.7rem] h-[1.3rem] bg-[#ffffff94] rounded-md animate-pulse'></div>
                                    </div>
                                    <div className='bg-[#ffffff94] text-[#ffffff94] rounded-xl m-1 flex-grow animate-pulse' style={{ height: 'calc(100% - 0.5rem)' }}>&nbsp;</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='w-15 h-[100%] flex flex-col justify-start items-center gap-4'>
                        <RightPanelComp image={CalenderIcon}/>
                        <RightPanelComp image={KeepIcon}/>
                        <RightPanelComp image={TasksIcon}/>
                        <RightPanelComp image={ContactsIcon}/>
                        <div className='bg-[#292828] w-[100%] h-[0.2rem] rounded-xl'></div>
                        <div className='rounded-3xl hover:bg-[#00416B] cursor-pointer p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;