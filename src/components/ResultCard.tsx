function ResultCard() {
  return (
    <div className="card border-0 br-4 br-bottom" style={{ backgroundColor: '#FEB5D0' }}>
      <div className="card-body px-5 py-4 d-flex flex-column align-items-center gap-3 text-light rounded-0">
        <h5 className="card-title">Your Result</h5>
        <div
          className="rounded-circle d-flex flex-column justify-content-center bg-gradient text-center"
          style={{
            width: '130px',
            height: '130px',
            backgroundColor: '#FFB6D1',
          }}>
          <p className="fw-bold m-0" style={{ fontSize: '4rem', lineHeight: '1' }}>
            76
          </p>
          <small>of 100</small>
        </div>
        <h3>Great</h3>
        <p className="text-center mb-0">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}
export default ResultCard;
