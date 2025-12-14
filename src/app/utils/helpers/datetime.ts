export const generateDate = () => new Date().toISOString();

export const checkCreatedDay = (created: string) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const date_created = new Date(created);
  date_created.setHours(0, 0, 0, 0);

  if (today.toDateString() === date_created.toDateString()) {
    return 'Today';
  }
  if (today.getTime() - date_created.getTime() <= 24 * 60 * 60 * 1000) {
    return 'Yesterday';
  }
  return 'Older';
}