import { useNavigate } from "react-router-dom";

const Presell = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6" style={{ background: 'var(--gradient-dark)' }}>
      <button
        onClick={() => navigate("/quiz")}
        className="px-10 py-5 rounded-xl text-lg font-bold shadow-2xl btn-primary-gradient hover:scale-[1.03] active:scale-[0.98] transition-transform"
      >
        Acceder Ahora
      </button>
    </div>
  );
};

export default Presell;
