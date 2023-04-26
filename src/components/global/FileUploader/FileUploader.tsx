import React, { FC, useState } from "react";
import axios from "axios";
import { onSuccessAlert, onErrorAlert } from'../../../utils/sweetAlert/sweetAlert'
interface FileUploaderProps {
}

const FileUploader:FC<FileUploaderProps> = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles: File[] = [];

      for (let i = 0; i < e.target.files.length; i++) {
        newFiles.push(e.target.files[i]);
      }

      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleUploadClick = () => {
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("file[]", files[i]);
    }

    formData.append("classPoint", 'FileUploadController');
    formData.append("funcName", 'UploadFiles');
    fetch('https://digitrade.store/my_test/src/index.php', {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.status == 'success'){
            onSuccessAlert('בהצלחה', data.message)
        } else {
            onErrorAlert('שגיאה',data.message)
        }
      })
      .catch((error) => {
        onErrorAlert('שגיאה',error)
      });

      
  };

  const handleRemoveClick = (index: number) => {
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileInputChange} />
      <button onClick={handleUploadClick}>Upload</button>
      {files.length > 0 && (
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              {file.name} - {file.size} bytes{" "}
              <button onClick={() => handleRemoveClick(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileUploader;
