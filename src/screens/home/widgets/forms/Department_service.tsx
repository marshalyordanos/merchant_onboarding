import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { Department } from '../../../../models/department/department'
import { BookFilledIcon } from '../../../../widgets/icons/icons'
import { Collapse, Divider, Select } from 'antd'
import './Department.css'
const Department_service = forwardRef((props:{onSubmit:SubmitHandler<any>,departments:Department[]}, ref: React.ForwardedRef<any>) => {

    const [options,setOptions] = useState()
    const [selectedDepartment,setSelectedDepartment] = useState([])
    console.log("======++++++++++",props.departments)
    useEffect(()=>{
           const x:any =  props.departments.map(d=>({...d,value:JSON.stringify(d),label:d["name"]+" - "+d["LicenceNumber"]}))
           setOptions(x)
    },[])

    useImperativeHandle(ref, () => ({
        validateClick() {
            console.log("validateClick ----")
            // handleSubmit(props.onSubmit)();
            console.log("validateClick ----*****")

        }
    }))
    const handleChange = (value: string[]) => {
        console.log(`selected ${value.length}`);
      };
  return (
 
        <div className='column' >
    <div className="expanded">
        <BookFilledIcon color='grey' width={6.4} height={6.4} />
        <div>Please enter your organization detail to continue</div>
    </div>

   <div className='form_con' >
   <div>
   <div style={{fontSize:16,marginBottom:8}} className="input_field_label">
                            Tax Identification Number
                        </div>

            <div className='department_select__con'>
            <Select
       className='department_select'
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
      options={options}
    />
            </div>
            <Divider/>
            
            <div style={{fontSize:16,marginBottom:13}} className="input_field_label">
                           Selected Departments
                        </div>
          
    <Collapse
    accordion
    onChange={(v)=>console.log("collapse",v)}
    
      
      items={[{ key: '2', label: 'This is default size panel header', children: <div>
        <Select
       className='department_select'
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
      options={options}
    />

      </div> },
      { key: 'ww', label: 'This is default size panel header', children: <div>
      <Select
     className='department_select'
    mode="multiple"
    allowClear
    style={{ width: '100%' }}
    placeholder="Please select"
    defaultValue={[]}
    onChange={handleChange}
    options={options}
  />

    </div> }]}
    />    



   </div>
   </div>
    </div>
  
  )
})

export default Department_service
