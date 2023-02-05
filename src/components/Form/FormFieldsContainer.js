import styled from "styled-components";

export const FormFieldsContainer = styled.div`
    width: 100%;
    --height: 75px;
    background-color: #FFFFFF;
    

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    align-items: center;
    align-content: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';

    color: #999999;

    margin-top: 12px;
    padding-top: 20px;
    padding-bottom: 30px;

    input {
        border: 1px solid #999999;
        border-radius: 22px;
        min-width: 350px;
        margin-right: 12px;
        margin-left: 12px;
        width: 67%;
        background: transparent;
        font-size: 18px;
        padding: 10px;
        color: #999999;
      
        margin-top: 12px;
    }
        
`