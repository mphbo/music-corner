import { Avatar, Button } from "grommet";
import Image from "next/image";
import { useState } from "react";
import keys from "../../../utils/keys";
import CldPhoto from "../../CloudinaryUploadWidget/components/CldPhoto";
import { generateSignature } from "../utils/generateSignature";

export function ImageUpload({ id }) {
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
    <div>
      {/* {isImageUploaded ? (
        <>
        <div>Successfully uploaded</div>
        </>
      ) : null} */}
      {/* {isImageUploaded && ( */}
      <Avatar size="6xl" onTouchMoveCapture={() => console.log("hello")}>
        <Image
          width="400"
          height="400"
          src={`
            https://res.cloudinary.com/${keys.cloudName}/image/upload/d_shwackcloud:horse/shwackcloud/${id}
            `}
        />
      </Avatar>
      {/* // <CldPhoto publicId={email} cloudName={keys.cloudName} /> */}
      {/* )} */}
      <Button primary onClick={uploadToCloudinary} label="Upload Image" />
    </div>
  );
}
