import axios from "axios";

export const list = async() => {
    return await axios.get('http://localhost:3000/api/sitehistorical')
}
