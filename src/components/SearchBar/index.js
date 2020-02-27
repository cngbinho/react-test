import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getStocksDataRequest } from "../../store/modules/stocks/actions";

import { Container, Input, DropItens, Row, Item, LinkStyled } from "./styles";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const data = useSelector(state => state.stocks.searchData);

  useEffect(() => {
    if (inputValue !== "") dispatch(getStocksDataRequest(inputValue));
  }, [inputValue, dispatch]);

  return (
    <Container>
      <Input
        noMargin
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      {data && inputValue !== "" && (
        <DropItens>
          {data.map(item => (
            <LinkStyled
              to={{
                pathname: `/${item.symbol}/details`,
                state: { selectedItem: item }
              }}
              key={item.symbol + item.name}
            >
              <Row>
                <Item type="Content">{item.symbol}</Item>
                <Item type="Content">{item.name}</Item>
              </Row>
            </LinkStyled>
          ))}
        </DropItens>
      )}
    </Container>
  );
}
