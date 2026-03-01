import React, { useEffect } from 'react'
import { CartItem } from './CartItem'
import { Button, Chip, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { resetCartItemRemoveStatus, selectCartItemRemoveStatus, selectCartItems } from '../CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { SHIPPING, TAXES } from '../../../constants'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import BackHeader from '../../../components/BackHeader';

export const Cart = ({ checkout }) => {
    const items = useSelector(selectCartItems)

    const subtotal = items.reduce(
        (acc, item) => item.product.price * item.quantity + acc,
        0
    )
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

    const navigate = useNavigate()
    const theme = useTheme()
    const is900 = useMediaQuery(theme.breakpoints.down(900))

    const cartItemRemoveStatus = useSelector(selectCartItemRemoveStatus)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        })
    }, [])

    useEffect(() => {
        if (items.length === 0) {
            navigate('/')
        }
    }, [items, navigate])

    useEffect(() => {
        if (cartItemRemoveStatus === 'fulfilled') {
            toast.success('Đã xóa sản phẩm khỏi giỏ hàng')
        } else if (cartItemRemoveStatus === 'rejected') {
            toast.error('Xóa sản phẩm thất bại, vui lòng thử lại')
        }
    }, [cartItemRemoveStatus])

    useEffect(() => {
        return () => {
            dispatch(resetCartItemRemoveStatus())
        }
    }, [dispatch])

    return (
        <Stack justifyContent={'flex-start'} alignItems={'center'} mb={'5rem'}>
            
            <Stack
                width={is900 ? 'auto' : '50rem'}
                mt={'3rem'}
                paddingLeft={checkout ? 0 : 2}
                paddingRight={checkout ? 0 : 2}
                rowGap={4}
            >
             <BackHeader title="Giỏ hàng" to="/" />   
                {/* danh sách sản phẩm */}
                <Stack rowGap={2}>
                    {items &&
                        items.map((item) => (
                            <CartItem
                                key={item._id}
                                id={item._id}
                                title={item.product.title}
                                brand={item.product.brand.name}
                                category={item.product.category.name}
                                price={item.product.price}
                                quantity={item.quantity}
                                thumbnail={item.product.thumbnail}
                                stockQuantity={item.product.stockQuantity}
                                productId={item.product._id}
                            />
                        ))}
                </Stack>

                {/* tạm tính */}
                <Stack
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    {checkout ? (
                        <Stack rowGap={2} width={'100%'}>
                            <Stack flexDirection={'row'} justifyContent={'space-between'}>
                                <Typography>Tạm tính</Typography>
                                <Typography>{subtotal}₫</Typography>
                            </Stack>

                            <Stack flexDirection={'row'} justifyContent={'space-between'}>
                                <Typography>Phí vận chuyển</Typography>
                                <Typography>{SHIPPING}₫</Typography>
                            </Stack>

                            <Stack flexDirection={'row'} justifyContent={'space-between'}>
                                <Typography>Thuế</Typography>
                                <Typography>{TAXES}₫</Typography>
                            </Stack>

                            <hr />

                            <Stack flexDirection={'row'} justifyContent={'space-between'}>
                                <Typography fontWeight={600}>Tổng cộng</Typography>
                                <Typography fontWeight={600}>
                                    {subtotal + SHIPPING + TAXES}₫
                                </Typography>
                            </Stack>
                        </Stack>
                    ) : (
                        <>
                            <Stack>
                                <Typography variant="h6" fontWeight={500}>
                                    Tạm tính
                                </Typography>
                                <Typography>
                                    Tổng số sản phẩm: {totalItems}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color={'text.secondary'}
                                >
                                    Phí vận chuyển và thuế sẽ được tính khi thanh toán.
                                </Typography>
                            </Stack>

                            <Stack>
                                <Typography variant="h6" fontWeight={500}>
                                    {subtotal}₫
                                </Typography>
                            </Stack>
                        </>
                    )}
                </Stack>

                {/* thanh toán / tiếp tục mua sắm */}
                {!checkout && (
                    <Stack rowGap={'1rem'}>
                        <Button
                            variant="contained"
                            component={Link}
                            to="/checkout"
                        >
                            Tiến hành thanh toán
                        </Button>

                        <motion.div
                            style={{ alignSelf: 'center' }}
                            whileHover={{ y: 2 }}
                        >
                            <Chip
                                sx={{ cursor: 'pointer', borderRadius: '8px' }}
                                component={Link}
                                to="/"
                                label="Hoặc tiếp tục mua sắm"
                                variant="outlined"
                            />
                        </motion.div>
                    </Stack>
                )}
            </Stack>
        </Stack>
    )
}
