import React, { useState } from 'react'
import ResistrationTop from '../../ResistrationComponent/ResistrationTop/ResistrationTop'
import SignUpInput from '../../ResistrationComponent/SignUpInput/SignUpInput';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast, Bounce } from 'react-toastify';

const Registration = () => {
  const auth = getAuth();

  const[showinput,setshowinput ] = useState({
    FirstName: "",
    LastName: "",
    Emailaddress: "",
    Telephone: "",
    Address1: "",
    Address2: "",
    City: "",
    PostCode: "",
    Division: "",
    District: "",
    Password: "",
    RepeatPassword: "",
    agreement: false,
    subscribe1: false,
    subscribe2: false,
  })

  
  const[showinputerror,setshowinputerror ] = useState({
    FirstNameError: "",
    EmailaddressError: "",
    TelephoneError: "",
    Address1Error: "",
    CityError: "",
    PostCodeError: "",
    PasswordError: "",
    RepeatPasswordError: "",
    agreementError: false,
    passwordnotmatch: "",
  })


  // handleInput function start here 
  const handleInput = (e) => {
    if(e.target.checked){
      setshowinput({
        ...showinput,
        [e.target.id]: true,
      });
    }else{
      setshowinput({
        ...showinput,
        [e.target.id]: e.target.value,
      });
    }  
    };
 

  // HandlesighUp function start here 
  const HandlesighUp = () => {
      const {
        FirstName,
        Emailaddress,
        Telephone,
        Address1,
        City,
        PostCode,
        Password,
        RepeatPassword,
        agreement,
       } =showinput;
       const {
         FirstNameError,
         EmailaddressError,
         TelephoneError,
         Address1Error,
         CityError,
         PostCodeError,
         PasswordError,
         RepeatPasswordError,
         agreementError,
         passwordnotmatch,
       } = showinputerror;
      if (!FirstName) {
        setshowinputerror({
          ...showinputerror,
          FirstNameError: "First Name Missing",
        });
      } else if (!Emailaddress) {
        setshowinputerror({
          ...showinputerror,
          FirstNameError: "",
          EmailaddressError: "Email address Missing",
        });
      } else if (!Telephone) {
        setshowinputerror({
          ...showinputerror,
          FirstNameError: "",
          EmailaddressError: "",
          TelephoneError: "Telephone number Missing",
        });
      } else if (!Address1) {
        setshowinputerror({
          ...showinputerror,
          FirstNameError: "",
          EmailaddressError: "",
          TelephoneError: "",
          Address1Error: "address1 Missing",
        });
      } else if (!City) {
        setshowinputerror({
          ...showinputerror,
          FirstNameError: "",
          EmailaddressError: "",
          TelephoneError: "",
          Address1Error: "",
          CityError: "City is Missing",
        });
      } else if (!PostCode) {
        setshowinputerror({
          ...showinputerror,
          FirstNameError: "",
          EmailaddressError: "",
          TelephoneError: "",
          Address1Error: "",
          CityError: "",
          PostCodeError: "post is missig",
        });
      } else if (!Password) {
        setshowinputerror({
          ...showinputerror,
          FirstNameError: "",
          EmailaddressError: "",
          TelephoneError: "",
          Address1Error: "",
          CityError: "",
          PostCodeError: "",
          PasswordError: "password is Missing",
        });
      } else if (!RepeatPassword) {
        setshowinputerror({
          ...showinputerror,
          FirstNameError: "",
          EmailaddressError: "",
          TelephoneError: "",
          Address1Error: "",
          CityError: "",
          PostCodeError: "",
          PasswordError: "",
          RepeatPasswordError: "Repeat password is Missing",
        });
      } else if (Password !== RepeatPassword) {
        setshowinputerror({
          ...showinputerror,
          FirstNameError: "",
          EmailaddressError: "",
          TelephoneError: "",
          Address1Error: "",
          CityError: "",
          PostCodeError: "",
          PasswordError: "",
          RepeatPasswordError: "",
          passwordnotmatch: "Password Not Match",
        });
      } else if (agreement === false) {
        setshowinputerror({
          ...showinputerror,
          FirstNameError: "",
          EmailaddressError: "",
          TelephoneError: "",
          Address1Error: "",
          CityError: "",
          PostCodeError: "",
          PasswordError: "",
          RepeatPasswordError: "",
          passwordnotmatch: "",
          agreementError: "agreement is Missing",
        });
      } else {
        setshowinputerror({
          ...showinputerror,
          FirstNameError: "",
          EmailaddressError: "",
          TelephoneError: "",
          Address1Error: "",
          CityError: "",
          PostCodeError: "",
          PasswordError: "",
          RepeatPasswordError: "",
          passwordnotmatch: "",
          agreementError: "",
        });
        createUserWithEmailAndPassword(
          auth,
          showinput.Emailaddress,
          showinput.Password,
        ).then((userInfo) => {
          toast('🦄Resistration Done!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            }).catch((err) => {
              toast.error(`${err.Code}`, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
            })
        });
      }
  };


  return (
    <>
      <div className="container">
        <ResistrationTop />
        {/* Personal details here */}
        <div>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <div className="py-10">
              <h1 className="font-DMsans text-3xl font-bold">
                Your Personal Details
              </h1>
            </div>
            <div className="flex flex-wrap gap-x-20 gap-y-6">
              <div className="basis-2/5">
                <SignUpInput
                  className={`${showinputerror.FirstNameError ? "border-b-[1px] border-red-300 py-4 opacity-65" : "border-b-[1px] border-b-gray-200 py-4 opacity-65"}`}
                  inputType={"text"}
                  labelInput={"First Name"}
                  PlaceholderName={"First Name"}
                  InputId={"FirstName"}
                  oninpuChange={handleInput}
                  
                />
                {showinputerror.FirstNameError && (
                  <p className="text-red-500">
                    {showinputerror.FirstNameError}
                  </p>
                )}
              </div>
              <div className="basis-2/5">
                <SignUpInput
                  className={"border-b-[1px] border-b-gray-200 py-4 opacity-65"}
                  inputType={"text"}
                  labelInput={"Last Name"}
                  PlaceholderName={"Last Name"}
                  InputId={"LastName"}
                  oninpuChange={handleInput}
                />
              </div>
              <div className="basis-2/5">
                <SignUpInput
                  className={`${showinputerror.EmailaddressError ? "border-b-[1px] border-red-300 py-4 opacity-65" : "border-b-[1px] border-b-gray-200 py-4 opacity-65"}`}
                  inputType={"email"}
                  labelInput={"Email address"}
                  PlaceholderName={"company@domain.com"}
                  InputId={"Emailaddress"}
                  oninpuChange={handleInput}
                />
                {showinputerror.EmailaddressError && (
                  <p className="text-red-500">
                    {showinputerror.EmailaddressError}
                  </p>
                )}
              </div>
              <div className="basis-2/5">
                <SignUpInput
                  className={`${showinputerror.TelephoneError ? "border-b-[1px] border-red-300 py-4 opacity-65" : "border-b-[1px] border-b-gray-200 py-4 opacity-65"}`}
                  inputType={"number"}
                  labelInput={"Telephone"}
                  PlaceholderName={"Your phone number"}
                  InputId={"Telephone"}
                  oninpuChange={handleInput}
                />
                {showinputerror.TelephoneError && (
                  <p className="text-red-500">
                    {showinputerror.TelephoneError}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Personal details here */}

        {/* Customer details here */}

        <div className="mt-8">
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <div className="py-10">
              <h1 className="font-DMsans text-3xl font-bold">New Customer</h1>
            </div>
            <div className="flex flex-wrap gap-x-20 gap-y-6">
              <div className="basis-2/5">
                <SignUpInput
                  className={`${showinputerror.Address1Error ? "border-b-[1px] border-red-300 py-4 opacity-65" : "border-b-[1px] border-b-gray-200 py-4 opacity-65"}`}
                  inputType={"text"}
                  labelInput={"Address 1"}
                  PlaceholderName={"4279 Zboncak Port Suite 6212"}
                  InputId={"Address1"}
                  oninpuChange={handleInput}
                />
                {showinputerror.Address1Error && (
                  <p className="text-red-500">{showinputerror.Address1Error}</p>
                )}
              </div>
              <div className="basis-2/5">
                <SignUpInput
                  className={
                    "border-[1px] border-gray-200 py-2 pl-2 opacity-65"
                  }
                  inputType={"text"}
                  labelInput={"Address 2"}
                  PlaceholderName={"----"}
                  InputId={"Address2"}
                  oninpuChange={handleInput}
                />
              </div>
              <div className="basis-2/5">
                <SignUpInput
                  className={`${showinputerror.CityError ? "border-b-[1px] border-red-300 py-4 opacity-65" : "border-b-[1px] border-b-gray-200 py-4 opacity-65"}`}
                  inputType={"text"}
                  labelInput={"City"}
                  PlaceholderName={"Your city"}
                  InputId={"City"}
                  oninpuChange={handleInput}
                />
                {showinputerror.CityError && (
                  <p className="text-red-500">{showinputerror.CityError}</p>
                )}
              </div>
              <div className="basis-2/5">
                <SignUpInput
                  className={`${showinputerror.PostCodeError ? "border-b-[1px] border-red-300 py-4 opacity-65" : "border-b-[1px] border-b-gray-200 py-4 opacity-65"}`}
                  inputType={"number"}
                  labelInput={"Post Code"}
                  PlaceholderName={"05228"}
                  InputId={"PostCode"}
                  oninpuChange={handleInput}
                />
                {showinputerror.PostCodeError && (
                  <p className="text-red-500">{showinputerror.PostCodeError}</p>
                )}
              </div>
            </div>
            <div className="flex gap-x-20 gap-y-6">
              <div className="basis-2/5">
                <h2 className="py-2 font-DMsans text-base font-normal text-BtnColor">
                  Division
                </h2>
                <select
                  name="Division"
                  id="Division"
                  className="w-full cursor-pointer border-[1px] border-gray-200 py-2"
                  onChange={handleInput}
                >
                  <option value="">Please select</option>
                  <option value="Chittagonj">Chittagonj</option>
                  <option value="Borisal">Borisal</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Syhlet">Syhlet</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Mymensing">Mymensing</option>
                </select>
              </div>
              <div className="basis-2/5">
                <h2 className="py-2 font-DMsans text-base font-normal text-BtnColor">
                  District
                </h2>

                <select
                  name="District"
                  id="District"
                  className="w-full cursor-pointer border-[1px] border-gray-200 py-2"
                  onChange={handleInput}
                >
                  <option value="">Please select</option>
                  <option value="kishoregonj">kishoregonj</option>
                  <option value="Gazipur">Gazipur</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Mymensingh">Mymensingh</option>
                  <option value="Gupalgonj">Gupalgonj</option>
                  <option value="Tangail">Tangail</option>
                  <option value="Sherpur">Sherpur</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        {/* Customer details here */}

        {/* Password details here */}
        <div className="pb-10">
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <div className="py-10">
              <h1 className="font-DMsans text-3xl font-bold">
                Your Personal Details
              </h1>
            </div>
            <div className="flex flex-wrap gap-x-20 gap-y-6">
              <div className="basis-2/5">
                <SignUpInput
                  className={`${showinputerror.PasswordError ? "border-b-[1px] border-red-300 py-4 opacity-65" : "border-b-[1px] border-b-gray-200 py-4 opacity-65"}`}
                  inputType={"password"}
                  labelInput={"Your Password"}
                  PlaceholderName={"Password"}
                  InputId={"Password"}
                  oninpuChange={handleInput}
                />
                {showinputerror.PasswordError && (
                  <p className="text-red-500">{showinputerror.PasswordError}</p>
                )}
              </div>
              <div className="basis-2/5">
                <SignUpInput
                  className={`${showinputerror.RepeatPasswordError ? "border-b-[1px] border-red-300 py-4 opacity-65" : "border-b-[1px] border-b-gray-200 py-4 opacity-65"}`}
                  inputType={"password"}
                  labelInput={"Repeat Password"}
                  PlaceholderName={"Repeat Password"}
                  InputId={"RepeatPassword"}
                  oninpuChange={handleInput}
                />
                {showinputerror.RepeatPasswordError && (
                  <p className="text-red-500">
                    {showinputerror.RepeatPasswordError}
                  </p>
                )}
              </div>
              {showinputerror.passwordnotmatch && (
                  <p className="text-red-500">{showinputerror.passwordnotmatch}</p>
                )}
            </div>
          </form>
        </div>
        {/* Password details here */}

        {/* Chekmark details here */}
        <div className="flex cursor-pointer items-center gap-x-5">
          <input
            className="cursor-pointer"
            type="checkbox"
            name="agreement"
            id="agreement"
            onChange={handleInput}
          />
          <p
            className={`${showinputerror.agreementError ? "font-DMsans text-base text-red-300" : "font-DMsans text-base text-MenuTextColor"}`}
          >
            {showinputerror.agreementError
              ? "I have read and agree to the Privacy Policy"
              : "I have read and agree to the Privacy Policy"}
          </p>
        </div>
        {/* Chekmark details here */}

        {/* subcribsion details here */}
        <div className="flex items-center gap-x-5 pt-10">
          <p className="font-DMsans text-base text-MenuTextColor">
            Subscribe Newsletter
          </p>
          <div className="flex cursor-pointer items-center gap-x-3">
            <input
              className="cursor-pointer"
              type="checkbox"
              name="subscribe 1"
              id="subscribe1"
              onChange={handleInput}
            />
            <p className="font-DMsans text-base text-MenuTextColor">Yes</p>
          </div>
          <div className="flex cursor-pointer items-center gap-x-3">
            <input
              className="cursor-pointer"
              type="checkbox"
              name="subscribe 2"
              id="subscribe2"
              onChange={handleInput}
            />
            <p className="font-DMsans text-base text-MenuTextColor">No</p>
          </div>
        </div>
        {/* subcribsion details here */}

        {/* button here */}
        <div className="py-14">
          <button
            className="text-md rounded-sm bg-black px-20 py-2 font-DMsans font-bold text-white"
            onClick={HandlesighUp}
          >
            Sign Up
          </button>
        </div>
        {/* button here */}
      </div>
    </>
  );
}

export default Registration
