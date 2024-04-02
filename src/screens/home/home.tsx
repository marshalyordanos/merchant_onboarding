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
import { Department } from "../../models/department/department";
import Department_service from "./widgets/forms/Department_service";
import { message, Button, Result, Modal } from "antd";
import { Organization } from "../../models/organization/organization";

axios.defaults.baseURL = "http://192.168.0.119:5005";
// axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const Home = () => {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const modalStyles = {
    header: {
      borderRadius: 0,
      paddingInlineStart: 5,
    },
    body: {
      boxShadow: "inset 0 0 5px #999",
      borderRadius: 5,
    },
    mask: {
      backdropFilter: "blur(10px)",
    },
    footer: {
      borderTop: "1px solid #333",
    },
    content: {
      boxShadow: "0 0 30px #999",
    },
  };
  const {
    register: typeRegister,
    handleSubmit: typeHandleSubmit,
    formState: { errors: typeErrors },
  } = useForm();
  const [orgInfo, setOrgInfo] = useState({
    category_id: "",
    country: "",
    name: "",
    description: "",
    logo: "",
    capital: 0,
    reg_date: "",
    legal_condition_id: "",
    // taxes: [
    //   {
    //     tax_id: v.orgTax,
    //     file: v.tax[0],
    //     status: {
    //       verified: false,
    //       status: "",
    //       message: "",
    //     },
    //   },
    // ],
    departments: [],
    associates: [
      {
        position: "",
        phone_number: "",
        full_name: "",
      },
    ],
    details: {
      TIN: "",
      TINFile: null,
      RegNo: "",
      RegFile: null,
      Status: {
        Id: "00000000-0000-0000-0000-000000000000",
        Verified: false,
        Status: "",
        Message: "",
      },
    },
    status: {
      verified: false,
      status: "",
      message: "",
    },
    retention_status: {
      can_retain: false,
      file: null,
    },
    taxes: [
      {
        tax_id: "39ff7fe8-1c5f-4523-aaf4-1a4ab260cdd4",
        file: null,
        status: {
          verified: false,
          status: "",
          message: "",
        },
      },
    ],
  });
  useEffect(() => {
    console.log(orgInfo, "organization info");
  }, [orgInfo]);
  const [orgTypes, setOrgTypes] = useState<Category[] | null>();
  const [selectedOrgType, setSelectedOrgType] = useState<Category | null>();
  const [countries, setCountries] = useState<Country[] | null>();
  const [selectedCountry, setSelectedCountry] = useState<Country | null>();
  const [department, setDepartment] = useState<Department[] | null>([]);
  const [departments, setDeparments] = useState([]);
  const [org, setOrg] = useState<any>();

  //to be removed later
  const [selectedFile, setSelectedFile] = useState(null);
  const [sampleOrgInfo, setSampleOrgInfo] = useState({});
  const [agreement, setAgreement] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [resultView, setResultView] = useState<boolean>(false);
  const buttonText =
    index === 3 && !loading
      ? "Save"
      : index === 3 && loading
      ? "Saving..."
      : "Continue \u00A0 \u2192";
  useEffect(() => {
    console.log(
      "orginfo((((((((((((((((((((((((((9))))))))))))))))))))))))))",
      orgInfo
    );
  }, [orgInfo]);
  useEffect(() => {
    console.log(
      "orginfo((((((((((((((((((((((((((9))))))))))))))))))))))))))",
      org
    );
  }, [org]);
  const fetchCategories = async () => {
    try {
      const res = await axios.get("/orgs/categories");
      var orgTypes: Category[] = (res.data["data"] as Map<string, any>[]).map(
        (e) => Category.fromJSON(e)
      );
      console.log("orgTypes", orgTypes);
      setOrgTypes(orgTypes.filter((e) => e.Parents.length == 0));
    } catch (error) {}
  };

  const fetchCountries = async () => {
    try {
      const res = await axios.get("/help/countries");
      console.log(res, "country fetch bres");
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

  const uploadFile = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("bucket_id", "ba670353-87a0-4396-90c5-07a0a1e67a99");
      formData.append("dir", "orgFile/files");
      formData.append(
        "token",
        "Jzhnn82ioq/+glTAHkDptMmd+6HTxM+cRH+dNtkfL21GRE2VaUxIWo2fL7WgN6qh9NWz9CwkXwmmux3FqM1oGe7HMgNpyhkWZN2a84Hzy2yydyH6QJBih3voouRRxpG69D7obGVyuFbayeFHnbTcjQlos6E9QxuLgsoaVjCUXkJJrS8y/qIhPxLZJzf0cRim5MnaGP9iZphA9UXT5L+I42bSgSwstyT6ISRrt6AyNzM2ye9XVQmqEgqxrn+dnidmarEwcsvzW731jdjiD+EXU/u9ecj+lI4EA8x8alTkkIs/aJwYvO/cIhwK0duYtOba92rM61EqpKVwFuve6PWeGw=="
      );
      formData.append("key", "lakipay");

      const response = await fetch("http://196.189.126.183:5000/v1/objects", {
        method: "POST",
        body: formData,
      });
      // console.log(await response.json(), "response");

      const data = await response.json();
      console.log(data);
      const filePath = `http://196.189.126.183:5000/v1/objects/file/${data.path}`;

      return filePath;
    } catch (error) {
      console.error("File upload error:", error);

      return null;
    }
  };
  useEffect(() => {
    console.log("loading state...$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$", loading);
  }, [loading]);
  const processFiles = async (dataObject: any) => {
    const updatedDataObject: any = {};

    await Promise.all(
      Object.keys(dataObject).map(async (key) => {
        const value = dataObject[key];

        if (value instanceof File) {
          updatedDataObject[key] = await uploadFile(value);
        } else if (Array.isArray(value)) {
          // Preserve array structure
          updatedDataObject[key] = await Promise.all(
            value.map(async (arrayItem) => {
              if (typeof arrayItem === "object" && arrayItem !== null) {
                return await processFiles(arrayItem);
              } else {
                return arrayItem;
              }
            })
          );
        } else if (typeof value === "object" && value !== null) {
          updatedDataObject[key] = await processFiles(value);
        } else {
          updatedDataObject[key] = value;
        }
      })
    );
    // setLoading(false);
    return updatedDataObject;
  };
  const handleOrgInfoSubmit = async (data: any) => {
    const response = await axios.post("/orgs", data);
    console.log(response, "final repsonse");
    // await fetch("http://192.168.0.119:5005/orgs", {
    //   method: "POST",
    //   body: JSON.parse(data),
    // });
    return response;
  };

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
                console.log(
                  v.target.value,
                  "org type value*******************"
                );
                setOrgInfo({ ...orgInfo, category_id: v.target.value });
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
            }`}>
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
                    console.log(
                      countries.find(
                        (e) => e.Iso2 + "_" + e.Name == v.target.value
                      )
                    );
                    setSelectedCountry(
                      countries.find(
                        (e) => e.Iso2 + "_" + e.Name == v.target.value
                      )
                    );
                  },
                  required: {
                    value: true,
                    message: "Field is required",
                  },
                })}
                //change iso2 to id
                value={
                  (selectedCountry &&
                    selectedCountry.Iso2 + "_" + selectedCountry.Name) ??
                  ""
                }
                required
                className={`dropdown_input ${
                  typeErrors["country"] != undefined ? " error" : ""
                }`}>
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
                        <option key={e.Id} value={e.Iso2 + "_" + e.Name}>
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
  const _step2Ref = useRef<any>();
  const _step3Ref = useRef<any>();
  // const _step4Ref = useRef();

  return (
    <div className="home">
      <div className="home_content">
        <div className="home_content_header">
          <div
            onClick={() => {
              router.replace("/cancel");
            }}
            className="home_content_header--leading">
            ⤬
          </div>
          <div className="home_content_header--title">Merchant Onboarding</div>
          <div className="home_content_header--actions"></div>
        </div>
        <div className="home_content_body">
          {orgTypes === null || countries === null ? (
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
                      title={"Department & Service"}
                      subtitle={
                        "Select the organization's department and service"
                      }
                      key={2}
                      index={3}
                      isActive={index == 2}
                    />,
                    <Step
                      title={"Terms & Conditions"}
                      subtitle={"Select the organization's origin and type"}
                      key={3}
                      index={4}
                      isActive={index == 3}
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
                            setDepartment={setDepartment}
                            org={org}
                            setIndex={setIndex}
                            index={index}
                            setOrg={setOrg}
                            orgInfo={orgInfo}
                            setOrgInfo={setOrgInfo}
                            onSubmit={(v) => {
                              console.log("step23");
                              console.log("step23 ---000", v);
                              const [year, month, day] = v.regDate.split("-");
                              const convertedDate = `${month}/${day}/${year}`;
                              // const formatted
                              setOrgInfo({
                                ...orgInfo,
                                category_id: org?.Category?.Id,
                                country: org?.Country,
                                name: v.name,
                                description: v.description,
                                logo: org?.Logo,
                                capital: Number(v.capital),
                                reg_date: convertedDate,
                                legal_condition_id: v.legalCondition,
                                // taxes: [
                                //   {
                                //     tax_id: v.orgTax,
                                //     file: v.tax[0],
                                //     status: {
                                //       verified: false,
                                //       status: "",
                                //       message: "",
                                //     },
                                //   },
                                details: {
                                  TIN: org?.Details?.tin,
                                  TINFile:
                                    orgInfo.taxes !== undefined &&
                                    orgInfo?.taxes[0]?.file,
                                  RegNo: org?.Details?.reg_no,
                                  RegFile: org?.Details?.reg_file,
                                  Status: {
                                    Id: "00000000-0000-0000-0000-000000000000",
                                    Verified: false,
                                    Status: "",
                                    Message: "",
                                  },
                                },
                                departments: [],
                                associates: [
                                  {
                                    position: v.associatePosition,
                                    phone_number: v.associatePhonenumber,
                                    full_name: v.associateFullname,
                                  },
                                ],
                                status: {
                                  verified: false,
                                  status: "",
                                  message: "",
                                },
                                retention_status: {
                                  can_retain: false,
                                  file: "",
                                },
                              });
                              if (
                                orgInfo?.taxes[0].tax_id !== undefined &&
                                orgInfo?.taxes[0].tax_id !== null &&
                                orgInfo?.taxes[0].tax_id !== ""
                              ) {
                                if (
                                  org?.Details?.reg_file !== null &&
                                  org?.Details?.reg_file !== undefined &&
                                  org?.Details?.reg_file !== ""
                                ) {
                                  if (
                                    orgInfo?.taxes[0]?.file !== null &&
                                    orgInfo?.taxes[0]?.file !== undefined &&
                                    orgInfo?.taxes[0]?.file !== ""
                                  ) {
                                    setIndex(index + 1);
                                  } else {
                                    message.info("Supporting file missing");
                                  }
                                } else {
                                  message.info("Registration file missing");
                                }
                              } else {
                                message.info(
                                  "Please choose tax collection methodology"
                                );
                              }
                            }}
                            ref={_step2Ref}
                          />
                        );
                      }
                      return _step2;
                    }

                    case 2: {
                      return (
                        <Department_service
                          departments={departments}
                          department={department}
                          setDepartments={setDeparments}
                          onSubmit={(v) => {
                            console.log("step23");

                            console.log("departsments", v);
                            setOrgInfo({ ...orgInfo, departments: v });
                            setIndex(index + 1);
                          }}
                          ref={_step3Ref}
                        />
                      );
                    }

                    case 3: {
                      var _termsForm = (
                        <TermsForm
                          // onSubmit={(v) => {
                          //   console.log("step23");

                          //   console.log("departsments", v);
                          //   setOrgInfo({ ...orgInfo, departments: v });
                          // }}
                          ref={_step3Ref}
                          agreement={agreement}
                          setAggrement={setAgreement}
                        />
                      );
                      return _termsForm;
                    }
                    case 4: {
                      agreement
                        ? console.log("last save step")
                        : console.log("not agreed so no continue to last step");
                    }

                    default:
                      break;
                  }
                })()}
              </div>
              <div className="row">
                <button
                  // disabled={!agreement}
                  onClick={() => {
                    switch (index) {
                      case 0: {
                        typeHandleSubmit((v: any) => {
                          console.log("value---- ", v);
                          setOrgInfo({
                            ...orgInfo,
                            category_id: v?.orgType,
                            country: v?.country.slice(0, 2),
                          });

                          setIndex(index + 1);
                        })();
                      }
                      case 1:
                        {
                          if (_step2Ref.current != undefined) {
                            console.log(
                              "11212121212121212121212121212-===-=--==-=-=-=-=-=-=-=-=-="
                            );
                            _step2Ref.current.validate();
                            // .validateClick();
                            console.log(
                              "11212121212121212121212121212-===-=--==-=-=-=-=-=-=-=-=-=***************"
                              // _step2Ref.current.value
                            );
                            // setIndex(index + 1);
                          }
                        }
                        break;

                      case 2:
                        {
                          if (_step3Ref.current != undefined) {
                            console.log(
                              "validateClick-===-=--==-=-=-=-=-=-=-=-=-=case2"
                            );

                            _step3Ref?.current?.validateClick();
                            console.log(
                              "validateClick-===-=--==-=-=-=-=-=-=-=-=-=***************case2"
                            );
                          }
                        }
                        break;
                      case 3:
                        {
                          // if (_step4Ref.current != undefined) {
                          console.log(
                            "validateClick-===-=--==-=-=-=-=-=-=-=-=-=case3",
                            index
                          );
                          if (agreement) {
                            setLoading(true);

                            processFiles(orgInfo).then((updatedDataObject) => {
                              console.log(
                                "Updated Data Object:",
                                updatedDataObject
                              );
                              // send to merchant on board api after converitng file to path

                              handleOrgInfoSubmit(updatedDataObject).then(
                                (res) => {
                                  console.log(
                                    res,
                                    "repsosneinside the case three button"
                                  );

                                  if (res.status === 200) {
                                    setResultView(true);
                                    setLoading(false);
                                  } else {
                                    message.error("An error occurred");
                                  }
                                }
                              );
                            });
                          } else {
                            message.info(
                              "Please agree to the terms and conditions"
                            );
                          }
                          // _step4Ref.current.validateClick();
                          console.log(
                            "validateClick-===-=--==-=-=-=-=-=-=-=-=-=***************case3"
                          );
                          // setIndex(index + 1);
                          // }
                        }
                        break;

                      default:
                        break;
                    }
                  }}
                  className="btn">
                  {/* Continue &nbsp; &rarr; */}
                  {buttonText}
                </button>

                {index > 0 && (
                  <div
                    onClick={() => {
                      setIndex(index - 1);
                    }}
                    style={{ marginLeft: "1.6rem" }}
                    className="btn outline">
                    Back
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <Modal
          closeIcon={null}
          maskClosable={false}
          onCancel={() => {
            window.location.reload();
          }}
          open={resultView}
          footer={null}>
          <Result
            status="success"
            title="Organization registration successful!"
            subTitle="Please wait while we verify your documents."
            extra={[
              <a
                className="btn_stl_result"
                href=""
                key="go"
                onClick={() => window.location.reload()}>
                Go to Dashboard
              </a>,
            ]}
          />
        </Modal>

        <div className="home_content_footer">
          &copy; LakiPay 2024, All rights reserved.
        </div>
      </div>
    </div>
  );
};
