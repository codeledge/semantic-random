export const formatCamelCase = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(_m, p1, p2) {
      return p1.toUpperCase() + p2;
    });
};
