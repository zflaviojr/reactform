import { Controller } from "react-hook-form";
import { ErrorText } from "../Form/FormFieldsContainer";

const InputText = ({name, label, control, errorMessage, ...rest}) => {
    return (
        <>
        <label htmlFor='{name}'>{label}</label>
{/*      <input id={name} type="text" />*/}
 
        <Controller 
          name={name}
          control={control}
          render={( {field} ) => <input id={name} type="text"  {...field} {...rest} />}
        />
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText>: null}
        </>
    );
  }
  
export default InputText;
  