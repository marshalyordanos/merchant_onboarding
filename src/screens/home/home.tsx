import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import "./_home.scss";
import { Stepper } from "./widgets/stepper/stepper";
import { Step } from "./widgets/step/step";
import {
  BookFilledIcon,
  GlobeIcon,
  ThemeIcon,
} from "../../widgets/icons/icons";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Category } from "../../models/category/category";
import { Country, CountryFlags } from "../../models/country/country";
import { EthBusOrgForm } from "./widgets/forms/eth_bus_org_form";
import { TermsForm } from "./widgets/forms/terms_form";

axios.defaults.baseURL = "http://localhost:5005";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const Home = () => {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const {
    register: typeRegister,
    handleSubmit: typeHandleSubmit,
    formState: { errors: typeErrors },
  } = useForm();

  const [orgTypes, setOrgTypes] = useState<Category[] | null>();
  const [selectedOrgType, setSelectedOrgType] = useState<Category | null>();
  const [countries, setCountries] = useState<Country[] | null>();
  const [selectedCountry, setSelectedCountry] = useState<Country | null>();

  const fetchCategories = async () => {
    try {
      const res = await axios.get("/orgs/categories");
      var orgTypes: Category[] = (res.data["data"] as Map<string, any>[]).map(
        (e) => Category.fromJSON(e)
      );
      console.log("orgTypes",orgTypes);
      setOrgTypes(orgTypes.filter((e) => e.Parents.length == 0));
    } catch (error) {}
  };

  const fetchCountries = async () => {
    try {
      const res = await axios.get("/help/countries");
      var countries: Country[] = (res.data["data"] as Map<string, any>[]).map(
        (e) => Country.fromJSON(e)
      );
      console.log(countries);
      setCountries(countries);
    } catch (error) {}
  };

  useEffect(() => {
    console.log("Init States");

    fetchCategories();
    fetchCountries();
  }, []);

  const _primForm = (
    <div className="column">
      <div className="expanded">
        <GlobeIcon color="grey" width={6.4} height={6.4} />
        <div>
          Please select the country where you have registered your company and
          also the organization type
        </div>
      </div>
      <div className="form">
        <div className="dropdown">
          <div className="dropdown_label">Organization Type</div>
          <select
            {...typeRegister("orgType", {
              onChange: (v) => {
                console.log(v.target.value);
                console.log(orgTypes.find((e) => e.Id == v.target.value));
                setSelectedOrgType(
                  orgTypes.find((e) => e.Id == v.target.value)
                );
                setSelectedCountry(null);
              },
              required: {
                value: true,
                message: "Field is required",
              },
            })}
            defaultValue={""}
            required
            className={`dropdown_input ${
              typeErrors["orgType"] != undefined ? " error" : ""
            }`}
          >
            <option value="" disabled>
              Select organization type
            </option>
            {orgTypes &&
              orgTypes.map((e) => {
                return (
                  <option key={e.Id} value={e.Id}>
                    {e.Name}
                  </option>
                );
              })}
          </select>
          {typeErrors["orgType"] && (
            <div className="dropdown_error">{`${typeErrors["orgType"].message}`}</div>
          )}
        </div>
        {/* Check if there are any supported countries */}
        {/* Render list of countries filtered by whitelist */}
        {selectedOrgType &&
          countries.filter((e) =>
            selectedOrgType.CountryWhitelist.includes(e.Iso2)
          ).length > 0 && (
            <div className="dropdown">
              <div className="dropdown_label">Country</div>
              <select
                {...typeRegister("country", {
                  onChange: (v) => {
                    console.log(v.target.value);
                    console.log(countries.find((e) => e.Id == v.target.value));
                    setSelectedCountry(
                      countries.find((e) => e.Id == v.target.value)
                    );
                  },
                  required: {
                    value: true,
                    message: "Field is required",
                  },
                })}
                value={(selectedCountry && selectedCountry.Id) ?? ""}
                required
                className={`dropdown_input ${
                  typeErrors["country"] != undefined ? " error" : ""
                }`}
              >
                <option value="" disabled>
                  Select country
                </option>
                {countries &&
                  countries
                    .filter((e) =>
                      selectedOrgType.CountryWhitelist.includes(e.Iso2)
                    )
                    .map((e) => {
                      return (
                        <option key={e.Id} value={e.Id}>
                          {" "}
                          {CountryFlags[e.Iso2]} &nbsp; {e.Name}
                        </option>
                      );
                    })}
              </select>
              {typeErrors["country"] && (
                <div className="dropdown_error">{`${typeErrors["country"].message}`}</div>
              )}
            </div>
          )}
      </div>
    </div>
  );

  var _step2: React.JSX.Element;
  const _step2Ref = useRef();

  return (
    <div className="home">
      <div className="home_content">
        <div className="home_content_header">
          <div
            onClick={() => {
              router.replace("/cancel");
            }}
            className="home_content_header--leading"
          >
            ⤬
          </div>
          <div className="home_content_header--title">Merchant Onboarding</div>
          <div className="home_content_header--actions"></div>
        </div>
        <div className="home_content_body">
          {orgTypes == null || countries == null ? (
            <div className="column"> Loading </div>
          ) : (
            <div className="column">
              <div className="nav">
                <Stepper
                  currentStep={0}
                  steps={[
                    <Step
                      title={"Origin and Type"}
                      subtitle={"Select the organization's origin and type"}
                      key={0}
                      index={1}
                      isActive={index == 0}
                    />,
                    <Step
                      title={"Org Registration"}
                      subtitle={"Select the organization's origin and type"}
                      key={1}
                      index={2}
                      isActive={index == 1}
                    />,
                    // <Step title={"Business Registration"} subtitle={"Select the organization's origin and type"} key={2} index={3} isActive={index == 2} />,
                    <Step
                      title={"Terms & Conditions"}
                      subtitle={"Select the organization's origin and type"}
                      key={2}
                      index={3}
                      isActive={index == 2}
                    />,
                    // <Step title={"Terms & Conditions"} subtitle={"Select the organization's origin and type"} key={3} index={4} isActive={index == 3} />,
                  ]}
                />
              </div>
              <div className="expanded">
                {(() => {
                  switch (index) {
                    case 0: {
                      return _primForm;
                    }
                    case 1: {
                      if (
                        selectedCountry.Iso2 == "ET" &&
                        selectedOrgType.Name == "Business"
                      ) {
                        _step2 = (
                          <EthBusOrgForm
                            onSubmit={(v) => {
                              console.log("step23");

                              console.log("step23",v);
                            }}
                            ref={_step2Ref}
                          />
                        );
                      }
                      return _step2;
                    }
                    case 2: {
                      var _termsForm = <TermsForm />;
                      return _termsForm;
                    }
                    // case 3:
                    //   {
                    //     return _primForm;
                    //   }

                    default:
                      break;
                  }
                })()}
              </div>
              <div className="row">
                <div
                  onClick={() => {
                    switch (index) {
                      case 0: {
                        typeHandleSubmit((v) => {
                          console.log("value---- ",v);
                          setIndex(index + 1);
                        })();
                      }
                      case 1:
                        {
                          if (_step2Ref.current != undefined) {
                            console.log("11212121212121212121212121212-===-=--==-=-=-=-=-=-=-=-=-=")
                            _step2Ref.current.validate();
                            console.log("11212121212121212121212121212-===-=--==-=-=-=-=-=-=-=-=-=***************")
                            //  setIndex(index + 1);

                          }
                        }
                        break;

                      default:
                        break;
                    }
                  }}
                  className="btn"
                >
                  Continue &nbsp; &rarr;{" "}
                </div>
                {index > 0 && (
                  <div
                    onClick={() => {
                      setIndex(index - 1);
                    }}
                    style={{ marginLeft: "1.6rem" }}
                    className="btn outline"
                  >
                    Back
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="home_content_footer">
          &copy; LakiPay 2024, All rights reserved.
        </div>
      </div>
    </div>
  );
};
