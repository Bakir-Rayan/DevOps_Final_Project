import "../styles/Banner.css";

function Banner() {
    return (
        <div className="banner">
            <div className="banner-title">Check It!</div>
            <div className="banner-nav-bar">
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#news">News</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Banner;
