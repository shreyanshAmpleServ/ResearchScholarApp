const PublicationChargesPage = () => {
  return (
    <div className="page-wrapper fade-in">
      <div className="page-header">
        <h1>Publication Charges</h1>
        <p>Transparent & Affordable Open Access Publishing</p>
      </div>

      <section className="content-section">
        <h2>Transparency Statement</h2>
        <p>
          To maintain our website infrastructure, provide open-access
          publishing, and cover administrative costs, UJAR charges a nominal
          Article Processing Charge (APC).
        </p>
      </section>

      <section className="content-section">
        <h2>Fee Structure</h2>
        <div className="charge-card slide-up">
          <p>
            <strong>Indian Authors:</strong> ₹700 per paper (Up to 7 authors)
          </p>
          <p>
            <strong>International Authors:</strong> $15 USD per paper
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2>Payment Information</h2>
        <p>
          Payment details will be provided in the Acceptance Letter sent to the
          corresponding author after successful peer review.
        </p>
        <p>
          <em>
            (Publication charges are subject to revision. Updated details will
            be reflected once ISSN registration is completed.)
          </em>
        </p>
      </section>
    </div>
  );
};

export default PublicationChargesPage;
