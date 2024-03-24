import { memo, useRef } from 'react';
import React, { useState } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './FirstPage.module.css';
import { Frame6Icon } from './Frame6Icon';
import { ImagePreviewPageBLACK } from '../../ImagePreview/ImagePreviewPageBLACK/ImagePreviewPageBLACK'; // Updated import

interface Props {
  className?: string;
  setImageData: (imageData: string | null) => void; // Add this line
}

export const FirstPage: FC<Props> = memo(function FirstPage({ setImageData }) {
  const inputElement = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame9}></div>
      <div className={classes.frame2}>
        <div className={classes.frame3}>
          <div className={classes.dockerisedImageProcessing}>
            <div className={classes.textBlock}>Dockerised </div>
            <div className={classes.textBlock2}>Image Processing </div>
          </div>
          <div className={classes.dockerOPBlob}></div>
        </div>
        <div className={classes.frame1}>
          <div className={classes.imageInput}>Image Input</div>
          <div className={classes.imageInputBlob}></div>
        </div>
        <div className={classes.frame4}>
          <div className={classes.detectionOutput}>Detection Output</div>
          <div className={classes.detectionOPBlob}></div>
        </div>
      </div>
      <div className={classes.frame8}>
        <div className={classes.frame6}>
          <Frame6Icon className={classes.icon} />
        </div>
        <input type="file" accept="image/*" style={{display: 'none'}} onChange={handleImageUpload} ref={inputElement} />
            <button className={classes.inputBox} onClick={() => inputElement.current?.click()}></button>
            <div className={classes.frame7}>
        <button className={classes.uploadImage} onClick={() => inputElement.current?.click()}>Upload Image</button>
      </div>
      </div>
    </div>
  );
});
