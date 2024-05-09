import React from 'react'

const Button = ({className, title}) => {
  return (
    <>
      <button className={className ? className : "py-2 px-10 bg-red-400"}>
        {title ? title : "Button"}
      </button>
    </>
  );
}

export default Button
