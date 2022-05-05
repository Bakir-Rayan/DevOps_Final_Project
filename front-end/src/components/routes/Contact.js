import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import moon from "../../assets/moon.png";
import land from "../../assets/land.png";

const Contact = () => {
    return (
        <div >
            <Parallax pages={2}>
                <ParallaxLayer offset={0} speed={0.5} factor={2}
                style={
                    {
                        backgroundImage: `url(${moon})`,
                        backgroundSize: "cover",
                    }
                }>
                    <div class="rowA"
                        style={{width: "100%",
                            height: "100%",
                            display: "flex",
                            color: "black",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <h1>I'm here</h1>
                        <h2>If you need my help, just scroll down</h2>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1.5} factor={1}
                style={
                    {
                        backgroundImage: `url(${land})`,
                        backgroundSize: "cover",
                    }
                }>
                    <div className="rowB"
                        style={{alignSelf: "left",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            padding: "10px",
                            borderRadius: "10px",
                        }
                    }>
                        <h1>Let's Talk</h1>
                        <h2>I'm always happy to talk to you just send me an e-mail</h2>
                        <h3>rayanbak257@gmail.com</h3>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};

export default Contact;
