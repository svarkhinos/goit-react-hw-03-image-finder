(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{18:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1Z43_"}},19:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2uo6Q","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__3o4EA"}},20:function(e,t,a){e.exports={overlay:"Modal_overlay__BT0jQ",modal:"Modal_modal__1LGpl"}},25:function(e,t,a){e.exports={Button:"Button_Button__a41wl"}},31:function(e,t,a){},32:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var r,n=a(0),o=a.n(n),c=a(3),l=a.n(c),s=(a(31),a(4)),i=a(5),u=a(7),h=a(6),d=(a(32),a(11)),m=a(8),p=a.n(m),j=["title","titleId"];function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},b.apply(this,arguments)}function g(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function f(e,t){var a=e.title,o=e.titleId,c=g(e,j);return n.createElement("svg",b({fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"30px",height:"30px",ref:t,"aria-labelledby":o},c),a?n.createElement("title",{id:o},a):null,r||(r=n.createElement("path",{d:"M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"})))}var O=n.forwardRef(f),y=(a.p,a(33),a(1)),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchValue:""},e.handleNameChange=function(t){e.setState({searchValue:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){var a=e.state.searchValue;t.preventDefault(),""!==a.trim()?(e.props.onSubmit(e.state.searchValue),e.setState({searchValue:""})):Object(d.b)("Enter your request")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.searchValue;return Object(y.jsx)("header",{className:p.a.Searchbar,children:Object(y.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.SearchForm,children:[Object(y.jsx)("button",{type:"submit",className:p.a.SearchFormButton,children:Object(y.jsx)(O,{})}),Object(y.jsx)("input",{className:p.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleNameChange})]})})}}]),a}(n.Component),S=v,x=a(12),w=a(18),_=a.n(w),I=a(19),C=a.n(I);var k=function(e){var t=e.result,a=e.openModal,r=e.srcSet;function n(e){a(),r(e)}return Object(y.jsx)(y.Fragment,{children:t.map((function(e){return Object(y.jsx)("li",{onClick:n,className:C.a.ImageGalleryItem,children:Object(y.jsx)("img",{src:e.webformatURL,"data-source":e.largeImageURL,alt:"",className:C.a.ImageGalleryItemImage})},e.id)}))})},M=a(20),F=a.n(M),N=document.querySelector("#modal-root"),B=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(y.jsx)("div",{className:F.a.overlay,onClick:this.handleBackdropClick,children:Object(y.jsx)("div",{className:F.a.modal,children:this.props.children})}),N)}}]),a}(n.Component),G=B,L=a(24),E=a.n(L),V=(a(55),a(25)),A=a.n(V);var D=function(e){var t=e.loadMore;return Object(y.jsx)("button",{type:"button",onClick:t,className:A.a.Button,children:"Load more"})},P=a(26),q=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={result:[],status:"idle",error:null,showModal:!1,src:"",page:1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.srcSet=function(t){e.setState((function(){return{src:t.target.dataset.source}}))},e.onLoadMoreClick=function(){e.setState((function(e){return{page:e.page+1}})),P.animateScroll.scrollToBottom({duration:2e3})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a,r=this,n=e.searchValue,o=this.props.searchValue,c=t.page;a=n!==o?this.props.page:this.state.page,n===o&&c===a||(this.setState({status:"pending"}),fetch("https://pixabay.com/api/?q=".concat(o,"&page=").concat(a,"&key=21915406-973315f608c7e35a5d0268cdc&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Nothing was found"))})).then((function(e){var t=e.hits;if(0===t.length)return Promise.reject(new Error("Nothing was found"));n===o&&1!==a&&r.setState({result:[].concat(Object(x.a)(r.state.result),Object(x.a)(t)),status:"resolved"}),n!==o&&(r.setState({result:[],page:1}),r.setState({result:Object(x.a)(t),status:"resolved"}))})).catch((function(e){return r.setState({error:e,status:"rejected"})})))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.result,r=e.showModal,n=e.status,o=e.src;return"idle"===n?Object(y.jsx)("div",{style:{textAlign:"center"},children:"Enter your search"}):"pending"===n?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("ul",{className:_.a.ImageGallery,children:Object(y.jsx)(k,{srcSet:this.srcSet,openModal:this.toggleModal,result:a})}),Object(y.jsx)(E.a,{style:{marginLeft:"auto",marginRight:"auto"},type:"Grid",color:"#00BFFF",height:100,width:100,timeout:3e3})]}):"rejected"===n?Object(y.jsx)("h1",{children:t.message}):"resolved"===n?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("ul",{className:_.a.ImageGallery,children:Object(y.jsx)(k,{srcSet:this.srcSet,openModal:this.toggleModal,result:a})}),r&&Object(y.jsx)(G,{onClose:this.toggleModal,children:Object(y.jsx)("img",{src:o,alt:""})}),Object(y.jsx)(D,{loadMore:this.onLoadMoreClick})]}):void 0}}]),a}(n.Component),z=q,R=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchValue:"",page:1},e.handleSearchFormSubmit=function(t){e.setState({searchValue:t})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.searchValue,a=e.page;return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(S,{onSubmit:this.handleSearchFormSubmit}),Object(y.jsx)(z,{searchValue:t,page:a}),Object(y.jsx)(d.a,{autoClose:3e3,position:"top-center"})]})}}]),a}(n.Component),T=R;l.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(T,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__lvAmf",SearchForm:"Searchbar_SearchForm__1Jc3_",SearchFormButton:"Searchbar_SearchFormButton__2N22Z",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__Iqz5k",SearchFormInput:"Searchbar_SearchFormInput__3jox_"}}},[[64,1,2]]]);
//# sourceMappingURL=main.1adce0a3.chunk.js.map