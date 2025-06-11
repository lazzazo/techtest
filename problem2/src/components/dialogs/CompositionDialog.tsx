import { FunctionComponent, ReactNode, SyntheticEvent } from 'react';
import { Box, Dialog, DialogActions, DialogContent, DialogProps } from '@mui/material';
import { AppDialogTitle } from './components';
import { useDialogMinWidth } from './utils';

interface Props extends DialogProps {
  title?: string;
  actions?: ReactNode;
  onClose?: (event: SyntheticEvent) => void;
}

const CompositionDialog: FunctionComponent<Props> = ({
  actions,
  open = false, 
  children = 'Children is missing...',
  title = 'Missing title...',
  onClose,
  ...restOfProps
}) => {
  const paperMinWidth = useDialogMinWidth();

  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      open={open}
      PaperProps={{
        sx: {
          minWidth: paperMinWidth,
        },
      }}
      onClose={onClose}
      {...restOfProps}
    >
      <AppDialogTitle id="form-dialog-title" onClose={onClose}>
        {title}
      </AppDialogTitle>
      <DialogContent sx={{ py: 1 }}>
        <Box pt={1}>{children}</Box>
      </DialogContent>
      <DialogActions sx={{ px: 3 }}>{actions}</DialogActions>
    </Dialog>
  );
};

export default CompositionDialog;
