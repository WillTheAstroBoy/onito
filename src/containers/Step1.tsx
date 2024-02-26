import React, { useState } from 'react';
import { Box, Button, FormControl, Grid, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserFormData, validationSchema } from '../types';

interface Step1Props {
  onSubmit: any;
}

const Step1: React.FC<Step1Props> = ({ onSubmit }) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit((data) => { onSubmit(data); reset() })} style={{ maxWidth: "800px", width: "100%", minWidth: "300px", margin: "0 auto" }}>
      <p style={{ textDecoration: "underline", fontWeight: "bold", textAlign: "left" }} >Personal Details</p>
      <Grid container rowGap={3}  >
        <Grid sm={12} md={6} rowGap={2} columnGap={1} >
          <div style={{ display: "flex", alignItems: "center", padding: "5px" }} >
            <InputLabel >Name*</InputLabel>
            <Input
              sx={{ width: "80%" }}
              // required
              id="outlined-required"
              placeholder="Enter Name"
              defaultValue=""
              type="text"
              {...register("name", { required: true })}
            />
          </div>
          {errors.name && <p style={{color: "red", fontSize: "14px", textAlign:"left", padding: "5px"}} >{errors.name.message}!</p>}
        </Grid>

        <Grid sm={12} md={6} gap={2} >
          <div style={{ display: "flex", alignItems: "center" }} >
            <InputLabel >Age*</InputLabel>
            <Input
              sx={{ width: "80%" }}
              required
              id="outlined-required"
              placeholder="Enter Age"
              type="text"
              {...register("age", { required: true })}

            />
          </div>
          {errors.age && <p style={{color: "red", fontSize: "14px", textAlign:"left", padding: "5px"}} >{errors.age.message}</p>}
        </Grid>

        <Grid sm={4} md={4} >
          <FormControl sx={{ minWidth: 120, width: "100%" }}>
            <InputLabel id="sex-select-helper-label">Sex</InputLabel>
            <Select
              placeholder='Enter Sex'
              id="sex-select-helper-label"
              label="Sex"
              labelId="sex-select-helper-label"
              defaultValue=""
              {...register("sex", { required: true })}
            >
              <MenuItem value="" >select</MenuItem>
              <MenuItem value="male" >Male</MenuItem>
              <MenuItem value="female" >Female</MenuItem>
            </Select>
          </FormControl>
          {errors.sex && <p style={{color: "red", fontSize: "14px", textAlign:"left", padding: "5px"}} >{errors.sex.message}</p>}

        </Grid>

        <Grid sm={12} md={8} gap={2} >
          <div style={{ display: "flex", alignItems: "center", marginLeft: 13 }} >
            <InputLabel >Mobile*</InputLabel>
            <Input
              sx={{ width: "80%" }}
              required
              id="outlined-required"
              placeholder="Enter Mobile"
              defaultValue=""
              type="text"
              {...register("mobile", { required: true })}
            />
          </div>
          {errors.mobile && <p style={{color: "red", fontSize: "14px", textAlign:"left", padding: "5px"}} >{errors.mobile.message}</p>}
        </Grid>

        <Grid sm={5} md={4} >
          <FormControl sx={{ minWidth: 120, width: "100%", }} >
            <InputLabel id="id-type-select-helper-label" >ID Type</InputLabel>
            <Select
              labelId='id-type-select-helper-label'
              label="IdType"
              placeholder='ID Type'
              {...register("idType", { required: true })}
            >
              <MenuItem value="Aadhar" >Aadhar</MenuItem>
              <MenuItem value="PAN" >PAN</MenuItem>
            </Select>
          </FormControl>
          {errors.idType && <p style={{color: "red", fontSize: "14px", textAlign:"left", padding: "5px"}} >{errors.idType.message}</p>}

        </Grid>
        <Grid sm={7} md={8} >
          <div style={{ display: "flex", alignItems: "center", marginLeft: 13 }} >
            <InputLabel >Govt ID*</InputLabel>
            <Input
              sx={{ width: "80%" }}
              required
              placeholder="Enter Govt ID"
              defaultValue=""
              {...register("idNumber", { required: true })}
            />
          </div>
          {errors.idNumber && <p style={{color: "red", fontSize: "14px", textAlign:"left", padding: "5px"}} >{errors.idNumber.message}</p>}

        </Grid>
      </Grid>
      <div style={{ display: "flex", justifyContent: "flex-end", margin: "1rem 0" }} >
        <Button variant="contained" type="submit" >Next</Button>
      </div>
    </form>
  );
};

export default Step1;
