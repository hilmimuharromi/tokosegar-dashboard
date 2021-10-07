import {SERVER_BASE_URL} from '../utils/constant'
import axios from 'axios'

const productApi = {
    create: async (product, token) => {
        const { data, status } = await axios.post(
          `${SERVER_BASE_URL}/product`,
          JSON.stringify({ product }),
          {
            headers: {
              "Content-Type": "application/json",
            //   Authorization: `Token ${encodeURIComponent(token)}`,
            },
          }
        );
        return {
          data,
          status,
        };
      },
}

export default productApi