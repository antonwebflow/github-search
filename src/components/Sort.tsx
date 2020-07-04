import React, { useContext } from 'react';
import { OrderDirection } from '../generated/apollo/globalTypes';
import { SortDirectionContext } from './SortDirectionContext';

const Sort: React.FC = () => {
  const { setDirection, direction } = useContext(SortDirectionContext);

  return (
    <>
      <label htmlFor="">ASC</label>
      <input
        checked={OrderDirection.ASC === direction}
        onChange={() => setDirection(OrderDirection.ASC)}
        type="radio"
        id="sort"
        value={OrderDirection.ASC}
      />

      <label htmlFor="">DESC</label>
      <input
        checked={OrderDirection.DESC === direction}
        onChange={() => setDirection(OrderDirection.DESC)}
        type="radio"
        id="sort"
        value={OrderDirection.DESC}
      />
    </>
  );
};

export default Sort;
