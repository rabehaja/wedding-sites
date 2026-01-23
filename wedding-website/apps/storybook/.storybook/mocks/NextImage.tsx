import * as React from "react";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Image = ({
  src,
  alt,
  width,
  height,
  fill,
  className,
  style,
  ...props
}: ImageProps): React.ReactElement => {
  const imgStyle: React.CSSProperties = fill
    ? { position: "absolute", width: "100%", height: "100%", objectFit: "cover", ...style }
    : { width, height, ...style };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={imgStyle}
      {...props}
    />
  );
};

export default Image;
