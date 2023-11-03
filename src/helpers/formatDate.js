import { formatDistanceToNow, format } from 'date-fns';

export const formatDateToNow = data => {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
};

export const formatDate = data => {
  return format(new Date(data), 'Pp');
};
