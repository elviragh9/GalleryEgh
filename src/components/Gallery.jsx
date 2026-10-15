import { useState, useRef } from 'react'

import foto1 from '../assets/1paisaje.jpg'
import foto2 from '../assets/2paisaje.jpg'
import foto3 from '../assets/3paisaje.jpg'
import foto4 from '../assets/4paisaje.jpg'
import foto5 from '../assets/5paisaje.jpg'
import foto6 from '../assets/paisaje6.jpg'

import { Rate } from './Rate'

function Gallery() {
    const [images, setImages] = useState([
        { src: foto1, rate: 0, id: 0, ref:useRef() },
        { src: foto2, rate: 0, id: 1, ref:useRef() },
        { src: foto3, rate: 0, id: 2, ref:useRef() },
        { src: foto4, rate: 0, id: 3, ref:useRef() },
        { src: foto5, rate: 0, id: 4, ref:useRef() },
        { src: foto6, rate: 0, id: 5, ref:useRef() }
    ])

    const clickSaludar = useRef();

    const editaRate = (id, newRate) => {
        const newImages = images.map((img) => {
            if (img.id === id) {
                return { ...img, rate: newRate }
            }

            return img
        })

        newImages.sort((a, b) => b.rate - a.rate)

        setImages(newImages)
    }

const saludarImagenes =()=>{
    images.forEach((img) => {
        img.ref.current.saludar();
    })

    clickSaludar.current=clickSaludar.current +1;
    console.log("he saludado " + clickSaludar.current + " veces")
}

    return (
        <main>
            <section>
                <h3>Galería de mis fotografías</h3>

                <div className="galeria">
                    {images.map((img) => (
                        <div className="scoreCard" key={img.id}>
                            <img src={img.src} alt="imagen" />

                            <Rate
                                editaRate={editaRate}
                                id={img.id}
                                rate={img.rate}
                                ref={img.ref}
                            />
                        </div>
                    ))}
                    
                </div>
                <div className="contenedorSaludar">
                    <button className="boton" onClick={()=>saludarImagenes()}>saludar</button>
                </div>
            </section>
        </main>
    )
}

export default Gallery