import axios from "../axios";


const hangdleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}

export { hangdleLoginApi }