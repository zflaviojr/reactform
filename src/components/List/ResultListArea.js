import { ResultListArea } from "./styles";

const ResultList = ({
    data, 
    type: ItemComponent,
}) => {
    
    return (
        <>
        {data.map((item, i) => (
            <ItemComponent key={i} data={item} />
        ))}
        </>
    );
  }
  
export default ResultList;
  