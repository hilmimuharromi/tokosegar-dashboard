import {SERVER_BASE_URL} from '../utils/constant'
import axios from 'axios'

const userApi = {
    login : async (email: string, password: string) => {
        try {
            const response = await axios.post(
              `${SERVER_BASE_URL}/login`,
              JSON.stringify({ email, password } ),
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            return response;
          } catch (error) {
            return error.response;
          }
    }
}

export default userApi