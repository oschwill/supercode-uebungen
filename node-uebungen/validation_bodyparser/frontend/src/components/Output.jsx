import PropTypes from 'prop-types';

const Output = ({ data, setData }) => {
  const handleDeleteContent = (id) => {
    fetch(`http://localhost:9000/api/guestbook/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setData((cur) => cur.filter((c) => c.id !== id));
    });
  };

  return (
    <section>
      {data ? (
        data.map((d) => {
          return (
            <article
              key={d.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                marginBottom: '25px',
                border: '1px solid black',
                padding: '5px',
                position: 'relative',
              }}
            >
              <p>
                <span style={{ fontWeight: 'bold' }}>
                  {d.firstName} {d.lastName}
                </span>{' '}
                <a href={`mailto:${d.email}`}>{d.email}</a>
                &nbsp;schreibt am {d.created_at}:
              </p>
              <p>{d.content}</p>
              <p
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '0',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
                onClick={() => handleDeleteContent(d.id)}
              >
                X
              </p>
            </article>
          );
        })
      ) : (
        <p>No Data</p>
      )}
    </section>
  );
};

Output.propTypes = {
  data: PropTypes.array,
  setData: PropTypes.func,
};

export default Output;
