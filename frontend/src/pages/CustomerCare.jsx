import React from "react";
import {
  Box,
  Stack,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import { Navbar } from "../features/navigation/components/Navbar";
import { Footer } from "../features/footer/Footer";
import BackHeader from "../components/BackHeader";

const CustomerCare = () => {
  return (
    <>
      {/* 🔹 Navbar */}
      <Navbar />

      {/* 🔹 Banner */}
      <Box
        sx={{
          height: "300px",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521791136064-7986c2920216)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            bgcolor: "rgba(0,0,0,0.55)",
            p: 2,
            borderRadius: 2,
          }}
        >
          Chăm sóc khách hàng
        </Typography>
      </Box>

      {/* 🔹 Nội dung */}
      <Box sx={{ maxWidth: "1000px", margin: "0 auto", p: 4 }}>
        <BackHeader title="Quay về trang chủ" to="/" />

        {/* 🔸 Tiêu đề */}
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          mb={4}
          sx={{
            position: "relative",
            "&::after": {
              content: '""',
              width: 90,
              height: 4,
              backgroundColor: "primary.main",
              display: "block",
              margin: "12px auto 0",
              borderRadius: 2,
            },
          }}
        >
          Trung tâm hỗ trợ Sportz
        </Typography>

        {/* 🔸 Thông tin liên hệ */}
        <Grid container spacing={4}>
          {/* Hotline */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                },
              }}
            >
              <Typography variant="h6" fontWeight={600} mb={1}>
                📞 Hotline
              </Typography>
              <Typography color="text.secondary">
                1900 8888
              </Typography>
            </Paper>
          </Grid>

          {/* Email */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                },
              }}
            >
              <Typography variant="h6" fontWeight={600} mb={1}>
                📧 Email hỗ trợ
              </Typography>
              <Typography color="text.secondary">
                support@sportz.vn
              </Typography>
            </Paper>
          </Grid>

          {/* Thời gian */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                },
              }}
            >
              <Typography variant="h6" fontWeight={600} mb={1}>
                ⏰ Thời gian làm việc
              </Typography>
              <Typography color="text.secondary">
                8:00 – 22:00 (T2 – CN)
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* 🔸 Ghi chú */}
        <Stack mt={5} spacing={1}>
          <Typography textAlign="center" color="text.secondary">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
          </Typography>
          <Typography textAlign="center" color="text.secondary">
            Mọi phản hồi của bạn giúp Sportz phục vụ tốt hơn ❤️
          </Typography>
        </Stack>
      </Box>

      {/* 🔹 Footer */}
      <Footer />
    </>
  );
};

export default CustomerCare;
