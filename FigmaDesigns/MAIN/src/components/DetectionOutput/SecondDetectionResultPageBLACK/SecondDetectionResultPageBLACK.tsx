import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './SecondDetectionResultPageBLACK.module.css';

interface Props {
  className?: string;
  imageData: string | null;
}

/* @figmaId 7:207 */
export const SecondDetectionResultPageBLACK: FC<Props> = memo(function SecondDetectionResultPageBLACK({ imageData }) {
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
      <div className={classes.frame13}>
        <div className={classes.right}>
          <div className={classes.previewRightImageBg}></div>
          <div className={classes.previewRightImageGLASS}></div>
          <div className={`${classes.mAINRightIMAGEPLACEHOLDER} ${classes.imageContainer}`}>
            {imageData && <img className={classes.imageFullSize} src={imageData} alt="Right Image Placeholder" />}
          </div>
        </div>
        <div className={classes.left}>
          <div className={classes.previewLeftImageBg}></div>
          <div className={classes.previewLeftImageGLASS}></div>
          <div className={`${classes.mAINLEFTIMAGEPLACEHOLDER} ${classes.imageContainer}`}>
            {imageData && <img className={classes.imageFullSize} src={imageData} alt="Left Image Placeholder" />}
          </div>
        </div>
      </div>
    </div>
  );
});