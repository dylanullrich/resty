import './style.scss';

const History = ({ history, showHistory }) => {
  return (
    // <>
    <section id='history'>
      <h2>History</h2>
      {history.map((entry, index) => (
        <button key={`entry-${index}`} onClick={() => showHistory(entry)}>
          {entry.request.method} : {entry.request.url}
        </button>
      ))}
    </section>
    // {/* </> */}
  );
};

export default History;
