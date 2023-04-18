const FormInput = (props) => {
  return (
    <div className="form-input">
        <label>{props.name}</label>
        <input
            name={ props.name }
            placeholder={ props.placeholder } 
            />
    </div>
  )
}

export default FormInput