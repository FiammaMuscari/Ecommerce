import React, { useState } from "react";


const FORM_ENDPOINT = 'https://public.herotofu.com/v1/1eb813c0-3851-11ed-8ff6-d1ee553f3964'


export const Contact = () => {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {

    setTimeout(() => {

      setSubmitted(true);

    }, 100);

  };
  


  if (submitted) {

    return (
    <>
    <div className="container p-5 column" >
    <p className="navbar-brand fw-bold fs-4  d-flex justify-content-center ">Gracias por tu consulta</p>
    <img src="https://www.ceupe.com/images/easyblog_articles/2299/b2ap3_large_empleador-en-las-Relaciones-laborales.jpg" className="card-img-top rounded" alt="ilustrative" />
    </div>
    </>

    );

  }

    return (
    <div className="container p-5 column " >
        <img src="https://www.airvistara.com/content/dam/airvistara/global/english/common/image/Contact%20Us-26%20Apr.jpg" className="card-img-top rounded" alt="ilustrative" />
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="container p-5 column " 
    >
      <div className="mb-3" >
      <label htmlFor="exampleFormControlInput1" className="form-label"> ¿Quieres escribirnos?  </label>
        <input type="text"  name="name" required className="form-control" id="exampleFormControlInput1" placeholder="Nombre"/>
      </div>
      <div className="mb-3" >
      <label htmlFor="exampleFormControlInput1" className="form-label"> Responderemos a tu correo </label>
        <input type="email"  name="email" required className="form-control" id="exampleFormControlInput1" placeholder="email@gmail.com"/>

      </div>
      <div  className="form-label">
        <textarea className="form-control" placeholder="Escribe algo..." name="message" required />
      </div>
      <div className="d-flex flex-row-reverse">
        <button className="btn btn-dark" type="submit"> Enviar</button>
      </div>
    </form>
    </div>
  );

};