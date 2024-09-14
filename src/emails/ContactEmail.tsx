import React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text } from '@react-email/components';
import { NAME, ptSerif } from '../lib/constants'; // Import ptSerif

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactEmail: React.FC<ContactEmailProps> = ({ name, email, message }) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission</Preview>
    <Body style={{ fontFamily: ptSerif.style.fontFamily, backgroundColor: '#f4f1e8', padding: '20px' }}>
      <Container style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', maxWidth: '600px', margin: '0 auto' }}>
        <Heading style={{ fontSize: '24px', marginBottom: '20px', color: '#1a1a1a' }}>
          {NAME}, someone contacted you from your portfolio website!
        </Heading>
        <Text style={{ fontSize: '16px', marginBottom: '10px', color: '#4a4a4a' }}>
          <strong>Name:</strong> {name || 'N/A'}
        </Text>
        <Text style={{ fontSize: '16px', marginBottom: '10px', color: '#4a4a4a' }}>
          <strong>Email:</strong> {email}
        </Text>
        <Text style={{ fontSize: '16px', marginBottom: '10px', color: '#2c2c2c' }}>
          {message}
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactEmail;
