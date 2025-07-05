import { useState, useEffect } from "react"
import meme from "../assets/meme.png"

function Main() {

    const [text, setText] = useState({topText: "hello", bottomText: "world", img: meme})
    const [allMeme,setAllMeme] = useState(text.meme)

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    }, [])

    const handleChange = (event) => {
        const {value, name} = event.currentTarget
        setText(prevText => ({...prevText, [name]: value}))
    }

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * allMeme.length)
        const randomMeme = allMeme[randomIndex]
        setText(prev => ({
            ...prev,
            img: randomMeme.url
        }))
    }

    function downloadMeme() {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    const image = new Image()
    image.crossOrigin = "anonymous"

    image.onload = () => {
        canvas.width = image.width
        canvas.height = image.height
        ctx.drawImage(image, 0, 0)

        ctx.font = "30px Impact"
        ctx.fillStyle = "white"
        ctx.strokeStyle = "black"
        ctx.lineWidth = 2
        ctx.textAlign = "center"
        ctx.fillText(text.topText, canvas.width / 2, 40)
        ctx.strokeText(text.topText, canvas.width / 2, 40)

        ctx.fillText(text.bottomText, canvas.width / 2, canvas.height - 20)
        ctx.strokeText(text.bottomText, canvas.width / 2, canvas.height - 20)

        const link = document.createElement("a")
        link.download = "meme.png"
        link.href = canvas.toDataURL("image/png")
        link.click()
    }

    image.src = text.img
}


    return (
        <>
        <main>
            <div className="form">
                <label htmlFor="topText">Top text
                    <input type="text" placeholder="Shut up" name="topText" id="topText" onChange={handleChange} value={text.topText}/>
                </label>

                <label htmlFor="bottomText">Bottom Text
                    <input type="text" placeholder="And take my money" name="bottomText" id="bottomText" onChange={handleChange} value={text.bottomText}/>
                </label>

                <button onClick={handleClick}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={text.img} alt="meme-img" className="meme-img"/>
                <span className="memeTopText">{text.topText}</span>
                <span className="memeBottomText">{text.bottomText}</span>
            </div>
            <button onClick={downloadMeme}>Download Meme</button>
        </main>
        </>
    )
}

export default Main