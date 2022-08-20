import React from 'react';
import './navBar.css';


function navBar() {        /*recibo el parametro desde el index*/
  return(
   
        <div className="menu">
          <nav className="navegacion navbar-expand-sm navbar-light">
            <ul className="menu navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link" href="#hd">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#quien">Quienes Somos?</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#prod">Productos</a>
                  <ul className="subMenu">
                    <li><a  href="#">Fertilizantes</a></li>
                    <li><a  href="#">Sustratos y complementos</a></li>
                    <li><a  href="#">Parafernalia</a></li>
                    <li><a  href="#">Otros</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#grow">Grow Tips</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">Contacto</a>
                </li>
              </ul>
         </nav>
        </div>       
      
   
    );
}

export default navBar;



