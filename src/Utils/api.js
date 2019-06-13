import axios from 'axios';
export const clientId = 'dcb546e278b86203e19e';
export const clientSecret = '1e36045d19a5234556ada76e46a28abf92111e8b';
const baseUrl = 'https://api.github.com/users/';
  
const _get = async (username, path, params) => {
  try {
    const response = await axios.get(`${baseUrl}${username}${path}`, {params: params});
    return response;
  } catch (error) {
    return error;
  }
};

const api = async(method, username, path, params) => {
  let defaultParams = {
    client_id: clientId,
    client_secret: clientSecret
  }
  if(method.toLowerCase() === 'get') {
    return _get(username, path, defaultParams);
  }
};

export default api;