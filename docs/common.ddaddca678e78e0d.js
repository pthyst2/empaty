"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[592],{411:(_,c,a)=>{a.d(c,{b:()=>i});const i=[{_id:1,name:"Office",value:"office"},{_id:2,name:"EC Shop",value:"ecshop"},{_id:3,name:"Service Provider",value:"provider"}]},9155:(_,c,a)=>{a.d(c,{C:()=>i});const i=[{_id:"1",name:"Restaurants"},{_id:"2",name:"Moutains"},{_id:"3",name:"Rivers"},{_id:"4",name:"Jungles"},{_id:"5",name:"Forests"},{_id:"6",name:"Islands"}]},1325:(_,c,a)=>{a.d(c,{c:()=>$});var i=a(6781),h=a(9943),S=a(9155),f=a(411),k=a(2340);const e=i.uv,n=h.b,u=[{_id:"1",value:"2d",label:"2D"},{_id:"2",value:"3d",label:"3D"},{_id:"3",value:"video",label:"Video"}],m=S.C,d=[{_id:"1",value:"published",label:"Published"},{_id:"2",value:"private",label:"Private"}],v=k.N.imageUrls.space,p=f.b,s=[{_id:"1",name:"Can View",value:"view"},{_id:"2",name:"Can Edit",value:"edit"}],$=[{_id:"1",title:"Scene 1",type:u[0].value,thumbnail:v+"1.png",audioFile:void 0,present:e.fullname,author:e.fullname,contact:{name:e.fullname,email:e.email,phoneNumber:"(+"+e.countryCode+") "+e.phoneNumber,address:e.address},externalUrl:"https://www.bspace2.com/scene1",publishedAt:"2022-07-17 00:00:00",createdAt:"2022-07-17 00:00:00",updatedAt:"2022-07-17 00:00:00",summary:"",category:m[0]._id,status:d[0].value,serviceType:p[0].value,size:{width:5,length:10},paid:!1,users:[{user:n[0],role:s[0]},{user:n[1],role:s[1]}],statistics:{impressions:1472,visits:104,uniques:36}},{_id:"2",title:"Scene 2",type:u[1].value,thumbnail:v+"2.png",audioFile:void 0,present:e.fullname,author:e.fullname,contact:{name:e.fullname,email:e.email,phoneNumber:"(+"+e.countryCode+") "+e.phoneNumber,address:e.address},externalUrl:"https://www.bspace2.com/scene2",publishedAt:"2022-07-17 00:00:00",createdAt:"2022-07-17 00:00:00",updatedAt:"2022-07-17 00:00:00",summary:"",category:m[1]._id,status:d[1].value,serviceType:p[1].value,size:{width:10,length:12},paid:!1,users:[{user:n[0],role:s[0]},{user:n[1],role:s[1]}],statistics:{impressions:1472,visits:104,uniques:36}},{_id:"3",title:"Scene 3",type:u[2].value,thumbnail:v+"3.png",audioFile:void 0,present:e.fullname,author:e.fullname,contact:{name:e.fullname,email:e.email,phoneNumber:"(+"+e.countryCode+") "+e.phoneNumber,address:e.address},externalUrl:"https://www.bspace2.com/scene2",publishedAt:"2022-07-17 00:00:00",createdAt:"2022-07-17 00:00:00",updatedAt:"2022-07-17 00:00:00",summary:"",category:m[1]._id,status:d[1].value,serviceType:p[2].value,size:{width:6,length:10},paid:!1,users:[{user:n[0],role:s[0]},{user:n[1],role:s[1]}],statistics:{impressions:1472,visits:104,uniques:36}},{_id:"4",title:"Scene 4",type:u[0].value,thumbnail:v+"4.png",audioFile:void 0,present:e.fullname,author:e.fullname,contact:{name:e.fullname,email:e.email,phoneNumber:"(+"+e.countryCode+") "+e.phoneNumber,address:e.address},externalUrl:"https://www.bspace2.com/scene1",publishedAt:"2022-07-17 00:00:00",createdAt:"2022-07-17 00:00:00",updatedAt:"2022-07-17 00:00:00",summary:"",category:m[0]._id,status:d[0].value,serviceType:p[0].value,size:{width:8,length:12},paid:!1,users:[{user:n[0],role:s[0]},{user:n[1],role:s[1]}],statistics:{impressions:1472,visits:104,uniques:36}},{_id:"5",title:"Scene 5",type:u[1].value,thumbnail:v+"5.png",audioFile:void 0,present:e.fullname,author:e.fullname,contact:{name:e.fullname,email:e.email,phoneNumber:"(+"+e.countryCode+") "+e.phoneNumber,address:e.address},externalUrl:"https://www.bspace2.com/scene2",publishedAt:"2022-07-17 00:00:00",createdAt:"2022-07-17 00:00:00",updatedAt:"2022-07-17 00:00:00",summary:"",category:m[1]._id,status:d[1].value,serviceType:p[1].value,size:{width:6,length:18},paid:!1,users:[{user:n[0],role:s[0]},{user:n[1],role:s[1]}],statistics:{impressions:1472,visits:104,uniques:36}},{_id:"6",title:"Scene 6",type:u[2].value,thumbnail:void 0,audioFile:void 0,present:e.fullname,author:e.fullname,contact:{name:e.fullname,email:e.email,phoneNumber:"(+"+e.countryCode+") "+e.phoneNumber,address:e.address},externalUrl:"https://www.bspace2.com/scene2",publishedAt:"2022-07-17 00:00:00",createdAt:"2022-07-17 00:00:00",updatedAt:"2022-07-17 00:00:00",summary:"",category:m[1]._id,status:d[1].value,serviceType:p[2].value,size:{width:7,length:14},paid:!1,users:[{user:n[0],role:s[0]},{user:n[1],role:s[1]}],statistics:{impressions:1472,visits:104,uniques:36}}]},5114:(_,c,a)=>{a.d(c,{E:()=>p});var i=a(162),h=a(1325),l=a(9155),S=a(411),o=a(8274),g=a(529);const f=h.c,k=l.C,e=S.b,n=i.Ps`
  query floors($token: String!, $limit: Int!, $start: Int!) {
    floors(token: $token, limit: $limit, start: $start) {
      total
      items {
        id
        name
        name_ja
        description
        service
        image
        created
        modified
        status
      }
    }
  }
