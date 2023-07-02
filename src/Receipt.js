export default function Receipt() {
  return (
    <section id="rc-page">
      <div class="row justify-content-center align-items-center">
        <div class="text-center"></div>
      </div>

      <div class="row justify-content-center align-items-center">
        <div class="form-container text-center">
          <h1 id="confirm-title">Thank you for choosing Dreamy Delights!</h1>
          <h4 id="mini-text">
            A confirmation receipt has been sent to your email!
          </h4>
          <p id="centre-text">
            We have received your request and we're thrilled to be a part of
            your special occasion. Our team of talented cake designers will
            carefully review your requirements and craft a unique creation
            tailored to your vision.{" "}
          </p>
          <p id="centre-2">
            Our response time may take between 2-3 days. We appreciate your
            patience as we work diligently to bring your dream cake to life.
          </p>
          <p id="bottom-text">
            Rest assured that your satisfaction is our top priority. We will be
            in touch with you shortly to discuss the finer details, address any
            questions you may have, and finalize the order process. We believe
            in open communication and welcome any additional input or ideas
            you'd like to share.
          </p>
          <a
            href="/"
            type="button"
            class="go-back-btn send-msg continue-btn"
            onclick="window.location.href='index.html'"
          >
            HOME
          </a>
        </div>
      </div>
    </section>
  )
}
