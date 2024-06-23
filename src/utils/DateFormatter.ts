export const formatDate = (datetimeString: string) => {
  const date = new Date(datetimeString);

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  const time = date.toLocaleString('en-US', timeOptions);
  const formattedDate = date.toLocaleString('en-US', dateOptions);

  return `${time}, ${formattedDate}`;
};
