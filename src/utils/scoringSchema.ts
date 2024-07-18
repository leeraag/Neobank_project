import * as yup from 'yup';

export const scoringSchema = yup.object().shape({
    gender: yup
        .string()
        .required("Select one of the options"),
    maritalStatus: yup
        .string()
        .required("Select one of the options"),
    dependentAmount: yup
        .number()
        .required("Select one of the options"),
    passportIssueDate: yup
        .date()
        .test("passportDate", "Incorrect date of passport issue", function(passportIssueDate ? : Date) {
            const today = new Date();
            return passportIssueDate && passportIssueDate <= today;
        })
        .required("Passport issue date is required"),
    passportIssueBranch: yup
        .string()
        .min(6, "Passport division code must be 6 digits")
        .max(6, "Passport division code must be 6 digits")
        .matches(/^[0-9]*$/, "Passport division code must only contain digits")
        .required("Passport division code is required"),
    employmentStatus: yup
        .string()
        .required("Select one of the options"),
    employerINN: yup
        .string()
        .required("Employer INN is required")
        .min(12, "Department code must be 12 digits")
        .max(12, "Department code must be 12 digits")
        .matches(/^[0-9]*$/, "Employer INN must only contain digits"),
    salary: yup
        .number()
        .required("Enter your salary")
        .min(0, "Salary must be greater than zero"),
    position: yup
        .string()
        .required("Select one of the options"),
    workExperienceTotal: yup
        .number()
        .required("Enter your total work experience")
        .moreThan(0, "Total work experience must be greater than 0")
        .lessThan(100, "Total work experience must be less than 100"),
    workExperienceCurrent: yup
        .number()
        .required("Enter your current work experience")
        .moreThan(0, "Current work experience must be greater than 0")
        .lessThan(100, "Current work experience must be less than 100"),
})