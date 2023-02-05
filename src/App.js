import './App.css';
import './global';
import './components/Form/style.css';

import { FormFieldsContainer } from './components/Form/FormFieldsContainer';
import { InputAreaContainer } from "./components/InputArea/styles";
import InputText from './components/InputText/InputText';
import Select from './components/Select/Select';
import { useForm } from "react-hook-form";

function App() {

  const tiposServicos = ["Manutenção de Equipamento", "Realização de Serviço", "Compra"];

  const {control, handleSubmit} = useForm();

  
  const onSubmit = data => {
    console.log(data);
    alert(JSON.stringify(data));
  }

  return (
    <div className="App">
      <div className="formContainer">
        <header>O que você precisa hoje?</header>
        <main>
          <InputAreaContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormFieldsContainer>
                {/* <InputText name="inputDescricao" label="Descrição" control={control} placeholder="teste" errorMessage={null} {...register("inputDescricao")} /> SEM REGISTER!*/} 
                <InputText name="inputDescricao" label="Descrição" control={control} placeholder="teste" errorMessage={null} />
                <Select name="inputTipoServico" label="Tipo de Serviço" values={tiposServicos} control={control} errorMessage={null} />
                <input type="submit" />
              </FormFieldsContainer>
            </form>
          </InputAreaContainer>
        </main>
        <footer/>
      </div>
    </div>
  );
}

export default App;
