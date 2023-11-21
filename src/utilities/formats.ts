export const formatDate = (date: Date | undefined): string => {
  if (!date) {
    return 'No date!'
  }
  return date.toLocaleDateString()
}