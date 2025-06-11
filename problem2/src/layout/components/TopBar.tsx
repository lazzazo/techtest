import { FunctionComponent, ReactNode } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

interface Props {
  endNode?: ReactNode;
  startNode?: ReactNode;
  title?: string;
}

const TopBar: FunctionComponent<Props> = ({ endNode, startNode, title = '', ...restOfProps }) => {
  return (
    <AppBar
      component="div"
      sx={
        {
          boxShadow: 'none',
        }
      }
      {...restOfProps}
    >
      <Toolbar disableGutters sx={{ paddingX: 1 }}>
        {startNode}
        <Typography
          component="strong" 
          sx={{
            marginX: 1,
            flexGrow: 1,
            textAlign: 'center',
            whiteSpace: 'nowrap',
            color: 'white',
            fontWeight: 'bold'
          }}
          variant="h6"
        >
          {title}
        </Typography>
        {endNode}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
