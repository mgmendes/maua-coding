// eslint-disable-next-line react/prop-types
const InputLabel = ({ id, label }) => {
  return (
    <label htmlFor={id} className="text-sm font-bold">
      {label}
    </label>
  );
};

export default InputLabel;
