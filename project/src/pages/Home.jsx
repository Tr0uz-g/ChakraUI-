import React from 'react'
import { ChakraProvider, Heading, Text, Container, Image } from '@chakra-ui/react';

export default function Home() {

  const containerStyles = {
    backgroundImage: 'url("pexels-antoinette-hürlimann-12857579.jpg")',
    backgroundSize: 'cover', // Puedes ajustar esto según tus necesidades
    backgroundPosition: 'center', // Puedes ajustar esto según tus necesidades
    minHeight: '100vh', // Esto asegura que el fondo cubra al menos toda la altura de la ventana
    // Otros estilos de Container si es necesario
  };    

    return (
        <Container style={containerStyles}
        >
          <Heading
            my="10px"
            p="10px"
          >
          Welcome
          </Heading>
          <Text
          ml="30px"
            >
            This is my proyect with React and its libraries
          </Text>
        </Container>
    )
  }


