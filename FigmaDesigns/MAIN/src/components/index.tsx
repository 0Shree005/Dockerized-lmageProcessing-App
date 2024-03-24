import React, { useState } from 'react';
import { FirstPage } from './FirstPage/FirstPage/FirstPage';
import { ImagePreviewPageBLACK } from './ImagePreview/ImagePreviewPageBLACK/ImagePreviewPageBLACK';
import { SecondDetectionResultPageBLACK } from './DetectionOutput/SecondDetectionResultPageBLACK/SecondDetectionResultPageBLACK';

export function ParentComponent() {
    const [imageData, setImageData] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [resultImageData, setResultImageData] = useState<string | null>(null); 

    return (
        <>
            <FirstPage imageData={imageData} setImageData={setImageData} setImageFile={setImageFile} />
            <ImagePreviewPageBLACK imageData={imageData} setImageData={setImageData} setImageFile={setImageFile} imageFile={imageFile} />
            <SecondDetectionResultPageBLACK imageData={imageData} resultImageData={resultImageData} setResultImageData={setResultImageData} />
        </>
    );
}