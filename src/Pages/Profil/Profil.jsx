import React from 'react';
import { useEffect, useState } from 'react';
import '../../assets/styles/styles.css';
import { useNavigate } from 'react-router-dom';

const Profil = () => {
  
  const navigate = useNavigate();

  return (
    <div className="profile-page">
      <main className="main bg-dark">
        <div className="header">
          <h1>Bienvenue <br />Nom  Prenom</h1>
          <p>Voici votre pseudo: </p>
          <p>pseudo</p>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <p>contenu des données mockées</p>
      </main>
    </div>
  );
};

export default Profil;