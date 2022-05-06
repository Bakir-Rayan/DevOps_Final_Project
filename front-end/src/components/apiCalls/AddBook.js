import { useState, useEffect } from "react";

export default function AddBook() {
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
            fetch("/api/books/add/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
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
            <h2>The Book was added succefly</h2>
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
            <h2>Add the book you want</h2>
            <h4>The title of the book</h4>
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
            <h4>The author of the book</h4>
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
            <h4>The publisher of the book</h4>
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
            <h4>The description of the book</h4>
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
            <h4>The field of the book</h4>
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
                <option value="">Select a field</option>
                {fields.map(field => (
                    <option key={field.value} value={field.value}>
                        {field.label}
                    </option>
                ))}
            </select>
            <button className="add" onClick={() => setSubmitted(true)}>Add</button>
        </div>
  )
}