const fs = require("fs");
const path = require("path");

exports.sendMail = async (receiverEmail, subject, body) => {
    const filePath = path.join(__dirname, "../otp-log.txt");

    // Lấy OTP từ body (vì body đang chứa <b>OTP</b>)
    const otpMatch = body.match(/\b\d{4}\b/);
    const otp = otpMatch ? otpMatch[0] : "UNKNOWN";

    const log = `
==============================
Email: ${receiverEmail}
OTP: ${otp}
Time: ${new Date().toLocaleString()}
==============================
`;

    fs.appendFileSync(filePath, log, "utf8");

    console.log("✅ OTP written to otp-log.txt");
};
