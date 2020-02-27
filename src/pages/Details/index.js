import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import ArrowBack from "@material-ui/icons/ArrowBack";

import PropTypes from "prop-types";

import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  Line
} from "recharts";

import { getStockDailyRequest } from "../../store/modules/stocks/actions";

import Input from "../../components/Input";
import {
  Container,
  InfoBar,
  Wrap,
  NavBack,
  Filters,
  Row,
  Fields,
  Chart
} from "./styles";

export default function Details({ history }) {
  const dispatch = useDispatch();
  const pageHistory = useHistory();

  const [item, setItem] = useState(null);
  const [graphData, setGraphData] = useState([]);
  const [filterYear, setFilterYear] = useState(2020);
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const stockDaily = useSelector(state => state.stocks.stockDaily);

  useEffect(() => {
    setItem(history.location.state.selectedItem);
    dispatch(getStockDailyRequest(history.location.state.selectedItem.symbol));
  }, [dispatch, history.location.state.selectedItem]);

  useEffect(() => {
    if (!!stockDaily) setGraphData(stockDaily);
  }, [stockDaily]);

  useEffect(() => {
    let filteredData = null;
    if (!!stockDaily) {
      filteredData = stockDaily.filter(stock => {
        if (!!filterYear && +filterYear !== stock.year) return false;
        if (!!fromValue && +fromValue > 0 && +fromValue > stock.month)
          return false;
        if (!!toValue && +toValue > 0 && +toValue < stock.month) return false;
        return true;
      });
    }
    setGraphData(filteredData);
  }, [filterYear, fromValue, toValue, stockDaily]);

  return (
    <Container>
      {item && (
        <InfoBar>
          <NavBack>
            <ArrowBack onClick={() => pageHistory.push("/")}></ArrowBack>
          </NavBack>
          <Wrap margin="0 0 0 3%">
            <b>Símbolo: </b>
            <span>{item.symbol}</span>
          </Wrap>
          <Wrap margin="0 0 0 3%">
            <b>Nome: </b>
            <span>{item.name}</span>
          </Wrap>
          <Wrap margin="0 0 0 3%">
            <b>Tipo: </b>
            <span>{item.type}</span>
          </Wrap>
        </InfoBar>
      )}
      <>
        <Filters>
          <span>Filtros</span>
          <Fields>
            <Row>
              <span>De: </span>
              <Input
                type="number"
                value={fromValue}
                onChange={e => {
                  if (e.target.value <= 0) return setFromValue("");
                  return setFromValue(e.target.value);
                }}
              />
            </Row>
            <Row>
              <span>Até: </span>
              <Input
                type="number"
                value={toValue}
                onChange={e => {
                  if (e.target.value <= 0) return setToValue("");
                  return setToValue(e.target.value);
                }}
              />
            </Row>
            <Row>
              <span>Ano: </span>
              <Input
                type="number"
                value={filterYear}
                onChange={e => {
                  if (e.target.value <= 0) return setFilterYear("");
                  return setFilterYear(e.target.value);
                }}
              />
            </Row>
          </Fields>
        </Filters>
        {!!graphData && graphData.length > 0 ? (
          <Chart>
            <LineChart
              width={730}
              height={250}
              data={graphData}
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis interval="preserveStartEnd" dataKey="name" />
              <YAxis
                type="number"
                domain={["dataMin", "dataMax"]}
                interval="preserveStartEnd"
              />
              <Tooltip />
              <Legend />
              <Line type="natural" dataKey="open" stroke="#8884d8" />
              <Line type="natural" dataKey="close" stroke="#82ca9d" />
              <Line type="natural" dataKey="low" stroke="#F01" />
              <Line type="natural" dataKey="high" stroke="#C1C" />
            </LineChart>
          </Chart>
        ) : (
          <b>Dados não disponivel.</b>
        )}
      </>
    </Container>
  );
}

Details.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      state: PropTypes.shape({
        selectedItem: PropTypes.shape({
          symbol: PropTypes.string,
          name: PropTypes.string,
          type: PropTypes.string,
          region: PropTypes.string,
          marketOpen: PropTypes.string,
          marketClose: PropTypes.string,
          timezone: PropTypes.string,
          currency: PropTypes.string,
          matchScore: PropTypes.string
        })
      })
    })
  })
};
