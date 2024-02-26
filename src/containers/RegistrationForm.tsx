// RegistrationForm.tsx
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Step1 from './Step1';
import Step2 from './Step2';
import { setUserData, deleteUserData, addUser } from '../redux/userSlice';
import Slider from 'react-slick';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserFormData, validationSchema } from '../types';

const RegistrationForm: React.FC = () => {
  const dispatch = useDispatch();

  const sliderRef = useRef(null);

  const userData = useSelector((state: any) => state.user.data);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 10000,
    swipe: false,
    touchMove: false,
  };

  const handleStep1Submit = (data: UserFormData) => {
    dispatch(setUserData(data))
    // @ts-ignore: Unreachable code error
    sliderRef.current?.slickNext();
  };

  const handleStep2Submit = (data: UserFormData) => {
    dispatch(addUser({ ...data, ...userData }))
    dispatch(deleteUserData());
    alert("User Data has been submitted");
    // @ts-ignore: Unreachable code error
    sliderRef.current?.slickPrev();
  };

  return (
    <div>
      <Slider {...settings} ref={sliderRef} >
        <Step1 onSubmit={handleStep1Submit} />
        <Step2 onSubmit={handleStep2Submit} />
      </Slider>
    </div>
  );
};

export default RegistrationForm;
