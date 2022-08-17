"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[592],{411:(_,o,s)=>{s.d(o,{b:()=>u});const u=[{_id:1,name:"Office",value:"office"},{_id:2,name:"EC Shop",value:"ecshop"},{_id:3,name:"Service Provider",value:"provider"}]},9155:(_,o,s)=>{s.d(o,{C:()=>u});const u=[{_id:"1",name:"Restaurants"},{_id:"2",name:"Moutains"},{_id:"3",name:"Rivers"},{_id:"4",name:"Jungles"},{_id:"5",name:"Forests"},{_id:"6",name:"Islands"}]},1325:(_,o,s)=>{s.d(o,{c:()=>v});var u=s(6781),c=s(9943),g=s(9155),f=s(411),S=s(2340);const e=u.uv,i=c.b,d=[{_id:"1",value:"2d",label:"2D"},{_id:"2",value:"3d",label:"3D"},{_id:"3",value:"video",label:"Video"}],m=g.C,r=[{_id:"1",value:"published",label:"Published"},{_id:"2",value:"private",label:"Private"}],p=S.N.imageUrls.space,t=f.b,a=[{_id:"1",name:"Can View",value:"view"},{_id:"2",name:"Can Edit",value:"edit"}],v=[{_id:"1",title:"Scene 1",type:d[0].value,thumbnail:p+"1.png",audioFile:void 0,present:e.fullname,author:e.fullname,contact:{name:e.fullname,email:e.email,phoneNumber:"(+"+e.countryCode+") "+e.phoneNumber,address:e.address},externalUrl:"https://www.bspace2.com/scene1",publishedAt:"2022-07-17 00:00:00",createdAt:"2022-07-17 00:00:00",updatedAt:"2022-07-17 00:00:00",summary:"",category:m[0]._id,status:r[0].value,serviceType:t[0].value,size:{width:5,length:10},paid:!1,users:[{user:i[0],role:a[0]},{user:i[1],role:a[1]}],statistics:{impressions:1472,visits:104,uniques:36}},{_id:"2",title:"Scene 2",type:d[1].value,thumbnail:p+"2.png",audioFile:void 0,present:e.fullname,author:e.fullname,contact:{name:e.fullname,email:e.email,phoneNumber:"(+"+e.countryCode+") "+e.phoneNumber,address:e.address},externalUrl:"https://www.bspace2.com/scene2",publishedAt:"2022-07-17 00:00:00",createdAt:"2022-07-17 00:00:00",updatedAt:"2022-07-17 00:00:00",summary:"",category:m[1]._id,status:r[1].value,serviceType:t[1].value,size:{width:10,length:12},paid:!1,users:[{user:i[0],role:a[0]},{user:i[1],role:a[1]}],statistics:{impressions:1472,visits:104,uniques:36}},{_id:"3",title:"Scene 3",type:d[2].value,thumbnail:p+"3.png",audioFile:void 0,present:e.fullname,author:e.fullname,contact:{name:e.fullname,email:e.email,phoneNumber:"(+"+e.countryCode+") "+e.phoneNumber,address:e.address},externalUrl:"https://www.bspace2.com/scene2",publishedAt:"2022-07-17 00:00:00",createdAt:"2022-07-17 00:00:00",updatedAt:"2022-07-17 00:00:00",summary:"",category:m[1]._id,status:r[1].value,serviceType:t[2].value,size:{width:6,length:10},paid:!1,users:[{user:i[0],role:a[0]},{user:i[1],role:a[1]}],statistics:{impressions:1472,visits:104,uniques:36}},{_id:"4",title:"Scene 4",type:d[0].value,thumbnail:p+"4.png",audioFile:void 0,present:e.fullname,author:e.fullname,contact:{name:e.fullname,email:e.email,phoneNumber:"(+"+e.countryCode+") "+e.phoneNumber,address:e.address},externalUrl:"https://www.bspace2.com/scene1",publishedAt:"2022-07-17 00:00:00",createdAt:"2022-07-17 00:00:00",updatedAt:"2022-07-17 00:00:00",summary:"",category:m[0]._id,status:r[0].value,serviceType:t[0].value,size:{width:8,length:12},paid:!1,users:[{user:i[0],role:a[0]},{user:i[1],role:a[1]}],statistics:{impressions:1472,visits:104,uniques:36}},{_id:"5",title:"Scene 5",type:d[1].value,thumbnail:p+"5.png",audioFile:void 0,present:e.fullname,author:e.fullname,contact:{name:e.fullname,email:e.email,phoneNumber:"(+"+e.countryCode+") "+e.phoneNumber,address:e.address},externalUrl:"https://www.bspace2.com/scene2",publishedAt:"2022-07-17 00:00:00",createdAt:"2022-07-17 00:00:00",updatedAt:"2022-07-17 00:00:00",summary:"",category:m[1]._id,status:r[1].value,serviceType:t[1].value,size:{width:6,length:18},paid:!1,users:[{user:i[0],role:a[0]},{user:i[1],role:a[1]}],statistics:{impressions:1472,visits:104,uniques:36}},{_id:"6",title:"Scene 6",type:d[2].value,thumbnail:void 0,audioFile:void 0,present:e.fullname,author:e.fullname,contact:{name:e.fullname,email:e.email,phoneNumber:"(+"+e.countryCode+") "+e.phoneNumber,address:e.address},externalUrl:"https://www.bspace2.com/scene2",publishedAt:"2022-07-17 00:00:00",createdAt:"2022-07-17 00:00:00",updatedAt:"2022-07-17 00:00:00",summary:"",category:m[1]._id,status:r[1].value,serviceType:t[2].value,size:{width:7,length:14},paid:!1,users:[{user:i[0],role:a[0]},{user:i[1],role:a[1]}],statistics:{impressions:1472,visits:104,uniques:36}}]},5114:(_,o,s)=>{s.d(o,{E:()=>m});var u=s(727),c=s(162),n=s(1325),g=s(9155),l=s(8274),h=s(529);const f=n.c,S=g.C,e=c.Ps`
  query floors($token: String!, $limit: Int!, $start: Int!) {
    floors(token: $token, limit: $limit, start: $start) {
      total
      items {
        id
        name
        description
        name_ja
        created
        image
      }
    }
  }
