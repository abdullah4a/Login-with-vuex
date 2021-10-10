import axios from 'axios'
import { API } from './config'
const GetUsers = async function() {
    try {
        const responce = await axios.get(`${API}/User.json`);
        const data = parseErrors(responce, 200)
        return data
    } catch (err) {
        console.error("Data fetch Error" + err);
    }
}
const GetAdmins = async function() {
        try {
            const responce = await axios.get(`${API}/Admins.json`);
            const data = parseErrors(responce, 200)
            return data
        } catch (err) {
            console.error("Data fetch Error" + err);
        }
    }
    // const Addhero = async function(U) {
    //     try {
    //         const responce = await axios.post(`${API}/apidata.json`, U);
    //         const data = parseErrors(responce, 201)
    //         return data
    //     } catch (err) {
    //         console.error("Data fetch Error" + err);
    //     }
    // }
const parseErrors = function(responce, code) {
    if (responce.status != code) throw Error("status Failure");
    if (!responce.data) return ""
    const data = responce.data
    return data
}
export const Data = {
    GetAdmins,
    GetUsers
}