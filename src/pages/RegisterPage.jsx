import React, { useMemo, useState } from "react";
import { useForm } from "../hooks/useForm";
import { Link, Link as RouterLink, useNavigate } from "react-router-dom";
import {startCreatingUserWithEmail} from '../Redux/auth/thunks'
import { useDispatch } from "react-redux";


const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [
    [(value) => value.includes("@"), "El correo debe tener un @"],
    [
      (value) =>
        value.match(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
        ),
      "El correo debe tener un formato valido",
    ],
  ],
  password: [
    [
      (value) => value.length >= 6,
      "El password debe tener al menos 6 caracteres",
    ],
  ],
  displayName: [
    [(value) => value.length >= 1, "El nombre es obligatorio"],
    [(value) => value.length >= 6, "El nombre debe tener al menos 6 letras"]
  ]
};


export const RegisterPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formSubmited, setFormSubmited] = useState(false);

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmail(formState));
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column vw-100 vh-100 ">
        <form onSubmit={onSubmit}>
          <div className="d-grid gap-2 mt-3">
            <div>Tu usuario debe tener minimo 6 caracteres</div>
            <input
              className="inputlogin"
              style={{ borderRadius:"0.2em", padding:"0.5em"}}
              label="Nombre Completo"
            type="text"
            placeholder="Nombre de usuario"
            name="displayName"
            value={displayName}
            onChange={onInputChange}
            />
            <input
              className="inputlogin"
              style={{ borderRadius:"0.2em", padding:"0.5em"}}
              label="Correo"
            type="email"
            placeholder="correo@gmail.com"
            name="email"
            value={email}
            onChange={onInputChange}
            />
            <div>Tu Contraseña debe tener minimo 6 caracteres</div>
            <input
              className="inputlogin"
              style={{ borderRadius:"0.2em", padding:"0.5em"}}
              label="Contraseña"
            type="password"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={onInputChange}
            />
            <button disabled={!isFormValid && formSubmited} className="btn btn-outline-primary mt-3" type="submit">
            Crear una cuenta
            </button>
            
            <Link component={RouterLink} color="inherit" to="/login" style={{display: 'flex', justifyContent: 'end'}}>
            Ya tengo una cuenta
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};