import React, { useState } from 'react';
import GalleryModal from '../galleryModal/GalleryModal';

const GalleryPhoto = ({ image, onDelete }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openImageModal = () => {
        setModalOpen(true);
    };

    return (
        <>
            <img onClick={openImageModal} src={image.url} alt={image.description} />
            {modalOpen && <GalleryModal image={image} onDelete={onDelete} onClose={() => setModalOpen(false)} />}
        </>
    );
};

export default GalleryPhoto;
