import React from 'react';

const NINInput = () => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">NIN</label>
      <input
        type="text"
        placeholder="Enter Your NIN"
        className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
      />
    </div>
  );
};

export default NINInput;
