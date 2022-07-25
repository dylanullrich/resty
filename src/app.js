import { useEffect, useReducer, useState } from 'react';

import axios from 'axios';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const initialState = {
  data: null,
  requestParams: {},
};

const requestReducer = (state = initialState, action) => {
  switch (type) {
    case 'START_REQUEST':
      return { ...state, requestParams: action.payload };
  }
};

const App = () => {
  const [state, dispatch] = useReducer(null);
  // const [requestParams, setRequestParams] = useState({});

  const callApi = (requestParams) => {
    const action = {
      type: 'START_REQUEST',
      payload: requestParams,
    };

    setRequestParams(requestParams);
  };

  useEffect(() => {
    const getData = async () => {
      if (state.requestParams.url) {
        const response = await axios({
          method: state.requestParams.method,
          url: state.requestParams.url,
        });
        setData(response.data);
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
      {data ? <Results data={state.data} /> : null}
      <Footer />
    </>
  );
};

export default App;
