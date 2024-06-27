import React, { useState } from 'react'
import ResistrationTop from '../../ResistrationComponent/ResistrationTop/ResistrationTop'
import SignUpInput from '../../ResistrationComponent/SignUpInput/SignUpInput';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast, Bounce } from 'react-toastify';
import {db} from "../../../Firebase/FirebaseConfig"
import { collection, addDoc } from "firebase/firestore"; 


const Registration = () => {
  const auth = getAuth();

  const [loading,setloading] = useState(false);

  const [showinput, setshowinput] = useState({
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
  });

  const [showinputerror, setshowinputerror] = useState({
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
  });

  // handleInput function start here
  const handleInput = (e) => {
    if (e.target.checked) {
      setshowinput({
        ...showinput,
        [e.target.id]: true,
      });
    } else {
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
    } = showinput;
    if (!FirstName) {
      setshowinputerror({
        ...showinputerror,
        EmailaddressError: "",
        TelephoneError: "",
        Address1Error: "",
        CityError: "",
        PostCodeError: "",
        PasswordError: "",
        RepeatPasswordError: "",
        passwordnotmatch: "",
        agreementError: "",
        FirstNameError: "First Name Missing",
      });
    } else if (!Emailaddress) {
      setshowinputerror({
        ...showinputerror,
        FirstNameError: "",
        TelephoneError: "",
        Address1Error: "",
        CityError: "",
        PostCodeError: "",
        PasswordError: "",
        RepeatPasswordError: "",
        passwordnotmatch: "",
        agreementError: "",
        EmailaddressError: "Email address Missing",
      });
    } else if (!Telephone) {
      setshowinputerror({
        ...showinputerror,
        FirstNameError: "",
        EmailaddressError: "",
        Address1Error: "",
        CityError: "",
        PostCodeError: "",
        PasswordError: "",
        RepeatPasswordError: "",
        passwordnotmatch: "",
        agreementError: "",
        TelephoneError: "Telephone number Missing",
      });
    } else if (!Address1) {
      setshowinputerror({
        ...showinputerror,
        FirstNameError: "",
        EmailaddressError: "",
        TelephoneError: "",
        CityError: "",
        PostCodeError: "",
        PasswordError: "",
        RepeatPasswordError: "",
        passwordnotmatch: "",
        agreementError: "",
        Address1Error: "address1 Missing",
      });
    } else if (!City) {
      setshowinputerror({
        ...showinputerror,
        FirstNameError: "",
        EmailaddressError: "",
        TelephoneError: "",
        Address1Error: "",
        PostCodeError: "",
        PasswordError: "",
        RepeatPasswordError: "",
        passwordnotmatch: "",
        agreementError: "",
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
        PasswordError: "",
        RepeatPasswordError: "",
        passwordnotmatch: "",
        agreementError: "",
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
        RepeatPasswordError: "",
        passwordnotmatch: "",
        agreementError: "",
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
        passwordnotmatch: "",
        agreementError: "",
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
    } else if (!agreement) {
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
  
      setloading(true);

      //Create new user with firebase
      createUserWithEmailAndPassword(auth, showinput.Emailaddress, showinput.Password).then((uservalue) => {
        toast.success(`${showinput.FirstName} Resistration Done`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }).then(() =>{
        addDoc(collection(db, "users"), showinput).then((useCredential) =>{
          console.log(useCredential);
        }).catch((err) => {
          console.log(err);
        })
      })
      .catch((error) => {
        toast.error('🦄 Wow so easy!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }).finally(() => {
        setloading(false);
        setshowinput({
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
        });
      })

    };
  }


  return (
    <>
      <div className="container">
        <div><ResistrationTop /></div>
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
                  valuefrom={showinput.FirstName}
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
                  valuefrom={showinput.LastName}
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
                  valuefrom={showinput.Emailaddress}
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
                  valuefrom={showinput.Telephone}
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
                  valuefrom={showinput.Address1}
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
                  valuefrom={showinput.Address2}
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
                  valuefrom={showinput.City}
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
                  valuefrom={showinput.PostCode}
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
                  value={showinput.Division}
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
                  value={showinput.District}
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
                  valuefrom={showinput.Password}
                />
                {showinputerror.PasswordError && (
                  <p className="text-red-500">{showinputerror.PasswordError}</p>
                )}
                 {showinputerror.passwordnotmatch && (
                  <p className="text-red-500">{showinputerror.passwordnotmatch}</p>
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
                  valuefrom={showinput.RepeatPassword}
                />
                {showinputerror.RepeatPasswordError && (
                  <p className="text-red-500">
                    {showinputerror.RepeatPasswordError}
                  </p>
                )}
                {showinputerror.passwordnotmatch && (
                  <p className="text-red-500">
                    {showinputerror.passwordnotmatch}
                  </p>
                )}
              </div>
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
            value={showinput.agreement}
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
              value={showinput.subscribe1}
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
              value={showinput.subscribe2}
            />
            <p className="font-DMsans text-base text-MenuTextColor">No</p>
          </div>
        </div>
        {/* subcribsion details here */}

        {/* button here */}
        <div className="py-14">
          {loading ? (
            <button
              type="button"
              class="font-Roboto mt-4 flex w-[250px] items-center justify-center rounded bg-indigo-500 py-4 text-xl font-bold text-white"
            >
              <svg
                class="mr-3 h-5 w-5 animate-spin rounded-full border-4 border-t-4 border-gray-300 border-b-white"
                viewBox="0 0 24 24"
              ></svg>
              Processing...
            </button>
          ) : (
            <button
              className="font-Roboto mt-4 w-[250px] rounded-sm bg-orange-600 py-4 text-xl font-normal text-white"
              onClick={HandlesighUp}
            >
              SIGN UP
            </button>
          )}
        </div>
        {/* button here */}
      </div>
    </>
  );
}

export default Registration
