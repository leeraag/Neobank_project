import { FC, useEffect, useState } from 'react';
import './payments.scss';
import { Button, FormHeader, Table, Loader, Checkbox } from '@UI';
import { getPayments, postDocument } from '@api';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { applicationIdState, setApplicationStep } from '../../../store/applicationSlice';

const Payments: FC = ({ }) => {
    const applicationId = useAppSelector(applicationIdState);
    const [paymentsTable, setPaymentsTable] = useState([]);
    const tableHeaders = ["NUMBER", "DATE", "TOTAL PAYMENT", "INTEREST PAYMENT", "DEBT PAYMENT", "REMAINING DEBT"]
    const [check, setCheck] = useState(false);
    const dispatch = useAppDispatch();

    // получаем содержимое таблицы
    const paymentsData = async () => {
        try {
            const result = await getPayments(applicationId);
            if (result) {
                setPaymentsTable(result);
            } else throw new Error();
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (applicationId) {
            paymentsData()
        }
    }, []);

    // отправка подтверждения
    const sendAgreement = async () => {
        if (check === true) {
            try {
                const result = await postDocument(applicationId);
                if (result) {
                    dispatch(setApplicationStep(5));
                } else throw new Error();
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log('No payments to export');
        }
    }

    // изменение состояния чекбокса
    const handleCheckboxChange = () => {
        setCheck(!check);
    }

    return (
        <article className="payments">
            <div className="payments__header">
                <FormHeader title="Payment Schedule" step={3}/>
            </div>
            {
                paymentsTable.length === 0 ? <Loader />
                : <Table headers={tableHeaders} rows={paymentsTable}/>
            }
            <div className="payments__buttons">
                <Button className="denyBtn">Deny</Button>
                <div className="payments__buttons-agreement">
                    <Checkbox 
                        label={"I agree with the payment schedule"}
                        isChecked={false}
                        onChange={handleCheckboxChange} />
                    <Button 
                        className={check === true ? "mainBtn" : "mainBtnDisabled"}
                        onClick={sendAgreement}>
                        Send
                    </Button>
                </div>

            </div>

           
        </article>
    );
};

export { Payments };