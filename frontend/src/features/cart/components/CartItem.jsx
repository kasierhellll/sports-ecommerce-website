import {
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  TextField
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useDispatch } from 'react-redux'
import { deleteCartItemByIdAsync, updateCartItemByIdAsync } from '../CartSlice'
import { Link } from 'react-router-dom'

export const CartItem = ({
  id,
  thumbnail,
  title,
  brand,
  price,
  quantity,
  stockQuantity,
  productId
}) => {
  const dispatch = useDispatch()
  const theme = useTheme()

  const is900 = useMediaQuery(theme.breakpoints.down(900))
  const is480 = useMediaQuery(theme.breakpoints.down(480))
  const is552 = useMediaQuery(theme.breakpoints.down(552))

  // ✅ STATE LOCAL ĐỂ GÕ
  const [localQty, setLocalQty] = useState(quantity)

  // ✅ SYNC KHI REDUX UPDATE
  useEffect(() => {
    setLocalQty(quantity)
  }, [quantity])

  // ➕
  const handleAddQty = () => {
    if (quantity < stockQuantity) {
      dispatch(updateCartItemByIdAsync({ _id: id, quantity: quantity + 1 }))
    }
  }

  // ➖
  const handleRemoveQty = () => {
    if (quantity === 1) {
      dispatch(deleteCartItemByIdAsync(id))
    } else {
      dispatch(updateCartItemByIdAsync({ _id: id, quantity: quantity - 1 }))
    }
  }

  // ✏️ GÕ SỐ (KHÔNG DISPATCH)
  const handleChangeQty = (e) => {
    setLocalQty(e.target.value)
  }

  // ✅ UPDATE KHI RỜI INPUT
  const handleBlurQty = () => {
    let value = Number(localQty)

    if (isNaN(value) || value < 1) value = 1
    if (value > stockQuantity) value = stockQuantity

    dispatch(updateCartItemByIdAsync({ _id: id, quantity: value }))
  }

  const handleProductRemove = () => {
    dispatch(deleteCartItemByIdAsync(id))
  }

  return (
    <Stack
      bgcolor="white"
      component={is900 ? 'div' : Paper}
      p={is900 ? 0 : 2}
      elevation={1}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {/* IMAGE + INFO */}
      <Stack flexDirection="row" alignItems="center" columnGap={2} flexWrap="wrap">
        <Stack
          width={is552 ? 'auto' : 200}
          height={is552 ? 'auto' : 200}
          component={Link}
          to={`/product-details/${productId}`}
        >
          <img
            src={thumbnail}
            alt={title}
            style={{
              width: '100%',
              height: is552 ? 'auto' : '100%',
              objectFit: 'contain'
            }}
          />
        </Stack>

        <Stack>
          <Typography
            component={Link}
            to={`/product-details/${productId}`}
            sx={{ textDecoration: 'none', color: theme.palette.primary.main }}
            variant="h6"
          >
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Thương hiệu: {brand}
          </Typography>

          <Typography mt={1} fontWeight={500}>
            Số lượng
          </Typography>

          {/* ✅ CHỈNH TRỰC TIẾP */}
          <Stack flexDirection="row" alignItems="center" columnGap={1}>
            <IconButton onClick={handleRemoveQty}>
              <RemoveIcon fontSize="small" />
            </IconButton>

            <TextField
              type="number"
              size="small"
              value={localQty}
              onChange={handleChangeQty}
              onBlur={handleBlurQty}
              inputProps={{
                min: 1,
                max: stockQuantity,
                style: { textAlign: 'center', width: 60 }
              }}
            />

            <IconButton
              onClick={handleAddQty}
              disabled={quantity >= stockQuantity}
            >
              <AddIcon fontSize="small" />
            </IconButton>
          </Stack>

          <Typography variant="caption" color="text.secondary">
            Tồn kho: {stockQuantity}
          </Typography>
        </Stack>
      </Stack>

      {/* PRICE + REMOVE */}
      <Stack
        justifyContent="space-evenly"
        alignItems="flex-end"
        rowGap="1rem"
      >
        <Typography variant="body2">
          Giá: {price.toLocaleString('vi-VN')} ₫
        </Typography>

        <Button
          size={is480 ? 'small' : 'medium'}
          onClick={handleProductRemove}
          variant="contained"
          color="error"
        >
          Xoá
        </Button>
      </Stack>
    </Stack>
  )
}
