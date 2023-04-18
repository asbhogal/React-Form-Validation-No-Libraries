const FormInput = (props) => {
  return (
    <div className="form-input">
        <label>{props.name}</label>
        <input
            ref={ props.refer }
            placeholder={ props.placeholder } 
            />
    </div>
  )
}

export default FormInput