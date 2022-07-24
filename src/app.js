import { useEffect, useState } from 'react';

import axios from 'axios';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const callApi = (requestParams) => {
    setRequestParams(requestParams);
  };

  useEffect(() => {
    const getData = async () => {
      if (requestParams.url) {
        const response = await axios({
          method: requestParams.method,
          url: requestParams.url,
        });
        setData(response.data);
      }
    };
    getData();
  }, [requestParams]);

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      {data ? <Results data={data} /> : null}
      <Footer />
    </>
  );
};

export default App;
