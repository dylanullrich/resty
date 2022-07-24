import JSONPretty from 'react-json-pretty';
import './style.scss';

const Results = (props) => {
  const { data } = props;
  return (
    <section>
      {data && <JSONPretty id='json-pretty' data={data}></JSONPretty>}
      {/* <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre> */}
    </section>
  );
};

export default Results;
