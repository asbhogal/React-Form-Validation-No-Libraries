const FormInput = (props) => {

  const { id, label, onChange, ...inputProps } = props;

  return (
    
    <div className="form-input">
        <label>{ label }</label>
        <input
            { ...inputProps }
            onChange={ onChange }
            />
    </div>
  )
}

export default FormInput