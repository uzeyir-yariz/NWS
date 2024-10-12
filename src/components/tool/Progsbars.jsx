const Progsbars = (Props) => {
  const { width, color } = Props;
  return (
    <div className="skill-level">
      <div className="progress">
        <div
          className={`progress-bar bg-${color}`}
          role="progressbar"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Progsbars;
