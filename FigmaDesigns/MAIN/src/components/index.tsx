import React, { useState } from 'react';
import { FirstPage } from './FirstPage/FirstPage/FirstPage';
import { ImagePreviewPageBLACK } from './ImagePreview/ImagePreviewPageBLACK/ImagePreviewPageBLACK';
import { SecondDetectionResultPageBLACK } from './DetectionOutput/SecondDetectionResultPageBLACK/SecondDetectionResultPageBLACK';


export function ParentComponent() {
    const [imageData, setImageData] = useState<string | null>(null);

    return (
        <>
            <FirstPage setImageData={setImageData} />
            <ImagePreviewPageBLACK imageData={imageData} />
            <SecondDetectionResultPageBLACK imageData={imageData} />
        </>
    );
}