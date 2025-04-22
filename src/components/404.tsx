import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-xl">Página não encontrada</p>
            <Link to="/sign-in" className="mt-4 text-blue-500 underline">
                Voltar para o login
            </Link>
        </div>
    );
};

export default NotFound;
