import {
  AppBar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { FavoriteBorder, Favorite as FavoriteIcon } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { CircularProgress } from '@mui/joy';

const Page = ({ dpost, setFav, fav }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (dpost === undefined) {
      setLoading(true);
    }
  }, [dpost]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/posts/"
            style={{ color: 'white', flex: 1, alignItems: 'center' }}
          >
            ACTERIO
          </Typography>
        </Toolbar>
      </AppBar>

      <br />

      {loading ? (

<>

<CircularProgress size="md" variant="plain" />
<br />
<h2 style={{color:'white'}}>GO to Back</h2>
</>
        
      ) : ( 

        <div style={{ marginLeft: '3%', marginRight: '3%' }}>
          <Container>
            <Card sx={{ mixWidth: 345, width: '100%' }}>
              <CardMedia
                component="img"
                alt=""
                height="140"
                image={`https://source.unsplash.com/random/1450x140?sig=${Math.random()}` || `https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg`}
              />

              <CardActionArea>
                <CardActions style={{ position: 'absolute', top: 0, right: 0 }}>
                  <Button
                    style={{ color: 'red' }}
                    startIcon={<FavoriteIcon />}
                    onClick={() => setFav([...fav, dpost])}
                  />
                </CardActions>
                <CardActions style={{ position: 'absolute', top: 0, left: 0 }}>
                  <Button style={{ color: 'blue' }} startIcon={<ThumbUpIcon />}>
                    {dpost.reactions}
                  </Button>
                </CardActions>
                <br />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {dpost.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {dpost.body}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                {dpost.tags.map((tag, index) => (
                  <Chip key={index} label={tag} />
                ))}
              </CardActions>
            </Card>
          </Container>
        </div>
        
      )}
    </Box>
  );
};

export default Page;
