import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contact
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
};

export default Filter;