`,i=c.Ps`
  query serviceFloors(
    $service: String!
    $token: String!
    $limit: Int!
    $start: Int!
  ) {
    floors(service: $service, token: $token, limit: $limit, start: $start) {
      total
      items {
        id
        name
        description
        name_ja
        created
        image
      }
    }
  }
`,d=c.Ps`
  mutation createFloor($input: NewHouse!) {
    createFloor(input: $input)
  }
`;let m=(()=>{class r{constructor(t,a){this.http=t,this.apollo=a}getSpaces(t){return this.apollo.query({query:e,variables:{token:localStorage.getItem("token"),limit:t.limit?t.limit:0,start:t.start?t.start:0}})}getServiceSpaces(t){return this.apollo.query({query:i,variables:{service:t.service,token:localStorage.getItem("token"),limit:t.limit?t.limit:0,start:t.start?t.start:0}})}getSpaceDetail(t){let a={status:200,data:null};for(let v of f)v._id==t&&(a.data=v);return a}deleteSpace(t){return{status:200}}getSpaceEncodedData(t,a){return this.http.get("http://3d.optimizer.vn/json/?w="+t.toString()+"&h="+a.toString())}createSpace(t){let a={token:localStorage.getItem("token"),name:t.name,nameja:"",description:t.description,image:t.image?t.image:"",items:"",data:"",service:t.service},v=new u.w0;return v.add(this.getSpaceEncodedData(t.width,t.length).subscribe({next:b=>{a.data=b.data},error:b=>{console.error(b)},complete:()=>{v.unsubscribe()}})),console.log("input to mutate: ",a),this.apollo.mutate({mutation:d,variables:{input:a}})}getCategories(){return{status:200,data:S}}getPublishedSpaces(){let t={status:200,count:0,data:[]};for(let a of f)"published"==a.status&&(t.data.push(a),t.count++);return t}updateSpace(t){return{status:200}}}return r.\u0275fac=function(t){return new(t||r)(l.LFG(h.eN),l.LFG(c._M))},r.\u0275prov=l.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},8053:(_,o,s)=>{s.d(o,{C:()=>c});var u=s(8274);let c=(()=>{class n{constructor(){}setLang(l){let h=localStorage.getItem("lang");h?l.use(h):(localStorage.setItem("lang","en"),l.use("en"))}}return n.\u0275fac=function(l){return new(l||n)},n.\u0275prov=u.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);