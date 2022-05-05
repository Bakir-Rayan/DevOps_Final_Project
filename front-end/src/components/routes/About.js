import React from "react";

function About() {
    return (
        <div
            style={{
                height: "90vh",
                backgroundColor: "#e6f7ff",
                display: "flex", 
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column"
            }}
        >
            <h1 align="center"> Hi there 👋 I'm Rayan </h1>
            <h2>-----------------------------------------------------------------------</h2>
            <h2>
            - 🔭 ** This is the work I have done to show up the process of DevOps ** <br />
            - ⚡ ** I learned to use a lot of stuff like Docker, Jenkins and kubernetes ** <br />
            - 💻 ** Also I learned to use React, Flask and Sqlite ** <br />
            </h2>
            <h2>-----------------------------------------------------------------------</h2>
            <h1 align="center">Connect with me:
                <p align="center">
                    <a href="https://linkedin.com/in/rayan-bakir/" target="blank">
                        <img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="https://www.linkedin.com/in/rayan-bakir/"/>
                    </a>
                    <a href="https://kaggle.com/rayanbak25" target="blank">
                        <img align="center" src="https://img.shields.io/badge/Kaggle-20BEFF?style=for-the-badge&logo=Kaggle&logoColor=white" alt="https://www.kaggle.com/rayanbak25"/>
                    </a>  
                </p>
            </h1>
            <h2>-----------------------------------------------------------------------</h2>
        </div>
    );
}

export default About;
