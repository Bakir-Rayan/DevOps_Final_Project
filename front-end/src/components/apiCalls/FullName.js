import { useState, useEffect } from "react";

export default function FullName() {
    const [book_name , setBookName] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [books, setBooks] = useState([]);
    const params = { book_name: book_name };
    const url = "/api/books/fullname/?book_name=" + params.book_name;

    useEffect(() => {
        if (submitted === true) {
            fetch(url, {method: 'GET'})
            .then(response => 
            response.json().then(data => {
                setBooks(data.Book);
            })).catch(err => setSubmitted(false));
        }
    }, [submitted, url]);
    
    return submitted ? (
        
        <div 
            style={{ 
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                backgroundColor: "#e6ffff",
                border: "1px solid black",
                borderRadius: "5px",
                padding: "10px",
                margin: "10px"
            }}
        >
            <h1> The Book</h1>
            <button className="back" id="back" onClick={() => setSubmitted(false)}>Back</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publisher</th>
                        <th>Description</th>
                        <th>Field</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={books.id}>
                        <td>{books.id}</td>
                        <td>{books.title}</td>
                        <td>{books.author}</td>
                        <td>{books.publisher}</td>
                        <td>{books.description}</td>
                        <td>{books.book_field_id}</td>
                    </tr>
                </tbody>
            </table>  
        </div>
    ) : (
        <div
            style={{ 
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                backgroundColor: "#e6ffff",
                border: "1px solid black",
                borderRadius: "5px",
                padding: "10px",
                margin: "10px"
            }}
        >
            <h2>Which book do you want ?? (full-name of the book needed)</h2>
            <input placeholder="Enter the full-name of the book" type="text" value={book_name} onChange={e => setBookName(e.target.value)} />
            <button className="submit" onClick={() => setSubmitted(true)}> submit </button>
            
        </div>
  )
}