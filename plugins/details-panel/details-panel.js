window.plugins=window.plugins||{},window.plugins.detailsPanel=class{buttonPanel=null;translations={"en-CA":{detailsPanel:"Details",nothing_found:"Nothing found",action_back:"Back"},"fr-CA":{detailsPanel:"Détails",nothing_found:"Aucun résultat",action_back:"Retour"}};added=()=>{const{api:e,react:a,makeStyles:t,translate:n}=this,{mapId:s}=this.props,i=this.createElement,{useState:r,useEffect:l,useCallback:o}=a,{useTranslation:c}=n,{language:d}=e.map(s),p=t((e=>({mainContainer:{display:"flex",flexDirection:"row"},layersContainer:{overflow:"hidden",overflowY:"auto",width:"100%"},layerItem:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"5px 0",padding:"10px 5px",boxSizing:"content-box","&:hover":{cursor:"pointer",backgroundColor:"#c9c9c9"},zIndex:1e3},layerCountTextContainer:{display:"flex",justifyContent:"space-around",alignItems:"center"},layerFeatureCount:{padding:"2px 8px",borderRadius:"50%",backgroundColor:"yellow",color:"black",marginRight:"10px"},layerItemText:{fontSize:"16px",fontWeight:"bold"},featuresContainer:{overflow:"hidden",overflowY:"auto",width:"100%"},featureItem:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"5px 0",padding:"10px 5px",boxSizing:"content-box","&:hover":{cursor:"pointer",backgroundColor:"#c9c9c9"},zIndex:1e3},featureIconTextContainer:{display:"flex",alignItems:"center",width:"100%"},featureItemIconContainer:{display:"flex",justifyContent:"center",alignItems:"center",width:"32px",height:"32px",boxShadow:"0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%)"},featureItemIcon:{},featureItemText:{display:"inline-block",width:"100%",fontWeight:"400",marginLeft:"10px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"16px"},featureInfoContainer:{},featureInfoHeader:{display:"flex",alignItems:"center"},featureInfoHeaderIconContainer:{display:"flex",justifyContent:"center",alignItems:"center",width:"32px",height:"32px",boxShadow:"0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%)"},featureInfoHeaderIcon:{},featureInfoHeaderText:{marginLeft:"10px",width:"100%",fontSize:18},featureInfoItemsContainer:{display:"flex",flexDirection:"column",marginTop:20},featureInfoItem:{display:"flex",flexDirection:"column",margin:"5px 0"},featureInfoItemKey:{fontWeight:"bold",fontSize:16},featureInfoItemValue:{fontSize:16}}))),u=e=>{const a=p(),{t}=c();return i("div",{className:a.layersContainer},Object.keys(e.layersData).map((t=>{const n=e.layersData[t];return i("div",{key:n.id},Object.keys(n.layers).map(((t,s)=>{const{layer:r,layerData:l}=n.layers[t];return i("div",{key:s},i("div",{className:a.layerItem,onClick:a=>{e.selectLayer(n.layers[t])}},i("div",{className:a.layerCountTextContainer},i("span",{className:a.layerFeatureCount},l.length),i("div",{className:a.layerItemText,title:r.name},r.name))))})))})))},f=e=>{const{displayField:a,fieldAliases:t,layerData:n,symbol:s}=e.selectedLayer,r=p(),{t:o}=c();return l((()=>{this.buttonPanel.panel.addActionButton("back",o("action_back"),'<i class="material-icons">keyboard_backspace</i>',(()=>{e.setPanel(!0,!1,!1)}))}),[]),n.length>0?i("div",{className:r.featuresContainer},n.map(((n,l)=>{const{attributes:c}=n,d=c[a].length>0?`${c[a]}`:`${c.OBJECTID}`;return i("div",{key:l,tabIndex:"-1"},i("div",{className:r.featureItem,onClick:n=>{this.buttonPanel.panel.addActionButton("back",o("action_back"),'<i class="material-icons">keyboard_backspace</i>',(()=>{e.selectLayer()})),e.selectFeature({attributes:c,displayField:a,fieldAliases:t,symbol:s})}},i("div",{className:r.featureIconTextContainer},i("div",{className:r.featureItemIconContainer},i("img",{className:r.featureItemIcon,src:`data:${s.contentType};base64, ${s.imageData}`})),i("span",{className:r.featureItemText,title:d},d))))}))):i("div",{className:r.featuresContainer},o("nothing_found"))},y=e=>{const{displayField:a,fieldAliases:t,attributes:n,symbol:s}=e.selectedFeature,r=p(),{t:o}=c();return l((()=>{this.buttonPanel.panel.addActionButton("back",o("action_back"),'<i class="material-icons">keyboard_backspace</i>',(()=>{e.setPanel(!1,!0,!1)}))}),[]),i("div",{className:r.featureInfoContainer},i("div",{className:r.featureInfoHeader},i("div",{className:r.featureInfoHeaderIconContainer},i("img",{className:r.featureInfoHeaderIcon,src:`data:${s.contentType};base64, ${s.imageData}`})),i("span",{className:r.featureInfoHeaderText},n[a].length>0?`${n[a]}`:`${n.OBJECTID}`)),i("div",{className:r.featureInfoItemsContainer},Object.keys(n).map((e=>{const a=t[e],s=n[e];return i("div",{className:r.featureInfoItem,key:e},i("span",{className:r.featureInfoItemKey},a),i("span",{className:r.featureInfoItemValue},s))}))))},m={tooltip:this.translations[d].detailsPanel,icon:'<i class="material-icons">details</i>',visible:!1},g={title:this.translations[d].detailsPanel,icon:'<i class="material-icons">details</i>',content:()=>{const[a,t]=r({}),[n,c]=r({}),[d,m]=r({}),[g,x]=r(!0),[b,I]=r(!1),[h,w]=r(!1),C=p(),k=e.map(s).map,v=async e=>{const a=await fetch(`${e}?f=json`);return await a.json()},N=(e,a,t)=>{this.buttonPanel.panel.removeActionButton("back"),x(e),I(a),w(t)},$=o((()=>{N(!0,!1,!1)}),[]),P=o((e=>{N(!1,!0,!1),c(e)}),[c]),D=o((e=>{N(!1,!1,!0),m(e)}),[m]),S=e=>{const a={};return e&&e.forEach((e=>{const{name:t,alias:n}=e;a[t]=n})),a},T=(e,a,t)=>{const{layers:n}=a[e.id];n[`${t.id}-${t.name.replace(/\s+/g,"-").toLowerCase()}`]={layer:t,layerData:[],displayField:t.displayField||t.displayFieldName||"",fieldAliases:S(t.fields),symbol:t.drawingInfo&&t.drawingInfo.renderer&&t.drawingInfo.renderer.symbol},a[e.id].layers=n},j=o(((e,n)=>{const s=a[e],{layers:i}=s;i[n].layerData=[],t((a=>({...a,[e]:{...a[e],layers:i}})))}),[a]);return l((()=>{const a=e.map(s).layers,n={};a.forEach((async e=>{if(n[e.id]={id:e.id,type:e.type,layer:e.layer,layers:{}},"ogcWMS"===e.type){const a=await v(e.layer.mapService.options.url+0);T(e,n,a)}else if("esriFeature"===e.type){const a=await v(e.layer.options.url);T(e,n,a)}else"esriDynamic"===e.type&&e.layer.metadata(((a,t)=>{a||t.layers&&t.layers.forEach((async a=>{const t=await v(e.layer.options.url+a.id);T(e,n,t)}))}))})),t(n)}),[]),l((()=>(k.on("click",(e=>{Object.keys(a).forEach((n=>{const s=a[n],{layer:i,layers:r}=s;Object.keys(r).forEach((async a=>{j(n,a);const s=i._map.getSize(),l=i._map.getBounds(),o=l.getSouthWest().lng,c=l.getSouthWest().lat,d=l.getNorthEast().lng,p=l.getNorthEast().lat,u=`${i.mapService.options.url}identify?f=json&tolerance=3&mapExtent=${o},${c},${d},${p}&imageDisplay=${s.x},${s.y},96&layers=visible:${r[a].layer.id}&returnFieldName=true&sr=4326&returnGeometry=true&geometryType=esriGeometryPoint&geometry=${e.latlng.lng},${e.latlng.lat}`,f=await fetch(u),y=await f.json();y&&y.results&&y.results.length>0&&(r[a].layerData.push(...y.results),t((e=>({...e,[n]:{...e[n],layers:r}}))))}))})),$(),this.buttonPanel.panel.open()})),()=>{k.off("click")})),[$,j,a,k]),i("div",{className:C.mainContainer},g&&i(u,{layersData:a,selectLayer:P}),b&&i(f,{selectedLayer:n,selectFeature:D,setPanel:N}),h&&i(y,{selectedFeature:d,setPanel:N}))},width:300};this.buttonPanel=e.map(s).createAppbarPanel(m,g,null)};removed=()=>{const{mapId:e}=this.props;this.api.map(e).removeAppbarPanel(this.buttonPanel.id)}};