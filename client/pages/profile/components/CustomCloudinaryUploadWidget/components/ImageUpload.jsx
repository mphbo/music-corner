import { Avatar, Box, Button } from "grommet";
import Image from "next/image";
import { useState } from "react";
import keys from "../../../../../utils/keys";
import CldPhoto from "../../../../../components/CloudinaryUploadWidget/components/CldPhoto";
import styles from "../styles/ImageUpload.module.scss";
import generateSignature from "../utils/generateSignature";

function ImageUpload({ id }) {
  const [isImageUploaded, setIsImageUploaded] = useState(true);

  const uploadToCloudinary = async () => {
    setIsImageUploaded(false);
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: keys.cloudName,
        uploadPreset: "shwackcloud",
        public_id: `${id}`,
        resourceType: "image",
        multiple: false,
        apiKey: keys.cloudApiKey,
        uploadSignature: generateSignature,
        invalidate: true,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Uploaded", result.info);
          setIsImageUploaded(true);
        } else if (error) {
          console.log("isError:", error);
        }
      }
    );

    widget.open();
  };

  return (
    <Box className={styles.avatarBox}>
      {/* {isImageUploaded ? (
        <>
        <div>Successfully uploaded</div>
        </>
      ) : null} */}
      {/* {isImageUploaded && ( */}
      {/* <Image
          width="400"
          height="400"
          objectFit="cover"
          src={`
            https://res.cloudinary.com/${keys.cloudName}/image/upload/d_shwackcloud:horse/shwackcloud/${id}
            `}
        /> */}
      <Avatar
        size="xlarge"
        className={styles.avatar}
        src={`https://res.cloudinary.com/${keys.cloudName}/image/upload/c_fill,h_400,w_400/d_shwackcloud:horse.jpg/shwackcloud/${id}.jpg`}
        // onTouchMoveCapture={() => console.log("hello")}
      />
      {/* // <CldPhoto publicId={email} cloudName={keys.cloudName} /> */}
      {/* )} */}
      <Button
        className={styles.button}
        size="small"
        onClick={uploadToCloudinary}
        label="Upload Image"
      />
    </Box>
  );
}

export default ImageUpload;
