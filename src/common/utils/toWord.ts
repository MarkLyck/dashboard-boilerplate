// import pluralize from 'pluralize'

//Capitalizes first letter of the first word
const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const underscoreCaseToWord = (string: string) => {
  const resourceLabel = string.split('.').pop() || string
  const word = resourceLabel.replace('_v3', '').replace(/_/g, ' ')
  return capitalize(word)
}
