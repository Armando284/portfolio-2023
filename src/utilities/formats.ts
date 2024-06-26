export const formatDate = (date: Date | 'Current' | undefined): string => {
  if (!date) {
    return 'No date!'
  }
  if (date === 'Current') {
    return 'Current'
  }
  return date.toLocaleDateString()
}

export const toISO = (date: Date | 'Current' | undefined): string => {
  if (!date) {
    return 'No date!'
  }
  if (date === 'Current') {
    return 'Current'
  }
  return date.toISOString()
}
