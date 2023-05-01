const BASE_URL = "http://localhost:8080/api";

export const ADMIN_APIS = {
  AUTH: {
    LOGIN: `${BASE_URL}/auth/login`,
    CHANGE_PASSWORD: `${BASE_URL}/auth/change-password`,
    ORGANIZER_LOGIN: `${BASE_URL}/`,
  },
  ORGANIZER: {
    LIST: `${BASE_URL}/organizer-list`,
    ADD: `${BASE_URL}/add-organizer`,
    EDIT: `${BASE_URL}/edit-organizer`,
    UPDATE: `${BASE_URL}/update-organizer`,
    DELETE: `${BASE_URL}/delete-organizer`,
  },
  EVENT: {
    LIST: `${BASE_URL}/`,
    ADD: `${BASE_URL}/`,
  },
};

export const validEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export const validPassword = /^[0-9\b]+$/;

export const authDetails = JSON.parse(localStorage.getItem("Auth"));