`,u=i.Ps`
  query serviceFloors(
    $service: String!
    $token: String!
    $limit: Int!
    $start: Int!
  ) {
    servicefloors(
      service: $service
      token: $token
      limit: $limit
      start: $start
    ) {
      total
      items {
        id
        name
        name_ja
        description
        service
        image
        created
        modified
        status
      }
    }
  }
`,m=i.Ps`
  mutation createFloor(
    $name: String!
    $description: String!
    $data: String!
    $token: String!
    $service: String!
  ) {
    createFloor(
      input: {
        data: $data
        description: $description
        image: ""
        items: ""
        name: $name
        nameja: $name
        service: $service
        token: $token
      }
    )
  }
`,d=i.Ps`
  mutation editSpace(
    $id: String!
    $name: String!
    $nameja: String!
    $description: String!
    $service: String!
    $token: String!
  ) {
    editSpace(
      input: {
        id: $id
        name: $name
        nameja: $nameja
        description: $description
        service: $service
        token: $token
      }
    )
  }
`,v=i.Ps`
  mutation deleteFloor($Id: String!, $token: String!) {
    deleteFloor(Id: $Id, token: $token)
  }
`;let p=(()=>{class s{constructor(t,r){this.http=t,this.apollo=r}getSpaces(t){return this.apollo.query({query:n,variables:{token:localStorage.getItem("token"),limit:t.limit?t.limit:0,start:t.start?t.start:0}})}getServiceSpaces(t){let r={service:t.service,token:localStorage.getItem("token"),limit:t.limit?t.limit:0,start:t.start?t.start:0};return console.log("body to query: ",r),this.apollo.query({query:u,variables:{service:t.service,token:localStorage.getItem("token"),limit:t.limit?t.limit:0,start:t.start?t.start:0}})}getSpaceDetail(t){let r={status:200,data:null};for(let y of f)y._id==t&&(r.data=y);return r}deleteSpace(t){return this.apollo.mutate({mutation:v,variables:{token:localStorage.getItem("token"),Id:t}})}getSpaceEncodedData(t,r){return this.http.get("http://3d.optimizer.vn/json/?w="+t.toString()+"&h="+r.toString())}createSpace(t){return this.apollo.mutate({mutation:m,variables:{data:t.data,description:t.description,image:"",items:"",name:t.name,nameja:t.name,service:t.service,token:localStorage.getItem("token")}})}updateSpace(t){return this.apollo.mutate({mutation:d,variables:{id:t.id,description:t.description,name:t.name,nameja:t.nameja,service:t.service,token:localStorage.getItem("token")}})}getCategories(){return{status:200,data:k}}getServiceTypes(){return e}getPublishedSpaces(){let t={status:200,count:0,data:[]};for(let r of f)"published"==r.status&&(t.data.push(r),t.count++);return t}}return s.\u0275fac=function(t){return new(t||s)(o.LFG(g.eN),o.LFG(i._M))},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},8053:(_,c,a)=>{a.d(c,{C:()=>h});var i=a(8274);let h=(()=>{class l{constructor(){}setLang(o){let g=localStorage.getItem("lang");g?o.use(g):(localStorage.setItem("lang","en"),o.use("en"))}}return l.\u0275fac=function(o){return new(o||l)},l.\u0275prov=i.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);