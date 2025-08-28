import React from "react";

//for displaying a single book content 
export default function BookCard ({book}) {
  const cover = book.cover_i
  ?`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
  :"https://via.placeholder.com/150x220?text=No+Cover";

  return(
    <div className="bg-white rounded-lg shadow p-3 flex flex-col items-center">
      <img src={cover} alt={book.title} //book cover image if available else fallback
      className="w-32 h-48 object-cover rounded mb-3"/>
      <h3 className="text-sm font-semibold text-center">{book.title}</h3>
      <p className="text-xs text-gray-600 mt-1 text-center">
        {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
      
      </p>
      <p className="tet=xs text-gray-400 mt-1">{book.first_publish_year || ""}</p>
    </div>
  );
}