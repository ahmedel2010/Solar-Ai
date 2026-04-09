import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
function FaultDetection() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] p-[40px] rounded-[10px] shadow-[0_10px_20px_rgba(0,0,0,0.3)] w-[400px] my-[50px] mx-auto max-w-[90%]">
      <h2 className="text-white text-[20px] mb-[15px]">Upload Solar Panel Image</h2>
      <label htmlFor="fault-upload" className="w-full h-[250px] bg-white p-[20px] text-center border-2 border-dashed border-[#3498db] rounded-[10px] transition-all duration-300 ease-in-out cursor-pointer flex flex-col items-center justify-center relative hover:bg-[rgba(52,152,219,0.1)]">
        <input id="fault-upload" type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />
        {image ? (
          <img src={image} alt="Uploaded" className="max-w-full max-h-[230px] rounded-[10px]" />
        ) : (
          <>
            <FaCloudUploadAlt className="text-[50px] text-[#3498db] mb-[10px]" />
            <p>Drag & drop an image or click to upload</p>
          </>
        )}
      </label>
      {image && <button className="mt-[15px] py-[10px] px-[20px] bg-[#2ecc71] text-white border-none rounded-[5px] cursor-pointer text-[16px] transition-colors duration-300 hover:bg-[#27ae60]">Analyze Image</button>}
    </div>
  );
}

export default FaultDetection;
