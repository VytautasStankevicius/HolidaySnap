import { useNavigate } from 'react-router-dom'

const GalleryAdd = () => {
    const navigate = useNavigate();

    const addUserImage = () => {
        navigate('/addImage')
    }

    return(
        <div className="galleryAdd" onClick={addUserImage}>
            <button>+</button>
        </div>
    )
}
export default GalleryAdd