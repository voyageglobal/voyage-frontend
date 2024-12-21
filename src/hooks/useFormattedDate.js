import { format } from 'date-fns';

const useFormattedDate = (date, formatString = 'MMMM d, yyyy') => {
  if (!date) return 'Unknown Date';

  try {
    return format(new Date(date), formatString);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid Date';
  }
};

export default useFormattedDate;
