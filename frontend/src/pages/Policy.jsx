import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReplayIcon from "@mui/icons-material/Replay";
import SecurityIcon from "@mui/icons-material/Security";
import PaymentIcon from "@mui/icons-material/Payment";
import { Navbar } from "../features/navigation/components/Navbar";
import { Footer } from "../features/footer/Footer";
import BackHeader from "../components/BackHeader";

const policies = [
  {
    icon: <ReplayIcon sx={{ fontSize: 40 }} color="primary" />,
    title: "Chính sách đổi trả",
    desc: "Hỗ trợ đổi trả sản phẩm trong vòng 7 ngày nếu có lỗi từ nhà sản xuất hoặc không đúng mô tả.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} color="primary" />,
    title: "Bảo hành chính hãng",
    desc: "Tất cả sản phẩm đều được bảo hành chính hãng theo chính sách của nhà cung cấp.",
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 40 }} color="primary" />,
    title: "Giao hàng toàn quốc",
    desc: "Giao hàng nhanh chóng trên toàn quốc, hỗ trợ kiểm tra hàng trước khi thanh toán.",
  },
  {
    icon: <PaymentIcon sx={{ fontSize: 40 }} color="primary" />,
    title: "Thanh toán an toàn",
    desc: "Hỗ trợ nhiều hình thức thanh toán: COD, chuyển khoản, ví điện tử, thẻ ngân hàng.",
  },
];

const Policy = () => {
  return (
    <>
      {/* 🔹 Navbar */}
      <Navbar />

      {/* 🔹 Banner */}
      <Box
        sx={{
          height: 300,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1556745757-8d76bdb6984b)",
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
          sx={{ bgcolor: "rgba(0,0,0,0.55)", p: 2, borderRadius: 2 }}
        >
          Chính sách cửa hàng
        </Typography>
      </Box>

      {/* 🔹 Nội dung */}
      <Box sx={{ maxWidth: 1100, mx: "auto", p: 2 }}>
        <BackHeader title="Quay về trang chủ" to="/" />

        <Typography
          variant="h4"
          fontWeight={400}
          mb={3}
          sx={{ textAlign: "center" }}
        >
          Chính sách & Quy định
        </Typography>


        <Grid container spacing={4}>
          {policies.map((policy, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  height: "100%",
                  p: 3,
                  borderRadius: 3,
                  textAlign: "center",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <Stack alignItems="center" spacing={2}>
                  {policy.icon}
                  <Typography variant="h6" fontWeight={600}>
                    {policy.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {policy.desc}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 🔹 Footer */}
      <Footer />
    </>
  );
};

export default Policy;
