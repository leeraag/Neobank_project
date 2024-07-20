import { FC, useEffect, useState } from 'react';
import './payments.scss';
import { Button, FormHeader, Table, Loader, Checkbox, Modal } from '@UI';
import { getPayments, postDocument } from '@api';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { applicationIdState, setApplicationStep } from '../../../store/applicationSlice';

const Payments: FC = ({ }) => {
    // проверка размера экрана для адаптивного отображения кнопок
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;
    useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
        // unsubscribe "onComponentDestroy"
        window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    const applicationId = useAppSelector(applicationIdState);
    const [paymentsTable, setPaymentsTable] = useState([]);
    type Data = typeof paymentsTable;
    type SortKeys = keyof Data[0];
    const tableHeaders: { key: SortKeys; label: string }[] = [
        { key: "number", label: "NUMBER" },
        { key: "date", label: "DATE" },
        { key: "totalPayment", label: "TOTAL PAYMENT" },
        { key: "interestPayment", label: "INTEREST PAYMENT" },
        { key: "debtPayment", label: "DEBT PAYMENT" },
        { key: "remainingDebt", label: "REMAINING DEBT" },
    ];
    const [check, setCheck] = useState(false);
    const dispatch = useAppDispatch();

    const [isModal, setModal] = useState(false)
    const onClose = () => setModal(false)

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
            {
                width < breakpoint ?
                <>
                    <div className="buttons__small">
                        <Checkbox 
                            label={"I agree with the payment schedule"}
                            isChecked={false}
                            onChange={handleCheckboxChange} />
                        <div className="buttons__small-main">
                            <Button 
                                className="denyBtn"
                                onClick={() => setModal(true)}>Deny</Button>
                            <Button 
                                className={check === true && paymentsTable.length !== 0 
                                    ? "mainBtn" : "mainBtnDisabled"}
                                onClick={sendAgreement}>
                                Send
                            </Button>
                        </div> 
                    </div>
                </>
                : 
                <>
                    <div className="payments__buttons">
                        <Button 
                            className="denyBtn"
                            onClick={() => setModal(true)}>Deny</Button>
                        <div className="payments__buttons-agreement">
                            <Checkbox 
                                label={"I agree with the payment schedule"}
                                isChecked={false}
                                onChange={handleCheckboxChange} />
                            <Button 
                                className={check === true && paymentsTable.length !== 0 
                                    ? "mainBtn" : "mainBtnDisabled"}
                                onClick={sendAgreement}>
                                Send
                            </Button>
                        </div>
                    </div>
                </>
            }
            <Modal visible={isModal} onClose={onClose}/>
        </article>
    );
};

export { Payments };