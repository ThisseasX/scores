import React from 'react';
import { Box, Grid } from '@material-ui/core';

import {
  Safari1,
  Safari2,
  Safari3,
  Radio1,
  Radio2,
  PoliceDepartment,
  Photo,
  Total,
} from 'components';

const App = () => (
  <Box
    display={'flex'}
    flexDirection={'column'}
    alignItems={'center'}
    pt={4}
    clone
  >
    <Grid direction={'column'} container spacing={4}>
      <Safari1 />

      <Grid item>
        <Radio1 />
      </Grid>

      <Safari2 />

      <Grid item>
        <Radio2 />
      </Grid>

      <Grid item>
        <PoliceDepartment />
      </Grid>

      <Grid item>
        <Safari3 />
      </Grid>

      <Grid item>
        <Photo />
      </Grid>

      <Grid item>
        <Total />
      </Grid>
    </Grid>
  </Box>
);

export default App;
