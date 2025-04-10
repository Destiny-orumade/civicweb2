import React from "react";

const PhoneInput = () => {
  return (
    <div className="mb-4 grid grid-cols-3 gap-2">
      <div>
        <label
          htmlFor="country-select"
          className="block text-sm font-medium mb-1"
        >
          Country
        </label>
        <select
          id="country-select"
          className="w-full border px-3 py-2 rounded-md"
        >
          <option value="+234">NIG (+234)</option>
        </select>
      </div>
      <div className="col-span-2">
        <label
          htmlFor="phone-number"
          className="block text-sm font-medium mb-1"
        >
          Phone Number
        </label>
        <input
          id="phone-number"
          type="tel"
          placeholder="Enter Your Number"
          className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
        />
      </div>
    </div>
  );
};

export default PhoneInput;
