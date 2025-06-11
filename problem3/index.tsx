interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: string; // Added: required for sorting/filtering via getPriority
}

interface FormattedWalletBalance extends WalletBalance {
  formatted: string; // Holds the formatted string version of amount
}

interface Props extends BoxProps { }

const WalletPage: React.FC<Props> = (props) => {
  const { children, ...rest } = props;

  // Custom hooks fetching user's wallet balances and token prices
  const balances = useWalletBalances();
  const prices = usePrices();

  // Utility function: assigns a numeric priority to each blockchain
  const getPriority = (blockchain: string): number => {
    switch (blockchain) {
      case 'Osmosis':
        return 100;
      case 'Ethereum':
        return 50;
      case 'Arbitrum':
        return 30;
      case 'Zilliqa':
      case 'Neo':
        return 20;
      default:
        return -99; // Ignore unknown or unsupported chains
    }
  };

  // useMemo: Filters and sorts balances only when `balances` changes
  const sortedBalances = useMemo(() => {
    return balances
      // Keep only supported blockchains and positive balances
      .filter((balance) => getPriority(balance.blockchain) > -99 && balance.amount > 0)
      // Sort by descending blockchain priority
      .sort((lhs, rhs) => getPriority(rhs.blockchain) - getPriority(lhs.blockchain));
  }, [balances]);

  // useMemo: Format balances for display (avoids recomputation on re-render)
  const formattedBalances = useMemo(() => {
    return sortedBalances.map((balance) => ({
      ...balance,
      formatted: balance.amount.toFixed(), // Format number into string
    }));
  }, [sortedBalances]);

  // Generate rows for rendering
  const rows = formattedBalances.map((balance) => {
    const usdValue = prices[balance.currency] * balance.amount; // Calculate USD value from price

    return (
      <WalletRow
        className={classes.row}
        key={balance.currency} // Use currency as unique key (preferable over index)
        amount={balance.amount}
        usdValue={usdValue}
        formattedAmount={balance.formatted}
      />
    );
  });

  return <div {...rest}>{rows}</div>;
};