import React from 'react'

class Modal extends React.Component {
  componentDidMount = () => {
    let body = document.body
    body.classList ? body.classList.add('modal-active') : body.className += ' modal-active'
  }

  componentWillUnmount = () => {
    let body = document.body
    body.classList.remove('modal-active')
  }

  render = () => {
    return (
      <div className={ `modal ${this.props.className}` }>
      { React.Children.map(this.props.children, (child, i) => child)}
      </div>
    )
  }
}

export default Modal