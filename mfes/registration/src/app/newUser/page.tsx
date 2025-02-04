'use client';
import { CustomTypography, Layout, CommonTextField } from '@shared-lib';
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
const NewUser = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    phoneNumber: false,
  });
  const isValidPhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };
  const handleChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const sanitizedValue = value.trim();
      setFormData({
        ...formData,
        [field]: sanitizedValue,
      });
      setError({
        ...error,
        [field]:
          field === 'phoneNumber'
            ? !isValidPhoneNumber(sanitizedValue)
            : sanitizedValue === '',
      });
    };

  return (
    <Layout isFooter={true} showBack={true}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            alignItems: 'center',
          }}
        >
          <Avatar alt="Remy Sharp" src="" />
          <CustomTypography
            variant="h1"
            fontSize={'16px'}
            color="#3B383E"
            fontWeight={500}
          >
            What’s your name and phone number?
          </CustomTypography>
        </div>

        <CommonTextField
          width="328px"
          label="First name"
          value={formData.firstName}
          onChange={handleChange('firstName')}
          type="text"
          variant="outlined"
          helperText={error.firstName ? `Required first name ` : ''}
          error={error.firstName}
        />
        <CommonTextField
          width="328px"
          label="Last name"
          value={formData.lastName}
          onChange={handleChange('lastName')}
          type="text"
          variant="outlined"
          helperText={error.lastName ? 'Required last name' : ''}
          error={error.lastName}
        />
        <CommonTextField
          width="328px"
          label="Phone number"
          value={formData.phoneNumber}
          onChange={handleChange('phoneNumber')}
          type="text"
          variant="outlined"
          helperText={error.phoneNumber ? 'Required phoen number' : ''}
          error={error.phoneNumber}
          supportingText="It will help us stay connected and share important updates"
        />
      </div>
    </Layout>
  );
};
export default NewUser;
