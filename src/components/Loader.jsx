import React from "react";

export default function Loader (){
  return(
    //shows loading state with animation of spinning 
    <div className="flex justify-center items-center py-6">
      <svg className="animate-spin h-6 w-6 mr-2" viewBox="0 0 24 24">
      <circle className="opaciity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
      <span>Loading.....</span>
    </div>
  );
}