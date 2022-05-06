import { useState, useEffect } from "react";

export default function Field() {
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
    
    const [field_id , setFieldId] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [books, setBooks] = useState([]);
    const params = { field_id: field_id };
    const url = "/api/books/field/?book_field_id=" + params.field_id;

    useEffect(() => {
        if (submitted === true) {
            fetch(url, {method: 'GET'})
            .then(response => 
            response.json().then(data => {
                setBooks(data.Book);
            }));
        }
        console.log(field_id);
        
    }, [submitted]);
    return submitted ? (
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
                {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
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
            <h2>Which field of books do you want ??</h2>
            <select onChange={(e) => setFieldId(e.target.value)}>
                <option value=""></option>
                {fields.map(field => (
                    <option key={field.value} value={field.value}>{field.label}</option>
                ))}
            </select>
            <button className="submit" onClick={() => setSubmitted(true)}> submit </button>
        </div>
  )
}