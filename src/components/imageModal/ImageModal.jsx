import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const ImageModal = ({ image, onDelete, onClose }) => {
    const deleteOption = async () => {
        try {
            await onDelete(image.id);
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    return (
            <Modal show={true} onHide={onClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{image.description}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={image.url} alt={image.description} style={{ width: '100%' }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={deleteOption}>Delete photo</Button>
                </Modal.Footer>
            </Modal>
    );
};

export default ImageModal;
