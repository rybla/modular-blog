export const removeElementFromBodyById = (id) => () => {
  const e = document.getElementById(id);
  if (e === null) return;
  document.body.removeChild(e)
}

