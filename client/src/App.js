import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

const App = () => {
    return (
        <Container maxWidth='lg'>
            <AppBar position="static" color="inherit">
                <Typography variant='h2' align='center'>Memories</Typography>
                <img src='https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI' height="60"></img>
                
            </AppBar>
        </Container>
    );
}

export default App;