const Language = (Props) => {
  const { img_url, name, status, width } = Props;

  return (
    <tr style={{ height: "70px" }} className="">
      <td>
        <img src={img_url} height="40" alt={`${name}  logo`} /> {name}
      </td>

      <td style={{ width: "85%" }}>
        <div className="skill-level">
          <div className="progress">
            <div
              className={`progress-bar bg-${status}`}
              role="progressbar"
              style={{ width: `${width}%` }}
            ></div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Language;
