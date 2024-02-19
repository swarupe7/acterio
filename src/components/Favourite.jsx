
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/joy/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    AppBar,
    Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';

const Favourite = ({fav,setFav,setDpost}) => {
    const [loading, setLoading] = useState(true);
    const handleRemove = (postId) => {
        const updatedFavorites = fav.filter((post) => post.id !== postId);
        setFav(updatedFavorites);
     }
    useEffect(() =>{
        if(fav.length > 0){
            setLoading(false);
        }
    },[fav]);

 
 

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static">
    <Toolbar>
      
      
          
          
          <Typography variant="h6" noWrap   component={Link}   to= '/posts/' style={{ color: 'white', flex:1,alignItems:'center' }}  >
        ACTERIO
      </Typography>
         
        
    </Toolbar>
  </AppBar>

  <br />

  {!loading ? (
        <div style={{ marginLeft: '8%', marginRight: '8%' }}>
          <Grid container spacing={3}>
            {fav.map((data, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card sx={{ maxWidth: 345, width: '100%' }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {data.title.slice(0, 35) + '...'}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {data.body.slice(0, 95) + '...'}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      size="small"
                      color="primary"
                      component={Link}
                      to={{
                        pathname: `/posts/${data.id}`,
                        state: { postData: data },
                      }}
                      onClick={(e) => {
                        setDpost(data);
                      }}
                    >
                      Learn More
                    </Button>
                    <Button startIcon={<DeleteIcon color="red" />} onClick={() => handleRemove(data.id)}> 
                         </Button>  
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <>
        <CircularProgress size="md" variant="plain" />
        <br />
        <h2 style={{color:'white'}}>Go and Like few Posts..</h2>

        </>

      )}


  



</Box>





</>
  )
}

export default Favourite