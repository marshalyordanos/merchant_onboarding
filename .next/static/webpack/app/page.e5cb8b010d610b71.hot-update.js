"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/models/organization/organization.ts":
/*!*************************************************!*\
  !*** ./src/models/organization/organization.ts ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Associate: function() { return /* binding */ Associate; },\n/* harmony export */   EthBusOrg: function() { return /* binding */ EthBusOrg; },\n/* harmony export */   Organization: function() { return /* binding */ Organization; }\n/* harmony export */ });\n/* harmony import */ var _category_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../category/category */ \"(app-pages-browser)/./src/models/category/category.ts\");\n/* harmony import */ var _legal_condition_legal_condition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../legal_condition/legal_condition */ \"(app-pages-browser)/./src/models/legal_condition/legal_condition.ts\");\n/* harmony import */ var _department_department__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../department/department */ \"(app-pages-browser)/./src/models/department/department.ts\");\n/* harmony import */ var _tax_tax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tax/tax */ \"(app-pages-browser)/./src/models/tax/tax.ts\");\n/* harmony import */ var _verification_status_verification_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../verification_status/verification_status */ \"(app-pages-browser)/./src/models/verification_status/verification_status.ts\");\n\n\n\n\n\nclass Organization {\n    static fromJSON(organization) {\n        return new Organization({\n            id: organization[\"id\"],\n            name: organization[\"name\"],\n            description: organization[\"description\"],\n            logo: organization[\"logo\"],\n            capital: organization[\"capital\"],\n            regDate: new Date(organization[\"reg_date\"]),\n            country: organization[\"country\"],\n            category: _category_category__WEBPACK_IMPORTED_MODULE_0__.Category.fromJSON(organization[\"category\"]),\n            legalCondition: !!organization[\"legal_condition\"] ? _legal_condition_legal_condition__WEBPACK_IMPORTED_MODULE_1__.LegalCondition.fromJSON(organization[\"legal_condition\"]) : null,\n            taxes: organization[\"taxes\"] && organization[\"taxes\"].map((e)=>_tax_tax__WEBPACK_IMPORTED_MODULE_3__.OrganizationTax.fromJSON(e)),\n            // taxes: organization[\"taxes\"] && (organization[\"taxes\"] as Map<string, any>[]).map((e) => OrganizationTax.fromJSON(e)),\n            associates: organization[\"associates\"] && organization[\"associates\"].map((e)=>Associate.fromJSON(e)),\n            departments: organization[\"departments\"].map((e)=>_department_department__WEBPACK_IMPORTED_MODULE_2__.Department.fromJSON(e)),\n            details: organization[\"details\"],\n            status: organization[\"status\"] && _verification_status_verification_status__WEBPACK_IMPORTED_MODULE_4__.VerificationStatus.fromJSON(organization[\"status\"]),\n            createdAt: organization[\"created_at\"]\n        });\n    }\n    constructor({ id, name, description, capital, regDate, country, category, legalCondition, logo, taxes, associates, departments, details, status, createdAt }){\n        this.Id = id;\n        this.Name = name;\n        this.Description = description;\n        this.Logo = logo;\n        this.Capital = capital;\n        this.RegDate = regDate;\n        this.Country = country;\n        this.Category = category;\n        this.LegalCondition = legalCondition;\n        this.Taxes = taxes;\n        this.Associates = associates;\n        this.Departments = departments;\n        this.Details = details;\n        this.Status = status;\n        this.CreatedAt = createdAt;\n    }\n}\nclass Associate {\n    static fromJSON(associate) {\n        return new Associate({\n            userId: associate[\"user_id\"],\n            position: associate[\"position\"]\n        });\n    }\n    constructor({ userId, position }){\n        this.UserId = userId;\n        this.Position = position;\n    }\n}\nclass EthBusOrg {\n    constructor(parameters){}\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9tb2RlbHMvb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvbi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQztBQUNvQjtBQUNkO0FBQ1Q7QUFDbUM7QUFFeEUsTUFBTUs7SUFtRVQsT0FBT0MsU0FBU0MsWUFBOEIsRUFBZ0I7UUFFMUQsT0FBTyxJQUFJRixhQUFhO1lBQ3BCRyxJQUFJRCxZQUFZLENBQUMsS0FBSztZQUN0QkUsTUFBTUYsWUFBWSxDQUFDLE9BQU87WUFDMUJHLGFBQWFILFlBQVksQ0FBQyxjQUFjO1lBQ3hDSSxNQUFNSixZQUFZLENBQUMsT0FBTztZQUMxQkssU0FBU0wsWUFBWSxDQUFDLFVBQVU7WUFDaENNLFNBQVMsSUFBSUMsS0FBS1AsWUFBWSxDQUFDLFdBQVc7WUFDMUNRLFNBQVNSLFlBQVksQ0FBQyxVQUFVO1lBQ2hDUyxVQUFVaEIsd0RBQVFBLENBQUNNLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDLFdBQVc7WUFDcERVLGdCQUFnQixDQUFDLENBQUNWLFlBQVksQ0FBQyxrQkFBa0IsR0FBR04sNEVBQWNBLENBQUNLLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDLGtCQUFrQixJQUFJO1lBQy9HVyxPQUFPWCxZQUFZLENBQUMsUUFBUSxJQUFJLFlBQWEsQ0FBQyxRQUFRLENBQXdCWSxHQUFHLENBQUMsQ0FBQ0MsSUFBTWpCLHFEQUFlQSxDQUFDRyxRQUFRLENBQUNjO1lBRWxILHlIQUF5SDtZQUN6SEMsWUFBWWQsWUFBWSxDQUFDLGFBQWEsSUFBSSxZQUFhLENBQUMsYUFBYSxDQUF3QlksR0FBRyxDQUFDLENBQUNDLElBQU1FLFVBQVVoQixRQUFRLENBQUNjO1lBQzNIRyxhQUFhaEIsWUFBWSxDQUFDLGNBQWMsQ0FBQ1ksR0FBRyxDQUFDLENBQUNDLElBQXdCbEIsOERBQVVBLENBQUNJLFFBQVEsQ0FBQ2M7WUFDMUZJLFNBQVNqQixZQUFZLENBQUMsVUFBVTtZQUNoQ2tCLFFBQVFsQixZQUFZLENBQUMsU0FBUyxJQUFJSCx3RkFBa0JBLENBQUNFLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDLFNBQVM7WUFDcEZtQixXQUFXbkIsWUFBWSxDQUFDLGFBQWE7UUFDekM7SUFDSjtJQXhFQW9CLFlBQ0ksRUFDSW5CLEVBQUUsRUFDRkMsSUFBSSxFQUNKQyxXQUFXLEVBQ1hFLE9BQU8sRUFDUEMsT0FBTyxFQUNQRSxPQUFPLEVBQ1BDLFFBQVEsRUFDUkMsY0FBYyxFQUNkTixJQUFJLEVBQ0pPLEtBQUssRUFDTEcsVUFBVSxFQUNWRSxXQUFXLEVBQ1hDLE9BQU8sRUFDUEMsTUFBTSxFQUNOQyxTQUFTLEVBaUJaLENBQUU7UUFDSCxJQUFJLENBQUNFLEVBQUUsR0FBR3BCO1FBQ1YsSUFBSSxDQUFDcUIsSUFBSSxHQUFHcEI7UUFDWixJQUFJLENBQUNxQixXQUFXLEdBQUdwQjtRQUNuQixJQUFJLENBQUNxQixJQUFJLEdBQUdwQjtRQUNaLElBQUksQ0FBQ3FCLE9BQU8sR0FBR3BCO1FBQ2YsSUFBSSxDQUFDcUIsT0FBTyxHQUFHcEI7UUFDZixJQUFJLENBQUNxQixPQUFPLEdBQUduQjtRQUNmLElBQUksQ0FBQ2YsUUFBUSxHQUFHZ0I7UUFDaEIsSUFBSSxDQUFDZixjQUFjLEdBQUdnQjtRQUN0QixJQUFJLENBQUNrQixLQUFLLEdBQUdqQjtRQUNiLElBQUksQ0FBQ2tCLFVBQVUsR0FBR2Y7UUFDbEIsSUFBSSxDQUFDZ0IsV0FBVyxHQUFHZDtRQUNuQixJQUFJLENBQUNlLE9BQU8sR0FBR2Q7UUFDZixJQUFJLENBQUNlLE1BQU0sR0FBR2Q7UUFDZCxJQUFJLENBQUNlLFNBQVMsR0FBR2Q7SUFDckI7QUF3Qko7QUFFTyxNQUFNSjtJQWVULE9BQU9oQixTQUFTbUMsU0FBMkIsRUFBYTtRQUNwRCxPQUFPLElBQUluQixVQUFVO1lBQ2pCb0IsUUFBUUQsU0FBUyxDQUFDLFVBQVU7WUFDNUJFLFVBQVVGLFNBQVMsQ0FBQyxXQUFXO1FBQ25DO0lBQ0o7SUFqQkFkLFlBQ0ksRUFDSWUsTUFBTSxFQUNOQyxRQUFRLEVBSVgsQ0FBRTtRQUNILElBQUksQ0FBQ0MsTUFBTSxHQUFHRjtRQUNkLElBQUksQ0FBQ0csUUFBUSxHQUFHRjtJQUNwQjtBQVFKO0FBRU8sTUFBTUc7SUFFVG5CLFlBQVlvQixVQUFVLENBQUUsQ0FFeEI7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbW9kZWxzL29yZ2FuaXphdGlvbi9vcmdhbml6YXRpb24udHM/MjQ2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gXCIuLi9jYXRlZ29yeS9jYXRlZ29yeVwiXG5pbXBvcnQgeyBMZWdhbENvbmRpdGlvbiB9IGZyb20gXCIuLi9sZWdhbF9jb25kaXRpb24vbGVnYWxfY29uZGl0aW9uXCJcbmltcG9ydCB7IERlcGFydG1lbnQgfSBmcm9tIFwiLi4vZGVwYXJ0bWVudC9kZXBhcnRtZW50XCJcbmltcG9ydCB7IE9yZ2FuaXphdGlvblRheCB9IGZyb20gXCIuLi90YXgvdGF4XCJcbmltcG9ydCB7IFZlcmlmaWNhdGlvblN0YXR1cyB9IGZyb20gXCIuLi92ZXJpZmljYXRpb25fc3RhdHVzL3ZlcmlmaWNhdGlvbl9zdGF0dXNcIlxuXG5leHBvcnQgY2xhc3MgT3JnYW5pemF0aW9uIHtcbiAgICBJZDogc3RyaW5nXG4gICAgTmFtZTogc3RyaW5nXG4gICAgRGVzY3JpcHRpb246IHN0cmluZ1xuICAgIENhcGl0YWw6IG51bWJlclxuICAgIFJlZ0RhdGU6IERhdGVcbiAgICBDb3VudHJ5OiBzdHJpbmdcbiAgICBDYXRlZ29yeTogQ2F0ZWdvcnlcbiAgICBMZWdhbENvbmRpdGlvbjogTGVnYWxDb25kaXRpb25cbiAgICBMb2dvOiBzdHJpbmdcbiAgICBUYXhlczogT3JnYW5pemF0aW9uVGF4W10gfCBudWxsXG4gICAgQXNzb2NpYXRlczogQXNzb2NpYXRlW10gfCBudWxsXG4gICAgRGVwYXJ0bWVudHM6IERlcGFydG1lbnRbXVxuICAgIERldGFpbHM6IE9iamVjdFxuICAgIFN0YXR1czogVmVyaWZpY2F0aW9uU3RhdHVzXG4gICAgQ3JlYXRlZEF0OiBEYXRlXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgY2FwaXRhbCxcbiAgICAgICAgICAgIHJlZ0RhdGUsXG4gICAgICAgICAgICBjb3VudHJ5LFxuICAgICAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgICAgICBsZWdhbENvbmRpdGlvbixcbiAgICAgICAgICAgIGxvZ28sXG4gICAgICAgICAgICB0YXhlcyxcbiAgICAgICAgICAgIGFzc29jaWF0ZXMsXG4gICAgICAgICAgICBkZXBhcnRtZW50cyxcbiAgICAgICAgICAgIGRldGFpbHMsXG4gICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICBjcmVhdGVkQXRcbiAgICAgICAgfToge1xuICAgICAgICAgICAgaWQ6IHN0cmluZ1xuICAgICAgICAgICAgbmFtZTogc3RyaW5nXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICAgICAgICAgICBjYXBpdGFsOiBudW1iZXJcbiAgICAgICAgICAgIHJlZ0RhdGU6IERhdGVcbiAgICAgICAgICAgIGNvdW50cnk6IHN0cmluZ1xuICAgICAgICAgICAgY2F0ZWdvcnk6IENhdGVnb3J5XG4gICAgICAgICAgICBsZWdhbENvbmRpdGlvbjogTGVnYWxDb25kaXRpb25cbiAgICAgICAgICAgIGxvZ286IHN0cmluZ1xuICAgICAgICAgICAgdGF4ZXM6IE9yZ2FuaXphdGlvblRheFtdXG4gICAgICAgICAgICBhc3NvY2lhdGVzOiBBc3NvY2lhdGVbXVxuICAgICAgICAgICAgZGVwYXJ0bWVudHM6IERlcGFydG1lbnRbXVxuICAgICAgICAgICAgZGV0YWlsczogT2JqZWN0XG4gICAgICAgICAgICBzdGF0dXM6IFZlcmlmaWNhdGlvblN0YXR1c1xuICAgICAgICAgICAgY3JlYXRlZEF0OiBEYXRlXG4gICAgICAgIH0pIHtcbiAgICAgICAgdGhpcy5JZCA9IGlkO1xuICAgICAgICB0aGlzLk5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLkRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuTG9nbyA9IGxvZ287XG4gICAgICAgIHRoaXMuQ2FwaXRhbCA9IGNhcGl0YWw7XG4gICAgICAgIHRoaXMuUmVnRGF0ZSA9IHJlZ0RhdGU7XG4gICAgICAgIHRoaXMuQ291bnRyeSA9IGNvdW50cnk7XG4gICAgICAgIHRoaXMuQ2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAgICAgdGhpcy5MZWdhbENvbmRpdGlvbiA9IGxlZ2FsQ29uZGl0aW9uO1xuICAgICAgICB0aGlzLlRheGVzID0gdGF4ZXM7XG4gICAgICAgIHRoaXMuQXNzb2NpYXRlcyA9IGFzc29jaWF0ZXM7XG4gICAgICAgIHRoaXMuRGVwYXJ0bWVudHMgPSBkZXBhcnRtZW50cztcbiAgICAgICAgdGhpcy5EZXRhaWxzID0gZGV0YWlscztcbiAgICAgICAgdGhpcy5TdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMuQ3JlYXRlZEF0ID0gY3JlYXRlZEF0O1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tSlNPTihvcmdhbml6YXRpb246IE1hcDxzdHJpbmcsIGFueT4pOiBPcmdhbml6YXRpb24ge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ldyBPcmdhbml6YXRpb24oe1xuICAgICAgICAgICAgaWQ6IG9yZ2FuaXphdGlvbltcImlkXCJdLFxuICAgICAgICAgICAgbmFtZTogb3JnYW5pemF0aW9uW1wibmFtZVwiXSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBvcmdhbml6YXRpb25bXCJkZXNjcmlwdGlvblwiXSxcbiAgICAgICAgICAgIGxvZ286IG9yZ2FuaXphdGlvbltcImxvZ29cIl0sXG4gICAgICAgICAgICBjYXBpdGFsOiBvcmdhbml6YXRpb25bXCJjYXBpdGFsXCJdLFxuICAgICAgICAgICAgcmVnRGF0ZTogbmV3IERhdGUob3JnYW5pemF0aW9uW1wicmVnX2RhdGVcIl0pLFxuICAgICAgICAgICAgY291bnRyeTogb3JnYW5pemF0aW9uW1wiY291bnRyeVwiXSxcbiAgICAgICAgICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5mcm9tSlNPTihvcmdhbml6YXRpb25bXCJjYXRlZ29yeVwiXSksXG4gICAgICAgICAgICBsZWdhbENvbmRpdGlvbjogISFvcmdhbml6YXRpb25bXCJsZWdhbF9jb25kaXRpb25cIl0gPyBMZWdhbENvbmRpdGlvbi5mcm9tSlNPTihvcmdhbml6YXRpb25bXCJsZWdhbF9jb25kaXRpb25cIl0pIDogbnVsbCxcbiAgICAgICAgICAgIHRheGVzOiBvcmdhbml6YXRpb25bXCJ0YXhlc1wiXSAmJiAob3JnYW5pemF0aW9uW1widGF4ZXNcIl0gYXMgTWFwPHN0cmluZywgYW55PltdKS5tYXAoKGUpID0+IE9yZ2FuaXphdGlvblRheC5mcm9tSlNPTihlKSksXG5cbiAgICAgICAgICAgIC8vIHRheGVzOiBvcmdhbml6YXRpb25bXCJ0YXhlc1wiXSAmJiAob3JnYW5pemF0aW9uW1widGF4ZXNcIl0gYXMgTWFwPHN0cmluZywgYW55PltdKS5tYXAoKGUpID0+IE9yZ2FuaXphdGlvblRheC5mcm9tSlNPTihlKSksXG4gICAgICAgICAgICBhc3NvY2lhdGVzOiBvcmdhbml6YXRpb25bXCJhc3NvY2lhdGVzXCJdICYmIChvcmdhbml6YXRpb25bXCJhc3NvY2lhdGVzXCJdIGFzIE1hcDxzdHJpbmcsIGFueT5bXSkubWFwKChlKSA9PiBBc3NvY2lhdGUuZnJvbUpTT04oZSkpLFxuICAgICAgICAgICAgZGVwYXJ0bWVudHM6IG9yZ2FuaXphdGlvbltcImRlcGFydG1lbnRzXCJdLm1hcCgoZTogTWFwPHN0cmluZywgYW55PikgPT4gRGVwYXJ0bWVudC5mcm9tSlNPTihlKSksXG4gICAgICAgICAgICBkZXRhaWxzOiBvcmdhbml6YXRpb25bXCJkZXRhaWxzXCJdLFxuICAgICAgICAgICAgc3RhdHVzOiBvcmdhbml6YXRpb25bXCJzdGF0dXNcIl0gJiYgVmVyaWZpY2F0aW9uU3RhdHVzLmZyb21KU09OKG9yZ2FuaXphdGlvbltcInN0YXR1c1wiXSksXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG9yZ2FuaXphdGlvbltcImNyZWF0ZWRfYXRcIl1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXNzb2NpYXRlIHtcbiAgICBVc2VySWQ6IHN0cmluZ1xuICAgIFBvc2l0aW9uOiBzdHJpbmdcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAge1xuICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgcG9zaXRpb25cbiAgICAgICAgfToge1xuICAgICAgICAgICAgdXNlcklkOiBzdHJpbmcsXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RyaW5nXG4gICAgICAgIH0pIHtcbiAgICAgICAgdGhpcy5Vc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHRoaXMuUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUpTT04oYXNzb2NpYXRlOiBNYXA8c3RyaW5nLCBhbnk+KTogQXNzb2NpYXRlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBc3NvY2lhdGUoe1xuICAgICAgICAgICAgdXNlcklkOiBhc3NvY2lhdGVbXCJ1c2VyX2lkXCJdLFxuICAgICAgICAgICAgcG9zaXRpb246IGFzc29jaWF0ZVtcInBvc2l0aW9uXCJdXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV0aEJ1c09yZyB7XG4gICAgXG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVycykge1xuICAgICAgICBcbiAgICB9XG59Il0sIm5hbWVzIjpbIkNhdGVnb3J5IiwiTGVnYWxDb25kaXRpb24iLCJEZXBhcnRtZW50IiwiT3JnYW5pemF0aW9uVGF4IiwiVmVyaWZpY2F0aW9uU3RhdHVzIiwiT3JnYW5pemF0aW9uIiwiZnJvbUpTT04iLCJvcmdhbml6YXRpb24iLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxvZ28iLCJjYXBpdGFsIiwicmVnRGF0ZSIsIkRhdGUiLCJjb3VudHJ5IiwiY2F0ZWdvcnkiLCJsZWdhbENvbmRpdGlvbiIsInRheGVzIiwibWFwIiwiZSIsImFzc29jaWF0ZXMiLCJBc3NvY2lhdGUiLCJkZXBhcnRtZW50cyIsImRldGFpbHMiLCJzdGF0dXMiLCJjcmVhdGVkQXQiLCJjb25zdHJ1Y3RvciIsIklkIiwiTmFtZSIsIkRlc2NyaXB0aW9uIiwiTG9nbyIsIkNhcGl0YWwiLCJSZWdEYXRlIiwiQ291bnRyeSIsIlRheGVzIiwiQXNzb2NpYXRlcyIsIkRlcGFydG1lbnRzIiwiRGV0YWlscyIsIlN0YXR1cyIsIkNyZWF0ZWRBdCIsImFzc29jaWF0ZSIsInVzZXJJZCIsInBvc2l0aW9uIiwiVXNlcklkIiwiUG9zaXRpb24iLCJFdGhCdXNPcmciLCJwYXJhbWV0ZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/models/organization/organization.ts\n"));

/***/ })

});