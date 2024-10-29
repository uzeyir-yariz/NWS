const ContactPage = () => {
  return (
    <div className="center">
      <div className="">
        <form>
          <div className="mb-4">
            <label className="form-label">Adınız : </label>
            <input required type="text" className="form-control" />
          </div>
          <div className="mb-4">
            <label className="form-label">Mailiniz : </label>
            <input required type="email" className="form-control" />
          </div>
          <div className="mb-4">
            <label className="form-label">Mesajınız : </label>
            <textarea className="form-control" required></textarea>
          </div>

          <button type="submit" className="btn w-100 btn-primary">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
