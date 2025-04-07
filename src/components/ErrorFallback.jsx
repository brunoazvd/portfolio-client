import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../data/RoutePaths.jsx";

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();

  return (
    <div role="alert">
      {import.meta.env.DEV && (
        <div className="text-center bg-red-800 p-8 w-fit mx-auto">
          <p>Desenvolvedores Apenas!</p>
          <p>Algo deu errado:</p>
          <pre>{error.message}</pre>
          <button className="mt-4 bg-background px-2 py-1" onClick={resetErrorBoundary}>Try again</button>
        </div>
      )}
      <div className="mb-4 mt-16 flex w-full flex-col items-center justify-center space-y-16">
        <div>
          <a
            onClick={() => {
              resetErrorBoundary();
              navigate(RoutePaths.HOME);
            }}
          >
            Voltar
          </a>
        </div>
        <div>Um erro aconteceu! Por favor contate o suporte.</div>
      </div>
    </div>
  );
};
