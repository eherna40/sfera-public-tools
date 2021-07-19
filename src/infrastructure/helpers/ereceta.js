export const convertToPriorityColor = (priority) => {
  switch (priority) {
    case 'A':
      return 'red'
    case 'M':
      return 'yellow'
    default:
      return 'violet'
  }
}
