import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ImagePreviewPageBLACK.module.css';

interface Props {
  className?: string;
  imageData?: string | null;
}

/* @figmaId 7:177 */
/* @figmaId 7:177 */
export const ImagePreviewPageBLACK: FC<Props> = memo(function ImagePreviewPageBLACK({ imageData }) {
  return (
    <>

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