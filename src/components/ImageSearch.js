import React, { useState } from "react";

export default function ImageSearch({searchText}) {
  const [text, setText] = useState("");

  return (
    <div className="max-w-sm rounded my-10 mx-auto overflow-hidden">
      <form className="w-full max-w-sm" onSubmit={(e) => {
        e.preventDefault();
        searchText(text);
      }}>
        <div className="flex items-center pr-5 pl-3 py-3 border-2 border-teal-500 rounded-2xl">
          <input
            type="text"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 py-1 leading-tight focus:outline-none"
            placeholder="Search Image ..."
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button
            className="flex-shrink-0 bg-teal-500 text-gray-500 hover:bg-teal-700 hover:text-white border-teal-500 hover:border-teal-700 text-sm border-4 px-2 py-1 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
