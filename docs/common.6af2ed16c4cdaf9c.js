"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[592],{411:(k,v,s)=>{s.d(v,{b:()=>r});const r=[{_id:1,name:"Office",value:"Office"},{_id:2,name:"EC Shop",value:"EC Shop"},{_id:3,name:"Service Provider",value:"Service Provider"}]},6758:(k,v,s)=>{s.d(v,{E:()=>q});var r=s(162),S=s(6781),l=s(9943);const o=[{_id:"1",name:"Restaurants"},{_id:"2",name:"Moutains"},{_id:"3",name:"Rivers"},{_id:"4",name:"Jungles"},{_id:"5",name:"Forests"},{_id:"6",name:"Islands"}];var w=s(411),y=s(2340);const e=S.uv,i=l.b,u=[{_id:"1",value:"2d",label:"2D"},{_id:"2",value:"3d",label:"3D"},{_id:"3",value:"video",label:"Video"}],d=[{_id:"1",value:"published",label:"Published"},{_id:"2",value:"private",label:"Private"}],h=y.N.imageUrls.space,m=w.b,n=[{_id:"1",name:"Can View",value:"view"},{_id:"2",name:"Can Edit",value:"edit"}],A=[{_id:"1",title:"Scene 1",type:u[0].value,thumbnail:h+"1.png",audioFile:void 0,present:e.fullname,author:e.fullname,contact:{name:e.fullname,email:e.email,phoneNumber:"(+"+e.countryCode+") "+e.phoneNumber,address:e.address},externalUrl:"https://www.bspace2.com/scene1",publishedAt:"2022-07-17 00:00:00",createdAt:"2022-07-17 00:00:00",updatedAt:"2022-07-17 00:00:00",summary:"",category:o[0]._id,status:d[0].value,serviceType:m[0].value,size:{width:5,length:10},paid:!1,users:[{user:i[0],role:n[0]},{user:i[1],role:n[1]}],statistics:{impressions:1472,visits:104,uniques:36}},{_id:"2",title:"Scene 2",type:u[1].value,thumbnail:h+"2.png",audioFile:void 0,present:e.fullname,author:e.fullname,contact:{name:e.fullname,email:e.email,phoneNumber:"(+"+e.countryCode+") "+e.phoneNumber,address:e.address},externalUrl:"https://www.bspace2.com/scene2",publishedAt:"2022-07-17 00:00:00",createdAt:"2022-07-17 00:00:00",updatedAt:"2022-07-17 00:00:00",summary:"",category:o[1]._id,status:d[1].value,serviceType:m[1].value,size:{width:10,length:12},paid:!1,users:[{user:i[0],role:n[0]},{user:i[1],role:n[1]}],statistics:{impressions:1472,visits:104,uniques:36}},{_id:"3",title:"Scene 3",type:u[2].value,thumbnail:h+"3.png",audioFile:void 0,present:e.fullname,author:e.fullname,contact:{name:e.fullname,email:e.email,phoneNumber:"(+"+e.countryCode+") "+e.phoneNumber,address:e.address},externalUrl:"https://www.bspace2.com/scene2",publishedAt:"2022-07-17 00:00:00",createdAt:"2022-07-17 00:00:00",updatedAt:"2022-07-17 00:00:00",summary:"",category:o[1]._id,status:d[1].value,serviceType:m[2].value,size:{width:6,length:10},paid:!1,users:[{user:i[0],role:n[0]},{user:i[1],role:n[1]}],statistics:{impressions:1472,visits:104,uniques:36}},{_id:"4",title:"Scene 4",type:u[0].value,thumbnail:h+"4.png",audioFile:void 0,present:e.fullname,author:e.fullname,contact:{name:e.fullname,email:e.email,phoneNumber:"(+"+e.countryCode+") "+e.phoneNumber,address:e.address},externalUrl:"https://www.bspace2.com/scene1",publishedAt:"2022-07-17 00:00:00",createdAt:"2022-07-17 00:00:00",updatedAt:"2022-07-17 00:00:00",summary:"",category:o[0]._id,status:d[0].value,serviceType:m[0].value,size:{width:8,length:12},paid:!1,users:[{user:i[0],role:n[0]},{user:i[1],role:n[1]}],statistics:{impressions:1472,visits:104,uniques:36}},{_id:"5",title:"Scene 5",type:u[1].value,thumbnail:h+"5.png",audioFile:void 0,present:e.fullname,author:e.fullname,contact:{name:e.fullname,email:e.email,phoneNumber:"(+"+e.countryCode+") "+e.phoneNumber,address:e.address},externalUrl:"https://www.bspace2.com/scene2",publishedAt:"2022-07-17 00:00:00",createdAt:"2022-07-17 00:00:00",updatedAt:"2022-07-17 00:00:00",summary:"",category:o[1]._id,status:d[1].value,serviceType:m[1].value,size:{width:6,length:18},paid:!1,users:[{user:i[0],role:n[0]},{user:i[1],role:n[1]}],statistics:{impressions:1472,visits:104,uniques:36}},{_id:"6",title:"Scene 6",type:u[2].value,thumbnail:void 0,audioFile:void 0,present:e.fullname,author:e.fullname,contact:{name:e.fullname,email:e.email,phoneNumber:"(+"+e.countryCode+") "+e.phoneNumber,address:e.address},externalUrl:"https://www.bspace2.com/scene2",publishedAt:"2022-07-17 00:00:00",createdAt:"2022-07-17 00:00:00",updatedAt:"2022-07-17 00:00:00",summary:"",category:o[1]._id,status:d[1].value,serviceType:m[2].value,size:{width:7,length:14},paid:!1,users:[{user:i[0],role:n[0]},{user:i[1],role:n[1]}],statistics:{impressions:1472,visits:104,uniques:36}}];var $=s(8274),F=s(529);const I=A,_=o,C=w.b,N=r.Ps`query searchfloors($name: String!, $service: String!, $token: String!, $limit: Int!, $start: Int!){
  searchfloors(name: $name, service: $service, token: $token, limit: $limit, start: $start){
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
      width
      length
      paid
    }
  }
}`,T=r.Ps`
  mutation createFloor(
    $name: String!
    $description: String!
    $data: String!
    $token: String!
    $service: String!,
    $width: Int!,
    $length: Int!,
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
        token: $token,
        width: $width,
        length: $length
      }
    )
  }
