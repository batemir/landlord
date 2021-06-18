export const getLandData = ({ cadastralNumber }) =>
  fetch(encodeURI(`https://pkk.rosreestr.ru/api/features/1/${cadastralNumber}`));
