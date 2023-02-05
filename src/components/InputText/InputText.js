import { Controller } from "react-hook-form";

const InputText = ({name, label, control, errorMessage, ...rest}) => {
    return (
        <>
        {label}
{/*      <input id={name} type="text" />*/}
 
        {console.log(control)}

        <Controller 
          name={name}
          control={control}
          render={( {field} ) => <input alt="Teste" id={name} type="text"  {...field} {...rest} />}
        />
        {errorMessage ? <div color="#FF0000">errorMessage</div> : null}
        </>
    );
  }
  
export default InputText;
  