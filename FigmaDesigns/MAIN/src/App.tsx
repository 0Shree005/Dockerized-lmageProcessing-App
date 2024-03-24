import { memo, useState } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { FirstPage } from './components/FirstPage/FirstPage/FirstPage';
import { ImagePreviewPageBLACK } from './components/ImagePreview/ImagePreviewPageBLACK/ImagePreviewPageBLACK';
import { SecondDetectionResultPageBLACK } from './components/DetectionOutput/SecondDetectionResultPageBLACK/SecondDetectionResultPageBLACK';

export const App: FC = memo(function App() {
  const [imageData, setImageData] = useState<string | null>(null);

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <FirstPage setImageData={setImageData} />
      <ImagePreviewPageBLACK imageData={imageData} />
      <SecondDetectionResultPageBLACK imageData={imageData} />
    </div>
  );
});