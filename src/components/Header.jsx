import trollFace from "../assets/troll-face.png"

function Header() {
    return (
        <>
            <header>
                <img src={trollFace} alt="main-logo" height="40px"/>
                <h1>Meme Generator</h1>
            </header>
        </>
    )
}

export default Header