import React, { useEffect, useRef } from "react";
import "./_termsform.scss";
export const TermsForm = ({ agreement, setAggrement }) => {
  // const agreeRef = useRef();
  const handleChange = () => {
    setAggrement(!agreement);
  };
  // useEffect(() => {
  //   console.log("aggrement", agreement);
  // }, [agreement]);
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>

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
      </div>
      <form>
        <input
          onChange={handleChange}
          type="checkbox"
          name="checkbox"
          className="checkbox_input"
        />
        I agree to the terms and conditions.
      </form>
    </div>
  );
};
