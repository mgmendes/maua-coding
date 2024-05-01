import PropTypes from "prop-types";

const FormularioDescricao = ({ children }) => {
  return <div className="text-neutral-600 text-xs">{children}</div>;
};

FormularioDescricao.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormularioDescricao;
