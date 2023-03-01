import { Route, Routes } from 'react-router-dom';
import NotfoundDesktop from '../components/NotFound/NotFoundDesktop';

function RoutesWithNotFound({ children }) {
    return (
        <Routes>
            {children}
            <Route path="*" element={<NotfoundDesktop />} />
        </Routes>
    );
}
export default RoutesWithNotFound;
