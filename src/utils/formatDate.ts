function formatDate(input: string | number) {
  const date = new Date(input);

  const formattedDate = date.toLocaleDateString('default', {
    month: 'long',
    year: 'numeric',
  });

  return formattedDate;
}

export { formatDate };