(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{10755:function(e,t,s){Promise.resolve().then(s.bind(s,93905))},93905:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return M}});var a,i,n,r,l=s(37821),o=s(58078),c=s(46179);s(54150),s(67200);let d=e=>{let{currentStep:t,steps:s}=e;return(0,l.jsx)("div",{className:"stepper",children:s.map(e=>(0,l.jsxs)("div",{style:{},children:[e,s.indexOf(e)<s.length-1?(0,l.jsx)("div",{className:"stepper_divider"}):null]},e.key))})};s(76957);let u=e=>{let{isActive:t,index:s,title:a,subtitle:i}=e;return(0,l.jsxs)("div",{className:"step ".concat(t?"active":""),children:[(0,l.jsx)("div",{className:"step_leading",children:s}),(0,l.jsx)("div",{className:"step_title",children:a}),(0,l.jsx)("div",{className:"step_subtitle",children:i})]})},m=e=>{let{height:t=1.8,width:s=1.8,color:a="#fff",onClick:i=()=>{}}=e;return(0,l.jsx)("div",{onClick:()=>i(),style:{height:t+"rem",width:s+"rem"},children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:10*s+"px",height:10*t+"px",fill:a,className:"bi bi-book-fill",viewBox:"0 0 16 16",children:(0,l.jsx)("path",{d:"M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"})})})},p=e=>{let{height:t=1.8,width:s=1.8,color:a="#fff",onClick:i=()=>{}}=e;return(0,l.jsx)("div",{onClick:()=>i(),style:{height:t+"rem",width:s+"rem"},children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:10*s+"px",height:10*t+"px",fill:a,className:"bi bi-globe",viewBox:"0 0 16 16",children:(0,l.jsx)("path",{d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"})})})};var h=s(20383),g=s(92298);class v{constructor({id:e,name:t,description:s,icon:a,parents:i,countryWhitelist:n,countryBlacklist:r,options:l,hidden:o}){this.Id=e,this.Name=t,this.Description=s,this.Icon=a,this.Parents=i,this.CountryWhitelist=n,this.CountryBlacklist=r,this.Options=l,this.Hidden=o}}v.fromJSON=e=>new v({id:e.id,name:e.name,description:e.description,icon:e.icon,parents:e.parents,countryWhitelist:e.country_whitelist,countryBlacklist:e.country_blacklist,options:e.options&&e.options.map(e=>f.fromJSON(e)),hidden:e.hidden});class f{constructor({id:e,name:t,description:s,dataType:a,representedIn:i,values:n,allowCustomValue:r,validator:l}){this.Id=e,this.Name=t,this.Description=s,this.DataType=a,this.RepresentedIn=i,this.Values=n,this.AllowCustomValue=r,this.Validator=l}}f.fromJSON=e=>new f({id:e.id,name:e.name,description:e.description,dataType:e.data_type,representedIn:e.represented_in,values:e.values,allowCustomValue:e.allow_custom_value,validator:e.validator});class x{constructor({id:e,name:t,defaultName:s,iso2:a,flag:i}){this.Id=e,this.Name=t,this.DefaultName=s,this.Iso2=a,this.Flag=i}}x.fromJSON=e=>new x({id:e.id,name:e.name,defaultName:e.default_name,iso2:e.iso2,flag:e.flag});let N={ET:"\uD83C\uDDEA\uD83C\uDDF9",KE:"\uD83C\uDDF0\uD83C\uDDEA",US:"\uD83C\uDDFA\uD83C\uDDF8"};class _{constructor({id:e,name:t,countryWhitelist:s,countryBlacklist:a}){this.Id=e,this.Name=t,this.CountryWhitelist=s,this.CountryBlacklist=a}}_.fromJSON=e=>new _({id:e.id,name:e.name,countryWhitelist:e.countryWhitelist,countryBlacklist:e.countryBlacklist});let j=()=>(0,l.jsxs)("div",{className:"spinner",children:[(0,l.jsx)("div",{className:"bar1"}),(0,l.jsx)("div",{className:"bar2"}),(0,l.jsx)("div",{className:"bar3"}),(0,l.jsx)("div",{className:"bar4"}),(0,l.jsx)("div",{className:"bar5"}),(0,l.jsx)("div",{className:"bar6"}),(0,l.jsx)("div",{className:"bar7"}),(0,l.jsx)("div",{className:"bar8"}),(0,l.jsx)("div",{className:"bar9"}),(0,l.jsx)("div",{className:"bar10"}),(0,l.jsx)("div",{className:"bar11"}),(0,l.jsx)("div",{className:"bar12"})]});class y{static fromJSON(e){return new y({id:e.id,title:e.title,phones:e.phones,emails:e.emails,websites:e.websites,locations:e.locations.map(e=>b.fromJSON(e))})}constructor({id:e,title:t,phones:s,emails:a,websites:i,locations:n}){this.Id=e,this.Title=t,this.Phones=s,this.Emails=a,this.Websites=i,this.Locations=n}}(a=n||(n={}))[a.GEO=0]="GEO",a[a.RELATIVE=1]="RELATIVE",a[a.LOCAL=2]="LOCAL";class b{static fromJSON(e){return new b({type:e.type,details:e.type===n.GEO?w.fromJSON(e.details):null})}constructor({type:e,details:t}){this.Type=e,this.Details=t}}class w{static fromJSON(e){return new w({lat:e.lat,lng:e.lng})}constructor({lat:e,lng:t}){this.Lat=e,this.Lng=t}}class S{static fromJSON(e){return new S({id:e.id,name:e.name,description:e.description,logo:e.logo,regDate:e.reg_date,addresses:e.addresses&&e.addresses.map(e=>y.fromJSON(e)),categories:e.categories&&e.categories.map(e=>v.fromJSON(e)),services:e.services&&e.services.map(e=>C.fromJSON(e)),offers:e.offers&&e.offers.map(e=>O.fromJSON(e)),details:e.details,createdAt:e.created_at})}constructor({id:e,name:t,description:s,logo:a,regDate:i,addresses:n,categories:r,services:l,offers:o,details:c,createdAt:d}){this.Id=e,this.Name=t,this.Description=s,this.Logo=a,this.RegDate=i,this.Addresses=n,this.Categories=r,this.Services=l,this.Offers=o,this.Details=c,this.CreatedAt=d}}class C{static fromJSON(e){return new C({id:e.id,name:e.name,description:e.description,categories:e.categories&&e.categories.map(e=>v.fromJSON(e)),countryWhitelist:e.country_whitelist,countryBlacklist:e.country_blacklist})}constructor({id:e,name:t,description:s,categories:a,countryWhitelist:i,countryBlacklist:n}){this.Id=e,this.Name=t,this.Description=s,this.Categories=a,this.CountryWhitelist=i,this.CountryBlacklist=n}}class O{static fromJSON(e){return new O({id:e.id})}constructor({id:e}){this.Id=e}}class D{static fromJSON(e){return new D({id:e.id,verified:e.verified,status:e.status,message:e.message})}constructor({id:e,verified:t,status:s,message:a}){this.Id=e,this.Verified=t,this.Status=s,this.Message=a}}(i=r||(r={}))[i.PAYER=0]="PAYER",i[i.PAYEE=1]="PAYEE";class I{static fromJSON(e){return new I({id:e.id,name:e.name,description:e.description,rate:e.rate,from:e.from,countryWhitelist:e.country_whitelist,countryBlacklist:e.country_blacklist})}constructor({id:e,name:t,description:s,rate:a,from:i,countryWhitelist:n,countryBlacklist:r}){this.Id=e,this.Name=t,this.Description=s,this.Rate=a,this.From=i,this.CountryBlacklist=n,this.CountryWhitelist=r}}class k{static fromJSON(e){return new k({tax:I.fromJSON(e.tax),file:e.file,status:e.status&&D.fromJSON(e.status)})}constructor({tax:e,file:t,status:s}){this.Tax=e,this.File=t,this.Status=s}}class ${static fromJSON(e){return new $({id:e.id,name:e.name,description:e.description,logo:e.logo,capital:e.capital,regDate:new Date(e.reg_date),country:e.country,category:v.fromJSON(e.category),legalCondition:e.legal_condition?_.fromJSON(e.legal_condition):null,taxes:e.taxes&&e.taxes.map(e=>k.fromJSON(e)),associates:e.associates&&e.associates.map(e=>T.fromJSON(e)),departments:e.departments.map(e=>S.fromJSON(e)),details:e.details,status:e.status&&D.fromJSON(e.status),createdAt:e.created_at})}constructor({id:e,name:t,description:s,capital:a,regDate:i,country:n,category:r,legalCondition:l,logo:o,taxes:c,associates:d,departments:u,details:m,status:p,createdAt:h}){this.Id=e,this.Name=t,this.Description=s,this.Logo=o,this.Capital=a,this.RegDate=i,this.Country=n,this.Category=r,this.LegalCondition=l,this.Taxes=c,this.Associates=d,this.Departments=u,this.Details=m,this.Status=p,this.CreatedAt=h}}class T{static fromJSON(e){return new T({userId:e.user_id,position:e.position})}constructor({userId:e,position:t}){this.UserId=e,this.Position=t}}let E=(0,o.forwardRef)((e,t)=>{let{register:s,handleSubmit:a,formState:{errors:i},watch:n,setValue:r}=(0,h.cI)(),[c,d]=(0,o.useState)(!1),[u,p]=(0,o.useState)(),[v,f]=(0,o.useState)(),[x,N]=(0,o.useState)(),[y,b]=(0,o.useState)([]);(0,o.useImperativeHandle)(t,()=>({validate(){console.log("validsate ----"),a(e.onSubmit)(),console.log("validsate ----*****")}}));let w=async()=>{try{let t=await g.Z.get("/orgs/taxes");var e=t.data.data.map(e=>I.fromJSON(e));b(e),console.log("taxes ----",e)}catch(e){console.log(e)}},S=async()=>{try{let t=await g.Z.get("/orgs/legal-conditions");var e=t.data.data.map(e=>_.fromJSON(e));N(e),console.log(e)}catch(e){console.log(e)}},C=async t=>{console.log(t);try{f(null),p(null),d(!0);let s=await g.Z.get("/org/check-tin?tin=".concat(t));if(console.log("res",s.data.data),null==s.data)throw"Could not findtin";f(e=>{var t=$.fromJSON(s.data.data);return r("name",t.Name),r("capital",t.Capital),r("regDate",t.RegDate.toISOString().substr(0,10)),r("regNo",t.Details.reg_no),r("legalCondition",!!t.LegalCondition&&t.LegalCondition.Id),t}),e.setDepartment(s.data.data.departments),d(!1)}catch(e){console.log("Error :"+e),f(null),d(!1),p("FETCH_ORG"),console.log(e)}};return(0,o.useEffect)(()=>{S(),w()},[]),(0,l.jsxs)("div",{className:"column",children:[(0,l.jsxs)("div",{className:"expanded",children:[(0,l.jsx)(m,{color:"grey",width:6.4,height:6.4}),(0,l.jsx)("div",{children:"Please enter your organization detail to continue"})]}),(0,l.jsxs)("div",{className:"form",children:[(0,l.jsxs)("div",{className:"section",children:[(0,l.jsx)("div",{className:"section_title",children:"Organization Identification"}),(0,l.jsxs)("div",{className:"input_field",children:[(0,l.jsx)("div",{className:"input_field_label",children:"Tax Identification Number"}),(0,l.jsxs)("div",{className:"input_field_wrapper ".concat(void 0!=i.tin?" error":""),children:[(0,l.jsx)("input",{...s("tin",{onChange:e=>{f(null),10==e.target.value.length?(console.log("Check TIN"),C(e.target.value)):d(!1),console.log(e.target.value)},required:{value:!0,message:"Field is required"},minLength:{value:10,message:"TIN must be 10"},maxLength:{value:10,message:"TIN must be 10"}}),className:"input_field_input ".concat(void 0!=i.tin?" error":""),type:"text",placeholder:"Enter your TIN",maxLength:10,minLength:10}),(0,l.jsx)("div",{className:"input_field_suffix",children:"FETCH_ORG"==u?(0,l.jsxs)("div",{onClick:()=>{C(n("tin"))},children:[" ","Err"," "]}):c?(0,l.jsx)(j,{}):v?"✅":""})]}),i&&i.tin&&(0,l.jsx)("div",{className:"input_field_error",children:"".concat(i.tin.message)})]})]}),v&&(0,l.jsxs)("div",{className:"section",children:[(0,l.jsx)("div",{className:"section_title",children:"Organization Info"}),(0,l.jsxs)("div",{className:"input_field",children:[(0,l.jsx)("div",{className:"input_field_label",children:"Name"}),(0,l.jsx)("div",{className:"input_field_wrapper ".concat(void 0!=i.name?" error":""),children:(0,l.jsx)("input",{...s("name",{required:{value:!0,message:"Field is required"}}),className:"input_field_input ".concat(void 0!=i.name?" error":""),type:"text",readOnly:!0,placeholder:"Enter organization name"})}),i&&i.name&&(0,l.jsx)("div",{className:"input_field_error",children:"".concat(i.name.message)})]}),(0,l.jsxs)("div",{className:"input_field",children:[(0,l.jsx)("div",{className:"input_field_label",children:"Description"}),(0,l.jsx)("div",{className:"input_field_wrapper ".concat(void 0!=i.description?" error":""),children:(0,l.jsx)("input",{...s("description",{}),className:"input_field_input ".concat(void 0!=i.description?" error":""),type:"text",placeholder:"Enter organization description"})}),i&&i.description&&(0,l.jsx)("div",{className:"input_field_error",children:"".concat(i.description.message)})]}),(0,l.jsxs)("div",{className:"input_field",children:[(0,l.jsx)("div",{className:"input_field_label",children:"Capital"}),(0,l.jsx)("div",{className:"input_field_wrapper ".concat(void 0!=i.capital?" error":""),children:(0,l.jsx)("input",{...s("capital",{required:{value:!0,message:"Field is required"}}),className:"input_field_input ".concat(void 0!=i.capital?" error":""),type:"number",readOnly:!0,placeholder:"Enter organization capital"})}),i&&i.capital&&(0,l.jsx)("div",{className:"input_field_error",children:"".concat(i.capital.message)})]}),(0,l.jsxs)("div",{className:"input_field",children:[(0,l.jsx)("div",{className:"input_field_label",children:"Logo"}),(0,l.jsx)("div",{className:"input_field_wrapper ".concat(void 0!=i.logo?" error":""),children:(0,l.jsx)("input",{...s("logo",{}),className:"input_field_input ".concat(void 0!=i.logo?" error":""),type:"file",accept:"image/png, image/gif, image/jpeg",placeholder:"Enter organization logo"})}),i&&i.logo&&(0,l.jsx)("div",{className:"input_field_error",children:"".concat(i.logo.message)})]}),(0,l.jsxs)("div",{className:"input_field",children:[(0,l.jsx)("div",{className:"input_field_label",children:"Registration Date"}),(0,l.jsx)("div",{className:"input_field_wrapper ".concat(void 0!=i.regDate?" error":""),children:(0,l.jsx)("input",{...s("regDate",{required:{value:!0,message:"Field is required"}}),className:"input_field_input ".concat(void 0!=i.regDate?" error":""),type:"date",readOnly:!0,placeholder:"Enter organization registration date"})}),i&&i.regDate&&(0,l.jsx)("div",{className:"input_field_error",children:"".concat(i.regDate.message)})]}),(0,l.jsxs)("div",{className:"input_field",children:[(0,l.jsx)("div",{className:"input_field_label",children:"Registration No"}),(0,l.jsx)("div",{className:"input_field_wrapper ".concat(void 0!=i.regNo?" error":""),children:(0,l.jsx)("input",{...s("regNo",{required:{value:!0,message:"Field is required"}}),className:"input_field_input ".concat(void 0!=i.regDate?" error":""),readOnly:!0,placeholder:"Enter organization registration no"})}),i&&i.regDate&&(0,l.jsx)("div",{className:"input_field_error",children:"".concat(i.regDate.message)})]}),(0,l.jsxs)("div",{className:"input_field",children:[(0,l.jsx)("div",{className:"input_field_label",children:"Registration Certificate *"}),(0,l.jsx)("div",{className:"input_field_wrapper ".concat(void 0!=i.regFile?" error":""),children:(0,l.jsx)("input",{...s("regFile",{required:{value:!0,message:"Field is required"}}),className:"input_field_input",type:"file",accept:"image/png, image/jpeg, application/pdf",placeholder:"Upload your registration file"})}),i&&i.regFile&&(0,l.jsx)("div",{className:"input_field_error",children:"".concat(i.regFile.message)})]}),x&&(0,l.jsxs)("div",{className:"dropdown",children:[(0,l.jsx)("div",{className:"dropdown_label",children:"Legal Condition"}),(0,l.jsxs)("select",{...s("legalCondition",{onChange:e=>{console.log(e.target.value)},required:{value:!0,message:"Field is required"}}),className:"dropdown_input ".concat(void 0!=i.legalCondition?" error":""),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Select organization type"}),x&&x.map(e=>(0,l.jsx)("option",{value:e.Id,disabled:!!v.LegalCondition&&v.LegalCondition.Id!=e.Id,children:e.Name},e.Id))]}),i.legalCondition&&(0,l.jsx)("div",{className:"dropdown_error",children:"".concat(i.legalCondition.message)})]})]}),v&&(0,l.jsxs)("div",{className:"section",children:[(0,l.jsx)("div",{className:"section_title",children:"Organization Tax"}),(0,l.jsxs)("div",{className:"dropdown",children:[(0,l.jsx)("div",{className:"dropdown_label",children:"Tax Collection Method"}),(0,l.jsxs)("select",{...s("orgTax",{onChange:e=>{console.log(e.target.value)},required:{value:!0,message:"Field is required"}}),defaultValue:"",className:"dropdown_input ".concat(void 0!=i.orgTax?" error":""),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Select tax collection method"}),y&&y.map(e=>(0,l.jsx)("option",{value:e.Id,children:e.Name+"	"+100*e.Rate+"%"},e.Id))]}),i.orgTax&&(0,l.jsx)("div",{className:"dropdown_error",children:"".concat(i.orgTax.message)})]}),(0,l.jsxs)("div",{className:"input_field",children:[(0,l.jsx)("div",{className:"input_field_label",children:"Supporting File"}),(0,l.jsx)("div",{className:"input_field_wrapper ".concat(void 0!=i.tax?" error":""),children:(0,l.jsx)("input",{...s("tax",{required:{value:!0,message:"Field is required"}}),className:"input_field_input ".concat(void 0!=i.tax?" error":""),type:"file",accept:"image/png, image/jpeg, application/pdf",placeholder:"Enter your TIN"})}),i&&i.tax&&(0,l.jsx)("div",{className:"input_field_error",children:"".concat(i.tax.message)})]})]}),v&&(0,l.jsxs)("div",{className:"section",children:[(0,l.jsx)("div",{className:"section_title",children:"Organization Associates"}),(0,l.jsxs)("div",{className:"input_field",children:[(0,l.jsx)("div",{className:"input_field_label",children:"Full Name"}),(0,l.jsx)("div",{className:"input_field_wrapper ".concat(void 0!=i.associateFullname?" error":""),children:(0,l.jsx)("input",{...s("associateFullname",{required:{value:!0,message:"Field is required"}}),className:"input_field_input ".concat(void 0!=i.associateFullname?" error":""),type:"text",placeholder:"Enter associate's full name"})}),i&&i.associateFullname&&(0,l.jsx)("div",{className:"input_field_error",children:"".concat(i.associateFullname.message)})]}),(0,l.jsxs)("div",{className:"input_field",children:[(0,l.jsx)("div",{className:"input_field_label",children:"Phone Number"}),(0,l.jsx)("div",{className:"input_field_wrapper ".concat(void 0!=i.associatePhonenumber?" error":""),children:(0,l.jsx)("input",{...s("associatePhonenumber",{required:{value:!0,message:"Field is required"}}),className:"input_field_input ".concat(void 0!=i.associatePhonenumber?" error":""),type:"text",placeholder:"Enter associate's phone number"})}),i&&i.associatePhonenumber&&(0,l.jsx)("div",{className:"input_field_error",children:"".concat(i.associatePhonenumber.message)})]}),(0,l.jsxs)("div",{className:"input_field",children:[(0,l.jsx)("div",{className:"input_field_label",children:"Position"}),(0,l.jsx)("div",{className:"input_field_wrapper ".concat(void 0!=i.associatePosition?" error":""),children:(0,l.jsx)("input",{...s("associatePosition",{}),className:"input_field_input ".concat(void 0!=i.associatePosition?" error":""),type:"text",placeholder:"Enter associate's position (Manager, Owner, ...)"})}),i&&i.associatePosition&&(0,l.jsx)("div",{className:"input_field_error",children:"".concat(i.associatePosition.message)})]})]})]})]})});s(32120);let F=(0,o.forwardRef)((e,t)=>(0,l.jsxs)("div",{className:"terms-container",children:[(0,l.jsx)("h1",{className:"terms-title",children:"Terms and Conditions"}),(0,l.jsxs)("div",{className:"terms-content",children:[(0,l.jsx)("p",{children:"Welcome to LakiPay! By accessing and using our Merchant Onboarding services, you agree to comply with and be bound by the following terms and conditions. These terms govern your relationship with LakiPay and outline the responsibilities and rights of both parties. Please read these terms carefully before proceeding with the merchant onboarding process."}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"1. Merchant Eligibility:"})," To use our services, you must be a legal entity or an individual of at least 18 years old capable of entering into a legally binding agreement. By applying for merchant onboarding, you represent and warrant that you meet these eligibility requirements."]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"2. Application Process:"})," The merchant onboarding process involves submitting necessary information and documents for verification. LakiPay reserves the right to accept or reject applications at our discretion. You agree to provide accurate and complete information during the application process."]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"3. Service Terms:"})," Once approved, you will be bound by the specific terms and conditions related to our merchant services. These include, but are not limited to, transaction fees, payment processing timelines, and any additional terms outlined in your merchant agreement."]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"4. Data Security:"})," Protecting the confidentiality and security of your data is of utmost importance. LakiPay employs industry-standard security measures, but you are also responsible for safeguarding your login credentials and sensitive information."]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"5. Termination:"})," LakiPay reserves the right to terminate or suspend your merchant account at any time for violation of these terms or for any other reason deemed necessary by LakiPay. You may also terminate your account by providing written notice."]}),(0,l.jsxs)("label",{htmlFor:"checkbox",children:[" ",(0,l.jsx)("input",{onChange:()=>{e.setAggrement(!e.agreement)},type:"checkbox",name:"checkbox",className:"checkbox_input"}),"I agree to the terms and conditions."]})]})]}));var L=s(15766),P=s(16571),z=s(77227);s(59766);let J=(0,o.forwardRef)((e,t)=>{var s;let[a,i]=(0,o.useState)(),[n,r]=(0,o.useState)([]),c=e.departments.map(e=>{var t;let s=null==e?void 0:null===(t=e.reg_date)||void 0===t?void 0:t.split("/"),[a,i,n]=s,r="".concat(i,"/").concat(a,"/").concat(n),l={...e,id:"",reg_date:r};return l.category_id&&(delete l.category_id,delete l.category_name,delete l.file,delete l.licence_number),l.id="",console.log("data0",l),JSON.stringify(l)});console.log("data1",e.department),(0,o.useEffect)(()=>{let t=e.department.map(e=>({value:JSON.stringify(e),label:e.name+" - "+e.LicenceNumber}));i(t)},[]),(0,o.useEffect)(()=>{},[e.departments]),(0,o.useImperativeHandle)(t,()=>({validateClick(){console.log("validateClick ---- props on submit"),e.onSubmit(e.departments),console.log("validateClick ----*****")}})),(0,o.useEffect)(()=>{},[e.departments]);let d=(t,s)=>{e.setDepartments(e=>e.map(e=>e.LicenceNumber===s?{...e,file:t}:e))},u=(e,t)=>(console.log(t,"file"),(0,l.jsxs)("div",{className:"file-input",children:[(0,l.jsx)("input",{type:"file",onChange:t=>{var s;return d(null===(s=t.target.files)||void 0===s?void 0:s[0],e)}}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),t&&(0,l.jsxs)("p",{children:["Selected file: ",t.name]})]}));return(0,l.jsxs)("div",{className:"column",children:[(0,l.jsxs)("div",{className:"expanded",children:[(0,l.jsx)(m,{color:"grey",width:6.4,height:6.4}),(0,l.jsx)("div",{children:"Please enter your organization detail to continue"})]}),(0,l.jsx)("div",{className:"form_con",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{style:{fontSize:16,marginBottom:8},className:"input_field_label",children:"Tax Identification Number"}),(0,l.jsx)("div",{className:"department_select__con",children:(0,l.jsx)(z.Z,{className:"department_select",mode:"multiple",allowClear:!0,style:{width:"100%"},placeholder:"Please select",defaultValue:c,onChange:(t,s)=>{console.log(t,"value from on change)))))))))))))))))))))000");let a=t.map(e=>JSON.parse(e));a.map(async t=>{console.log("sub_categories",t);let s=t.sub_categories.length-1;if(s<0)return{};{var a;let i=await g.Z.get("/orgs/etrade_code?code=".concat(t.sub_categories[s].Code));console.log("repsonse data %%%%%%%%%%%%%%%%%%%%",i.data.data),console.log(t,"dep$$$$$$$");let n=null==t?void 0:null===(a=t.reg_date)||void 0===a?void 0:a.split("/"),[r,l,o]=n,c="".concat(l,"/").concat(r,"/").concat(o),d={...t,id:"00000000-0000-0000-0000-000000000000",file:"",licence_number:t.LicenceNumber,category_id:i.data.data.id,category_name:i.data.data.name,reg_date:c,services:[]};console.log(d,"add is $$$$$$$$$$$$$$$$$$$");let u=e.departments.find(e=>e.LicenceNumber===d.LicenceNumber);return u||e.setDepartments([...e.departments,d]),i.data.data}})},onDeselect:t=>{let s=JSON.parse(t),a=e.departments.filter(e=>e.LicenceNumber!==s.LicenceNumber);e.setDepartments(a)},onClear:()=>{e.setDepartments([])},options:a})}),(0,l.jsx)(P.Z,{}),(0,l.jsx)("div",{style:{fontSize:16,marginBottom:13},className:"input_field_label",children:"Selected Departments"}),e.departments.length>0&&(0,l.jsx)(L.Z,{items:null===(s=e.departments)||void 0===s?void 0:s.map(e=>{var t;return{key:e.LicenceNumber,label:(0,l.jsxs)("div",{className:"collapse_dept",children:[(0,l.jsxs)("p",{children:[e.name," - ",e.category_name]}),(null==e?void 0:null===(t=e.file)||void 0===t?void 0:t.name)?(0,l.jsx)("p",{className:"dept_file_add",children:"File added"}):(0,l.jsx)("p",{className:"dept_file_not",children:"File not added"})]}),children:(0,l.jsxs)("div",{className:"department_detail",children:[(0,l.jsxs)("p",{children:["License Number: ",e.LicenceNumber]}),(0,l.jsxs)("p",{children:["Department: ",e.name]}),(0,l.jsxs)("p",{children:["Category name: ",e.category_name]}),(0,l.jsx)("p",{children:""!==e.description?"Description: ".concat(e.description):""}),u(e.LicenceNumber,e.file)]})}}),defaultActiveKey:["1"]})]})})]})});var A=s(73686),q=s(47662),R=s(19830);g.Z.defaults.baseURL="http://196.189.126.183:5005",g.Z.defaults.headers.post["Content-Type"]="application/json;charset=utf-8",g.Z.defaults.headers.post["Access-Control-Allow-Origin"]="*";let H=()=>{var e,t;let[s,a]=(0,o.useState)(0),i=(0,c.useRouter)(),{register:n,handleSubmit:r,formState:{errors:m}}=(0,h.cI)(),[f,_]=(0,o.useState)({}),[j,y]=(0,o.useState)(),[b,w]=(0,o.useState)(),[S,C]=(0,o.useState)(),[O,D]=(0,o.useState)(),[I,k]=(0,o.useState)([]),[$,T]=(0,o.useState)([]),[L,P]=(0,o.useState)(null),[z,H]=(0,o.useState)({}),[M,V]=(0,o.useState)(!1),[Z,W]=(0,o.useState)(!1),[B,G]=(0,o.useState)(!1),U=3!==s||Z?3===s&&Z?"Saving...":"Continue \xa0 →":"Save";(0,o.useEffect)(()=>{console.log("orginfo((((((((((((((((((((((((((9))))))))))))))))))))))))))",f)},[f]);let Y=async()=>{try{let t=await g.Z.get("/orgs/categories");var e=t.data.data.map(e=>v.fromJSON(e));console.log("orgTypes",e),y(e.filter(e=>0==e.Parents.length))}catch(e){}},X=async()=>{try{let t=await g.Z.get("/help/countries");console.log(t,"country fetch bres");var e=t.data.data.map(e=>x.fromJSON(e));console.log(e),C(e)}catch(e){}};(0,o.useEffect)(()=>{console.log("Init States"),Y(),X()},[]);let K=async e=>{try{let t=new FormData;t.append("file",e),t.append("bucket_id","ba670353-87a0-4396-90c5-07a0a1e67a99"),t.append("dir","orgFile/files"),t.append("token","Jzhnn82ioq/+glTAHkDptMmd+6HTxM+cRH+dNtkfL21GRE2VaUxIWo2fL7WgN6qh9NWz9CwkXwmmux3FqM1oGe7HMgNpyhkWZN2a84Hzy2yydyH6QJBih3voouRRxpG69D7obGVyuFbayeFHnbTcjQlos6E9QxuLgsoaVjCUXkJJrS8y/qIhPxLZJzf0cRim5MnaGP9iZphA9UXT5L+I42bSgSwstyT6ISRrt6AyNzM2ye9XVQmqEgqxrn+dnidmarEwcsvzW731jdjiD+EXU/u9ecj+lI4EA8x8alTkkIs/aJwYvO/cIhwK0duYtOba92rM61EqpKVwFuve6PWeGw=="),t.append("key","lakipay");let s=await fetch("http://196.189.126.183:5000/v1/objects",{method:"POST",body:t}),a=await s.json();console.log(a);let i="http://196.189.126.183:5000/v1/objects/file/".concat(a.path);return i}catch(e){return console.error("File upload error:",e),null}};(0,o.useEffect)(()=>{console.log("loading state...$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",Z)},[Z]);let Q=async e=>{W(!0);let t={};return await Promise.all(Object.keys(e).map(async s=>{let a=e[s];a instanceof File?t[s]=await K(a):Array.isArray(a)?t[s]=await Promise.all(a.map(async e=>"object"==typeof e&&null!==e?await Q(e):e)):"object"==typeof a&&null!==a?t[s]=await Q(a):t[s]=a})),W(!1),t},ee=async e=>{let t=await g.Z.post("/orgs",e);return console.log(t,"final repsonse"),t},et=(0,l.jsxs)("div",{className:"column",children:[(0,l.jsxs)("div",{className:"expanded",children:[(0,l.jsx)(p,{color:"grey",width:6.4,height:6.4}),(0,l.jsx)("div",{children:"Please select the country where you have registered your company and also the organization type"})]}),(0,l.jsxs)("div",{className:"form",children:[(0,l.jsxs)("div",{className:"dropdown",children:[(0,l.jsx)("div",{className:"dropdown_label",children:"Organization Type"}),(0,l.jsxs)("select",{...n("orgType",{onChange:e=>{console.log(e.target.value,"org type value*******************"),console.log(j.find(t=>t.Id==e.target.value)),w(j.find(t=>t.Id==e.target.value)),D(null)},required:{value:!0,message:"Field is required"}}),defaultValue:"",required:!0,className:"dropdown_input ".concat(void 0!=m.orgType?" error":""),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Select organization type"}),j&&j.map(e=>(0,l.jsx)("option",{value:e.Id,children:e.Name},e.Id))]}),m.orgType&&(0,l.jsx)("div",{className:"dropdown_error",children:"".concat(m.orgType.message)})]}),b&&S.filter(e=>b.CountryWhitelist.includes(e.Iso2)).length>0&&(0,l.jsxs)("div",{className:"dropdown",children:[(0,l.jsx)("div",{className:"dropdown_label",children:"Country"}),(0,l.jsxs)("select",{...n("country",{onChange:e=>{console.log(e.target.value),console.log(S.find(t=>t.Iso2+"_"+t.Name==e.target.value)),D(S.find(t=>t.Iso2+"_"+t.Name==e.target.value))},required:{value:!0,message:"Field is required"}}),value:null!==(e=O&&O.Iso2+"_"+O.Name)&&void 0!==e?e:"",required:!0,className:"dropdown_input ".concat(void 0!=m.country?" error":""),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Select country"}),S&&S.filter(e=>b.CountryWhitelist.includes(e.Iso2)).map(e=>(0,l.jsxs)("option",{value:e.Iso2+"_"+e.Name,children:[" ",N[e.Iso2]," \xa0 ",e.Name]},e.Id))]}),m.country&&(0,l.jsx)("div",{className:"dropdown_error",children:"".concat(m.country.message)})]})]})]}),es=(0,o.useRef)(),ea=(0,o.useRef)();return(0,l.jsx)("div",{className:"home",children:(0,l.jsxs)("div",{className:"home_content",children:[(0,l.jsxs)("div",{className:"home_content_header",children:[(0,l.jsx)("div",{onClick:()=>{i.replace("/cancel")},className:"home_content_header--leading",children:"⤬"}),(0,l.jsx)("div",{className:"home_content_header--title",children:"Merchant Onboarding"}),(0,l.jsx)("div",{className:"home_content_header--actions"})]}),(0,l.jsx)("div",{className:"home_content_body",children:null===j||null===S?(0,l.jsx)("div",{className:"column",children:" Loading "}):(0,l.jsxs)("div",{className:"column",children:[(0,l.jsx)("div",{className:"nav",children:(0,l.jsx)(d,{currentStep:0,steps:[(0,l.jsx)(u,{title:"Origin and Type",subtitle:"Select the organization's origin and type",index:1,isActive:0==s},0),(0,l.jsx)(u,{title:"Org Registration",subtitle:"Select the organization's origin and type",index:2,isActive:1==s},1),(0,l.jsx)(u,{title:"Department & Service",subtitle:"Select the organization's department and service",index:3,isActive:2==s},2),(0,l.jsx)(u,{title:"Terms & Conditions",subtitle:"Select the organization's origin and type",index:4,isActive:3==s},3)]})}),(0,l.jsx)("div",{className:"expanded",children:(()=>{switch(s){case 0:return et;case 1:return"ET"==O.Iso2&&"Business"==b.Name&&(t=(0,l.jsx)(E,{setDepartment:k,onSubmit:e=>{console.log("step23"),console.log("step23 ---000",e);let[t,s,a]=e.regDate.split("-"),i="".concat(s,"/").concat(a,"/").concat(t);_({...f,name:e.name,description:e.description,logo:e.logo[0],capital:e.capital,reg_date:i,legal_condition_id:e.legalCondition,taxes:[{tax_id:e.orgTax,file:e.tax[0],status:{verified:!1,status:"",message:""}}],departments:[],associates:[{position:e.associatePosition,phone_number:e.associatePhonenumber,full_name:e.associateFullname}],details:{TIN:e.tin,TINFile:e.tax[0],RegNo:e.regNo,RegFile:e.regFile[0],Status:{Id:"00000000-0000-0000-0000-000000000000",Verified:!1,Status:"",Message:""}},status:{verified:!1,status:"",message:""},retention_status:{can_retain:!1,file:""}})},ref:es})),t;case 2:return(0,l.jsx)(J,{departments:$,department:I,setDepartments:T,onSubmit:e=>{console.log("step23"),console.log("departsments",e),_({...f,departments:e})},ref:ea});case 3:return(0,l.jsx)(F,{ref:ea,agreement:M,setAggrement:V});case 4:M?console.log("last save step"):console.log("not agreed so no continue to last step")}})()}),(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("button",{onClick:()=>{switch(s){case 0:r(e=>{console.log("value---- ",e),_({...f,category_id:null==e?void 0:e.orgType,country:null==e?void 0:e.country.slice(0,2)}),a(s+1)})();case 1:void 0!=es.current&&(console.log("11212121212121212121212121212-===-=--==-=-=-=-=-=-=-=-=-="),es.current.validate(),console.log("11212121212121212121212121212-===-=--==-=-=-=-=-=-=-=-=-=***************"),a(s+1));break;case 2:if(void 0!=ea.current){var e;console.log("validateClick-===-=--==-=-=-=-=-=-=-=-=-=case2"),null==ea||null===(e=ea.current)||void 0===e||e.validateClick(),console.log("validateClick-===-=--==-=-=-=-=-=-=-=-=-=***************case2"),a(s+1)}break;case 3:console.log("validateClick-===-=--==-=-=-=-=-=-=-=-=-=case3",s),M?Q(f).then(e=>{console.log("Updated Data Object:",e),ee(e).then(e=>{console.log(e,"repsosneinside the case three button"),200===e.status?G(!0):A.ZP.error("An error occurred")})}):A.ZP.info("Please agree to the terms and conditions"),console.log("validateClick-===-=--==-=-=-=-=-=-=-=-=-=***************case3")}},className:"btn",children:U}),s>0&&(0,l.jsx)("div",{onClick:()=>{a(s-1)},style:{marginLeft:"1.6rem"},className:"btn outline",children:"Back"})]})]})}),(0,l.jsx)(R.Z,{closeIcon:null,maskClosable:!1,onCancel:()=>{window.location.reload()},open:B,footer:null,children:(0,l.jsx)(q.ZP,{status:"success",title:"Organization registration successful!",subTitle:"Please wait while we verify your documents.",extra:[(0,l.jsx)("a",{className:"btn_stl_result",href:"",onClick:()=>window.location.reload(),children:"Go to Dashboard"},"go")]})}),(0,l.jsx)("div",{className:"home_content_footer",children:"\xa9 LakiPay 2024, All rights reserved."})]})})};var M=()=>(0,l.jsx)(H,{})},59766:function(){},54150:function(){},32120:function(){},76957:function(){},67200:function(){}},function(e){e.O(0,[872,115,443,744],function(){return e(e.s=10755)}),_N_E=e.O()}]);