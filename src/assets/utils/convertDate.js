export function convertDate(isoDate) {
  try {
    const date = new Date(isoDate);
    if (isNaN(date)) {
      return "Invalid Date";
    }

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${monthNames[monthIndex]} ${day}, ${year}`;
  } catch (error) {
    console.error("Error converting date:", error);
    return "Invalid Date";
  }
}