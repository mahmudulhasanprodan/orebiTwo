import React from 'react'

const SignUpInput = ({className, inputType, labelInput, PlaceholderName, InputId,oninpuChange}) => {
  return (
    <>
      <div className="flex basis-2/5 flex-col gap-y-4">
        <label
          className="font-DMsans text-base font-normal text-BtnColor"
          htmlFor={labelInput}
        >
          {labelInput}
        </label>
        <input
          className={className}
          type={inputType}
          id={InputId}
          name={InputId}
          placeholder={PlaceholderName}
          onChange={oninpuChange}
        />
      </div>
    </>
  );
}

export default SignUpInput
