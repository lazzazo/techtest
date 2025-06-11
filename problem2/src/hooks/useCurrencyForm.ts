import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useTokens from "@/hooks/useTokens";

export interface CurrencyFormData {
  amountToSend: number;
  amountToReceive: number;
  fromCurrency: string;
  toCurrency: string;
}

export const useCurrencyForm = () => {
  const { tokenOptions, convertAmount, conversionResult } = useTokens();
  const [isDialogOpen, setDialogOpen] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<CurrencyFormData>({
    defaultValues: {
      amountToSend: 0,
      amountToReceive: 0,
      fromCurrency: "",
      toCurrency: "",
    },
  });

  const watchedFromCurrency = watch("fromCurrency");
  const watchedToCurrency = watch("toCurrency");
  const amountToSend = watch("amountToSend");
  const amountToReceive = watch("amountToReceive");

  useEffect(() => {
    if (tokenOptions.length > 0) {
      const defaultCurrency = tokenOptions[0].value;
      reset({
        fromCurrency: defaultCurrency,
        toCurrency: defaultCurrency,
        amountToSend: 0,
        amountToReceive: 0,
      });
    }
  }, [tokenOptions, reset]);

  useEffect(() => {
    if (!watchedFromCurrency || !watchedToCurrency) return;

    const updateValues = (
      amount: number,
      type: "send" | "receive"
    ): number => {
      const result = convertAmount(
        amount,
        watchedFromCurrency,
        watchedToCurrency,
        type
      );
      return result !== null ? result : 0;
    };

    if (amountToSend > 0) {
      setValue("amountToReceive", updateValues(amountToSend, "send"));
    } else if (amountToReceive > 0) {
      setValue("amountToSend", updateValues(amountToReceive, "receive"));
    }
  }, [watchedFromCurrency, watchedToCurrency, amountToSend, amountToReceive, setValue]);

  const handleConfirmSwap = () => setDialogOpen(true);
  const handleDialogSwapClose = () => setDialogOpen(false);

  const onSubmit: SubmitHandler<CurrencyFormData> = () => {
    console.log("Swap confirmed!");
    handleDialogSwapClose();
  };

  const canSwap =
    watchedFromCurrency !== watchedToCurrency &&
    amountToSend > 0 &&
    amountToReceive > 0;

  return {
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
  };
};
