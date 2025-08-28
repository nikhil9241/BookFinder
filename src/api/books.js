//function to fetch book from open library api 

export async function fetchBooksByTitle(title) {
  const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`;
  const res = await fetch(url);
  if(!res.ok) throw new Error("Network response was not ok");
  const data = await res.json();
  return data.docs || [];
}