export default function joinMore(array: Array<string>, divider = "_") {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length + 1; j++) {
      result.push(array.slice(i, j).join(divider));
    }
  }
  return result;
}
