import axios from "axios";

interface data {
  name: string;
  email: string;
  password: string;
}

const BaseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://sapunga-back-end.vercel.app";

const api = {
  async GetUsers() {
    const response = await axios(`${BaseUrl}/selecionarUsuarios`);
    return response.data;
  },
};

export default api;
