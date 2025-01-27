'use strict';var c=require('react'),reactSlot=require('@radix-ui/react-slot'),classVarianceAuthority=require('class-variance-authority'),lucideReact=require('lucide-react'),clsx=require('clsx'),tailwindMerge=require('tailwind-merge'),l=require('@radix-ui/react-alert-dialog'),d=require('@radix-ui/react-toast');function _interopNamespace(e){if(e&&e.__esModule)return e;var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k]}});}})}n.default=e;return Object.freeze(n)}var c__namespace=/*#__PURE__*/_interopNamespace(c);var l__namespace=/*#__PURE__*/_interopNamespace(l);var d__namespace=/*#__PURE__*/_interopNamespace(d);var $=Object.defineProperty,tt=Object.defineProperties;var et=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var W=(t,o,e)=>o in t?$(t,o,{enumerable:true,configurable:true,writable:true,value:e}):t[o]=e,i=(t,o)=>{for(var e in o||(o={}))k.call(o,e)&&W(t,e,o[e]);if(P)for(var e of P(o))z.call(o,e)&&W(t,e,o[e]);return t},u=(t,o)=>tt(t,et(o));var s=(t,o)=>{var e={};for(var r in t)k.call(t,r)&&o.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&P)for(var r of P(t))o.indexOf(r)<0&&z.call(t,r)&&(e[r]=t[r]);return e};function n(...t){return tailwindMerge.twMerge(clsx.clsx(t))}var x=classVarianceAuthority.cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",success:"bg-green-600 text-white hover:bg-green-700",warning:"bg-yellow-600 text-white hover:bg-yellow-700",info:"bg-blue-600 text-white hover:bg-blue-700"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9",xl:"h-12 rounded-md px-10 text-lg","2xl":"h-14 rounded-md px-12 text-xl"}},defaultVariants:{variant:"default",size:"default"}}),j=c__namespace.forwardRef((B,y)=>{var S=B,{className:t,variant:o,size:e,asChild:r=false,isLoading:a=false,children:m}=S,R=s(S,["className","variant","size","asChild","isLoading","children"]);return c__namespace.createElement(r?reactSlot.Slot:"button",i({className:n(x({variant:o,size:e,className:t})),ref:y,disabled:a||R.disabled},R),a?c__namespace.createElement(c__namespace.Fragment,null,c__namespace.createElement(lucideReact.Loader2,{className:"mr-2 h-4 w-4 animate-spin"}),m):m)});j.displayName="Button";var lt=classVarianceAuthority.cva("inline-flex items-center justify-center rounded-full transition-all duration-200 font-medium",{variants:{variant:{primary:"bg-primary text-white hover:bg-primary-hover",secondary:"bg-secondary text-white hover:bg-secondary-hover",outline:"border-2 border-primary text-primary hover:bg-primary hover:text-white",text:"text-primary hover:underline bg-transparent"},size:{small:"h-9 px-4 text-sm",normal:"h-11 px-6",medium:"h-12 px-8",large:"h-14 px-10 text-lg"},fullWidth:{true:"w-full",false:"w-auto"},withIcon:{true:"inline-flex items-center gap-2",false:""}},defaultVariants:{variant:"primary",size:"normal",fullWidth:false,withIcon:false}}),F=c__namespace.forwardRef((S,B)=>{var L=S,{className:t,variant:o,size:e,fullWidth:r,disabled:a,icon:m,children:R}=L,y=s(L,["className","variant","size","fullWidth","disabled","icon","children"]);return c__namespace.createElement("button",i({className:n(lt({variant:o,size:e,fullWidth:r,withIcon:!!m,className:t}),a&&"opacity-50 cursor-not-allowed pointer-events-none"),ref:B,disabled:a},y),R,m&&m)});F.displayName="StratejiButton";var mt=classVarianceAuthority.cva("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),ct=c__namespace.forwardRef((a,r)=>{var m=a,{className:t,variant:o}=m,e=s(m,["className","variant"]);return c__namespace.createElement("div",i({ref:r,role:"alert",className:n(mt({variant:o}),t)},e))});ct.displayName="Alert";var pt=c__namespace.forwardRef((r,e)=>{var a=r,{className:t}=a,o=s(a,["className"]);return c__namespace.createElement("h5",i({ref:e,className:n("mb-1 font-medium leading-none tracking-tight",t)},o))});pt.displayName="AlertTitle";var ft=c__namespace.forwardRef((r,e)=>{var a=r,{className:t}=a,o=s(a,["className"]);return c__namespace.createElement("div",i({ref:e,className:n("text-sm [&_p]:leading-relaxed",t)},o))});ft.displayName="AlertDescription";var Kt=l__namespace.Root,Zt=l__namespace.Trigger,ut=l__namespace.Portal,U=c__namespace.forwardRef((r,e)=>{var a=r,{className:t}=a,o=s(a,["className"]);return c__namespace.createElement(l__namespace.Overlay,u(i({className:n("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t)},o),{ref:e}))});U.displayName=l__namespace.Overlay.displayName;var vt=c__namespace.forwardRef((r,e)=>{var a=r,{className:t}=a,o=s(a,["className"]);return c__namespace.createElement(ut,null,c__namespace.createElement(U,null),c__namespace.createElement(l__namespace.Content,i({ref:e,className:n("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t)},o)))});vt.displayName=l__namespace.Content.displayName;var Tt=e=>{var r=e,{className:t}=r,o=s(r,["className"]);return c__namespace.createElement("div",i({className:n("flex flex-col space-y-2 text-center sm:text-left",t)},o))};Tt.displayName="AlertDialogHeader";var gt=e=>{var r=e,{className:t}=r,o=s(r,["className"]);return c__namespace.createElement("div",i({className:n("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t)},o))};gt.displayName="AlertDialogFooter";var yt=c__namespace.forwardRef((r,e)=>{var a=r,{className:t}=a,o=s(a,["className"]);return c__namespace.createElement(l__namespace.Title,i({ref:e,className:n("text-lg font-semibold",t)},o))});yt.displayName=l__namespace.Title.displayName;var Rt=c__namespace.forwardRef((r,e)=>{var a=r,{className:t}=a,o=s(a,["className"]);return c__namespace.createElement(l__namespace.Description,i({ref:e,className:n("text-sm text-muted-foreground",t)},o))});Rt.displayName=l__namespace.Description.displayName;var xt=c__namespace.forwardRef((r,e)=>{var a=r,{className:t}=a,o=s(a,["className"]);return c__namespace.createElement(l__namespace.Action,i({ref:e,className:n(x(),t)},o))});xt.displayName=l__namespace.Action.displayName;var At=c__namespace.forwardRef((r,e)=>{var a=r,{className:t}=a,o=s(a,["className"]);return c__namespace.createElement(l__namespace.Cancel,i({ref:e,className:n(x({variant:"outline"}),"mt-2 sm:mt-0",t)},o))});At.displayName=l__namespace.Cancel.displayName;var X=c__namespace.forwardRef((r,e)=>{var a=r,{className:t}=a,o=s(a,["className"]);return c__namespace.createElement("div",i({ref:e,className:n("rounded-xl border bg-card text-card-foreground shadow",t)},o))});X.displayName="Card";var G=c__namespace.forwardRef((r,e)=>{var a=r,{className:t}=a,o=s(a,["className"]);return c__namespace.createElement("div",i({ref:e,className:n("flex flex-col space-y-1.5 p-6",t)},o))});G.displayName="CardHeader";var Q=c__namespace.forwardRef((r,e)=>{var a=r,{className:t}=a,o=s(a,["className"]);return c__namespace.createElement("div",i({ref:e,className:n("font-semibold leading-none tracking-tight",t)},o))});Q.displayName="CardTitle";var Y=c__namespace.forwardRef((r,e)=>{var a=r,{className:t}=a,o=s(a,["className"]);return c__namespace.createElement("div",i({ref:e,className:n("text-sm text-muted-foreground",t)},o))});Y.displayName="CardDescription";var q=c__namespace.forwardRef((r,e)=>{var a=r,{className:t}=a,o=s(a,["className"]);return c__namespace.createElement("div",i({ref:e,className:n("p-6 pt-0",t)},o))});q.displayName="CardContent";var J=c__namespace.forwardRef((r,e)=>{var a=r,{className:t}=a,o=s(a,["className"]);return c__namespace.createElement("div",i({ref:e,className:n("flex items-center p-6 pt-0",t)},o))});J.displayName="CardFooter";var V=d__namespace.Provider,h=c__namespace.forwardRef((r,e)=>{var a=r,{className:t}=a,o=s(a,["className"]);return c__namespace.createElement(d__namespace.Viewport,i({ref:e,className:n("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t)},o))});h.displayName=d__namespace.Viewport.displayName;var ht=classVarianceAuthority.cva("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),D=c__namespace.forwardRef((a,r)=>{var m=a,{className:t,variant:o}=m,e=s(m,["className","variant"]);return c__namespace.createElement(d__namespace.Root,i({ref:r,className:n(ht({variant:o}),t)},e))});D.displayName=d__namespace.Root.displayName;var K=c__namespace.forwardRef((r,e)=>{var a=r,{className:t}=a,o=s(a,["className"]);return c__namespace.createElement(d__namespace.Action,i({ref:e,className:n("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t)},o))});K.displayName=d__namespace.Action.displayName;var w=c__namespace.forwardRef((r,e)=>{var a=r,{className:t}=a,o=s(a,["className"]);return c__namespace.createElement(d__namespace.Close,i({ref:e,className:n("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":""},o),c__namespace.createElement(lucideReact.X,{className:"h-4 w-4"}))});w.displayName=d__namespace.Close.displayName;var N=c__namespace.forwardRef((r,e)=>{var a=r,{className:t}=a,o=s(a,["className"]);return c__namespace.createElement(d__namespace.Title,i({ref:e,className:n("text-sm font-semibold [&+div]:text-xs",t)},o))});N.displayName=d__namespace.Title.displayName;var C=c__namespace.forwardRef((r,e)=>{var a=r,{className:t}=a,o=s(a,["className"]);return c__namespace.createElement(d__namespace.Description,i({ref:e,className:n("text-sm opacity-90",t)},o))});C.displayName=d__namespace.Description.displayName;var Dt=1,wt=1e6,O=0;function Nt(){return O=(O+1)%Number.MAX_SAFE_INTEGER,O.toString()}var I=new Map,Z=t=>{if(I.has(t))return;let o=setTimeout(()=>{I.delete(t),A({type:"REMOVE_TOAST",toastId:t});},wt);I.set(t,o);},Ct=(t,o)=>{switch(o.type){case "ADD_TOAST":return u(i({},t),{toasts:[o.toast,...t.toasts].slice(0,Dt)});case "UPDATE_TOAST":return u(i({},t),{toasts:t.toasts.map(e=>e.id===o.toast.id?i(i({},e),o.toast):e)});case "DISMISS_TOAST":{let{toastId:e}=o;return e?Z(e):t.toasts.forEach(r=>{Z(r.id);}),u(i({},t),{toasts:t.toasts.map(r=>r.id===e||e===undefined?u(i({},r),{open:false}):r)})}case "REMOVE_TOAST":return o.toastId===undefined?u(i({},t),{toasts:[]}):u(i({},t),{toasts:t.toasts.filter(e=>e.id!==o.toastId)})}},E=[],M={toasts:[]};function A(t){M=Ct(M,t),E.forEach(o=>{o(M);});}function Et(o){var t=s(o,[]);let e=Nt(),r=m=>A({type:"UPDATE_TOAST",toast:u(i({},m),{id:e})}),a=()=>A({type:"DISMISS_TOAST",toastId:e});return A({type:"ADD_TOAST",toast:u(i({},t),{id:e,open:true,onOpenChange:m=>{m||a();}})}),{id:e,dismiss:a,update:r}}function _(){let[t,o]=c__namespace.useState(M);return c__namespace.useEffect(()=>(E.push(o),()=>{let e=E.indexOf(o);e>-1&&E.splice(e,1);}),[t]),u(i({},t),{toast:Et,dismiss:e=>A({type:"DISMISS_TOAST",toastId:e})})}function Mt(){let{toasts:t}=_();return c__namespace.createElement(V,null,t.map(function(R){var y=R,{id:o,title:e,description:r,action:a}=y,m=s(y,["id","title","description","action"]);return c__namespace.createElement(D,i({key:o},m),c__namespace.createElement("div",{className:"grid gap-1"},e&&c__namespace.createElement(N,null,e),r&&c__namespace.createElement(C,null,r)),a,c__namespace.createElement(w,null))}),c__namespace.createElement(h,null))}exports.Alert=ct;exports.AlertDescription=ft;exports.AlertDialog=Kt;exports.AlertDialogAction=xt;exports.AlertDialogCancel=At;exports.AlertDialogContent=vt;exports.AlertDialogDescription=Rt;exports.AlertDialogFooter=gt;exports.AlertDialogHeader=Tt;exports.AlertDialogOverlay=U;exports.AlertDialogPortal=ut;exports.AlertDialogTitle=yt;exports.AlertDialogTrigger=Zt;exports.AlertTitle=pt;exports.Button=j;exports.Card=X;exports.CardContent=q;exports.CardDescription=Y;exports.CardFooter=J;exports.CardHeader=G;exports.CardTitle=Q;exports.StratejiButton=F;exports.Toast=D;exports.ToastAction=K;exports.ToastClose=w;exports.ToastDescription=C;exports.ToastProvider=V;exports.ToastTitle=N;exports.ToastViewport=h;exports.Toaster=Mt;exports.buttonVariants=x;exports.cn=n;exports.useToast=_;//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map