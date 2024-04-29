const FormularioCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-screen-lg bg-white mx-auto p-6">
      {children}
    </div>
  );
};

export default FormularioCard;
