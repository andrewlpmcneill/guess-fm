const getRandomFrequency = () => {

  // frequency range is 88.1 to 107.9
  // generate random number between 881 and 1079
  const frequencies = [100.5, 99.8, 103.7, 91.7, 95.3, 88.3, 101.4, 89.6, 96.5, 102.7, 89.9];
  const randomIndex = Math.floor(Math.random() * 11);
  const station = frequencies[randomIndex];
  return String(station);
};

export default getRandomFrequency;