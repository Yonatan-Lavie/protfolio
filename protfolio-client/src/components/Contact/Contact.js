import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContactData } from '../../redux/contact/contactSlice';
import { selectLoadingStatus, selectData } from '../../redux/contact/selectors';
import {
  ContactMain,
  MapContainer,
  MapFrame,
  FormContainer,
  FormTitle,
  FormSubtitle,
  FormLine,
  Label,
  TextInput,
  TextArea,
  SubmitButton,
} from './Contact.elements';

const Contact = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchContactData());
  }, []);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message }),
    })
      .then(() => alert('Message sent!'))
      .catch((error) => alert(error));
  };
  return (
    <ContactMain id="#Contact">
      <MapContainer>
        <MapFrame src={loading === 'fulfilled' && data.mylocation} />
      </MapContainer>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>
          {loading === 'rejected' && 'loading failed'}
          {loading === 'pending' && 'loading in progress'}
          {loading === 'fulfilled' && data.title}
        </FormTitle>
        <FormSubtitle>{loading === 'fulfilled' && data.subtitle}</FormSubtitle>
        <FormLine>
          <Label>Name</Label>
          <TextInput type="text" onChange={(e) => setName(e.target.value)} />
        </FormLine>
        <FormLine>
          <Label>Email</Label>
          <TextInput type="email" onChange={(e) => setEmail(e.target.value)} />
        </FormLine>
        <FormLine>
          <Label>Message</Label>
          <TextArea rows="6" onChange={(e) => setMessage(e.target.value)} />
        </FormLine>
        <SubmitButton>Submit</SubmitButton>
      </FormContainer>
    </ContactMain>
  );
};

export default Contact;
