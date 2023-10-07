import React, { useState } from 'react';
import './index.less';

const Avatar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // 在这里可以添加上传逻辑
    }
  };

  return (
    <div
      className={`avatar-uploader ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {selectedFile ? (
        <img
          src={URL.createObjectURL(selectedFile)}
          alt="Uploaded Avatar"
          className="avatar"
        />
      ) : (
        <div className="placeholder">点击上传头像</div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="file-input"
      />
    </div>
  );
};

export default Avatar;
