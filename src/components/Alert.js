import React from 'react'

const Alert = ({type, text}) => {
  const className = `alert ${type === "danger" ? "alert-danger" : type === "success" ? "alert-success" : ""}`;
  
  return (
    <div className={className}>
      {text}
    </div>
  )
}

export default Alert
