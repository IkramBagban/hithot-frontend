const PASSSWORD_LENGTH = 8;
export const validateEmail = (email: string) => {
    // Regex for validating email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
export const validateWhiteSpaces = (field: string) => field.trim().length;
export const validatePassword = (pwd: string) =>
    pwd.trim().length >= PASSSWORD_LENGTH;
