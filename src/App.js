import UrlShortener from './UrlShortener';
import { CssBaseline, Container } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md">
      <CssBaseline />
      <UrlShortener />
    </Container>
  );
}

export default App;