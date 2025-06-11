import { Box, Typography } from '@mui/material';
import { AppView } from '@/components';

const AboutView = () => {
  return (
    <AppView>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography paddingTop="50px" width="80%">
          Nguyen Huy Hoang is a frontend developer with experience in building user-friendly websites and applications.
          He specializes in web technologies such as HTML, CSS, JavaScript, and various frameworks, focusing on delivering clean and functional user interfaces.
        </Typography>
      </Box>
    </AppView>
  );
};

export default AboutView;
