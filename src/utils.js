const getRandomValue = (minValue = 0, maxValue = 100) => {
  const radnomValue = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);

  return radnomValue;
};
export default getRandomValue;
