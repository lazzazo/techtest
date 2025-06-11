import React from 'react';
import { Box, OutlinedInput, FormHelperText, FormLabel } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import { APP_INPUT_DEFAULT_BORDER, APP_INPUT_GRAY } from '@/components/config';
import { useDarkMode } from '@/hooks';

interface AppOutlinedInputProps {
  label?: string;
  id: string;
  name: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  size?: 'small' | 'medium';
  error?: boolean;
  helperText?: string;
  sx?: SxProps<Theme>;
}

const AppOutlinedInput: React.FC<AppOutlinedInputProps> = ({
  label,
  id,
  name,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  size = 'small',
  error = false,
  helperText = '',
  sx,
}) => {
  const { isDarkMode } = useDarkMode();

  return (
    <Box sx={{
      width: '100%'
    }}>
      {label && (
        <FormLabel htmlFor={id} sx={{ display: 'block', mb: 1 }}>
          {label}
        </FormLabel>
      )}
      <OutlinedInput
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        size={size}
        error={error}
        fullWidth
        sx={{
          ...sx,
          backgroundColor: isDarkMode ? '' : APP_INPUT_GRAY,
          border: `1px solid ${isDarkMode ? '' : APP_INPUT_GRAY}`,
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: isDarkMode ? '' : APP_INPUT_DEFAULT_BORDER,
          },
          borderRadius: '10px',
          '& input[type=number]': {
            '-moz-appearance': 'textfield'
          },
          '& input[type=number]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
          },
          '& input[type=number]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
          }
        }}
      />
      {helperText && (
        <FormHelperText error={error}>
          {helperText}
        </FormHelperText>
      )}
    </Box>
  );
};

export default AppOutlinedInput;
