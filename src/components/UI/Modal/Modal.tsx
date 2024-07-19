import { FC, ReactElement, useEffect } from 'react';
import './modal.scss'
import { Button } from '@UI';
import close from '@assets/icons/close.svg'

type TModal = {
    visible: boolean,
    title: string,
    content: ReactElement | string,
    buttons: ReactElement,
    onClose: () => void,
}  
   
const Modal: FC<TModal> = ({ visible, title, content, buttons, onClose }) => {
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

  if (!visible) return null

  return (
    <div className='modal' onClick={onClose}>
      <div className='modal__dialog' onClick={e => e.stopPropagation()}>
        <div className='modal__dialog-header'>
            <h4 className='header__title'>{title}</h4>
            <Button className='closeBtn' onClick={onClose}>
                <img src={close} alt='close'/>
            </Button>
        </div>
        <div className='modal__dialog-body'>
          <div className='body__content'>{content}</div>
        </div>
        {buttons && <div className='modal__dialog-buttons'>{buttons}</div>}
      </div>
    </div>
  )
}

export { Modal };