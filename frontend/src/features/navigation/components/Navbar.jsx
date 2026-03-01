import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { Badge, Button, Chip, Stack, useMediaQuery, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from '../../user/UserSlice';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { selectCartItems } from '../../cart/CartSlice';
import { selectLoggedInUser } from '../../auth/AuthSlice';
import { selectWishlistItems } from '../../wishlist/WishlistSlice';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TuneIcon from '@mui/icons-material/Tune';
import { selectProductIsFilterOpen, toggleFilters } from '../../products/ProductSlice';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useLocation } from 'react-router-dom';
import { useState } from "react";


export const Navbar=({isProductList=false})=> {
  const location = useLocation();
  const showBack = location.pathname !== '/';
  const [searchText, setSearchText] = useState("");
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const userInfo=useSelector(selectUserInfo)
  const cartItems=useSelector(selectCartItems)
  const loggedInUser=useSelector(selectLoggedInUser)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const theme=useTheme()
  const is480=useMediaQuery(theme.breakpoints.down(480))

  const wishlistItems=useSelector(selectWishlistItems)
  const isProductFilterOpen=useSelector(selectProductIsFilterOpen)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleToggleFilters=()=>{
    dispatch(toggleFilters())
  }

  const settings = [
    {name:"Home",to:"/"},
    {name:'Profile',to:loggedInUser?.isAdmin?"/admin/profile":"/profile"},
    {name:loggedInUser?.isAdmin?'Orders':'My orders',to:loggedInUser?.isAdmin?"/admin/orders":"/orders"},
    {name:'Logout',to:"/logout"},
  ];

  return (
    <AppBar position="sticky" sx={{backgroundColor:"white",boxShadow:"none",color:"text.primary"}}>
        <Toolbar sx={{p:1,height:"4rem",display:"flex",justifyContent:"space-around"}}>

  {/* LOGO */}
      <Stack alignItems="flex-start" sx={{ mr: 2 }}>
      <Typography
        variant="h6"
        component={Link}
        to="/"
        sx={{
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none'
        }}
      >
        SPORTZ
      </Typography>
    </Stack>   
          {/* 🔍 THANH TÌM KIẾM NẰM CHÍNH GIỮA */}
          <TextField
          placeholder="Tìm sản phẩm..."
          size="small"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate(`/products?search=${searchText}`);
            }
          }}
          sx={{
            width: "40%",
            background: "#f1f1f1",
            borderRadius: "50px"
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />


  {/* PHẦN AVATAR + CART + WISHLIST */}
  <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'center'} columnGap={2}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={userInfo?.name} src="null" />
        </IconButton>
      </Tooltip>

      {/* menu user */}
      <Menu
  sx={{ mt: '45px' }}
  id="menu-appbar"
  anchorEl={anchorElUser}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  open={Boolean(anchorElUser)}
  onClose={handleCloseUserMenu}
>
  {loggedInUser?.isAdmin &&
    <MenuItem onClick={handleCloseUserMenu}>
      <Typography component={Link} color={'text.primary'} 
        sx={{textDecoration:"none"}}
        to="/admin/add-product">
          Add new Product
      </Typography>
    </MenuItem>
  }

  {settings.map((setting) => (
    <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
      <Typography component={Link} color={'text.primary'} 
        sx={{textDecoration:"none"}} 
        to={setting.to}>
          {setting.name}
      </Typography>
    </MenuItem>
  ))}
</Menu>


      <Typography variant='h6' fontWeight={300}>
        {is480?`${userInfo?.name.toString().split(" ")[0]}`:`Hey👋, ${userInfo?.name}`}
      </Typography>

      {loggedInUser.isAdmin && <Button variant='contained'>Admin</Button>}

      <Stack sx={{flexDirection:"row",columnGap:"1rem",alignItems:"center",justifyContent:"center"}}>

        {cartItems?.length>0 && 
          <Badge badgeContent={cartItems.length} color='error'>
            <IconButton onClick={()=>navigate("/cart")}>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Badge>
        }

        {!loggedInUser?.isAdmin &&
          <Badge badgeContent={wishlistItems?.length} color='error'>
            <IconButton component={Link} to={"/wishlist"}>
              <FavoriteBorderIcon />
            </IconButton>
          </Badge>
        }

        {isProductList && 
          <IconButton onClick={handleToggleFilters}>
            <TuneIcon sx={{color:isProductFilterOpen?"black":""}}/>
          </IconButton>
        }

      </Stack>
  </Stack>

</Toolbar>

    </AppBar>
  );
}