`,P=r.Ps`
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
`,U=r.Ps`
  mutation deleteFloor($Id: String!, $token: String!) {
    deleteFloor(Id: $Id, token: $token)
  }
`,j=r.Ps`query floor($id: String!, $token: String!){
	floor(id:$id,token: $token){
		id
    name
    name_ja
    service
    description
    image
    items
    width
    length
  }
}`;let q=(()=>{class p{constructor(t,a){this.http=t,this.apollo=a}getSpaces(t){let a={name:"",service:"All",token:localStorage.getItem("token"),limit:0,start:0};return t&&(t.name&&(a.name=t.name),t.service&&(a.service=t.service),t.limit&&(a.limit=t.limit),t.start&&(a.start=t.start)),this.apollo.query({query:N,variables:a})}getSpaceDetail(t){return this.apollo.query({query:j,variables:{id:t,token:localStorage.getItem("token")}})}deleteSpace(t){return this.apollo.mutate({mutation:U,variables:{token:localStorage.getItem("token"),Id:t}})}getSpaceEncodedData(t,a){return this.http.get("http://3d.optimizer.vn/json/?w="+t.toString()+"&h="+a.toString())}createSpace(t){return this.apollo.mutate({mutation:T,variables:{data:t.data,description:t.description,image:"",items:"",name:t.name,nameja:t.name,service:t.service,token:localStorage.getItem("token"),width:t.width,length:t.length}})}updateSpace(t){return this.apollo.mutate({mutation:P,variables:{id:t.id,description:t.description,name:t.name,nameja:t.nameja,service:t.service,token:localStorage.getItem("token")}})}getCategories(){return{status:200,data:_}}getServiceTypes(){return C}getPublishedSpaces(){let t={status:200,count:0,data:[]};for(let a of I)"published"==a.status&&(t.data.push(a),t.count++);return t}getSafeName(t){let a="";for(a=t.toLocaleLowerCase();1==a.includes(" ");)a=a.replace(" ","_");return a}}return p.\u0275fac=function(t){return new(t||p)($.LFG(F.eN),$.LFG(r._M))},p.\u0275prov=$.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},8053:(k,v,s)=>{s.d(v,{C:()=>S});var r=s(8274);let S=(()=>{class l{constructor(){}setLang(o){let g=localStorage.getItem("lang");g?o.use(g):(localStorage.setItem("lang","en"),o.use("en"))}}return l.\u0275fac=function(o){return new(o||l)},l.\u0275prov=r.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);