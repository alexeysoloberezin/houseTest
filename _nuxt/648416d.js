(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{791:function(t,e,r){var content=r(811);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("9e06d08a",content,!0,{sourceMap:!1})},810:function(t,e,r){"use strict";r(791)},811:function(t,e,r){var n=r(12)(!1);n.push([t.i,".two-factor-auth[data-v-74a0f93e]{max-width:25rem}.security-character[data-v-74a0f93e]{position:absolute;bottom:-.5rem}",""]),t.exports=n},849:function(t,e,r){"use strict";r.r(e);var n=r(161),o=r(249),c={setup:function(){var t=Object(o.c)(!1),e=Object(o.c)(!1),r=Object(o.c)(!1);return{isCurrentPasswordVisible:t,isNewPasswordVisible:e,currentPassword:Object(o.c)("12345678"),isCPasswordVisible:r,newPassword:Object(o.c)("87654321"),cPassword:Object(o.c)("87654321"),icons:{mdiKeyOutline:n.Bb,mdiLockOpenOutline:n.Fb,mdiEyeOffOutline:n.mb,mdiEyeOutline:n.nb}}}},l=(r(810),r(66)),d=r(105),w=r.n(d),v=r(348),m=r(224),f=r(336),C=r(247),x=r(357),P=r(345),y=r(356),V=r(175),O=r(143),_=r(358),h=r(60),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mt-5",attrs:{flat:""}},[r("v-form",[r("div",{staticClass:"px-3"},[r("v-card-text",{staticClass:"pt-5"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("v-text-field",{attrs:{type:t.isCurrentPasswordVisible?"text":"password","append-icon":t.isCurrentPasswordVisible?t.icons.mdiEyeOffOutline:t.icons.mdiEyeOutline,label:"Current Password",outlined:"",dense:""},on:{"click:append":function(e){t.isCurrentPasswordVisible=!t.isCurrentPasswordVisible}},model:{value:t.currentPassword,callback:function(e){t.currentPassword=e},expression:"currentPassword"}}),t._v(" "),r("v-text-field",{attrs:{type:t.isNewPasswordVisible?"text":"password","append-icon":t.isNewPasswordVisible?t.icons.mdiEyeOffOutline:t.icons.mdiEyeOutline,label:"New Password",outlined:"",dense:"",hint:"Make sure it's at least 8 characters.","persistent-hint":""},on:{"click:append":function(e){t.isNewPasswordVisible=!t.isNewPasswordVisible}},model:{value:t.newPassword,callback:function(e){t.newPassword=e},expression:"newPassword"}}),t._v(" "),r("v-text-field",{staticClass:"mt-3",attrs:{type:t.isCPasswordVisible?"text":"password","append-icon":t.isCPasswordVisible?t.icons.mdiEyeOffOutline:t.icons.mdiEyeOutline,label:"Confirm New Password",outlined:"",dense:""},on:{"click:append":function(e){t.isCPasswordVisible=!t.isCPasswordVisible}},model:{value:t.cPassword,callback:function(e){t.cPassword=e},expression:"cPassword"}})],1),t._v(" "),r("v-col",{staticClass:"d-none d-sm-flex justify-center position-relative",attrs:{cols:"12",sm:"4",md:"6"}},[r("v-img",{staticClass:"security-character",attrs:{contain:"","max-width":"170",src:"@/assets/images/3d-characters/pose-m-1.png"}})],1)],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("div",{staticClass:"pa-3"},[r("v-card-title",{staticClass:"flex-nowrap"},[r("v-icon",{staticClass:"text--primary me-3"},[t._v("\n          "+t._s(t.icons.mdiKeyOutline)+"\n        ")]),t._v(" "),r("span",{staticClass:"text-break"},[t._v("Two-factor authentication")])],1),t._v(" "),r("v-card-text",{staticClass:"two-factor-auth text-center mx-auto"},[r("v-avatar",{staticClass:"primary mb-4",attrs:{color:"primary",rounded:""}},[r("v-icon",{attrs:{size:"25",color:"white"}},[t._v("\n            "+t._s(t.icons.mdiLockOpenOutline)+"\n          ")])],1),t._v(" "),r("p",{staticClass:"text-base text--primary font-weight-semibold"},[t._v("\n          Two factor authentication is not enabled yet.\n        ")]),t._v(" "),r("p",{staticClass:"text-sm text--primary"},[t._v("\n          Two-factor authentication adds an additional layer of\n          security to your account by requiring more than just a\n          password to log in. Learn more.\n        ")])],1),t._v(" "),r("v-card-text",[r("v-btn",{staticClass:"me-3 mt-3",attrs:{color:"primary"}},[t._v("\n          Save changes\n        ")]),t._v(" "),r("v-btn",{staticClass:"mt-3",attrs:{color:"secondary",outlined:""}},[t._v("\n          Cancel\n        ")])],1)],1)],1)],1)}),[],!1,null,"74a0f93e",null);e.default=component.exports;w()(component,{VAvatar:v.a,VBtn:m.a,VCard:f.a,VCardText:C.d,VCardTitle:C.e,VCol:x.a,VDivider:P.a,VForm:y.a,VIcon:V.a,VImg:O.a,VRow:_.a,VTextField:h.a})}}]);