import React, { useState } from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import { emailChecker,successmessage,errormessage,checkword } from '../../../utils/utils';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../../Firebase/FirebaseConfig';

const ContactCommon = () => {

  emailChecker("mahmudulhasan@gmail.com");
const [loadingpost, setloadingpost] = useState(false);
const[contactInfo, setcontactInfo] = useState({
  name: "",
  email: "",
  message: "",
});

  // Handlecontact function start here 

  const Handlecontact = (e) => {
    setcontactInfo({
      ...contactInfo,
      [e.target.id]: e.target.value
,    })
  };

  //Handlepost function start here

  const Handlepost = () => {
      const{name,email,message} = contactInfo;
      if(!name){
        errormessage("Name Missing");
      }else if(!email || !emailChecker(email)) {
        errormessage("Email is not valid");
      }else if(!message || !checkword(message)){
        errormessage("Maximum 100 Character")
      }else{
        setloadingpost(true);
        addDoc(collection(db, "frompost"), contactInfo)
          .then((info) => {
            successmessage("Everything Done");
          })
          .finally(() => {
            setloadingpost(false);
            setcontactInfo({
              name: "",
              email: "",
              message: "",
            });
          });
      }
  };
 

  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="py-10">
            <h2 className="py-3 font-DMsans text-2xl font-bold">Contacts</h2>
            <BreadCrumb />
          </div>
          <div className="mt-10">
            <h2 className="mb-10 font-DMsans text-5xl font-bold text-MainfontColor">
              Fill up a Form
            </h2>
          </div>
          <div className="w-1/3">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-y-6">
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="name"
                    className="font-DMsans text-base font-normal text-BtnColor"
                  >
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border-b-2 border-b-gray-200 py-3"
                    placeholder="Enter your name"
                    onChange={Handlecontact}
                    value={contactInfo.name}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="name"
                    className="font-DMsans text-base font-normal text-BtnColor"
                  >
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="w-full border-b-2 border-b-gray-200 py-3"
                    placeholder="Enter your email"
                    onChange={Handlecontact}
                    value={contactInfo.email}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="name"
                    className="font-DMsans text-base font-normal text-BtnColor"
                  >
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    id="message"
                    className="w-full border-b-2 border-b-gray-200 py-6"
                    placeholder="Your message here"
                    onChange={Handlecontact}
                    value={contactInfo.message}
                  />
                </div>
              </div>
              <div className="mt-14">
                <div className="py-14">
                  {loadingpost ? (
                    <button
                      type="button"
                      class="font-Roboto flex w-[200px] items-center justify-center rounded bg-indigo-500 py-2 font-bold text-white"
                    >
                      <svg
                        class="mr-3 h-5 w-5 animate-spin rounded-full border-4 border-t-4 border-gray-300 border-b-white"
                        viewBox="0 0 24 24"
                      ></svg>
                      Processing...
                    </button>
                  ) : (
                    <button
                      class="w-[200px] rounded-sm bg-BtnColor py-2 font-DMsans font-bold text-white active:bg-green-400"
                      onClick={Handlepost}
                    >
                      Post
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
          <div className="py-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6136.170634217277!2d90.39339186717542!3d23.86872802773268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c59ad99e526d%3A0x8301be280dfeb039!2sCreative%20IT%20Institute%2C%20Uttara%20Branch!5e0!3m2!1sbn!2sbd!4v1719600009655!5m2!1sbn!2sbd"
              className="w-full h-[450px]"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactCommon
