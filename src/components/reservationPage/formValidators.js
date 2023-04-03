export const validateName = (name) => {
  if (3 < name.length && name.length < 20) {
    return true
  } else {
    return false
  }
}

export const validateEmail = (mail) => {
  var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (mail.match(mail_format)) {
    return true
  } else {
    return false
  }
}

export const validatePhone = (phone) => {
  var phone_format = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  if (phone.match(phone_format)) {
    return true
  } else {
    return false
  }
}

export const validateDate = (date) => {
  const d = new Date()
  let year = d.getFullYear()
  let month = '' + (d.getMonth() + 1)
  let day = '' + d.getDate()

  if (month.length < 2) {
    month = '0' + month
  }
  if (day.length < 2) {
    day = '0' + day
  }

  let todayDate = year + '-' + month + '-' + day

  const date1 = new Date(date)
  const date2 = new Date(todayDate)

  let difference = date1.getTime() - date2.getTime()
  let totalDays = Math.ceil(difference / (1000 * 3600 * 24))

  if (totalDays > 0 && totalDays < 60) {
    return true
  } else {
    return false
  }
}
