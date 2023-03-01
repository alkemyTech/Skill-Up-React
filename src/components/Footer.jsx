import React from 'react';
import icons from '../assets/icons';

export const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-muted bg-white">
      <div className="text-center py-3">
        <div className="d-flex justify-content-center align-items-center">
        <a className="text-decoration-none d-flex justify-content-center mx-4" href="https://www.linkedin.com/in/mariano-pividori-5680a051/" >
            <img src={icons.linkedin} alt="linkedin" width="16" height="16"/>
            <h6 className="px-2 text-muted">Mariano Pividori</h6>
          </a>

          <a className="text-decoration-none d-flex justify-content-center mx-4" href="https://www.linkedin.com/in/santiago-llovera-6841931a2/" >
            <img src={icons.linkedin} alt="linkedin" width="16" height="16"/>
            <h6 className="px-2 text-muted">Santiago Llovera</h6>
          </a>
          <a className="text-decoration-none d-flex justify-content-center mx-4" href="https://www.linkedin.com/in/santiagobarreto-/" >
            <img src={icons.linkedin} alt="linkedin" width="16" height="16" />
            <h6 className="px-2 text-muted">Santiago Barreto</h6>
          </a>
        </div>
      </div>
    </footer>
  );
};
