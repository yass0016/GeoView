window.plugins=window.plugins||{},window.plugins.detailsPanel=class{buttonPanel=null;translations={"en-CA":{detailsPanel:"Details",nothing_found:"Nothing found",action_back:"Back"},"fr-CA":{detailsPanel:"Détails",nothing_found:"Aucun résultat",action_back:"Retour"}};added=()=>{const{api:e,react:a,makeStyles:t,translate:n}=this,{mapId:i}=this.props,s=this.createElement,{useState:l,useEffect:r,useCallback:o}=a,{useTranslation:c}=n,{language:d}=e.map(i),u=t((e=>({mainContainer:{display:"flex",flexDirection:"row"},layersContainer:{overflow:"hidden",overflowY:"auto",width:"100%"},layerItem:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"5px 0",padding:"10px 5px",boxSizing:"content-box","&:hover":{cursor:"pointer",backgroundColor:"#c9c9c9"},zIndex:1e3},layerParentText:{fontSize:"16px",fontWeight:"bold"},layerCountTextContainer:{display:"flex",alignItems:"center",width:"100%"},layerFeatureCount:{display:"flex",justifyContent:"center",alignItems:"center",width:"32px",minWidth:"32px",height:"32px",boxShadow:"0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%)",marginRight:"10px",color:"black",fontSize:"16px",fontWeight:"bold"},layerItemText:{fontSize:"14px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},featuresContainer:{overflow:"hidden",overflowY:"auto",width:"100%"},featureItem:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"5px 0",padding:"10px 5px",boxSizing:"content-box","&:hover":{cursor:"pointer",backgroundColor:"#c9c9c9"},zIndex:1e3},featureIconTextContainer:{display:"flex",alignItems:"center",width:"100%"},featureItemIconContainer:{display:"flex",justifyContent:"center",alignItems:"center",width:"32px",minWidth:"32px",height:"32px",boxShadow:"0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%)"},featureItemIcon:{},featureItemText:{display:"inline-block",width:"100%",fontWeight:"400",marginLeft:"10px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"16px"},featureInfoContainer:{},featureInfoHeader:{display:"flex",alignItems:"center"},featureInfoHeaderIconContainer:{display:"flex",justifyContent:"center",alignItems:"center",width:"32px",minWidth:"32px",height:"32px",boxShadow:"0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%)"},featureInfoHeaderIcon:{},featureInfoHeaderText:{marginLeft:"10px",width:"100%",fontSize:18},featureInfoItemsContainer:{display:"flex",flexDirection:"column",marginTop:20},featureInfoItem:{display:"flex",flexDirection:"column",margin:"5px 0"},featureInfoItemKey:{fontWeight:"bold",fontSize:16},featureInfoItemValue:{fontSize:16}}))),p=(e,a)=>{let t=null;return e&&e.symbol?t=e.symbol:e&&e.uniqueValueInfos&&e.uniqueValueInfos.length>0&&(t=e.uniqueValueInfos.filter((t=>t.value===(a[e.field1]||a[e.field2]||a[e.field3])))[0].symbol),t},f=e=>{const a=u();return s("div",{className:a.layersContainer},Object.keys(e.layersData).map((t=>{const n=e.layersData[t];return s("div",{key:n.id},Object.keys(n.layers).map(((t,i)=>{const{layer:l,layerData:r,groupLayer:o,displayField:c,fieldAliases:d,renderer:u}=n.layers[t];return s("div",{key:i},o?s("div",{className:a.layerParentText,title:l.name},l.name):s("div",{className:a.layerItem,onClick:r.length>0?a=>{e.selectLayer(n.layers[t]),1===r.length&&e.selectFeature({attributes:r[0].attributes,displayField:c,fieldAliases:d,symbol:p(u,r[0].attributes)})}:null},s("div",{className:a.layerCountTextContainer},s("span",{className:a.layerFeatureCount},r.length),s("div",{className:a.layerItemText,title:l.name},l.name))))})))})))},y=e=>{const{displayField:a,fieldAliases:t,layerData:n,renderer:i}=e.selectedLayer,l=u(),{t:o}=c();return r((()=>{this.buttonPanel.panel.addActionButton("back",o("action_back"),'<i class="material-icons">keyboard_backspace</i>',(()=>{e.setPanel(!0,!1,!1)}))}),[]),n.length>0?s("div",{className:l.featuresContainer},n.map(((n,r)=>{const{attributes:c}=n,d=p(i,c),u=c[a].length>0?`${c[a]}`:`${c.OBJECTID}`;return s("div",{key:r,tabIndex:"-1"},s("div",{className:l.featureItem,onClick:n=>{this.buttonPanel.panel.addActionButton("back",o("action_back"),'<i class="material-icons">keyboard_backspace</i>',(()=>{e.selectLayer()})),e.selectFeature({attributes:c,displayField:a,fieldAliases:t,symbol:d})}},s("div",{className:l.featureIconTextContainer},s("div",{className:l.featureItemIconContainer},d.imageData?s("img",{className:l.featureItemIcon,src:`data:${d.contentType};base64, ${d.imageData}`}):s("div",{className:l.featureItemIcon})),s("span",{className:l.featureItemText,title:u},u))))}))):s("div",{className:l.featureItemText},o("nothing_found"))},m=e=>{const{displayField:a,fieldAliases:t,attributes:n,symbol:i}=e.selectedFeature,l=u(),{t:o}=c();return r((()=>{this.buttonPanel.panel.addActionButton("back",o("action_back"),'<i class="material-icons">keyboard_backspace</i>',(()=>{e.setPanel(!1,!0,!1)}))}),[]),s("div",{className:l.featureInfoContainer},s("div",{className:l.featureInfoHeader},s("div",{className:l.featureInfoHeaderIconContainer},i.imageData?s("img",{className:l.featureInfoHeaderIcon,src:`data:${i.contentType};base64, ${i.imageData}`}):s("div",{className:l.featureInfoHeaderIcon})),s("span",{className:l.featureInfoHeaderText},n[a].length>0?`${n[a]}`:`${n.OBJECTID}`)),s("div",{className:l.featureInfoItemsContainer},Object.keys(n).map((e=>{const a=t[e],i=n[e];return i.length>0&&"OBJECTID"!==a&&"SHAPE"!==a&&s("div",{className:l.featureInfoItem,key:e},s("span",{className:l.featureInfoItemKey},a),s("span",{className:l.featureInfoItemValue},i))}))))},x={tooltip:this.translations[d].detailsPanel,icon:'<i class="material-icons">details</i>',visible:!1},g={title:this.translations[d].detailsPanel,icon:'<i class="material-icons">details</i>',content:()=>{const[a,t]=l({}),[n,c]=l({}),[d,x]=l({}),[g,b]=l(!1),[h,I]=l(!1),[w,v]=l(!1),k=u(),C=e.map(i).map,N=async e=>{const a=await fetch(`${e}?f=json`);return await a.json()},P=(e,a,t)=>{this.buttonPanel.panel.removeActionButton("back"),b(e),I(a),v(t)},S=o((()=>{P(!0,!1,!1)}),[]),D=o((e=>{c(e),P(!1,!0,!1)}),[c]),T=o((e=>{x(e),P(!1,!1,!0)}),[x]),$=e=>{const a={};return e&&e.forEach((e=>{const{name:t,alias:n}=e;a[t]=n})),a},F=(e,a,t,n)=>{const{layers:i}=a[e.id];i[`${t.id}-${t.name.replace(/\s+/g,"-").toLowerCase()}`]={layer:t,groupLayer:n,layerData:[],displayField:t.displayField||t.displayFieldName||"",fieldAliases:$(t.fields),renderer:t.drawingInfo&&t.drawingInfo.renderer},a[e.id].layers=i},A=o(((e,n)=>{const i=a[e],{layers:s}=i;s[n].layerData=[],t((a=>({...a,[e]:{...a[e],layers:s}})))}),[a]),L=o((async e=>{const n=[];for(let i=0;i<Object.keys(a).length;i++){const s=Object.keys(a)[i],l=a[s],{layer:r,layers:o}=l;for(let a=0;a<Object.keys(o).length;a++){const i=Object.keys(o)[a];if(!o[i].groupLayer){A(s,i);const a=r._map.getSize(),l=r._map.getBounds(),c={xmin:l.getSouthWest().lng,ymin:l.getSouthWest().lat,xmax:l.getNorthEast().lng,ymax:l.getNorthEast().lat,spatialReference:{wkid:4326}},d=`${r.mapService.options.url}identify?f=json&tolerance=3&mapExtent=${c.xmin},${c.ymin},${c.xmax},${c.ymax}&imageDisplay=${a.x},${a.y},96&layers=visible:${o[i].layer.id}&returnFieldName=true&sr=4326&returnGeometry=true&geometryType=esriGeometryPoint&geometry=${e.lng},${e.lat}`,u=await fetch(d),p=await u.json();p&&p.results&&p.results.length>0&&(n.push({layer:o[i],entries:p.results}),o[i].layerData.push(...p.results),t((e=>({...e,[s]:{...e[s],layers:o}}))))}}}1===n.length?(D(n[0].layer),1===n[0].entries.length&&T({attributes:n[0].entries[0].attributes,displayField:n[0].layer.displayField,fieldAliases:n[0].layer.fieldAliases,symbol:p(n[0].layer.renderer,n[0].entries[0].attributes)})):S(),this.buttonPanel.panel.open()}),[T,D,S,A,a]);return r((()=>{const a=e.map(i).layers,n={};a.forEach((async e=>{if(n[e.id]={id:e.id,type:e.type,layer:e.layer,layers:{}},"ogcWMS"===e.type){const a=await N(e.layer.mapService.options.url+0);F(e,n,a,!1)}else if("esriFeature"===e.type){const a=await N(e.layer.options.url);F(e,n,a,!1)}else if("esriDynamic"===e.type){const a=e.layer.getLayers(),t={};a.forEach((e=>{t[e]=e})),e.layer.metadata((async(a,i)=>{if(!a&&i.layers)for(let a=0;a<i.layers.length;a++){const s=i.layers[a];if(s.id in t){const a=await N(e.layer.options.url+s.id);if(F(e,n,a,null!==s.subLayerIds&&void 0!==s.subLayerIds),s.subLayerIds)for(let a=0;a<s.subLayerIds.length;a++){const t=s.subLayerIds[a],i=await N(e.layer.options.url+t);F(e,n,i,!1)}}}}))}})),t(n)}),[]),r((()=>(C.on("click",(async e=>{L(e.latlng)})),e.event.on("details_panel/crosshair_enter",(function(e){e.handlerName===i&&L(e.latlng)}),i),()=>{C.off("click"),e.event.off("details_panel/crosshair_enter")})),[L,C]),s("div",{className:k.mainContainer},g&&s(f,{layersData:a,selectFeature:T,selectLayer:D}),h&&s(y,{selectedLayer:n,selectFeature:T,setPanel:P}),w&&s(m,{selectedFeature:d,setPanel:P}))},width:300};this.buttonPanel=e.map(i).createAppbarPanel(x,g,null)};removed=()=>{const{mapId:e}=this.props;this.api.map(e).removeAppbarPanel(this.buttonPanel.id)}};