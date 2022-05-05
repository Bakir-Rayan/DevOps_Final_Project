import { useState, useEffect } from "react";

export default function FullName() {
    const [book_name , setBookName] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [books, setBooks] = useState([]);
    const params = { book_name: book_name };
    const url = "/api/books/fullname/?book_name=" + params.book_name;

    useEffect(() => {
        fetch(url, {method: 'GET'})
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
            <h1> The Book</h1>
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
                    <tr key={books.id}>
                        <td>{books.title}</td>
                        <td>{books.author}</td>
                        <td>{books.publisher}</td>
                        <td>{books.description}</td>
                        <td>{books.book_field_id}</td>
                    </tr>
                </tbody>
            </table>
        </div>
  )
}