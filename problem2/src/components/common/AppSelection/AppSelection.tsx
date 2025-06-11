import React, { ReactNode } from 'react';
import { FormLabel, MenuItem, Select, Box, Typography, SelectChangeEvent, SxProps, Theme } from '@mui/material';
import AppSubIcon from '../AppSubIcon';
import { APP_SELECTION_DEFAULT_BORDER, APP_SELECTION_GRAY } from '@/components/config';
import { useDarkMode } from '@/hooks';

interface AppSelectionProps {
  label: string;
  id: string;
  name: string;
  options: { value: string; label: string }[];
  value?: string; // Controlled value
  onChange?: ((event: SelectChangeEvent<string>, child: ReactNode) => void) | undefined;
  defaultValue?: string;
  displayEmpty?: boolean;
  required?: boolean;
  size?: 'small' | 'medium';
  error?: boolean;
  helperText?: string;
  isSubIcon?: boolean;
  maxWidth?: string;
  sx?: SxProps<Theme>;
}

const AppSelection: React.FC<AppSelectionProps> = ({
  label,
  id,
  name,
  options,
  value,
  onChange,
  defaultValue = options[0]?.value || '',
  displayEmpty = true,
  required = false,
  size = 'small',
  error = false,
  helperText = '',
  isSubIcon = false,
  maxWidth,
  sx
}) => {
  const { isDarkMode } = useDarkMode();

  return (
    <Box maxWidth={maxWidth}>
      <Box>
        <FormLabel htmlFor={id} required={required} sx={{ display: 'block', mb: 1 }}>
          {label}
        </FormLabel>
        <Select
          id={id}
          name={name}
          value={value || defaultValue}
          onChange={onChange}
          displayEmpty={displayEmpty}
          size={size}
          fullWidth
          error={error}
          sx={{
            backgroundColor: isDarkMode ? '' : APP_SELECTION_GRAY,
            border: `1px solid ${isDarkMode ? '' : APP_SELECTION_GRAY}`,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: isDarkMode ? '' : APP_SELECTION_DEFAULT_BORDER, // hover border
            },
            ...sx
          }}
        >
          {displayEmpty && (
            <MenuItem value="" disabled key={'select_option'}>
              Please select
            </MenuItem>
          )}
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {isSubIcon && <AppSubIcon icon={option.value} size={20} />}
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {helperText && (
        <Typography color="error" variant="caption">
          {helperText}
        </Typography>
      )}
    </Box>
  );
};

export default AppSelection;