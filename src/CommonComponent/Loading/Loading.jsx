import React from 'react'

const Loading = () => {
  return (
    <>
      <div className="flex h-[100vh] items-center justify-center">
        <div class="mx-auto w-full max-w-sm items-center justify-center rounded-md border border-blue-300 p-4 shadow">
          <div className="my-4 flex h-full animate-pulse flex-col gap-y-5">
            <div class="h-3 w-[80%] rounded-md bg-gray-500 py-3"></div>
            <div class="h-3 w-[50%] rounded-md bg-gray-300 py-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loading
