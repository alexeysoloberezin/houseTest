(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{855:function(t,e,n){"use strict";n.r(e);var r=n(161),c={setup:function(){return{salesByCountries:[{abbr:"US",amount:"$8,656k",country:"United states of america",change:"+25.8%",sales:"894k",color:"success"},{abbr:"UK",amount:"$2,415k",country:"United kingdom",change:"-6.2%",sales:"645k",color:"error"},{abbr:"IN",amount:"$865k",country:"India",change:"+12.4%",sales:"148k",color:"warning"},{abbr:"JA",amount:"$745k",country:"Japan",change:"-11.9%",sales:"86k",color:"secondary"},{abbr:"KO",amount:"$45k",country:"Korea",change:"+16.2%",sales:"42k",color:"error"}],icons:{mdiDotsVertical:r.ib,mdiChevronUp:r.T,mdiChevronDown:r.S}}}},o=n(66),l=n(105),v=n.n(l),m=n(348),d=n(224),_=n(336),h=n(247),C=n(175),x=n(339),w=n(226),f=n(129),k=n(338),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",{staticClass:"align-start"},[n("span",[t._v("Sales by Countries")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"me-n3 mt-n2",attrs:{icon:"",small:""}},[n("v-icon",[t._v("\n        "+t._s(t.icons.mdiDotsVertical)+"\n      ")])],1)],1),t._v(" "),n("v-card-text",[n("v-list",{staticClass:"pb-0"},t._l(t.salesByCountries,(function(data,e){return n("v-list-item",{key:data.country,class:"d-flex align-center px-0 "+(e>0?"mt-4":"")},[n("v-avatar",{class:data.color+" white--text font-weight-medium me-3",attrs:{color:data.color,size:"40"}},[n("span",{staticClass:"text-base"},[t._v(t._s(data.abbr))])]),t._v(" "),n("div",{staticClass:"d-flex align-center flex-grow-1 flex-wrap"},[n("div",{staticClass:"me-2"},[n("div",{staticClass:"font-weight-semibold"},[n("span",{staticClass:"text--primary text-base me-1"},[t._v(t._s(data.amount))]),t._v(" "),n("v-icon",{attrs:{size:"20",color:"+"===data.change.charAt(0)?"success":"error"}},[t._v("\n                "+t._s("+"===data.change.charAt(0)?t.icons.mdiChevronUp:t.icons.mdiChevronDown)+"\n              ")]),t._v(" "),n("span",{class:"text-xs "+("+"===data.change.charAt(0)?"success--text":"error--text")},[t._v(t._s(data.change.slice(1)))])],1),t._v(" "),n("v-list-item-subtitle",{staticClass:"text-xs"},[t._v("\n              "+t._s(data.country)+"\n            ")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("div",[n("h4",{staticClass:"font-weight-semibold"},[t._v("\n              "+t._s(data.sales)+"\n            ")]),t._v(" "),n("span",{staticClass:"text-xs"},[t._v("Sales")])])],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VAvatar:m.a,VBtn:d.a,VCard:_.a,VCardText:h.d,VCardTitle:h.e,VIcon:C.a,VList:x.a,VListItem:w.a,VListItemSubtitle:f.j,VSpacer:k.a})}}]);