import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const useApi = () => ({
  createChat: async (user1: string, user2: string) => {
    return await api.post("/chat/createchat", { user1, user2 });
  },
  getUserData: async () => {
    return await api.get("/users");
  },
  getChat: async () => {
    return await api.get("/chat");
  },
  getContacts:async()=>{
    return await api.get("/users/contacts")
  }
  /* 
  confirmCodeReset: async (email: string) => {
    return await api.post("/users/confirmCode/reset", { email });
  },

  reConfirmCode: async (email: string, confirmationCodeReset: string) => {
    return await api.post("/users/resetPassword/reset", {
      email,
      confirmationCodeReset,
    });
  },
  resetPassword: async (email: string, newPassword: string) => {
    return await api.post("/users/resetPassword", { email, newPassword });
  },

  verifyEmail: async (email: string) => {
    return await api.post("users/verifyEmail", { email });
  },

  login: async (email: string, password: string) => {
    return await api.post("/users/login", { email, password });
  },

  validateToken: async (token: string) => {
    return await api.post("/users/validateToken", { token });
  },

  getEstablishment: async (userId: string) => {
    return await api.get(`/est/estsuser/${userId}`);
  },

  getOneEstablishment: async (id: string) => {
    return await api.get(`/est/getEst/${id}`);
  },

  getCategory: async () => {
    return await api.get("/category");
  },

  setEstablishment: async (formData: FormData) => {
    return await api.post("/est/post", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  deleteEstablishment: async (id: string) => {
    return await api.get(`/est/delete/${id}`);
  },

  openOrCloseEstablishment: async (id: string, open: boolean) => {
    return await api.post("/est/openClose", { id, open });
  },

  getServices: async (id: string) => {
    return await api.get(`/services/services/${id}`);
  },

  getService: async (id: string) => {
    return await api.get(`/services/service/${id}`);
  },

  setServices: async (
    name: string,
    preco: string,
    hours: Array<string>,
    est: object
  ) => {
    return await api.post(`/services/post`, { name, preco, est, hours });
  },

  deletedService: async (id: string) => {
    return await api.delete(`/services/delete/${id}`);
  },

  getAppointments: async (id: string) => {
    return await api.get(`services/service/${id}/appointments`);
  },
   */
});
