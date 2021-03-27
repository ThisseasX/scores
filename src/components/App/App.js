import React from 'react';
import { Box } from '@material-ui/core';
import { Safari1 } from 'components';

const App = () => (
  <div>
    <div>
      <Box
        display={'flex'}
        justifyContent={'center'}
        pt={4}
      >
        <Safari1 />
      </Box>
    </div>
  </div>
);

export default App;
