import { Avatar, Button, Stack, Text } from "grommet";
import {
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
} from "@cloudinary/react";
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";
import keys from "../../utils/keys";
import { fill } from "@cloudinary/url-gen/actions/resize";

export const User = ({ email, username }) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: keys.cloudName,
    },
  });

  const img = cld.image(`shwackcloud/${email}`);
  img.resize(fill(60, 60));

  return (
    <Stack anchor="bottom" style={{ height: 100 }}>
      <Button
        icon={
          <Avatar size="large">
            <AdvancedImage
              cldImg={img}
              plugins={[lazyload(), responsive(300)]}
            />
          </Avatar>
        }
      />
      <Text>{username}</Text>
    </Stack>
  );
};
