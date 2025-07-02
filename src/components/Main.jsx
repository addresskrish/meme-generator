import meme from "../assets/meme.png"

function Main() {
    return (
        <>
        <main>
            <form action="">
                <label htmlFor="topText">Top text
                    <input type="text" placeholder="Shut up" name="topText" id="topText"/>
                </label>

                <label htmlFor="bottomText">Bottom Text
                    <input type="text" placeholder="And take my money" name="bottomText" id="bottomText"/>
                </label>

                <button>Get a new meme image</button>
            </form>
            <div className="meme">
                <img src={meme} alt="meme-img" className="meme-img"/>
                <span className="memeTopText">hello</span>
                <span className="memeBottomText">world</span>
            </div>
        </main>
        </>
    )
}

export default Main