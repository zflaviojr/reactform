import { Controller } from "react-hook-form";
import { SelectContainer } from "./styles";

const Select = ({name, label, values, control, errorMessage, ...rest}) => {
    return (
      <>
        {label}
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
                <option key={option} value={option}>{option}</option>
              ))}
            </SelectContainer>
          }
          control={control}
          
          /* render={( {field} ) => <input alt="Teste" id={name} type="text"  {...field} {...rest} />} */
        />
        {errorMessage ? <div color="#FF0000">errorMessage</div> : null}
      </>
    );
  }
  
export default Select;
  