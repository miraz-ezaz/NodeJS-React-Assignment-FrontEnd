import React, { useState } from 'react';

const ListingSection = ({hotel}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const photos = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"];

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const saveItem = () => {
        setIsSaved(!isSaved);
    };

    const prevPhoto = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : photos.length - 1));
    };

    const nextPhoto = () => {
        setCurrentIndex((prevIndex) => (prevIndex < photos.length - 1 ? prevIndex + 1 : 0));
    };

    const openGallery = () => {
        setIsModalOpen(true); // Assuming opening gallery opens the modal
    };

    return (
        <section className="listing-section">
            <div className="heading-container">
                <h1>{hotel.title}</h1>

                <div className="actions">
                    <div className="action-btn" onClick={openModal}>
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '2', overflow: 'visible' }}
                        >
                            <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" fill="none"></path>
                        </svg>
                        Share
                    </div>
                    <div className="action-btn" onClick={saveItem}>
                        <svg
                            id="saveIcon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '2', overflow: 'visible' }}
                        >
                            <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
                        </svg>
                        {isSaved ? 'Saved' : 'Save'}
                    </div>
                </div>
            </div>
            <div className="gallery">
                <div className="main-image">
                    <img src={photos[currentIndex]} alt="Main Image" />
                </div>
                <div className="thumbnail-images">
                    {photos.map((photo, index) => (
                        <img
                            key={index}
                            src={photo}
                            alt={`Image ${index + 2}`}
                            onClick={() => setCurrentIndex(index)}
                            className={index === currentIndex ? 'active' : ''}
                        />
                    ))}
                </div>
                <button className="show-all-photos" onClick={openGallery}>
                    Show all photos
                </button>
            </div>

            {/* Modal for displaying additional content */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        {/* Add modal content here */}
                        <h2>Modal Content</h2>
                        <p>This is where additional content can be displayed.</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ListingSection;
