import { useState } from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
export default function ChooseImage({setImage}) {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      setImage(file)
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative rounded-full w-[200px] h-[200px]">
      <label className="w-full h-full rounded-full border-2 border-gray-400 flex items-center justify-center cursor-pointer overflow-hidden">
        {preview ? (
          <img src={preview} alt="Seçilen Resim" className="w-full h-full object-cover" />
        ) : (
         
            <AddPhotoAlternateIcon fontSize="large" className="text-gray-500"/>
      
        )}
        <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
      </label>
    </div>
  );
}
