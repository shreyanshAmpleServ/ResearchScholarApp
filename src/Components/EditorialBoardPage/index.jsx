const editors = {
  "Editor-in-Chief": [
    {
      name: "Er. Kundan Bhushan",
      email: "kundan.bhushan.ujar@protonmail.com",
      degree: [
        "M.Tech (Environmental Engineering)",
        "B.Tech (Civil Engineering)",
      ],
    },
  ],
  "Associate Editor": [
    {
      name: "Er. Praveen Kumar Yadav",
      email: "praveenyadav.ujar@protonmail.com",
      degree: [
        "M.Tech (Environmental Engineering)",
        "B.Tech (Civil Engineering)",
      ],
    },
  ],
  "Editorial Members": [
    {
      name: "Er. Vaishali Saxena",
      email: "vaishalisaxenaujar@proton.me",
      degree: ["M.Tech (Biotechnology)", "B.Tech (Biotechnology)"],
    },
    {
      name: "Parvez Alam Ansari",
      email: "parvezalam.ujar@protonmail.com",
      degree: ["MBA (HR, Finance)", "BBA"],
    },
    {
      name: "Er. Satyam Singh",
      email: "satyam.ujar@proton.me",
      degree: ["B.Tech (Computer Science Engineering)"],
    },
    {
      name: "Er. Shreyansh Tripathi",
      email: "shreyansh.ujar@proton.me",
      degree: ["B.Tech (Computer Science Engineering)"],
    },
    {
      name: "Er. Sayyed Md. Raja",
      email: "sayyedraja.ujar@protonmail.com",
      degree: ["B.Tech (Mechanical Engineering)"],
    },
    {
      name: "Satish Yadav",
      email: "satishyadav.ujar@protonmail.com",
      degree: ["M.Sc. (Mathematics, Physics)", "B.Sc., B.Ed."],
    },
  ],
};

const EditorialBoardPage = () => {
  return (
    <div className="page-wrapper fade-in">
      <div className="page-header">
        <h1>Editorial Board</h1>
        <p>Guided by Academic Excellence & Research Integrity</p>
      </div>

      {Object.entries(editors).map(([role, members]) => (
        <section className="content-section" key={role}>
          <h2>{role}</h2>

          {members.map(({ name, email, degree }) => (
            <div className="profile-card slide-up" key={email}>
              <h3>{name}</h3>
              <a href={`mailto:${email}`}>{email}</a>
              <p>
                {degree.map((d, i) => (
                  <span key={i}>
                    {d}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </section>
      ))}

      <section className="content-section">
        <h2>Editorial Policy</h2>
        <p>
          The Editorial Board of UJAR is committed to academic integrity,
          ethical publishing, and transparent peer review.
        </p>
      </section>
    </div>
  );
};

export default EditorialBoardPage;
