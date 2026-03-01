import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllOrdersAsync,
  resetOrderUpdateStatus,
  selectOrderUpdateStatus,
  selectOrders,
  updateOrderByIdAsync
} from '../../order/OrderSlice'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import {
  Avatar,
  Button,
  Chip,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'

import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'

import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'
import { noOrdersAnimation } from '../../../assets/index'
import Lottie from 'lottie-react'

export const AdminOrders = () => {

  const dispatch = useDispatch()
  const orders = useSelector(selectOrders)
  const orderUpdateStatus = useSelector(selectOrderUpdateStatus)

  const [editIndex, setEditIndex] = useState(-1)

  const theme = useTheme()
  const is1620 = useMediaQuery(theme.breakpoints.down(1620))
  const is480 = useMediaQuery(theme.breakpoints.down(480))

  const { register, handleSubmit } = useForm()

  useEffect(() => {
    dispatch(getAllOrdersAsync())
  }, [dispatch])

  useEffect(() => {
    if (orderUpdateStatus === 'fulfilled') {
      toast.success("Cập nhật trạng thái đơn hàng thành công")
    } else if (orderUpdateStatus === 'rejected') {
      toast.error("Cập nhật trạng thái đơn hàng thất bại")
    }
  }, [orderUpdateStatus])

  useEffect(() => {
    return () => {
      dispatch(resetOrderUpdateStatus())
    }
  }, [dispatch])

  const handleUpdateOrder = (data) => {
    const update = { ...data, _id: orders[editIndex]._id }
    setEditIndex(-1)
    dispatch(updateOrderByIdAsync(update))
  }

  const editOptions = [
    'Chờ xử lý',
    'Đã xác nhận',
    'Đang giao hàng',
    'Đã giao',
    'Đã hủy'
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Chờ xử lý':
        return { bgcolor: '#dfc9f7', color: '#7c59a4' }
      case 'Đã xác nhận':
        return { bgcolor: '#feed80', color: '#927b1e' }
      case 'Đang giao hàng':
        return { bgcolor: '#AACCFF', color: '#4793AA' }
      case 'Đã giao':
        return { bgcolor: "#b3f5ca", color: "#548c6a" }
      case 'Đã hủy':
        return { bgcolor: "#fac0c0", color: '#cc6d72' }
      default:
        return {}
    }
  }

  return (
    <Stack justifyContent="center" alignItems="center">

      <Stack mt={5} mb={3} component="form" onSubmit={handleSubmit(handleUpdateOrder)}>

        {orders.length ? (

          <TableContainer sx={{ width: is1620 ? "95vw" : "auto" }} component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Mã đơn hàng</TableCell>
                  <TableCell>Sản phẩm</TableCell>
                  <TableCell align="right">Tổng tiền</TableCell>
                  <TableCell align="right">Địa chỉ giao hàng</TableCell>
                  <TableCell align="right">Hình thức thanh toán</TableCell>
                  <TableCell align="right">Ngày đặt</TableCell>
                  <TableCell align="right">Trạng thái</TableCell>
                  <TableCell align="right">Thao tác</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {orders.map((order, index) => (
                  <TableRow key={order._id}>

                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{order._id}</TableCell>

                    <TableCell>
                      {order.item.map((product) => (
                        <Stack key={product._id} direction="row" spacing={2} mt={1}>
                          <Avatar src={product.product.thumbnail} />
                          <Typography>{product.product.title}</Typography>
                        </Stack>
                      ))}
                    </TableCell>

                    <TableCell align="right">{order.total.toLocaleString()} ₫</TableCell>

                    {/* FIX LỖI ADDRESS */}
                    <TableCell align="right">
                      {order.address?.[0] ? (
                        <Stack>
                          <Typography>{order.address[0].street}</Typography>
                          <Typography>{order.address[0].city}</Typography>
                          <Typography>{order.address[0].state}</Typography>
                          <Typography>{order.address[0].postalCode}</Typography>
                        </Stack>
                      ) : (
                        <Typography color="error">Chưa có địa chỉ</Typography>
                      )}
                    </TableCell>

                    <TableCell align="right">{order.paymentMode}</TableCell>
                    <TableCell align="right">
                      {new Date(order.createdAt).toLocaleDateString('vi-VN')}
                    </TableCell>

                    <TableCell align="right">
                      {editIndex === index ? (
                        <FormControl fullWidth>
                          <InputLabel>Trạng thái</InputLabel>
                          <Select
                            defaultValue={order.status}
                            {...register('status', { required: true })}
                          >
                            {editOptions.map(option => (
                              <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      ) : (
                        <Chip label={order.status} sx={getStatusColor(order.status)} />
                      )}
                    </TableCell>

                    <TableCell align="right">
                      {editIndex === index ? (
                        <IconButton type="submit">
                          <CheckCircleOutlinedIcon />
                        </IconButton>
                      ) : (
                        <IconButton onClick={() => setEditIndex(index)}>
                          <EditOutlinedIcon />
                        </IconButton>
                      )}
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        ) : (
          <Stack width={is480 ? "auto" : "30rem"} alignItems="center">
            <Lottie animationData={noOrdersAnimation} />
            <Typography variant="h6">
              Hiện tại chưa có đơn hàng nào
            </Typography>
          </Stack>
        )}

      </Stack>
    </Stack>
  )
}
