import { RoutePaths } from '../data/RoutePaths.jsx';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <h3 className="px-3 py-2 text-3xl font-medium">
        Página não encontrada
      </h3>
      <button onClick={() => navigate(RoutePaths.HOME)} type="button">
        Voltar
      </button>
    </div>
  );
};
