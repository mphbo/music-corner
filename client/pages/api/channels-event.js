import * as Pusher from "pusher";
import keys from "../../utils/keys";

const { appId, key, secret, cluster } = keys;

Pusher.logToConsole = true;

const pusher = new Pusher({
  appId,
  key,
  secret,
  cluster,
});

export default async function handler(req, res) {
  const data = req.body;
  console.log("HITTTTTT =======>", appId, key, secret, cluster);
  pusher.trigger("chat", "message", data);
  res.send(data);
}
