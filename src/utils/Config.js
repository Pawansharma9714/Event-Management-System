const BASE_URL = "http://event.avinyasoftware.com/api";

export const ADMIN_APIS = {
  AUTH: {
    LOGIN: `${BASE_URL}/UserIdentify/AdminLogin`,
    ORGANIZER_LOGIN: `${BASE_URL}/`,
  },
  ORGANIZER: {
    LIST: `${BASE_URL}/`,
    ADD: `${BASE_URL}/Organizer/OrganizerSave`,
  },
  EVENT: {
    LIST: `${BASE_URL}/`,
    ADD: `${BASE_URL}/`,
  },
};

export const validEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export const validPassword = /^[0-9\b]+$/;