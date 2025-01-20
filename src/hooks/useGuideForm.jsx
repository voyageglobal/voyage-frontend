import { useState } from 'react';
import useSubmitGuide from './useSubmitGuide';

const useGuideForm = () => {
  const [guideContent, setGuideContent] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { mutate, isLoading } = useSubmitGuide();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('guideContent', guideContent);

    uploadedFiles.forEach((file, index) => {
      formData.append(`photos[${index}]`, file.file);
    });

    mutate(formData);
  };

  return {
    guideContent,
    setGuideContent,
    uploadedFiles,
    setUploadedFiles,
    handleSubmit,
    isLoading,
  };
};

export default useGuideForm;
