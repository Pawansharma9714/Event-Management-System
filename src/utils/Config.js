export const API = "http://event.avinyasoftware.com/api";

export const validEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export const validPassword = /^[0-9\b]+$/;
