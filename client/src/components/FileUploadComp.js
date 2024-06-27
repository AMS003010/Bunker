import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import axios from 'axios';

const FileUploadComp = () => {
  const [fileUrl, setFileUrl] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [fileData, setFileData] = useState({
    name: '',
    file_type: '',
    url: ''
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      console.error('No file selected');
      return;
    }

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
                setStatusMessage('Upload SUCCESSFUL');
              } else {
                setStatusMessage('Upload FAILED');
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
    <div>
      <h1>Upload File</h1>
      <form>
        <label>
          File:
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
          />
        </label>
        <h1>{fileUrl}</h1>
        <div>{statusMessage}</div>
      </form>
    </div>
  );
};

export default FileUploadComp;
