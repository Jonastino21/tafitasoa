import '../Navbar/navbar.js';
import './modal.css';
import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Forms from './formulaire.js';
import monImage from '../../../src/images/logo.svg';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Example({ isOpen, toggle }) {
  const [nom, setNom] = useState('Jonastino Heriniantsoniavo');
  const [poste, setPoste] = useState('Web Design & Developer');
  const [telephone, setTelephone] = useState('+261-33-40-018-28');
  const [email, setEmail] = useState('heryniantso@gmail.com');
  const [company, setCompany] = useState('Miz\'Art Tech');
  const [couleurPremiere, setCouleurPremiere] = useState('black');

  const handleDownloadPDF = () => {
  const content = document.getElementById('carteVisite');

  if (content) {
    html2canvas(content).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 50, 20);
      pdf.save('carte_visite.pdf');

      toggle();
    });
  } else {
    console.error("L'élément avec l'ID 'carteVisite' est introuvable.");
  }
};
  useEffect(() => {
   
  }, [nom, poste, telephone, email, company]);

  const handleNomChange = (nouveauNom) => {
    setNom(nouveauNom);
  };

  const handlePosteChange = (nouveauPoste) => {
    setPoste(nouveauPoste);
  };

  const handleTelephoneChange = (nouveauTelephone) => {
    setTelephone(nouveauTelephone);
  };

  const handleEmailChange = (nouvelEmail) => {
    setEmail(nouvelEmail);
  };

  const handleCompanyChange = (nouveauCompany) => {
    setCompany(nouveauCompany);
  };
   const handleColorChange = (nouvelleCouleur) => {
    setCouleurPremiere(nouvelleCouleur);
  };

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className='modal-content'>
        <ModalHeader toggle={toggle}><strong>Business Card</strong></ModalHeader>
        <ModalBody>
          

            <div className="flip-container" id='carteVisite'>
            
              <div className="flipper" >
            
                
                <div className="back"  style={{ background: `linear-gradient(to right, ${couleurPremiere} 30%, rgba(255, 255, 255, 0) 31%)` }}>
              
                <img src={monImage} alt='monImg'></img>
        
                  <h1>{nom}</h1>
                  <p>{poste}</p>
                  <div className="icons">
                    <div className="icon-group">
                      <span className="bold"><i className="fa-solid fa-phone"></i></span>
                      <span className="contact">{telephone}</span>
                    </div>
                    <div className="icon-group">
                      <span className="bold"><i className="fa-solid fa-envelope"></i></span>
                      
                      <a className="contact">{email}</a>
                    </div>
                    <div className="icon-group">
                      <span className="bold"><i className="fa-solid fa-globe"></i></span>
                      <a className="contact">{company}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Forms
              onNomChange={handleNomChange}
              onPosteChange={handlePosteChange}
              onTelephoneChange={handleTelephoneChange}
              onEmailChange={handleEmailChange}
              onCompanyChange={handleCompanyChange}
              onColorChange={handleColorChange}
            />
         
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleDownloadPDF}>
            Download in PDF
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Example;
