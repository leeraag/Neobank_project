import { FC, useEffect, useState } from 'react';
import './modal.scss'
import { Button } from '@UI';
import close from '@assets/icons/close.svg'
import { useNavigate } from 'react-router-dom';
import { persistor } from '../../../store/main';

type TModal = {
  visible: boolean,
  onClose: () => void,
}  
   
const Modal: FC<TModal> = ({ visible, onClose }) => {
  const [denyState, setDenyState] = useState(false);
  const navigate = useNavigate();
  const content = (denyState === true ? "Your application has been denied!"
  : "You exactly sure, you want to cancel this application?");
 // создаем обработчик нажатия клавиши Esc
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        onClose()
        break
    }
  }

  // обработчик к нажатию клавиш
  useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  })

  const denyHandler = () => {
    persistor.purge(); // очистка store
    navigate("/");
    window.location.reload();
  }

  if (!visible) return null

  return (
    <div className='modal' onClick={onClose}>
      <div className='modal__dialog' onClick={e => e.stopPropagation()}>
        <div className='modal__dialog-header'>
            <h4 className='header__title'>Deny application</h4>
            { denyState ? (
              <Button className='closeBtn' onClick={denyHandler}>
                <img src={close} alt='close'/>
              </Button>
            ) : (
              <Button className='closeBtn' onClick={onClose}>
                <img src={close} alt='close'/>
              </Button>
            )}
        </div>
        <div className='modal__dialog-body'>
          <div className='body__content'>{content}</div>
        </div>
        {
          denyState ? (
            <div className='modal__dialog-buttons'>
              <Button className="mainBtn" onClick={denyHandler}>Go home</Button>
            </div>
          ) : (
            <div className='modal__dialog-buttons'>
              <Button className="denyBtn" onClick={() => setDenyState(true)}>Deny</Button>
              <Button className="mainBtn" onClick={onClose}>Cancel</Button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export { Modal };