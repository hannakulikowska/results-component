interface DetailProps {
  category: string;
  score: number;
  icon: string;
  color: string;
}

function Detail({ category, score, icon, color }: DetailProps) {
  return (
    <div className={`input-group bg-${color}-subtle rounded-3`}>
      <img className={`input-group-text border-0 bg-${color}-subtle`} src={icon} alt={category} />
      <span className={`input-group-text border-0 bg-${color}-subtle text-${color}`}>
        {category}
      </span>
      <span className={`input-group-text border-0 ms-auto bg-${color}-subtle`}>
        <span className="fw-bold">{score}</span>&nbsp;/ 100
      </span>
    </div>
  );
}

export default Detail;
