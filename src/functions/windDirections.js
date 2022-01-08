export default (windDeg) => {
  const directions = [
    { deg: 22.5, dir: 'N' },
    { deg: 67.5, dir: 'NE' },
    { deg: 112.5, dir: 'E' },
    { deg: 157.5, dir: 'SE' },
    { deg: 202.5, dir: 'S' },
    { deg: 247.5, dir: 'SW' },
    { deg: 292.5, dir: 'W' },
    { deg: 337.5, dir: 'NW' },
    { deg: 360, dir: 'N' },
  ]
  return directions.find((elem) => windDeg < elem.deg).dir
}
