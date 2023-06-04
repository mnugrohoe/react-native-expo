import { Image } from "react-native";

const ImageViewer = ({
  PlaceHolderImage,
  SelectedImage,
  alt,
  style,
  ...restProps
}) => {
  const ImageSource = SelectedImage ? { uri: SelectedImage } : PlaceHolderImage;
  return (
    <Image
      source={ImageSource}
      alt={alt}
      style={{
        width: 320,
        height: 440,
        borderRadius: 18,
        ...style,
      }}
      {...restProps}
    />
  );
};

export default ImageViewer;
