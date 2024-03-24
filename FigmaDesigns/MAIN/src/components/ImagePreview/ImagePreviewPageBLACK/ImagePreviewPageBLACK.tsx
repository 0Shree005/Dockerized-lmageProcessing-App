import { memo } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

import resets from '../../_resets.module.css';
import classes from './ImagePreviewPageBLACK.module.css';

interface Props {
  className?: string;
  imageData?: string | null;
  setImageData: React.Dispatch<React.SetStateAction<string | null>>;
  setImageFile: React.Dispatch<React.SetStateAction<File | null>>;
  imageFile: File | null; // Add this line
}

/* @figmaId 7:177 */
/* @figmaId 7:177 */

export const ImagePreviewPageBLACK: FC<Props> = memo(function ImagePreviewPageBLACK({ imageData, setImageData, setImageFile, imageFile }) {
  if (!imageFile) {
    return <div>No image uploaded yet.</div>;
  } 
  return (
    <>

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
        <div className={classes.frame12}>
          <div className={classes.previewImageBg}></div>
        </div>
        <div className={classes.frame11}>
          <div className={classes.previewImageGLASS}></div>
        </div>
        <div className={classes.frame10}>
          <div className={classes.mAINIMAGEPLACEHOLDER} style={{ backgroundImage: `url(${imageData})`, backgroundSize: 'cover' }}></div>
        </div>
      </div>
    </>
  );
});