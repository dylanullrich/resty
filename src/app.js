import { useEffect, useReducer } from 'react';

import axios from 'axios';
import './app.scss';

import Header from './components/header';
import History from './components/history';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const initialState = {
  data: null,
  requestParams: {},
  history: [],
};

const requestReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case 'START_REQUEST':
      return {
        ...state,
        requestParams: payload,
      };
    case 'FINISH_REQUEST':
      return {
        ...state,
        data: payload,
        history: [
          ...state.history,
          { request: state.requestParams, data: payload },
        ],
      };
    case 'SHOW_HISTORY':
      return {
        ...state,
        data: payload.data,
        request: payload.request,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(requestReducer, initialState);

  const callApi = (requestParams) => {
    const action = {
      type: 'START_REQUEST',
      payload: requestParams,
    };

    dispatch(action);
  };

  const showHistory = (entry) => {
    const action = {
      type: 'SHOW_HISTORY',
      payload: entry,
    };
    dispatch(action);
  };

  useEffect(() => {
    const getData = async () => {
      if (state.requestParams.url) {
        const response = await axios({
          method: state.requestParams.method,
          url: state.requestParams.url,
        });
        const action = {
          type: 'FINISH_REQUEST',
          payload: response.data,
        };
        dispatch(action);
      }
    };
    getData();
  }, [state.requestParams]);

  return (
    <>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleApiCall={callApi} />
      {state.data ? (
        <History history={state.history} showHistory={showHistory} />
      ) : null}
      {/* <History history={state.history} showHistory={showHistory} /> */}
      {state.data ? <Results data={state.data} /> : null}
      <Footer />
    </>
  );
};

export default App;
