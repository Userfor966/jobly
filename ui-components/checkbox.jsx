import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
  return (
    <div className='flex items-center'>
      <Checkbox {...label} />
      <span>Hərbi bilet</span>
     
    </div>
  );
}