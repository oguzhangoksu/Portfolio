
import{useState} from 'react';
import "./Slide.css";

const ImageSlider = ({images}) => {
    const [index, setIndex] = useState(0);
    const handleNext = () => {
        setIndex((index + 1) % images.length);
        console.log(index);
    };
    const handlePrev = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(nextIndex);
        }
        console.log(index);
    };

    const slideStyle = {
        display:'inlineblock',
        width:"100%",
        height:"300px",
        borderRadius:'10px',
        backgroundPosition: "center",
        backgroundSize:'cover',
        backgroundImage:`url(${images[index]})`,
        zIndex:'-1',
    }


    return (
        <div className='box'>
            <div className='leftArrow' onClick={handlePrev}></div>
            <div style={slideStyle}></div>
            <div className='rightArrow' onClick={handleNext}></div>
        </div>
    );


}
export default ImageSlider;