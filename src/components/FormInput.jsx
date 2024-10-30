import React from 'react';

function FormInput({ label, className = '', ...props }) {
  return (
    <div className={className}>
      <label className="block text-gray-300 mb-2 font-medium">
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#a1000a] transition-colors"
      />
    </div>
  );
}

export default FormInput;