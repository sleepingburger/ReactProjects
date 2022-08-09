export function formatTime(date: number) {
  return date < 10 ? `0${date}` : date;
}
