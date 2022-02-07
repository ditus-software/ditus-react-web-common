//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import ReactImageMagnify from 'react-image-magnify';
import Skeleton from '@mui/material/Skeleton';
import './image-magnify.css';

/**
 * Represents a component that displays an image that can be magnified.
 *
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function ImageMagnify(props) {
  const {
    altText,
    hintTextMouse,
    hintTextTouch,
    magnify,
    name,
    url,
  } = props;

  const image = () => {
    if (magnify) {
      return (
        <ReactImageMagnify {...{
          enlargedImagePosition: 'over',
          smallImage: {
            alt: altText,
            isFluidWidth: true,
            src: url,
          },
          largeImage: {
            src: url,
            width: 1200,
            height: 1800,
          },
          isHintEnabled: true,
          hintTextMouse,
          hintTextTouch,
        }}
        />
      );
    }

    return (<img src={url} alt={name} />);
  };

  return (
    <div className="image-magnify">
      { url ? image()
        : <Skeleton variant="rect" animation={false} />}
    </div>
  );
}

export default ImageMagnify;

ImageMagnify.propTypes = {
  /**
   * Specifies the alternate text to display for the image.
   */
  altText: PropTypes.string,

  /**
   * Specifies the hint text for non-touch/mouse-driven devices.
   */
  hintTextMouse: PropTypes.string,

  /**
   * Specifies the hint text for touch devices.
   */
  hintTextTouch: PropTypes.string,

  /**
   * Specifies whether the user can use their mouse or finger to magnify the
   * image (true) or not (false).
   */
  magnify: PropTypes.bool,

  /**
   * Specifies the name of the product.
   */
  name: PropTypes.string,

  /**
   * Specifies the image to display.
   */
  url: PropTypes.string,
};

ImageMagnify.defaultProps = {
  altText: null,
  hintTextMouse: null,
  hintTextTouch: null,
  magnify: false,
  name: null,
  url: null,
};
