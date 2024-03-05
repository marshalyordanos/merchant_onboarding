import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { BookFilledIcon } from '../../../../widgets/icons/icons'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LegalCondition } from '../../../../models/legal_condition/legal_condition';
import axios from 'axios';
import { IosSpinner } from '../../../../widgets/loading/loading';
import { Organization } from '../../../../models/organization/organization';
import { Tax } from '../../../../models/tax/tax';

export const EthBusOrgForm = forwardRef((props:{onSubmit:SubmitHandler<any>}, ref: React.ForwardedRef<any>) => {

    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm();

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>();

    const [org, setOrg] = useState<Organization>();
    const [legalConditions, setLegalConditions] = useState<LegalCondition[]>();
    const [taxes, setTaxes] = useState<Tax[]>([]);

    useImperativeHandle(ref, () => ({
        validate() {
            console.log("validsate ----")
            handleSubmit(props.onSubmit)();
            console.log("validsate ----*****")

        }
    }))

    const fetchTaxes = async () => {
        try {
            const res = await axios.get("/orgs/taxes")
            var taxes: Tax[] = (res.data["data"] as Map<string, any>[]).map((e) => Tax.fromJSON(e));
            setTaxes(taxes);
            console.log("taxes ----",taxes);

        } catch (error) {
            console.log(error);

        }
    }

    const fetchLegalConditions = async () => {
        try {
            const res = await axios.get("/orgs/legal-conditions")
            var legalConditions: LegalCondition[] = (res.data["data"] as Map<string, any>[]).map((e) => LegalCondition.fromJSON(e));
            setLegalConditions(legalConditions);
            console.log(legalConditions);

        } catch (error) {
            console.log(error);
        }
    }

    const checkTIN = async (tin: string) => {
        console.log(tin);
        try {
            setOrg(null);
            setError(null);
            setLoading(true);
            const res = await axios.get(`/org/check-tin?tin=${tin}`)
            console.log("res",res.data["data"]);
            
            if (res.data == null) {
                throw "Could not findtin"
            }
            setOrg((p) => {
                var org = Organization.fromJSON(res.data["data"]);

                setValue("name", org.Name);
                setValue("capital", org.Capital);
                setValue("regDate", org.RegDate.toISOString().substr(0, 10));
                setValue("regNo", org.Details["reg_no"]);
                setValue("legalCondition", !!org.LegalCondition && org.LegalCondition.Id);

                return org;
            });
            setLoading(false);
        } catch (error) {
            console.log("Error :"  + error);
            
            setOrg(null);
            setLoading(false);
            setError("FETCH_ORG")
            console.log(error);
        }
    }

    useEffect(() => {
        fetchLegalConditions();
        fetchTaxes();
    }, [])

    return (
        <div className='column' >
            <div className="expanded">
                <BookFilledIcon color='grey' width={6.4} height={6.4} />
                <div>Please enter your organization detail to continue</div>
            </div>
            <div className="form">
                <div className="section">
                    <div className="section_title">Organization Identification</div>
                    <div className="input_field">
                        <div className="input_field_label">
                            Tax Identification Number
                        </div>
                        <div className={`input_field_wrapper ${errors["tin"] != undefined ? " error" : ""}`}>
                            <input {...register("tin", {
                                onChange: (v) => {
                                    setOrg(null);
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
                                    message: "Field is required"
                                },
                                minLength: {
                                    value: 10,
                                    message: "TIN must be 10"
                                },
                                maxLength: {
                                    value: 10,
                                    message: "TIN must be 10"
                                }
                            })}
                                className={`input_field_input ${errors["tin"] != undefined ? " error" : ""}`}
                                type="text"
                                placeholder='Enter your TIN'
                                maxLength={10}
                                minLength={10}

                            />

                            <div className='input_field_suffix'>{error == "FETCH_ORG" ? <div onClick={() => {
                                checkTIN(watch("tin"));
                            }} > Err </div> : loading ? <IosSpinner /> : !!org ? "✅" : ""}</div>
                        </div>
                        {errors && errors["tin"] && <div className="input_field_error">{`${errors["tin"].message}`}</div>}
                    </div>
                </div>
                {org && <div className="section">
                    <div className="section_title">Organization Info</div>
                    <div className="input_field">
                        <div className="input_field_label">
                            Name
                        </div>
                        <div className={`input_field_wrapper ${errors["name"] != undefined ? " error" : ""}`}>
                            <input {...register("name", {
                                // disabled: true,
                                required: {
                                    value: true,
                                    message: "Field is required"
                                },
                            })}
                                className={`input_field_input ${errors["name"] != undefined ? " error" : ""}`}
                                type="text"
                                readOnly
                                // defaultValue={org.Name}
                                placeholder='Enter organization name'
                            />
                        </div>
                        {errors && errors["name"] && <div className="input_field_error">{`${errors["name"].message}`}</div>}
                    </div>
                    <div className="input_field">
                        <div className="input_field_label">
                            Description
                        </div>
                        <div className={`input_field_wrapper ${errors["description"] != undefined ? " error" : ""}`}>
                            <input {...register("description", {})}
                                className={`input_field_input ${errors["description"] != undefined ? " error" : ""}`}
                                type="text"
                                placeholder='Enter organization description'
                            />
                        </div>
                        {errors && errors["description"] && <div className="input_field_error">{`${errors["description"].message}`}</div>}
                    </div>
                    <div className="input_field">
                        <div className="input_field_label">
                            Capital
                        </div>
                        <div className={`input_field_wrapper ${errors["capital"] != undefined ? " error" : ""}`}>
                            <input {...register("capital", {
                                required: {
                                    value: true,
                                    message: "Field is required"
                                },
                            })}
                                className={`input_field_input ${errors["capital"] != undefined ? " error" : ""}`}
                                type="number"
                                readOnly
                                // defaultValue={org.Capital}
                                placeholder='Enter organization capital'
                            />
                        </div>
                        {errors && errors["capital"] && <div className="input_field_error">{`${errors["capital"].message}`}</div>}
                    </div>
                    <div className="input_field">
                        <div className="input_field_label">
                            Logo
                        </div>
                        <div className={`input_field_wrapper ${errors["logo"] != undefined ? " error" : ""}`}>
                            <input {...register("logo", {
                            })}
                                className={`input_field_input ${errors["logo"] != undefined ? " error" : ""}`}
                                type="file"
                                accept="image/png, image/gif, image/jpeg"
                                placeholder='Enter organization logo'
                            />
                        </div>
                        {errors && errors["logo"] && <div className="input_field_error">{`${errors["logo"].message}`}</div>}
                    </div>
                    <div className="input_field">
                        <div className="input_field_label">
                            Registration Date
                        </div>
                        <div className={`input_field_wrapper ${errors["regDate"] != undefined ? " error" : ""}`}>
                            <input {...register("regDate", {
                                required: {
                                    value: true,
                                    message: "Field is required"
                                },
                            })}
                                className={`input_field_input ${errors["regDate"] != undefined ? " error" : ""}`}
                                type="date"
                                readOnly
                                placeholder='Enter organization registration date'
                            />
                        </div>
                        {errors && errors["regDate"] && <div className="input_field_error">{`${errors["regDate"].message}`}</div>}
                    </div>
                    <div className="input_field">
                        <div className="input_field_label">
                            Registration No
                        </div>
                        <div className={`input_field_wrapper ${errors["regNo"] != undefined ? " error" : ""}`}>
                            <input {...register("regNo", {
                                required: {
                                    value: true,
                                    message: "Field is required"
                                },
                            })}
                                className={`input_field_input ${errors["regDate"] != undefined ? " error" : ""}`}
                                // type="date"
                                readOnly
                                placeholder='Enter organization registration no'
                            />
                        </div>
                        {errors && errors["regDate"] && <div className="input_field_error">{`${errors["regDate"].message}`}</div>}
                    </div>
                    <div className="input_field">
                        <div className="input_field_label">
                            Registration Certificate *
                        </div>
                        <div className={`input_field_wrapper ${errors["regFile"] != undefined ? " error" : ""}`}>
                            <input {...register("regFile", {
                                required: {
                                    value: true,
                                    message: "Field is required"
                                },
                            })}
                                className={`input_field_input`}
                                type="file"
                                accept="image/png, image/jpeg, application/pdf"
                                placeholder='Upload your registration file'
                            />
                        </div>
                        {errors && errors["regFile"] && <div className="input_field_error">{`${errors["regFile"].message}`}</div>}
                    </div>
                    {legalConditions && <div className="dropdown">
                        <div className="dropdown_label">
                            Legal Condition
                        </div>
                        <select {
                            ...register(
                                "legalCondition",
                                {
                                    onChange: (v) => {
                                        console.log(v.target.value);
                                        // console.log(orgTypes.find((e) => e.Id == v.target.value));
                                        // setSelectedOrgType(orgTypes.find((e) => e.Id == v.target.value));
                                        // setSelectedCountry(null);
                                    },
                                    required:
                                    {
                                        value: true,
                                        message: "Field is required"
                                    }
                                }
                            )}
                            // value={org.LegalCondition.Id}
                            className={`dropdown_input ${errors["legalCondition"] != undefined ? " error" : ""}`}>
                            <option value="" disabled  >Select organization type</option>
                            {legalConditions && legalConditions.map((e) => {
                                return <option key={e.Id} value={e.Id} disabled={ !!org.LegalCondition && org.LegalCondition.Id != e.Id} >{e.Name}</option>;
                            })}
                        </select>
                        {errors["legalCondition"] && <div className="dropdown_error">{`${errors["legalCondition"].message}`}</div>}
                    </div>}
                </div>}
                {org && <div className="section">
                    <div className="section_title">Organization Tax</div>
                    <div className="dropdown">
                        <div className="dropdown_label">
                            Tax Collection Method
                        </div>
                        <select {
                            ...register(
                                "orgTax",
                                {
                                    onChange: (v) => {
                                        console.log(v.target.value);
                                    },
                                    required:
                                    {
                                        value: true,
                                        message: "Field is required"
                                    }
                                }
                            )}
                            defaultValue={""}
                            className={`dropdown_input ${errors["orgTax"] != undefined ? " error" : ""}`}>
                            <option value="" disabled  >Select tax collection method</option>
                            {taxes && taxes.map((e) => {
                                return <option key={e.Id} value={e.Id}>{e.Name + "\t" + (e.Rate * 100) + "%"}</option>;
                            })}
                        </select>
                        {errors["orgTax"] && <div className="dropdown_error">{`${errors["orgTax"].message}`}</div>}
                    </div>
                    <div className="input_field">
                        <div className="input_field_label">
                            Supporting File
                        </div>
                        <div className={`input_field_wrapper ${errors["tax"] != undefined ? " error" : ""}`}>
                            <input {...register("tax", {
                                required: {
                                    value: true,
                                    message: "Field is required"
                                },
                            })}
                                className={`input_field_input ${errors["tax"] != undefined ? " error" : ""}`}
                                type="file"
                                accept="image/png, image/jpeg, application/pdf"
                                placeholder='Enter your TIN'
                            />
                        </div>
                        {errors && errors["tax"] && <div className="input_field_error">{`${errors["tax"].message}`}</div>}
                    </div>
                </div>}
                {org && <div className="section">
                    <div className="section_title">Organization Associates</div>
                    <div className="input_field">
                        <div className="input_field_label">
                            Full Name
                        </div>
                        <div className={`input_field_wrapper ${errors["associateFullname"] != undefined ? " error" : ""}`}>
                            <input {...register("associateFullname", {
                                required: {
                                    value: true,
                                    message: "Field is required"
                                },
                            })}
                                className={`input_field_input ${errors["associateFullname"] != undefined ? " error" : ""}`}
                                type="text"
                                placeholder="Enter associate's full name"

                            />
                        </div>
                        {errors && errors["associateFullname"] && <div className="input_field_error">{`${errors["associateFullname"].message}`}</div>}
                    </div>
                    <div className="input_field">
                        <div className="input_field_label">
                            Phone Number
                        </div>
                        <div className={`input_field_wrapper ${errors["associatePhonenumber"] != undefined ? " error" : ""}`}>
                            <input {...register("associatePhonenumber", {
                                required: {
                                    value: true,
                                    message: "Field is required"
                                },
                            })}
                                className={`input_field_input ${errors["associatePhonenumber"] != undefined ? " error" : ""}`}
                                type="text"
                                placeholder="Enter associate's phone number"

                            />
                        </div>
                        {errors && errors["associatePhonenumber"] && <div className="input_field_error">{`${errors["associatePhonenumber"].message}`}</div>}
                    </div>
                    <div className="input_field">
                        <div className="input_field_label">
                            Position
                        </div>
                        <div className={`input_field_wrapper ${errors["associatePosition"] != undefined ? " error" : ""}`}>
                            <input {...register("associatePosition", {})}
                                className={`input_field_input ${errors["associatePosition"] != undefined ? " error" : ""}`}
                                type="text"
                                placeholder="Enter associate's position (Manager, Owner, ...)"

                            />
                        </div>
                        {errors && errors["associatePosition"] && <div className="input_field_error">{`${errors["associatePosition"].message}`}</div>}
                    </div>
                </div>}
            </div>
        </div>
    )

})