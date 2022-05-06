import { useState, useEffect } from "react";

export default function RemoveBook() {
    const [book_id, setBookID] = useState();
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState("");
    useEffect(() => {
        if (submitted) {
            fetch("/api/books/delete/?book_id=" + book_id, {
                method: "DELETE"
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
            <h2>The Book was deleted succefly</h2>
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
            <h2>Delete the book you want</h2>
            <h3>The id of the book</h3>
            <input name="book_id" type="text" onChange={(e) => setBookID(e.target.value)}/>
            
            <button className="remove" onClick={() => setSubmitted(true)}>Remove</button>
        </div>
  )
}