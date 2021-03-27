import React from 'react';
import { Box, Grid } from '@material-ui/core';

import {
  Safari1,
  Safari2,
  Safari3,
  Radio1,
  Radio2,
  PoliceDepartment,
} from 'components';

const App = () => (
  <div>
    <div>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        pt={4}
        clone
      >
        <Grid direction={'column'} container spacing={4}>
          <Grid item>
            <Safari1 />
          </Grid>

          <Grid item>
            <Radio1 />
          </Grid>

          <Grid item>
            <Safari2 />
          </Grid>

          <Grid item>
            <Radio2 />
          </Grid>

          <Grid item>
            <PoliceDepartment />
          </Grid>

          <Grid item>
            <Safari3 />
          </Grid>
        </Grid>
      </Box>
    </div>
  </div>
);

export default App;
