import React, { useState } from "react";
import "./_termsform.scss";
export const TermsForm = ({
  agreement,
  setAggrement,

}) => {
  // const agreeRef = useRef();
  // const [uploadedFilePath, setUploadedFilePath] = useState(null);
  const handleChange = () => {
    setAggrement(!agreement);
  };
  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  //   setSampleOrgInfo({
  //     ...sampleOrgInfo,
  //     logo: event.target.files[0],
  //     category: {
  //       id: "2",
  //       name: "2",
  //     },
  //     details: {
  //       TIN: "3",
  //       TINFile: event.target.files[0],
  //       RegNo: "4",
  //       RegFile: event.target.files[0],
  //     },
  //   });
  // };
  // useEffect(() => {
  //   document.addEventListener("DOMContentLoaded", function () {
  //     const element = document.getElementById("bottom_btn");
  //     if (element) {
  //       console.log(element, "element&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
  //       // const elementHeight = element.clientHeight;
  //       // console.log("Element Height:", elementHeight);
  //     } else {
  //       console.log("Element with id 'bottom_btn' not found.");
  //     }
  //   });
  // });
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>
      {/* <input type="file" onChange={handleFileChange} /> */}
      {/* <button onClick={handleUpload}>Upload</button> */}
      <div className="terms-content">
        <p>
          Welcome to LakiPay! By accessing and using our Merchant Onboarding
          services, you agree to comply with and be bound by the following terms
          and conditions. These terms govern your relationship with LakiPay and
          outline the responsibilities and rights of both parties. Please read
          these terms carefully before proceeding with the merchant onboarding
          process.
        </p>

        <p>
          <strong>1. Merchant Eligibility:</strong> To use our services, you
          must be a legal entity or an individual of at least 18 years old
          capable of entering into a legally binding agreement. By applying for
          merchant onboarding, you represent and warrant that you meet these
          eligibility requirements.
        </p>

        <p>
          <strong>2. Application Process:</strong> The merchant onboarding
          process involves submitting necessary information and documents for
          verification. LakiPay reserves the right to accept or reject
          applications at our discretion. You agree to provide accurate and
          complete information during the application process.
        </p>

        <p>
          <strong>3. Service Terms:</strong> Once approved, you will be bound by
          the specific terms and conditions related to our merchant services.
          These include, but are not limited to, transaction fees, payment
          processing timelines, and any additional terms outlined in your
          merchant agreement.
        </p>

        <p>
          <strong>4. Data Security:</strong> Protecting the confidentiality and
          security of your data is of utmost importance. LakiPay employs
          industry-standard security measures, but you are also responsible for
          safeguarding your login credentials and sensitive information.
        </p>

        <p>
          <strong>5. Termination:</strong> LakiPay reserves the right to
          terminate or suspend your merchant account at any time for violation
          of these terms or for any other reason deemed necessary by LakiPay.
          You may also terminate your account by providing written notice.
        </p>
        <label htmlFor="checkbox">
          {" "}
          <input
            onChange={handleChange}
            type="checkbox"
            name="checkbox"
            className="checkbox_input"
          />
          I agree to the terms and conditions.
        </label>
      </div>
    </div>
  );
};
