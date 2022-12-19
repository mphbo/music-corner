import { openUploadWidget } from "../utils/CloudinaryService";
import styles from "../Cloudinary.module.scss";

interface IImageUpload {
  cloud_name: string;
  upload_preset: string;
  onImageUpload: (id: string) => void;
}

const ImageUpload = (props: IImageUpload) => {
  const uploadImageWidget = () => {
    let myUploadWidget = openUploadWidget(
      {
        cloudName: props.cloud_name,
        uploadPreset: props.upload_preset,
        tags: ["myname"],
        maxImageWidth: 600,
        sources: ["local", "url", "camera"],
      },
      function (
        error: any,
        result: { info: { public_id: string }; event: string }
      ) {
        if (!error && result.event === "success") {
          props.onImageUpload(result.info.public_id);
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button className={styles.greenButton} onClick={uploadImageWidget}>
      Upload Image
    </button>
  );
};

export default ImageUpload;
