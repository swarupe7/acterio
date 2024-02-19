import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/joy/CircularProgress';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';

function Layout({ setDpost, searchQuery }) {
  const [loading, setLoading] = useState(true);
  const [datax, setDatax] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/posts');
      const data = await response.json();
      setDatax(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [searchQuery]);

  useEffect(() => {
    if (datax.posts) {
      const newFilteredData = datax.posts.filter((data) => {
        const titleMatch = data.title.toLowerCase().includes(searchQuery.toLowerCase());
        const bodyMatch = data.body.toLowerCase().includes(searchQuery.toLowerCase());
        return titleMatch || bodyMatch;
      });
      setFilteredData(newFilteredData);
      
    }
  }, [datax.posts, searchQuery]);


  return (
    <>
      {!loading ? (
        <div style={{ marginLeft: '8%', marginRight: '8%' }}>
          <Grid container spacing={3}>
            {filteredData.map((data, index) => (
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
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <CircularProgress size="md" variant="plain" />
      )}
    </>
  );
}

export default Layout;
