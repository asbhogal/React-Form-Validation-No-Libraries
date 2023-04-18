const FormInput = (props) => {

  const { id, label, errorMessage, onChange, ...inputProps } = props;

  return (
    
    <div className="form-input">
        <label>{ label }</label>
        <input
            { ...inputProps }
            onChange={ onChange }
            />
        <span className="error-message">{ errorMessage }</span>
    </div>
  )
}

export default FormInput