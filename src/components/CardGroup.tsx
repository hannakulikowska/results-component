import ResultCard from './ResultCard';
import Summary from './SummaryCard';

function CardGroup() {
  return (
    <div className="card-group border-0 shadow-md br-4" style={{ width: '600px' }}>
      <ResultCard />
      <Summary />
    </div>
  );
}

export default CardGroup;
