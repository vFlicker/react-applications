/**
 * Format seconds to human readable text in a compact form:
 * s, m or H:m (not m:s or H:m:s)
 */
export const humanReadableTimeFromSeconds = (seconds: number = 0) => {
  if (seconds < 60) {
    return `${seconds}s`;
  }

  const totalMinutes = Math.floor(seconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutesToDisplay = totalMinutes % 60;
  let timeString = '';

  if (hours > 0) {
    timeString += `${hours}h `;
  }

  timeString += `${minutesToDisplay}m`;

  return timeString;
};
