(this["webpackJsonpflight-planner"]=this["webpackJsonpflight-planner"]||[]).push([[0],{141:function(e,t,a){},142:function(e,t,a){},144:function(e,t,a){},154:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(16),c=a.n(n),i=(a(141),a(142),a(208)),o=a(39),l=a.n(o),h=a(57),d=a(7),u=a(34),j=a(87),f=a(59),p=a(60),b=a(51),y=a(80),m=a(78),x=a(19),O=a(107),g=a(108),C=(a(144),a(209)),v=a(4),_=function(e){Object(y.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(f.a)(this,a),(r=t.call(this,e)).handleChange=r.handleChange.bind(Object(b.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(b.a)(r)),r.getRoutes=r.getRoutes.bind(Object(b.a)(r)),r.state={fly_from_city:"",fly_from_state:"",fly_from_country:"",fly_to_city:"",fly_to_state:"",fly_to_country:"",currency:"",early:"",late:"",form_alert:!1,error_alert:!1},r}return Object(p.a)(a,[{key:"getPlaces",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var a,r,s,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"GET",headers:{"x-rapidapi-key":"".concat("8531fbe356msh64adf1198d74c9fp10d93cjsn7cc4f917e0f1"),"x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",useQueryString:!0}},e.next=3,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/".concat(t,"/en-US/?")+new URLSearchParams({query:this.state.fly_from_city}),a);case 3:if(200==(r=e.sent).status){e.next=7;break}return this.setState({error_alert:!0}),e.abrupt("return",null);case 7:return e.next=9,r.json();case 9:return r=e.sent,s=r,e.next=13,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/".concat(t,"/en-US/?")+new URLSearchParams({query:this.state.fly_to_city}),a);case 13:if(200==(r=e.sent).status){e.next=17;break}return this.setState({error_alert:!0}),e.abrupt("return",null);case 17:return e.next=19,r.json();case 19:return r=e.sent,n=r,this.setState({error_alert:!1}),e.abrupt("return",[s,n]);case 23:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRoutes",value:function(){var e=Object(h.a)(l.a.mark((function e(t,a,r,s,n){var c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"GET",headers:{"x-rapidapi-key":"".concat("8531fbe356msh64adf1198d74c9fp10d93cjsn7cc4f917e0f1"),"x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"}},e.next=3,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/".concat(t,"/en-US/").concat(a,"/").concat(r,"/").concat(s,"/").concat(n),c);case 3:if(200==(i=e.sent).status){e.next=8;break}this.setState({error_alert:!0}),e.next=12;break;case 8:return e.next=10,i.json();case 10:i=e.sent,this.props.dataCallback(i);case 12:case"end":return e.stop()}}),e,this)})));return function(t,a,r,s,n){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(e){if(e.preventDefault(),""===this.state.fly_from_city||""===this.state.fly_from_country||""===this.state.fly_from_state||""===this.state.fly_to_city||""===this.state.fly_to_state||""===this.state.fly_to_country||""===this.state.currency||""===this.state.early||""===this.state.late)this.setState({form_alert:!0});else{this.setState({form_alert:!1});var t=this.getPlaces(this.state.currency),a=this;t.then((function(e){if(null!=e){var t=e[0].Places[0].PlaceId,r=e[1].Places[0].PlaceId;a.getRoutes(a.state.currency,r,t,a.state.early,a.state.late)}}))}}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,r=t.value;this.setState(Object(j.a)(Object(j.a)({},this.state),{},Object(u.a)({},a,r)))}},{key:"render",value:function(){var e=this,t=new Map;return t.set("N/A","N/A"),t.set("Alabama","AL"),t.set("Alaska","AK"),t.set("Arizona","AZ"),t.set("Arkansas","AR"),t.set("California","CA"),t.set("Colorado","CO"),t.set("Connecticut","CT"),t.set("Delaware","DE"),t.set("Florida","FL"),t.set("Georgia","GA"),t.set("Hawaii","HI"),t.set("Idaho","ID"),t.set("Illinois","IL"),t.set("Indiana","IN"),t.set("Iowa","IA"),t.set("Kansas","KS"),t.set("Kentucky","KY"),t.set("Louisiana","LA"),t.set("Maine","ME"),t.set("Maryland","MD"),t.set("Massachusetts","MA"),t.set("Michigan","MI"),t.set("Minnesota","MN"),t.set("Mississippi","MS"),t.set("Missouri","MO"),t.set("Montana","MT"),t.set("Nebraska","NE"),t.set("Nevada","NV"),t.set("New Hampshire","NH"),t.set("New Jersey","NJ"),t.set("New Mexico","NM"),t.set("New York","NY"),t.set("North Carolina","NC"),t.set("North Dakota","ND"),t.set("Ohio","OH"),t.set("Oklahoma","OK"),t.set("Oregon","OR"),t.set("Pennsylvania","PA"),t.set("Rhode Island","RI"),t.set("South Carolina","SC"),t.set("South Dakota","SD"),t.set("Tennessee","TN"),t.set("Texas","TX"),t.set("Utah","UT"),t.set("Vermont","VT"),t.set("Virginia","VA"),t.set("Washington","WA"),t.set("West Virginia","WV"),t.set("Wisconsin","WI"),t.set("Wyoming","WY"),Object(v.jsxs)("div",{className:"form",children:[Object(v.jsx)("div",{className:"form_alert",children:this.state.form_alert?Object(v.jsx)(C.a,{variant:"danger",onClose:function(){e.setState({form_alert:!1})},dismissible:!0,children:Object(v.jsx)(C.a.Heading,{children:"Please fill in all fields before searching."})}):null}),Object(v.jsx)("div",{className:"search_error_alert",children:this.state.error_alert?Object(v.jsx)(C.a,{variant:"danger",onClose:function(){e.setState({error_alert:!1})},dismissible:!0,children:Object(v.jsx)(C.a.Heading,{children:"Invalid search. Please check your inputs."})}):null}),Object(v.jsx)("div",{className:"flightinfo",children:Object(v.jsxs)(x.a,{children:[Object(v.jsx)(x.a.Group,{children:Object(v.jsxs)(x.a.Row,{children:[Object(v.jsx)(x.a.Label,{children:"Flying From: "}),Object(v.jsx)(O.a,{children:Object(v.jsx)(x.a.Control,{type:"text",name:"fly_from_city",placeholder:"City",onChange:this.handleChange})}),Object(v.jsx)(O.a,{children:Object(v.jsxs)(x.a.Control,{as:"select",name:"fly_from_state",onChange:this.handleChange,children:[Object(v.jsx)("option",{value:"",children:"State"}),Array.from(t.keys()).map((function(e){return Object(v.jsx)("option",{value:t.get(e),children:e})}))]})}),Object(v.jsx)(O.a,{children:Object(v.jsx)(x.a.Control,{type:"text",name:"fly_from_country",placeholder:"Country",onChange:this.handleChange})})]})}),Object(v.jsx)(x.a.Group,{children:Object(v.jsxs)(x.a.Row,{children:[Object(v.jsx)(x.a.Label,{children:"Currency: "}),Object(v.jsx)(O.a,{children:Object(v.jsxs)(x.a.Control,{as:"select",name:"currency",onChange:this.handleChange,children:[Object(v.jsx)("option",{value:"",children:"Select currency"}),this.props.currencies.map((function(e){return e.Code!==e.Symbol?Object(v.jsx)("option",{value:e.Code,children:"".concat(e.Code," (").concat(e.Symbol,")")}):Object(v.jsx)("option",{value:e.Code,children:"".concat(e.Code)})}))]})})]})}),Object(v.jsx)(x.a.Group,{children:Object(v.jsxs)(x.a.Row,{children:[Object(v.jsx)(x.a.Label,{children:"Flying To: "}),Object(v.jsx)(O.a,{children:Object(v.jsx)(x.a.Control,{type:"text",name:"fly_to_city",placeholder:"City",onChange:this.handleChange})}),Object(v.jsx)(O.a,{children:Object(v.jsxs)(x.a.Control,{as:"select",name:"fly_to_state",onChange:this.handleChange,children:[Object(v.jsx)("option",{value:"",children:"State"}),Array.from(t.keys()).map((function(e){return Object(v.jsx)("option",{value:t.get(e),children:e})}))]})}),Object(v.jsx)(O.a,{children:Object(v.jsx)(x.a.Control,{type:"text",name:"fly_to_country",placeholder:"Country",onChange:this.handleChange})})]})}),Object(v.jsx)(x.a.Group,{children:Object(v.jsxs)(x.a.Row,{children:[Object(v.jsx)(x.a.Label,{children:"Earliest Flight Date: "}),Object(v.jsx)(O.a,{children:Object(v.jsx)(x.a.Control,{type:"text",name:"early",placeholder:"yyyy-mm-dd, yyyy-mm, or anytime",onChange:this.handleChange})}),Object(v.jsx)(x.a.Label,{children:"Latest Flight Date: "}),Object(v.jsx)(O.a,{children:Object(v.jsx)(x.a.Control,{type:"text",name:"late",placeholder:"yyyy-mm-dd, yyyy-mm, or anytime",onChange:this.handleChange})})]})}),Object(v.jsx)(g.a,{variant:"primary",onClick:this.handleSubmit,children:"Search"})]})})]})}}]),a}(r.Component),k=a(109);var S=function(e){var t=[];if(e.ready){for(var a=new Map,r=0;r<e.data.Carriers.length;r++)a.set(e.data.Carriers[r].CarrierId,e.data.Carriers[r].Name);e.data.Quotes.map((function(r,s){var n=r.Direct?"Yes":"No",c=r.OutboundLeg.DepartureDate.split("T")[0],i=r.InboundLeg.DepartureDate.split("T")[0];t.push({id:2*s,date:c,price:r.MinPrice,carrier:a.get(r.OutboundLeg.CarrierIds[0]),from:e.data.Places[0].Name,to:e.data.Places[1].Name,direct:n}),t.push({id:2*s+1,date:i,price:r.MinPrice,carrier:a.get(r.InboundLeg.CarrierIds[0]),from:e.data.Places[1].Name,to:e.data.Places[0].Name,direct:n})}))}return Object(v.jsx)("div",{style:{display:"flex",height:"100%",flexGrow:1,background:"white"},children:Object(v.jsx)(k.a,{autoHeight:!0,rows:t,columns:[{field:"date",headerName:"Date",width:400},{field:"price",headerName:"Price",width:400},{field:"carrier",headerName:"Carrier",width:400},{field:"from",headerName:"From",width:400},{field:"to",headerName:"To",width:400},{field:"direct",headerName:"Direct",width:400}],variant:"dark",pageSize:10})})},N=(a(154),function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),a=t[0],s=t[1],n=Object(r.useState)(!1),c=Object(d.a)(n,2),i=c[0],o=c[1],u=Object(r.useState)([]),j=Object(d.a)(u,2),f=j[0],p=j[1],b=Object(r.useState)(!1),y=Object(d.a)(b,2),m=y[0],x=y[1];function O(){return(O=Object(h.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"x-rapidapi-key":"".concat("8531fbe356msh64adf1198d74c9fp10d93cjsn7cc4f917e0f1"),"x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"}},e.next=3,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies",t);case 3:return a=e.sent,e.next=6,a.json();case 6:a=e.sent,s(a.Currencies),o(!0);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i||function(){O.apply(this,arguments)}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"welcome",children:[Object(v.jsx)("p",{children:' Welcome! To search for flights, please input the place of departure and destination. If you are not flying from/to a place in the United States, please select N/A in the "State" field. '}),Object(v.jsx)("p",{children:" Then select your currency and enter a range of dates during which you potentially wish to fly. "}),Object(v.jsx)("p",{children:" The results of your search (prices in the currency you selected) will appear in the table below. "}),Object(v.jsx)("p",{children:" Click each column of the table to sort rows based on this field. "})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)(_,{currencies:a,dataCallback:function(e){p(e),x(!0)}}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)(S,{data:f,ready:m})]})]})});var w=function(){return Object(v.jsx)("div",{children:Object(v.jsx)(i.a,{fluid:!0,className:"App",children:Object(v.jsx)(i.a,{fluid:!0,children:Object(v.jsx)(N,{})})})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,211)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),r(e),s(e),n(e),c(e)}))};a(155);c.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(w,{})}),document.getElementById("root")),I()}},[[156,1,2]]]);
//# sourceMappingURL=main.a7b19242.chunk.js.map