import axios from "axios";

const BaseURL = 'https://movienew.cybersoft.edu.vn'
const TokenCybersoft = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NCIsIkhldEhhblN0cmluZyI6IjIyLzEyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTcxNjMzNjAwMDAwMCIsIm5iZiI6MTY4NzcxMjQwMCwiZXhwIjoxNzE2NDgzNjAwfQ.oCYDJPCgaszOrpICxNYV4wGWPtDfBo_H02yFtMGeJj4'
export const MaNhom = 'GP01'
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