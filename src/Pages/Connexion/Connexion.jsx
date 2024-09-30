import { useState } from 'react';
import '../../assets/styles/styles.css';
import { useNavigate } from 'react-router-dom';


const Connexion = () => {
    const navigate = useNavigate();
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                    <p className="error-message">Message erreur</p>
                </form>
            </section>
        </main>
    );
};

export default Connexion;
