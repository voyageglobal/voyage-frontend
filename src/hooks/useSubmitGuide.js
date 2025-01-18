import { useMutation } from '@tanstack/react-query';
import instance from '../utilities/axios/axios';

const submitGuide = async formData => {
  const response = await instance.post('/guides', formData);
  return response.data;
};

const useSubmitGuide = () => {
  return useMutation({
    mutationFn: submitGuide,
    onSuccess: data => {
      console.log('Guide submitted successfully:', data);
      alert('Guide submitted successfully!');
    },
    onError: error => {
      console.error('Error submitting guide:', error);
      alert('Failed to submit the guide. Please try again.');
    },
  });
};

export default useSubmitGuide;
