import { useQuery } from "@tanstack/react-query";
import { fetchTokens } from "../services/tokens.service";
import { useState } from "react";

type Token = {
  currency: string;
  date: string;
  price: number;
};

type TokenOption = Pick<Token, "price"> & {
  value: string;
  label: string;
}

const useTokens = () => {
  const [tokenOptions, setTokenOptions] = useState<TokenOption[]>([]);
  const [conversionResult, setConversionResult] = useState<number | null>(null);

  const { isLoading, error } = useQuery({
    queryKey: ["getTokens"],
    queryFn: async () => {
      const response = await fetchTokens();
      if (response) {
        const options = response?.map((token: Token) => ({
          value: token.currency,
          label: `${token.currency} - $${token.price.toFixed(2)}`,
          price: token.price,
        })) || [];
        setTokenOptions(options);
      }
    },
  });

  const convertAmount = (
    amount: number,
    fromCurrency: string,
    toCurrency: string,
    direction: "send" | "receive"
  ): number | null => {
    if (amount < 0) return null;
  
    const fromToken = tokenOptions.find(token => token.value === fromCurrency);
    const toToken = tokenOptions.find(token => token.value === toCurrency);
  
    if (!fromToken || !toToken) return null;
  
    const conversionRate =
      direction === "send"
        ? fromToken.price / toToken.price
        : toToken.price / fromToken.price;
  
    const result = amount * conversionRate;
    setConversionResult(result);
    return result;
  };

  return {
    tokenOptions,
    isLoading,
    error,
    conversionResult,
    convertAmount
  };
};

export default useTokens;

