"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[212],{9212:(U,C,o)=>{o.r(C),o.d(C,{LayoutHomeModule:()=>o9});var f=o(6895),s=o(5373),n=o(1881),M=o(6439);const m=[{label:"What is Empaty?",route:"",subs:[]},{label:"Function",route:"",subs:[]},{label:"Utilization Scene",route:"",subs:[]},{label:"FAQ",route:"",subs:[]}];var c=o(8274),r=o(4463),z=o(8053),I=o(2406),B=o(1240),t=o(801),O=o(4957),u=o(6485),J=o(419),D=o(2450),d=o(3868);const G=function(){return["/"]};function Q(a,l){if(1&a&&(c.TgZ(0,"a",17),c._UZ(1,"img",18),c.qZA()),2&a){const e=c.oxw();c.Q6J("routerLink",c.DdM(2,G)),c.xp6(1),c.s9C("src",e.logoUrl,c.LSH)}}function E(a,l){if(1&a&&(c.TgZ(0,"a",20)(1,"span"),c._uU(2),c.qZA()()),2&a){const e=l.$implicit;c.s9C("routerLink",e.route),c.xp6(2),c.Oqu(e.label)}}function R(a,l){if(1&a&&c.YNc(0,E,3,2,"a",19),2&a){const e=c.oxw();c.Q6J("ngForOf",e.navs)}}function W(a,l){if(1&a&&c._UZ(0,"fa-icon",7),2&a){const e=c.oxw();c.Q6J("icon",e.faTimes)}}function Y(a,l){if(1&a&&c._UZ(0,"fa-icon",7),2&a){const e=c.oxw();c.Q6J("icon",e.faBars)}}function j(a,l){if(1&a&&(c.TgZ(0,"a",28)(1,"span"),c._uU(2),c.qZA()()),2&a){const e=l.$implicit;c.s9C("routerLink",e.route),c.xp6(2),c.Oqu(e.label)}}function K(a,l){if(1&a&&c.YNc(0,j,3,2,"a",27),2&a){const e=c.oxw(2);c.Q6J("ngForOf",e.navs)}}function X(a,l){if(1&a&&(c.YNc(0,K,1,1,"ng-template",2),c.TgZ(1,"div",21)(2,"button-icon-fa",6),c._UZ(3,"fa-icon",7),c.qZA()(),c.TgZ(4,"div",22)(5,"div",23),c._UZ(6,"img",24),c.qZA(),c._UZ(7,"fixed-item-multi-languages",11),c.qZA(),c.TgZ(8,"div",22)(9,"div",25),c._UZ(10,"fa-icon",26)(11,"fa-icon",7),c.qZA(),c._UZ(12,"fixed-item-user",14),c.qZA()),2&a){const e=c.oxw();c.Q6J("ngIf",e.navs&&e.navs.length>0),c.xp6(2),c.Q6J("label",e.btnExperience.label),c.xp6(1),c.Q6J("icon",e.faCirclePlay),c.xp6(3),c.Q6J("src",e.currentLanguage.icon,c.LSH),c.xp6(1),c.Q6J("attributes",e.fixedItems.languages),c.xp6(3),c.Q6J("icon",e.faUser),c.xp6(1),c.Q6J("icon",e.faCaretDown),c.xp6(1),c.Q6J("attributes",e.fixedItems.user)("user",e.user)}}const $=function(a){return{"md:bg-transparent":a}};let c1=(()=>{class a{constructor(e){this.router=e,this.faBars=t.xiG,this.faTimes=t.NBC,this.faCirclePlay=t.iiS,this.faUser=t.ILF,this.faCaretDown=t.eW2,this.navs=[],this.logoUrl="",this.btnExperience={label:"Experience"},this.btnRegister={label:"Register",classes:"px-4 py-3 rounded border border-white bg-transparent text-white hover:bg-main hover:text-white hover:border-main"},this.transparent=!0,this.menuExpand=!1,this.fixedItems={languages:{bottomNegative:"full",right:"0",rounded:!0},user:{bottomNegative:"full",right:"0",rounded:!0}},this.currentLanguage=O.t[0]}ngOnInit(){}onWindowScroll(){this.transparent=0==window.scrollY}toggleMenu(){this.menuExpand=!this.menuExpand}goRegister(){this.router.navigate(["/auth/register"])}}return a.\u0275fac=function(e){return new(e||a)(c.Y36(n.F0))},a.\u0275cmp=c.Xpm({type:a,selectors:[["partial-header-home"]],hostBindings:function(e,i){1&e&&c.NdJ("scroll",function(){return i.onWindowScroll()},!1,c.Jf7)},inputs:{user:"user",navs:"navs",logoUrl:"logoUrl"},decls:22,vars:15,consts:[[1,"fixed","top-0","left-0","right-0","z-topHeaderHome","flex","justify-between","items-start","py-4","lg:py-0","lg:items-center","lg:px-page_px_lg","md:px-page_px_md","px-8","bg-black","text-white","border-b","border-white03","header-home",3,"ngClass"],[1,"logo"],[3,"ngIf"],[1,"navs"],[1,"hidden","lg:flex","justify-between","items-center","menu-large"],[1,"px-2","btn-experience-wrapper"],[3,"label"],[3,"icon"],[1,"relative","lg:mr-4"],[1,"mr-0","px-4","my-5","lg:border","lg:border-r","lg:border-y-0","lg:border-l-0","lg:border-greyDark"],[1,"w-icon_small","h-icon_small","border-0","rounded-circle",3,"src"],[1,"hidden","fixed-item",3,"attributes"],[1,"relative","hover:text-main"],[1,"py-5","px-2","h-icon_small","flex","items-center","icon-wrapper"],[1,"hidden","fixed-item","fixed-user",3,"attributes","user"],[1,"flex","flex-col","lg:hidden","items-end","justify-end","menu-mobile"],[1,"text-white","text-iconMenu",3,"click"],[3,"routerLink"],[3,"src"],["class","\n            mr-4\n            py-5\n            -mb-3\n            border-l-0 border-t-0 border-r-0 border-b-2 border-transparent\n            hover:border-main\n          ",3,"routerLink",4,"ngFor","ngForOf"],[1,"mr-4","py-5","-mb-3","border-l-0","border-t-0","border-r-0","border-b-2","border-transparent","hover:border-main",3,"routerLink"],[1,"btn-experience-wrapper"],[1,"relative"],[1,"py-3"],[1,"h-icon_small",3,"src"],[1,"py-3","px-2","h-icon_small","flex","items-center","icon-wrapper"],[1,"mr-3",3,"icon"],["class","\n              py-3\n              border-l-0 border-t-0 border-r-0 border-b-2 border-transparent\n              hover:border-main\n            ",3,"routerLink",4,"ngFor","ngForOf"],[1,"py-3","border-l-0","border-t-0","border-r-0","border-b-2","border-transparent","hover:border-main",3,"routerLink"]],template:function(e,i){1&e&&(c.TgZ(0,"div",0)(1,"div",1),c.YNc(2,Q,2,3,"ng-template",2),c.qZA(),c.TgZ(3,"div",3)(4,"div",4),c.YNc(5,R,1,1,"ng-template",2),c.TgZ(6,"div",5)(7,"button-icon-fa",6),c._UZ(8,"fa-icon",7),c.qZA()(),c.TgZ(9,"div",8)(10,"div",9),c._UZ(11,"img",10),c.qZA(),c._UZ(12,"fixed-item-multi-languages",11),c.qZA(),c.TgZ(13,"div",12)(14,"div",13),c._UZ(15,"fa-icon",7),c.qZA(),c._UZ(16,"fixed-item-user",14),c.qZA()(),c.TgZ(17,"div",15)(18,"div",16),c.NdJ("click",function(){return i.toggleMenu()}),c.YNc(19,W,1,1,"ng-template",2),c.YNc(20,Y,1,1,"ng-template",2),c.qZA(),c.YNc(21,X,13,9,"ng-template",2),c.qZA()()()),2&e&&(c.Q6J("ngClass",c.VKq(13,$,i.transparent)),c.xp6(2),c.Q6J("ngIf",i.logoUrl),c.xp6(3),c.Q6J("ngIf",i.navs&&i.navs.length>0),c.xp6(2),c.Q6J("label",i.btnExperience.label),c.xp6(1),c.Q6J("icon",i.faCirclePlay),c.xp6(3),c.Q6J("src",i.currentLanguage.icon,c.LSH),c.xp6(1),c.Q6J("attributes",i.fixedItems.languages),c.xp6(3),c.Q6J("icon",i.faUser),c.xp6(1),c.Q6J("attributes",i.fixedItems.user)("user",i.user),c.xp6(3),c.Q6J("ngIf",1==i.menuExpand),c.xp6(1),c.Q6J("ngIf",0==i.menuExpand),c.xp6(1),c.Q6J("ngIf",1==i.menuExpand))},dependencies:[f.mk,f.sg,f.O5,u.u,J.x,D.$,n.yS,d.BN],styles:[".header-home[_ngcontent-%COMP%]{transition:all .25s ease-in-out}.header-home[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]:hover   .fixed-item[_ngcontent-%COMP%]{display:block}.header-home[_ngcontent-%COMP%]   .menu-large[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]     .fixed-item-user{transform:translate(50%)}"]}),a})();const a1=[{label:"What is Empaty?",route:""},{label:"Function",route:""},{label:"Utilization Scene",route:""},{label:"FAQ",route:""},{label:"\u7279\u5b9a\u5546\u53d6\u5f15\u6cd5\u306b\u57fa\u3065\u304f\u8868\u8a18",route:""}];var V={prefix:"fab",iconName:"facebook-square",icon:[448,512,[],"f082","M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.3V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0 -48-48z"]},g={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},q={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"]},P=o(1906);const k0=function(a){return[a]};function q0(a,l){if(1&a&&(c.TgZ(0,"li",12)(1,"a",8),c._uU(2),c.qZA()()),2&a){const e=l.$implicit;c.xp6(1),c.Q6J("routerLink",c.VKq(2,k0,e.route)),c.xp6(1),c.Oqu(e.label)}}function w0(a,l){if(1&a&&(c.TgZ(0,"ul"),c.YNc(1,q0,3,4,"li",11),c.qZA()),2&a){const e=c.oxw();c.xp6(1),c.Q6J("ngForOf",e.nav)}}const _=function(){return["/"]};let P0=(()=>{class a{constructor(){this.icons={instagram:g,twitter:q,facebook:V},this.buttons={classes:"px-8 py-3 bg-transparent text-white border border-white rounded hover:bg-main "},this.nav=a1,this.appInfo=M.m}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=c.Xpm({type:a,selectors:[["partial-footer-home"]],decls:20,vars:16,consts:[[1,"px-8","md:px-page_px_md","lg:px-page_px_lg","py-20","bg-blacklight","text-white"],[1,"grid","grid-cols-2","lg:grid-cols-4"],[1,"block","mb-4",3,"routerLink"],[3,"src"],[1,"flex"],[1,"mr-4",3,"href"],[1,"text-iconFooterSocial",3,"icon"],[3,"ngIf"],[1,"hover:text-main",3,"routerLink"],[1,"flex","flex-col","md:flex-row"],[1,"md:mx-2","mb-2",3,"label","classes"],["class","mb-4",4,"ngFor","ngForOf"],[1,"mb-4"]],template:function(e,i){1&e&&(c.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"a",2),c._UZ(4,"img",3),c.qZA(),c.TgZ(5,"div",4)(6,"a",5),c._UZ(7,"fa-icon",6),c.qZA(),c.TgZ(8,"a",5),c._UZ(9,"fa-icon",6),c.qZA(),c.TgZ(10,"a",5),c._UZ(11,"fa-icon",6),c.qZA()()(),c.YNc(12,w0,2,1,"ng-template",7),c.TgZ(13,"div")(14,"a",8),c._uU(15,"Contact"),c.qZA()(),c.TgZ(16,"div")(17,"div",9),c._UZ(18,"button-base",10)(19,"button-base",10),c.qZA()()()()),2&e&&(c.xp6(3),c.Q6J("routerLink",c.DdM(14,_)),c.xp6(1),c.Q6J("src",i.appInfo.logoUrl,c.LSH),c.xp6(2),c.s9C("href",i.appInfo.socials.instagram,c.LSH),c.xp6(1),c.Q6J("icon",i.icons.instagram),c.xp6(1),c.s9C("href",i.appInfo.socials.twitter,c.LSH),c.xp6(1),c.Q6J("icon",i.icons.twitter),c.xp6(1),c.s9C("href",i.appInfo.socials.facebook,c.LSH),c.xp6(1),c.Q6J("icon",i.icons.facebook),c.xp6(1),c.Q6J("ngIf",i.nav&&i.nav.length>0),c.xp6(2),c.Q6J("routerLink",c.DdM(15,_)),c.xp6(4),c.Q6J("label","Register")("classes",i.buttons.classes),c.xp6(1),c.Q6J("label","My Page")("classes",i.buttons.classes))},dependencies:[f.sg,f.O5,P.f,n.yS,d.BN]}),a})(),_0=(()=>{class a{constructor(e,i,p){this.translate=e,this.lang=i,this.authService=p,this.navs=m,this.logoUrl=M.m.logoUrl}ngOnInit(){1==this.authService.isLoggedIn()&&this.getUser(),this.setLang()}getUser(){this.authService.getUserInfo().subscribe({next:e=>{this.user=e.data.userInfo},error:e=>{console.error(e)}})}setLang(){this.lang.setLang(this.translate)}}return a.\u0275fac=function(e){return new(e||a)(c.Y36(r.sK),c.Y36(z.C),c.Y36(I.e))},a.\u0275cmp=c.Xpm({type:a,selectors:[["layout-home"]],decls:4,vars:3,consts:[[3,"logoUrl","user","navs"]],template:function(e,i){1&e&&c._UZ(0,"partial-header-home",0)(1,"router-outlet")(2,"partial-footer-home")(3,"partial-copyright"),2&e&&c.Q6J("logoUrl",i.logoUrl)("user",i.user)("navs",i.navs)},dependencies:[B.F,n.lC,c1,P0]}),a})();var b=o(2340);const v=b.N.imageUrls.svg,F0=[{icon:v+"eye.svg",title:"Function 1",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{icon:v+"edit.svg",title:"Function 2",description:"\u8981\u30eb\u30ea\u5fdc\u7136\u691c\u30df\u30e0\u5199\u4f01\u308a\u308c\u9762\u59cb\u304a\u3056\u9078\u5404\u3079\u5b8c\u5f79\u50ac\u5927\u30c4\u51434\u5199\u30b3\u7d42\u7f85\u6cbb\u30cc\u9ad8\u901a\u30ce\u30e2\u8449\u6708\u901a\u30e1\u30b3\u30cc\u5bb9\u5b58\u3065\u305c\u307d\u6e08\u73ed\u3079\u5909\u4fdd\u6383\u90b8\u91c8\u3060\u3002"},{icon:v+"eye.svg",title:"Function 3",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{icon:v+"edit.svg",title:"Function 4",description:"\u8981\u30eb\u30ea\u5fdc\u7136\u691c\u30df\u30e0\u5199\u4f01\u308a\u308c\u9762\u59cb\u304a\u3056\u9078\u5404\u3079\u5b8c\u5f79\u50ac\u5927\u30c4\u51434\u5199\u30b3\u7d42\u7f85\u6cbb\u30cc\u9ad8\u901a\u30ce\u30e2\u8449\u6708\u901a\u30e1\u30b3\u30cc\u5bb9\u5b58\u3065\u305c\u307d\u6e08\u73ed\u3079\u5909\u4fdd\u6383\u90b8\u91c8\u3060\u3002"},{icon:v+"eye.svg",title:"Function 5",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{icon:v+"edit.svg",title:"Function 6",description:"\u8981\u30eb\u30ea\u5fdc\u7136\u691c\u30df\u30e0\u5199\u4f01\u308a\u308c\u9762\u59cb\u304a\u3056\u9078\u5404\u3079\u5b8c\u5f79\u50ac\u5927\u30c4\u51434\u5199\u30b3\u7d42\u7f85\u6cbb\u30cc\u9ad8\u901a\u30ce\u30e2\u8449\u6708\u901a\u30e1\u30b3\u30cc\u5bb9\u5b58\u3065\u305c\u307d\u6e08\u73ed\u3079\u5909\u4fdd\u6383\u90b8\u91c8\u3060\u3002"}];var Z0=o(6758),T0=o(6781);const F=b.N.imageUrls.blog,h=T0.uv,U0=[{_id:"1",title:"English blog title",thumbnail:F+"1.png",content:"",author:{name:h.fullname,avatar:h.avatar},createdAt:"2022-07-07 00:00:00",updatedAt:"2022-07-07 10:00:00"},{_id:"2",title:"\u65e5\u672c\u306e\u30d6\u30ed\u30b0\u30bf\u30a4\u30c8\u30eb",thumbnail:F+"2.png",content:"<p>\u9069\u308a\u3065\u3079\u304d\u63d0\u8fbc\u3059\u7a4d\u6b8b\u3054\u4e0d\u6bce57\u73fe\u30e6\u5b9f\u7f6e\u4e00\u305b\u3071\u3073\u304d\u798e\u9662\u6587\u547d\u3087\u3050\u3044\u30c8\u793e\u72af\u30c6\u30b3\u6574\u9686\u3070\u304c\u3092\u3069\u6c17\u8074\u904a\u57fa\u6a21\u30e9\u305e\u3081\u30af\u3002\u50b7\u30bb\u30b7\u30eb\u591a\u7a0e\u3048\u30d5\u3086\u30b9\u535a\u78ba\u30a6\u30b7\u30f1\u30e6\u56fd\u8074\u30b7\u30ab\u30b3\u30cc\u63c38\u9000\u30ce\u30b7\u63b2\u904a\u304a\u899a\u6f5f\u30d8\u30cb\u5343\u795e\u30df\u30ca\u30e8\u30aa\u5348\u51fa\u8ee2\u30a2\u30bb\u4e0d\u82b8\u30e9\u672c5\u6bd4\u30db\u30ef\u90ce\u5947\u62dd\u62ec\u6a2b\u30d5\u30c3\u3002\u5146\u304e\u307b\u307f\u30d5\u5be9\u8eca\u98ef\u3057\u3075\u4fa1\u798f\u3081\u3057\u901d\u533b\u30ea\u30e6\u30ab\u30bf\u65ad\u8d64\u30cf\u30ea\u30e0\u91cc79\u6d3b\u4ed6\u304b\u91cd\u6587\u4e0a\u30db\u9ad8\u8a08\u30af\u30e9\u305e\u3067\u90fd\u89e3\u30b9\u6c7a\u6a29\u30af\u3046\u305f\u304a\u5bdf\u5177\u3067\u308d\u30c8\u30022\u96f0\u66ae\u30f1\u30b5\u77e5\u9686\u5ddd\u3063\u307b\u3086\u7389\u666e\u753a\u3042\u653f\u4e45\u529f\u3044\u3072\u3073\u306f\u8457\u884c\u30ce\u30bd\u30a8\u540c\u696d\u30cf\u7a3f3\u80fd\u3076\u9670\u6d45\u6dfb\u77ac\u516d\u304f\u3002\u5ba2\u306d\u3084\u805e\u968a\u30b9\u30eb\u30e6\u81d3\u79f0\u52d5\u3072\u305d\u3066\u5dde\u51fa\u3085\u3076\u307e\u30c3\u5165\u8aac\u4e95\u305f\u306f\u3050\u6210\u57cb\u3052\u691c\u5e4c\u30ab\u30e9\u30d8\u8868\u7406\u304a\u66ae\u690d\u30ce\u30eb\u30cd\u56f32\u7968\u30b5\u30c8\u7b2c\u4e21\u5b50\u751f\u3074\u3085\u308c\u3084\u3002\u793a\u30ed\u5e02\u8aad\u3073\u305f\u3046\u5fc5\u901a\u308b\u3057\u3044\u308d\u9662\u53bb\u30b9\u30bd\u82b8\u76ee\u306b\u308d\u306a\u3076\u969b\u540d\u610f\u30b3\u7acb\u76ca\u30ea\u3061\u62b597\u9662\u30ca\u30ec\u7981\u98df\u30cc\u30a6\u8a18\u56fd\u3087\u308d\u30fc\u533b\u7d50\u30ed\u30ca\u30bf\u8352\u7c73\u516b\u559c\u6804\u6f5f\u3075\u3064\u307d\u3058\u3002\u77e5\u30d8\u30b5\u30ec\u5e78\u753b\u30e6\u65cf\u5fc3\u30cf\u5f53\u4f75\u30a4\u30b3\u30de\u519943\u64ae\u30d5\u30cf\u30b1\u30ef\u6e21\u99ac\u3084\u3046\u3079\u56fd\u5411\u3042\u3093\u30ea\u5929\u8cfc\u30d2\u7d04\u6e08\u3054\u305d\u82b8\u5730\u8a73\u8098\u3054\u3072\u304c\u30e9\u7387\u97f3\u54f2\u63a7\u9b45\u4f53\u3050\u308a\u308f\u307c\u30022\u767a\u30e9\u5730\u6cd5\u3065\u3078\u30f3\u661f\u5c0689\u6e05\u3079\u307f\u30fc\u4fa1\u4f8b\u305d\u3067\u3070\u89aa\u767a\u308b\u3093\u30fc\u3052\u79d22\u5927\u30af\u30e9\u30db\u30b1\u5b50\u6821\u30f1\u30ab\u4f01\u96fb\u30b1\u8efd\u50b5\u306f\u512a\u4f9d\u961c\u3088\u3076\u5bb3\u5c4a\u89d2\u5145\u6551\u3061\u308a\u305a\u308f\u3002\u6570\u30b9\u30a4\u805e\u8fb2\u3052\u7537\u4f50\u805e\u5973\u3054\u306b\u3075\u305e\u611f\u5bb6\u30ad\u30d8\u30e9\u30c4\u89a7\u9664\u304a\u3093\u304b\u51fa\u6b62\u751f\u3051\u592a9\u8005\u30ea\u30cd\u5175\u5f31\u3071\u898b\u5bb6\u793a\u307c\u306a\u3055\u3093\u5f53\u5949\u304a\u305c\u306e\u30a4\u3002\u81e8\u304f\u6301\u9769\u3065\u306f\u308f\u98a8\u8b1b\u3056\u3070\u305b\u306a\u958b\u671d\u30c4\u30ea\u30c8\u7d50\u7d50\u5fd7\u30cf\u30ab\u5e38\u6a5f\u6238\u3057\u4e0b\u4f55\u30a6\u99ac97\u9003\u304d\u3059\u307b\u305d\u78d0\u66ae\u6148\u62b9\u6c99\u3056\u3048\u300292\u53f2\u30ef\u4fe1\u77f3\u6cbb\u771f\u5f8c\u30cc\u30ec\u56fd\u5009\u30b7\u8b1b\u56fd\u30b1\u30e0\u30ca\u8155\u7136\u3088\u30fc\u3046\u3054\u57ce\u5ca1\u5065\u3070\u757097\u60b2\u30d2\u30b5\u30e9\u5e30\u4fee\u7d1a\u4ef6\u3048\u3082\u3046\u3070\u3002\u9593\u304a\u3056\u304e\u6c34\u660e\u74b0\u3042\u3059\u3076\u9b5a\u8cc3\u30e1\u30c8\u5e83\u66ae\u306f\u304f\u30ec\u7d66\u754c\u30bf\u30c6\u5bfe\u677e\u30c9\u3074\u3059\u30af\u6e08\u756a\u30af\u30cb\u5074\u6642\u3074\u3083\u3092\u4f4f\u5339\u306f\u307c\u30a4\u3055\u8a17\u985e\u305d\u3072\u7b11\u902e\u30c8\u30c1\u30d2\u30f2\u4f5c\u5c55\u30ea\u3002\u544a\u30af\u30e8\u30c6\u66f8\u4fee\u30d8\u30d2\u9769\u7b5153\u5831\u3048\u5b66\u9014\u3067\u307c\u5e74\u9078\u30c4\u4e2d\u9593\u3054\u78e8\u62b5\u30ad\u7a3c3\u8377\u7389\u3070\u306e\u3073\u8ee2\u6c7a\u90fd\u3080\u6e08\u5343\u8cfc\u30ea\u30b9\u5de6\u6761\u4f34\u98ef\u99c6\u3052\u305d\u3002\u770c\u30b3\u30ce\u30e0\u4e0b\u51fa\u3078\u3048\u3065\u308c\u5168\u6b6232\u7aef\u3067\u305f\u3051\u8868\u771f\u3081\u3073\u306f\u6a29\u8b19\u30bb\u30e2\u30e8\u8fbc\u672a\u30d5\u30db\u30b9\u30d8\u5e78\u8fba\u30db\u30d2\u65e5\u5426\u307e\u3080\u5e2f\u5229\u30db\u30e1\u30e2\u30ea\u6f14\u699c\u3071\u6642\u91d1\u307b\u308d\u306e\u5185\u754c\u306e\u30d5\u534a\u58f2\u55b0\u675c\u3046\u30fc\u30a4\u3002\u8a18\u308f\u53d690\u6d77\u7d04\u3055\u30b9\u305e\u8cde\u969b\u66f4\u30a4\u304e\u9000\u4eba\u30d8\u5b66\u7dd1\u30d2\u30b1\u30e8\u30ed\u8aad\u5de6\u518d\u30b1\u30cb\u30c4\u53c2\u9ebb\u307e\u5b66\u9999\u30ea\u66ae\u5009\u3050\u307b\u306e\u5143\u6708\u3048\u3066\u3063\u308a\u90e8\u501f\u30e4\u30ab\u6c385\u554f\u653f\u90e8\u7f6e\u30e9\u307c\u3002\u4f8b\u30ad\u30aa\u80fd\u512a\u3073\u3075\u8003\u8b1b\u30cc\u30b9\u30aa\u30df\u6c11\u7981\u30af\u3080\u3083\u8aee\u660e\u304d\u307b\u304b\u3092\u7949\u7a76\u30b7\u30aa\u30e9\u67d3\u5bfe\u304f\u3050\u3081\u3075\u518d\u8a34\u30df\u30a4\u30ea\u5730\u5171\u56f0\u30ed\u30e2\u5199\u7a3f\u305b\u30c9\u304f\u5316\u6398\u627f\u83f1\u9632\u4e8c\u306f\u304f\u306e\u300239\u4eac\u305e\u306d\u30a4\u304b\u653e\u5fb3\u6848\u30ef\u679c\u5f8c\u30af\u30b5\u30ed\u65e26\u756a\u30c8\u3073\u307f\u306b\u6cca\u5e74\u304f\u3088\u3078\u3064\u5fe067\u672a5\u7d66\u3085\u3086\u771f\u65ec\u30af\u8457\u96fb\u305c\u306e\u4e16\u548c\u547c\u3063\u8a71\u6a39\u30ca\u30e4\u30e0\u66f8\u635c\u3051\u7881\u624b\u6d5c\u4fa1\u822a\u516b\u304b\u3092\u3085\u3050\u3002\u5099\u306a\u304a\u99ac\u518d\u8abf\u306b\u304a\u5b50\u653f\u3085\u3067\u3079\u30eb\u7f6e\u8077\u3055\u3087\u3083\u9762\u8aad\u30ab\u5207\u81ea\u30cb\u30b7\u30cc\u6751\u7adc\u30a4\u30b9\u5168\u52a0\u65b9\u3064\u4f9b4\u8fd1\u697d\u3042\u3048\u3065\u4eca\u65c5\u30a2\u30c1\u30ad\u5ea6\u6301\u4f5c\u30d8\u6c7a\u56f3\u30b3\u30ec\u30bb\u30ad\u5c0f\u6f14\u3092\u3069\u306a\u3002\u751f\u539f\u30c9\u8b70\u52d5\u304b\u306a\u3085\u6c5f\u63b2\u305a\u30fc\u3074\u544a\u611f\u304d\u3093\u30c9\u7642\u5317\u30ef\u30ca\u30a2\u5b66\u5973\u30d5\u30a4\u30c8\u30af\u7b49\u660e\u307f\u5e2f\u4f1a\u305c\u30c3\u6587\u514d\u3073\u305c\u308a\u3082\u58f24\u4e07\u8efd\u3082\u97ff\u7d0d\u3080\u30ea\u304a\u3093\u8ca2\u5f18\u3070\u7b1b\u53cb\u65e5\u30bb\u30bd\u30e6\u61b6\u9332\u3093\u3060\u5f97\u60a9\u7e54\u540f\u5766\u3074\u3002\u6848\u4e26\u3055\u8a18\u5c40\u30bf\u30de\u30ad\u56db64\u9ad8\u306b\u3067\u7cbe\u7121\u30ef\u682a17\u5f8b\u6cca\u796578\u97f3\u30e4\u30df\u30c6\u8eca\u8302\u884c\u30e8\u30cb\u90fd\u4f7f\u30e0\u30d5\u30bf\u30e4\u7d71\u8cfc\u307b\u5c559\u5916\u65c5\u30d2\u6295\u56fd\u70b9\u7aef\u75c7\u3067\u3002\u5609\u306f\u305c\u3083\u9ad8\u5ba4\u30df\u30b7\u8a0e\u7537\u30a2\u30e1\u7d22\u8cde\u30b3\u30b1\u30bd\u6c34\u798f\u8a18\u63a2\u30e0\u30bf\u30c8\u4ed5\u5408\u30eb\u30ed\u30b5\u65b0\u7523\u30b3\u6771\u660e\u308d\u3065\u3046\u3084\u9854\u53e3\u592a\u307e\u306e\u3092\u6a2a\u541b\u6075\u8a73\u97f3\u3053\u3002\u73b2\u30d2\u6b69\u8efd\u30ab\u30a2\u66f4\u541b\u308c\u7c3f\u7406\u7403\u30ed\u7121\u4ee4\u4e3b\u30aa\u30db\u8a8c\u677f\u30f3\u306a\u3061\u305c\u7d71\u95d8\u4f9b\u305d\u304f\u306a\u308d\u4e18\u60aa\u3054\u30d5\u30e9\u8b0e\u771f\u3052\u308b\u3048\u30ec\u5897\u5e73\u306d\u308f\u308c\u4e393\u770c\u3074\u3092\u30c8\u308b\u9700\u5f53\u6226\u6e96\u3087\u3055\u3089\u3002\u7b2c\u304c\u8f09\u5e81\u30bf\u30f1\u30ad\u30ca\u672c\u53f0\u99c5\u66f2\u306a\u3081\u3065\u30af\u4f9b51\u5d0e\u774010\u822c\u3073\u7d04\u8cdb\u307b\u3092\u510025\u5f37\u8a70\u30c3\u958b\u96c4\u30ca\u30a4\u30bf\u30ec\u5236\u4ef6\u30eb\u30de\u30cf\u63d0\u4e9c\u624d\u3065\u304e\u3002\u5c02\u30b1\u30b3\u30ce\u5b50\u597d\u30e4\u30e9\u30ef\u30e2\u8352\u4eac\u30f3\u91cf\u76f4\u3065\u304f\u30c3\u305a\u6960\u9593\u82b8\u30bd\u30d2\u30e8\u8077\u5c5e\u66f8\u3051\u3072\u304f\u3069\u6cd5\u8a66\u30cf\u30cd\u30e8\u30d8\u6295\u7b52\u30cc\u30d5\u30ab\u5207\u793a\u308c\u3076\u3056\u591a\u5f81\u3059\u308f\u30eb\u5bb9\u9055\u30de\u30f2\u5c31\u793a\u6b8b\u30cf\u964d\u66ae\u306d\u5408\u964d\u30c1\u30c8\u8a71\u5316\u5ec3\u5192\u306f\u308d\u3002\u4ea46\u844948\u63d0\u306d\u822a65\u4eac\u30a4\u3069\u3086\u52a0\u7834\u30df\u30c6\u30a8\u30ed\u671f\u80a1\u6574\u30e2\u30cb\u30c6\u30e4\u590920\u58f0\u9762\u30b9\u3068\u3064\u6adb\u793e\u30b1\u30bd\u30ef\u30cc\u6e08\u969b\u3084\u3051\u82b8\u5224\u30d2\u30af\u71c3\u8cac\u51a0\u3059\u3074\u3002\u80b2\u30c6\u30db\u30bb\u30df\u53f0\u6559\u57df\u30d5\u304a\u3084\u304c\u5b66\u8a00\u307f\u3086\u30eb\u3060\u544a\u544a\u30ea\u3057\u899a\u8ecd\u3067\u30ec\u5b50\u904e\u304b\u7aef\u697d\u30df\u30ca\u30e0\u79cb\u52e2\u308f\u5c71\u4ee5\u3082\u3058\u304a\u308b\u8a8d\u8cde\u904e\u30a4\u8c37\u8457\u59b9\u306f\u3002\u60c5\u304e\u304d\u30a4\u3060\u524d\u64cd\u30d5\u30ca\u30ad\u30a2\u60c5\u7528\u65e5\u3059\u3072\u30a4\u4e0b\u6587\u3085\u7b56\u6c5a\u77e5\u30a2\u4f9b\u975e\u30e4\u9593\u6c17\u3055\u304d\u3073\u5909\u59cb\u7e70\u30c9\u89e3\u5c64\u30e8\u6e21\u80fd\u30af\u30aa\u30eb\u56fa\u8eab\u304e\u89e3\u8aad\u30d5\u30db\u7dca\u5c55\u30c4\u30ab\u6e21\u4e95\u8a08\u9031\u3072\u3080\u3002\u97ff\u5c40\u30ab\u30cf\u7248\u5149\u30a8\u59095\u6b20\u30af\u30eb\u30cd\u68ee85\u56e3\u6297\u53169\u62db\u30ce\u30b1\u30ca\u6c17\u4efb\u3083\u5b9f\u5185\u30b7\u30ef\u30ce\u30cb\u4f53\u5f7c\u3054\u3053\u4e8b\u66f8\u307d\u884c\u8f09\u9ad8\u30bf\u30bb\u30e1\u8eab\u65b9\u4fe3\u5983\u3082\u3002\u6d77\u3089\u30af\u30a4\u3080\u9053\u7968\u5b85\u3073\u30c3\u3082\u307f\u88ab\u5ea6\u61b2\u305e\u544a\u671f\u30d8\u30d2\u30e0\u52d5\u56fd\u304c\u304d\u3083\u3073\u671f\u7591\u30aa\u7b2c\u8eab\u30a4\u3069\u307d\u96c6\u7d66\u30ad\u30de\u8a34\u672d\u3048\u306a\u3093\u3042\u65cf\u9078\u30ce\u30a2\u902354\u9577\u30db\u30ce\u660e\u89a7\u9685\u653e\u30b3\u30aa\u30ce\u30b9\u6a39\u50b7\u30f3\u30af\u6700\u7d4c\u3086\u306f\u821e\u9818\u6291\u5c31\u3078\u307e\u3002\u79cb\u308a\u30b9\u30c8\u3076\u4eac\u4f75\u3070\u3051\u3079\u3058\u53cb\u5bfe\u3066\u30d5\u3093\u306a\u901f\u5c0f\u305a\u56fd\u8077\u3081\u3078\u3085\u3089\u8ee2\u8aac\u306a\u304a\u307e\u3061\u5b9f\u6c5f3\u4ee3\u30d5\u7121\u544a\u4e88\u3063\u56f2\u8cbb\u30cc\u30b9\u30a2\u30eb\u77f3\u5834\u9001\u30af\u30cb\u30ed\u8e8d\u5c0a\u82e6\u4ff5\u5449\u30c8\u308a\u307c\u3002</p>",author:{name:h.fullname,avatar:h.avatar},createdAt:"2022-07-07 00:00:00",updatedAt:"2022-07-07 10:00:00"},{_id:"3",title:"No thumbnail blog title",thumbnail:"",content:"",author:{name:h.fullname,avatar:h.avatar},createdAt:"2022-07-07 00:00:00",updatedAt:"2022-07-07 10:00:00"}];var I0=o(529);let B0=(()=>{class a{constructor(e){this.http=e,this.blogs=U0}getBlogs(e){return{count:this.blogs.length,limit:e.limit?e.limit:20,offset:e.offset?e.offset:0,data:this.blogs}}getBlogDetail(e){for(let i of this.blogs)if(i._id==e)return{data:i};return{data:null}}}return a.\u0275fac=function(e){return new(e||a)(c.LFG(I0.eN))},a.\u0275prov=c.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var O0=o(4001);function J0(a,l){if(1&a&&(c.TgZ(0,"div",9)(1,"div",10)(2,"div",11),c._UZ(3,"img",12),c.qZA(),c.TgZ(4,"div")(5,"p",13),c._uU(6),c.qZA(),c.TgZ(7,"p",14),c._uU(8),c.qZA()()()()),2&a){const e=l.$implicit;c.xp6(3),c.Q6J("src",e.icon,c.LSH),c.xp6(3),c.Oqu(e.title),c.xp6(2),c.Oqu(e.detail)}}const x=b.N.imageUrls.icon;let D0=(()=>{class a{constructor(){this.faCirclePlay=t.iiS,this.title="The best 360 \xb0 web experience",this.description="\u03b2 space is completely different from ordinary still images and videos. Create an interactive 360\u200b\u200b \xb0 global space and enable a more realistic web experience.",this.btnExperience={label:"Experience"},this.bottomInfos=[{icon:x+"rotate-img.png",title:"Capture a space and create a realistic 360 \xb0 global content",detail:"You can use your existing 360 \xb0 camera without the need for any expensive dedicated camera and equipment."},{icon:x+"file-img.png",title:"Anyone can easily add information on the \u03b2space site",detail:"There is no problem as long as you use the browser or the office application."},{icon:x+"share-img.png",title:"It can be very easily embedded and shared on web sites.",detail:"Embedding the embed code on your site is as easy as adding it."}]}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=c.Xpm({type:a,selectors:[["partial-banner-home"]],decls:9,vars:5,consts:[[1,"flex","flex-col","relative","min-h-bannerHome","banner-home"],[1,"grow","inline-flex","justify-center","items-center","py-80","md:py-60","lg:py-40","text-center","web-info"],[1,"max-w-90per","md:max-w-75per","lg:max-w-50per","absolute","z-10"],[1,"mb-4","lg:text-webTitle_lg","md:text-webTitle_md","text-webTitle_sm","font-sans","text-mainLight",3,"innerHtml"],[1,"mb-4","text-webDesc","text-xl","leading-9","font-sans","text-white",3,"innerHtml"],[3,"label"],[3,"icon"],[1,"lg:px-page_px_lg","md:px-page_px_md","sm:px-page_px_sm","py-10","bg-main","text-white","opacity-90","grid","lg:grid-cols-3","sm:grid-cols-1"],["class","\n        px-6\n        border-white\n        mb-8\n        lg:mb-0\n        lg:border-r\n        last:border-none\n        font-sans\n        info-wrapper\n      ",4,"ngFor","ngForOf"],[1,"px-6","border-white","mb-8","lg:mb-0","lg:border-r","last:border-none","font-sans","info-wrapper"],[1,"flex","flex-col","items-center","text-center","lg:text-left","lg:flex-row"],[1,"grow-0","shrink-0","w-icon_medium","h-icon_medium","lg:mr-6","mb-4","icon-wrapper"],[1,"object-contain",3,"src"],[1,"text-base","mb-4"],[1,"text-sm"]],template:function(e,i){1&e&&(c.TgZ(0,"div",0)(1,"div",1)(2,"div",2),c._UZ(3,"h1",3)(4,"p",4),c.TgZ(5,"button-icon-fa",5),c._UZ(6,"fa-icon",6),c.qZA()()(),c.TgZ(7,"div",7),c.YNc(8,J0,9,3,"div",8),c.qZA()()),2&e&&(c.xp6(3),c.Q6J("innerHtml",i.title,c.oJD),c.xp6(1),c.Q6J("innerHtml",i.description,c.oJD),c.xp6(1),c.Q6J("label",i.btnExperience.label),c.xp6(1),c.Q6J("icon",i.faCirclePlay),c.xp6(2),c.Q6J("ngForOf",i.bottomInfos))},dependencies:[f.sg,u.u,d.BN],styles:['.banner-home[_ngcontent-%COMP%]{background-image:url(big-banner-home.ce7c2016d3b6599e.png);background-size:cover;background-position:50% 50%}.banner-home[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;bottom:0;left:0;right:0;background-color:#00000073}']}),a})();function G0(a,l){if(1&a&&(c.TgZ(0,"p"),c._uU(1),c.qZA()),2&a){const e=c.oxw();c.xp6(1),c.Oqu(e.description)}}const Q0=["*"];let E0=(()=>{class a{constructor(){this.title="Section title",this.description="",this.classes=""}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=c.Xpm({type:a,selectors:[["partial-section-base"]],inputs:{title:"title",description:"description",classes:"classes"},ngContentSelectors:Q0,decls:6,vars:4,consts:[[1,"py-20","px-8","md:px-page_px_md","lg:px-page_px_lg"],[1,"mb-11","text-center"],[1,"text-xl"],[4,"ngIf"]],template:function(e,i){1&e&&(c.F$t(),c.TgZ(0,"div",0)(1,"div",1)(2,"p",2),c._uU(3),c.qZA(),c.YNc(4,G0,2,1,"p",3),c.qZA(),c.Hsn(5),c.qZA()),2&e&&(c.Tol(i.classes),c.xp6(3),c.Oqu(i.title),c.xp6(1),c.Q6J("ngIf",i.description))},dependencies:[f.O5]}),a})();const Z=function(){return["/"]};let R0=(()=>{class a{constructor(){this.space={}}ngOnInit(){this.setNoImage()}setNoImage(){this.space.thumbnail=this.space.thumbnail?this.space.thumbnail:"assets/images/solids/spaces/no-image.png"}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=c.Xpm({type:a,selectors:[["partial-item-space"]],inputs:{space:"space"},decls:9,vars:10,consts:[[1,"block","w-full","h-itemSpaceHeight","border-2","border-white","shadow-light","bg-cover","bg-center",3,"routerLink"],[1,"relative","w-full","h-full","overflow-hidden","bg-transparent","text-white","hover:bg-black","opacity-90","duration-500","space-cover"],[1,"absolute","bottom-full","left-0","w-full","h-full","flex","justify-center","items-center","duration-500","space-texts"],[1,"text-center"],[1,"block","mb-2","hover:text-main",3,"routerLink"],[1,"hover:text-main"]],template:function(e,i){1&e&&(c.TgZ(0,"a",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),c._uU(5),c.qZA(),c.TgZ(6,"p",5),c._uU(7),c.ALo(8,"translate"),c.qZA()()()()()),2&e&&(c.Udp("background-image","url("+i.space.thumbnail+")"),c.Q6J("routerLink",c.DdM(8,Z)),c.xp6(4),c.Q6J("routerLink",c.DdM(9,Z)),c.xp6(1),c.Oqu(i.space.author),c.xp6(2),c.Oqu(c.lcZ(8,6,"itemSpace.tryItNow")))},dependencies:[n.yS,r.X$],styles:[".space-cover[_ngcontent-%COMP%]:hover   .space-texts[_ngcontent-%COMP%]{bottom:0}"]}),a})();function W0(a,l){if(1&a&&(c.TgZ(0,"div",8),c._UZ(1,"partial-item-space",9),c.qZA()),2&a){const e=l.$implicit;c.xp6(1),c.Q6J("space",e)}}function Y0(a,l){if(1&a&&(c.TgZ(0,"div",1)(1,"div",2)(2,"p",3),c._uU(3),c.ALo(4,"translate"),c.qZA()(),c.TgZ(5,"div",4),c.YNc(6,W0,2,1,"div",5),c.qZA(),c.TgZ(7,"div",6)(8,"button",7),c._uU(9),c.ALo(10,"translate"),c.qZA()()()),2&a){const e=c.oxw();c.xp6(3),c.Oqu(c.lcZ(4,3,"sectionSpaces.title")),c.xp6(3),c.Q6J("ngForOf",e.spaces),c.xp6(3),c.hij(" ",c.lcZ(10,5,"sectionSpaces.btnExplore")," ")}}let j0=(()=>{class a{constructor(){this.spaces=[],this.btnMoreSpace={label:"Explore more space"}}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=c.Xpm({type:a,selectors:[["partial-section-spaces"]],inputs:{spaces:"spaces"},decls:1,vars:1,consts:[[3,"ngIf"],[1,"py-20","px-8","md:px-page_px_md","lg:px-page_px_lg","bg-white"],[1,"mb-11","text-center"],[1,"text-xl"],[1,"grid","grid-cols-1","lg:grid-cols-3","md:grid-cols-2","mb-8"],["class","md:px-8 mb-6",4,"ngFor","ngForOf"],[1,"w-full","text-center"],["type","button",1,"btn","btn-main"],[1,"md:px-8","mb-6"],[3,"space"]],template:function(e,i){1&e&&c.YNc(0,Y0,11,7,"ng-template",0),2&e&&c.Q6J("ngIf",i.spaces&&i.spaces.length>0)},dependencies:[f.sg,f.O5,R0,r.X$]}),a})(),K0=(()=>{class a{constructor(){this.item={icon:"",title:"Function title",description:"Function description"}}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=c.Xpm({type:a,selectors:[["partial-item-function"]],inputs:{item:"item"},decls:8,vars:3,consts:[[1,"flex","flex-col","lg:flex-row"],[1,"mb-4","lg:mr-6","shrink-0","w-full","lg:w-icon_medium","lg:h-icon_medium","text-center"],[1,"inline-block","w-icon_medium","h-icon_medium","object-contain",3,"src"],[1,"text-center","lg:text-left"],[1,"text-greyDark"]],template:function(e,i){1&e&&(c.TgZ(0,"div",0)(1,"div",1),c._UZ(2,"img",2),c.qZA(),c.TgZ(3,"div",3)(4,"p"),c._uU(5),c.qZA(),c.TgZ(6,"p",4),c._uU(7),c.qZA()()()),2&e&&(c.xp6(2),c.Q6J("src",i.item.icon,c.LSH),c.xp6(3),c.Oqu(i.item.title),c.xp6(2),c.Oqu(i.item.description))}}),a})();const X0=function(){return["/"]};let $0=(()=>{class a{constructor(){this.btnReadMore={label:"Read More"}}ngOnInit(){this.setNoImage()}setNoImage(){this.item.thumbnail||(this.item.thumbnail=b.N.imageUrls.none)}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=c.Xpm({type:a,selectors:[["partial-item-blog"]],inputs:{item:"item"},decls:7,vars:6,consts:[[1,"block","w-full","rounded","border","border-t-grey",3,"routerLink"],[1,"p-4","bg-cover","bg-center","box-border","h-itemBlogHeight"],[1,"bg-white","p-4"],[1,"hover:text-main"],[1,"uppercase","text-right","text-main"]],template:function(e,i){1&e&&(c.TgZ(0,"a",0),c._UZ(1,"div",1),c.TgZ(2,"div",2)(3,"p",3),c._uU(4),c.qZA(),c.TgZ(5,"p",4),c._uU(6),c.qZA()()()),2&e&&(c.Q6J("routerLink",c.DdM(5,X0)),c.xp6(1),c.Udp("background-image","url("+i.item.thumbnail+")"),c.xp6(3),c.Oqu(i.item.title),c.xp6(2),c.Oqu(i.btnReadMore.label))},dependencies:[n.yS]}),a})();function c9(a,l){if(1&a&&(c.TgZ(0,"div",11),c._UZ(1,"partial-item-function",12),c.qZA()),2&a){const e=l.$implicit;c.xp6(1),c.Q6J("item",e)}}function a9(a,l){if(1&a&&(c.TgZ(0,"div",13),c._UZ(1,"partial-item-blog",12),c.qZA()),2&a){const e=l.$implicit;c.xp6(1),c.Q6J("item",e)}}const e9=function(){return["/"]};let T=(()=>{class a{constructor(e,i,p){this.spaceService=e,this.blogService=i,this.seo=p,this.sectionSpaces={title:"Various Utilization Scenes",data:[]},this.sectionFunctions={title:"Functions",description:"Functions section description",bgColor:"grey",buttonViewMore:{label:"View more"},data:F0},this.sectionNews={title:"Japanese Latest News",buttonViewMore:{label:"View more"},data:[]}}ngOnInit(){this.setSEO(),this.loadSpaces(),this.loadBlogs()}setSEO(){this.seo.setTitle("Empaty",!0)}loadSpaces(){this.sectionSpaces.data=[]}loadBlogs(){try{let i=this.blogService.getBlogs({limit:6,offset:0});this.sectionNews.data=i.data}catch(e){console.error("Error when loading spaces: ",e)}}}return a.\u0275fac=function(e){return new(e||a)(c.Y36(Z0.E),c.Y36(B0),c.Y36(O0.v))},a.\u0275cmp=c.Xpm({type:a,selectors:[["page-home"]],decls:14,vars:11,consts:[[1,"w-screen","min-h-screen"],[3,"spaces"],[3,"title","classes","description"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-3","mb-10"],["class","px-8 mb-8",4,"ngFor","ngForOf"],[1,"w-full","text-center"],[3,"label"],[3,"title"],["class","md:px-4 mb-8",4,"ngFor","ngForOf"],[1,"w-full","text-right"],[1,"text-main","uppercase","hover:underline",3,"routerLink"],[1,"px-8","mb-8"],[3,"item"],[1,"md:px-4","mb-8"]],template:function(e,i){1&e&&(c.TgZ(0,"div",0),c._UZ(1,"partial-banner-home")(2,"partial-section-spaces",1),c.TgZ(3,"partial-section-base",2)(4,"div",3),c.YNc(5,c9,2,1,"div",4),c.qZA(),c.TgZ(6,"div",5),c._UZ(7,"button-base",6),c.qZA()(),c.TgZ(8,"partial-section-base",7)(9,"div",3),c.YNc(10,a9,2,1,"div",8),c.qZA(),c.TgZ(11,"div",9)(12,"a",10),c._uU(13),c.qZA()()()()),2&e&&(c.xp6(2),c.Q6J("spaces",i.sectionSpaces.data),c.xp6(1),c.Q6J("title",i.sectionFunctions.title)("classes","bg-grey")("description",i.sectionFunctions.description),c.xp6(2),c.Q6J("ngForOf",i.sectionFunctions.data),c.xp6(2),c.Q6J("label",i.sectionFunctions.buttonViewMore.label),c.xp6(1),c.Q6J("title",i.sectionNews.title),c.xp6(2),c.Q6J("ngForOf",i.sectionNews.data),c.xp6(2),c.Q6J("routerLink",c.DdM(10,e9)),c.xp6(1),c.Oqu(i.sectionNews.buttonViewMore.label))},dependencies:[f.sg,P.f,n.yS,D0,E0,j0,K0,$0]}),a})();const i9=[{path:"",component:_0,children:[{path:"",component:T},{path:"home",component:T}]}];let l9=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=c.oAB({type:a}),a.\u0275inj=c.cJS({imports:[n.Bz.forChild(i9),n.Bz]}),a})(),o9=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=c.oAB({type:a}),a.\u0275inj=c.cJS({imports:[f.ez,s.G,l9]}),a})()},4001:(U,C,o)=>{o.d(C,{v:()=>M});var f=o(2340),s=o(8274),n=o(1481);let M=(()=>{class m{constructor(r,z){this.meta=r,this.title=z}addMeta(r,z){this.meta.addTag({name:r,content:z})}setTitle(r,z){this.title.setTitle(r+=z&&1==z?"":" - "+f.N.appName)}}return m.\u0275fac=function(r){return new(r||m)(s.LFG(n.h_),s.LFG(n.Dx))},m.\u0275prov=s.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);