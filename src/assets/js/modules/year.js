export default (place) => {
  const currentTime = new Date();
  const getYear = currentTime.getFullYear();
  place.textContent = `2015-${getYear}`;
}