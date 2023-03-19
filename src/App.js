import './App.css';
import './global';
import './components/Form/style.css';

import { FormFieldsContainer } from './components/Form/FormFieldsContainer';
import { InputAreaContainer } from "./components/InputArea/styles";
import InputText from './components/InputText/InputText';
import Select from './components/Select/Select';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { apiAxios } from './services/axios';
import * as yup from "yup";

import SimpleList from './components/SimpleList/SimpleList';
import ResultList from './components/List/ResultListArea';


function App() {

  const schema = yup.object({
    inputDescricao: yup.string().max(10, 'Use no máximo 100 caracteres na descrição').required('Campo obrigatório'),
    //inputTipoServico: yup.string().required('Selecione o tipo de produto/serviço desejado'), //yup.number().positive().integer().required(),
  }).required();
  
  const tiposServicos = [
    {id: "ManutencaoEquipamento", descricao: "Manutenção de Equipamento"}, 
    {id: "RealizacaoServico", descricao: "Realização de Serviço"}, 
    {id: "Compra", descricao: "Compra"}];

  const {control, handleSubmit, formState: {errors, isValid} } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const [ resultData, setResultData ] = useState(null);

  console.log(errors);
  console.log('ResultData ', resultData);
  
  
  const onSubmit =  async formData => {
    //console.log(formData);
    //alert(JSON.stringify(formData.inputTipoServico));
    try {
      console.log('FormData: ' + formData.inputTipoServico)
      
      const { data } = await apiAxios.get(`${formData.inputTipoServico}?descricao_like=${formData.inputDescricao}`);
      console.log( 'Retorno da API: ', data );

      if( data.length > 0 ){
        setResultData(data);
        console.log( 'JSON: ', JSON.stringify(resultData) );
      } else {
        alert('Nenhum item foi encontrado! Tente redefinindo os parâmetros da sua busca.');
      }

    } catch (error) {
      alert('Erro na requisição ' + error.errorMessage);
    }
  }

  return (
    <div className="App">
      <div className="formContainer">
        <header>What service do you need today?</header>
        <main>
          <InputAreaContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormFieldsContainer>
                {/* <InputText name="inputDescricao" label="Descrição" control={control} placeholder="teste" errorMessage={null} {...register("inputDescricao")} /> SEM REGISTER!*/} 
                <InputText name="inputDescricao" label="Descrição" control={control} placeholder="Descreva o que precisa aqui" errorMessage={errors?.inputDescricao?.message} />
                <Select name="inputTipoServico" label="Tipo de Serviço" values={tiposServicos} control={control} errorMessage={errors?.inputTipoServico?.message} />
                <input type="submit" />
              </FormFieldsContainer>
            </form>
            {resultData?.length ? (
              <ResultList data={resultData} type={SimpleList} />
            ) : null}
          </InputAreaContainer>
        </main>
        <footer/>
      </div>
    </div>
  );
}

export default App;
