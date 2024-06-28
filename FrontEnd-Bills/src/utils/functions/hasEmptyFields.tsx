type AnyObject = { [key: string]: any };

export const hasEmptyFields = (obj: AnyObject): boolean => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (value === null || value === undefined || value === '') {
        return true;
      }
    }
  }
  return false;
};
