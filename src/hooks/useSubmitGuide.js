import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import instance from '../utilities/axios/axios';

const submitGuide = async formData => {
  try {
    const response = await instance.post('/guides', formData);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'An unexpected error occurred.',
    );
  }
};

const toastConfig = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
};

const useSubmitGuide = ({ resetForm }) => {
  return useMutation({
    mutationFn: submitGuide,
    onSuccess: data => {
      console.log('Guide submitted successfully:', data);
      toast.success('Guide submitted successfully!', toastConfig);
      if (resetForm) resetForm();
    },
    onError: error => {
      console.error('Error submitting guide:', error);
      toast.error(
        'Failed to submit. You can continue editing and try submit again.',
        toastConfig,
      );
      if (resetForm) resetForm();
    },
  });
};

export default useSubmitGuide;
