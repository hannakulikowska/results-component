import DetailList from './DetailList';

function SummaryCard() {
  return (
    <div className="card border-0 br-4">
      <div className="card-body p-4 d-flex flex-column gap-3">
        <h5 className="card-title">Summary</h5>
        <DetailList />
        <button className="button rounded-5 text-bg-dark mt-2">Continue</button>
      </div>
    </div>
  );
}
export default SummaryCard;
