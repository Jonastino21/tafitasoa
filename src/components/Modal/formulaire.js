import React from 'react';
import { FormGroup, Input, Form } from "reactstrap";
import './formulaire.css';

const Forms = ({
  onNomChange,
  onPosteChange,
  onTelephoneChange,
  onEmailChange,
  onCompanyChange,
  onColorChange
}) => {
  return (
    <div className="contenu">
      <Form>
        <FormGroup className="form">
          <Input
            className="input"
            id="Nom"
            name="nom"
            placeholder="Nom"
            type="text"
            onChange={(e) => onNomChange(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="form">
          <Input
            className="input"
            id="Position"
            name="position"
            placeholder="Position"
            type="text"
            onChange={(e) => onPosteChange(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="form">
          <Input
            className="input"
            id="Number"
            name="number"
            placeholder="Téléphone"
            type="number"
            onChange={(e) => onTelephoneChange(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="form">
          <Input
            className="input"
            id="Email"
            name="email"
            placeholder="Email"
            type="email"
            onChange={(e) => onEmailChange(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="form">
          <Input
            className="input"
            id="Company"
            name="company"
            placeholder="Company"
            type="text"
            onChange={(e) => onCompanyChange(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="form">
          <Input
            className="input"
            id="exampleColor"
            name="color"
            placeholder="color placeholder"
            type="color"
          onChange={(e) => onColorChange(e.target.value)}
          />
        </FormGroup>
       
      </Form>
    </div>
  );
};

export default Forms;
