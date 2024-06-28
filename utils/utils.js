import {toast, Bounce } from 'react-toastify';

function emailChecker(email ="mahmudulhasan@gmail.com") {
   const rejexPattern =
     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isEmailvalidate = rejexPattern.test(email.toLocaleLowerCase());
    return isEmailvalidate;
};

function successmessage(message, position= "top-right", delay = 4000) {
  toast.success(message, {
    position: position,
    autoClose: delay,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

function errormessage(errormessage, position= "top-center", delay = 4000) {
    toast.error(errormessage, {
      position: position,
      autoClose: delay,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  
function checkword(message) {
    return message.length >= 100 ? false : true;
}


export {emailChecker,successmessage,errormessage,checkword};