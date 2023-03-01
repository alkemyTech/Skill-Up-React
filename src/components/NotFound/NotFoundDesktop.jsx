import { Link } from 'react-router-dom';
import NotFoundBack from '../../assets/img/not-found.svg';
import DecorationLayout from '../../layout/DecorationLayout/DecorationLayout';
import { PRIVATE } from '../../router/PathUrl';
import { ContentNotFound } from './NotFound.styles';

export default function NotfoundDesktop() {
    return (
        <DecorationLayout>
            <ContentNotFound className="general_container d-flex center">
                <div>
                    <img src={NotFoundBack} alt="Imagen de página no encontrada" />
                </div>
                <h3 className="f-24 fw-5 t-center">Page not found</h3>
                <Link to={`${PRIVATE.root}/${PRIVATE.home}`} className="f-18 ">
                    Go to home {'>'}
                </Link>
            </ContentNotFound>
        </DecorationLayout>
    );
}
