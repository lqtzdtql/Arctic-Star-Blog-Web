export const getClock = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hour = (hours % 12) * (360 / 12) + (360 / 12) * (minutes / 60);
  const minute = minutes * (360 / 60) + (360 / 60) * (seconds / 60);
  const second = seconds * (360 / 60);

  return {
    hour,
    minute,
    second,
  };
};
