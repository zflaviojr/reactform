import { Controller } from "react-hook-form";
import { SelectContainer } from "./styles";
import { ErrorText } from "../Form/FormFieldsContainer";

const Select = ({name, label, values, control, errorMessage, ...rest}) => {
    return (
      <>
        <label htmlFor='{name}'>{label}</label>
        {/* <SelectContainer id={name} name={name}>
            {values.map(option => {
                return <option key={option} value="{option}">{option}</option>
            })}
        </SelectContainer> */}

        <Controller
          name={name}
          render={
            ( {field} ) =>
            <SelectContainer id={name} name={name} {...field} {...rest}>
              {values.map(option => (
                <option key={option.id} value={option.id}>{option.descricao}</option>
              ))}
            </SelectContainer>
          }
          control={control}
          
          /* render={( {field} ) => <input alt="Teste" id={name} type="text"  {...field} {...rest} />} */
        />
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
      </>
    );
  }
  
export default Select;
  