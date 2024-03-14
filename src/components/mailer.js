import emailjs from "emailjs-com";

const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_cbzgy0h", "template_y3xzvjt", e.target, "0wN6O46n2tJLhcg0A")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div
      className="container border"
      style={{
        marginTop: "50px",
        width: "50%",
        backgroundImage: `url('https://w0.peakpx.com/wallpaper/30/0/HD-wallpaper-lightspeed-background-vector.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 style={{ margin: "25px" }}>Contact Form</h1>
      <form
        className="row"
        style={{ margin: "25px 85px 75px 100px" }}
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input type="text" name="name" className="form-control" />
        <label>Email</label>
        <input type="email" name="user_email" className="form-control" />
        <label>Message</label>
        <textarea name="message" rows="4" className="form-control" />
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
          style={{ marginTop: "25px" }}
        />
      </form>
    </div>
  );
};

export default Mailer;
