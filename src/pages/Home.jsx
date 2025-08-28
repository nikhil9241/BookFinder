import React, {useState} from "react";
import Search from "../components/Search";
import BookCard from "../components/BookCard";
import Loader from "../components/Loader";
import { fetchBooksByTitle} from "../api/books";

export default function Home(){
  const [books, setBooks]= useState([]); //state to store fetched books
  const [loading, setLoading]= useState(false);//loading state true while fetching data else false 
  const [error, setError]= useState("");//store the error message 
  const [noResult, setNoResult]= useState(false);//true if api returns no books available 


  //function to handle searching of books 
  const handleSearch = async (query) => {
    setError("");
    setNoResult(false);
    setBooks([]);
    setLoading(true);

    try{
      const docs = await fetchBooksByTitle(query);

      if(!docs || docs.length ===0){
        setNoResult(true);
      }else{
        setBooks(docs.slice(0, 24)); //store only first 24 result for a clean ui 
      }
    }
    catch(err){
      console.error(err);
      setError("failed to fetch result. Try again.");
    }finally{
      setLoading(false);
    }
  };
  return(
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-amber-200 to-amber-300">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Book Finder</h1>

        <Search onSearch={handleSearch}/>
        {loading && <Loader/>}

        {error && (<p className="text-center text-red-500 mt-4">{error}</p>)}

        {noResult &&(
          <p className="text-center text-gray-600 mt-4">No result found. Try another title</p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">{books.map((b, idx)=>(<BookCard key={b.key || `${b.title}-${idx}`} book={b}/>
        ))}
        </div>
      </div>
    </div>
  );
}
