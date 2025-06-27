import React, { useState } from 'react';
import { Button, TextField, Paper, Typography } from '@mui/material';
import logAction from './middleware/loggingMiddleware';

function UrlShortener() {
  const [urls, setUrls] = useState([{ original: '', shortcode: '', expiry: 30 }]);

  const handleSubmit = (index) => {
    logAction('URL_SUBMISSION', { url: urls[index] });
    alert("URL submitted! Check browser console for log.");
  };

  return (
    <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
      <Typography variant="h4" gutterBottom>
        URL Shortener
      </Typography>
      <TextField
        fullWidth
        label="Enter Long URL"
        variant="outlined"
        style={{ marginBottom: 15 }}
      />
      <Button 
        variant="contained" 
        color="primary"
        onClick={() => handleSubmit(0)}
      >
        Shorten URL
      </Button>
    </Paper>
  );
}

export default UrlShortener;