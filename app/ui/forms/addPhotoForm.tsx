import { useState } from 'react';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        // TODO: Likely need api req to upload to db or service here
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && <img src={selectedImage.toString()} alt="Preview" />}
    </div>
  );
};

export default ImageUpload;