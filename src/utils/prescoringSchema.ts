import * as yup from 'yup';

export const prescoringSchema = yup.object().shape({
    amount: yup
        .number()
        .required("Amount is required")
        .min(15000, "Amount must be at least 15000")
        .max(600000, "Amount must be at most 600000"),
    lastName: yup
        .string()
        .min(2, "Last name must be at least 2 characters long")
        .max(30, "Last name must be at most 30 characters long")
        .matches(/^[A-Za-z\-]{2,30}$/, "Last name must only contain letters and hyphens")
        .required("Last name is required"),
    firstName: yup
        .string()
        .min(2, "First name must be at least 2 characters long")
        .max(30, "First name must be at most 30 characters long")
        .matches(/^[A-Za-z\-]{2,30}$/, "First name must only contain letters and hyphens")
        .required("First name is required"),
    middleName: yup
        .string()
        .nullable()
        .min(2, "Patronymic must be at least 2 characters long")
        .max(30, "Patronymic must be at most 40 characters long")
        .matches(/^[A-Za-z]{2,30}$/, "Patronymic must only contain letters"),
    // term: yup
    //     .number()
    //     .positive("Term must be a positive number")
    //     .min(6, "Term must be at least 6 months")
    //     .max(24, "Term must be at most 24 months")
    //     .required("Term is required"),
    email: yup
        .string()
        .email("Must be a valid email")
        .min(5, "Email must be at least 5 characters long")
        .max(70, "Email must be at most 70 characters long")
        .matches(/^[\w\.]{2,50}@[\w\.]{2,20}$/, "Email must be in the format 'test@gmail.com'")
        .required("Email is required"),
    birthdate: yup
        .date()
        .test("age", "You must be 18 or older", function(birthdate ? : Date) {
            const test = new Date();
            test.setFullYear(test.getFullYear() - 18);
            return birthdate && birthdate <= test;
        })
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