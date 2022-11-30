import { v2 as cloudinary } from "cloudinary";
import { NextApiRequest, NextApiResponse } from "next";
import keys from "../../utils/keys";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body) || {};
  const { paramsToSign } = body;

  const apiSecret = keys.cloudApiSecret;

  try {
    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      apiSecret
    );
    res.json({ signature });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}
