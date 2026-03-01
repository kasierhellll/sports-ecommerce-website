import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton, Stack, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const BackHeader = ({ title }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    // Nếu location.state.from tồn tại, quay về đúng page trước
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate(-1); // fallback quay lại history
    }
  };

  return (
    <Stack
      alignSelf="flex-start"
      flexDirection="row"
      alignItems="center"
      columnGap={1}
    >
      <motion.div whileHover={{ x: -5 }}>
        <IconButton onClick={handleBack}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
      </motion.div>

      <Typography variant="h4" fontWeight={500}>
        {title}
      </Typography>
    </Stack>
  );
};

export default BackHeader;
