import React from 'react';
import Alert from 'react-bootstrap/Alert';

interface PropsType {
  message?: string;
  variant?: string;
}

const AlertBanner = ({ message, variant }: PropsType) => {
  const alertMessage = message || 'An unexpected error occurred';
  const alertVariant = variant || 'danger';
  return (
    <Alert variant={alertVariant} className="bg-red-600 text-white">
      {message}
    </Alert>
  );
};

export default AlertBanner;
