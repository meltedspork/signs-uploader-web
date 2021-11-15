const capitalize = (str: string = '') => {
  console.log('str', str);
  const str1 = str.charAt(0).toUpperCase();
  const str2 = str.slice(1);
  return str1 + str2;
}

export {
  capitalize,
}