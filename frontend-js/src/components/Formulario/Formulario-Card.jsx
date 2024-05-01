import PropTypes from "prop-types";

const FormularioCard = ({ children }) => {
  return (
    <div className="w-full max-w-screen-lg bg-white mx-auto p-6">
      {children}
    </div>
  );
};

FormularioCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormularioCard;
