import { Controller } from "react-hook-form";
import { Box, Grid, Typography } from "@mui/material";
import { AppButton, AppView, CommonDialog } from "@/components";
import AppSelection from "@/components/common/AppSelection";
import AppInput from "@/components/common/AppInput";
import LocalAtmRoundedIcon from '@mui/icons-material/LocalAtmRounded';
import { useCurrencyForm } from "@/hooks/useCurrencyForm";

const MainView = () => {
  const {
    control,
    handleSubmit,
    errors,
    watchedFromCurrency,
    watchedToCurrency,
    amountToSend,
    amountToReceive,
    isDialogOpen,
    handleConfirmSwap,
    handleDialogSwapClose,
    onSubmit,
    tokenOptions,
    convertAmount,
    setValue,
    canSwap,
    conversionResult,
  } = useCurrencyForm();

  const renderAmountInput = (
    name: "amountToSend" | "amountToReceive",
    label: string,
    direction: "send" | "receive"
  ) => (
    <Controller
      name={name}
      control={control}
      rules={{
        required: `${label} is required`,
        min: { value: 0.01, message: "Amount must be greater than 0" },
      }}
      render={({ field }) => (
        <AppInput
          {...field}
          label={label}
          id={name}
          type="number"
          placeholder={`Enter the amount to ${label.toLowerCase().includes("send") ? "send" : "receive"}`}
          error={!!errors[name]}
          helperText={errors[name]?.message}
          sx={{ borderRadius: "10px" }}
          onChange={(e) => {
            const value = Number(e.target.value);
            field.onChange(value);
            const result = convertAmount(
              value,
              watchedFromCurrency,
              watchedToCurrency,
              direction
            );
            if (direction === "send") {
              setValue("amountToReceive", result || 0);
            } else {
              setValue("amountToSend", result || 0);
            }
          }}
        />
      )}
    />
  );

  const renderCurrencyInput = (
    name: "fromCurrency" | "toCurrency",
    label: string
  ) => (
    <Controller
      name={name}
      control={control}
      rules={{ required: `${label} currency is required` }}
      render={({ field }) => (
        <AppSelection
          {...field}
          label={label}
          id={`${name}-currency`}
          options={tokenOptions}
          error={!!errors[name]}
          helperText={errors?.[name]?.message}
          required
          isSubIcon
          sx={{ borderRadius: "10px" }}
        />
      )}
    />
  );

  return (
    <AppView paddingTop="6rem" sx={{ width: "60%" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              align="center"
              sx={{ fontWeight: "bold", fontSize: "1.2rem", pt: "1rem" }}
            >
              Please enter the amount you would like to send or receive!
            </Typography>

            <Box display="flex" justifyContent="center" pt="1rem">
              <Box
                display="flex"
                justifyContent="space-between"
                width="80%"
                alignItems="center"
              >
                <Box width="40%">
                  <Box mb="0.8rem">
                    {renderAmountInput("amountToSend", "Amount to send", "send")}
                  </Box>
                  {renderCurrencyInput("fromCurrency", "From")}
                </Box>


                <Box width="40%">
                  <Box mb="0.8rem">
                    {renderAmountInput("amountToReceive", "Amount to receive", "receive")}
                  </Box>
                  {renderCurrencyInput("toCurrency", "To")}
                </Box>
              </Box>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              pt="1rem"
            >
              <AppButton
                sx={{
                  width: "200px",
                  borderRadius: "12px",
                  fontWeight: "bold",
                  textTransform: "none",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={handleConfirmSwap}
                color="primary"
                disabled={!canSwap}
              >
                Confirm Swap
                <LocalAtmRoundedIcon sx={{ ml: "5px" }} />
              </AppButton>

              {canSwap && conversionResult !== null && (
                <Typography pt="1rem">
                  {amountToSend} {watchedFromCurrency} can be exchanged for{" "}
                  {amountToReceive} {watchedToCurrency}
                </Typography>
              )}
            </Box>

            <CommonDialog
              open={isDialogOpen}
              title="Confirm Swap"
              onClose={handleDialogSwapClose}
            >
              Are you sure you want to swap {amountToSend} {watchedFromCurrency} for{" "}
              {amountToReceive} {watchedToCurrency}?
            </CommonDialog>
          </Grid>
        </Grid>
      </form>
    </AppView>
  );
};

export default MainView;