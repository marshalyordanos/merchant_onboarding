import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { BookFilledIcon } from "../../../../widgets/icons/icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { LegalCondition } from "../../../../models/legal_condition/legal_condition";
import axios from "axios";
import { IosSpinner } from "../../../../widgets/loading/loading";
import { Organization } from "../../../../models/organization/organization";
import { Tax } from "../../../../models/tax/tax";
import { message } from "antd";

export const EthBusOrgForm = forwardRef(
  (
    props: {
      onSubmit: SubmitHandler<any>;
      setDepartment: any;
      org: any;
      setOrg: any;
      orgInfo: any;
      setOrgInfo: any;
      setIndex: any;
      index: any;
    },
    ref: React.ForwardedRef<any>
  ) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
      setValue,
    } = useForm();

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>();

    const [legalConditions, setLegalConditions] = useState<LegalCondition[]>();
    const [taxes, setTaxes] = useState<Tax[]>([]);

    useImperativeHandle(ref, () => ({
      validate() {
        console.log("validsate ----");
        handleSubmit(props.onSubmit)();

        // props.setIndex(props.index + 1);

        console.log("validsate ----*****");
      },
    }));

    const fetchTaxes = async () => {
      try {
        const res = await axios.get("/orgs/taxes");
        var taxes: Tax[] = (res.data["data"] as Map<string, any>[]).map((e) =>
          Tax.fromJSON(e)
        );
        let taxesDefault: any = taxes;
        console.log(taxesDefault, "taxes default setting fetch result");
        setTaxes(taxes);
        {
          props.orgInfo.taxes !== undefined &&
            props.orgInfo.taxes[0].id === "" &&
            props.setOrgInfo({
              ...props.orgInfo,
              taxes: [
                ...props.orgInfo?.taxes,
                {
                  tax_id: taxesDefault[0]?.Id,
                  status: {
                    verified: false,
                    status: "",
                    message: "",
                  },
                  file: null,
                },
              ],
            });
        }
        console.log("taxes ----", taxes);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchLegalConditions = async () => {
      try {
        const res = await axios.get("/orgs/legal-conditions");
        var legalConditions: LegalCondition[] = (
          res.data["data"] as Map<string, any>[]
        ).map((e) => LegalCondition.fromJSON(e));
        setLegalConditions(legalConditions);
        console.log(legalConditions);
      } catch (error) {
        console.log(error);
      }
    };

    const checkTIN = async (tin: string) => {
      console.log(tin);
      try {
        props.setOrg(null);
        setError(null);
        setLoading(true);
        const res = await axios.get(`/org/check-tin?tin=${tin}`);
        console.log(
          "res************************************************************+++++++++++++++++++++++++++++++++++++++++",
          res.data["data"]
        );

        if (res.data == null) {
          throw "Could not findtin";
        }
        props.setOrg((p) => {
          var org = Organization.fromJSON(res.data["data"]);
          console.log(
            org,
            "organizatoinin setting orfaoefjoiaef873y48f734h87fh38w4hf87h"
          );
          setValue("name", org.Name);
          setValue("capital", org.Capital);
          setValue("regDate", org.RegDate.toISOString().substr(0, 10));
          setValue("regNo", org.Details["reg_no"]);
          setValue(
            "legalCondition",
            !!org.LegalCondition && org.LegalCondition.Id
          );

          return org;
        });
        props.setDepartment(res.data["data"]["departments"]);

        setLoading(false);
      } catch (error) {
        console.log("Error :" + error);

        props.setOrg(null);
        setLoading(false);
        setError("FETCH_ORG");
        console.log(error);
      }
    };

    useEffect(() => {
      fetchLegalConditions();
      fetchTaxes();
    }, []);
    useEffect(() => {
      console.log(props.org, "org first********************************");
      console.log(props.orgInfo, "org second********************************");
    }, [props.org, props.orgInfo]);
    return (
      <div className="column">
        <div className="expanded">
          <BookFilledIcon color="grey" width={6.4} height={6.4} />
          <div>Please enter your organization detail to continue</div>
        </div>
        <div className="form">
          <div className="section">
            <div className="section_title">Organization Identification</div>
            <div className="input_field">
              <div className="input_field_label">Tax Identification Number</div>
              <div
                className={`input_field_wrapper ${
                  errors["tin"] != undefined ? " error" : ""
                }`}>
                <input
                  value={props?.org?.Details?.tin}
                  onChange={() => {
                    props.setOrg(null);
                    // props.setOrgInfo(null);
                  }}
                  onBlur={() => {
                    props.setOrg(null);
                    // props.setOrgInfo(null);
                  }}
                  {...register("tin", {
                    onChange: (v) => {
                      props.setOrg(null);
                      // props.setOrgInfo(null);
                      if (v.target.value.length == 10) {
                        console.log("Check TIN");

                        checkTIN(v.target.value);
                      } else {
                        setLoading(false);
                        // controller.abort();
                      }
                      console.log(v.target.value);
                    },
                    required: {
                      value: true,
                      message: "Field is required",
                    },
                    minLength: {
                      value: 10,
                      message: "TIN must be 10",
                    },
                    maxLength: {
                      value: 10,
                      message: "TIN must be 10",
                    },
                  })}
                  className={`input_field_input ${
                    errors["tin"] != undefined ? " error" : ""
                  }`}
                  type="text"
                  placeholder="Enter your TIN"
                  maxLength={10}
                  minLength={10}
                />
                {/* {errors && errors["tin"] && (
                  <div className="input_field_error">{`${errors["tin"].message}`}</div>
                )} */}
                <div className="input_field_suffix">
                  {error == "FETCH_ORG" ? (
                    <div
                      onClick={() => {
                        checkTIN(watch("tin"));
                      }}>
                      {" "}
                      Err{" "}
                    </div>
                  ) : loading ? (
                    <IosSpinner />
                  ) : !!props.org ? (
                    "✅"
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {errors && errors["tin"] && (
                <div className="input_field_error">{`${errors["tin"].message}`}</div>
              )}
            </div>
          </div>
          {props.org && (
            <div className="section">
              <div className="section_title">Organization Info</div>
              <div className="input_field">
                <div className="input_field_label">Name</div>
                <div
                  className={`input_field_wrapper ${
                    errors["name"] != undefined ? " error" : ""
                  }`}>
                  <input
                    {...register("name", {
                      // disabled: true,
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                    })}
                    className={`input_field_input ${
                      errors["name"] != undefined ? " error" : ""
                    }`}
                    type="text"
                    readOnly
                    // defaultValue={org.Name}
                    placeholder="Enter organization name"
                    value={props?.org?.Name}
                  />
                </div>
                {errors && errors["name"] && (
                  <div className="input_field_error">{`${errors["name"].message}`}</div>
                )}
              </div>
              <div className="input_field">
                <div className="input_field_label">Description</div>
                <div
                  className={`input_field_wrapper ${
                    errors["description"] != undefined ? " error" : ""
                  }`}>
                  <input
                    {...register("description", {})}
                    className={`input_field_input ${
                      errors["description"] != undefined ? " error" : ""
                    }`}
                    type="text"
                    placeholder="Enter organization description"
                    value={props?.org?.Description}
                    onChange={(e) => {
                      props.setOrg({
                        ...props.org,
                        Description: e.target.value,
                      });
                    }}
                  />
                </div>
                {errors && errors["description"] && (
                  <div className="input_field_error">{`${errors["description"].message}`}</div>
                )}
              </div>
              <div className="input_field">
                <div className="input_field_label">Capital</div>
                <div
                  className={`input_field_wrapper ${
                    errors["capital"] != undefined ? " error" : ""
                  }`}>
                  <input
                    {...register("capital", {
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                    })}
                    className={`input_field_input ${
                      errors["capital"] != undefined ? " error" : ""
                    }`}
                    type="number"
                    readOnly
                    // defaultValue={org.Capital}
                    placeholder="Enter organization capital"
                    value={props?.org?.Capital}
                    onChange={(e) => {
                      props.setOrg({
                        ...props.org,
                        Capital: e.target.value,
                      });
                    }}
                  />
                </div>
                {errors && errors["capital"] && (
                  <div className="input_field_error">{`${errors["capital"].message}`}</div>
                )}
              </div>
              <div className="input_field">
                <div className="input_field_label">Logo</div>
                <div
                  className={`input_field_wrapper ${
                    errors["logo"] != undefined ? " error" : ""
                  }`}>
                  <input
                    {...register("logo", {})}
                    className={`input_field_input ${
                      errors["logo"] != undefined ? " error" : ""
                    }`}
                    type="file"
                    accept="image/png, image/gif, image/jpeg"
                    placeholder="Enter organization logo"
                    // value={props?.org?.Logo}
                    onChange={(e) => {
                      props.setOrg({
                        ...props.org,
                        Logo: e.target.files[0],
                      });
                      // props.setOrgInfo({})
                    }}
                  />
                  {props?.org?.Logo && (
                    <div>
                      <p>Selected File: {props?.org?.Logo?.name}</p>
                      <p>File Size: {props?.org?.Logo?.size} bytes</p>
                    </div>
                  )}
                </div>
                {errors && errors["logo"] && (
                  <div className="input_field_error">{`${errors["logo"].message}`}</div>
                )}
              </div>
              <div className="input_field">
                <div className="input_field_label">Registration Date</div>
                <div
                  className={`input_field_wrapper ${
                    errors["regDate"] != undefined ? " error" : ""
                  }`}>
                  <input
                    {...register("regDate", {
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                    })}
                    className={`input_field_input ${
                      errors["regDate"] != undefined ? " error" : ""
                    }`}
                    type="date"
                    readOnly
                    placeholder="Enter organization registration date"
                    value={props?.org?.RegDate.toISOString().split("T")[0]}
                  />
                </div>
                {errors && errors["regDate"] && (
                  <div className="input_field_error">{`${errors["regDate"].message}`}</div>
                )}
              </div>
              <div className="input_field">
                <div className="input_field_label">Registration No</div>
                <div
                  className={`input_field_wrapper ${
                    errors["regNo"] != undefined ? " error" : ""
                  }`}>
                  <input
                    {...register("regNo", {
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                    })}
                    className={`input_field_input ${
                      errors["regNo"] != undefined ? " error" : ""
                    }`}
                    // type="date"
                    readOnly
                    placeholder="Enter organization registration no"
                    value={props?.org?.Details?.reg_no}
                    // onChange={(e) => {
                    //   props.setOrg({
                    //     ...props.org,
                    //     Details: {
                    //       ...props.org.Details,
                    //       reg_no: e.target.value,
                    //     },
                    //   });
                    // }}
                  />
                </div>
                {errors && errors["regNo"] && (
                  <div className="input_field_error">{`${errors["regNo"].message}`}</div>
                )}
              </div>
              <div className="input_field">
                <div className="input_field_label">
                  Registration Certificate *
                </div>
                <div
                  className={`input_field_wrapper ${
                    errors["regFile"] != undefined ? " error" : ""
                  }`}>
                  <input
                    {...register("regFile", {
                      // required: {
                      //   value: true,
                      //   message: "Field is required",
                      // },
                    })}
                    className={`input_field_input`}
                    type="file"
                    accept="image/png, image/jpeg, application/pdf"
                    placeholder="Upload your registration file"
                    // value={props?.org?.Details?.reg_no}
                    onChange={(e) => {
                      props.setOrg({
                        ...props.org,
                        Details: {
                          ...props.org.Details,
                          reg_file: e.target.files[0],
                        },
                      });
                    }}
                  />
                  {props?.org?.Details?.reg_file && (
                    <div>
                      <p>
                        Selected File: {props?.org?.Details?.reg_file?.name}
                      </p>
                      <p>
                        File Size: {props?.org?.Details?.reg_file?.size} bytes
                      </p>
                    </div>
                  )}
                </div>
                {errors && errors["regFile"] && (
                  <div className="input_field_error">{`${errors["regFile"].message}`}</div>
                )}
              </div>
              {legalConditions && (
                <div className="dropdown">
                  <div className="dropdown_label">Legal Condition</div>
                  <select
                    value={
                      props?.orgInfo?.legal_condition_id ||
                      props?.org?.LegalCondition?.Id
                    }
                    {...register("legalCondition", {
                      onChange: (v) => {
                        console.log(v.target.value);
                        // console.log(orgTypes.find((e) => e.Id == v.target.value));
                        // setSelectedOrgType(orgTypes.find((e) => e.Id == v.target.value));
                        // setSelectedCountry(null);
                      },
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                    })}
                    // value={org.LegalCondition.Id}
                    className={`dropdown_input ${
                      errors["legalCondition"] != undefined ? " error" : ""
                    }`}
                    // onChange={(e) => {
                    //   props.setOrg({
                    //     ...props?.org,
                    //     LegalCondition: {
                    //       ...props?.org?.LegalCondition?.Id,
                    //       Id: e.target.value,
                    //     },
                    //   });
                    //  value={.LegalCondition?.Id}
                    // }}
                  >
                    <option value="" disabled>
                      Select organization type
                    </option>
                    {legalConditions &&
                      legalConditions.map((e) => {
                        return (
                          <option
                            key={e.Id}
                            value={e.Id}
                            disabled={
                              !!props.org.LegalCondition &&
                              props.org.LegalCondition.Id != e.Id
                            }>
                            {e.Name}
                          </option>
                        );
                      })}
                  </select>
                  {errors["legalCondition"] && (
                    <div className="dropdown_error">{`${errors["legalCondition"].message}`}</div>
                  )}
                </div>
              )}
            </div>
          )}
          {props.org && (
            <div className="section">
              <div className="section_title">Organization Tax</div>
              <div className="dropdown">
                <div className="dropdown_label">Tax Collection Method</div>
                <select
                  // value={d}
                  value={
                    props?.orgInfo?.taxes?.length > 0 &&
                    props.orgInfo?.taxes[0].tax_id !== undefined &&
                    props.orgInfo?.taxes[0].tax_id
                  }
                  {...register("orgTax", {
                    onChange: (v) => {
                      console.log(v.target.value);
                      props.setOrgInfo({
                        ...props?.orgInfo,
                        taxes: [
                          {
                            ...props?.orgInfo?.taxes[0],
                            tax_id: v.target.value,
                          },
                        ],
                      });
                    },
                    // required: {
                    //   value: true,
                    //   message: "Field is required",
                    // },
                  })}
                  defaultValue={""}
                  className={`dropdown_input ${
                    errors["orgTax"] != undefined ? " error" : ""
                  }`}>
                  <option value="" disabled>
                    Select tax collection method
                  </option>
                  {taxes &&
                    taxes.map((e) => {
                      return (
                        <option key={e.Id} value={e.Id}>
                          {e.Name + "\t" + e.Rate * 100 + "%"}
                        </option>
                      );
                    })}
                </select>
                {errors["orgTax"] && (
                  <div className="dropdown_error">{`${errors["orgTax"].message}`}</div>
                )}
              </div>
              <div className="input_field">
                <div className="input_field_label">Supporting File</div>
                <div
                  className={`input_field_wrapper ${
                    errors["tax"] != undefined ? " error" : ""
                  }`}>
                  <input
                    {...register("tax", {
                      // required: {
                      //   value: true,
                      //   message: "Field is required",
                      // },
                    })}
                    className={`input_field_input ${
                      errors["tax"] != undefined ? " error" : ""
                    }`}
                    type="file"
                    accept="image/png, image/jpeg, application/pdf"
                    placeholder="Enter your TIN"
                    onChange={(e) => {
                      props.setOrgInfo({
                        ...props?.orgInfo,
                        taxes: [
                          {
                            ...props?.orgInfo?.taxes[0],
                            file: e.target.files[0],
                          },
                        ],
                      });
                    }}
                  />
                  {props?.orgInfo?.taxes[0]?.file && (
                    <div>
                      <p>
                        Selected File: {props?.orgInfo?.taxes[0]?.file.name}
                      </p>
                      <p>
                        File Size: {props?.orgInfo?.taxes[0]?.file.size} bytes
                      </p>
                    </div>
                  )}
                </div>
                {errors && errors["tax"] && (
                  <div className="input_field_error">{`${errors["tax"].message}`}</div>
                )}
              </div>
            </div>
          )}
          {props.org && (
            <div className="section">
              <div className="section_title">Organization Associates</div>
              <div className="input_field">
                <div className="input_field_label">Full Name</div>
                <div
                  className={`input_field_wrapper ${
                    errors["associateFullname"] != undefined ? " error" : ""
                  }`}>
                  <input
                    value={props?.org?.Associates?.fullName}
                    {...register("associateFullname", {
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                    })}
                    className={`input_field_input ${
                      errors["associateFullname"] != undefined ? " error" : ""
                    }`}
                    type="text"
                    placeholder="Enter associate's full name"
                    onChange={(e) => {
                      props.setOrg({
                        ...props.org,
                        Associates: {
                          ...props.org.Associates,
                          fullName: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
                {errors && errors["associateFullname"] && (
                  <div className="input_field_error">{`${errors["associateFullname"].message}`}</div>
                )}
              </div>
              <div className="input_field">
                <div className="input_field_label">Phone Number</div>
                <div
                  className={`input_field_wrapper ${
                    errors["associatePhonenumber"] != undefined ? " error" : ""
                  }`}>
                  <input
                    value={props?.org?.Associates?.phoneNumber}
                    {...register("associatePhonenumber", {
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                    })}
                    className={`input_field_input ${
                      errors["associatePhonenumber"] != undefined
                        ? " error"
                        : ""
                    }`}
                    type="text"
                    placeholder="Enter associate's phone number"
                    onChange={(e) => {
                      props.setOrg({
                        ...props.org,
                        Associates: {
                          ...props.org.Associates,
                          phoneNumber: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
                {errors && errors["associatePhonenumber"] && (
                  <div className="input_field_error">{`${errors["associatePhonenumber"].message}`}</div>
                )}
              </div>
              <div className="input_field">
                <div className="input_field_label">Position</div>
                <div
                  className={`input_field_wrapper ${
                    errors["associatePosition"] != undefined ? " error" : ""
                  }`}>
                  <input
                    value={props?.org?.Associates?.position}
                    {...register("associatePosition", {
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                    })}
                    className={`input_field_input ${
                      errors["associatePosition"] != undefined ? " error" : ""
                    }`}
                    type="text"
                    placeholder="Enter associate's position (Manager, Owner, ...)"
                    onChange={(e) => {
                      props.setOrg({
                        ...props.org,
                        Associates: {
                          ...props.org.Associates,
                          position: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
                {errors && errors["associatePosition"] && (
                  <div className="input_field_error">{`${errors["associatePosition"].message}`}</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);
