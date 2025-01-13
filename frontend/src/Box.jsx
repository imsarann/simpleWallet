import React from 'react';

export default function Box({ contents }) {
    console.log("From box", contents);
  return (
    <div className="w-[800px] h-24  bg-gray-900 text-white m-2 grid grid-cols-6 gap-2 p-2  rounded-lg">
    {contents.split(' ').map((content, index) => (
        <div key={index} className="text-center border rounded-lg border-gray-700 p-1">
    { console.log("From box", content)}{content.toUpperCase()}
        </div>
      ))}
    </div>
  );
}
