import { format } from 'date-fns';

const useFormattedDate = (date, formatString = 'MMMM d, yyyy') => {
  if (!date) return null;

  try {
    return format(new Date(date), formatString);
  } catch (error) {
    console.error('Error formatting date:', error);
    return null;
  }
};

export default useFormattedDate;
