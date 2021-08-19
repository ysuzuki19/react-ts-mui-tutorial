import React, { useState } from 'react';
import { Button, Box } from '@material-ui/core';

const App = () => {
  const [clicked, setClicked] = useState<boolean>(false); // state in react component

  return (
    <>
      <Box m={2} p={2}>
        <Button color="primary" onClick={() => setClicked(true)}>
          My Button
        </Button>
      </Box>
      {clicked ? (
        <div>my button is clicked</div>
      ) : (
        <div>my button is not clicked yet.</div>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={() => setClicked(false)}
      >
        reset
      </Button>
      <Button color="secondary">secondary</Button>
      <Button variant="outlined" color="secondary">
        outlined
      </Button>
    </>
  );
};

export default App;
