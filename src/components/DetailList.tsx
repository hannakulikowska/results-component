import Detail from './Detail';
import data from '../assets/data/data.json';

function DetailList() {
  return (
    <div
      className="d-flex flex-fill flex-column justify-content-between"
      style={{ minHeight: '180px' }}>
      {data.map((item, index) => (
        <Detail
          key={index}
          category={item.category}
          score={item.score}
          icon={item.icon}
          color={item.color}
        />
      ))}
    </div>
  );
}

export default DetailList;
