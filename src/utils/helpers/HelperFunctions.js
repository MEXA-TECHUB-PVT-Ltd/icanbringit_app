const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

const truncate = (string, maxLength) =>
  string.length > maxLength ? string.slice(0, maxLength - 1) + '...' : string

const validateEmail = email => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

const formatDate = date => {
  const options = {year: 'numeric', month: 'long', day: 'numeric'}
  return new Date(date).toLocaleDateString('en-US', options)
}

const formatPhoneNumber = phoneNumber => {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null
}

const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0)

export {capitalize, formatDate, formatPhoneNumber, isEmpty, truncate, validateEmail}
