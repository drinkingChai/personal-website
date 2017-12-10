import React from 'react'

export const SentSuccessMessage = () => {
  return (
    <div className='message'>
      <i className='ion-android-checkmark-circle bouncing-check'></i>
      <p>Email sent!</p>
    </div>
  )  
}

export const SendingEmailMessage = () => {
  return (
    <div className='message'>
      <div className='spinning-circle'></div>
      <p>Sending email</p>
    </div>
  )
}