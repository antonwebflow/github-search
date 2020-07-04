import { createContext } from 'react';
import { OrderDirection } from '../generated/apollo/globalTypes';

type SortContextValue = {
  direction: OrderDirection;
  setDirection: React.Dispatch<React.SetStateAction<OrderDirection>>;
};

export const SortDirectionContext = createContext({
  setDirection: () => {},
  direction: OrderDirection.ASC,
} as SortContextValue);
