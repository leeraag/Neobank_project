import { FC } from 'react';
import './prescoringForm.scss';
import { Button, FormHeader, Label, Input, Select, AmountInput } from '@UI';
import { useFormik } from 'formik';
import { prescoringSchema } from '@utils';
import okField from '@assets/icons/okField.svg'
import errorField from '@assets/icons/errorField.svg'
import requiredField from '@assets/icons/required.svg'
import { postPrescoring } from '@api';
import { setButtonText, 
        setPrescoringStep, 
        setStatus, 
        formDataState,
        setFormData, 
        setOffers } from "../../../store/prescoringSlice";
import { setApplicationStep } from '../../../store/applicationSlice';
import { useAppSelector, useAppDispatch } from '../../../hooks';

const PrescoringForm: FC = () => {
    const dispatch = useAppDispatch();
    const initialFormData = useAppSelector(formDataState);

    const handleSubmit = async (formValues: {}) => {
        // включается loader
        dispatch(setStatus("loading"));
        try {
            const result = await postPrescoring(formValues);
            if (result) {
                dispatch(setOffers(result))
                dispatch(setButtonText("Choose an offer"));
                dispatch(setStatus("success"));
                dispatch(setPrescoringStep(2));
                dispatch(setApplicationStep(2));
            } else throw new Error();
        } catch (error) {
            dispatch(setStatus("error"));
        }
    }
    const formik = useFormik({
        initialValues: initialFormData,
        validationSchema: prescoringSchema,
        onSubmit: (values) => {
            const formValues = {
                amount: Number(values.amount),
                lastName: values.lastName.trim(),
                firstName: values.firstName.trim(),
                middleName: values.middleName,
                term: Number(values.term),
                email: values.email.trim(),
                birthdate: values.birthdate,
                passportSeries: values.passportSeries,
                passportNumber: values.passportNumber
            }
            dispatch(setFormData(formValues));
            handleSubmit(formValues);
        },
    });

    const fieldsData = [
        {
            id: "lastName",
            htmlFor: "lastName",
            type: "text",
            label: "Your last name",
            placeholder: "For Example Doe",
            required: true,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            errors: formik.errors.lastName,
            touched: formik.touched.lastName
        },
        {
            id: "firstName",
            htmlFor: "firstName",
            type: "text",
            label: "Your first name",
            placeholder: "For Example John",
            required: true,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            errors: formik.errors.firstName,
            touched: formik.touched.firstName
        },
        {
            id: "middleName",
            htmlFor: "middleName",
            type: "text",
            label: "Your patronymic",
            placeholder: "For Example Victorovich",
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            errors: formik.errors.middleName,
            touched: formik.touched.middleName,
        },
        {
            id: "term",
            htmlFor: "term",
            select: true,
            options: [
                { value: 6, label: "Select term" },
                { value: 6, label: "6 months" },
                { value: 12, label: "12 months" },
                { value: 18, label: "18 months" },
                { value: 24, label: "24 months" },
            ],
            label: "Select term",
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
        },
        {
            id: "email",
            htmlFor: "email",
            type: "email",
            label: "Your email",
            placeholder: "test@gmail.com",
            required: true,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            errors: formik.errors.email,
            touched: formik.touched.email
        },
        {
            id: "birthdate",
            htmlFor: "birthdate",
            type: "date",
            label: "Your date of birth",
            placeholder: "Select Date and Time",
            required: true,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            errors: formik.errors.birthdate,
            touched: formik.touched.birthdate
        },
        {
            id: "passportSeries",
            htmlFor: "passportSeries",
            type: "text",
            label: "Your passport series",
            placeholder: "0000",
            required: true,
            maxLength: 4,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            errors: formik.errors.passportSeries,
            touched: formik.touched.passportSeries
        },
        {
            id: "passportNumber",
            htmlFor: "passportNumber",
            type: "text",
            label: "Your passport number",
            placeholder: "000000",
            required: true,
            maxLength: 6,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            errors: formik.errors.passportNumber,
            touched: formik.touched.passportNumber
        }
    ]

    return (
        <article className="form">
        <div className="form__header">
            <div className="form__header-field">
                <FormHeader title="Customize your card" step={1}/>
                <Label htmlFor={'amountId'}>
                    <AmountInput
                        id={"amountId"}
                        name={"amount"}
                        type={"range"}
                        min={15000}
                        max={600000}
                        step={500}
                        list={"values"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.amount}
                        className={formik.errors.amount && formik.touched.amount ? 'defaultAmountInput errorAmountInput' : 'defaultAmountInput'}
                    />
                </Label>
                {/* отображение ошибки */}
                {
                    formik.errors.amount && formik.touched.amount ? (
                        <p className="error">
                            <>{formik.errors.amount}</>
                        </p>
                    ) : null
                }
            </div>
            <div className="form__header-info">
                <p className="info__title">You have chosen the amount</p>
                <p className={formik.values.amount ? "info__value-visible" : "info__value-default"}>{formik.values.amount} ₽</p>
            </div>
        </div>
        <form onSubmit={formik.handleSubmit} className="form__main">
            <h3 className="form__main-title">Contact information</h3>
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
                                    // value={item.value}
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

export { PrescoringForm };