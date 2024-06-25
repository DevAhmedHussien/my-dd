import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Typography,
  Box,
} from '@mui/material';
// import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const Form = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission (e.g., send data to an API)
  };

  return (
    <Box
      component="form" onSubmit={handleSubmit(onSubmit)}
        sx={{
            mt:20,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '100%',
            maxWidth: 500,
            margin: '0 auto',
        }}>
      <Typography variant="h5" textAlign="center" sx={{mt:15}}>
        User Information Form
      </Typography>

      <FormControl component="fieldset">
        <Typography variant="body1">Gender</Typography>
        <Controller
          name="gender"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <RadioGroup {...field} row>
              <FormControlLabel value="male" control={<Radio />} label="Man" />
              <FormControlLabel value="female" control={<Radio />} label="Woman" />
            </RadioGroup>
          )}
        />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="service-label">Service</InputLabel>
        <Controller
          name="service"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select {...field} labelId="service-label" label="Service">
              <MenuItem value="sexualHealth">Sexual Health</MenuItem>
              <MenuItem value="weightLoss">Weight Loss</MenuItem>
              <MenuItem value="mentalHealth">Mental Health</MenuItem>
            </Select>
          )}
        />
      </FormControl>

      <Controller
        name="age"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
            {...field}
            label="Age"
            fullWidth
            variant="outlined"
            sx={{
              '& input': {
                color: '#ff5722', // Change text color here
              },
            }}
          />
        )}
      />

      <FormControl component="fieldset">
        <Typography variant="body1">Marital Status</Typography>
        <Controller
          name="maritalStatus"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <RadioGroup {...field} row>
              <FormControlLabel value="married" control={<Radio />} label="Married" />
              <FormControlLabel value="single" control={<Radio />} label="Single" />
            </RadioGroup>
          )}
        />
      </FormControl>

      <Controller
        name="city"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField {...field} label="City" fullWidth 
          sx={{
            '& input': {
              color: '#ff5722', // Change text color here
            },
          }} />
        )}
      />

      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
          name="appointment"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <MobileDatePicker
              {...field}
              label="Appointment Date"
              inputFormat="MM/dd/yyyy"
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          )}
        />
      </LocalizationProvider> */}

      <Button variant="contained" color="primary" type="submit" fullWidth>
        Submit
      </Button>
    </Box>
  );
};

export default Form;
