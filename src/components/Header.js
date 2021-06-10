import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <Link to="/" className="d-flex align-items-center text-dark text-decoration-none">
                    <span className="fs-4">Pegb-</span>
                </Link>
            </div>

        </div>
    );
}

export default Header;