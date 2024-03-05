import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { Department } from '../../../../models/department/department'
import { BookFilledIcon } from '../../../../widgets/icons/icons'
import { Collapse, Divider, Select } from 'antd'
import './Department.css'
import axios from 'axios'
const Department_service = forwardRef((props:{onSubmit:SubmitHandler<any>,departments:Department[]}, ref: React.ForwardedRef<any>) => {

    const [options,setOptions] = useState()
    const [selectedDepartment,setSelectedDepartment] = useState([])
    const [services,setServices] = useState([])
    const [categories,setCategories] = useState([])
    const [data,setData] = useState([])
    console.log("======++++++++++",props.departments)
    useEffect(()=>{
           const x:any =  props.departments.map(d=>({...d,value:JSON.stringify(d),label:d["name"]+" - "+ d["LicenceNumber"]}))
           setOptions(x)
    },[])

    useImperativeHandle(ref, () => ({
        validateClick() {
            console.log("validateClick ----")
            // handleSubmit(props.onSubmit)();
            console.log("validateClick ----*****")

        }
    }))
    const handleChange = (value: string[],d:any) => {
        // console.log(`selected 33 ${value.length}`);
        const val = value.map(v=>JSON.parse(v))

        const cat = val.map(async(dep)=>{
          const len = dep["services"].length -1
          if(len<0){

            return {}
          }else{
            const res = await axios.get(`/orgs/etrade_code?code=${dep["services"][len]["Code"]}`)
            setCategories([...categories,res.data["data"]])
            return res.data["data"]
          }
          


        })
        console.log("cat",categories)
        
        // setSelectedDepartment(value.map(v=>JSON.parse(v)))
        // setData(value.map(v=>JSON.stringify(v)))
      };
      const serviceHandleChange = (value: string[]) => {
        
        // console.log(`selected ${value.length}`);
        // console.log(`selected ${value}`);
       const data = value.map(v=>JSON.parse(v))
        const id = data[0].id
        const newData = data.map(d=>{
          console.log("id",id)
          // const service = value.
          // if(d["LicenceNumber"])
        })
        
        
        
        
        
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
          
    {/* <Collapse
    accordion
    onChange={(v)=>{
        const dep:any = selectedDepartment.find(d=>d["LicenceNumber"]==v[0])
        console.log('dep',dep.services)
        if(dep["services"]){

        
        const x:any =  dep["services"].map(s=>({value:JSON.stringify({data:s,id:v[0]}),label:s["Name"]+" - "+ s["Code"]}))

        setServices(x)
        }else{
          setServices([])
        }

    }}
    
      
      items={selectedDepartment.map(dep=>({key:dep["LicenceNumber"],label:dep["name"],children:<div>
      <Select
     className='department_select'
    mode="multiple"
    allowClear
    style={{ width: '100%' }}
    placeholder="Please select"
    defaultValue={[]}
    onChange={serviceHandleChange}
    options={services}
  />

    </div>}))
     }
    />     */}



   </div>
   </div>
    </div>
  
  )
})

export default Department_service
