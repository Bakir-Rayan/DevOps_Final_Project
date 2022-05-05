import { useState, useEffect } from "react";

export default function AllBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("/api/books/", {method: 'GET'})
        .then(response => 
        response.json().then(data => {
            setBooks(data.Book);
        })
    );
    }, []);
    
    return (
        <div 
            style={{ 
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                backgroundColor: "#e6f7ff",
                border: "1px solid black",
                borderRadius: "5px",
                padding: "10px",
                margin: "10px"

            }}
        >
            <h1>Books</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publisher</th>
                        <th>Description</th>
                        <th>Field</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.publisher}</td>
                            <td>{book.description}</td>
                            <td>{book.book_field_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}