import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './notFound.scss';
import notFoundImage from '@assets/images/notFound.svg';
import { Button } from '@components' 

const NotFoundModule: FC = ({ }) => {
  let navigate = useNavigate(); 
  const routeChange = () =>{  
    navigate(-1);
  }
  return (
      <article className="notFound">
          <section className="notFound__info">
            <h3 className="notFound__info-title">Oops...</h3>
            <h3 className="notFound__info-title">Page not found</h3>
            <p className="notFound__info-text">This Page doesn`t exist or was removed! We suggest you go back.</p>
            <Button className="mainBtn" onClick={routeChange}>Go back</Button>
          </section>
          <figure className="notFound__image">
            <img src={notFoundImage} alt="Not Found" />
          </figure>
      </article>
  );
};

export { NotFoundModule };