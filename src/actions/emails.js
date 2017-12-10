import axios from 'axios'

export const sendMail = mail => dispatch =>
  axios.post('/emails', mail)
