import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Container } from './App.styled';
import { Link, Typography } from '@mui/material';

export const Layout = () => {
  return (
    <Container>
      {/*  <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}> */}
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/Victoria-Fedkova">
        Victoria Fedkova
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
