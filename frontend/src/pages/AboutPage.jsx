import React from "react";
import { Footer } from "../features/footer/Footer";
import { Navbar } from "../features/navigation/components/Navbar";
import BackHeader from "../components/BackHeader";
const AboutPage = () => {
  return (
    <>
      {/* 🔹 Navbar nằm trên cùng */}
      <Navbar />

      <div style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
        <BackHeader title="Giới thiệu về cửa hàng" to="/" />
        
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Chào mừng bạn đến với <strong>Sportz</strong>!  
          Chúng tôi chuyên cung cấp các sản phẩm thể thao như quần áo, giày dép,
          bóng đá, bóng chuyền, phụ kiện cầu lông, pickleball và nhiều hơn nữa.  
          Cam kết hàng chính hãng – giá tốt – giao nhanh.
        </p>

        <img
          src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
          alt="Sportz"
          style={{ width: "100%", borderRadius: "12px", margin: "30px 0" }}
        />

        <h2 style={{ marginTop: "30px" }}>📌 Vị trí trên bản đồ</h2>

        <div style={{ width: "100%", height: "400px", marginTop: "10px" }}>
          <iframe
            title="google-map"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "12px" }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.50987089927!2d106.700423!3d10.772176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzE5LjgiTiAxMDbCsDQyJzAwLjQiRQ!5e0!3m2!1svi!2s!4v1700000000000"
          ></iframe>
        </div>
      </div>

      {/* 🔹 Footer dưới cùng */}
      <Footer />
    </>
  );
};

export default AboutPage;
