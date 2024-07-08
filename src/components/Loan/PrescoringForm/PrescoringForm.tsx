import { FC } from 'react';
import './prescoringForm.scss';
import { Button, FormHeader, Label, Input, Select, AmountInput } from '../../UI';
import { useFormik } from 'formik';
import { prescoringSchema } from '../../../utils/prescoringSchema';
import okField from '../../../assets/icons/okField.svg'
import errorField from '../../../assets/icons/errorField.svg'
import requiredField from '../../../assets/icons/required.svg'
import { postPrescoring } from '../../../api';

const PrescoringForm: FC = () => {
    const formik = useFormik({
        initialValues: {
            amount: '',
            lastName: '',
            firstName: '',
            middleName: '',
            term: '',
            email: '',
            birthDate: '',
            passportSeries: '',
            passportNumber: ''
        },
        validationSchema: prescoringSchema,
        onSubmit: (values) => {
            // console.log(values);
            const data = {...values, term: parseInt(values.term, 10)}
            // console.log(data);
            postPrescoring(data);
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
            value: formik.values.lastName,
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
            value: formik.values.firstName,
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
            value: formik.values.middleName,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
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
            value: formik.values.term,
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
            value: formik.values.email,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            errors: formik.errors.email,
            touched: formik.touched.email
        },
        {
            id: "birthDate",
            htmlFor: "birthDate",
            type: "date",
            label: "Your date of birth",
            placeholder: "Select Date and Time",
            required: true,
            value: formik.values.birthDate,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            errors: formik.errors.birthDate,
            touched: formik.touched.birthDate
        },
        {
            id: "passportSeries",
            htmlFor: "passportSeries",
            type: "text",
            label: "Your passport series",
            placeholder: "0000",
            required: true,
            value: formik.values.passportSeries,
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
            value: formik.values.passportNumber,
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
                        {"Select amount"}
                        {/* этот компонент изменится */}
                        <AmountInput
                            id={"amountId"}
                            name={"amount"}
                            type={"number"}
                            min={15000}
                            max={600000}
                            placeholder={"Select amount"}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.amount}
                            className={formik.errors.amount && formik.touched.amount ? 'defaultInput errorInput' : 'defaultInput'}
                        />
                        { formik.errors.amount && formik.touched.amount && <img className='errorIcon' src={errorField} /> }
                        { !formik.errors.amount && formik.touched.amount ? (<img className='okIcon' src={okField}/>) : ''}
                    </Label>
                    {
                        formik.errors.amount && formik.touched.amount ? (
                            <p className="error">{formik.errors.amount}</p>
                        ) : <p className="error"></p>
                    }
                </div>
                <div className="form__header-info">
                    <p className="info__title">You have chosen the amount</p>
                    <p className={formik.values.amount ? "info__value-visible" : "info__value-default"}>{formik.values.amount} ₽</p>
                </div>
            </div>
            <form onSubmit={formik.handleSubmit} className="form__main">
                <h3>Contact information</h3>
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
                            : ''}
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
                                        onChange={item.onChange}
                                        onBlur={item.onBlur}
                                        value={item.value}
                                        className={item.errors && item.touched ? 'defaultInput errorInput' : 'defaultInput'}
                                    />
                                )
                            }
                            { item.errors && item.touched && <img className='errorIcon' src={errorField} /> }
                            { !item.errors && item.touched ? (<img className='okIcon' src={okField}/>) : ''}
                            </Label>
                            {
                                item.errors && item.touched ? (
                                    <p className="error">{item.errors}</p>
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