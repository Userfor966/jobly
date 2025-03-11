import React, { useState, useEffect } from 'react';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { closeToWork } from '@/redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import toast from "react-hot-toast";
export default function Switcher() {
 const {openWork}=useSelector(state=>state.user)
  const dispatch=useDispatch()

  const handleSwitchChange = async (event) => {
    const newValue = event.target.checked; 
   
    try {
      const res = await axios.patch('http://localhost:3001/updateinfo', { isOpen: newValue }, { withCredentials: true });
      dispatch(closeToWork({newValue:newValue}))
      toast.success(res.data?.message)
    } catch (error) {
      toast.error(error.response?.data?.message)
    }
  };

  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: '#65C466',
          opacity: 1,
          border: 0,
          ...theme.applyStyles('dark', {
            backgroundColor: '#2ECA45',
          }),
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: theme.palette.grey[100],
        ...theme.applyStyles('dark', {
          color: theme.palette.grey[600],
        }),
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.7,
        ...theme.applyStyles('dark', {
          opacity: 0.3,
        }),
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: '#E9E9EA',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
      ...theme.applyStyles('dark', {
        backgroundColor: '#39393D',
      }),
    },
  }));
  return (
    <FormGroup>
      <FormControlLabel
        control={<IOSSwitch checked={openWork} onChange={handleSwitchChange} />}
      />
    </FormGroup>
  );
}
