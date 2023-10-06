import React from 'react';

interface AvatarProps {
  src: string;
  alt?: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 100 }) => {
  const avatarStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: '50%',
    overflow: 'hidden',
  };

  return (
    <img
      src={src}
      alt={alt || 'Avatar'}
      style={avatarStyle}
    />
  );
};

export default Avatar;
