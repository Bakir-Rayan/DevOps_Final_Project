import React from "react";
import bookImg from "../../assets/books.png";


export default function Home() {
    return (
        <div
            style={{
                height: "90vh",
                backgroundColor: "#e6f7ff",
                display: "flex", 

                alignItems: "center",
                flexDirection: "column"
            }}
        >
            <h1>Bookshelf </h1>
            <img src={bookImg} alt="books" style={{ width: "25%", height: "45%" }} />
            <h1>What is it ?</h1>
        </div>
    );
}
