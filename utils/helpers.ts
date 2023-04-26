export const getErrorMessage = (error: any) => {
  return error?.response?.data?.message || "Something went wrong";
};

export const relativeTime = (dateString: string) => {
  const timestamp = new Date(dateString).getTime();
  const now = Date.now();
  const diff = now - timestamp;
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const year = 365 * day;

  if (diff < minute) {
    return "now";
  } else if (diff < hour) {
    const minutesAgo = Math.floor(diff / minute);
    return `${minutesAgo}m`;
  } else if (diff < day) {
    const hoursAgo = Math.floor(diff / hour);
    return `${hoursAgo}h`;
  } else if (diff < week) {
    const daysAgo = Math.floor(diff / day);
    return `${daysAgo}d`;
  } else if (diff < year) {
    const weeksAgo = Math.floor(diff / week);
    return `${weeksAgo}w ${Math.floor((diff - weeksAgo * week) / day)}d`;
  } else {
    const yearsAgo = Math.floor(diff / year);
    return `${yearsAgo}y ${Math.floor((diff - yearsAgo * year) / week)}w`;
  }
};
