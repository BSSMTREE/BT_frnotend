import axios from "axios";

export const letter = async (
  writer: string,
  recipient: string,
  detail: string,
) => {
  await axios.post(process.env.REACT_APP_BASE_URL + "/letter", {
    writer,
    recipient,
    detail,
  });
};
