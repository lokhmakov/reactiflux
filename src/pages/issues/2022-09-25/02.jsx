import * as React from 'react'
import TextField from '@mui/material/TextField'

export default function Page() {
  return (
    <>
      <TextField
        sx={{
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: `unset`,
              borderWidth: 1,
            },
          },
        }}
      />
    </>
  )
}
