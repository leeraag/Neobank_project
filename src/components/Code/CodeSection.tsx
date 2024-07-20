import { FC, useState, useRef, useEffect, KeyboardEvent } from 'react';
import './codeSection.scss'
import { postCode } from '@api';
import { setApplicationStep, applicationIdState } from '../../store/applicationSlice';
import { useAppSelector, useAppDispatch } from '../../hooks';


const CodeSection: FC = () => {
  const applicationId = useAppSelector(applicationIdState);
  const dispatch = useAppDispatch();
  const [error, setError] = useState(false);
  const [codes, setCodes] = useState<string[]>(['', '', '', '']);
  const codeRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  // фокус в первое поле при загрузке
  useEffect(() => {
    codeRefs[0].current?.focus();
  }, []);

  // обработка заполнения полей
  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) {
      return;
    }

    const newCodes = [...codes];
    newCodes[index] = value;

    setCodes(newCodes);

    if (value !== '' && index < 3) {
      codeRefs[index + 1].current?.focus();
    }

    // отправка кода при вводе 4х цифр
    if (index === 3 && newCodes.every((code) => code !== '')) {
      handleSubmit(newCodes.join(''));
    }
  };

  // обработка стирания
  const handleBackspace = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && index > 0) {
      const newCodes = [...codes];
      newCodes[index] = '';
      setCodes(newCodes);
      codeRefs[index - 1].current?.focus();
    }
  };

  const handleSubmit = async (verificationCode: string) => {
    console.log(verificationCode);
    try {
      const result = await postCode(applicationId, verificationCode);
      if (result) {
          dispatch(setApplicationStep(7));
          console.log("прошло")
      } else throw new Error();
    } catch (error) {
        console.error(error);
        setError(true);
    }
  };

  return (
    <section className="codeSection">
      <h2 className="codeSection__title">Please enter confirmation code</h2>
      <div className="codeSection__code">
        {codes.map((code, index) => (
          <input
            key={index}
            type="number"
            placeholder=""
            className="codeSection__code-input"
            maxLength={1}
            value={code}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleBackspace(index, e)}
            ref={codeRefs[index]}
          />
        ))}
      </div>
      {error && <div className="codeSection__error">Invalid confirmation code</div>}
    </section>
  );
};

export { CodeSection };