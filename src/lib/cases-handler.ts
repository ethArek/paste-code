export function snakeToCamel (str: string) {
  return str.replace(
    /([-_][a-z])/g,
    group => group
      .toUpperCase()
      .replace('_', '')
  );
}

export function camelToSnake (str: string) {
  return str
    .split(/(?=[A-Z])/)
    .map(splitted => splitted.toLowerCase())
    .join('_');
}

export function keysToSnake (obj: {
  [key: string]: any
}): Object {
  const newObj: {
    [key: string]: any
  } = {};

  for (const key in obj) {
    const newKey = camelToSnake(key);
    newObj[newKey] = obj[key];
  }

  return newObj;
}

export function keysToCamel (obj: {
  [key: string]: any
}): Object {
  const newObj: {
    [key: string]: any
  } = {};

  for (const key in obj) {
    const newKey = snakeToCamel(key);
    newObj[newKey] = obj[key];
  }

  return newObj;
}
