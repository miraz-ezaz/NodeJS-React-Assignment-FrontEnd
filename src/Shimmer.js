import React from 'react';
import { ShimmerTitle, ShimmerFeaturedGallery, ShimmerContentBlock, ShimmerCategoryItem } from 'react-shimmer-effects';
import "./shimmer.css";

const ShimmerComponent = () => {
    return (
        <div>
            <main><ShimmerTitle line={3} gap={10} className="dark" />
                <ShimmerFeaturedGallery card imageHeight={300} row={2} col={2} className="dark" />
                <ShimmerTitle line={2} gap={10} variant="primary" />;
                <ShimmerContentBlock
                    title
                    text
                    cta
                    thumbnailWidth={370}
                    thumbnailHeight={370}
                />
                <ShimmerCategoryItem
                    hasImage
                    imageType="circular"
                    imageWidth={100}
                    imageHeight={100}
                    title
                />
            </main>


        </div>
    );
};

export default ShimmerComponent;
