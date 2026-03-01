import { Avatar, Button, Paper, Stack, Typography, useTheme, TextField, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserInfo } from '../UserSlice'
import {
  addAddressAsync,
  resetAddressAddStatus,
  resetAddressDeleteStatus,
  resetAddressUpdateStatus,
  selectAddressAddStatus,
  selectAddressDeleteStatus,
  selectAddressStatus,
  selectAddressUpdateStatus,
  selectAddresses
} from '../../address/AddressSlice'
import { Address } from '../../address/components/Address'
import { useForm } from 'react-hook-form'
import { LoadingButton } from '@mui/lab'
import { toast } from 'react-toastify'
import BackHeader from '../../../components/BackHeader';

export const UserProfile = () => {

  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm()
  const status = useSelector(selectAddressStatus)
  const userInfo = useSelector(selectUserInfo)
  const addresses = useSelector(selectAddresses)
  const theme = useTheme()
  const [addAddress, setAddAddress] = useState(false)

  const addressAddStatus = useSelector(selectAddressAddStatus)
  const addressUpdateStatus = useSelector(selectAddressUpdateStatus)
  const addressDeleteStatus = useSelector(selectAddressDeleteStatus)

  const is900 = useMediaQuery(theme.breakpoints.down(900))
  const is480 = useMediaQuery(theme.breakpoints.down(480))

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  useEffect(() => {
    if (addressAddStatus === 'fulfilled') {
      toast.success("Đã thêm địa chỉ mới")
    } else if (addressAddStatus === 'rejected') {
      toast.error("Thêm địa chỉ thất bại, vui lòng thử lại")
    }
  }, [addressAddStatus])

  useEffect(() => {
    if (addressUpdateStatus === 'fulfilled') {
      toast.success("Cập nhật địa chỉ thành công")
    } else if (addressUpdateStatus === 'rejected') {
      toast.error("Cập nhật địa chỉ thất bại")
    }
  }, [addressUpdateStatus])

  useEffect(() => {
    if (addressDeleteStatus === 'fulfilled') {
      toast.success("Đã xóa địa chỉ")
    } else if (addressDeleteStatus === 'rejected') {
      toast.error("Xóa địa chỉ thất bại")
    }
  }, [addressDeleteStatus])

  useEffect(() => {
    return () => {
      dispatch(resetAddressAddStatus())
      dispatch(resetAddressUpdateStatus())
      dispatch(resetAddressDeleteStatus())
    }
  }, [dispatch])

  const handleAddAddress = (data) => {
    const address = { ...data, user: userInfo._id }
    dispatch(addAddressAsync(address))
    setAddAddress(false)
    reset()
  }

  return (
    <Stack minHeight={'calc(100vh - 4rem)'} alignItems={'center'}>

      <Stack component={is480 ? '' : Paper} elevation={1} width={is900 ? '100%' : "50rem"} p={2} mt={is480 ? 0 : 5} rowGap={2}>
        <BackHeader to="/" />  
        {/* Thông tin người dùng */}
        <Stack
          bgcolor={theme.palette.primary.light}
          color={theme.palette.primary.main}
          p={2}
          rowGap={1}
          borderRadius={'.6rem'}
          alignItems={'center'}
        >
          <Avatar sx={{ width: 70, height: 70 }} />
          <Typography fontWeight={600}>{userInfo?.name}</Typography>
          <Typography>{userInfo?.email}</Typography>
        </Stack>

        {/* Quản lý địa chỉ */}
        <Stack alignItems={'center'} rowGap={3}>

          {/* Tiêu đề */}
          <Stack flexDirection={'row'} alignItems={'center'} columnGap={1}>
            <Typography variant='h6'>Quản lý địa chỉ giao hàng</Typography>
            <Button onClick={() => setAddAddress(true)} size={is480 ? 'small' : ''} variant='contained'>
              Thêm
            </Button>
          </Stack>

          {/* Form thêm địa chỉ */}
          {addAddress && (
            <Stack component={'form'} noValidate rowGap={2} onSubmit={handleSubmit(handleAddAddress)}>
                                <Stack>
                                    <Typography gutterBottom> Địa chỉ</Typography>
                                    <TextField placeholder='Ví dụ: Nhà, Công ty' {...register("type",{required:true})}/>
                                </Stack>
            
                                <Stack>
                                    <Typography gutterBottom>Đường / Phố</Typography>
                                    <TextField {...register("street",{required:true})}/>
                                </Stack>
            
                                <Stack>
                                    <Typography gutterBottom>Phường / Xã</Typography>
                                    <TextField {...register("ward",{required:true})}/>
                                </Stack>
            
                                <Stack>
                                    <Typography gutterBottom>Quận / Huyện</Typography>
                                    <TextField {...register("district",{required:true})}/>
                                </Stack>
            
                                <Stack>
                                    <Typography gutterBottom>Thành phố / Tỉnh</Typography>
                                    <TextField {...register("city",{required:true})}/>
                                </Stack>
            
                                <Stack>
                                    <Typography gutterBottom>Mã bưu điện</Typography>
                                    <TextField type='number' {...register("postalCode",{required:true})}/>
                                </Stack>
            
                                <Stack>
                                    <Typography gutterBottom>Số điện thoại</Typography>
                                    <TextField type='number' {...register("phoneNumber",{required:true})}/>
                                </Stack>
            
                                <Stack flexDirection={'row'} alignSelf={'flex-end'} columnGap={1}>
                                    <LoadingButton loading={status==='pending'} type='submit' variant='contained'>Thêm</LoadingButton>
                                    <Button color='error' variant='outlined' onClick={()=>reset()}>Đặt lại</Button>
                                </Stack>
                            </Stack>
          )}

          {/* Danh sách địa chỉ */}
          <Stack width={'100%'} rowGap={2}>
            {
              addresses.length > 0 ? (
                addresses.map(address => (
                  <Address key={address._id} {...address} id={address._id} />
                ))
              ) : (
                <Typography textAlign="center" variant="body2">
                  Bạn chưa thêm địa chỉ giao hàng nào
                </Typography>
              )
            }
          </Stack>

        </Stack>
      </Stack>
    </Stack>
  )
}
