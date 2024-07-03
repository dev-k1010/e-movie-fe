import axios from "axios";

const BaseURL = 'https://movienew.cybersoft.edu.vn'
const TokenCybersoft = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NCIsIkhldEhhblN0cmluZyI6IjMwLzA4LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTcxOTcwNTYwMDAwMCIsIm5iZiI6MTY4NzcxMjQwMCwiZXhwIjoxNzE2NDgzNjAwfQ.GfPV8bgwRM5IoOt4pVq4dOPpHCjF-fyoXWuhas4XTGE'
export const MaNhom = 'GP03'
export const UserLogin = 'UserLogin'
export const AccessToken = 'AccessToken'


export const api = axios.create()
api.interceptors.request.use(config => {
   return {
      ...config,
      baseURL: BaseURL,
      headers: {
         TokenCybersoft: TokenCybersoft,
         Authorization: 'Bearer ' + JSON.parse(localStorage.getItem(AccessToken))
      },
   }
})