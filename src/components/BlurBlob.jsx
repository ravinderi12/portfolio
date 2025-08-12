// components/BlurBlob.jsx
import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_POSITION = { top: '50%', left: '50%' };
const DEFAULT_SIZE = { width: '200px', height: '200px' };

const BlurBlob = ({ position = DEFAULT_POSITION, size = DEFAULT_SIZE }) => {
  const { top, left } = position;
  const { width, height } = size;

  const blobStyle = {
    position: 'absolute',
    top,
    left,
    width,
    height,
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div style={blobStyle}>
      <div className="w-full h-full bg-purple-800 rounded-full opacity-20 blur-3xl animate-blob" />
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;
