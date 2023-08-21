import axios from "axios";

export const listgrid = async() => {
    return await axios.get('http://localhost:3000/api/gridhistorical')
}