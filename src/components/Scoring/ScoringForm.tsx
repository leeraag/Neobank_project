import { FC } from 'react';
import './scoringForm.scss';
import { Button, FormHeader, Label, Input, Select } from '@UI';
import { useFormik } from 'formik';
import { scoringSchema } from '@utils';
import okField from '@assets/icons/okField.svg'
import errorField from '@assets/icons/errorField.svg'
import requiredField from '@assets/icons/required.svg'
import { putScoring, getApplicationStatus } from '@api';
import { setApplicationStep, applicationIdState } from '../../store/applicationSlice';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useNavigate } from "react-router-dom";
import { persistor } from '../../store/main';

const ScoringForm: FC = () => {
    const applicationId = useAppSelector(applicationIdState);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const initialFormData = {
        gender: "",
        maritalStatus: "",
        dependentAmount: "",
        passportIssueDate: "",
        passportIssueBranch: "",
        employmentStatus: "",
        employerINN: "",
        salary: "",
        position: "",
        workExperienceTotal: "",
        workExperienceCurrent: "",
    }

    const handleSubmit = async (applicationId: number, formValues: {}) => {
        try {
            const result = await putScoring(applicationId, formValues);
            if (result) {
                dispatch(setApplicationStep(4));
                const status = await getApplicationStatus(applicationId);
                setTimeout(() => {
                    if (status === "CC_DENIED") {
                        persistor.purge(); // очистка store
                        navigate("/");
                    }
                }, 20000);
            } else throw new Error();
        } catch (error) {
            console.error(error);
        }
    }
    const formik = useFormik({
        initialValues: initialFormData,
        validationSchema: scoringSchema,
        onSubmit: (values) => {
            const formValues = {
                gender: values.gender,
                maritalStatus: values.maritalStatus,
                dependentAmount: Number(values.dependentAmount),
                passportIssueDate: values.passportIssueDate,
                passportIssueBranch: values.passportIssueBranch,
                employment: {
                    employmentStatus: values.employmentStatus,
                    employerINN: values.employerINN,
                    salary: Number(values.salary),
                    position: values.position,
                    workExperienceTotal: Number(values.workExperienceTotal),
                    workExperienceCurrent: Number(values.workExperienceCurrent)
                },
                account: "11223344556677890000",
            }
            console.log(formValues)
            handleSubmit(Number(applicationId), formValues);
        },
    });

    const fieldsData = [
        {
            id: "gender",
            htmlFor: "gender",
            select: true,
            options: [
                { value: "", label: "Select gender" },
                { value: "MALE", label: "Male" },
                { value: "FEMALE", label: "Female" },
                { value: "NON_BINARY", label: "Non binary" },
            ],
            label: "What's your gender",
            required: true,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            errors: formik.errors.gender,
            touched: formik.touched.gender
        },
        {
            id: "maritalStatus",
            htmlFor: "maritalStatus",
            select: true,
            options: [
                { value: "", label: "Select your marital status" },
                { value: "MARRIED", label: "Married" },
                { value: "DIVORCED", label: "Divorced" },
                { value: "SINGLE", label: "Single" },
                { value: "WIDOW_WIDOWER", label: "Widow/widower" },
            ],
            label: "Your marital status",
            required: true,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            errors: formik.errors.maritalStatus,
            touched: formik.touched.maritalStatus
        },
        {
            id: "dependentAmount",
            htmlFor: "dependentAmount",
            select: true,
            options: [
                { value: "", label: "Select number of dependents" },
                { value: 0, label: "0" },
                { value: 1, label: "1" },
                { value: 2, label: "2" },
                { value: 3, label: "3" },
                { value: 4, label: "4" },
                { value: 5, label: "5" },
            ],
            label: "Your number of dependents",
            required: true,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            errors: formik.errors.dependentAmount,
            touched: formik.touched.dependentAmount
        },
        {
            id: "passportIssueDate",
            htmlFor: "passportIssueDate",
            type: "date",
            label: "Date of issue of the passport",
            placeholder: "Select Date and Time",
            required: true,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            errors: formik.errors.passportIssueDate,
            touched: formik.touched.passportIssueDate
        },
        {
            id: "passportIssueBranch",
            htmlFor: "passportIssueBranch",
            type: "text",
            label: "Division code",
            placeholder: "000000",
            required: true,
            maxLength: 6,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            errors: formik.errors.passportIssueBranch,
            touched: formik.touched.passportIssueBranch
        },
    ]
    const employmentData = [
        {
            id: "employmentStatus",
            htmlFor: "employmentStatus",
            select: true,
            options: [
                { value: "", label: "Select employment status" },
                { value: "UNEMPLOYED", label: "Unemployed" },
                { value: "SELF_EMPLOYED", label: "Self employed" },
                { value: "EMPLOYED", label: "Employed" },
                { value: "BUSINESS_OWNER", label: "Business owner" },
            ],
            label: "Your employment status",
            required: true,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            errors: formik.errors.employmentStatus,
            touched: formik.touched.employmentStatus
        },
        {
            id: "employerINN",
            htmlFor: "employerINN",
            type: "text",
            label: "Your employer INN",
            placeholder: "000000000000",
            required: true,
            maxLength: 12,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            errors: formik.errors.employerINN,
            touched: formik.touched.employerINN
        },
        {
            id: "salary",
            htmlFor: "salary",
            type: "number",
            label: "Your salary",
            placeholder: "For example 100 000",
            required: true,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            errors: formik.errors.salary,
            touched: formik.touched.salary
        },
        {
            id: "position",
            htmlFor: "position",
            select: true,
            options: [
                { value: "", label: "Select position" },
                { value: "WORKER", label: "Worker" },
                { value: "MID_MANAGER", label: "Mid manager" },
                { value: "TOP_MANAGER", label: "Top manager" },
                { value: "OWNER", label: "Owner" },
            ],
            label: "Your position",
            required: true,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            errors: formik.errors.position,
            touched: formik.touched.position
        },
        {
            id: "workExperienceTotal",
            htmlFor: "workExperienceTotal",
            type: "number",
            label: "Your work experience total",
            placeholder: "For example 10",
            required: true,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            errors: formik.errors.workExperienceTotal,
            touched: formik.touched.workExperienceTotal
        },
        {
            id: "workExperienceCurrent",
            htmlFor: "workExperienceCurrent",
            type: "number",
            label: "Your work experience current",
            placeholder: "For example 2",
            required: true,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            errors: formik.errors.workExperienceCurrent,
            touched: formik.touched.workExperienceCurrent
        },
    ]

    return (
        <article className="form">
        <form onSubmit={formik.handleSubmit} className="form__main">
            <div className="form__main-header">
                <FormHeader title="Continuation of the application" step={2}/>
            </div>
            {/* поля верхняя часть */}
            <div className="form__main-fields">
            {
                fieldsData.map(item => (
                    <div key={item.id} className="field">
                        <Label htmlFor={item.id}>
                        {item.label}
                        {item.required === true ? (
                            <span>
                                <img className='requiredIcon' src={requiredField}/>
                            </span>) 
                        : null}
                        {
                            item.select ? (
                                <Select
                                    id={item.id}
                                    onChange={item.onChange}
                                    onBlur={item.onBlur}
                                    options={item.options}
                                />
                            ) : (
                                <Input
                                    id={item.id}
                                    type={item.type}
                                    placeholder={item.placeholder}
                                    maxLength={item.maxLength}
                                    onChange={item.onChange}
                                    onBlur={item.onBlur}
                                    className={item.errors && item.touched ? 'defaultInput errorInput' : 'defaultInput'}
                                />
                            )
                        }
                        {/* отображение иконки в поле */}
                        {
                            item.errors && item.touched ? (
                                <img className='icon-error' src={errorField}/>
                            ) : null
                        }
                        {
                            !item.errors && item.touched ? (
                                <img className='icon-success' src={okField}/>
                            ) : null
                        }
                        </Label>
                        {/* отображение ошибки */}
                        {
                            item.errors && item.touched ? (
                                <p className="error">
                                    <>{item.errors}</>
                                </p>
                            // чтобы не съезжала иконка в поле
                            ) : <p className="error"></p> 
                        }
                    </div>
                ))
            }
            </div>
            {/* поля нижняя часть */}
            <h3 className="form__main-title">Employment</h3>
            <div className="form__main-fields">
            {
                employmentData.map(item => (
                    <div key={item.id} className="field">
                        <Label htmlFor={item.id}>
                        {item.label}
                        {item.required === true ? (
                            <span>
                                <img className='requiredIcon' src={requiredField}/>
                            </span>) 
                        : null}
                        {
                            item.select ? (
                                <Select
                                    id={item.id}
                                    onChange={item.onChange}
                                    onBlur={item.onBlur}
                                    options={item.options}
                                />
                            ) : (
                                <Input
                                    id={item.id}
                                    type={item.type}
                                    placeholder={item.placeholder}
                                    maxLength={item.maxLength}
                                    onChange={item.onChange}
                                    onBlur={item.onBlur}
                                    className={item.errors && item.touched ? 'defaultInput errorInput' : 'defaultInput'}
                                />
                            )
                        }
                        {/* отображение иконки в поле */}
                        {
                            item.errors && item.touched ? (
                                <img className='icon-error' src={errorField}/>
                            ) : null
                        }
                        {
                            !item.errors && item.touched ? (
                                <img className='icon-success' src={okField}/>
                            ) : null
                        }
                        </Label>
                        {/* отображение ошибки */}
                        {
                            item.errors && item.touched ? (
                                <p className="error">
                                    <>{item.errors}</>
                                </p>
                            // чтобы не съезжала иконка в поле
                            ) : <p className="error"></p> 
                        }
                    </div>
                ))
            }
            </div>
            <div className="form__main-button">
                <Button type="submit" className="mainBtn">Continue</Button>
            </div>
        </form>
    </article>        
    );
};

export { ScoringForm };