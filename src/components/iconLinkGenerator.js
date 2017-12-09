import React from 'react'

const iconMap = {
  GITHUB: 'ion-social-github',
  YOUTUBE: 'ion-social-youtube'
}

export default function iconLinkGenerator ({ type, url }) {
  return <a href={ url } target='_blank'><i className={ iconMap[type] }></i></a>
}