// Step1.tsx
import React, { useCallback, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserFormData, validationSchema, validationStep2Schema } from '../types';
import { Button, FormControl, Grid, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import EditableSelect from '../components/EditableSelect';

interface Step2Props {
  onSubmit: any;
}

const Step2: React.FC<Step2Props> = ({ onSubmit }) => {

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm({
    resolver: yupResolver(validationStep2Schema),
  });

  const [options, setOptions] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://restcountries.com/v3.1/name/" + watch("country"));
      const data = await res.json();
      setOptions(watch("country") === "" ? [] : data.map((item: any) => item.name.common))

    })();
  }, [watch("country")]);

  return (
    <form onSubmit={handleSubmit((data) => { onSubmit(data); reset() })} style={{ maxWidth: "800px", width: "100%", minWidth: "300px", margin: "0 auto", padding: "2em 0" }}>
      <p style={{ textDecoration: "underline", fontWeight: "bold", textAlign: "left" }} >Personal Details</p>
      <Grid container rowGap={2} >
        <Grid sm={12} md={12} gap={2} >
          <div style={{ display: "flex", alignItems: "center", width: "100%" }} >
            <InputLabel >Address</InputLabel>
            <Input defaultValue="" sx={{ width: "90%", maxWidth: 500 }} {...register("address")} placeholder="Enter Address" />
          </div>
          {errors.address && <p>{errors.address.message}</p>}
        </Grid>

        <Grid sm={4} md={4} sx={{margin: "1rem 0"}} >
          <FormControl sx={{ minWidth: 120, width: "100%" }} >
            <InputLabel id="id-type-select-helper-label">State</InputLabel>
            <Select
              labelId='id-type-select-helper-label'
              label="State"
              placeholder='Select State'
              {...register("state")}
              defaultValue=""
            >
              <MenuItem value="Aadhar" >Aadhar</MenuItem>
              <MenuItem value="PAN" >PAN</MenuItem>
            </Select>
          </FormControl>
          {errors.state && <p>{errors.state.message}</p>}
        </Grid>

        <Grid sm={4} md={4} sx={{margin: "1rem 0"}} >
          <FormControl sx={{ minWidth: 120, width: "100%" }} >
            <InputLabel id="id-type-select-city">City</InputLabel>
            <Select
              labelId='id-type-select-city'
              label="City"
              placeholder='Select City'
              defaultValue=""
              {...register("city")}
            >
              <MenuItem value="Aadhar" >Aadhar</MenuItem>
              <MenuItem value="PAN" >PAN</MenuItem>
            </Select>
          </FormControl>
          {errors.city && <p>{errors.city.message}</p>}
        </Grid>

        <Grid sm={4} md={4} >
          {/* <FormControl sx={{ minWidth: 120, width: "100%" }} >
            <InputLabel id="id-type-select-country">Country</InputLabel>
            <Select
              labelId='id-type-select-country'
              label="Country"
              defaultValue=""
              placeholder='Select Country'
              {...register("country")}

              onChange={(event) => console.log(event, "event <<<<=================")}
            >
              <MenuItem value="Aadhar" >Aadhar</MenuItem>
              <MenuItem value="PAN" >PAN</MenuItem>
            </Select>
          </FormControl> */}
          <EditableSelect
            options={options}
            onSelect={(e: any) => console.log(e)}
            register={register}
            name="country"
            placeholder='Select Country'
          />
          {errors.country && <p>{errors.country.message}</p>}
        </Grid>

        <Grid sx={{ display: "flex", alignItems: "center", width: "100%" }} sm={12} md={12} gap={2} >
          <InputLabel >Pincode</InputLabel>
          <Input sx={{ width: "90%", maxWidth: 500 }} {...register("pincode")} placeholder="Enter Pincode" />
          {errors.pincode && <p>{errors.pincode.message}</p>}
        </Grid>
        <div style={{ display: "flex", justifyContent: "flex-end", margin: "1rem 0" }} >
          <Button variant="contained" type="submit" >Submit</Button>
        </div>
      </Grid>
    </form>
  );
};

export default Step2;
