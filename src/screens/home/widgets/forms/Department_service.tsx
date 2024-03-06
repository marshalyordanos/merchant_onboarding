import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { SubmitHandler } from "react-hook-form";
import { Department } from "../../../../models/department/department";
import { BookFilledIcon } from "../../../../widgets/icons/icons";
import { Collapse, Divider, Select } from "antd";
import "./Department.css";
import axios from "axios";
const Department_service = forwardRef(
  (
    props: {
      onSubmit: SubmitHandler<any>;
      department: Department[];
      setDepartments: any;
      departments: any;
    },
    ref: React.ForwardedRef<any>
  ) => {
    const [options, setOptions] = useState();
    // const [selectedDepartment, setSelectedDepartment] = useState([]);
    const [services, setServices] = useState([]);
    // const [departments, setDepartments] = useState([]);
    // const [data, setData] = useState([]);
    // console.log("======++++++++++", props.departments);
    const data = props.departments.map((dept) => JSON.stringify(dept));
    useEffect(() => {
      const x: any = props.department.map((d) => ({
        value: JSON.stringify({ ...d, services: [] }),
        label: d["name"] + " - " + d["LicenceNumber"],
      }));
      // const y: any = props.departments.map((d) => (
      //   JSON.stringify(d),
      // ));

      console.log("======++++++++++department", x);
      // console.log("======++++++++++departments", props.departments);
      setOptions(x);
      // setData(y);
    }, []);

    useImperativeHandle(ref, () => ({
      validateClick() {
        console.log("validateClick ----");
        props.onSubmit(props.departments);
        console.log("validateClick ----*****");
      },
    }));
    const handleChange = (value: string[], d: any) => {
      console.log(value, "value from on change)))))))))))))))))))))000");
      // console.log(`selected 33 ${value.length}`);
      const val = value.map((v) => JSON.parse(v));
      console.log(val, "val^^^^^^^^^^^^^^^^96");
      const cat = val.map(async (dep) => {
        const len = dep["services"].length - 1;
        if (len < 0) {
          return {};
        } else {
          const res = await axios.get(
            `/orgs/etrade_code?code=${dep["services"][len]["Code"]}`
          );
          // console.log(val, "selected values from slect multiple");
          // console.log("repsonse data %%%%%%%%%%%%%%%%%%%%", res.data["data"]);
          // console.log(dep, "dep$$$$$$$");
          const addID = {
            ...dep,
            category_id: res.data["data"].id,
            category_name: res.data["data"].name,
            services: [],
          };
          // setDepartments([...props.departments,])
          // console.log("addID$$$$$$$$$$$$$$$$$$$$$$$$$", addID);
          const isAlreadyAdded = props.departments.find(
            (cat: any) => cat.LicenceNumber === addID.LicenceNumber
          );
          if (!isAlreadyAdded) {
            props.setDepartments([...props.departments, addID]);
          } else {
            console.log("isalready added%%%%%%%%%%%%%%%%%%%%");
            // console.log(
            //   "props.departments currently added%%%%%%%%%%%%%%%%%%%%",
            //   props.departments
            // );
          }
          return res.data["data"];
        }
      });
      // console.log("cat", props.departments);

      // setSelectedDepartment(value.map(v=>JSON.parse(v)))
      // setData(value.map(v=>JSON.stringify(v)))
    };
    const handleDeselect = (value: string) => {
      const parsedValue = JSON.parse(value);
      // console.log()
      console.log("potentially deselected value", parsedValue);
      const categoryAfterDeletion = props.departments.filter(
        (cat) => cat.LicenceNumber !== parsedValue.LicenceNumber
      );
      console.log("category after deletion", categoryAfterDeletion);
      props.setDepartments(categoryAfterDeletion);
    };
    const handleClear = () => {
      props.setDepartments([]);
    };
    useEffect(() => {
      console.log("props.departments######################", props.departments);
    }, [props.departments]);
    const serviceHandleChange = (value: string[]) => {
      // console.log(`selected ${value.length}`);
      // console.log(`selected ${value}`);
      const data = value.map((v) => JSON.parse(v));
      const id = data[0].id;
      const newData = data.map((d) => {
        console.log("id", id);
        // const service = value.
        // if(d["LicenceNumber"])
      });
    };
    return (
      <div className="column">
        <div className="expanded">
          <BookFilledIcon color="grey" width={6.4} height={6.4} />
          <div>Please enter your organization detail to continue</div>
        </div>

        <div className="form_con">
          <div>
            <div
              style={{ fontSize: 16, marginBottom: 8 }}
              className="input_field_label">
              Tax Identification Number
            </div>
            <div className="department_select__con">
              <Select
                className="department_select"
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Please select"
                defaultValue={data}
                onChange={handleChange}
                onDeselect={handleDeselect}
                onClear={handleClear}
                options={options}
              />
            </div>
            <Divider />
            <div
              style={{ fontSize: 16, marginBottom: 13 }}
              className="input_field_label">
              Selected Departments
            </div>
            {/* <Collapse
              accordion
              onChange={(v) => {
                const dep: any = selectedDepartment.find(
                  (d) => d["LicenceNumber"] == v[0]
                );
                console.log("dep", dep.services);
                if (dep["services"]) {
                  const x: any = dep["services"].map((s) => ({
                    value: JSON.stringify({ data: s, id: v[0] }),
                    label: s["Name"] + " - " + s["Code"],
                  }));

                  setServices(x);
                } else {
                  setServices([]);
                }
              }}
              items={selectedDepartment.map((dep) => ({
                key: dep["LicenceNumber"],
                label: dep["name"],
                children: (
                  <div>
                    <Select
                      className="department_select"
                      mode="multiple"
                      allowClear
                      style={{ width: "100%" }}
                      placeholder="Please select"
                      defaultValue={[]}
                      onChange={serviceHandleChange}
                      options={services}
                    />
                  </div>
                ),
              }))}
            /> */}
            {props.departments.length > 0 && (
              <Collapse
                items={props.departments?.map((dept: any) => ({
                  key: dept.LicenceNumber,
                  label: `${dept.name} - ${dept.category_name}`,
                  children: (
                    <div className="department_detail">
                      <p>License Number: {dept.LicenceNumber}</p>
                      <p>Department: {dept.name}</p>
                      <p>Category name: {dept.category_name}</p>
                      <p>
                        {dept.description !== ""
                          ? `Description: ${dept.description}`
                          : ""}
                      </p>
                    </div>
                  ),
                }))}
                defaultActiveKey={["1"]}
                // onChange={onChange}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default Department_service;
