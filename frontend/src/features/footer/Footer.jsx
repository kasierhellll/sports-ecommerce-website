import { Box, IconButton, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Stack } from '@mui/material'
import React from 'react'
import { QRCodePng, appStorePng, googlePlayPng ,facebookPng,instagramPng,twitterPng,linkedinPng} from '../../assets'
import SendIcon from '@mui/icons-material/Send'
import { MotionConfig, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Footer = () => {

    const theme = useTheme()
    const is700 = useMediaQuery(theme.breakpoints.down(700))

    const labelStyles = {
        fontWeight: 300,
        cursor: 'pointer'
    }

    return (
        <Stack
            sx={{
                backgroundColor: theme.palette.primary.main,
                paddingTop: "3rem",
                paddingLeft: is700 ? "1rem" : "3rem",
                paddingRight: is700 ? "1rem" : "3rem",
                paddingBottom: "1.5rem",
                rowGap: "5rem",
                color: theme.palette.primary.light,
                justifyContent: "space-around"
            }}
        >

            {/* upper */}
            <Stack
                flexDirection={'row'}
                rowGap={'1rem'}
                justifyContent={is700 ? "" : 'space-around'}
                flexWrap={'wrap'}
            >

                {/* Thương hiệu & đăng ký */}
                <Stack rowGap={'1rem'} padding={'1rem'}>
                    <Typography variant='h6' fontSize={'1.5rem'}>
                        SPORTZ
                    </Typography>
                    <Typography variant='h6'>
                        Đăng ký nhận tin
                    </Typography>
                    <Typography sx={labelStyles}>
                        Giảm 10% cho đơn hàng đầu tiên
                    </Typography>
                    <TextField
                        placeholder='Nhập email của bạn'
                        sx={{ border: '1px solid white', borderRadius: "6px" }}
                        InputProps={{
                            endAdornment: (
                                <IconButton>
                                    <SendIcon sx={{ color: theme.palette.primary.light }} />
                                </IconButton>
                            ),
                            style: { color: "whitesmoke" }
                        }}
                    />
                </Stack>

                {/* Hỗ trợ */}
                <Stack rowGap={'1rem'} padding={'1rem'}>
                    <Typography variant='h6'>
                        Hỗ trợ khách hàng
                    </Typography>
                    <Typography sx={labelStyles}>
                        11 Đường Main, Quận 1, TP. Hồ Chí Minh
                    </Typography>
                    <Typography 
                    component={Link}
                        to="/Customer-Care"
                        sx={{
                            ...labelStyles,
                            color: 'white',
                            textDecoration: 'none',
                            '&:visited': { color: 'white' },
                            '&:hover': { color: 'white', textDecoration: 'underline' }
                        }}
                        >
                        support@sportz.vn
                    </Typography>
                    <Typography sx={labelStyles}>
                        +84 98 8888 999
                    </Typography>
                </Stack>

                {/* Tài khoản */}
                <Stack rowGap={'1rem'} padding={'1rem'}>
                    <Typography variant='h6'>
                        Tài khoản
                    </Typography>
                    <Typography
                        component={Link}
                        to="/profile"
                        sx={{
                            ...labelStyles,
                            color: 'white',
                            textDecoration: 'none',
                            '&:visited': {
                            color: 'white'
                            },
                            '&:hover': {
                            color: 'white',
                            textDecoration: 'underline'
                            }
                        }}
                        >
                        Tài khoản của tôi
                    </Typography>
                    <Typography
                        component={Link}
                        to="/cart"
                        sx={{
                            ...labelStyles,
                            color: 'white',
                            textDecoration: 'none',
                            '&:visited': { color: 'white' },
                            '&:hover': { color: 'white', textDecoration: 'underline' }
                        }}
                        >
                        Giỏ hàng
                    </Typography>
                    <Typography
                        component={Link}
                        to="/wishlist"
                        sx={{
                            ...labelStyles,
                            color: 'white',
                            textDecoration: 'none',
                            '&:visited': { color: 'white' },
                            '&:hover': { color: 'white', textDecoration: 'underline' }
                        }}
                        >
                        Yêu thích
                    </Typography>
                    <Typography 
                    component={Link}
                        to="/"
                        sx={{
                            ...labelStyles,
                            color: 'white',
                            textDecoration: 'none',
                            '&:visited': { color: 'white' },
                            '&:hover': { color: 'white', textDecoration: 'underline' }
                        }}
                        >
                        Cửa hàng
                    </Typography>
                </Stack>
                {/* Liên kết nhanh */}
                <Stack rowGap={'1rem'} padding={'1rem'}>
                    <Typography variant='h6'>
                        Liên kết nhanh
                    </Typography>
                    <Typography
                        component={Link}
                        to="/Policy"
                        sx={{
                            ...labelStyles,
                            color: 'white',
                            textDecoration: 'none',
                            '&:visited': { color: 'white' },
                            '&:hover': { color: 'white', textDecoration: 'underline' }
                        }}
                        >
                        Chính sách bảo mật
                    </Typography>
                    <Typography 
                    component={Link}
                        to="/Policy"
                        sx={{
                            ...labelStyles,
                            color: 'white',
                            textDecoration: 'none',
                            '&:visited': { color: 'white' },
                            '&:hover': { color: 'white', textDecoration: 'underline' }
                        }}
                        >
                        Điều khoản sử dụng
                    </Typography>
                    <Typography 
                    component={Link}
                        to="/Customer-Care"
                        sx={{
                            ...labelStyles,
                            color: 'white',
                            textDecoration: 'none',
                            '&:visited': { color: 'white' },
                            '&:hover': { color: 'white', textDecoration: 'underline' }
                        }}
                        >
                        Câu hỏi thường gặp
                    </Typography>
                    <Typography
                        component={Link}
                        to="/Customer-Care"
                        sx={{
                            ...labelStyles,
                            color: 'white',
                            textDecoration: 'none',
                            '&:visited': { color: 'white' },
                            '&:hover': { color: 'white', textDecoration: 'underline' }
                        }}
                        >
                        Liên hệ
                    </Typography>
                </Stack>

                {/* Tải app */}
                <Stack rowGap={'1rem'} padding={'1rem'}>
                    <Typography variant='h6'>
                        Tải ứng dụng
                    </Typography>
                    <Typography
                        sx={{ ...labelStyles, color: "graytext", fontWeight: 500 }}
                    >
                        Giảm ngay 70.000₫ cho người dùng mới
                    </Typography>

                    <Stack flexDirection={'row'} columnGap={'.5rem'}>
                        <Box width={'100px'} height={"100px"}>
                            <img
                                src={QRCodePng}
                                height={'100%'}
                                width={'100%'}
                                style={{ objectFit: 'contain' }}
                                alt="QR Code"
                            />
                        </Box>

                        <Stack justifyContent={'space-around'}>
                            <img
                                style={{ width: "100%", cursor: "pointer" }}
                                src={googlePlayPng}
                                alt="Google Play"
                                onClick={() =>
                                    window.open("https://play.google.com/store", "_blank")
                                }
                                />

                                <img
                                style={{ width: "100%", cursor: "pointer" }}
                                src={appStorePng}
                                alt="App Store"
                                onClick={() =>
                                    window.open("https://www.apple.com/app-store/", "_blank")
                                }
                            />
                        </Stack>
                    </Stack>

                    <Stack mt={0.6} flexDirection={'row'} columnGap={'2rem'}>
                        <MotionConfig whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                            <motion.img
                                style={{ cursor: "pointer" }}
                                src={facebookPng}
                                alt="Facebook"
                                onClick={() => window.open("https://www.facebook.com", "_blank")}
                            />

                            <motion.img
                                style={{ cursor: "pointer" }}
                                src={twitterPng}
                                alt="Twitter"
                                onClick={() => window.open("https://twitter.com", "_blank")}
                            />

                            <motion.img
                                style={{ cursor: "pointer" }}
                                src={instagramPng}
                                alt="Instagram"
                                onClick={() => window.open("https://www.instagram.com", "_blank")}
                            />

                            <motion.img
                                style={{ cursor: "pointer" }}
                                src={linkedinPng}
                                alt="LinkedIn"
                                onClick={() => window.open("https://www.linkedin.com", "_blank")}
                            />
                        </MotionConfig>
                    </Stack>
                </Stack>

            </Stack>

            {/* lower */}
            <Stack alignSelf={"center"}>
                <Typography color={'GrayText'}>
                    © SPORTZ {new Date().getFullYear()}. Bản quyền thuộc về SPORTZ
                </Typography>
            </Stack>

        </Stack>
    )
}
