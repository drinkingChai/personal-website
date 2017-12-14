import React from 'react'

export default function SocialLinks ({ social }) {
  if (!social) return <p></p>

  return (
    <p className='social-links'>
      <a href={ social && social.linkedin } target='_blank'><i className="fab fa-linkedin"></i></a>
      <a href={ social && social.medium } target='_blank'><i className="fab fa-medium"></i></a>
      <a href={ social && social.twitter } target='_blank'><i className="fab fa-twitter-square"></i></a>
      <a href={ social && social.facebook } target='_blank'><i className="fab fa-facebook-square"></i></a>
    </p>
  )
}
