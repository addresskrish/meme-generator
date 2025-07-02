import { useState } from "react"
import meme from "../assets/meme.png"

function Main() {

    const [text, setText] = useState({topText: "hello", bottomText: "world", img: meme})

    const handleChange = (event) => {
        const {value, name} = event.currentTarget
        setText(prevText => ({...prevText, [name]: value}))
    }

    return (
        <>
        <main>
            <div className="form">
                <label htmlFor="topText">Top text
                    <input type="text" placeholder="Shut up" name="topText" id="topText" onChange={handleChange}/>
                </label>

                <label htmlFor="bottomText">Bottom Text
                    <input type="text" placeholder="And take my money" name="bottomText" id="bottomText" onChange={handleChange}/>
                </label>

                <button>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={text.img} alt="meme-img" className="meme-img"/>
                <span className="memeTopText">{text.topText}</span>
                <span className="memeBottomText">{text.bottomText}</span>
            </div>
        </main>
        </>
    )
}

export default Main