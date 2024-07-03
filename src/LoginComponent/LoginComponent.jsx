import React from 'react'
import BreadCrumb from "../CommonComponent/BreadCrumb/BreadCrumb"
import Loginpic from "../assets/LoginPic/Login.jpg"
import { Link } from 'react-router-dom';

const LoginComponent = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="py-10">
            <h2 className="py-3 font-DMsans text-2xl font-bold mb-3">Login</h2>
            <BreadCrumb />
          </div>
          <div className="mb-20">
            {/* <!-- component --> */}
            <section class="flex h-screen flex-col items-center md:flex-row">
              <div class="hidden  w-full bg-indigo-600 md:w-1/2 lg:block xl:w-2/3">
                <img
                  src={Loginpic}
                  alt={Loginpic}
                  class="h-full w-full object-cover"
                />
              </div>
              <div
                class="flex h-screen w-full items-center justify-center bg-white px-6 md:mx-0 md:w-1/2 md:max-w-md lg:max-w-full
        lg:px-16 xl:w-1/3 xl:px-12"
              >
                <div class="h-100 w-full">
                  <h1 class="mt-12 text-xl font-bold leading-tight md:text-2xl">
                    Log in to your account
                  </h1>

                  <form class="mt-6" action="#" method="POST">
                    <div>
                      <label class="block text-gray-700">Email Address</label>
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Enter Email Address"
                        class="mt-2 w-full rounded-lg border bg-gray-200 px-4 py-3 focus:border-blue-500 focus:bg-white focus:outline-none"
                        autofocus
                        autocomplete
                        required
                      />
                    </div>

                    <div class="mt-4">
                      <label class="block text-gray-700">Password</label>
                      <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Enter Password"
                        minlength="6"
                        class="mt-2 w-full rounded-lg border bg-gray-200 px-4 py-3 focus:border-blue-500
                focus:bg-white focus:outline-none"
                        required
                      />
                    </div>

                    <div class="mt-2 text-right">
                      <a
                        href="#"
                        class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                      >
                        Forgot Password?
                      </a>
                    </div>

                    <button
                      type="submit"
                      class="mt-6 block w-full rounded-lg bg-indigo-500 px-4 py-3 font-semibold
              text-white hover:bg-indigo-400 focus:bg-indigo-400"
                    >
                      Log In
                    </button>
                  </form>

                  <hr class="my-6 w-full border-gray-300" />

                  <button
                    type="button"
                    class="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-900 hover:bg-gray-100 focus:bg-gray-100"
                  >
                    <div class="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="h-6 w-6"
                        viewBox="0 0 48 48"
                      >
                        <defs>
                          <path
                            id="a"
                            d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                          />
                        </defs>
                        <clipPath id="b">
                          <use xlink:href="#a" overflow="visible" />
                        </clipPath>
                        <path
                          clip-path="url(#b)"
                          fill="#FBBC05"
                          d="M0 37V11l17 13z"
                        />
                        <path
                          clip-path="url(#b)"
                          fill="#EA4335"
                          d="M0 11l17 13 7-6.1L48 14V0H0z"
                        />
                        <path
                          clip-path="url(#b)"
                          fill="#34A853"
                          d="M0 37l30-23 7.9 1L48 0v48H0z"
                        />
                        <path
                          clip-path="url(#b)"
                          fill="#4285F4"
                          d="M48 48L17 24l-4-3 35-10z"
                        />
                      </svg>
                      <span class="ml-4">Log in with Google</span>
                    </div>
                  </button>

                  <p class="mt-8">
                    Need an account?{" "}
                    <Link
                      to={"/registration"}
                      class="font-semibold text-blue-500 hover:text-blue-700"
                    >
                      Create an account
                    </Link>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginComponent
