import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoad = ({ Component, path }) => {
    const { infoUsuario } = useAuth();

    useEffect(() => {
        infoUsuario();
    }, []);
  const { user } = useSelector((state) => state.user);
  return user
? (
    <Component />
  )
: (
    <Navigate to={'/'} />
  );
};

export default PrivateRoad;
