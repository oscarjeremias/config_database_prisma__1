import axios from "axios";

export const baseUrlAxios = axios.create({
	baseURL: "https://google-translate1.p.rapidapi.com/language/translate/v2/"
})
