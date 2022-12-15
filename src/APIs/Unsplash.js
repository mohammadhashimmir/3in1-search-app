import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
                   Authorization: "Client-ID HCvuaS968z54CD40-9-6wsISq0UqtWE0imJ5m_Rk6MA"
            }
});