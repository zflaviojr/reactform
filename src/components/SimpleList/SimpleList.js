
const SimpleList = ({data}) => {
    return (
      <>
        <p>
          <b>Tipo:</b> {data.tipo}
        </p>
        <p>
          <b>Descrição:</b> {data.descricao}
        </p>
        <p>
          <b>Valor:</b> R$ {data.valor}
        </p>
      </>
    );
  }
  
export default SimpleList;
  