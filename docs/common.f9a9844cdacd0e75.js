"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[592],{411:(s,r,a)=>{a.d(r,{b:()=>i});const i=[{_id:1,name:"Office",value:"Office"},{_id:2,name:"EC Shop",value:"EC Shop"},{_id:3,name:"Service Provider",value:"Service Provider"}]},9339:(s,r,a)=>{a.d(r,{E:()=>k});var i=a(162),c=a(411),o=a(8274),m=a(529);const g=[{_id:"1",name:"Restaurants"},{_id:"2",name:"Moutains"},{_id:"3",name:"Rivers"},{_id:"4",name:"Jungles"},{_id:"5",name:"Forests"},{_id:"6",name:"Islands"}],d=c.b,u=i.Ps`query searchfloors($name: String!, $service: String!, $token: String!, $limit: Int!, $start: Int!){
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
}`,p=i.Ps`query paidFloors($token:String!,$limit:Int!,$start:Int!){
  paidfloors(
      token: $token,
		limit:$limit,
    start:$start
  ){
    total
    items{
      id
      image
      name
      modified
      created
      service
      width
      length
    }
  }
}`,S=i.Ps`
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
`,$=i.Ps`
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
`,h=i.Ps`query floor($id: String!, $token: String!){
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
}`;let k=(()=>{class n{constructor(e,t){this.http=e,this.apollo=t}get token(){return localStorage.getItem("token")}getSpaces(e){let t={name:"",service:"All",token:localStorage.getItem("token"),limit:0,start:0};return e&&(e.name&&(t.name=e.name),e.service&&(t.service=e.service),e.limit&&(t.limit=e.limit),e.start&&(t.start=e.start)),this.apollo.query({query:u,variables:t})}getSpaceDetail(e){return this.apollo.query({query:h,variables:{id:e,token:localStorage.getItem("token")}})}deleteSpace(e){return this.apollo.mutate({mutation:v,variables:{token:localStorage.getItem("token"),Id:e}})}getSpaceEncodedData(e,t){return this.http.get("http://3d.optimizer.vn/json/?w="+e.toString()+"&h="+t.toString())}createSpace(e){return this.apollo.mutate({mutation:S,variables:{data:e.data,description:e.description,image:"",items:"",name:e.name,nameja:e.name,service:e.service,token:localStorage.getItem("token"),width:e.width,length:e.length}})}updateSpace(e){return this.apollo.mutate({mutation:$,variables:{id:e.id,description:e.description,name:e.name,nameja:e.nameja,service:e.service,token:localStorage.getItem("token")}})}getCategories(){return{status:200,data:g}}getServiceTypes(){return d}getPublishedSpaces(e){let t={token:this.token,limit:0,start:0};return e&&(e.limit&&(t.limit=e.limit),e.start&&(t.start=e.start)),this.apollo.query({query:p,variables:t})}getSafeName(e){let t="";for(t=e.toLocaleLowerCase();1==t.includes(" ");)t=t.replace(" ","_");return t}}return n.\u0275fac=function(e){return new(e||n)(o.LFG(m.eN),o.LFG(i._M))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);