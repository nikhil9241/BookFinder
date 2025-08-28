import React, {useState} from 'react';

//handle the search input and passes query back to parent 
export default function Search({onSearch}) {
  const [query, setQuery] = useState("");

  //function to handle form submission 
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4">
      <input type="text" placeholder="Search books....." className="border rounded p-2 w-full" value={query}
      onChange={(e)=>setQuery(e.target.value)}/>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  )
}