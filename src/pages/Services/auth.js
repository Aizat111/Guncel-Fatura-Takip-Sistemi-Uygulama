import axios from "axios";
import { getUserToken } from "../../utils/AsyncStorage"
const BASE_URL = 'http://localhost:5001';


const  api = async () =>{
  const userToken = await getUserToken();

  

  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

  // Diğer işlemler
  return instance;
}

export default api;