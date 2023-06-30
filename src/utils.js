const getRandomNumber = (minValue = 0, maxValue = 100) => {
  const radnomNumber = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);

  return radnomNumber;
};
export default getRandomNumber;
