import { useState, useEffect } from "react";

export default function UpdateBook() {
    const fields = [
        {value :"comic", label : "Comic"},
        {value :"computer_science", label : "Computer Science"},
        {value :"data_science", label : "Data Science"},
        {value :"economics", label : "Economics"},
        {value :"fiction", label : "Fiction"},
        {value :"history", label : "History"},
        {value :"mathematics", label : "Mathematics"},
        {value :"nonfiction", label : "Nonfiction"},
        {value :"philosophy", label : "Philosophy"},
        {value :"psychology", label : "Psychology"},
        {value :"science", label : "Science"},
        {value :"signal_processing", label : "Signal Processing"}
    ]
    
    const [book, setBooks] = useState([
        {
            book_id: null,
            title: "",
            author: "",
            publisher: "",
            description: "",
            book_field_id: ""
        }
    ]);
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState("");
    useEffect(() => {
        if (submitted) {
            fetch("/api/books/update/", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    book_id: book.book_id,
                    title: book.title,
                    author: book.author,
                    publisher: book.publisher,
                    description: book.description,
                    book_field_id: book.book_field_id
                })
            }).then(response => response.json())
            .then(data => setMessage(data.message)).catch(err => console.log(err));
        }
        
    }, [submitted]);
    
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
            <h2>The Book was updated succefly</h2>
            <h3>Server response: {message}</h3>
            <button className="back" id="back" onClick={() => setSubmitted(false)}>Back</button>
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
            <h2>Update the book you want</h2>
            <h3>The id of the book</h3>
            <input
                type="integer"
                name="book_id"
                value={book.book_id}
                onChange={e => setBooks({...book, book_id: e.target.value})}
            />
            <h3>The title of the book</h3>
            <input
                type="text"
                name="title"
                value={book.title}
                onChange={e =>
                    setBooks({
                        ...book,
                        title: e.target.value
                    })
                }
            />
            <h3>The author of the book</h3>
            <input
                type="text"
                name="author"
                value={book.author}
                onChange={e =>
                    setBooks({
                        ...book,
                        author: e.target.value
                    })
                }
            />
            <h3>The publisher of the book</h3>
            <input
                type="text"
                name="publisher"
                value={book.publisher}
                onChange={e =>
                    setBooks({
                        ...book,
                        publisher: e.target.value
                    })
                }
            />
            <h3>The description of the book</h3>
            <input
                type="text"
                name="description"
                value={book.description}
                onChange={e =>
                    setBooks({
                        ...book,
                        description: e.target.value
                    })
                }
            />
            <h3>The field of the book</h3>
            <select
                name="book_field_id"
                value={book.book_field_id}
                onChange={e =>
                    setBooks({
                        ...book,
                        book_field_id: e.target.value
                    })
                }
            >
                {fields.map(field => (
                    <option key={field.value} value={field.value}>
                        {field.label}
                    </option>
                ))}
            </select>
            <button className="update" onClick={() => setSubmitted(true)}>Update</button>
        </div>
  )
}