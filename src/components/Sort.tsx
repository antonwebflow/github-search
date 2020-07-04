import React, { useContext } from 'react';
import { OrderDirection } from '../generated/apollo/globalTypes';
import { SortDirectionContext } from './SortDirectionContext';
import { SortStyled } from './SortStyled';

const Sort: React.FC = () => {
  const { setDirection, direction } = useContext(SortDirectionContext);

  return (
    <SortStyled>
      <fieldset>
        <legend>Sort by name</legend>
        <label htmlFor={OrderDirection.ASC}>ASC</label>
        <input
          checked={OrderDirection.ASC === direction}
          onChange={() => setDirection(OrderDirection.ASC)}
          type="radio"
          name="order-direction"
          id={OrderDirection.ASC}
          value={OrderDirection.ASC}
        />

        <label htmlFor={OrderDirection.DESC}>DESC</label>
        <input
          checked={OrderDirection.DESC === direction}
          onChange={() => setDirection(OrderDirection.DESC)}
          type="radio"
          name="order-direction"
          id={OrderDirection.DESC}
          value={OrderDirection.DESC}
        />
      </fieldset>
    </SortStyled>
  );
};

export default Sort;
