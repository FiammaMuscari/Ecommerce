import React from "react";



const About = () => {


  return (
    <div className="container pt-5 pb-5 d-flex justify-content-center ">
        <div className="card mb-3 w-50  ">
          <img src="https://livingprettyhappy.com/wp-content/uploads/2019/07/AdobeStock_206195866-750x500.jpeg" className="card-img-top rounded" alt="ilustrative" />
          <div className="card-body">
            <h5 className="card-title"> Queremos que aproveches nuestros servicios</h5>
            <p className="card-text display-6">Somos una empresa en constante expansión. Siempre estamos interesados en mejorar el servicio, comuniquese con nosotros siempre que lo necesite estamos a su disposición.</p>
            <p className="card-text"><small className="text-muted"> -CEO</small></p>
          </div>
        </div>
      </div>
  );
};

export default About;
