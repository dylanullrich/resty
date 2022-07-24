import { useState } from 'react';
import './style.scss';

const Form = (props) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method,
      url,
    };
    props.handleApiCall(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input
            name='url'
            type='text'
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type='submit'>GO!</button>
        </label>
        <label className='methods'>
          <span
            className={method === 'GET' ? 'active' : 'inactive'}
            id='get'
            onClick={() => setMethod('GET')}>
            GET
          </span>
          <span
            className={method === 'POST' ? 'active' : 'inactive'}
            id='post'
            onClick={() => setMethod('POST')}>
            POST
          </span>
          <span
            className={method === 'PUT' ? 'active' : 'inactive'}
            id='put'
            onClick={() => setMethod('PUT')}>
            PUT
          </span>
          <span
            className={method === 'DELETE' ? 'active' : 'inactive'}
            id='delete'
            onClick={() => setMethod('DELETE')}>
            DELETE
          </span>
          {/* <span id='get'>GET</span>
          <span id='post'>POST</span>
          <span id='put'>PUT</span>
          <span id='delete'>DELETE</span> */}
        </label>
      </form>
    </>
  );
};

export default Form;
