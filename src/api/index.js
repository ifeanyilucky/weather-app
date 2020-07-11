import axios from "axios";

const url =
  "https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=3bbad435-77ad-481b-8079-92c0dd4d11f1";

export const fetchData = async () => {
  try {
    const {
      data: { date, def, fl },
    } = await axios.get(url);
    const modifiedData = {
      date,
      def,
      fl,
    };
    return modifiedData;
  } catch (error) {}
};
