import React from 'react';
import { useEffect, useState } from 'react';
import '../../assets/styles/styles.css';
import { useNavigate } from 'react-router-dom';

import { Compte } from '../../Components/Compte/Compte';
import accountData from '../../Mock/MockDatas';

import stockData from '../../services/stockData';
import callsApi from '../../services/api';

import { useDispatch, useSelector } from 'react-redux';
import { setNickname } from '../../redux/slice';

const Profil = () => {

  const { firstName, lastName, nickName, isAuthenticated } = useSelector((state) => state.user);

  const [editionNickname, setEditNickName] = useState(firstName || "");

  const [isFormDisplayed, setIsFormDisplayed] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const getAuth = stockData.getAuthentication();

  const handleChange = async (e) => {
    e.preventDefault();
    const result = await callsApi.updateUser(getAuth.token, editionNickname);
    if (result) {
      console.log('success');
      setIsFormDisplayed(false);
      dispatch(setNickname(editionNickname));
    } else {
      console.error(result.message);
    }

  };

  const resetEdition = () => {
    setEditNickName(nickName || "");
  };

  return (
    <div>
      <main className="main bg-dark">
        <div className="header2">
          <h1>Welcome back<br />{firstName} {lastName} {nickName} !</h1>
          {isFormDisplayed ? (
            <>
              <form className="edit" onSubmit={handleChange}>
                <input
                  value={editionNickname}
                  onChange={(e) => setEditNickName(e.target.value)}
                  placeholder={nickName}
                />
                <button className="edit-button" type='submit'>Save</button>
                <button className="edit-button cancel" onClick={() => { setIsFormDisplayed(false); resetEdition(); }}>Cancel</button>
              </form>
            </>
          ) : (
            <button className="edit-button" onClick={() => setIsFormDisplayed(true)}>Edit NickName</button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>

        {accountData.map((userAccount) => (
          <Compte
            key={userAccount.id}
            title={userAccount.title}
            amount={userAccount.amount}
            description={userAccount.description}
          />
        ))}
      </main>
    </div>
  );
};

export default Profil;