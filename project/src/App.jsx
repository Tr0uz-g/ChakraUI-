import React from 'react'
import { lazy, Suspense } from 'react'
import {BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Heading, Text, Container, Box, Flex } from '@chakra-ui/react';




function App() {

  const Home = lazy(() => import('./pages/Home'));
  const Contact = lazy(() => import('./pages/Contact'));
  const About = lazy(() => import('./pages/About'));
  const Register = lazy(() => import('./pages/Register'));
  const Task = lazy(() => import('./pages/TaskInterface'));

  return (
    
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Register' element={<Register />}/>
            <Route path='/task' element={<Task />}/>
          </Route>
        </Routes>
      </BrowserRouter>
 
    
    );
}

  function Layout() {
    return (
      <>
      <ChakraProvider >
      <Heading 
      my="1px" 
      p="20px"
      >
        <Box
        h="14vh"
        bg="blue.100"
        >
          <nav>
          <Flex 
          as="ul" 
          direction="row" 
          align="center"
          listStyleType="none"
          fontFamily="serif"
          fontSize="smaller"
          justify="space-evenly"
          top="30px"
          >
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/task'>Task</Link>
              </li>
              </Flex>
              <Flex
              justify="center"
              mt="2"
              bg="green"
              fontSize=".7em"
              h="45px"
              
              >
                <button>
                    <Link to='/register'>Register</Link>
                </button>
              </Flex>
            </nav>
          </Box>
        </Heading>
        </ChakraProvider>
        <Suspense fallback={<h2>Loding...</h2>}>
          <Outlet />
        </Suspense>
      </>
    )
  }

export default App
