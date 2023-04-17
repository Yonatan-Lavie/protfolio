import styled from 'styled-components';
import { RegularButton } from '../../theme/GlobalStyle';

export const ContactMain = styled.div`
  padding: ${({ theme }) => theme.padding};
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.lighter};
`;

export const MapContainer = styled.div`
  flex: 0 0 40%;
  background-color: black;
`;

export const MapFrame = styled.iframe`
  height: 100%;
  width: 100%;
  opacity: 0.7;
  transition-property: opacity;
  transition-duration: 1.2s;
  transition-delay: 0.2s;
  &:hover {
    opacity: 1;
  }
`;

export const FormContainer = styled.form`
  flex: 0 0 40%;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

export const FormTitle = styled.h2`
  padding: 30px 0 10px 0;
  text-align: center;
`;
export const FormSubtitle = styled.p`
  padding: 10px 0 30px 0;
  text-align: left;
`;

export const FormLine = styled.div`
  padding: 10px;
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  height: 30px;
  flex: 0 0 20%;
  display: flex;
  align-items: center;
`;

export const TextInput = styled.input`
  flex: 0 0 70%;
  font-size: 12pt;
  padding-left: 5px;
  padding-right: 5px;
`;
export const TextArea = styled.textarea`
  flex: 0 0 70%;
  resize: none;
  font-size: 12pt;
  padding-left: 5px;
  padding-right: 5px;
`;

export const SubmitButton = styled(RegularButton).attrs(() => ({
  type: 'submit',
}))`
  margin: 0 10px 0 10px;

  align-self: stretch;
  border-radius: 0px;
`;
