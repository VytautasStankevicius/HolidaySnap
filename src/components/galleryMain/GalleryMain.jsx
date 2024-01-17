import GalleryAdd from "../galleryAdd/GalleryAdd";
import GalleryModal from "../galleryModal/GalleryModal";
import GalleryPhoto from "../galleryPhoto/GalleryPhoto"
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../services/AuthServices";
import * as service from "../../services/TimesCrudServices";
import './galleryMain.scss'

const GalleryMain = () => {
    const [images, setImages] = useState([]);
    const [user, loading] = useAuthState(auth);
    const [selectedStyle, setSelectedStyle] = useState("");

    useEffect(() => {
        const fetchImg = async () => {
            try {
                if (user) {
                    const fetchAwait = await service.getAllImages(user);
                    setImages(fetchAwait);
                }
            } catch (error) {
                console.error(error);
            }
        };
        if (!loading) {
            fetchImg();
        }
    }, [user, loading]);

    const changeStyle = (style) => {
        setSelectedStyle(style);
    };

    const handleDelete = async (imageId) => {
        try {
            await service.deleteImage(imageId);
            setImages(prevImages => prevImages.filter(image => image.id !== imageId));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
        <GalleryModal selectedStyle={selectedStyle} onStyleClick={changeStyle} />
            <Container className={"gallery __content" + selectedStyle}>
                <Row>
                    <Col sm={12} className="gallery__title">
                        <h2>Your snaps</h2>
                    </Col>
                    <div className="gallery__holder">
                    <GalleryAdd/>
                        <Col className={`gallery__content${selectedStyle}`}>
                            {images.map(image => (
                                <GalleryPhoto key={image.id} image={image} onDelete={handleDelete} />
                                ))}
                        </Col>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default GalleryMain;
