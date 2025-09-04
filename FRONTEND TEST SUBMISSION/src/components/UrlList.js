import React from 'react';
import { List, ListItem, ListItemText, Typography, Card, CardContent, Box } from '@mui/material';

const UrlList = ({ urls }) => {
  return (
    <List>
      {urls.map((url, index) => (
        <Card key={index} sx={{ mb: 2, bgcolor: '#1e1e1e', color: '#e0e0e0' }}>
          <CardContent>
            <ListItem disablePadding>
              <ListItemText
                primary={
                  <Typography variant="h6" sx={{ color: '#ffffff' }}>
                    <a href={url.shortUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
                      {url.shortUrl}
                    </a>
                  </Typography>
                }
                secondary={
                  <React.Fragment>
                    <Typography component="span" variant="body2" color="text.primary" sx={{ color: '#bdbdbd' }}>
                      Original URL: {url.originalUrl}
                    </Typography>
                    <br />
                    <Typography component="span" variant="body2" color="text.secondary" sx={{ color: '#9e9e9e' }}>
                      Clicks: {url.clicks || 0}
                    </Typography>
                    <br />
                    <Typography component="span" variant="body2" color="text.secondary" sx={{ color: '#9e9e9e' }}>
                      Created: {new Date(url.createdAt).toLocaleString()} | Expires: {new Date(url.expiry).toLocaleString()}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" sx={{ color: '#ffffff' }}>Detailed Clicks:</Typography>
              {url.detailedClicks && url.detailedClicks.length > 0 ? (
                <List dense>
                  {url.detailedClicks.map((click, i) => (
                    <ListItem key={i}>
                      <ListItemText
                        primary={<Typography sx={{ color: '#bdbdbd' }}>{`Timestamp: ${new Date(click.timestamp).toLocaleString()}`}</Typography>}
                        secondary={<Typography sx={{ color: '#9e9e9e' }}>{`Source: ${click.source} | Location: ${click.location}`}</Typography>}
                      />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography variant="body2" color="text.secondary" sx={{ color: '#9e9e9e' }}>No detailed click data available.</Typography>
              )}
            </Box>
          </CardContent>
        </Card>
      ))}
    </List>
  );
};

export default UrlList;