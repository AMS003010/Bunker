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
import FileDispComp from '../components/FileDispComp';
//import DropDownIcon from '../images/drop-down-icon.png';
//import TriangleIcon from '../images/triangle-icon.png';

import SidePanelComp from '../components/SidePanelComp';
import DropDownComp from '../components/DropDownComp';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const compStyle = {
        backgroundImage: `url('${DriveIcon}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top'
    }

    const [files,setFiles] = useState(null);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const user = localStorage.getItem('user');
                const apiLoad = { user: user };
                
                const responseLiked = await axios.post('http://localhost:8000/api/v1/file/userfiles', apiLoad, {
                    headers: { 'Content-Type': 'application/json' }
                });
                console.log(responseLiked.data.data[0].files);
                setFiles(responseLiked.data.data[0].files);
                
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchFiles();
    }, []);

    return(
        <div className="flex text-[#e1e1e0] h-[100vh] flex-row py-4 p-3 bg-[#181818]" style={{fontFamily:'Inter'}}>
            <div className='w-[17rem]'>
                <div className='flex justify-between items-center gap-4 mb-8 p-3 w-max'>
                    <div style={compStyle} className='w-14 h-14'></div>
                    <div className='text-xl'>Drive</div>
                </div>
                <div className='flex justify-between items-center gap-2 bg-[#2f3233] p-4 px-5 rounded-2xl w-max'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-7">
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
                        <p className='mx-6 text-sm'>14.12GB of 15GB used</p>
                        <div className='flex justify-center items-center text-[#AD857F] text-sm border-[0.1rem] rounded-3xl border-[#AD857F] p-2 px-4 mt-5 mx-4'>Get more storage</div>
                    </div>
                </div>
            </div>
            <div className='w-[100%] ml-16'>
                <div className='w-[100%] h-10 border'></div>
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
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                            {files ? (
                                files.map((file) => (
                                    <FileDispComp />
                                ))
                            ) : (
                                <p>Loading....</p>
                            )}
                        </div>
                    </div>
                    <div className='bg-gray-400 w-10 h-[100%]'></div>
                </div>
            </div>
        </div>
    )
}

export default Home;