
/* eslint-disable react/prop-types */
const AlertTool = ({ title, contents, buttons, list, subContent, isOpen, onClick }) => {
  return (
    <div className="alert alert-dark">
      <h4 onClick={onClick} style={{ cursor: "pointer" }}>
        {title}
        <span style={{ float: "right" }}>{isOpen ? "▲" : "▼"}</span>
      </h4>

      <div className={`alert-content ${isOpen ? "open" : "closed"}`}>
        <hr />

        {Array.isArray(contents) ? (
          contents.map((content, index) => <p key={index}>{content}</p>)
        ) : (
          <p>{contents}</p>
        )}

        {list && <strong>{list.title}</strong>}

        {list && (
          <ul>
            {list.ul.map((item, index) => (
              <li key={index}>
                <strong>{item.str}</strong>: {item.content}
              </li>
            ))}
          </ul>
        )}

        {subContent && subContent.title && (
          <div>
            <strong>{subContent.title}</strong>
            <p>{subContent.content}</p>
          </div>
        )}

        {/* linkler */}
        {buttons && (
          <div className="btn-group w-100">
            {buttons.map((button, index) => (
              <button
                className="btn btn-primary"
                onClick={() => (window.location.href = button.link)}
                key={index}
              >
                {button.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AlertTool;
