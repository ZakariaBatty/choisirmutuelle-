// import axios
import axios from "axios";
axios.defaults.withCredentials = true;
export const sendMail = (data) => async () => {
  try {
    const res = await axios.post("/send-mail", data, {
      withCredentials: true,
    });
    if (res) {
      console.log(res.response.message);
    }
  } catch (err) {
    console.log(err.response.data.error);
  }
};
