import React, { ReactNode } from "react";
import "./Media.scss";
import PropTypes from "prop-types";

export type MediaProp = {
  image?: string;
  header?: string;
  body: ReactNode;
};

const Media: React.FC<MediaProp> = ({ image, header, body }) => {
  return (
    <div className="bl_media">
      {image ? (
        <img className="bl_media_image" src={image} alt="media image" />
      ) : (
        <div className="bl_media_image__noImage">
          <div className="bl_media_image__noImage_text">No Image</div>
        </div>
      )}
      <div className="bl_media_content">
        <div className="bl_media_content_header">{header}</div>
        <div className="bl_media_content_body">{body}</div>
      </div>
    </div>
  );
};

Media.defaultProps = {
  body: "",
};

Media.propTypes = {
  image: PropTypes.string,
  header: PropTypes.string,
  body: PropTypes.node,
};

export default Media;
