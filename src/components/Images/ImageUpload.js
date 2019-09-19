import React from 'react'
import ImagePreview from './ImagePreview';


const ImageUpload = props => {
  let {imagePreviewUrl} = props;
  let $imagePreview = null;
  if (imagePreviewUrl) {
      $imagePreview = (<ImagePreview imageUrl={imagePreviewUrl} />);
  }
  return (
  <div>
    <form>
      <input type="file" onChange={props.handleImageChange} />
    </form>
    {$imagePreview}
  </div>
  )
}

export default ImageUpload
