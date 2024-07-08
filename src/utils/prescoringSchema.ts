import * as yup from 'yup';

export const prescoringSchema = yup.object().shape({
    amount: yup
        .number()
        .max(600000, "Amount must be at most 600000")
        .min(15000, "Amount must be at least 15000")
        .positive("Amount must be a positive number")
        .required("Amount is required"),
    lastName: yup
        .string()
        .min(3, "Last name must be at least 3 characters long")
        .max(40, "Last name must be at most 40 characters long")
        .matches(/^[А-ЯЁа-яёA-Za-z]{3,}([-][А-ЯЁа-яёA-Za-z]{3,})?$/, "Last name must only contain letters and hyphens")
        .required("Last name is required"),
    firstName: yup
        .string()
        .min(3, "First name must be at least 3 characters long")
        .max(40, "First name must be at most 40 characters long")
        .matches(/^[А-ЯЁа-яёA-Za-z]{3,}$/, "First name must only contain letters")
        .required("First name is required"),
    // middleName: yup
    //     .string()
    //     .matches(/^[А-ЯЁа-яёA-Za-z]{3,}$/, "Patronymic must only contain letters"),
    // term: yup
    //     .number()
    //     .positive("Term must be a positive number")
    //     .min(6, "Term must be at least 6 months")
    //     .max(24, "Term must be at most 24 months")
    //     .required("Term is required"),
    email: yup
        .string()
        .email("Must be a valid email")
        .min(6, "Email must be at least 5 characters long")
        .max(40, "Email must be at most 40 characters long")
        .required("Email is required"),
    // добавить проверку > 18 лет
    birthDate: yup
        .date()
        .required("Date of birth is required"),
    passportSeries: yup
        .string()
        .min(4, "Passport series must be in total 4 characters long")
        .max(4, "Passport series must be in total 4 characters long")
        .matches(/^[0-9]*$/, "Passport series must only contain digits")
        .required("Passport series is required"),
    passportNumber: yup
        .string()
        .min(6, "Passport number must be in total 6 characters long")
        .max(6, "Passport number must be in total 6 characters long")
        .matches(/^[0-9]*$/, "Passport number must only contain digits")
        .required("Passport number is required"),
})