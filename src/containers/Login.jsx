import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import googleIcon from '../assets/images/google-icon.png';
import twitterIcon from '../assets/images/twitter-icon.png';
import '../assets/styles/containers/Login.scss';

const Login = props => {
    const [form, setValues] = useState({
        email: "",
    });

    //funcion que maneja cambios cuando se escriba en los inputs
    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = event => {
        //se usa preventDefault para que no envie el form vacio
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/');//redirige al login
    }

    return(
        <React.Fragment>
           <Header isLogin/>
            <section className="login">
                <section className="login__container">
                    <h2>Inicia sesión</h2>
                    <form className="login__container--form" onSubmit={handleSubmit}>
                        <input 
                            className="input" 
                            type="text"
                            placeholder="Correo" 
                            name="email"
                            onChange={handleInput}
                        />
                        <input 
                            className="input" 
                            type="password" 
                            placeholder="Contraseña" 
                            name="password"
                            onChange={handleInput}
                        />
                        <button className="button">Iniciar sesión</button>
                        <div className="login__container--remember-me">
                            <label>
                                <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
                            </label>
                        <a href="/">Olvidé mi contraseña</a>
                        </div>
                    </form>
                    <section className="login__container--social-media">
                        <div><img src={googleIcon} /> Inicia sesión con Google</div>
                        <div><img src={twitterIcon}/> Inicia sesión con Twitter</div>
                    </section>
                    <p className="login__container--register">No tienes ninguna cuenta { ' ' }
                        <Link to="/register">
                            Regístrate
                        </Link>
                    </p>
                </section>
            </section>
        </React.Fragment>
    );
}

//enviamos la informacion a los actions
const mapDispatchToProps = {
    loginRequest,
}

export default connect(null, mapDispatchToProps)(Login)