import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carrousel.css';

const Carrousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/Doctors1.jpg`}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Bienvenue sur notre plateforme de télé-expertise médicale</h3>
          <p>Connectez-vous avec des médecins spécialistes pour des avis rapides et de qualité. Améliorons ensemble les soins aux patients.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/Doctors2.webp`}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Soumettez vos demandes facilement</h3>
          <p>Utilisez notre formulaire intuitif pour envoyer des demandes de télé-expertise en quelques clics. Recevez des réponses précises et rapides.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/Doctors3.jpg`} // Replace with your third image path
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Collaboration sécurisée</h3>
          <p>Communiquez et partagez des informations médicales en toute sécurité. Notre plateforme assure la confidentialité et la sécurité des données.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/Doctors4.avif`} // Replace with your third image path
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Expertise de qualité</h3>
          <p> Accédez à un réseau de spécialistes qualifiés. Bénéficiez de conseils médicaux éclairés pour améliorer les décisions cliniques.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrousel;
