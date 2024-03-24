import { memo, useRef, useEffect } from 'react';
import React, { useState } from 'react';
import type { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import resets from '../../_resets.module.css';
import classes from './FirstPage.module.css';
import { Frame6Icon } from './Frame6Icon';
import { ImagePreviewPageBLACK } from '../../ImagePreview/ImagePreviewPageBLACK/ImagePreviewPageBLACK'; // Updated import

interface Props {
  className?: string;
  imageData: string | null;
  setImageData: React.Dispatch<React.SetStateAction<string | null>>;
  setImageFile: React.Dispatch<React.SetStateAction<File | null>>;
}
export const FirstPage: FC<Props> = memo(function FirstPage({ imageData, setImageData, setImageFile }) {
  const inputElement = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!imageData) {
      navigate('/dockerised-image-processing');
    }
  }, [imageData, navigate]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData(reader.result as string);
        setImageFile(file); // Set imageFile state here
        alert("Switch to Detection Output, your result is ready");
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
            <div className={classes.textBlock}>
              <Link to="/dockerised-image-processing">
                Dockerised
              </Link>
            </div>
            <div className={classes.textBlock2}>
              <Link to="/image-processing">
                Image Processing
              </Link>
            </div>
          </div>
          <div className={classes.dockerOPBlob}></div>
        </div>
        <div className={classes.frame1}>
        <div className={classes.imageInput}>
          <Link to="/image-input">
            Image Input
          </Link>
        </div>
          <div className={classes.imageInputBlob}></div>
        </div>
        <div className={classes.frame4}>
        <div className={classes.detectionOutput}>
          <Link to="/detection-output">
            Detection Output
          </Link>
        </div>
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