export default (dt) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return (
    days[
      new Date(
        dt
         * 1000,
      ).getDay()]);
}
