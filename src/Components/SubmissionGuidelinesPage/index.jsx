const SubmissionGuidelinesPage = () => {
  return (
    <div className="page-wrapper fade-in">
      <div className="page-header">
        <h1>Submission Guidelines</h1>
        <p>Simple, Transparent & Author-Friendly Process</p>
      </div>

      <section className="content-section">
        <h2>How to Submit</h2>
        <ul>
          <li>
            Authors are invited to submit original research papers in
            <strong> .doc or .pdf </strong> format.
          </li>
          <li>
            Submissions can be made through our Online Submission Form, Email,
            or WhatsApp.
          </li>
          <li>All submissions are acknowledged within 24 hours.</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Paper Template</h2>
        <ul>
          <li>
            <strong>Title:</strong> Concise and informative.
          </li>
          <li>
            <strong>Abstract:</strong> 150–250 words summarizing the study.
          </li>
          <li>
            <strong>Keywords:</strong> 4–6 relevant keywords.
          </li>
          <li>
            <strong>Structure:</strong> Introduction, Methodology, Results,
            Conclusion, and References.
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Plagiarism Policy</h2>
        <p>
          UJAR strictly follows an anti-plagiarism policy. All submitted papers
          must be original and free from plagiarism. Manuscripts failing to meet
          originality standards will be rejected.
        </p>
      </section>
    </div>
  );
};

export default SubmissionGuidelinesPage;
