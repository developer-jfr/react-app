(this["webpackJsonpreact-one"]=this["webpackJsonpreact-one"]||[]).push([[0],{107:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required"},c=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},109:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.5788b05c.svg",c=n(3);t.a=function(){return Object(c.jsx)("div",{style:{backgroundColor:"white"},children:Object(c.jsx)("img",{src:r})})}},125:function(e,t,n){e.exports={paginator:"Paginator_paginator__1esxW",pageNumber:"Paginator_pageNumber__oLzQ8",selectedPage:"Paginator_selectedPage__YY5rP"}},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return x})),n.d(t,"e",(function(){return g})),n.d(t,"f",(function(){return S}));var r=n(17),c=n.n(r),a=n(34),i=n(73),s=n(8),o=n(66),u=n(29),l=function(e){return u.c.get("profile/"+e).then((function(e){return e.data}))},d=function(e){return u.c.get("profile/status/"+e).then((function(e){return e.data}))},j=function(e){return u.c.put("profile/status",{status:e}).then((function(e){return e.data}))},b=function(e){var t=new FormData;return t.append("image",e),u.c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},f=function(e){return u.c.put("profile",e).then((function(e){return e.data}))},O={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},h={addPostActionCreator:function(e){return{type:"SN/PROFILE/ADD-POST",newPostText:e}},setUserProfile:function(e){return{type:"SN/PROFILE/SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"SN/PROFILE/SET_STATUS",status:e}},deletePost:function(e){return{type:"SN/PROFILE/DELETE_POST",postId:e}},savePhotoSuccess:function(e){return{type:"SN/PROFILE/SAVE_PHOTO_SUCCESS",photos:e}}},p=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(h.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:r=t.sent,n(h.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j(e);case 3:0===t.sent.resultCode&&n(h.setStatus(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:0===(r=t.sent).resultCode&&n(h.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n,r){var a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,f(e);case 3:if(0!==(i=t.sent).resultCode){t.next=12;break}if(null==a){t.next=9;break}n(p(a)),t.next=10;break;case 9:throw new Error("userId can't be null");case 10:t.next=14;break;case 12:return n(Object(o.a)("edit-profile",{_error:i.messages[0]})),t.abrupt("return",Promise.reject(i.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n])});case"SN/PROFILE/SET_STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case"SN/PROFILE/SET_USER_PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case"SN/PROFILE/DELETE_POST":return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"SN/PROFILE/SAVE_PHOTO_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(73),c=n(8),a={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},i={sendMessage:function(e){return{type:"SN/DIALOGS/SEND_MESSAGE",newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/DIALOGS/SEND_MESSAGE":var n=t.newMessageBody;return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},187:function(e,t,n){"use strict";t.a=n.p+"static/media/user.96e310a6.png"},201:function(e,t,n){e.exports={userPhoto:"users_userPhoto__3va1Z"}},243:function(e,t,n){},244:function(e,t,n){},29:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r,c,a=n(198),i=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"d12ef03a-3a06-4a09-b6ba-81c76a32de15"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(c||(c={}))},369:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),c=n.n(r),a=n(40),i=n.n(a),s=(n(243),n(155)),o=n(156),u=n(191),l=n(189),d=(n(244),n(245),n(39)),j=n(26),b=n(188),f=n(55),O=n(107),h=n(21),p=n(17),m=n.n(p),x=n(34),g=n(8),S=n(29),v=n(66),E=function(){return S.c.get("auth/me").then((function(e){return e.data}))},w=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return S.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},_=function(){return S.c.delete("auth/login")},P=function(){return S.c.get("security/get-captcha-url").then((function(e){return e.data}))},y={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},I=function(e,t,n,r){return{type:"SN/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},C=function(e){return{type:"SN/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},N=function(){return function(){var e=Object(x.a)(m.a.mark((function e(t){var n,r,c,a,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:(n=e.sent).resultCode===S.b.Success&&(r=n.data,c=r.id,a=r.login,i=r.email,t(I(c,i,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){return function(){var e=Object(x.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:n=e.sent,r=n.url,t(C(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/auth/SET_USER_DATA":case"SN/auth/GET_CAPTCHA_URL_SUCCESS":return Object(g.a)(Object(g.a)({},e),t.payload);default:return e}},R=n(87),k=n.n(R),A=n(3),L=Object(b.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(A.jsxs)("form",{onSubmit:t,children:[Object(f.c)("Email","email",[O.b],f.a),Object(f.c)("Password","password",[O.b],f.a,{type:"password"}),Object(f.c)(void 0,"rememberMe",[],f.a,{type:"checkbox"},"remember me"),r&&Object(A.jsx)("img",{src:r}),r&&Object(f.c)("Symbols from image","captcha",[O.b],f.a,{}),n&&Object(A.jsx)("div",{className:k.a.formSummaryError,children:n}),Object(A.jsx)("div",{children:Object(A.jsx)("button",{children:"Login"})})]})})),F=function(){var e=Object(h.d)((function(e){return e.auth.captchaUrl})),t=Object(h.d)((function(e){return e.auth.isAuth})),n=Object(h.c)();return t?Object(A.jsx)(j.a,{to:"/profile"}):Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{children:"Login"}),Object(A.jsx)(L,{onSubmit:function(e){var t,r,c,a;n((t=e.email,r=e.password,c=e.rememberMe,a=e.captcha,function(){var e=Object(x.a)(m.a.mark((function e(n){var i,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t,r,c,a);case 2:(i=e.sent).resultCode===S.b.Success?n(N()):(i.resultCode===S.a.CaptchaIsRequired&&n(T()),s=i.messages.length>0?i.messages[0]:"Some error",n(Object(v.a)("login",{_error:s})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},captchaUrl:e})]})},D=n(25),z={initialized:!1},G=function(){return{type:"SN/APP/INITIALIZED_SUCCESS"}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/APP/INITIALIZED_SUCCESS":return Object(g.a)(Object(g.a)({},e),{},{initialized:!0});default:return e}},H=n(109),B=n(153),V=n(186),W={},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W;return e},q=n(73),J=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(g.a)(Object(g.a)({},e),r):e}))},X={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return S.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},follow:function(e){return S.c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return S.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},Z={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],filter:{term:"",friend:null}},K=function(e){return{type:"SN/USERS/SET_USERS",users:e}},Q=function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},$=function(e){return{type:"SN/USERS/SET_FILTER",payload:e}},ee=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",count:e}},te=function(e){return{type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}},ne=function(e,t,n){return function(){var r=Object(x.a)(m.a.mark((function r(c,a){var i;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(te(!0)),c(Q(e)),c($(n)),r.next=5,X.getUsers(e,t,n.term,n.friend);case 5:i=r.sent,c(te(!1)),c(K(i.items)),c(ee(i.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:J(e.users,t.userId,"id",{followed:!0})});case"SN/USERS/UNFOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:J(e.users,t.userId,"id",{followed:!1})});case"SN/USERS/SET_USERS":return Object(g.a)(Object(g.a)({},e),{},{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(g.a)(Object(g.a)({},e),{},{totalUsersCount:t.count});case"SN/USERS/TOGGLE_IS_FETCHING":return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/SET_FILTER":return Object(g.a)(Object(g.a)({},e),{},{filter:t.payload});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(g.a)(Object(g.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(q.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},ce=n(199),ae=n(190),ie=Object(D.c)({profilePage:B.b,dialogsPage:V.b,sidebar:Y,usersPage:re,auth:U,form:ae.a,app:M}),se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.d,oe=Object(D.e)(ie,se(Object(D.a)(ce.a)));window.__store__=oe;var ue=oe;function le(e){return function(t){return Object(A.jsx)(c.a.Suspense,{fallback:Object(A.jsx)("div",{children:"loading..."}),children:Object(A.jsx)(e,Object(g.a)({},t))})}}var de=n(200),je=Object(de.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),be=function(e){return e.usersPage.pageSize},fe=function(e){return e.usersPage.totalUsersCount},Oe=function(e){return e.usersPage.currentPage},he=function(e){return e.usersPage.isFetching},pe=function(e){return e.usersPage.followingInProgress},me=function(e){return e.usersPage.filter},xe=n(110),ge=n(152),Se=n(125),ve=n.n(Se),Ee=n(5),we=n.n(Ee),_e=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,a=void 0===c?1:c,i=e.onPageChanged,s=void 0===i?function(e){return e}:i,o=e.portionSize,u=void 0===o?10:o,l=Math.ceil(t/n),d=[],j=1;j<=l;j++)d.push(j);var b=Math.ceil(l/u),f=Object(r.useState)(1),O=Object(ge.a)(f,2),h=O[0],p=O[1],m=(h-1)*u+1,x=h*u;return Object(A.jsxs)("div",{className:we()(ve.a.paginator),children:[h>1&&Object(A.jsx)("button",{onClick:function(){p(h-1)},children:"PREV"}),d.filter((function(e){return e>=m&&e<=x})).map((function(e){return Object(A.jsx)("span",{className:we()(Object(xe.a)({},ve.a.selectedPage,a===e),ve.a.pageNumber),onClick:function(t){s(e)},children:e},e)})),b>h&&Object(A.jsx)("button",{onClick:function(){p(h+1)},children:"NEXT"})]})},Pe=n(201),ye=n.n(Pe),Ie=n(187),Ce=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,c=e.follow;return Object(A.jsxs)("div",{children:[Object(A.jsxs)("span",{children:[Object(A.jsx)("div",{children:Object(A.jsx)(d.c,{to:"/profile/"+t.id,children:Object(A.jsx)("img",{src:null!=t.photos.small?t.photos.small:Ie.a,className:ye.a.userPhoto})})}),Object(A.jsx)("div",{children:t.followed?Object(A.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(A.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Follow"})})]}),Object(A.jsxs)("span",{children:[Object(A.jsxs)("span",{children:[Object(A.jsx)("div",{children:t.name}),Object(A.jsx)("div",{children:t.status})]}),Object(A.jsxs)("span",{children:[Object(A.jsx)("div",{children:"user.location.country"}),Object(A.jsx)("div",{children:"user.location.city"})]})]})]})},Ne=n(96),Te=function(e){return{}},Ue=c.a.memo((function(e){var t=Object(h.d)(me);return Object(A.jsx)("div",{children:Object(A.jsx)(Ne.c,{enableReinitialize:!0,initialValues:{term:t.term,friend:String(t.friend)},validate:Te,onSubmit:function(t,n){var r=n.setSubmitting,c={term:t.term,friend:"null"===t.friend?null:"true"===t.friend};e.onFilterChanged(c),r(!1)},children:function(e){var t=e.isSubmitting;return Object(A.jsxs)(Ne.b,{children:[Object(A.jsx)(Ne.a,{type:"text",name:"term"}),Object(A.jsxs)(Ne.a,{name:"friend",as:"select",children:[Object(A.jsx)("option",{value:"null",children:"All"}),Object(A.jsx)("option",{value:"true",children:"Only followed"}),Object(A.jsx)("option",{value:"false",children:"Only unfollowed"})]}),Object(A.jsx)("button",{type:"submit",disabled:t,children:"Find"})]})}})})})),Re=n(148),ke=function(e){var t=Object(h.d)(je),n=Object(h.d)(fe),c=Object(h.d)(Oe),a=Object(h.d)(be),i=Object(h.d)(me),s=Object(h.d)(pe),o=Object(h.c)(),u=Object(j.g)();Object(r.useEffect)((function(){var e=Re.parse(u.location.search.substr(1)),t=c,n=i;switch(e.page&&(t=Number(e.page)),e.term&&(n=Object(g.a)(Object(g.a)({},n),{},{term:e.term})),e.friend){case"null":n=Object(g.a)(Object(g.a)({},n),{},{friend:null});break;case"true":n=Object(g.a)(Object(g.a)({},n),{},{friend:!0});break;case"false":n=Object(g.a)(Object(g.a)({},n),{},{friend:!1})}o(ne(t,a,n))}),[]),Object(r.useEffect)((function(){var e={};i.term&&(e.term=i.term),null!==i.friend&&(e.friend=String(i.friend)),1!==c&&(e.page=String(c)),u.push({pathname:"/developers",search:Re.stringify(e)})}),[i,c]);var l=function e(t){o(e(t))},d=function e(t){o(e(t))};return Object(A.jsxs)("div",{children:[Object(A.jsx)(Ue,{onFilterChanged:function(e){o(ne(1,a,e))}}),Object(A.jsx)(_e,{currentPage:c,onPageChanged:function(e){o(ne(e,a,i))},totalItemsCount:n,pageSize:a}),Object(A.jsx)("div",{children:t.map((function(e){return Object(A.jsx)(Ce,{user:e,followingInProgress:s,unfollow:d,follow:l},e.id)}))})]})},Ae=function(e){var t=Object(h.d)(he);return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("h2",{children:e.pageTitle}),t?Object(A.jsx)(H.a,{}):null,Object(A.jsx)(ke,{})]})},Le=n(150),Fe=n(372),De=n(373),ze=n(377),Ge=n(378),Me=n(379),He=n(375),Be=n(376),Ve=n(374),We=n(83),Ye=function(e){return e.auth.isAuth},qe=function(e){return e.auth.login},Je=function(e){var t=Object(h.d)(Ye),n=Object(h.d)(qe),r=Object(h.c)(),c=Fe.a.Header;return Object(A.jsx)(c,{className:"header",children:Object(A.jsxs)(He.a,{children:[Object(A.jsx)(Be.a,{span:18,children:Object(A.jsx)(Le.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:Object(A.jsx)(Le.a.Item,{children:Object(A.jsx)(d.b,{to:"/developers",children:"Developers"})},"1")})}),t?Object(A.jsxs)(A.Fragment,{children:[" ",Object(A.jsx)(Be.a,{span:1,children:Object(A.jsx)(Ve.a,{alt:n||"",style:{backgroundColor:"#87d068"},icon:Object(A.jsx)(ze.a,{})})}),Object(A.jsx)(Be.a,{span:5,children:Object(A.jsx)(We.a,{onClick:function(){r(function(){var e=Object(x.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:0===e.sent.data.resultCode&&t(I(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Log out"})})]}):Object(A.jsx)(Be.a,{span:6,children:Object(A.jsx)(We.a,{children:Object(A.jsx)(d.b,{to:"/login",children:"Login"})})})]})})},Xe=Le.a.SubMenu,Ze=Fe.a.Content,Ke=Fe.a.Footer,Qe=Fe.a.Sider,$e=c.a.lazy((function(){return n.e(4).then(n.bind(null,386))})),et=c.a.lazy((function(){return n.e(3).then(n.bind(null,385))})),tt=c.a.lazy((function(){return n.e(5).then(n.bind(null,384))})),nt=le($e),rt=le(et),ct=le(tt),at=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).catchAllUnhandledErrors=function(e){alert("Some error occured")},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(A.jsxs)(Fe.a,{children:[Object(A.jsx)(Je,{}),Object(A.jsxs)(Ze,{style:{padding:"0 50px"},children:[Object(A.jsxs)(De.a,{style:{margin:"16px 0"},children:[Object(A.jsx)(De.a.Item,{children:"Home"}),Object(A.jsx)(De.a.Item,{children:"List"}),Object(A.jsx)(De.a.Item,{children:"App"})]}),Object(A.jsxs)(Fe.a,{className:"site-layout-background",style:{padding:"24px 0"},children:[Object(A.jsx)(Qe,{className:"site-layout-background",width:200,children:Object(A.jsxs)(Le.a,{mode:"inline",style:{height:"100%"},children:[Object(A.jsxs)(Xe,{icon:Object(A.jsx)(ze.a,{}),title:"My Profile",children:[Object(A.jsxs)(Le.a.Item,{children:[" ",Object(A.jsx)(d.b,{to:"/profile",children:"Profile"})]},"1"),Object(A.jsxs)(Le.a.Item,{children:[" ",Object(A.jsx)(d.b,{to:"/dialogs",children:"Messages"})]},"2"),Object(A.jsx)(Le.a.Item,{children:"option3"},"3"),Object(A.jsx)(Le.a.Item,{children:"option4"},"4")]},"sub1"),Object(A.jsxs)(Xe,{icon:Object(A.jsx)(Ge.a,{}),title:"Developers",children:[Object(A.jsx)(Le.a.Item,{children:Object(A.jsx)(d.b,{to:"/developers",children:"Developers"})},"5"),Object(A.jsx)(Le.a.Item,{children:"option6"},"6"),Object(A.jsx)(Le.a.Item,{children:"option7"},"7"),Object(A.jsx)(Le.a.Item,{children:"option8"},"8")]},"sub2"),Object(A.jsxs)(Xe,{icon:Object(A.jsx)(Me.a,{}),title:"Chat",children:[Object(A.jsx)(Le.a.Item,{children:Object(A.jsx)(d.b,{to:"/chat",children:"Chat"})},"9"),Object(A.jsx)(Le.a.Item,{children:"option10"},"10"),Object(A.jsx)(Le.a.Item,{children:"option11"},"11"),Object(A.jsx)(Le.a.Item,{children:"option12"},"12")]},"sub3")]})}),Object(A.jsx)(Ze,{style:{padding:"0 24px",minHeight:280},children:Object(A.jsxs)(j.d,{children:[Object(A.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(A.jsx)(j.a,{to:"/profile"})}}),Object(A.jsx)(j.b,{path:"/dialogs",render:function(){return Object(A.jsx)(nt,{})}}),Object(A.jsx)(j.b,{path:"/profile/:userId?",render:function(){return Object(A.jsx)(rt,{})}}),Object(A.jsx)(j.b,{path:"/developers",render:function(){return Object(A.jsx)(Ae,{pageTitle:"\u0421\u0430\u043c\u0443\u0440\u0430\u0438"})}}),Object(A.jsx)(j.b,{path:"/login",render:function(){return Object(A.jsx)(F,{})}}),Object(A.jsx)(j.b,{path:"/chat",render:function(){return Object(A.jsx)(ct,{})}}),Object(A.jsx)(j.b,{path:"*",render:function(){return Object(A.jsx)("div",{children:"404 NOT FOUND"})}})]})})]})]}),Object(A.jsx)(Ke,{style:{textAlign:"center"},children:"Junior FrontEnd Developer Erkinbaev Bakai"})]}):Object(A.jsx)(H.a,{})}}]),n}(r.Component),it=Object(D.d)(j.h,Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(N());Promise.all([t]).then((function(){e(G())}))}}}))(at),st=function(){return Object(A.jsx)(d.a,{children:Object(A.jsx)(h.a,{store:ue,children:Object(A.jsx)(it,{})})})};i.a.render(Object(A.jsx)(st,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},55:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return f}));var r=n(8),c=n(142),a=(n(0),n(87)),i=n.n(a),s=n(141),o=n(370),u=n(3),l=o.a.TextArea,d=function(e){var t=e.meta,n=t.touched,r=t.error,c=e.children,a=n&&r;return Object(u.jsxs)("div",{className:i.a.formControl+" "+(a?i.a.error:""),children:[Object(u.jsx)("div",{children:c}),a&&Object(u.jsx)("span",{children:r})]})},j=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,["input","meta"]));return Object(u.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(u.jsx)(l,Object(r.a)(Object(r.a)({},t),n))}))},b=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,["input","meta"]));return Object(u.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(u.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))};function f(e,t,n,c){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(u.jsxs)("div",{children:[Object(u.jsx)(s.a,Object(r.a)({placeholder:e,name:t,validate:n,component:c},a))," ",i]})}},87:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3OB_w",error:"FormsControls_error__bPb7C",formSummaryError:"FormsControls_formSummaryError__2to5k"}}},[[369,1,2]]]);
//# sourceMappingURL=main.44c63094.chunk.js.map