
const numberOfTicks = (distance) => {
  const ticks  = distance >= 10000 ? 40 : Math.round((distance/10000)*40);
  const stringDistance =  "-".repeat(ticks)
  return stringDistance
}

export default numberOfTicks;
