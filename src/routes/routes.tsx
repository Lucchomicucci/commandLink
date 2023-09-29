import { Routes, Route } from 'react-router-dom';
import ThankYouPage from '../pages/thankYou/thankYou';
import HomePage from '../pages/home/home';
import NotFoundPage from '../pages/notFound/notFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/thankyou" element={<ThankYouPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
