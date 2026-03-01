import React from "react";
import {
  Box,
  Grid,
  Typography,
  Chip,
  Stack
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Navbar } from "../features/navigation/components/Navbar";
import { Footer } from "../features/footer/Footer";
import BackHeader from "../components/BackHeader";

const newsList = [
  {
    title: "Tin thể thao mới nhất – VnExpress",
    desc: "Cập nhật nhanh các giải đấu bóng đá, tennis, cầu lông trong nước và quốc tế.",
    image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455",
    link: "https://vnexpress.net/the-thao",
    date: "20/12/2025",
    tags: ["Tin tức", "Thể thao"],
  },
  {
    title: "Giày thể thao chính hãng – Adidas",
    desc: "Những mẫu giày thể thao hot trend dành cho chạy bộ và gym.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    link: "https://www.adidas.com.vn/",
    date: "18/12/2025",
    tags: ["Thời trang", "Giày"],
  },
  {
    title: "Tin bóng đá hôm nay – 24h",
    desc: "Lịch thi đấu, kết quả, bảng xếp hạng các giải bóng đá lớn.",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
    link: "https://www.24h.com.vn/bong-da-c48.html",
    date: "15/12/2025",
    tags: ["Bóng đá"],
  },
];

const News = () => {
  return (
    <>
      {/* 🔹 Navbar */}
      <Navbar />

      {/* 🔹 Banner */}
      <Box
        sx={{
          height: 320,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438)",
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
          Tin tức & Sự kiện
        </Typography>
      </Box>

      {/* 🔹 Nội dung */}
      <Box sx={{ maxWidth: 1100, mx: "auto", p: 4 }}>
        <BackHeader title="Quay về trang chủ" to="/" />

        <Grid container spacing={4} mt={1}>
          {newsList.map((news, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    transition: "0.3s",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-6px)",
                    },
                  }}
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    style={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                    }}
                  />

                  <Box p={2}>
                    {/* 🔹 Date + External icon */}
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={1}
                    >
                      <Typography variant="caption" color="text.secondary">
                        📅 {news.date}
                      </Typography>
                      <OpenInNewIcon fontSize="small" color="action" />
                    </Stack>

                    {/* 🔹 Title */}
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {news.title}
                    </Typography>

                    {/* 🔹 Description */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      mb={1}
                    >
                      {news.desc}
                    </Typography>

                    {/* 🔹 Tags */}
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {news.tags.map((tag, i) => (
                        <Chip key={i} label={tag} size="small" />
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </a>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 🔹 Footer */}
      <Footer />
    </>
  );
};

export default News;
