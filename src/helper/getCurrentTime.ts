export const getCurrentTime = () => {
	const date = new Date();

	let hour = date.getHours();
	let minute: string | number = date.getMinutes();
  let isAmOrPm = "AM";
	
  if (hour / 12 > 1) {
		isAmOrPm = "PM";
	}

  if (hour > 12) {
    hour = hour % 12
  }

  if (minute < 10) {
    minute = "0" + minute.toString()
  }

	return `${hour}:${minute} ${isAmOrPm}`;
};
