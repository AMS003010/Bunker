import React, { useState, useRef } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import axios from 'axios';

const FileUploadComp = () => {
  const [fileUrl, setFileUrl] = useState('');
  const fileRef = useRef(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [fileSelected, setFileSelected] = useState(false);
  const [fileData, setFileData] = useState({
    name: '',
    file_type: '',
    url: ''
  });

  const handleUpload = () => {
    const modalOverlay = document.querySelector(".modal-overlay");
    modalOverlay.classList.add("hidden");
  }

  const resetFileInput = () => {
    if (fileRef.current) {
      fileRef.current.value = null;
      setFileSelected(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      console.error('No file selected');
      setFileSelected(false);
      return;
    }

    setFileSelected(true);

    const fileExtension = file.name.split('.').pop();
    const fileStorageRef = ref(storage, `files/${file.name}`);
    const userName = localStorage.getItem('user');

    uploadBytes(fileStorageRef, file)
      .then(() => {
        getDownloadURL(fileStorageRef)
          .then((url) => {
            setFileUrl(url);
            const updatedFileData = {
                user : userName,
                data : {
                    name: file.name,
                    file_type: fileExtension,
                    url: url
                }
            };
            setFileData(updatedFileData.data);
            console.log(updatedFileData);

            // Make the POST request immediately after getting the file URL
            axios.post('http://localhost:8000/api/v1/file', updatedFileData, {
              headers: { 'Content-Type': 'application/json' }
            })
            .then((response) => {
              if (response.data.message === 'File created successfully') {
                setStatusMessage('Uploaded Successfully');
                setTimeout(() => {
                  const modalOverlay = document.querySelector(".modal-overlay");
                  modalOverlay.classList.add("hidden")
                  resetFileInput();
                },2000)
                //resetFileInput();
              } else {
                setStatusMessage('Upload Failed');
              }
            })
            .catch((error) => {
              console.error('Error uploading file data:', error);
              setStatusMessage('Upload FAILED');
            });
          })
          .catch((error) => {
            console.error('Error getting download URL for file:', error);
            setStatusMessage('Upload FAILED');
          });
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
        setStatusMessage('Upload FAILED');
      });
  };

  return (
    <div className='border rounded-2xl'>
      <div className='flex justify-between items-center'>
        <h1 className='p-2 px-4 font-semibold'>Upload File</h1>
        <div className='flex justify-between gap-2 mr-4'>
          <div className='w-3 h-3 rounded-full bg-[#f86156] hover:bg-opacity-50 cursor-pointer' onClick={() => handleUpload()}></div>
          <div className='w-3 h-3 rounded-full bg-[#fbbd33] hover:bg-opacity-50 cursor-pointer' onClick={() => handleUpload()}></div>
          <div className='w-3 h-3 rounded-full bg-[#29cd3d] hover:bg-opacity-50 cursor-pointer' onClick={() => handleUpload()}></div>
        </div>
      </div>
      <hr/>
      <div className='p-8'>
        <form className='flex justify-between w-max items-center gap-14'>
          <label className='bg-[#374151] rounded-lg'>
            <input
              type="file"
              name="file"
              ref={fileRef}
              onChange={handleFileChange}
              className='rounded-lg file:bg-[#4b5563] file:text-white file:outline-none file:p-2 file:px-4 file:hover:bg-[#6b7280] file:border-none file:mr-4 file-input'
            />
          </label>
          <div className={`file-upload-comp flex justify-start items-center gap-3 ${!fileSelected ? 'hidden' : ''}`}>
            <div>{statusMessage === 'Uploaded Successfully' ? (
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-yellow-500">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <path d="m9 11 3 3L22 4"/>
                    </svg>
                  </div>
                ) : (
                  statusMessage === 'Upload Failed' ? (
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x text-red-700">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="m15 9-6 6"/>
                        <path d="m9 9 6 6"/>
                      </svg>
                    </div>
                  ) : (
                    <div>
                      <div role="status">
                          <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                          </svg>
                          <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  )
                )}
            </div>
            <div>{statusMessage === 'Uploaded Successfully' ? "Uploaded Successfully" : (statusMessage === 'Upload Failed' ? "Upload Failed" : "please wait...")}</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileUploadComp;
