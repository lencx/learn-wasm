import{r as n}from"./vendor.77fab89d.js";let e,t=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});t.decode();let r=null;function _(){return null!==r&&r.buffer===e.memory.buffer||(r=new Uint8Array(e.memory.buffer)),r}function o(n,e){return t.decode(_().subarray(n,n+e))}const i=new Array(32).fill(void 0);i.push(void 0,null,!0,!1);let c=i.length;function a(n){c===i.length&&i.push(i.length+1);const e=c;return c=i[e],i[e]=n,e}function u(n){return i[n]}function f(n){const e=u(n);return function(n){n<36||(i[n]=c,c=n)}(n),e}let b=0,s=new TextEncoder("utf-8");const l="function"==typeof s.encodeInto?function(n,e){return s.encodeInto(n,e)}:function(n,e){const t=s.encode(n);return e.set(t),{read:n.length,written:t.length}};function w(n,e,t){if(void 0===t){const t=s.encode(n),r=e(t.length);return _().subarray(r,r+t.length).set(t),b=t.length,r}let r=n.length,o=e(r);const i=_();let c=0;for(;c<r;c++){const e=n.charCodeAt(c);if(e>127)break;i[o+c]=e}if(c!==r){0!==c&&(n=n.slice(c)),o=t(o,r,r=c+3*n.length);const e=_().subarray(o+c,o+r);c+=l(n,e).written}return b=c,o}let g=null;function d(){return null!==g&&g.buffer===e.memory.buffer||(g=new Int32Array(e.memory.buffer)),g}function m(n,t,r){e._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hcd8a63704665c6ba(n,t,a(r))}function y(n){return function(){try{return n.apply(this,arguments)}catch(t){e.__wbindgen_exn_store(a(t))}}}async function h(n){void 0===n&&(n=new URL("/assets/rsw~excel-read_bg.c977b4e9.wasm",location.origin));const t={wbg:{}};t.wbg.__wbindgen_string_new=function(n,e){return a(o(n,e))},t.wbg.__wbindgen_object_drop_ref=function(n){f(n)},t.wbg.__wbindgen_number_new=function(n){return a(n)},t.wbg.__wbindgen_jsval_eq=function(n,e){return u(n)===u(e)},t.wbg.__wbg_log_068a3c36564bf7c3=function(n){console.log(f(n))},t.wbg.__wbg_alert_c3d55e19ff74a766=function(n,e){alert(o(n,e))},t.wbg.__wbindgen_json_serialize=function(n,t){const r=u(t);var _=w(JSON.stringify(void 0===r?null:r),e.__wbindgen_malloc,e.__wbindgen_realloc),o=b;d()[n/4+1]=o,d()[n/4+0]=_},t.wbg.__wbg_name_8c2d827253d2d645=function(n,t){var r=w(u(t).name,e.__wbindgen_malloc,e.__wbindgen_realloc),_=b;d()[n/4+1]=_,d()[n/4+0]=r},t.wbg.__wbg_arrayBuffer_6f7692f98cd5a19f=function(n){return a(u(n).arrayBuffer())},t.wbg.__wbg_slice_aa7157d53165612d=y((function(n){return a(u(n).slice())})),t.wbg.__wbindgen_cb_drop=function(n){const e=f(n).original;if(1==e.cnt--)return e.a=0,!0;return!1},t.wbg.__wbg_new_8528c110a833413f=function(){return a(new Array)},t.wbg.__wbg_push_17a514d8ab666103=function(n,e){return u(n).push(u(e))},t.wbg.__wbg_call_f5e0576f61ee7461=y((function(n,e,t){return a(u(n).call(u(e),u(t)))})),t.wbg.__wbg_new_318c9ff153c0c293=function(){return a(new Map)},t.wbg.__wbg_set_26d0cf80e2a3eca6=function(n,e,t){return a(u(n).set(u(e),u(t)))},t.wbg.__wbg_fromEntries_8be754b4532b35f4=y((function(n){return a(Object.fromEntries(u(n)))})),t.wbg.__wbg_new_3ea8490cd276c848=function(n,t){try{var r={a:n,b:t},_=new Promise(((n,t)=>{const _=r.a;r.a=0;try{return function(n,t,r,_){e.wasm_bindgen__convert__closures__invoke2_mut__he8bd654e12b4ee40(n,t,a(r),a(_))}(_,r.b,n,t)}finally{r.a=_}}));return a(_)}finally{r.a=r.b=0}},t.wbg.__wbg_resolve_778af3f90b8e2b59=function(n){return a(Promise.resolve(u(n)))},t.wbg.__wbg_then_367b3e718069cfb9=function(n,e){return a(u(n).then(u(e)))},t.wbg.__wbg_then_ac66ca61394bfd21=function(n,e,t){return a(u(n).then(u(e),u(t)))},t.wbg.__wbg_buffer_ebc6c8e75510eae3=function(n){return a(u(n).buffer)},t.wbg.__wbg_new_135e963dedf67b22=function(n){return a(new Uint8Array(u(n)))},t.wbg.__wbg_set_4a5072a31008e0cb=function(n,e,t){u(n).set(u(e),t>>>0)},t.wbg.__wbg_length_317f0dd77f7a6673=function(n){return u(n).length},t.wbg.__wbindgen_string_get=function(n,t){const r=u(t);var _="string"==typeof r?r:void 0,o=null==_?0:w(_,e.__wbindgen_malloc,e.__wbindgen_realloc),i=b;d()[n/4+1]=i,d()[n/4+0]=o},t.wbg.__wbindgen_throw=function(n,e){throw new Error(o(n,e))},t.wbg.__wbindgen_memory=function(){return a(e.memory)},t.wbg.__wbindgen_closure_wrapper187=function(n,t,r){return a(function(n,t,r,_){const o={a:n,b:t,cnt:1,dtor:r},i=(...n)=>{o.cnt++;const t=o.a;o.a=0;try{return _(t,o.b,...n)}finally{0==--o.cnt?e.__wbindgen_export_2.get(o.dtor)(t,o.b):o.a=t}};return i.original=o,i}(n,t,59,m))},("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n));const{instance:r,module:_}=await async function(n,e){if("function"==typeof Response&&n instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,e)}catch(t){if("application/wasm"==n.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const r=await n.arrayBuffer();return await WebAssembly.instantiate(r,e)}{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}(await n,t);return e=r.exports,h.__wbindgen_wasm_module=_,e.__wbindgen_start(),e}function p(){const[t,r]=n.useState({});n.useEffect((()=>{h()}));return n.createElement("div",{className:"excel-read"},n.createElement("input",{type:"file",onChange:async n=>{(function(n,t,r,_){return f(e.read_excel_file(a(n),a(t),a(r),a(_)))})(n.target.files[0],[1],[],"").then((n=>{r(n)})).catch((n=>{console.error(n)}))}}),n.createElement("pre",null,JSON.stringify(t,null,2)))}export default p;