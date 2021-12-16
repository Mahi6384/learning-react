import axios from "axios";
export default axios.create({
    baseURL : 'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID NRS_NkDXTr4GIainGzxYzxFos10rMTn4Ny1tbmflPfU",
  },
});
