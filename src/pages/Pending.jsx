const Pending = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('/image/arka_plan_desktop.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="display-1 fw-light">NWS V9</h1>
      <p>Site bakım için geçici olarak kapatıldı</p>
    </div>
  );
};

export default Pending;
