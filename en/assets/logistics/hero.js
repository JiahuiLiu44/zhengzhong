var md=0,jl=1,gd=2;var Ql=1,Na=2,ai=3,Bn=0,Kt=1,Wt=2,Ri=0,$i=1,eu=2,tu=3,nu=4,xd=5,Oi=100,_d=101,yd=102,vd=103,Md=104,bd=200,Sd=201,Td=202,wd=203,la=204,ua=205,Ed=206,Ad=207,Rd=208,Cd=209,Id=210,Pd=211,Ld=212,Dd=213,Ud=214,Fa=0,Oa=1,Ba=2,ji=3,ka=4,za=5,Va=6,Ga=7,Ha=0,Nd=1,Fd=2,Ci=0,Od=1,Bd=2,kd=3,Wa=4,zd=5,Vd=6,Gd=7,Vl="attached",Hd="detached",iu=300,cs=301,ls=302,Xa=303,qa=304,_o=306,jn=1e3,Kn=1001,Os=1002,qt=1003,Ya=1004;var us=1005;var Yt=1006,$s=1007;var fn=1008;var Vn=1009,su=1010,ru=1011,js=1012,Za=1013,Bi=1014,Cn=1015,Qs=1016,Ka=1017,Ja=1018,er=1020,ou=35902,au=35899,cu=1021,lu=1022,bn=1023,Bs=1026,tr=1027,$a=1028,ja=1029,uu=1030,Qa=1031;var ec=1033,yo=33776,vo=33777,Mo=33778,bo=33779,tc=35840,nc=35841,ic=35842,sc=35843,rc=36196,oc=37492,ac=37496,cc=37808,lc=37809,uc=37810,hc=37811,dc=37812,fc=37813,pc=37814,mc=37815,gc=37816,xc=37817,_c=37818,yc=37819,vc=37820,Mc=37821,bc=36492,Sc=36494,Tc=36495,wc=36283,Ec=36284,Ac=36285,Rc=36286,Cc=2200,Wd=2201,Xd=2202,Qi=2300,es=2301,ca=2302,Ki=2400,Ji=2401,Ir=2402,Ic=2500,qd=2501,hu=0,So=1,nr=2,Yd=3200,Zd=3201;var Pc=0,Kd=1,Gn="",ut="srgb",Zt="srgb-linear",Pr="linear",yt="srgb";var Zi=7680;var Gl=519,Jd=512,$d=513,jd=514,du=515,Qd=516,ef=517,tf=518,nf=519,ha=35044,hs=35048;var fu="300 es",On=2e3,Lr=2001;var Qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ch=1234567,Er=Math.PI/180,ts=180/Math.PI;function En(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[s&255]+Jt[s>>8&255]+Jt[s>>16&255]+Jt[s>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function tt(s,e,t){return Math.max(e,Math.min(t,s))}function pu(s,e){return(s%e+e)%e}function Np(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Fp(s,e,t){return s!==e?(t-s)/(e-s):0}function Ar(s,e,t){return(1-t)*s+t*e}function Op(s,e,t,n){return Ar(s,e,1-Math.exp(-t*n))}function Bp(s,e=1){return e-Math.abs(pu(s,e*2)-e)}function kp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function zp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Vp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Gp(s,e){return s+Math.random()*(e-s)}function Hp(s){return s*(.5-Math.random())}function Wp(s){s!==void 0&&(Ch=s);let e=Ch+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xp(s){return s*Er}function qp(s){return s*ts}function Yp(s){return(s&s-1)===0&&s!==0}function Zp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Kp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Jp(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function _t(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ve={DEG2RAD:Er,RAD2DEG:ts,generateUUID:En,clamp:tt,euclideanModulo:pu,mapLinear:Np,inverseLerp:Fp,lerp:Ar,damp:Op,pingpong:Bp,smoothstep:kp,smootherstep:zp,randInt:Vp,randFloat:Gp,randFloatSpread:Hp,seededRandom:Wp,degToRad:Xp,radToDeg:qp,isPowerOfTwo:Yp,ceilPowerOfTwo:Zp,floorPowerOfTwo:Kp,setQuaternionFromProperEuler:Jp,normalize:_t,denormalize:Fn},ue=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a,p=l*d+c*f+u*g+h*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let M=Math.sqrt(x),T=Math.atan2(M,p*v);m=Math.sin(m*T)/M,a=Math.sin(a*T)/M}let y=a*v;if(l=l*m+d*y,c=c*m+f*y,u=u*m+g*y,h=h*m+_*y,m===1-a){let M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ih.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ih.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hl.copy(this).projectOnVector(e),this.sub(hl)}reflect(e){return this.sub(hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hl=new D,Ih=new kt,je=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],x=i[4],y=i[7],M=i[2],T=i[5],R=i[8];return r[0]=o*_+a*v+l*M,r[3]=o*m+a*x+l*T,r[6]=o*p+a*y+l*R,r[1]=c*_+u*v+h*M,r[4]=c*m+u*x+h*T,r[7]=c*p+u*y+h*R,r[2]=d*_+f*v+g*M,r[5]=d*m+f*x+g*T,r[8]=d*p+f*y+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(dl.makeScale(e,t)),this}rotate(e){return this.premultiply(dl.makeRotation(-e)),this}translate(e,t){return this.premultiply(dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},dl=new je;function mu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sf(){let s=ks("canvas");return s.style.display="block",s}var Ph={};function zs(s){s in Ph||(Ph[s]=!0,console.warn(s))}function rf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Lh=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dh=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $p(){let s={enabled:!0,workingColorSpace:Zt,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===yt&&(i.r=vi(i.r),i.g=vi(i.g),i.b=vi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(i.r=Fs(i.r),i.g=Fs(i.g),i.b=Fs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gn?Pr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Zt]:{primaries:e,whitePoint:n,transfer:Pr,toXYZ:Lh,fromXYZ:Dh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ut},outputColorSpaceConfig:{drawingBufferColorSpace:ut}},[ut]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Lh,fromXYZ:Dh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ut}}}),s}var ot=$p();function vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var bs,da=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bs===void 0&&(bs=ks("canvas")),bs.width=e.width,bs.height=e.height;let i=bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=bs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ks("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vi(t[n]/255)*255):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jp=0,Vs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=En(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(fl(i[o].image)):r.push(fl(i[o]))}else r=fl(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function fl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?da.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qp=0,pl=new D,Ut=class s extends Qn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Kn,i=Kn,r=Yt,o=fn,a=bn,l=Vn,c=s.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=En(),this.name="",this.source=new Vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pl).x}get height(){return this.source.getSize(pl).y}get depth(){return this.source.getSize(pl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jn:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case Os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jn:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case Os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=iu;Ut.DEFAULT_ANISOTROPY=1;var dt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,y=(f+1)/2,M=(p+1)/2,T=(u+d)/4,R=(h+_)/4,w=(g+m)/4;return x>y&&x>M?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=R/n):y>M?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=w/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=R/r,i=w/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fa=class extends Qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Ut(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Vs(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends fa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Dr=class extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var pa=class extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rt=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),No.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),No.copy(n.boundingBox)),No.applyMatrix4(e.matrixWorld),this.union(No)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),Fo.subVectors(this.max,xr),Ss.subVectors(e.a,xr),Ts.subVectors(e.b,xr),ws.subVectors(e.c,xr),Pi.subVectors(Ts,Ss),Li.subVectors(ws,Ts),Wi.subVectors(Ss,ws);let t=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-Wi.z,Wi.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,Wi.z,0,-Wi.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-Wi.y,Wi.x,0];return!ml(t,Ss,Ts,ws,Fo)||(t=[1,0,0,0,1,0,0,0,1],!ml(t,Ss,Ts,ws,Fo))?!1:(Oo.crossVectors(Pi,Li),t=[Oo.x,Oo.y,Oo.z],ml(t,Ss,Ts,ws,Fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},pi=[new D,new D,new D,new D,new D,new D,new D,new D],Dn=new D,No=new Rt,Ss=new D,Ts=new D,ws=new D,Pi=new D,Li=new D,Wi=new D,xr=new D,Fo=new D,Oo=new D,Xi=new D;function ml(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Xi.fromArray(s,r);let a=i.x*Math.abs(Xi.x)+i.y*Math.abs(Xi.y)+i.z*Math.abs(Xi.z),l=e.dot(Xi),c=t.dot(Xi),u=n.dot(Xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var em=new Rt,_r=new D,gl=new D,un=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):em.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_r,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(gl)),this.expandByPoint(_r.copy(e.center).sub(gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},mi=new D,xl=new D,Bo=new D,Di=new D,_l=new D,ko=new D,yl=new D,ns=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){xl.copy(e).add(t).multiplyScalar(.5),Bo.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(xl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Bo),a=Di.dot(this.direction),l=-Di.dot(Bo),c=Di.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(xl).addScaledVector(Bo,d),f}intersectSphere(e,t){mi.subVectors(e.center,this.origin);let n=mi.dot(this.direction),i=mi.dot(mi)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,i,r){_l.subVectors(t,e),ko.subVectors(n,e),yl.crossVectors(_l,ko);let o=this.direction.dot(yl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);let l=a*this.direction.dot(ko.crossVectors(Di,ko));if(l<0)return null;let c=a*this.direction.dot(_l.cross(Di));if(c<0||l+c>o)return null;let u=-a*Di.dot(yl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class s{constructor(e,t,n,i,r,o,a,l,c,u,h,d,f,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,f,g,_,m)}set(e,t,n,i,r,o,a,l,c,u,h,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Es.setFromMatrixColumn(e,0).length(),r=1/Es.setFromMatrixColumn(e,1).length(),o=1/Es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tm,e,nm)}lookAt(e,t,n){let i=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ui.crossVectors(n,xn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ui.crossVectors(n,xn)),Ui.normalize(),zo.crossVectors(xn,Ui),i[0]=Ui.x,i[4]=zo.x,i[8]=xn.x,i[1]=Ui.y,i[5]=zo.y,i[9]=xn.y,i[2]=Ui.z,i[6]=zo.z,i[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],x=n[7],y=n[11],M=n[15],T=i[0],R=i[4],w=i[8],b=i[12],S=i[1],C=i[5],E=i[9],U=i[13],B=i[2],F=i[6],z=i[10],X=i[14],k=i[3],Z=i[7],K=i[11],ee=i[15];return r[0]=o*T+a*S+l*B+c*k,r[4]=o*R+a*C+l*F+c*Z,r[8]=o*w+a*E+l*z+c*K,r[12]=o*b+a*U+l*X+c*ee,r[1]=u*T+h*S+d*B+f*k,r[5]=u*R+h*C+d*F+f*Z,r[9]=u*w+h*E+d*z+f*K,r[13]=u*b+h*U+d*X+f*ee,r[2]=g*T+_*S+m*B+p*k,r[6]=g*R+_*C+m*F+p*Z,r[10]=g*w+_*E+m*z+p*K,r[14]=g*b+_*U+m*X+p*ee,r[3]=v*T+x*S+y*B+M*k,r[7]=v*R+x*C+y*F+M*Z,r[11]=v*w+x*E+y*z+M*K,r[15]=v*b+x*U+y*X+M*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,x=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,y=u*_*c-g*h*c+g*a*f-o*_*f-u*a*p+o*h*p,M=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,T=t*v+n*x+i*y+r*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=v*R,e[1]=(_*d*r-h*m*r-_*i*f+n*m*f+h*i*p-n*d*p)*R,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*R,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*f-n*l*f)*R,e[4]=x*R,e[5]=(u*m*r-g*d*r+g*i*f-t*m*f-u*i*p+t*d*p)*R,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*R,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*f+t*l*f)*R,e[8]=y*R,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*R,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*R,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*R,e[12]=M*R,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*R,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*R,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,v=l*c,x=l*u,y=l*h,M=n.x,T=n.y,R=n.z;return i[0]=(1-(_+p))*M,i[1]=(f+y)*M,i[2]=(g-x)*M,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(d+p))*T,i[6]=(m+v)*T,i[7]=0,i[8]=(g+x)*R,i[9]=(m-v)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Es.set(i[0],i[1],i[2]).length(),o=Es.set(i[4],i[5],i[6]).length(),a=Es.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Un.copy(this);let c=1/r,u=1/o,h=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,t.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=On,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===On)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Lr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=On,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===On)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Lr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Es=new D,Un=new Ve,tm=new D(0,0,0),nm=new D(1,1,1),Ui=new D,zo=new D,xn=new D,Uh=new Ve,Nh=new kt,An=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Ur=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},im=0,Fh=new D,As=new kt,gi=new Ve,Vo=new D,yr=new D,sm=new D,rm=new kt,Oh=new D(1,0,0),Bh=new D(0,1,0),kh=new D(0,0,1),zh={type:"added"},om={type:"removed"},Rs={type:"childadded",child:null},vl={type:"childremoved",child:null},at=class s extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,t=new An,n=new kt,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new je}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Oh,e)}rotateY(e){return this.rotateOnAxis(Bh,e)}rotateZ(e){return this.rotateOnAxis(kh,e)}translateOnAxis(e,t){return Fh.copy(e).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oh,e)}translateY(e){return this.translateOnAxis(Bh,e)}translateZ(e){return this.translateOnAxis(kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vo.copy(e):Vo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(yr,Vo,this.up):gi.lookAt(Vo,yr,this.up),this.quaternion.setFromRotationMatrix(gi),i&&(gi.extractRotation(i.matrixWorld),As.setFromRotationMatrix(gi),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zh),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(om),vl.child=e,this.dispatchEvent(vl),vl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zh),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,sm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,rm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};at.DEFAULT_UP=new D(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new D,xi=new D,Ml=new D,_i=new D,Cs=new D,Is=new D,Vh=new D,bl=new D,Sl=new D,Tl=new D,wl=new dt,El=new dt,Al=new dt,Zn=class s{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nn.subVectors(e,t),i.cross(Nn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Nn.subVectors(i,t),xi.subVectors(n,t),Ml.subVectors(e,t);let o=Nn.dot(Nn),a=Nn.dot(xi),l=Nn.dot(Ml),c=xi.dot(xi),u=xi.dot(Ml),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return wl.setScalar(0),El.setScalar(0),Al.setScalar(0),wl.fromBufferAttribute(e,t),El.fromBufferAttribute(e,n),Al.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(wl,r.x),o.addScaledVector(El,r.y),o.addScaledVector(Al,r.z),o}static isFrontFacing(e,t,n,i){return Nn.subVectors(n,t),xi.subVectors(e,t),Nn.cross(xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Nn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Cs.subVectors(i,n),Is.subVectors(r,n),bl.subVectors(e,n);let l=Cs.dot(bl),c=Is.dot(bl);if(l<=0&&c<=0)return t.copy(n);Sl.subVectors(e,i);let u=Cs.dot(Sl),h=Is.dot(Sl);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Cs,o);Tl.subVectors(e,r);let f=Cs.dot(Tl),g=Is.dot(Tl);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Is,a);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Vh.subVectors(r,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Vh,a);let p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Cs,o).addScaledVector(Is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Go={h:0,s:0,l:0};function Rl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=pu(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Rl(o,r,e+1/3),this.g=Rl(o,r,e),this.b=Rl(o,r,e-1/3)}return ot.colorSpaceToWorking(this,i),this}setStyle(e,t=ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){let n=of[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return ot.workingToColorSpace($t.copy(this),e),Math.round(tt($t.r*255,0,255))*65536+Math.round(tt($t.g*255,0,255))*256+Math.round(tt($t.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace($t.copy(this),t);let n=$t.r,i=$t.g,r=$t.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=ut){ot.workingToColorSpace($t.copy(this),e);let t=$t.r,n=$t.g,i=$t.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Go);let n=Ar(Ni.h,Go.h,t),i=Ar(Ni.s,Go.s,t),r=Ar(Ni.l,Go.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new Xe;Xe.NAMES=of;var am=0,sn=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=En(),this.name="",this.type="Material",this.blending=$i,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ua,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==la&&(n.blendSrc=this.blendSrc),this.blendDst!==ua&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},vt=class extends sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new D,Ho=new ue,cm=0,Dt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ha,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ho.fromBufferAttribute(this,t),Ho.applyMatrix3(e),this.setXY(t,Ho.x,Ho.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ha&&(e.usage=this.usage),e}};var Nr=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Fr=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},lm=0,wn=new Ve,Cl=new at,Ps=new D,_n=new Rt,vr=new Rt,Gt=new D,Mt=class s extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mu(e)?Fr:Nr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Cl.lookAt(e),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new it(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(_n.min,vr.min),_n.expandByPoint(Gt),Gt.addVectors(_n.max,vr.max),_n.expandByPoint(Gt)):(_n.expandByPoint(vr.min),_n.expandByPoint(vr.max))}_n.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Gt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(e,c),Gt.add(Ps)),i=Math.max(i,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<n.count;w++)a[w]=new D,l[w]=new D;let c=new D,u=new D,h=new D,d=new ue,f=new ue,g=new ue,_=new D,m=new D;function p(w,b,S){c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,S),d.fromBufferAttribute(r,w),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(C),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),a[w].add(_),a[b].add(_),a[S].add(_),l[w].add(m),l[b].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let w=0,b=v.length;w<b;++w){let S=v[w],C=S.start,E=S.count;for(let U=C,B=C+E;U<B;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let x=new D,y=new D,M=new D,T=new D;function R(w){M.fromBufferAttribute(i,w),T.copy(M);let b=a[w];x.copy(b),x.sub(M.multiplyScalar(M.dot(b))).normalize(),y.crossVectors(T,b);let C=y.dot(l[w])<0?-1:1;o.setXYZW(w,x.x,x.y,x.z,C)}for(let w=0,b=v.length;w<b;++w){let S=v[w],C=S.start,E=S.count;for(let U=C,B=C+E;U<B;U+=3)R(e.getX(U+0)),R(e.getX(U+1)),R(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Dt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gh=new Ve,qi=new ns,Wo=new un,Hh=new D,Xo=new D,qo=new D,Yo=new D,Il=new D,Zo=new D,Wh=new D,Ko=new D,Ce=class extends at{constructor(e=new Mt,t=new vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Il.fromBufferAttribute(h,e),o?Zo.addScaledVector(Il,u):Zo.addScaledVector(Il.sub(t),u))}t.add(Zo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),qi.copy(e.ray).recast(e.near),!(Wo.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Wo,Hh)===null||qi.origin.distanceToSquared(Hh)>(e.far-e.near)**2))&&(Gh.copy(r).invert(),qi.copy(e.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,M=x;y<M;y+=3){let T=a.getX(y),R=a.getX(y+1),w=a.getX(y+2);i=Jo(this,p,e,n,c,u,h,T,R,w),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);i=Jo(this,o,e,n,c,u,h,v,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,M=x;y<M;y+=3){let T=y,R=y+1,w=y+2;i=Jo(this,p,e,n,c,u,h,T,R,w),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let v=m,x=m+1,y=m+2;i=Jo(this,o,e,n,c,u,h,v,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function um(s,e,t,n,i,r,o,a){let l;if(e.side===Kt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Bn,a),l===null)return null;Ko.copy(a),Ko.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Ko);return c<t.near||c>t.far?null:{distance:c,point:Ko.clone(),object:s}}function Jo(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Xo),s.getVertexPosition(l,qo),s.getVertexPosition(c,Yo);let u=um(s,e,t,n,Xo,qo,Yo,Wh);if(u){let h=new D;Zn.getBarycoord(Wh,Xo,qo,Yo,h),i&&(u.uv=Zn.getInterpolatedAttribute(i,a,l,c,h,new ue)),r&&(u.uv1=Zn.getInterpolatedAttribute(r,a,l,c,h,new ue)),o&&(u.normal=Zn.getInterpolatedAttribute(o,a,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new D,materialIndex:0};Zn.getNormal(Xo,qo,Yo,d.normal),u.face=d,u.barycoord=h}return u}var jt=class s extends Mt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(h,2));function g(_,m,p,v,x,y,M,T,R,w,b){let S=y/R,C=M/w,E=y/2,U=M/2,B=T/2,F=R+1,z=w+1,X=0,k=0,Z=new D;for(let K=0;K<z;K++){let ee=K*C-U;for(let Se=0;Se<F;Se++){let Ie=Se*S-E;Z[_]=Ie*v,Z[m]=ee*x,Z[p]=B,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=T>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(Se/R),h.push(1-K/w),X+=1}}for(let K=0;K<w;K++)for(let ee=0;ee<R;ee++){let Se=d+ee+F*K,Ie=d+ee+F*(K+1),Me=d+(ee+1)+F*(K+1),we=d+(ee+1)+F*K;l.push(Se,Ie,we),l.push(Ie,Me,we),k+=6}a.addGroup(f,k,b),f+=k,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ds(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(s){let e={};for(let t=0;t<s.length;t++){let n=ds(s[t]);for(let i in n)e[i]=n[i]}return e}function hm(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function gu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var af={clone:ds,merge:Qt},dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dm,this.fragmentShader=fm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=hm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Or=class extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fi=new D,Xh=new ue,qh=new ue,Ht=class extends Or{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,Xh,qh),t.subVectors(qh,Xh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ls=-90,Ds=1,ma=class extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ht(Ls,Ds,e,t);i.layers=this.layers,this.add(i);let r=new Ht(Ls,Ds,e,t);r.layers=this.layers,this.add(r);let o=new Ht(Ls,Ds,e,t);o.layers=this.layers,this.add(o);let a=new Ht(Ls,Ds,e,t);a.layers=this.layers,this.add(a);let l=new Ht(Ls,Ds,e,t);l.layers=this.layers,this.add(l);let c=new Ht(Ls,Ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Br=class extends Ut{constructor(e=[],t=cs,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ga=class extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Br(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new jt(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Ri});r.uniforms.tEquirect.value=t;let o=new Ce(i,r),a=t.minFilter;return t.minFilter===fn&&(t.minFilter=Yt),new ma(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},fe=class extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}},pm={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var is=class extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ha,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},nn=new D,Ws=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Yh=new D,Zh=new dt,Kh=new dt,mm=new D,Jh=new Ve,$o=new D,Pl=new un,$h=new Ve,Ll=new ns,kr=class extends Ce{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vl,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Rt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$o),this.boundingBox.expandByPoint($o)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$o),this.boundingSphere.expandByPoint($o)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pl.copy(this.boundingSphere),Pl.applyMatrix4(i),e.ray.intersectsSphere(Pl)!==!1&&($h.copy(i).invert(),Ll.copy(e.ray).applyMatrix4($h),!(this.boundingBox!==null&&Ll.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ll)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Zh.fromBufferAttribute(i.attributes.skinIndex,e),Kh.fromBufferAttribute(i.attributes.skinWeight,e),Yh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Kh.getComponent(r);if(o!==0){let a=Zh.getComponent(r);Jh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(mm.copy(Yh).applyMatrix4(Jh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Xs=class extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}},ti=class extends Ut{constructor(e=null,t=1,n=1,i,r,o,a,l,c=qt,u=qt,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},jh=new Ve,gm=new Ve,zr=class s{constructor(e=[],t=[]){this.uuid=En(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:gm;jh.multiplyMatrices(a,t[r]),jh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ti(t,e,e,bn,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Xs),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},ni=class extends Dt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Us=new Ve,Qh=new Ve,jo=[],ed=new Rt,xm=new Ve,Mr=new Ce,br=new un,Nt=class extends Ce{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),ed.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(ed)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),br.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),e.ray.intersectsSphere(br)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Us),Qh.multiplyMatrices(n,Us),Mr.matrixWorld=Qh,Mr.raycast(e,jo);for(let o=0,a=jo.length;o<a;o++){let l=jo[o];l.instanceId=r,l.object=this,t.push(l)}jo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ti(new Float32Array(i*this.count),i,this.count,$a,Cn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Dl=new D,_m=new D,ym=new je,Yn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Dl.subVectors(n,t).cross(_m.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Dl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ym.getNormalMatrix(e),i=this.coplanarPoint(Dl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yi=new un,vm=new ue(.5,.5),Qo=new D,qs=class{constructor(e=new Yn,t=new Yn,n=new Yn,i=new Yn,r=new Yn,o=new Yn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],v=r[12],x=r[13],y=r[14],M=r[15];if(i[0].setComponents(c-o,f-u,p-g,M-v).normalize(),i[1].setComponents(c+o,f+u,p+g,M+v).normalize(),i[2].setComponents(c+a,f+h,p+_,M+x).normalize(),i[3].setComponents(c-a,f-h,p-_,M-x).normalize(),n)i[4].setComponents(l,d,m,y).normalize(),i[5].setComponents(c-l,f-d,p-m,M-y).normalize();else if(i[4].setComponents(c-l,f-d,p-m,M-y).normalize(),t===On)i[5].setComponents(c+l,f+d,p+m,M+y).normalize();else if(t===Lr)i[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){Yi.center.set(0,0,0);let t=vm.distanceTo(e.center);return Yi.radius=.7071067811865476+t,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Qo.x=i.normal.x>0?e.max.x:e.min.x,Qo.y=i.normal.y>0?e.max.y:e.min.y,Qo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var zn=class extends sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xa=new D,_a=new D,td=new Ve,Sr=new ns,ea=new un,Ul=new D,nd=new D,yn=class extends at{constructor(e=new Mt,t=new zn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xa.fromBufferAttribute(t,i-1),_a.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xa.distanceTo(_a);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(i),ea.radius+=r,e.ray.intersectsSphere(ea)===!1)return;td.copy(i).invert(),Sr.copy(e.ray).applyMatrix4(td);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){let p=u.getX(_),v=u.getX(_+1),x=ta(this,e,Sr,l,p,v,_);x&&t.push(x)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(f),p=ta(this,e,Sr,l,_,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){let p=ta(this,e,Sr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=ta(this,e,Sr,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ta(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(xa.fromBufferAttribute(a,i),_a.fromBufferAttribute(a,r),t.distanceSqToSegment(xa,_a,Ul,nd)>n)return;Ul.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ul);if(!(c<e.near||c>e.far))return{distance:c,point:nd.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var id=new D,sd=new D,Vr=class extends yn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)id.fromBufferAttribute(t,i),sd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+id.distanceTo(sd);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Gr=class extends yn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ys=class extends sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rd=new Ve,Hl=new ns,na=new un,ia=new D,Hr=class extends at{constructor(e=new Mt,t=new Ys){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(i),na.radius+=r,e.ray.intersectsSphere(na)===!1)return;rd.copy(i).invert(),Hl.copy(e.ray).applyMatrix4(rd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let m=c.getX(g);ia.fromBufferAttribute(h,m),od(ia,m,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)ia.fromBufferAttribute(h,g),od(ia,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function od(s,e,t,n,i,r,o){let a=Hl.distanceSqToPoint(s);if(a<t){let l=new D;Hl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var vn=class extends Ut{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wr=class extends Ut{constructor(e,t,n=Bi,i,r,o,a=qt,l=qt,c,u=Bs,h=1){if(u!==Bs&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xr=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var qr=class s extends Mt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new D,u=new ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(a,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},rn=class s extends Mt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,_=[],m=n/2,p=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new it(h,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(f,2));function v(){let y=new D,M=new D,T=0,R=(t-e)/n;for(let w=0;w<=r;w++){let b=[],S=w/r,C=S*(t-e)+e;for(let E=0;E<=i;E++){let U=E/i,B=U*l+a,F=Math.sin(B),z=Math.cos(B);M.x=C*F,M.y=-S*n+m,M.z=C*z,h.push(M.x,M.y,M.z),y.set(F,R,z).normalize(),d.push(y.x,y.y,y.z),f.push(U,1-S),b.push(g++)}_.push(b)}for(let w=0;w<i;w++)for(let b=0;b<r;b++){let S=_[b][w],C=_[b+1][w],E=_[b+1][w+1],U=_[b][w+1];(e>0||b!==0)&&(u.push(S,C,U),T+=3),(t>0||b!==r-1)&&(u.push(C,E,U),T+=3)}c.addGroup(p,T,0),p+=T}function x(y){let M=g,T=new ue,R=new D,w=0,b=y===!0?e:t,S=y===!0?1:-1;for(let E=1;E<=i;E++)h.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let C=g;for(let E=0;E<=i;E++){let B=E/i*l+a,F=Math.cos(B),z=Math.sin(B);R.x=b*z,R.y=m*S,R.z=b*F,h.push(R.x,R.y,R.z),d.push(0,S,0),T.x=F*.5+.5,T.y=z*.5*S+.5,f.push(T.x,T.y),g++}for(let E=0;E<i;E++){let U=M+E,B=C+E;y===!0?u.push(B,B+1,U):u.push(B+1,B,U),w+=3}c.addGroup(p,w,y===!0?1:2),p+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yr=class s extends rn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ya=class s extends Mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(r.slice(),3)),this.setAttribute("uv",new it(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let x=new D,y=new D,M=new D;for(let T=0;T<t.length;T+=3)f(t[T+0],x),f(t[T+1],y),f(t[T+2],M),l(x,y,M,v)}function l(v,x,y,M){let T=M+1,R=[];for(let w=0;w<=T;w++){R[w]=[];let b=v.clone().lerp(y,w/T),S=x.clone().lerp(y,w/T),C=T-w;for(let E=0;E<=C;E++)E===0&&w===T?R[w][E]=b:R[w][E]=b.clone().lerp(S,E/C)}for(let w=0;w<T;w++)for(let b=0;b<2*(T-w)-1;b++){let S=Math.floor(b/2);b%2===0?(d(R[w][S+1]),d(R[w+1][S]),d(R[w][S])):(d(R[w][S+1]),d(R[w+1][S+1]),d(R[w+1][S]))}}function c(v){let x=new D;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(v),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function u(){let v=new D;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];let y=m(v)/2/Math.PI+.5,M=p(v)/Math.PI+.5;o.push(y,1-M)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){let x=o[v+0],y=o[v+2],M=o[v+4],T=Math.max(x,y,M),R=Math.min(x,y,M);T>.9&&R<.1&&(x<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),M<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,x){let y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function g(){let v=new D,x=new D,y=new D,M=new D,T=new ue,R=new ue,w=new ue;for(let b=0,S=0;b<r.length;b+=9,S+=6){v.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),T.set(o[S+0],o[S+1]),R.set(o[S+2],o[S+3]),w.set(o[S+4],o[S+5]),M.copy(v).add(x).add(y).divideScalar(3);let C=m(M);_(T,S+0,v,C),_(R,S+2,x,C),_(w,S+4,y,C)}}function _(v,x,y,M){M<0&&v.x===1&&(o[x]=v.x-1),y.x===0&&y.z===0&&(o[x]=M/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new ue:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,i=[],r=[],o=[],a=new D,l=new Ve;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(tt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(tt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zs=class extends Mn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ue){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},va=class extends Zs{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function xu(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var sa=new D,Nl=new xu,Fl=new xu,Ol=new xu,Rn=class extends Mn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(sa.subVectors(i[0],i[1]).add(i[0]),c=sa);let h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(sa.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=sa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Nl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),Fl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),Ol.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Nl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Fl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Ol.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Nl.calc(l),Fl.calc(l),Ol.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ad(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Mm(s,e){let t=1-s;return t*t*e}function bm(s,e){return 2*(1-s)*s*e}function Sm(s,e){return s*s*e}function Rr(s,e,t,n){return Mm(s,e)+bm(s,t)+Sm(s,n)}function Tm(s,e){let t=1-s;return t*t*t*e}function wm(s,e){let t=1-s;return 3*t*t*s*e}function Em(s,e){return 3*(1-s)*s*s*e}function Am(s,e){return s*s*s*e}function Cr(s,e,t,n,i){return Tm(s,e)+wm(s,t)+Em(s,n)+Am(s,i)}var Zr=class extends Mn{constructor(e=new ue,t=new ue,n=new ue,i=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ue){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(e,i.x,r.x,o.x,a.x),Cr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ma=class extends Mn{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(e,i.x,r.x,o.x,a.x),Cr(e,i.y,r.y,o.y,a.y),Cr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Kr=class extends Mn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends Mn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jr=class extends Mn{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,i.x,r.x,o.x),Rr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$r=class extends Mn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,i.x,r.x,o.x),Rr(e,i.y,r.y,o.y),Rr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jr=class extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(ad(a,l.x,c.x,u.x,h.x),ad(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ue().fromArray(i))}return this}},Sa=Object.freeze({__proto__:null,ArcCurve:va,CatmullRomCurve3:Rn,CubicBezierCurve:Zr,CubicBezierCurve3:Ma,EllipseCurve:Zs,LineCurve:Kr,LineCurve3:ba,QuadraticBezierCurve:Jr,QuadraticBezierCurve3:$r,SplineCurve:jr}),Ta=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Sa[i.type]().fromJSON(i))}return this}},Qr=class extends Ta{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Kr(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Jr(this.currentPoint.clone(),new ue(e,t),new ue(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Zr(this.currentPoint.clone(),new ue(e,t),new ue(n,i),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new jr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new Zs(e,t,n,i,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mi=class extends Qr{constructor(e){super(e),this.uuid=En(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Qr().fromJSON(i))}return this}};function Rm(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=cf(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Dm(s,e,r,t)),s.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=t;d<i;d+=t){let f=s[d],g=s[d+1];f<a&&(a=f),g<l&&(l=g),f>u&&(u=f),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return eo(r,o,t,a,l,c,0),o}function cf(s,e,t,n,i){let r;if(i===Wm(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=cd(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=cd(o/n|0,s[o],s[o+1],r);return r&&Ks(r,r.next)&&(no(r),r=r.next),r}function ss(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ks(t,t.next)||Pt(t.prev,t,t.next)===0)){if(no(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function eo(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Bm(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Im(s,n,i,r):Cm(s)){e.push(l.i,s.i,c.i),no(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Pm(ss(s),e),eo(s,e,t,n,i,r,2)):o===2&&Lm(s,e,t,n,i,r):eo(ss(s),e,t,n,i,r,1);break}}}function Cm(s){let e=s.prev,t=s,n=s.next;if(Pt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(i,r,o),h=Math.min(a,l,c),d=Math.max(i,r,o),f=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&wr(i,a,r,l,o,c,g.x,g.y)&&Pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Im(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Pt(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(u,h,d),_=Math.max(a,l,c),m=Math.max(u,h,d),p=Wl(f,g,e,t,n),v=Wl(_,m,e,t,n),x=s.prevZ,y=s.nextZ;for(;x&&x.z>=p&&y&&y.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&wr(a,u,l,h,c,d,x.x,x.y)&&Pt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&wr(a,u,l,h,c,d,y.x,y.y)&&Pt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&wr(a,u,l,h,c,d,x.x,x.y)&&Pt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&wr(a,u,l,h,c,d,y.x,y.y)&&Pt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Pm(s,e){let t=s;do{let n=t.prev,i=t.next.next;!Ks(n,i)&&uf(n,t,t.next,i)&&to(n,i)&&to(i,n)&&(e.push(n.i,t.i,i.i),no(t),no(t.next),t=s=i),t=t.next}while(t!==s);return ss(t)}function Lm(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Vm(o,a)){let l=hf(o,a);o=ss(o,o.next),l=ss(l,l.next),eo(o,e,t,n,i,r,0),eo(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Dm(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=cf(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(zm(c))}i.sort(Um);for(let r=0;r<i.length;r++)t=Nm(i[r],t);return t}function Um(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Nm(s,e){let t=Fm(s,e);if(!t)return e;let n=hf(t,s);return ss(n,n.next),ss(t,t.next)}function Fm(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(Ks(s,t))return t;do{if(Ks(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&lf(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let h=Math.abs(i-t.y)/(n-t.x);to(t,s)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Om(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Om(s,e){return Pt(s.prev,s,e.prev)<0&&Pt(e.next,s,s.next)<0}function Bm(s,e,t,n){let i=s;do i.z===0&&(i.z=Wl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,km(i)}function km(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function Wl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function zm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function lf(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function wr(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&lf(s,e,t,n,i,r,o,a)}function Vm(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Gm(s,e)&&(to(s,e)&&to(e,s)&&Hm(s,e)&&(Pt(s.prev,s,e.prev)||Pt(s,e.prev,e))||Ks(s,e)&&Pt(s.prev,s,s.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ks(s,e){return s.x===e.x&&s.y===e.y}function uf(s,e,t,n){let i=oa(Pt(s,e,t)),r=oa(Pt(s,e,n)),o=oa(Pt(t,n,s)),a=oa(Pt(t,n,e));return!!(i!==r&&o!==a||i===0&&ra(s,t,e)||r===0&&ra(s,n,e)||o===0&&ra(t,s,n)||a===0&&ra(t,e,n))}function ra(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function oa(s){return s>0?1:s<0?-1:0}function Gm(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&uf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function to(s,e){return Pt(s.prev,s,s.next)<0?Pt(s,e,s.next)>=0&&Pt(s,s.prev,e)>=0:Pt(s,e,s.prev)<0||Pt(s,s.next,e)<0}function Hm(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function hf(s,e){let t=Xl(s.i,s.x,s.y),n=Xl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function cd(s,e,t,n){let i=Xl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function no(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Xl(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Wm(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var ql=class{static triangulate(e,t,n=2){return Rm(e,t,n)}},Jn=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];ld(e),ud(n,e);let o=e.length;t.forEach(ld);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,ud(n,t[l]);let a=ql.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function ld(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function ud(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var io=class s extends Mt{constructor(e=new Mi([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new it(i,3)),this.setAttribute("uv",new it(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Xm,x,y=!1,M,T,R,w;p&&(x=p.getSpacedPoints(u),y=!0,d=!1,M=p.computeFrenetFrames(u,!1),T=new D,R=new D,w=new D),d||(m=0,f=0,g=0,_=0);let b=a.extractPoints(c),S=b.shape,C=b.holes;if(!Jn.isClockWise(S)){S=S.reverse();for(let ae=0,re=C.length;ae<re;ae++){let te=C[ae];Jn.isClockWise(te)&&(C[ae]=te.reverse())}}function U(ae){let te=10000000000000001e-36,ne=ae[0];for(let _e=1;_e<=ae.length;_e++){let de=_e%ae.length,le=ae[de],We=le.x-ne.x,ze=le.y-ne.y,L=We*We+ze*ze,A=Math.max(Math.abs(le.x),Math.abs(le.y),Math.abs(ne.x),Math.abs(ne.y)),q=te*A*A;if(L<=q){ae.splice(de,1),_e--;continue}ne=le}}U(S),C.forEach(U);let B=C.length,F=S;for(let ae=0;ae<B;ae++){let re=C[ae];S=S.concat(re)}function z(ae,re,te){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(re,te)}let X=S.length;function k(ae,re,te){let ne,_e,de,le=ae.x-re.x,We=ae.y-re.y,ze=te.x-ae.x,L=te.y-ae.y,A=le*le+We*We,q=le*L-We*ze;if(Math.abs(q)>Number.EPSILON){let j=Math.sqrt(A),ce=Math.sqrt(ze*ze+L*L),Q=re.x-We/j,De=re.y+le/j,ye=te.x-L/ce,Ne=te.y+ze/ce,Fe=((ye-Q)*L-(Ne-De)*ze)/(le*L-We*ze);ne=Q+le*Fe-ae.x,_e=De+We*Fe-ae.y;let pe=ne*ne+_e*_e;if(pe<=2)return new ue(ne,_e);de=Math.sqrt(pe/2)}else{let j=!1;le>Number.EPSILON?ze>Number.EPSILON&&(j=!0):le<-Number.EPSILON?ze<-Number.EPSILON&&(j=!0):Math.sign(We)===Math.sign(L)&&(j=!0),j?(ne=-We,_e=le,de=Math.sqrt(A)):(ne=le,_e=We,de=Math.sqrt(A/2))}return new ue(ne/de,_e/de)}let Z=[];for(let ae=0,re=F.length,te=re-1,ne=ae+1;ae<re;ae++,te++,ne++)te===re&&(te=0),ne===re&&(ne=0),Z[ae]=k(F[ae],F[te],F[ne]);let K=[],ee,Se=Z.concat();for(let ae=0,re=B;ae<re;ae++){let te=C[ae];ee=[];for(let ne=0,_e=te.length,de=_e-1,le=ne+1;ne<_e;ne++,de++,le++)de===_e&&(de=0),le===_e&&(le=0),ee[ne]=k(te[ne],te[de],te[le]);K.push(ee),Se=Se.concat(ee)}let Ie;if(m===0)Ie=Jn.triangulateShape(F,C);else{let ae=[],re=[];for(let te=0;te<m;te++){let ne=te/m,_e=f*Math.cos(ne*Math.PI/2),de=g*Math.sin(ne*Math.PI/2)+_;for(let le=0,We=F.length;le<We;le++){let ze=z(F[le],Z[le],de);se(ze.x,ze.y,-_e),ne===0&&ae.push(ze)}for(let le=0,We=B;le<We;le++){let ze=C[le];ee=K[le];let L=[];for(let A=0,q=ze.length;A<q;A++){let j=z(ze[A],ee[A],de);se(j.x,j.y,-_e),ne===0&&L.push(j)}ne===0&&re.push(L)}}Ie=Jn.triangulateShape(ae,re)}let Me=Ie.length,we=g+_;for(let ae=0;ae<X;ae++){let re=d?z(S[ae],Se[ae],we):S[ae];y?(R.copy(M.normals[0]).multiplyScalar(re.x),T.copy(M.binormals[0]).multiplyScalar(re.y),w.copy(x[0]).add(R).add(T),se(w.x,w.y,w.z)):se(re.x,re.y,0)}for(let ae=1;ae<=u;ae++)for(let re=0;re<X;re++){let te=d?z(S[re],Se[re],we):S[re];y?(R.copy(M.normals[ae]).multiplyScalar(te.x),T.copy(M.binormals[ae]).multiplyScalar(te.y),w.copy(x[ae]).add(R).add(T),se(w.x,w.y,w.z)):se(te.x,te.y,h/u*ae)}for(let ae=m-1;ae>=0;ae--){let re=ae/m,te=f*Math.cos(re*Math.PI/2),ne=g*Math.sin(re*Math.PI/2)+_;for(let _e=0,de=F.length;_e<de;_e++){let le=z(F[_e],Z[_e],ne);se(le.x,le.y,h+te)}for(let _e=0,de=C.length;_e<de;_e++){let le=C[_e];ee=K[_e];for(let We=0,ze=le.length;We<ze;We++){let L=z(le[We],ee[We],ne);y?se(L.x,L.y+x[u-1].y,x[u-1].x+te):se(L.x,L.y,h+te)}}}G(),Y();function G(){let ae=i.length/3;if(d){let re=0,te=X*re;for(let ne=0;ne<Me;ne++){let _e=Ie[ne];he(_e[2]+te,_e[1]+te,_e[0]+te)}re=u+m*2,te=X*re;for(let ne=0;ne<Me;ne++){let _e=Ie[ne];he(_e[0]+te,_e[1]+te,_e[2]+te)}}else{for(let re=0;re<Me;re++){let te=Ie[re];he(te[2],te[1],te[0])}for(let re=0;re<Me;re++){let te=Ie[re];he(te[0]+X*u,te[1]+X*u,te[2]+X*u)}}n.addGroup(ae,i.length/3-ae,0)}function Y(){let ae=i.length/3,re=0;ie(F,re),re+=F.length;for(let te=0,ne=C.length;te<ne;te++){let _e=C[te];ie(_e,re),re+=_e.length}n.addGroup(ae,i.length/3-ae,1)}function ie(ae,re){let te=ae.length;for(;--te>=0;){let ne=te,_e=te-1;_e<0&&(_e=ae.length-1);for(let de=0,le=u+m*2;de<le;de++){let We=X*de,ze=X*(de+1),L=re+ne+We,A=re+_e+We,q=re+_e+ze,j=re+ne+ze;Be(L,A,q,j)}}}function se(ae,re,te){l.push(ae),l.push(re),l.push(te)}function he(ae,re,te){lt(ae),lt(re),lt(te);let ne=i.length/3,_e=v.generateTopUV(n,i,ne-3,ne-2,ne-1);N(_e[0]),N(_e[1]),N(_e[2])}function Be(ae,re,te,ne){lt(ae),lt(re),lt(ne),lt(re),lt(te),lt(ne);let _e=i.length/3,de=v.generateSideWallUV(n,i,_e-6,_e-3,_e-2,_e-1);N(de[0]),N(de[1]),N(de[3]),N(de[1]),N(de[2]),N(de[3])}function lt(ae){i.push(l[ae*3+0]),i.push(l[ae*3+1]),i.push(l[ae*3+2])}function N(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return qm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Sa[i.type]().fromJSON(i)),new s(n,e.options)}},Xm={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new ue(r,o),new ue(a,l),new ue(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ue(o,1-l),new ue(c,1-h),new ue(d,1-g),new ue(_,1-p)]:[new ue(a,1-l),new ue(u,1-h),new ue(f,1-g),new ue(m,1-p)]}};function qm(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var so=class s extends ya{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var At=class s extends Mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let v=p*d-o;for(let x=0;x<c;x++){let y=x*h-r;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let x=v+c*p,y=v+c*(p+1),M=v+1+c*(p+1),T=v+1+c*p;f.push(x,y,T),f.push(y,M,T)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var ro=class s extends Mt{constructor(e=new Mi([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new it(i,3)),this.setAttribute("normal",new it(r,3)),this.setAttribute("uv",new it(o,2));function c(u){let h=i.length/3,d=u.extractPoints(t),f=d.shape,g=d.holes;Jn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let v=g[m];Jn.isClockWise(v)===!0&&(g[m]=v.reverse())}let _=Jn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){let v=f[m];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=_.length;m<p;m++){let v=_[m],x=v[0]+h,y=v[1]+h,M=v[2]+h;n.push(x,y,M),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ym(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function Ym(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Bt=class s extends Mt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let v=[],x=p/n,y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){let T=M/t;h.x=-e*Math.cos(i+T*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(i+T*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(T+y,1-x),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let x=u[p][v+1],y=u[p][v],M=u[p+1][v],T=u[p+1][v+1];(p!==0||o>0)&&f.push(x,y,T),(p!==n-1||l<Math.PI)&&f.push(y,M,T)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var oo=class s extends Mt{constructor(e=new $r(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new ue,u=new D,h=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new it(h,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(f,2));function _(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),v(),p()}function m(x){u=e.getPointAt(x/t,u);let y=o.normals[x],M=o.binormals[x];for(let T=0;T<=i;T++){let R=T/i*Math.PI*2,w=Math.sin(R),b=-Math.cos(R);l.x=b*y.x+w*M.x,l.y=b*y.y+w*M.y,l.z=b*y.z+w*M.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=t;x++)for(let y=1;y<=i;y++){let M=(i+1)*(x-1)+(y-1),T=(i+1)*x+(y-1),R=(i+1)*x+y,w=(i+1)*(x-1)+y;g.push(M,T,w),g.push(T,R,w)}}function v(){for(let x=0;x<=t;x++)for(let y=0;y<=i;y++)c.x=x/t,c.y=y/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Sa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ct=class extends sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hn=class extends ct{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ao=class extends sn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wa=class extends sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ea=class extends sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var co=class extends zn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function aa(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Zm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Km(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function hd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function df(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var bi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Aa=class extends bi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ki,endingEnd:Ki}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ji:r=e,a=2*t-n;break;case Ir:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ji:o=e,l=2*n-t;break;case Ir:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let M=0;M!==a;++M)r[M]=p*o[u+M]+v*o[c+M]+x*o[l+M]+y*o[h+M];return r}},lo=class extends bi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Ra=class extends bi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},dn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=aa(t,this.TimeBufferType),this.values=aa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:aa(e.times,Array),values:aa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Aa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qi:t=this.InterpolantFactoryMethodDiscrete;break;case es:t=this.InterpolantFactoryMethodLinear;break;case ca:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qi;case this.InterpolantFactoryMethodLinear:return es;case this.InterpolantFactoryMethodSmooth:return ca}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Zm(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ca,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=es;var Si=class extends dn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Qi;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends dn{constructor(e,t,n,i){super(e,t,n,i)}};uo.prototype.ValueTypeName="color";var ii=class extends dn{constructor(e,t,n,i){super(e,t,n,i)}};ii.prototype.ValueTypeName="number";var Ca=class extends bi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)kt.slerpFlat(r,0,o,c-a,o,c,l);return r}},si=class extends dn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}};si.prototype.ValueTypeName="quaternion";si.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends dn{constructor(e,t,n){super(e,t,n)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Qi;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends dn{constructor(e,t,n,i){super(e,t,n,i)}};ri.prototype.ValueTypeName="vector";var wi=class{constructor(e="",t=-1,n=[],i=Ic){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=En(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push($m(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(dn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=Km(l);l=hd(l,1,u),c=hd(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ii(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,_){if(f.length!==0){let m=[],p=[];df(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(let _ in f){let m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){let x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new ii(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(ri,f+".position",d,"pos",i),n(si,f+".quaternion",d,"rot",i),n(ri,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Jm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ii;case"vector":case"vector2":case"vector3":case"vector4":return ri;case"color":return uo;case"quaternion":return si;case"bool":case"boolean":return Si;case"string":return Ti}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function $m(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Jm(s.type);if(s.times===void 0){let t=[],n=[];df(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var $n={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Ia=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ff=new Ia,oi=class{constructor(e){this.manager=e!==void 0?e:ff,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var yi={},Yl=class extends Error{constructor(e,t){super(e),this.response=t}},Js=class extends oi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=$n.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(yi[e]!==void 0){yi[e].push({onLoad:t,onProgress:n,onError:i});return}yi[e]=[],yi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=yi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,_=0,m=new ReadableStream({start(p){v();function v(){h.read().then(({done:x,value:y})=>{if(x)p.close();else{_+=y.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,R=u.length;T<R;T++){let w=u[T];w.onProgress&&w.onProgress(M)}p.enqueue(y),v()}},x=>{p.error(x)})}}});return new Response(m)}else throw new Yl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{$n.add(`file:${e}`,c);let u=yi[e];delete yi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=yi[e];if(u===void 0)throw this.manager.itemError(e),c;delete yi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ns=new WeakMap,Pa=class extends oi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=$n.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Ns.get(o);h===void 0&&(h=[],Ns.set(o,h)),h.push({onLoad:t,onError:i})}return o}let a=ks("img");function l(){u(),t&&t(this);let h=Ns.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Ns.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),$n.remove(`image:${e}`);let d=Ns.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(h)}Ns.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),$n.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var ho=class extends oi{constructor(e){super(e)}load(e,t,n,i){let r=new Ut,o=new Pa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},rs=class extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},fo=class extends rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Bl=new Ve,dd=new D,fd=new D,po=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;dd.setFromMatrixPosition(e.matrixWorld),t.position.copy(dd),fd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fd),t.updateMatrixWorld(),Bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zl=class extends po{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ts*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},mo=class extends rs{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Zl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},pd=new Ve,Tr=new D,kl=new D,Kl=class extends po{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tr),kl.copy(n.position),kl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(kl),n.updateMatrixWorld(),i.makeTranslation(-Tr.x,-Tr.y,-Tr.z),pd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd,n.coordinateSystem,n.reversedDepth)}},os=class extends rs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Kl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ei=class extends Or{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Jl=class extends po{constructor(){super(new Ei(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},as=class extends rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new Jl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ai=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var zl=new WeakMap,go=class extends oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=$n.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(zl.has(o)===!0)i&&i(zl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return $n.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),zl.set(l,c),$n.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});$n.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var La=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Da=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){kt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;kt.multiplyQuaternionsFlat(e,o,e,t,e,n),kt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},_u="\\[\\]\\.:\\/",jm=new RegExp("["+_u+"]","g"),yu="[^"+_u+"]",Qm="[^"+_u.replace("\\.","")+"]",eg=/((?:WC+[\/:])*)/.source.replace("WC",yu),tg=/(WCOD+)?/.source.replace("WCOD",Qm),ng=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yu),ig=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yu),sg=new RegExp("^"+eg+tg+ng+ig+"$"),rg=["material","materials","bones","map"],$l=class{constructor(e,t,n){let i=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jm,"")}static parseTrackName(e){let t=sg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);rg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=$l;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ua=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Ki,endingEnd:Ki};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Wd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case qd:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Ic:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===Xd;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Cc){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Ji,i.endingEnd=Ji):(e?i.endingStart=this.zeroSlopeAtStart?Ji:Ki:i.endingStart=Ir,t?i.endingEnd=this.zeroSlopeAtEnd?Ji:Ki:i.endingEnd=Ir)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},og=new Float32Array(1),xo=class extends Qn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let d=i[h],f=d.name,g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}let _=t&&t._propertyBindings[h].binding.parsedPath;g=new Da(mt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new lo(new Float32Array(2),new Float32Array(2),1,og),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?wi.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ic),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Ua(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?wi.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};function vu(s,e,t,n){let i=ag(n);switch(t){case cu:return s*e;case $a:return s*e/i.components*i.byteLength;case ja:return s*e/i.components*i.byteLength;case uu:return s*e*2/i.components*i.byteLength;case Qa:return s*e*2/i.components*i.byteLength;case lu:return s*e*3/i.components*i.byteLength;case bn:return s*e*4/i.components*i.byteLength;case ec:return s*e*4/i.components*i.byteLength;case yo:case vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Mo:case bo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nc:case sc:return Math.max(s,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(s,8)*Math.max(e,8)/2;case rc:case oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case uc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case hc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case dc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case fc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case pc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case mc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case gc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case _c:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case bc:case Sc:case Tc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case wc:case Ec:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ac:case Rc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ag(s){switch(s){case Vn:case su:return{byteLength:1,components:1};case js:case ru:case Qs:return{byteLength:2,components:1};case Ka:case Ja:return{byteLength:2,components:4};case Bi:case Za:case Cn:return{byteLength:4,components:1};case ou:case au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Of(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function lg(s){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let _=h[f];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_g=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ug=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ng=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$g=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,n0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,i0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,c0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,l0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,h0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,y0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,E0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,R0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,D0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,k0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Z0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,K0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ex=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ix=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ux=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_x=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ex=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ix=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Px=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ux=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:ug,alphahash_pars_fragment:hg,alphamap_fragment:dg,alphamap_pars_fragment:fg,alphatest_fragment:pg,alphatest_pars_fragment:mg,aomap_fragment:gg,aomap_pars_fragment:xg,batching_pars_vertex:_g,batching_vertex:yg,begin_vertex:vg,beginnormal_vertex:Mg,bsdfs:bg,iridescence_fragment:Sg,bumpmap_pars_fragment:Tg,clipping_planes_fragment:wg,clipping_planes_pars_fragment:Eg,clipping_planes_pars_vertex:Ag,clipping_planes_vertex:Rg,color_fragment:Cg,color_pars_fragment:Ig,color_pars_vertex:Pg,color_vertex:Lg,common:Dg,cube_uv_reflection_fragment:Ug,defaultnormal_vertex:Ng,displacementmap_pars_vertex:Fg,displacementmap_vertex:Og,emissivemap_fragment:Bg,emissivemap_pars_fragment:kg,colorspace_fragment:zg,colorspace_pars_fragment:Vg,envmap_fragment:Gg,envmap_common_pars_fragment:Hg,envmap_pars_fragment:Wg,envmap_pars_vertex:Xg,envmap_physical_pars_fragment:n0,envmap_vertex:qg,fog_vertex:Yg,fog_pars_vertex:Zg,fog_fragment:Kg,fog_pars_fragment:Jg,gradientmap_pars_fragment:$g,lightmap_pars_fragment:jg,lights_lambert_fragment:Qg,lights_lambert_pars_fragment:e0,lights_pars_begin:t0,lights_toon_fragment:i0,lights_toon_pars_fragment:s0,lights_phong_fragment:r0,lights_phong_pars_fragment:o0,lights_physical_fragment:a0,lights_physical_pars_fragment:c0,lights_fragment_begin:l0,lights_fragment_maps:u0,lights_fragment_end:h0,logdepthbuf_fragment:d0,logdepthbuf_pars_fragment:f0,logdepthbuf_pars_vertex:p0,logdepthbuf_vertex:m0,map_fragment:g0,map_pars_fragment:x0,map_particle_fragment:_0,map_particle_pars_fragment:y0,metalnessmap_fragment:v0,metalnessmap_pars_fragment:M0,morphinstance_vertex:b0,morphcolor_vertex:S0,morphnormal_vertex:T0,morphtarget_pars_vertex:w0,morphtarget_vertex:E0,normal_fragment_begin:A0,normal_fragment_maps:R0,normal_pars_fragment:C0,normal_pars_vertex:I0,normal_vertex:P0,normalmap_pars_fragment:L0,clearcoat_normal_fragment_begin:D0,clearcoat_normal_fragment_maps:U0,clearcoat_pars_fragment:N0,iridescence_pars_fragment:F0,opaque_fragment:O0,packing:B0,premultiplied_alpha_fragment:k0,project_vertex:z0,dithering_fragment:V0,dithering_pars_fragment:G0,roughnessmap_fragment:H0,roughnessmap_pars_fragment:W0,shadowmap_pars_fragment:X0,shadowmap_pars_vertex:q0,shadowmap_vertex:Y0,shadowmask_pars_fragment:Z0,skinbase_vertex:K0,skinning_pars_vertex:J0,skinning_vertex:$0,skinnormal_vertex:j0,specularmap_fragment:Q0,specularmap_pars_fragment:ex,tonemapping_fragment:tx,tonemapping_pars_fragment:nx,transmission_fragment:ix,transmission_pars_fragment:sx,uv_pars_fragment:rx,uv_pars_vertex:ox,uv_vertex:ax,worldpos_vertex:cx,background_vert:lx,background_frag:ux,backgroundCube_vert:hx,backgroundCube_frag:dx,cube_vert:fx,cube_frag:px,depth_vert:mx,depth_frag:gx,distanceRGBA_vert:xx,distanceRGBA_frag:_x,equirect_vert:yx,equirect_frag:vx,linedashed_vert:Mx,linedashed_frag:bx,meshbasic_vert:Sx,meshbasic_frag:Tx,meshlambert_vert:wx,meshlambert_frag:Ex,meshmatcap_vert:Ax,meshmatcap_frag:Rx,meshnormal_vert:Cx,meshnormal_frag:Ix,meshphong_vert:Px,meshphong_frag:Lx,meshphysical_vert:Dx,meshphysical_frag:Ux,meshtoon_vert:Nx,meshtoon_frag:Fx,points_vert:Ox,points_frag:Bx,shadow_vert:kx,shadow_frag:zx,sprite_vert:Vx,sprite_frag:Gx},Te={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ci={basic:{uniforms:Qt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Qt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Xe(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Qt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Qt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Qt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Xe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Qt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Qt([Te.points,Te.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Qt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Qt([Te.common,Te.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Qt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Qt([Te.sprite,Te.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Qt([Te.common,Te.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Qt([Te.lights,Te.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ci.physical={uniforms:Qt([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Lc={r:0,b:0,g:0},fs=new An,Hx=new Ve;function Wx(s,e,t,n,i,r,o){let a=new Xe(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1,M=g(x);M===null?p(a,l):M&&M.isColor&&(p(M,1),y=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,y){let M=g(y);M&&(M.isCubeTexture||M.mapping===_o)?(u===void 0&&(u=new Ce(new jt(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:ds(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),fs.copy(y.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(fs)),u.material.toneMapped=ot.getTransfer(M.colorSpace)!==yt,(h!==M||d!==M.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,f=s.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ce(new At(2,2),new kn({name:"BackgroundMaterial",uniforms:ds(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ot.getTransfer(M.colorSpace)!==yt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(Lc,gu(s)),n.buffers.color.setClear(Lc.r,Lc.g,Lc.b,y,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m,dispose:v}}function Xx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(S,C,E,U,B){let F=!1,z=h(U,E,C);r!==z&&(r=z,c(r.object)),F=f(S,U,E,B),F&&g(S,U,E,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,y(S,C,E,U),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function h(S,C,E){let U=E.wireframe===!0,B=n[S.id];B===void 0&&(B={},n[S.id]=B);let F=B[C.id];F===void 0&&(F={},B[C.id]=F);let z=F[U];return z===void 0&&(z=d(l()),F[U]=z),z}function d(S){let C=[],E=[],U=[];for(let B=0;B<t;B++)C[B]=0,E[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:E,attributeDivisors:U,object:S,attributes:{},index:null}}function f(S,C,E,U){let B=r.attributes,F=C.attributes,z=0,X=E.getAttributes();for(let k in X)if(X[k].location>=0){let K=B[k],ee=F[k];if(ee===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor)),K===void 0||K.attribute!==ee||ee&&K.data!==ee.data)return!0;z++}return r.attributesNum!==z||r.index!==U}function g(S,C,E,U){let B={},F=C.attributes,z=0,X=E.getAttributes();for(let k in X)if(X[k].location>=0){let K=F[k];K===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(K=S.instanceColor));let ee={};ee.attribute=K,K&&K.data&&(ee.data=K.data),B[k]=ee,z++}r.attributes=B,r.attributesNum=z,r.index=U}function _(){let S=r.newAttributes;for(let C=0,E=S.length;C<E;C++)S[C]=0}function m(S){p(S,0)}function p(S,C){let E=r.newAttributes,U=r.enabledAttributes,B=r.attributeDivisors;E[S]=1,U[S]===0&&(s.enableVertexAttribArray(S),U[S]=1),B[S]!==C&&(s.vertexAttribDivisor(S,C),B[S]=C)}function v(){let S=r.newAttributes,C=r.enabledAttributes;for(let E=0,U=C.length;E<U;E++)C[E]!==S[E]&&(s.disableVertexAttribArray(E),C[E]=0)}function x(S,C,E,U,B,F,z){z===!0?s.vertexAttribIPointer(S,C,E,B,F):s.vertexAttribPointer(S,C,E,U,B,F)}function y(S,C,E,U){_();let B=U.attributes,F=E.getAttributes(),z=C.defaultAttributeValues;for(let X in F){let k=F[X];if(k.location>=0){let Z=B[X];if(Z===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor)),Z!==void 0){let K=Z.normalized,ee=Z.itemSize,Se=e.get(Z);if(Se===void 0)continue;let Ie=Se.buffer,Me=Se.type,we=Se.bytesPerElement,G=Me===s.INT||Me===s.UNSIGNED_INT||Z.gpuType===Za;if(Z.isInterleavedBufferAttribute){let Y=Z.data,ie=Y.stride,se=Z.offset;if(Y.isInstancedInterleavedBuffer){for(let he=0;he<k.locationSize;he++)p(k.location+he,Y.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let he=0;he<k.locationSize;he++)m(k.location+he);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let he=0;he<k.locationSize;he++)x(k.location+he,ee/k.locationSize,Me,K,ie*we,(se+ee/k.locationSize*he)*we,G)}else{if(Z.isInstancedBufferAttribute){for(let Y=0;Y<k.locationSize;Y++)p(k.location+Y,Z.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Y=0;Y<k.locationSize;Y++)m(k.location+Y);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let Y=0;Y<k.locationSize;Y++)x(k.location+Y,ee/k.locationSize,Me,K,ee*we,ee/k.locationSize*Y*we,G)}}else if(z!==void 0){let K=z[X];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(k.location,K);break;case 3:s.vertexAttrib3fv(k.location,K);break;case 4:s.vertexAttrib4fv(k.location,K);break;default:s.vertexAttrib1fv(k.location,K)}}}}v()}function M(){w();for(let S in n){let C=n[S];for(let E in C){let U=C[E];for(let B in U)u(U[B].object),delete U[B];delete C[E]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;let C=n[S.id];for(let E in C){let U=C[E];for(let B in U)u(U[B].object),delete U[B];delete C[E]}delete n[S.id]}function R(S){for(let C in n){let E=n[C];if(E[S.id]===void 0)continue;let U=E[S.id];for(let B in U)u(U[B].object),delete U[B];delete E[S.id]}}function w(){b(),o=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:b,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function qx(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Yx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==bn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let w=R===Qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Vn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Cn&&!w)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:M,maxSamples:T}}function Zx(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Yn,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{let v=r?0:n,x=v*4,y=p.clippingState||null;l.value=y,y=u(g,d,x,f);for(let M=0;M!==x;++M)y[M]=t[M];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==_;++x,y+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Kx(s){let e=new WeakMap;function t(o,a){return a===Xa?o.mapping=cs:a===qa&&(o.mapping=ls),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Xa||a===qa)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ga(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var sr=4,pf=[.125,.215,.35,.446,.526,.582],gs=20,Mu=new Ei,mf=new Xe,bu=null,Su=0,Tu=0,wu=!1,ms=(1+Math.sqrt(5))/2,ir=1/ms,gf=[new D(-ms,ir,0),new D(ms,ir,0),new D(-ir,0,ms),new D(ir,0,ms),new D(0,ms,-ir),new D(0,ms,ir),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Jx=new D,or=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=Jx}=r;bu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bu,Su,Tu),this._renderer.xr.enabled=wu,e.scissorTest=!1,Dc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Qs,format:bn,colorSpace:Zt,depthBuffer:!1},i=xf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$x(r)),this._blurMaterial=jx(r,e,t)}return i}_compileMaterial(e){let t=new Ce(this._lodPlanes[0],e);this._renderer.compile(t,Mu)}_sceneToCubeUV(e,t,n,i,r){let l=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(mf),h.toneMapping=Ci,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));let _=new vt({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),m=new Ce(new jt,_),p=!1,v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,p=!0):(_.color.copy(mf),p=!0);for(let x=0;x<6;x++){let y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[x]));let M=this._cubeSize;Dc(i,y*M,x>2?M:0,M,M),h.setRenderTarget(i),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===cs||e.mapping===ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_f());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ce(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Dc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Mu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gf[(i-r-1)%gf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ce(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*gs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):gs;m>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);let p=[],v=0;for(let R=0;R<gs;++R){let w=R/_,b=Math.exp(-w*w/2);p.push(b),R===0?v+=b:R<m&&(v+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let y=this._sizeLods[i],M=3*y*(i>x-sr?i-x+sr:0),T=4*(this._cubeSize-y);Dc(t,M,T,3*y,2*y),l.setRenderTarget(t),l.render(h,Mu)}};function $x(s){let e=[],t=[],n=[],i=s,r=s-sr+1+pf.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-sr?l=pf[o-s+sr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),x=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let T=0;T<f;T++){let R=T%3*2/3-1,w=T>2?0:-1,b=[R,w,0,R+2/3,w,0,R+2/3,w+1,0,R,w,0,R+2/3,w+1,0,R,w+1,0];v.set(b,_*g*T),x.set(d,m*g*T);let S=[T,T,T,T,T,T];y.set(S,p*g*T)}let M=new Mt;M.setAttribute("position",new Dt(v,_)),M.setAttribute("uv",new Dt(x,m)),M.setAttribute("faceIndex",new Dt(y,p)),e.push(M),i>sr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xf(s,e,t){let n=new ei(s,e,t);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function jx(s,e,t){let n=new Float32Array(gs),i=new D(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function _f(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function yf(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Nu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qx(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Xa||l===qa,u=l===cs||l===ls;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new or(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new or(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function e_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&zs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function t_(s,e,t,n){let i={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,g=h.attributes.position,_=0;if(f!==null){let v=f.array;_=f.version;for(let x=0,y=v.length;x<y;x+=3){let M=v[x+0],T=v[x+1],R=v[x+2];d.push(M,T,T,R,R,M)}}else if(g!==void 0){let v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){let M=x+0,T=x+1,R=x+2;d.push(M,T,T,R,R,M)}}else return;let m=new(mu(d)?Fr:Nr)(d,1);m.version=_;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function n_(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function i_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function s_(s,e,t){let n=new WeakMap,i=new dt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let b=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*M*4*h),R=new Dr(T,y,M,h);R.type=Cn,R.needsUpdate=!0;let w=x*4;for(let S=0;S<h;S++){let C=m[S],E=p[S],U=v[S],B=y*M*4*S;for(let F=0;F<C.count;F++){let z=F*w;f===!0&&(i.fromBufferAttribute(C,F),T[B+z+0]=i.x,T[B+z+1]=i.y,T[B+z+2]=i.z,T[B+z+3]=0),g===!0&&(i.fromBufferAttribute(E,F),T[B+z+4]=i.x,T[B+z+5]=i.y,T[B+z+6]=i.z,T[B+z+7]=0),_===!0&&(i.fromBufferAttribute(U,F),T[B+z+8]=i.x,T[B+z+9]=i.y,T[B+z+10]=i.z,T[B+z+11]=U.itemSize===4?i.w:1)}}d={count:h,texture:R,size:new ue(y,M)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function r_(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Bf=new Ut,vf=new Wr(1,1),kf=new Dr,zf=new pa,Vf=new Br,Mf=[],bf=[],Sf=new Float32Array(16),Tf=new Float32Array(9),wf=new Float32Array(4);function ar(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Mf[i];if(r===void 0&&(r=new Float32Array(i),Mf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function zt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Vt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Fc(s,e){let t=bf[e];t===void 0&&(t=new Int32Array(e),bf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function o_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function a_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2fv(this.addr,e),Vt(t,e)}}function c_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;s.uniform3fv(this.addr,e),Vt(t,e)}}function l_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4fv(this.addr,e),Vt(t,e)}}function u_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;wf.set(n),s.uniformMatrix2fv(this.addr,!1,wf),Vt(t,n)}}function h_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;Tf.set(n),s.uniformMatrix3fv(this.addr,!1,Tf),Vt(t,n)}}function d_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;Sf.set(n),s.uniformMatrix4fv(this.addr,!1,Sf),Vt(t,n)}}function f_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function p_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2iv(this.addr,e),Vt(t,e)}}function m_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;s.uniform3iv(this.addr,e),Vt(t,e)}}function g_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4iv(this.addr,e),Vt(t,e)}}function x_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function __(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2uiv(this.addr,e),Vt(t,e)}}function y_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;s.uniform3uiv(this.addr,e),Vt(t,e)}}function v_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4uiv(this.addr,e),Vt(t,e)}}function M_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(vf.compareFunction=du,r=vf):r=Bf,t.setTexture2D(e||r,i)}function b_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zf,i)}function S_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vf,i)}function T_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||kf,i)}function w_(s){switch(s){case 5126:return o_;case 35664:return a_;case 35665:return c_;case 35666:return l_;case 35674:return u_;case 35675:return h_;case 35676:return d_;case 5124:case 35670:return f_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return x_;case 36294:return __;case 36295:return y_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return T_}}function E_(s,e){s.uniform1fv(this.addr,e)}function A_(s,e){let t=ar(e,this.size,2);s.uniform2fv(this.addr,t)}function R_(s,e){let t=ar(e,this.size,3);s.uniform3fv(this.addr,t)}function C_(s,e){let t=ar(e,this.size,4);s.uniform4fv(this.addr,t)}function I_(s,e){let t=ar(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function P_(s,e){let t=ar(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function L_(s,e){let t=ar(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function D_(s,e){s.uniform1iv(this.addr,e)}function U_(s,e){s.uniform2iv(this.addr,e)}function N_(s,e){s.uniform3iv(this.addr,e)}function F_(s,e){s.uniform4iv(this.addr,e)}function O_(s,e){s.uniform1uiv(this.addr,e)}function B_(s,e){s.uniform2uiv(this.addr,e)}function k_(s,e){s.uniform3uiv(this.addr,e)}function z_(s,e){s.uniform4uiv(this.addr,e)}function V_(s,e,t){let n=this.cache,i=e.length,r=Fc(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Bf,r[o])}function G_(s,e,t){let n=this.cache,i=e.length,r=Fc(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||zf,r[o])}function H_(s,e,t){let n=this.cache,i=e.length,r=Fc(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Vf,r[o])}function W_(s,e,t){let n=this.cache,i=e.length,r=Fc(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||kf,r[o])}function X_(s){switch(s){case 5126:return E_;case 35664:return A_;case 35665:return R_;case 35666:return C_;case 35674:return I_;case 35675:return P_;case 35676:return L_;case 5124:case 35670:return D_;case 35667:case 35671:return U_;case 35668:case 35672:return N_;case 35669:case 35673:return F_;case 5125:return O_;case 36294:return B_;case 36295:return k_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return H_;case 36289:case 36303:case 36311:case 36292:return W_}}var Au=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=w_(t.type)}},Ru=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=X_(t.type)}},Cu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Eu=/(\w+)(\])?(\[|\.)?/g;function Ef(s,e){s.seq.push(e),s.map[e.id]=e}function q_(s,e,t){let n=s.name,i=n.length;for(Eu.lastIndex=0;;){let r=Eu.exec(n),o=Eu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ef(t,c===void 0?new Au(a,s,e):new Ru(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Cu(a),Ef(t,h)),t=h}}}var rr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);q_(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Af(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Y_=37297,Z_=0;function K_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Rf=new je;function J_(s){ot._getMatrix(Rf,ot.workingColorSpace,s);let e=`mat3( ${Rf.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(s)){case Pr:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Cf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+K_(s.getShaderSource(e),a)}else return r}function $_(s,e){let t=J_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function j_(s,e){let t;switch(e){case Od:t="Linear";break;case Bd:t="Reinhard";break;case kd:t="Cineon";break;case Wa:t="ACESFilmic";break;case Vd:t="AgX";break;case Gd:t="Neutral";break;case zd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Uc=new D;function Q_(){ot.getLuminanceCoefficients(Uc);let s=Uc.x.toFixed(4),e=Uc.y.toFixed(4),t=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ey(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function ty(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ny(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function To(s){return s!==""}function If(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var iy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iu(s){return s.replace(iy,ry)}var sy=new Map;function ry(s,e){let t=et[e];if(t===void 0){let n=sy.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Iu(t)}var oy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lf(s){return s.replace(oy,ay)}function ay(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Df(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cy(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ql?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Na?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function ly(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case cs:case ls:e="ENVMAP_TYPE_CUBE";break;case _o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uy(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function hy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ha:e="ENVMAP_BLENDING_MULTIPLY";break;case Nd:e="ENVMAP_BLENDING_MIX";break;case Fd:e="ENVMAP_BLENDING_ADD";break}return e}function dy(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function fy(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=cy(t),c=ly(t),u=uy(t),h=hy(t),d=dy(t),f=ey(t),g=ty(r),_=i.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(To).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(To).join(`
`),p.length>0&&(p+=`
`)):(m=[Df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),p=[Df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?et.tonemapping_pars_fragment:"",t.toneMapping!==Ci?j_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,$_("linearToOutputTexel",t.outputColorSpace),Q_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),o=Iu(o),o=If(o,t),o=Pf(o,t),a=Iu(a),a=If(a,t),a=Pf(a,t),o=Lf(o),a=Lf(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=v+m+o,y=v+p+a,M=Af(i,i.VERTEX_SHADER,x),T=Af(i,i.FRAGMENT_SHADER,y);i.attachShader(_,M),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(C){if(s.debug.checkShaderErrors){let E=i.getProgramInfoLog(_)||"",U=i.getShaderInfoLog(M)||"",B=i.getShaderInfoLog(T)||"",F=E.trim(),z=U.trim(),X=B.trim(),k=!0,Z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,M,T);else{let K=Cf(i,M,"vertex"),ee=Cf(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+K+`
`+ee)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(z===""||X==="")&&(Z=!1);Z&&(C.diagnostics={runnable:k,programLog:F,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(M),i.deleteShader(T),w=new rr(i,_),b=ny(i,_)}let w;this.getUniforms=function(){return w===void 0&&R(this),w};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,Y_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Z_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=T,this}var py=0,Pu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Lu(e),t.set(e,n)),n}},Lu=class{constructor(e){this.id=py++,this.code=e,this.usedTimes=0}};function my(s,e,t,n,i,r,o){let a=new Ur,l=new Pu,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,C,E,U){let B=E.fog,F=U.geometry,z=b.isMeshStandardMaterial?E.environment:null,X=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),k=X&&X.mapping===_o?X.image.height:null,Z=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let K=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ee=K!==void 0?K.length:0,Se=0;F.morphAttributes.position!==void 0&&(Se=1),F.morphAttributes.normal!==void 0&&(Se=2),F.morphAttributes.color!==void 0&&(Se=3);let Ie,Me,we,G;if(Z){let gt=ci[Z];Ie=gt.vertexShader,Me=gt.fragmentShader}else Ie=b.vertexShader,Me=b.fragmentShader,l.update(b),we=l.getVertexShaderID(b),G=l.getFragmentShaderID(b);let Y=s.getRenderTarget(),ie=s.state.buffers.depth.getReversed(),se=U.isInstancedMesh===!0,he=U.isBatchedMesh===!0,Be=!!b.map,lt=!!b.matcap,N=!!X,ae=!!b.aoMap,re=!!b.lightMap,te=!!b.bumpMap,ne=!!b.normalMap,_e=!!b.displacementMap,de=!!b.emissiveMap,le=!!b.metalnessMap,We=!!b.roughnessMap,ze=b.anisotropy>0,L=b.clearcoat>0,A=b.dispersion>0,q=b.iridescence>0,j=b.sheen>0,ce=b.transmission>0,Q=ze&&!!b.anisotropyMap,De=L&&!!b.clearcoatMap,ye=L&&!!b.clearcoatNormalMap,Ne=L&&!!b.clearcoatRoughnessMap,Fe=q&&!!b.iridescenceMap,pe=q&&!!b.iridescenceThicknessMap,Re=j&&!!b.sheenColorMap,Ze=j&&!!b.sheenRoughnessMap,ke=!!b.specularMap,Ee=!!b.specularColorMap,Qe=!!b.specularIntensityMap,V=ce&&!!b.transmissionMap,xe=ce&&!!b.thicknessMap,be=!!b.gradientMap,Le=!!b.alphaMap,me=b.alphaTest>0,oe=!!b.alphaHash,Oe=!!b.extensions,Je=Ci;b.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Je=s.toneMapping);let wt={shaderID:Z,shaderType:b.type,shaderName:b.name,vertexShader:Ie,fragmentShader:Me,defines:b.defines,customVertexShaderID:we,customFragmentShaderID:G,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:he,batchingColor:he&&U._colorsTexture!==null,instancing:se,instancingColor:se&&U.instanceColor!==null,instancingMorph:se&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Y===null?s.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Zt,alphaToCoverage:!!b.alphaToCoverage,map:Be,matcap:lt,envMap:N,envMapMode:N&&X.mapping,envMapCubeUVHeight:k,aoMap:ae,lightMap:re,bumpMap:te,normalMap:ne,displacementMap:d&&_e,emissiveMap:de,normalMapObjectSpace:ne&&b.normalMapType===Kd,normalMapTangentSpace:ne&&b.normalMapType===Pc,metalnessMap:le,roughnessMap:We,anisotropy:ze,anisotropyMap:Q,clearcoat:L,clearcoatMap:De,clearcoatNormalMap:ye,clearcoatRoughnessMap:Ne,dispersion:A,iridescence:q,iridescenceMap:Fe,iridescenceThicknessMap:pe,sheen:j,sheenColorMap:Re,sheenRoughnessMap:Ze,specularMap:ke,specularColorMap:Ee,specularIntensityMap:Qe,transmission:ce,transmissionMap:V,thicknessMap:xe,gradientMap:be,opaque:b.transparent===!1&&b.blending===$i&&b.alphaToCoverage===!1,alphaMap:Le,alphaTest:me,alphaHash:oe,combine:b.combine,mapUv:Be&&_(b.map.channel),aoMapUv:ae&&_(b.aoMap.channel),lightMapUv:re&&_(b.lightMap.channel),bumpMapUv:te&&_(b.bumpMap.channel),normalMapUv:ne&&_(b.normalMap.channel),displacementMapUv:_e&&_(b.displacementMap.channel),emissiveMapUv:de&&_(b.emissiveMap.channel),metalnessMapUv:le&&_(b.metalnessMap.channel),roughnessMapUv:We&&_(b.roughnessMap.channel),anisotropyMapUv:Q&&_(b.anisotropyMap.channel),clearcoatMapUv:De&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ye&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&_(b.sheenRoughnessMap.channel),specularMapUv:ke&&_(b.specularMap.channel),specularColorMapUv:Ee&&_(b.specularColorMap.channel),specularIntensityMapUv:Qe&&_(b.specularIntensityMap.channel),transmissionMapUv:V&&_(b.transmissionMap.channel),thicknessMapUv:xe&&_(b.thicknessMap.channel),alphaMapUv:Le&&_(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ne||ze),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(Be||Le),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ie,skinning:U.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Je,decodeVideoTexture:Be&&b.map.isVideoTexture===!0&&ot.getTransfer(b.map.colorSpace)===yt,decodeVideoTextureEmissive:de&&b.emissiveMap.isVideoTexture===!0&&ot.getTransfer(b.emissiveMap.colorSpace)===yt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Wt,flipSided:b.side===Kt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Oe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&b.extensions.multiDraw===!0||he)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function p(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)S.push(C),S.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(v(S,b),x(S,b),S.push(s.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function v(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let S=g[b.type],C;if(S){let E=ci[S];C=af.clone(E.uniforms)}else C=b.uniforms;return C}function M(b,S){let C;for(let E=0,U=u.length;E<U;E++){let B=u[E];if(B.cacheKey===S){C=B,++C.usedTimes;break}}return C===void 0&&(C=new fy(s,S,b,r),u.push(C)),C}function T(b){if(--b.usedTimes===0){let S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function R(b){l.remove(b)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:M,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:w}}function gy(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function xy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Uf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Nf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){let p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,g,_,m){let p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||xy),n.length>1&&n.sort(d||Uf),i.length>1&&i.sort(d||Uf)}function u(){for(let h=e,d=s.length;h<d;h++){let f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function _y(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Nf,s.set(n,[o])):i>=r.length?(o=new Nf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function yy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Xe};break;case"SpotLight":t={position:new D,direction:new D,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function vy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var My=0;function by(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Sy(s){let e=new yy,t=vy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let i=new D,r=new Ve,o=new Ve;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,x=0,y=0,M=0,T=0,R=0;c.sort(by);for(let b=0,S=c.length;b<S;b++){let C=c[b],E=C.color,U=C.intensity,B=C.distance,F=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=E.r*U,h+=E.g*U,d+=E.b*U;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],U);R++}else if(C.isDirectionalLight){let z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,k=t.get(C);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=C.shadow.matrix,v++}n.directional[f]=z,f++}else if(C.isSpotLight){let z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(E).multiplyScalar(U),z.distance=B,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[_]=z;let X=C.shadow;if(C.map&&(n.spotLightMap[M]=C.map,M++,X.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=X.matrix,C.castShadow){let k=t.get(C);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=F,y++}_++}else if(C.isRectAreaLight){let z=e.get(C);z.color.copy(E).multiplyScalar(U),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=z,m++}else if(C.isPointLight){let z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){let X=C.shadow,k=t.get(C);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,k.shadowCameraNear=X.camera.near,k.shadowCameraFar=X.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=C.shadow.matrix,x++}n.point[g]=z,g++}else if(C.isHemisphereLight){let z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(U),z.groundColor.copy(C.groundColor).multiplyScalar(U),n.hemi[p]=z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let w=n.hash;(w.directionalLength!==f||w.pointLength!==g||w.spotLength!==_||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==v||w.numPointShadows!==x||w.numSpotShadows!==y||w.numSpotMaps!==M||w.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+M-T,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,w.directionalLength=f,w.pointLength=g,w.spotLength=_,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=v,w.numPointShadows=x,w.numSpotShadows=y,w.numSpotMaps=M,w.numLightProbes=R,n.version=My++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0,m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let x=c[p];if(x.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(x.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(x.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Ff(s){let e=new Sy(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ty(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Ff(s),e.set(i,[a])):r>=o.length?(a=new Ff(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var wy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ey=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ay(s,e,t){let n=new qs,i=new ue,r=new ue,o=new dt,a=new wa({depthPacking:Zd}),l=new Ea,c={},u=t.maxTextureSize,h={[Bn]:Kt,[Kt]:Bn,[Wt]:Wt},d=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:wy,fragmentShader:Ey}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Mt;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ce(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ql;let p=this.type;this.render=function(T,R,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=s.getRenderTarget(),S=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),E=s.state;E.setBlending(Ri),E.buffers.depth.getReversed()===!0?E.buffers.color.setClear(0,0,0,0):E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);let U=p!==ai&&this.type===ai,B=p===ai&&this.type!==ai;for(let F=0,z=T.length;F<z;F++){let X=T[F],k=X.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let Z=k.getFrameExtents();if(i.multiply(Z),r.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Z.x),i.x=r.x*Z.x,k.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Z.y),i.y=r.y*Z.y,k.mapSize.y=r.y)),k.map===null||U===!0||B===!0){let ee=this.type!==ai?{minFilter:qt,magFilter:qt}:{};k.map!==null&&k.map.dispose(),k.map=new ei(i.x,i.y,ee),k.map.texture.name=X.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();let K=k.getViewportCount();for(let ee=0;ee<K;ee++){let Se=k.getViewport(ee);o.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),E.viewport(o),k.updateMatrices(X,ee),n=k.getFrustum(),y(R,w,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===ai&&v(k,w),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,S,C)};function v(T,R){let w=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ei(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,w,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,w,f,_,null)}function x(T,R,w,b){let S=null,C=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)S=C;else if(S=w.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let E=S.uuid,U=R.uuid,B=c[E];B===void 0&&(B={},c[E]=B);let F=B[U];F===void 0&&(F=S.clone(),B[U]=F,R.addEventListener("dispose",M)),S=F}if(S.visible=R.visible,S.wireframe=R.wireframe,b===ai?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let E=s.properties.get(S);E.light=w}return S}function y(T,R,w,b,S){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===ai)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let U=e.update(T),B=T.material;if(Array.isArray(B)){let F=U.groups;for(let z=0,X=F.length;z<X;z++){let k=F[z],Z=B[k.materialIndex];if(Z&&Z.visible){let K=x(T,Z,b,S);T.onBeforeShadow(s,T,R,w,U,K,k),s.renderBufferDirect(w,null,U,K,T,k),T.onAfterShadow(s,T,R,w,U,K,k)}}}else if(B.visible){let F=x(T,B,b,S);T.onBeforeShadow(s,T,R,w,U,F,null),s.renderBufferDirect(w,null,U,F,T,null),T.onAfterShadow(s,T,R,w,U,F,null)}}let E=T.children;for(let U=0,B=E.length;U<B;U++)y(E[U],R,w,b,S)}function M(T){T.target.removeEventListener("dispose",M);for(let w in c){let b=c[w],S=T.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var Ry={[Fa]:Oa,[Ba]:Va,[ka]:Ga,[ji]:za,[Oa]:Fa,[Va]:Ba,[Ga]:ka,[za]:ji};function Cy(s,e){function t(){let V=!1,xe=new dt,be=null,Le=new dt(0,0,0,0);return{setMask:function(me){be!==me&&!V&&(s.colorMask(me,me,me,me),be=me)},setLocked:function(me){V=me},setClear:function(me,oe,Oe,Je,wt){wt===!0&&(me*=Je,oe*=Je,Oe*=Je),xe.set(me,oe,Oe,Je),Le.equals(xe)===!1&&(s.clearColor(me,oe,Oe,Je),Le.copy(xe))},reset:function(){V=!1,be=null,Le.set(-1,0,0,0)}}}function n(){let V=!1,xe=!1,be=null,Le=null,me=null;return{setReversed:function(oe){if(xe!==oe){let Oe=e.get("EXT_clip_control");oe?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),xe=oe;let Je=me;me=null,this.setClear(Je)}},getReversed:function(){return xe},setTest:function(oe){oe?Y(s.DEPTH_TEST):ie(s.DEPTH_TEST)},setMask:function(oe){be!==oe&&!V&&(s.depthMask(oe),be=oe)},setFunc:function(oe){if(xe&&(oe=Ry[oe]),Le!==oe){switch(oe){case Fa:s.depthFunc(s.NEVER);break;case Oa:s.depthFunc(s.ALWAYS);break;case Ba:s.depthFunc(s.LESS);break;case ji:s.depthFunc(s.LEQUAL);break;case ka:s.depthFunc(s.EQUAL);break;case za:s.depthFunc(s.GEQUAL);break;case Va:s.depthFunc(s.GREATER);break;case Ga:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=oe}},setLocked:function(oe){V=oe},setClear:function(oe){me!==oe&&(xe&&(oe=1-oe),s.clearDepth(oe),me=oe)},reset:function(){V=!1,be=null,Le=null,me=null,xe=!1}}}function i(){let V=!1,xe=null,be=null,Le=null,me=null,oe=null,Oe=null,Je=null,wt=null;return{setTest:function(gt){V||(gt?Y(s.STENCIL_TEST):ie(s.STENCIL_TEST))},setMask:function(gt){xe!==gt&&!V&&(s.stencilMask(gt),xe=gt)},setFunc:function(gt,fi,qn){(be!==gt||Le!==fi||me!==qn)&&(s.stencilFunc(gt,fi,qn),be=gt,Le=fi,me=qn)},setOp:function(gt,fi,qn){(oe!==gt||Oe!==fi||Je!==qn)&&(s.stencilOp(gt,fi,qn),oe=gt,Oe=fi,Je=qn)},setLocked:function(gt){V=gt},setClear:function(gt){wt!==gt&&(s.clearStencil(gt),wt=gt)},reset:function(){V=!1,xe=null,be=null,Le=null,me=null,oe=null,Oe=null,Je=null,wt=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,x=null,y=null,M=null,T=null,R=new Xe(0,0,0),w=0,b=!1,S=null,C=null,E=null,U=null,B=null,F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,X=0,k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),z=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),z=X>=2);let Z=null,K={},ee=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),Ie=new dt().fromArray(ee),Me=new dt().fromArray(Se);function we(V,xe,be,Le){let me=new Uint8Array(4),oe=s.createTexture();s.bindTexture(V,oe),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<be;Oe++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(xe,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(xe+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return oe}let G={};G[s.TEXTURE_2D]=we(s.TEXTURE_2D,s.TEXTURE_2D,1),G[s.TEXTURE_CUBE_MAP]=we(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[s.TEXTURE_2D_ARRAY]=we(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),G[s.TEXTURE_3D]=we(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(s.DEPTH_TEST),o.setFunc(ji),te(!1),ne(jl),Y(s.CULL_FACE),ae(Ri);function Y(V){u[V]!==!0&&(s.enable(V),u[V]=!0)}function ie(V){u[V]!==!1&&(s.disable(V),u[V]=!1)}function se(V,xe){return h[V]!==xe?(s.bindFramebuffer(V,xe),h[V]=xe,V===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=xe),V===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=xe),!0):!1}function he(V,xe){let be=f,Le=!1;if(V){be=d.get(xe),be===void 0&&(be=[],d.set(xe,be));let me=V.textures;if(be.length!==me.length||be[0]!==s.COLOR_ATTACHMENT0){for(let oe=0,Oe=me.length;oe<Oe;oe++)be[oe]=s.COLOR_ATTACHMENT0+oe;be.length=me.length,Le=!0}}else be[0]!==s.BACK&&(be[0]=s.BACK,Le=!0);Le&&s.drawBuffers(be)}function Be(V){return g!==V?(s.useProgram(V),g=V,!0):!1}let lt={[Oi]:s.FUNC_ADD,[_d]:s.FUNC_SUBTRACT,[yd]:s.FUNC_REVERSE_SUBTRACT};lt[vd]=s.MIN,lt[Md]=s.MAX;let N={[bd]:s.ZERO,[Sd]:s.ONE,[Td]:s.SRC_COLOR,[la]:s.SRC_ALPHA,[Id]:s.SRC_ALPHA_SATURATE,[Rd]:s.DST_COLOR,[Ed]:s.DST_ALPHA,[wd]:s.ONE_MINUS_SRC_COLOR,[ua]:s.ONE_MINUS_SRC_ALPHA,[Cd]:s.ONE_MINUS_DST_COLOR,[Ad]:s.ONE_MINUS_DST_ALPHA,[Pd]:s.CONSTANT_COLOR,[Ld]:s.ONE_MINUS_CONSTANT_COLOR,[Dd]:s.CONSTANT_ALPHA,[Ud]:s.ONE_MINUS_CONSTANT_ALPHA};function ae(V,xe,be,Le,me,oe,Oe,Je,wt,gt){if(V===Ri){_===!0&&(ie(s.BLEND),_=!1);return}if(_===!1&&(Y(s.BLEND),_=!0),V!==xd){if(V!==m||gt!==b){if((p!==Oi||y!==Oi)&&(s.blendEquation(s.FUNC_ADD),p=Oi,y=Oi),gt)switch(V){case $i:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case eu:s.blendFunc(s.ONE,s.ONE);break;case tu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case $i:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case eu:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case tu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}v=null,x=null,M=null,T=null,R.set(0,0,0),w=0,m=V,b=gt}return}me=me||xe,oe=oe||be,Oe=Oe||Le,(xe!==p||me!==y)&&(s.blendEquationSeparate(lt[xe],lt[me]),p=xe,y=me),(be!==v||Le!==x||oe!==M||Oe!==T)&&(s.blendFuncSeparate(N[be],N[Le],N[oe],N[Oe]),v=be,x=Le,M=oe,T=Oe),(Je.equals(R)===!1||wt!==w)&&(s.blendColor(Je.r,Je.g,Je.b,wt),R.copy(Je),w=wt),m=V,b=!1}function re(V,xe){V.side===Wt?ie(s.CULL_FACE):Y(s.CULL_FACE);let be=V.side===Kt;xe&&(be=!be),te(be),V.blending===$i&&V.transparent===!1?ae(Ri):ae(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let Le=V.stencilWrite;a.setTest(Le),Le&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),de(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Y(s.SAMPLE_ALPHA_TO_COVERAGE):ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(V){S!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),S=V)}function ne(V){V!==md?(Y(s.CULL_FACE),V!==C&&(V===jl?s.cullFace(s.BACK):V===gd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ie(s.CULL_FACE),C=V}function _e(V){V!==E&&(z&&s.lineWidth(V),E=V)}function de(V,xe,be){V?(Y(s.POLYGON_OFFSET_FILL),(U!==xe||B!==be)&&(s.polygonOffset(xe,be),U=xe,B=be)):ie(s.POLYGON_OFFSET_FILL)}function le(V){V?Y(s.SCISSOR_TEST):ie(s.SCISSOR_TEST)}function We(V){V===void 0&&(V=s.TEXTURE0+F-1),Z!==V&&(s.activeTexture(V),Z=V)}function ze(V,xe,be){be===void 0&&(Z===null?be=s.TEXTURE0+F-1:be=Z);let Le=K[be];Le===void 0&&(Le={type:void 0,texture:void 0},K[be]=Le),(Le.type!==V||Le.texture!==xe)&&(Z!==be&&(s.activeTexture(be),Z=be),s.bindTexture(V,xe||G[V]),Le.type=V,Le.texture=xe)}function L(){let V=K[Z];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function j(){try{s.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{s.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Q(){try{s.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{s.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{s.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{s.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{s.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{s.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(V){Ie.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ie.copy(V))}function Ze(V){Me.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Me.copy(V))}function ke(V,xe){let be=c.get(xe);be===void 0&&(be=new WeakMap,c.set(xe,be));let Le=be.get(V);Le===void 0&&(Le=s.getUniformBlockIndex(xe,V.name),be.set(V,Le))}function Ee(V,xe){let Le=c.get(xe).get(V);l.get(xe)!==Le&&(s.uniformBlockBinding(xe,Le,V.__bindingPointIndex),l.set(xe,Le))}function Qe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},Z=null,K={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,x=null,y=null,M=null,T=null,R=new Xe(0,0,0),w=0,b=!1,S=null,C=null,E=null,U=null,B=null,Ie.set(0,0,s.canvas.width,s.canvas.height),Me.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:ie,bindFramebuffer:se,drawBuffers:he,useProgram:Be,setBlending:ae,setMaterial:re,setFlipSided:te,setCullFace:ne,setLineWidth:_e,setPolygonOffset:de,setScissorTest:le,activeTexture:We,bindTexture:ze,unbindTexture:L,compressedTexImage2D:A,compressedTexImage3D:q,texImage2D:Fe,texImage3D:pe,updateUBOMapping:ke,uniformBlockBinding:Ee,texStorage2D:ye,texStorage3D:Ne,texSubImage2D:j,texSubImage3D:ce,compressedTexSubImage2D:Q,compressedTexSubImage3D:De,scissor:Re,viewport:Ze,reset:Qe}}function Iy(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,A){return f?new OffscreenCanvas(L,A):ks("canvas")}function _(L,A,q){let j=1,ce=ze(L);if((ce.width>q||ce.height>q)&&(j=q/Math.max(ce.width,ce.height)),j<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Q=Math.floor(j*ce.width),De=Math.floor(j*ce.height);h===void 0&&(h=g(Q,De));let ye=A?g(Q,De):h;return ye.width=Q,ye.height=De,ye.getContext("2d").drawImage(L,0,0,Q,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Q+"x"+De+")."),ye}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){s.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(L,A,q,j,ce=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Q=A;if(A===s.RED&&(q===s.FLOAT&&(Q=s.R32F),q===s.HALF_FLOAT&&(Q=s.R16F),q===s.UNSIGNED_BYTE&&(Q=s.R8)),A===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(Q=s.R8UI),q===s.UNSIGNED_SHORT&&(Q=s.R16UI),q===s.UNSIGNED_INT&&(Q=s.R32UI),q===s.BYTE&&(Q=s.R8I),q===s.SHORT&&(Q=s.R16I),q===s.INT&&(Q=s.R32I)),A===s.RG&&(q===s.FLOAT&&(Q=s.RG32F),q===s.HALF_FLOAT&&(Q=s.RG16F),q===s.UNSIGNED_BYTE&&(Q=s.RG8)),A===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(Q=s.RG8UI),q===s.UNSIGNED_SHORT&&(Q=s.RG16UI),q===s.UNSIGNED_INT&&(Q=s.RG32UI),q===s.BYTE&&(Q=s.RG8I),q===s.SHORT&&(Q=s.RG16I),q===s.INT&&(Q=s.RG32I)),A===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),q===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),q===s.UNSIGNED_INT&&(Q=s.RGB32UI),q===s.BYTE&&(Q=s.RGB8I),q===s.SHORT&&(Q=s.RGB16I),q===s.INT&&(Q=s.RGB32I)),A===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),q===s.UNSIGNED_INT&&(Q=s.RGBA32UI),q===s.BYTE&&(Q=s.RGBA8I),q===s.SHORT&&(Q=s.RGBA16I),q===s.INT&&(Q=s.RGBA32I)),A===s.RGB&&(q===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(Q=s.R11F_G11F_B10F)),A===s.RGBA){let De=ce?Pr:ot.getTransfer(j);q===s.FLOAT&&(Q=s.RGBA32F),q===s.HALF_FLOAT&&(Q=s.RGBA16F),q===s.UNSIGNED_BYTE&&(Q=De===yt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(L,A){let q;return L?A===null||A===Bi||A===er?q=s.DEPTH24_STENCIL8:A===Cn?q=s.DEPTH32F_STENCIL8:A===js&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Bi||A===er?q=s.DEPTH_COMPONENT24:A===Cn?q=s.DEPTH_COMPONENT32F:A===js&&(q=s.DEPTH_COMPONENT16),q}function M(L,A){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==qt&&L.minFilter!==Yt?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function T(L){let A=L.target;A.removeEventListener("dispose",T),w(A),A.isVideoTexture&&u.delete(A)}function R(L){let A=L.target;A.removeEventListener("dispose",R),S(A)}function w(L){let A=n.get(L);if(A.__webglInit===void 0)return;let q=L.source,j=d.get(q);if(j){let ce=j[A.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&b(L),Object.keys(j).length===0&&d.delete(q)}n.remove(L)}function b(L){let A=n.get(L);s.deleteTexture(A.__webglTexture);let q=L.source,j=d.get(q);delete j[A.__cacheKey],o.memory.textures--}function S(L){let A=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(A.__webglFramebuffer[j]))for(let ce=0;ce<A.__webglFramebuffer[j].length;ce++)s.deleteFramebuffer(A.__webglFramebuffer[j][ce]);else s.deleteFramebuffer(A.__webglFramebuffer[j]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[j])}else{if(Array.isArray(A.__webglFramebuffer))for(let j=0;j<A.__webglFramebuffer.length;j++)s.deleteFramebuffer(A.__webglFramebuffer[j]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let j=0;j<A.__webglColorRenderbuffer.length;j++)A.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[j]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let q=L.textures;for(let j=0,ce=q.length;j<ce;j++){let Q=n.get(q[j]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(q[j])}n.remove(L)}let C=0;function E(){C=0}function U(){let L=C;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),C+=1,L}function B(L){let A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function F(L,A){let q=n.get(L);if(L.isVideoTexture&&le(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){let j=L.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(q,L,A);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+A)}function z(L,A){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){G(q,L,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+A)}function X(L,A){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){G(q,L,A);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+A)}function k(L,A){let q=n.get(L);if(L.version>0&&q.__version!==L.version){Y(q,L,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+A)}let Z={[jn]:s.REPEAT,[Kn]:s.CLAMP_TO_EDGE,[Os]:s.MIRRORED_REPEAT},K={[qt]:s.NEAREST,[Ya]:s.NEAREST_MIPMAP_NEAREST,[us]:s.NEAREST_MIPMAP_LINEAR,[Yt]:s.LINEAR,[$s]:s.LINEAR_MIPMAP_NEAREST,[fn]:s.LINEAR_MIPMAP_LINEAR},ee={[Jd]:s.NEVER,[nf]:s.ALWAYS,[$d]:s.LESS,[du]:s.LEQUAL,[jd]:s.EQUAL,[tf]:s.GEQUAL,[Qd]:s.GREATER,[ef]:s.NOTEQUAL};function Se(L,A){if(A.type===Cn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Yt||A.magFilter===$s||A.magFilter===us||A.magFilter===fn||A.minFilter===Yt||A.minFilter===$s||A.minFilter===us||A.minFilter===fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Z[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Z[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Z[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,K[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,K[A.minFilter]),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,ee[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===qt||A.minFilter!==us&&A.minFilter!==fn||A.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ie(L,A){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",T));let j=A.source,ce=d.get(j);ce===void 0&&(ce={},d.set(j,ce));let Q=B(A);if(Q!==L.__cacheKey){ce[Q]===void 0&&(ce[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ce[Q].usedTimes++;let De=ce[L.__cacheKey];De!==void 0&&(ce[L.__cacheKey].usedTimes--,De.usedTimes===0&&b(A)),L.__cacheKey=Q,L.__webglTexture=ce[Q].texture}return q}function Me(L,A,q){return Math.floor(Math.floor(L/q)/A)}function we(L,A,q,j){let Q=L.updateRanges;if(Q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,q,j,A.data);else{Q.sort((pe,Re)=>pe.start-Re.start);let De=0;for(let pe=1;pe<Q.length;pe++){let Re=Q[De],Ze=Q[pe],ke=Re.start+Re.count,Ee=Me(Ze.start,A.width,4),Qe=Me(Re.start,A.width,4);Ze.start<=ke+1&&Ee===Qe&&Me(Ze.start+Ze.count-1,A.width,4)===Ee?Re.count=Math.max(Re.count,Ze.start+Ze.count-Re.start):(++De,Q[De]=Ze)}Q.length=De+1;let ye=s.getParameter(s.UNPACK_ROW_LENGTH),Ne=s.getParameter(s.UNPACK_SKIP_PIXELS),Fe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let pe=0,Re=Q.length;pe<Re;pe++){let Ze=Q[pe],ke=Math.floor(Ze.start/4),Ee=Math.ceil(Ze.count/4),Qe=ke%A.width,V=Math.floor(ke/A.width),xe=Ee,be=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Qe),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,Qe,V,xe,be,q,j,A.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ye),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ne),s.pixelStorei(s.UNPACK_SKIP_ROWS,Fe)}}function G(L,A,q){let j=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(j=s.TEXTURE_3D);let ce=Ie(L,A),Q=A.source;t.bindTexture(j,L.__webglTexture,s.TEXTURE0+q);let De=n.get(Q);if(Q.version!==De.__version||ce===!0){t.activeTexture(s.TEXTURE0+q);let ye=ot.getPrimaries(ot.workingColorSpace),Ne=A.colorSpace===Gn?null:ot.getPrimaries(A.colorSpace),Fe=A.colorSpace===Gn||ye===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let pe=_(A.image,!1,i.maxTextureSize);pe=We(A,pe);let Re=r.convert(A.format,A.colorSpace),Ze=r.convert(A.type),ke=x(A.internalFormat,Re,Ze,A.colorSpace,A.isVideoTexture);Se(j,A);let Ee,Qe=A.mipmaps,V=A.isVideoTexture!==!0,xe=De.__version===void 0||ce===!0,be=Q.dataReady,Le=M(A,pe);if(A.isDepthTexture)ke=y(A.format===tr,A.type),xe&&(V?t.texStorage2D(s.TEXTURE_2D,1,ke,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,ke,pe.width,pe.height,0,Re,Ze,null));else if(A.isDataTexture)if(Qe.length>0){V&&xe&&t.texStorage2D(s.TEXTURE_2D,Le,ke,Qe[0].width,Qe[0].height);for(let me=0,oe=Qe.length;me<oe;me++)Ee=Qe[me],V?be&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Ee.width,Ee.height,Re,Ze,Ee.data):t.texImage2D(s.TEXTURE_2D,me,ke,Ee.width,Ee.height,0,Re,Ze,Ee.data);A.generateMipmaps=!1}else V?(xe&&t.texStorage2D(s.TEXTURE_2D,Le,ke,pe.width,pe.height),be&&we(A,pe,Re,Ze)):t.texImage2D(s.TEXTURE_2D,0,ke,pe.width,pe.height,0,Re,Ze,pe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){V&&xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,ke,Qe[0].width,Qe[0].height,pe.depth);for(let me=0,oe=Qe.length;me<oe;me++)if(Ee=Qe[me],A.format!==bn)if(Re!==null)if(V){if(be)if(A.layerUpdates.size>0){let Oe=vu(Ee.width,Ee.height,A.format,A.type);for(let Je of A.layerUpdates){let wt=Ee.data.subarray(Je*Oe/Ee.data.BYTES_PER_ELEMENT,(Je+1)*Oe/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,Je,Ee.width,Ee.height,1,Re,wt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ee.width,Ee.height,pe.depth,Re,Ee.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,ke,Ee.width,Ee.height,pe.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?be&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ee.width,Ee.height,pe.depth,Re,Ze,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,me,ke,Ee.width,Ee.height,pe.depth,0,Re,Ze,Ee.data)}else{V&&xe&&t.texStorage2D(s.TEXTURE_2D,Le,ke,Qe[0].width,Qe[0].height);for(let me=0,oe=Qe.length;me<oe;me++)Ee=Qe[me],A.format!==bn?Re!==null?V?be&&t.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Ee.width,Ee.height,Re,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,me,ke,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?be&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Ee.width,Ee.height,Re,Ze,Ee.data):t.texImage2D(s.TEXTURE_2D,me,ke,Ee.width,Ee.height,0,Re,Ze,Ee.data)}else if(A.isDataArrayTexture)if(V){if(xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,ke,pe.width,pe.height,pe.depth),be)if(A.layerUpdates.size>0){let me=vu(pe.width,pe.height,A.format,A.type);for(let oe of A.layerUpdates){let Oe=pe.data.subarray(oe*me/pe.data.BYTES_PER_ELEMENT,(oe+1)*me/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,oe,pe.width,pe.height,1,Re,Ze,Oe)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Re,Ze,pe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,pe.width,pe.height,pe.depth,0,Re,Ze,pe.data);else if(A.isData3DTexture)V?(xe&&t.texStorage3D(s.TEXTURE_3D,Le,ke,pe.width,pe.height,pe.depth),be&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Re,Ze,pe.data)):t.texImage3D(s.TEXTURE_3D,0,ke,pe.width,pe.height,pe.depth,0,Re,Ze,pe.data);else if(A.isFramebufferTexture){if(xe)if(V)t.texStorage2D(s.TEXTURE_2D,Le,ke,pe.width,pe.height);else{let me=pe.width,oe=pe.height;for(let Oe=0;Oe<Le;Oe++)t.texImage2D(s.TEXTURE_2D,Oe,ke,me,oe,0,Re,Ze,null),me>>=1,oe>>=1}}else if(Qe.length>0){if(V&&xe){let me=ze(Qe[0]);t.texStorage2D(s.TEXTURE_2D,Le,ke,me.width,me.height)}for(let me=0,oe=Qe.length;me<oe;me++)Ee=Qe[me],V?be&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Re,Ze,Ee):t.texImage2D(s.TEXTURE_2D,me,ke,Re,Ze,Ee);A.generateMipmaps=!1}else if(V){if(xe){let me=ze(pe);t.texStorage2D(s.TEXTURE_2D,Le,ke,me.width,me.height)}be&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Ze,pe)}else t.texImage2D(s.TEXTURE_2D,0,ke,Re,Ze,pe);m(A)&&p(j),De.__version=Q.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Y(L,A,q){if(A.image.length!==6)return;let j=Ie(L,A),ce=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+q);let Q=n.get(ce);if(ce.version!==Q.__version||j===!0){t.activeTexture(s.TEXTURE0+q);let De=ot.getPrimaries(ot.workingColorSpace),ye=A.colorSpace===Gn?null:ot.getPrimaries(A.colorSpace),Ne=A.colorSpace===Gn||De===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let Fe=A.isCompressedTexture||A.image[0].isCompressedTexture,pe=A.image[0]&&A.image[0].isDataTexture,Re=[];for(let oe=0;oe<6;oe++)!Fe&&!pe?Re[oe]=_(A.image[oe],!0,i.maxCubemapSize):Re[oe]=pe?A.image[oe].image:A.image[oe],Re[oe]=We(A,Re[oe]);let Ze=Re[0],ke=r.convert(A.format,A.colorSpace),Ee=r.convert(A.type),Qe=x(A.internalFormat,ke,Ee,A.colorSpace),V=A.isVideoTexture!==!0,xe=Q.__version===void 0||j===!0,be=ce.dataReady,Le=M(A,Ze);Se(s.TEXTURE_CUBE_MAP,A);let me;if(Fe){V&&xe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,Qe,Ze.width,Ze.height);for(let oe=0;oe<6;oe++){me=Re[oe].mipmaps;for(let Oe=0;Oe<me.length;Oe++){let Je=me[Oe];A.format!==bn?ke!==null?V?be&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe,0,0,Je.width,Je.height,ke,Je.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe,Qe,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe,0,0,Je.width,Je.height,ke,Ee,Je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe,Qe,Je.width,Je.height,0,ke,Ee,Je.data)}}}else{if(me=A.mipmaps,V&&xe){me.length>0&&Le++;let oe=ze(Re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,Qe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(pe){V?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Re[oe].width,Re[oe].height,ke,Ee,Re[oe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Qe,Re[oe].width,Re[oe].height,0,ke,Ee,Re[oe].data);for(let Oe=0;Oe<me.length;Oe++){let wt=me[Oe].image[oe].image;V?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe+1,0,0,wt.width,wt.height,ke,Ee,wt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe+1,Qe,wt.width,wt.height,0,ke,Ee,wt.data)}}else{V?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ke,Ee,Re[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Qe,ke,Ee,Re[oe]);for(let Oe=0;Oe<me.length;Oe++){let Je=me[Oe];V?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe+1,0,0,ke,Ee,Je.image[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe+1,Qe,ke,Ee,Je.image[oe])}}}m(A)&&p(s.TEXTURE_CUBE_MAP),Q.__version=ce.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ie(L,A,q,j,ce,Q){let De=r.convert(q.format,q.colorSpace),ye=r.convert(q.type),Ne=x(q.internalFormat,De,ye,q.colorSpace),Fe=n.get(A),pe=n.get(q);if(pe.__renderTarget=A,!Fe.__hasExternalTextures){let Re=Math.max(1,A.width>>Q),Ze=Math.max(1,A.height>>Q);ce===s.TEXTURE_3D||ce===s.TEXTURE_2D_ARRAY?t.texImage3D(ce,Q,Ne,Re,Ze,A.depth,0,De,ye,null):t.texImage2D(ce,Q,Ne,Re,Ze,0,De,ye,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),de(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,ce,pe.__webglTexture,0,_e(A)):(ce===s.TEXTURE_2D||ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,ce,pe.__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function se(L,A,q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer){let j=A.depthTexture,ce=j&&j.isDepthTexture?j.type:null,Q=y(A.stencilBuffer,ce),De=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=_e(A);de(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,Q,A.width,A.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,Q,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Q,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,L)}else{let j=A.textures;for(let ce=0;ce<j.length;ce++){let Q=j[ce],De=r.convert(Q.format,Q.colorSpace),ye=r.convert(Q.type),Ne=x(Q.internalFormat,De,ye,Q.colorSpace),Fe=_e(A);q&&de(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,Ne,A.width,A.height):de(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Fe,Ne,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function he(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(A.depthTexture);j.__renderTarget=A,(!j.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);let ce=j.__webglTexture,Q=_e(A);if(A.depthTexture.format===Bs)de(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0);else if(A.depthTexture.format===tr)de(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Be(L){let A=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){let j=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),j){let ce=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,j.removeEventListener("dispose",ce)};j.addEventListener("dispose",ce),A.__depthDisposeCallback=ce}A.__boundDepthTexture=j}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");let j=L.texture.mipmaps;j&&j.length>0?he(A.__webglFramebuffer[0],L):he(A.__webglFramebuffer,L)}else if(q){A.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[j]),A.__webglDepthbuffer[j]===void 0)A.__webglDepthbuffer[j]=s.createRenderbuffer(),se(A.__webglDepthbuffer[j],L,!1);else{let ce=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=A.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,Q)}}else{let j=L.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),se(A.__webglDepthbuffer,L,!1);else{let ce=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,Q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(L,A,q){let j=n.get(L);A!==void 0&&ie(j.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Be(L)}function N(L){let A=L.texture,q=n.get(L),j=n.get(A);L.addEventListener("dispose",R);let ce=L.textures,Q=L.isWebGLCubeRenderTarget===!0,De=ce.length>1;if(De||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=A.version,o.memory.textures++),Q){q.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[ye]=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)q.__webglFramebuffer[ye][Ne]=s.createFramebuffer()}else q.__webglFramebuffer[ye]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let ye=0;ye<A.mipmaps.length;ye++)q.__webglFramebuffer[ye]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(De)for(let ye=0,Ne=ce.length;ye<Ne;ye++){let Fe=n.get(ce[ye]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&de(L)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ye=0;ye<ce.length;ye++){let Ne=ce[ye];q.__webglColorRenderbuffer[ye]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[ye]);let Fe=r.convert(Ne.format,Ne.colorSpace),pe=r.convert(Ne.type),Re=x(Ne.internalFormat,Fe,pe,Ne.colorSpace,L.isXRRenderTarget===!0),Ze=_e(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Re,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,q.__webglColorRenderbuffer[ye])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),se(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Se(s.TEXTURE_CUBE_MAP,A);for(let ye=0;ye<6;ye++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)ie(q.__webglFramebuffer[ye][Ne],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ne);else ie(q.__webglFramebuffer[ye],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(A)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let ye=0,Ne=ce.length;ye<Ne;ye++){let Fe=ce[ye],pe=n.get(Fe),Re=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Re=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Re,pe.__webglTexture),Se(Re,Fe),ie(q.__webglFramebuffer,L,Fe,s.COLOR_ATTACHMENT0+ye,Re,0),m(Fe)&&p(Re)}t.unbindTexture()}else{let ye=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ye=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,j.__webglTexture),Se(ye,A),A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)ie(q.__webglFramebuffer[Ne],L,A,s.COLOR_ATTACHMENT0,ye,Ne);else ie(q.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,ye,0);m(A)&&p(ye),t.unbindTexture()}L.depthBuffer&&Be(L)}function ae(L){let A=L.textures;for(let q=0,j=A.length;q<j;q++){let ce=A[q];if(m(ce)){let Q=v(L),De=n.get(ce).__webglTexture;t.bindTexture(Q,De),p(Q),t.unbindTexture()}}}let re=[],te=[];function ne(L){if(L.samples>0){if(de(L)===!1){let A=L.textures,q=L.width,j=L.height,ce=s.COLOR_BUFFER_BIT,Q=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=n.get(L),ye=A.length>1;if(ye)for(let Fe=0;Fe<A.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);let Ne=L.texture.mipmaps;Ne&&Ne.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Fe=0;Fe<A.length;Fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ce|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ce|=s.STENCIL_BUFFER_BIT)),ye){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[Fe]);let pe=n.get(A[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pe,0)}s.blitFramebuffer(0,0,q,j,0,0,q,j,ce,s.NEAREST),l===!0&&(re.length=0,te.length=0,re.push(s.COLOR_ATTACHMENT0+Fe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(re.push(Q),te.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,te)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ye)for(let Fe=0;Fe<A.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,De.__webglColorRenderbuffer[Fe]);let pe=n.get(A[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,pe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){let A=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function _e(L){return Math.min(i.maxSamples,L.samples)}function de(L){let A=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function le(L){let A=o.render.frame;u.get(L)!==A&&(u.set(L,A),L.update())}function We(L,A){let q=L.colorSpace,j=L.format,ce=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Zt&&q!==Gn&&(ot.getTransfer(q)===yt?(j!==bn||ce!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}function ze(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=E,this.setTexture2D=F,this.setTexture2DArray=z,this.setTexture3D=X,this.setTextureCube=k,this.rebindTextures=lt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=de}function Py(s,e){function t(n,i=Gn){let r,o=ot.getTransfer(i);if(n===Vn)return s.UNSIGNED_BYTE;if(n===Ka)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ja)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ou)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===au)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===su)return s.BYTE;if(n===ru)return s.SHORT;if(n===js)return s.UNSIGNED_SHORT;if(n===Za)return s.INT;if(n===Bi)return s.UNSIGNED_INT;if(n===Cn)return s.FLOAT;if(n===Qs)return s.HALF_FLOAT;if(n===cu)return s.ALPHA;if(n===lu)return s.RGB;if(n===bn)return s.RGBA;if(n===Bs)return s.DEPTH_COMPONENT;if(n===tr)return s.DEPTH_STENCIL;if(n===$a)return s.RED;if(n===ja)return s.RED_INTEGER;if(n===uu)return s.RG;if(n===Qa)return s.RG_INTEGER;if(n===ec)return s.RGBA_INTEGER;if(n===yo||n===vo||n===Mo||n===bo)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tc||n===nc||n===ic||n===sc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rc||n===oc||n===ac)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rc||n===oc)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ac)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cc||n===lc||n===uc||n===hc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===_c||n===yc||n===vc||n===Mc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_c)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bc||n===Sc||n===Tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===bc)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wc||n===Ec||n===Ac||n===Rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ac)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Ly=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Du=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Xr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new kn({vertexShader:Ly,fragmentShader:Dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ce(new At(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uu=class extends Qn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new Du,p={},v=t.getContextAttributes(),x=null,y=null,M=[],T=[],R=new ue,w=null,b=new Ht;b.viewport=new dt;let S=new Ht;S.viewport=new dt;let C=[b,S],E=new La,U=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Y=M[G];return Y===void 0&&(Y=new Gs,M[G]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(G){let Y=M[G];return Y===void 0&&(Y=new Gs,M[G]=Y),Y.getGripSpace()},this.getHand=function(G){let Y=M[G];return Y===void 0&&(Y=new Gs,M[G]=Y),Y.getHandSpace()};function F(G){let Y=T.indexOf(G.inputSource);if(Y===-1)return;let ie=M[Y];ie!==void 0&&(ie.update(G.inputSource,G.frame,c||o),ie.dispatchEvent({type:G.type,data:G.inputSource}))}function z(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",X);for(let G=0;G<M.length;G++){let Y=T[G];Y!==null&&(T[G]=null,M[G].disconnect(Y))}U=null,B=null,m.reset();for(let G in p)delete p[G];e.setRenderTarget(x),f=null,d=null,h=null,i=null,y=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",z),i.addEventListener("inputsourceschange",X),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,se=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=v.stencil?tr:Bs,se=v.stencil?er:Bi);let Be={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Be),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ei(d.textureWidth,d.textureHeight,{format:bn,type:Vn,depthTexture:new Wr(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ie={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ei(f.framebufferWidth,f.framebufferHeight,{format:bn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),we.setContext(i),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(G){for(let Y=0;Y<G.removed.length;Y++){let ie=G.removed[Y],se=T.indexOf(ie);se>=0&&(T[se]=null,M[se].disconnect(ie))}for(let Y=0;Y<G.added.length;Y++){let ie=G.added[Y],se=T.indexOf(ie);if(se===-1){for(let Be=0;Be<M.length;Be++)if(Be>=T.length){T.push(ie),se=Be;break}else if(T[Be]===null){T[Be]=ie,se=Be;break}if(se===-1)break}let he=M[se];he&&he.connect(ie)}}let k=new D,Z=new D;function K(G,Y,ie){k.setFromMatrixPosition(Y.matrixWorld),Z.setFromMatrixPosition(ie.matrixWorld);let se=k.distanceTo(Z),he=Y.projectionMatrix.elements,Be=ie.projectionMatrix.elements,lt=he[14]/(he[10]-1),N=he[14]/(he[10]+1),ae=(he[9]+1)/he[5],re=(he[9]-1)/he[5],te=(he[8]-1)/he[0],ne=(Be[8]+1)/Be[0],_e=lt*te,de=lt*ne,le=se/(-te+ne),We=le*-te;if(Y.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(We),G.translateZ(le),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),he[10]===-1)G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let ze=lt+le,L=N+le,A=_e-We,q=de+(se-We),j=ae*N/L*ze,ce=re*N/L*ze;G.projectionMatrix.makePerspective(A,q,j,ce,ze,L),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function ee(G,Y){Y===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Y.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;let Y=G.near,ie=G.far;m.texture!==null&&(m.depthNear>0&&(Y=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),E.near=S.near=b.near=Y,E.far=S.far=b.far=ie,(U!==E.near||B!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),U=E.near,B=E.far),E.layers.mask=G.layers.mask|6,b.layers.mask=E.layers.mask&3,S.layers.mask=E.layers.mask&5;let se=G.parent,he=E.cameras;ee(E,se);for(let Be=0;Be<he.length;Be++)ee(he[Be],se);he.length===2?K(E,b,S):E.projectionMatrix.copy(b.projectionMatrix),Se(G,E,se)};function Se(G,Y,ie){ie===null?G.matrix.copy(Y.matrixWorld):(G.matrix.copy(ie.matrixWorld),G.matrix.invert(),G.matrix.multiply(Y.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ts*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(E)},this.getCameraTexture=function(G){return p[G]};let Ie=null;function Me(G,Y){if(u=Y.getViewerPose(c||o),g=Y,u!==null){let ie=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let se=!1;ie.length!==E.cameras.length&&(E.cameras.length=0,se=!0);for(let N=0;N<ie.length;N++){let ae=ie[N],re=null;if(f!==null)re=f.getViewport(ae);else{let ne=h.getViewSubImage(d,ae);re=ne.viewport,N===0&&(e.setRenderTargetTextures(y,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(y))}let te=C[N];te===void 0&&(te=new Ht,te.layers.enable(N),te.viewport=new dt,C[N]=te),te.matrix.fromArray(ae.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ae.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(re.x,re.y,re.width,re.height),N===0&&(E.matrix.copy(te.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),se===!0&&E.cameras.push(te)}let he=i.enabledFeatures;if(he&&he.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let N=h.getDepthInformation(ie[0]);N&&N.isValid&&N.texture&&m.init(N,i.renderState)}if(he&&he.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let N=0;N<ie.length;N++){let ae=ie[N].camera;if(ae){let re=p[ae];re||(re=new Xr,p[ae]=re);let te=h.getCameraImage(ae);re.sourceTexture=te}}}}for(let ie=0;ie<M.length;ie++){let se=T[ie],he=M[ie];se!==null&&he!==void 0&&he.update(se,Y,c||o)}Ie&&Ie(G,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}let we=new Of;we.setAnimationLoop(Me),this.setAnimationLoop=function(G){Ie=G},this.dispose=function(){}}},ps=new An,Uy=new Ve;function Ny(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,ps.copy(y),ps.x*=-1,ps.y*=-1,ps.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),m.envMapRotation.value.setFromMatrix4(Uy.makeRotationFromEuler(ps)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Fy(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){let y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=i[v.id];y===void 0&&(g(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",m));let M=x.program;n.updateUBOMapping(v,M);let T=e.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function u(v){let x=h();v.__bindingPointIndex=x;let y=s.createBuffer(),M=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,M,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let x=i[v.id],y=v.uniforms,M=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,R=y.length;T<R;T++){let w=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,S=w.length;b<S;b++){let C=w[b];if(f(C,T,b,M)===!0){let E=C.__offset,U=Array.isArray(C.value)?C.value:[C.value],B=0;for(let F=0;F<U.length;F++){let z=U[F],X=_(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,E+B,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,B),B+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,E,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,y,M){let T=v.value,R=x+"_"+y;if(M[R]===void 0)return typeof T=="number"||typeof T=="boolean"?M[R]=T:M[R]=T.clone(),!0;{let w=M[R];if(typeof T=="number"||typeof T=="boolean"){if(w!==T)return M[R]=T,!0}else if(w.equals(T)===!1)return w.copy(T),!0}return!1}function g(v){let x=v.uniforms,y=0,M=16;for(let R=0,w=x.length;R<w;R++){let b=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,C=b.length;S<C;S++){let E=b[S],U=Array.isArray(E.value)?E.value:[E.value];for(let B=0,F=U.length;B<F;B++){let z=U[B],X=_(z),k=y%M,Z=k%X.boundary,K=k+Z;y+=Z,K!==0&&M-K<X.storage&&(y+=M-K),E.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,y+=X.storage}}}let T=y%M;return T>0&&(y+=M-T),v.__size=y,v.__cache={},this}function _(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){let x=v.target;x.removeEventListener("dispose",m);let y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Nc=class{constructor(e={}){let{canvas:t=sf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,M=!1;this._outputColorSpace=ut;let T=0,R=0,w=null,b=-1,S=null,C=new dt,E=new dt,U=null,B=new Xe(0),F=0,z=t.width,X=t.height,k=1,Z=null,K=null,ee=new dt(0,0,z,X),Se=new dt(0,0,z,X),Ie=!1,Me=new qs,we=!1,G=!1,Y=new Ve,ie=new D,se=new dt,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Be=!1;function lt(){return w===null?k:1}let N=n;function ae(I,H){return t.getContext(I,H)}try{let I={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",me,!1),N===null){let H="webgl2";if(N=ae(H,I),N===null)throw ae(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let re,te,ne,_e,de,le,We,ze,L,A,q,j,ce,Q,De,ye,Ne,Fe,pe,Re,Ze,ke,Ee,Qe;function V(){re=new e_(N),re.init(),ke=new Py(N,re),te=new Yx(N,re,e,ke),ne=new Cy(N,re),te.reversedDepthBuffer&&d&&ne.buffers.depth.setReversed(!0),_e=new i_(N),de=new gy,le=new Iy(N,re,ne,de,te,ke,_e),We=new Kx(y),ze=new Qx(y),L=new lg(N),Ee=new Xx(N,L),A=new t_(N,L,_e,Ee),q=new r_(N,A,L,_e),pe=new s_(N,te,le),ye=new Zx(de),j=new my(y,We,ze,re,te,Ee,ye),ce=new Ny(y,de),Q=new _y,De=new Ty(re),Fe=new Wx(y,We,ze,ne,q,f,l),Ne=new Ay(y,q,te),Qe=new Fy(N,_e,te,ne),Re=new qx(N,re,_e),Ze=new n_(N,re,_e),_e.programs=j.programs,y.capabilities=te,y.extensions=re,y.properties=de,y.renderLists=Q,y.shadowMap=Ne,y.state=ne,y.info=_e}V();let xe=new Uu(y,N);this.xr=xe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let I=re.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=re.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(I){I!==void 0&&(k=I,this.setSize(z,X,!1))},this.getSize=function(I){return I.set(z,X)},this.setSize=function(I,H,J=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=I,X=H,t.width=Math.floor(I*k),t.height=Math.floor(H*k),J===!0&&(t.style.width=I+"px",t.style.height=H+"px"),this.setViewport(0,0,I,H)},this.getDrawingBufferSize=function(I){return I.set(z*k,X*k).floor()},this.setDrawingBufferSize=function(I,H,J){z=I,X=H,k=J,t.width=Math.floor(I*J),t.height=Math.floor(H*J),this.setViewport(0,0,I,H)},this.getCurrentViewport=function(I){return I.copy(C)},this.getViewport=function(I){return I.copy(ee)},this.setViewport=function(I,H,J,$){I.isVector4?ee.set(I.x,I.y,I.z,I.w):ee.set(I,H,J,$),ne.viewport(C.copy(ee).multiplyScalar(k).round())},this.getScissor=function(I){return I.copy(Se)},this.setScissor=function(I,H,J,$){I.isVector4?Se.set(I.x,I.y,I.z,I.w):Se.set(I,H,J,$),ne.scissor(E.copy(Se).multiplyScalar(k).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(I){ne.setScissorTest(Ie=I)},this.setOpaqueSort=function(I){Z=I},this.setTransparentSort=function(I){K=I},this.getClearColor=function(I){return I.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(I=!0,H=!0,J=!0){let $=0;if(I){let W=!1;if(w!==null){let ge=w.texture.format;W=ge===ec||ge===Qa||ge===ja}if(W){let ge=w.texture.type,Ae=ge===Vn||ge===Bi||ge===js||ge===er||ge===Ka||ge===Ja,Ue=Fe.getClearColor(),Pe=Fe.getClearAlpha(),Ye=Ue.r,Ke=Ue.g,Ge=Ue.b;Ae?(g[0]=Ye,g[1]=Ke,g[2]=Ge,g[3]=Pe,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Ye,_[1]=Ke,_[2]=Ge,_[3]=Pe,N.clearBufferiv(N.COLOR,0,_))}else $|=N.COLOR_BUFFER_BIT}H&&($|=N.DEPTH_BUFFER_BIT),J&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Fe.dispose(),Q.dispose(),De.dispose(),de.dispose(),We.dispose(),ze.dispose(),q.dispose(),Ee.dispose(),Qe.dispose(),j.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",qn),xe.removeEventListener("sessionend",Sh),Gi.stop()};function be(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let I=_e.autoReset,H=Ne.enabled,J=Ne.autoUpdate,$=Ne.needsUpdate,W=Ne.type;V(),_e.autoReset=I,Ne.enabled=H,Ne.autoUpdate=J,Ne.needsUpdate=$,Ne.type=W}function me(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function oe(I){let H=I.target;H.removeEventListener("dispose",oe),Oe(H)}function Oe(I){Je(I),de.remove(I)}function Je(I){let H=de.get(I).programs;H!==void 0&&(H.forEach(function(J){j.releaseProgram(J)}),I.isShaderMaterial&&j.releaseShaderCache(I))}this.renderBufferDirect=function(I,H,J,$,W,ge){H===null&&(H=he);let Ae=W.isMesh&&W.matrixWorld.determinant()<0,Ue=Cp(I,H,J,$,W);ne.setMaterial($,Ae);let Pe=J.index,Ye=1;if($.wireframe===!0){if(Pe=A.getWireframeAttribute(J),Pe===void 0)return;Ye=2}let Ke=J.drawRange,Ge=J.attributes.position,rt=Ke.start*Ye,bt=(Ke.start+Ke.count)*Ye;ge!==null&&(rt=Math.max(rt,ge.start*Ye),bt=Math.min(bt,(ge.start+ge.count)*Ye)),Pe!==null?(rt=Math.max(rt,0),bt=Math.min(bt,Pe.count)):Ge!=null&&(rt=Math.max(rt,0),bt=Math.min(bt,Ge.count));let Lt=bt-rt;if(Lt<0||Lt===1/0)return;Ee.setup(W,$,Ue,J,Pe);let Et,St=Re;if(Pe!==null&&(Et=L.get(Pe),St=Ze,St.setIndex(Et)),W.isMesh)$.wireframe===!0?(ne.setLineWidth($.wireframeLinewidth*lt()),St.setMode(N.LINES)):St.setMode(N.TRIANGLES);else if(W.isLine){let qe=$.linewidth;qe===void 0&&(qe=1),ne.setLineWidth(qe*lt()),W.isLineSegments?St.setMode(N.LINES):W.isLineLoop?St.setMode(N.LINE_LOOP):St.setMode(N.LINE_STRIP)}else W.isPoints?St.setMode(N.POINTS):W.isSprite&&St.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))St.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let qe=W._multiDrawStarts,Ct=W._multiDrawCounts,ht=W._multiDrawCount,mn=Pe?L.get(Pe).bytesPerElement:1,Ms=de.get($).currentProgram.getUniforms();for(let gn=0;gn<ht;gn++)Ms.setValue(N,"_gl_DrawID",gn),St.render(qe[gn]/mn,Ct[gn])}else if(W.isInstancedMesh)St.renderInstances(rt,Lt,W.count);else if(J.isInstancedBufferGeometry){let qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ct=Math.min(J.instanceCount,qe);St.renderInstances(rt,Lt,Ct)}else St.render(rt,Lt)};function wt(I,H,J){I.transparent===!0&&I.side===Wt&&I.forceSinglePass===!1?(I.side=Kt,I.needsUpdate=!0,Uo(I,H,J),I.side=Bn,I.needsUpdate=!0,Uo(I,H,J),I.side=Wt):Uo(I,H,J)}this.compile=function(I,H,J=null){J===null&&(J=I),p=De.get(J),p.init(H),x.push(p),J.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),I!==J&&I.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();let $=new Set;return I.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ge=W.material;if(ge)if(Array.isArray(ge))for(let Ae=0;Ae<ge.length;Ae++){let Ue=ge[Ae];wt(Ue,J,W),$.add(Ue)}else wt(ge,J,W),$.add(ge)}),p=x.pop(),$},this.compileAsync=function(I,H,J=null){let $=this.compile(I,H,J);return new Promise(W=>{function ge(){if($.forEach(function(Ae){de.get(Ae).currentProgram.isReady()&&$.delete(Ae)}),$.size===0){W(I);return}setTimeout(ge,10)}re.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let gt=null;function fi(I){gt&&gt(I)}function qn(){Gi.stop()}function Sh(){Gi.start()}let Gi=new Of;Gi.setAnimationLoop(fi),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(I){gt=I,xe.setAnimationLoop(I),I===null?Gi.stop():Gi.start()},xe.addEventListener("sessionstart",qn),xe.addEventListener("sessionend",Sh),this.render=function(I,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(H),H=xe.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,H,w),p=De.get(I,x.length),p.init(H),x.push(p),Y.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Me.setFromProjectionMatrix(Y,On,H.reversedDepth),G=this.localClippingEnabled,we=ye.init(this.clippingPlanes,G),m=Q.get(I,v.length),m.init(),v.push(m),xe.enabled===!0&&xe.isPresenting===!0){let ge=y.xr.getDepthSensingMesh();ge!==null&&ll(ge,H,-1/0,y.sortObjects)}ll(I,H,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Z,K),Be=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,Be&&Fe.addToRenderList(m,I),this.info.render.frame++,we===!0&&ye.beginShadows();let J=p.state.shadowsArray;Ne.render(J,I,H),we===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,W=m.transmissive;if(p.setupLights(),H.isArrayCamera){let ge=H.cameras;if(W.length>0)for(let Ae=0,Ue=ge.length;Ae<Ue;Ae++){let Pe=ge[Ae];wh($,W,I,Pe)}Be&&Fe.render(I);for(let Ae=0,Ue=ge.length;Ae<Ue;Ae++){let Pe=ge[Ae];Th(m,I,Pe,Pe.viewport)}}else W.length>0&&wh($,W,I,H),Be&&Fe.render(I),Th(m,I,H);w!==null&&R===0&&(le.updateMultisampleRenderTarget(w),le.updateRenderTargetMipmap(w)),I.isScene===!0&&I.onAfterRender(y,I,H),Ee.resetDefaultState(),b=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],we===!0&&ye.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function ll(I,H,J,$){if(I.visible===!1)return;if(I.layers.test(H.layers)){if(I.isGroup)J=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(H);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Me.intersectsSprite(I)){$&&se.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Y);let Ae=q.update(I),Ue=I.material;Ue.visible&&m.push(I,Ae,Ue,J,se.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Me.intersectsObject(I))){let Ae=q.update(I),Ue=I.material;if($&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),se.copy(I.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),se.copy(Ae.boundingSphere.center)),se.applyMatrix4(I.matrixWorld).applyMatrix4(Y)),Array.isArray(Ue)){let Pe=Ae.groups;for(let Ye=0,Ke=Pe.length;Ye<Ke;Ye++){let Ge=Pe[Ye],rt=Ue[Ge.materialIndex];rt&&rt.visible&&m.push(I,Ae,rt,J,se.z,Ge)}}else Ue.visible&&m.push(I,Ae,Ue,J,se.z,null)}}let ge=I.children;for(let Ae=0,Ue=ge.length;Ae<Ue;Ae++)ll(ge[Ae],H,J,$)}function Th(I,H,J,$){let W=I.opaque,ge=I.transmissive,Ae=I.transparent;p.setupLightsView(J),we===!0&&ye.setGlobalState(y.clippingPlanes,J),$&&ne.viewport(C.copy($)),W.length>0&&Do(W,H,J),ge.length>0&&Do(ge,H,J),Ae.length>0&&Do(Ae,H,J),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function wh(I,H,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new ei(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Qs:Vn,minFilter:fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));let ge=p.state.transmissionRenderTarget[$.id],Ae=$.viewport||C;ge.setSize(Ae.z*y.transmissionResolutionScale,Ae.w*y.transmissionResolutionScale);let Ue=y.getRenderTarget(),Pe=y.getActiveCubeFace(),Ye=y.getActiveMipmapLevel();y.setRenderTarget(ge),y.getClearColor(B),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear(),Be&&Fe.render(J);let Ke=y.toneMapping;y.toneMapping=Ci;let Ge=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),we===!0&&ye.setGlobalState(y.clippingPlanes,$),Do(I,J,$),le.updateMultisampleRenderTarget(ge),le.updateRenderTargetMipmap(ge),re.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let bt=0,Lt=H.length;bt<Lt;bt++){let Et=H[bt],St=Et.object,qe=Et.geometry,Ct=Et.material,ht=Et.group;if(Ct.side===Wt&&St.layers.test($.layers)){let mn=Ct.side;Ct.side=Kt,Ct.needsUpdate=!0,Eh(St,J,$,qe,Ct,ht),Ct.side=mn,Ct.needsUpdate=!0,rt=!0}}rt===!0&&(le.updateMultisampleRenderTarget(ge),le.updateRenderTargetMipmap(ge))}y.setRenderTarget(Ue,Pe,Ye),y.setClearColor(B,F),Ge!==void 0&&($.viewport=Ge),y.toneMapping=Ke}function Do(I,H,J){let $=H.isScene===!0?H.overrideMaterial:null;for(let W=0,ge=I.length;W<ge;W++){let Ae=I[W],Ue=Ae.object,Pe=Ae.geometry,Ye=Ae.group,Ke=Ae.material;Ke.allowOverride===!0&&$!==null&&(Ke=$),Ue.layers.test(J.layers)&&Eh(Ue,H,J,Pe,Ke,Ye)}}function Eh(I,H,J,$,W,ge){I.onBeforeRender(y,H,J,$,W,ge),I.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),W.onBeforeRender(y,H,J,$,I,ge),W.transparent===!0&&W.side===Wt&&W.forceSinglePass===!1?(W.side=Kt,W.needsUpdate=!0,y.renderBufferDirect(J,H,$,W,I,ge),W.side=Bn,W.needsUpdate=!0,y.renderBufferDirect(J,H,$,W,I,ge),W.side=Wt):y.renderBufferDirect(J,H,$,W,I,ge),I.onAfterRender(y,H,J,$,W,ge)}function Uo(I,H,J){H.isScene!==!0&&(H=he);let $=de.get(I),W=p.state.lights,ge=p.state.shadowsArray,Ae=W.state.version,Ue=j.getParameters(I,W.state,ge,H,J),Pe=j.getProgramCacheKey(Ue),Ye=$.programs;$.environment=I.isMeshStandardMaterial?H.environment:null,$.fog=H.fog,$.envMap=(I.isMeshStandardMaterial?ze:We).get(I.envMap||$.environment),$.envMapRotation=$.environment!==null&&I.envMap===null?H.environmentRotation:I.envMapRotation,Ye===void 0&&(I.addEventListener("dispose",oe),Ye=new Map,$.programs=Ye);let Ke=Ye.get(Pe);if(Ke!==void 0){if($.currentProgram===Ke&&$.lightsStateVersion===Ae)return Rh(I,Ue),Ke}else Ue.uniforms=j.getUniforms(I),I.onBeforeCompile(Ue,y),Ke=j.acquireProgram(Ue,Pe),Ye.set(Pe,Ke),$.uniforms=Ue.uniforms;let Ge=$.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ge.clippingPlanes=ye.uniform),Rh(I,Ue),$.needsLights=Pp(I),$.lightsStateVersion=Ae,$.needsLights&&(Ge.ambientLightColor.value=W.state.ambient,Ge.lightProbe.value=W.state.probe,Ge.directionalLights.value=W.state.directional,Ge.directionalLightShadows.value=W.state.directionalShadow,Ge.spotLights.value=W.state.spot,Ge.spotLightShadows.value=W.state.spotShadow,Ge.rectAreaLights.value=W.state.rectArea,Ge.ltc_1.value=W.state.rectAreaLTC1,Ge.ltc_2.value=W.state.rectAreaLTC2,Ge.pointLights.value=W.state.point,Ge.pointLightShadows.value=W.state.pointShadow,Ge.hemisphereLights.value=W.state.hemi,Ge.directionalShadowMap.value=W.state.directionalShadowMap,Ge.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ge.spotShadowMap.value=W.state.spotShadowMap,Ge.spotLightMatrix.value=W.state.spotLightMatrix,Ge.spotLightMap.value=W.state.spotLightMap,Ge.pointShadowMap.value=W.state.pointShadowMap,Ge.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=Ke,$.uniformsList=null,Ke}function Ah(I){if(I.uniformsList===null){let H=I.currentProgram.getUniforms();I.uniformsList=rr.seqWithValue(H.seq,I.uniforms)}return I.uniformsList}function Rh(I,H){let J=de.get(I);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function Cp(I,H,J,$,W){H.isScene!==!0&&(H=he),le.resetTextureUnits();let ge=H.fog,Ae=$.isMeshStandardMaterial?H.environment:null,Ue=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Zt,Pe=($.isMeshStandardMaterial?ze:We).get($.envMap||Ae),Ye=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ke=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ge=!!J.morphAttributes.position,rt=!!J.morphAttributes.normal,bt=!!J.morphAttributes.color,Lt=Ci;$.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Lt=y.toneMapping);let Et=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,St=Et!==void 0?Et.length:0,qe=de.get($),Ct=p.state.lights;if(we===!0&&(G===!0||I!==S)){let tn=I===S&&$.id===b;ye.setState($,I,tn)}let ht=!1;$.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ct.state.version||qe.outputColorSpace!==Ue||W.isBatchedMesh&&qe.batching===!1||!W.isBatchedMesh&&qe.batching===!0||W.isBatchedMesh&&qe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&qe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&qe.instancing===!1||!W.isInstancedMesh&&qe.instancing===!0||W.isSkinnedMesh&&qe.skinning===!1||!W.isSkinnedMesh&&qe.skinning===!0||W.isInstancedMesh&&qe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&qe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&qe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&qe.instancingMorph===!1&&W.morphTexture!==null||qe.envMap!==Pe||$.fog===!0&&qe.fog!==ge||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ye.numPlanes||qe.numIntersection!==ye.numIntersection)||qe.vertexAlphas!==Ye||qe.vertexTangents!==Ke||qe.morphTargets!==Ge||qe.morphNormals!==rt||qe.morphColors!==bt||qe.toneMapping!==Lt||qe.morphTargetsCount!==St)&&(ht=!0):(ht=!0,qe.__version=$.version);let mn=qe.currentProgram;ht===!0&&(mn=Uo($,H,W));let Ms=!1,gn=!1,gr=!1,It=mn.getUniforms(),Sn=qe.uniforms;if(ne.useProgram(mn.program)&&(Ms=!0,gn=!0,gr=!0),$.id!==b&&(b=$.id,gn=!0),Ms||S!==I){ne.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),It.setValue(N,"projectionMatrix",I.projectionMatrix),It.setValue(N,"viewMatrix",I.matrixWorldInverse);let ln=It.map.cameraPosition;ln!==void 0&&ln.setValue(N,ie.setFromMatrixPosition(I.matrixWorld)),te.logarithmicDepthBuffer&&It.setValue(N,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&It.setValue(N,"isOrthographic",I.isOrthographicCamera===!0),S!==I&&(S=I,gn=!0,gr=!0)}if(W.isSkinnedMesh){It.setOptional(N,W,"bindMatrix"),It.setOptional(N,W,"bindMatrixInverse");let tn=W.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),It.setValue(N,"boneTexture",tn.boneTexture,le))}W.isBatchedMesh&&(It.setOptional(N,W,"batchingTexture"),It.setValue(N,"batchingTexture",W._matricesTexture,le),It.setOptional(N,W,"batchingIdTexture"),It.setValue(N,"batchingIdTexture",W._indirectTexture,le),It.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&It.setValue(N,"batchingColorTexture",W._colorsTexture,le));let Tn=J.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&pe.update(W,J,mn),(gn||qe.receiveShadow!==W.receiveShadow)&&(qe.receiveShadow=W.receiveShadow,It.setValue(N,"receiveShadow",W.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Sn.envMap.value=Pe,Sn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&H.environment!==null&&(Sn.envMapIntensity.value=H.environmentIntensity),gn&&(It.setValue(N,"toneMappingExposure",y.toneMappingExposure),qe.needsLights&&Ip(Sn,gr),ge&&$.fog===!0&&ce.refreshFogUniforms(Sn,ge),ce.refreshMaterialUniforms(Sn,$,k,X,p.state.transmissionRenderTarget[I.id]),rr.upload(N,Ah(qe),Sn,le)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(rr.upload(N,Ah(qe),Sn,le),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&It.setValue(N,"center",W.center),It.setValue(N,"modelViewMatrix",W.modelViewMatrix),It.setValue(N,"normalMatrix",W.normalMatrix),It.setValue(N,"modelMatrix",W.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let tn=$.uniformsGroups;for(let ln=0,ul=tn.length;ln<ul;ln++){let Hi=tn[ln];Qe.update(Hi,mn),Qe.bind(Hi,mn)}}return mn}function Ip(I,H){I.ambientLightColor.needsUpdate=H,I.lightProbe.needsUpdate=H,I.directionalLights.needsUpdate=H,I.directionalLightShadows.needsUpdate=H,I.pointLights.needsUpdate=H,I.pointLightShadows.needsUpdate=H,I.spotLights.needsUpdate=H,I.spotLightShadows.needsUpdate=H,I.rectAreaLights.needsUpdate=H,I.hemisphereLights.needsUpdate=H}function Pp(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(I,H,J){let $=de.get(I);$.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),de.get(I.texture).__webglTexture=H,de.get(I.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:J,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,H){let J=de.get(I);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0};let Lp=N.createFramebuffer();this.setRenderTarget=function(I,H=0,J=0){w=I,T=H,R=J;let $=!0,W=null,ge=!1,Ae=!1;if(I){let Pe=de.get(I);if(Pe.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(N.FRAMEBUFFER,null),$=!1;else if(Pe.__webglFramebuffer===void 0)le.setupRenderTarget(I);else if(Pe.__hasExternalTextures)le.rebindTextures(I,de.get(I.texture).__webglTexture,de.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Ge=I.depthTexture;if(Pe.__boundDepthTexture!==Ge){if(Ge!==null&&de.has(Ge)&&(I.width!==Ge.image.width||I.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(I)}}let Ye=I.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ae=!0);let Ke=de.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ke[H])?W=Ke[H][J]:W=Ke[H],ge=!0):I.samples>0&&le.useMultisampledRTT(I)===!1?W=de.get(I).__webglMultisampledFramebuffer:Array.isArray(Ke)?W=Ke[J]:W=Ke,C.copy(I.viewport),E.copy(I.scissor),U=I.scissorTest}else C.copy(ee).multiplyScalar(k).floor(),E.copy(Se).multiplyScalar(k).floor(),U=Ie;if(J!==0&&(W=Lp),ne.bindFramebuffer(N.FRAMEBUFFER,W)&&$&&ne.drawBuffers(I,W),ne.viewport(C),ne.scissor(E),ne.setScissorTest(U),ge){let Pe=de.get(I.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pe.__webglTexture,J)}else if(Ae){let Pe=H;for(let Ye=0;Ye<I.textures.length;Ye++){let Ke=de.get(I.textures[Ye]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ye,Ke.__webglTexture,J,Pe)}}else if(I!==null&&J!==0){let Pe=de.get(I.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Pe.__webglTexture,J)}b=-1},this.readRenderTargetPixels=function(I,H,J,$,W,ge,Ae,Ue=0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=de.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){ne.bindFramebuffer(N.FRAMEBUFFER,Pe);try{let Ye=I.textures[Ue],Ke=Ye.format,Ge=Ye.type;if(!te.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=I.width-$&&J>=0&&J<=I.height-W&&(I.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ue),N.readPixels(H,J,$,W,ke.convert(Ke),ke.convert(Ge),ge))}finally{let Ye=w!==null?de.get(w).__webglFramebuffer:null;ne.bindFramebuffer(N.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(I,H,J,$,W,ge,Ae,Ue=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=de.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe)if(H>=0&&H<=I.width-$&&J>=0&&J<=I.height-W){ne.bindFramebuffer(N.FRAMEBUFFER,Pe);let Ye=I.textures[Ue],Ke=Ye.format,Ge=Ye.type;if(!te.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,rt),N.bufferData(N.PIXEL_PACK_BUFFER,ge.byteLength,N.STREAM_READ),I.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ue),N.readPixels(H,J,$,W,ke.convert(Ke),ke.convert(Ge),0);let bt=w!==null?de.get(w).__webglFramebuffer:null;ne.bindFramebuffer(N.FRAMEBUFFER,bt);let Lt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await rf(N,Lt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,rt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ge),N.deleteBuffer(rt),N.deleteSync(Lt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,H=null,J=0){let $=Math.pow(2,-J),W=Math.floor(I.image.width*$),ge=Math.floor(I.image.height*$),Ae=H!==null?H.x:0,Ue=H!==null?H.y:0;le.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,J,0,0,Ae,Ue,W,ge),ne.unbindTexture()};let Dp=N.createFramebuffer(),Up=N.createFramebuffer();this.copyTextureToTexture=function(I,H,J=null,$=null,W=0,ge=null){ge===null&&(W!==0?(zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=W,W=0):ge=0);let Ae,Ue,Pe,Ye,Ke,Ge,rt,bt,Lt,Et=I.isCompressedTexture?I.mipmaps[ge]:I.image;if(J!==null)Ae=J.max.x-J.min.x,Ue=J.max.y-J.min.y,Pe=J.isBox3?J.max.z-J.min.z:1,Ye=J.min.x,Ke=J.min.y,Ge=J.isBox3?J.min.z:0;else{let Tn=Math.pow(2,-W);Ae=Math.floor(Et.width*Tn),Ue=Math.floor(Et.height*Tn),I.isDataArrayTexture?Pe=Et.depth:I.isData3DTexture?Pe=Math.floor(Et.depth*Tn):Pe=1,Ye=0,Ke=0,Ge=0}$!==null?(rt=$.x,bt=$.y,Lt=$.z):(rt=0,bt=0,Lt=0);let St=ke.convert(H.format),qe=ke.convert(H.type),Ct;H.isData3DTexture?(le.setTexture3D(H,0),Ct=N.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(le.setTexture2DArray(H,0),Ct=N.TEXTURE_2D_ARRAY):(le.setTexture2D(H,0),Ct=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);let ht=N.getParameter(N.UNPACK_ROW_LENGTH),mn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ms=N.getParameter(N.UNPACK_SKIP_PIXELS),gn=N.getParameter(N.UNPACK_SKIP_ROWS),gr=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Et.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Et.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ye),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ge);let It=I.isDataArrayTexture||I.isData3DTexture,Sn=H.isDataArrayTexture||H.isData3DTexture;if(I.isDepthTexture){let Tn=de.get(I),tn=de.get(H),ln=de.get(Tn.__renderTarget),ul=de.get(tn.__renderTarget);ne.bindFramebuffer(N.READ_FRAMEBUFFER,ln.__webglFramebuffer),ne.bindFramebuffer(N.DRAW_FRAMEBUFFER,ul.__webglFramebuffer);for(let Hi=0;Hi<Pe;Hi++)It&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,de.get(I).__webglTexture,W,Ge+Hi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,de.get(H).__webglTexture,ge,Lt+Hi)),N.blitFramebuffer(Ye,Ke,Ae,Ue,rt,bt,Ae,Ue,N.DEPTH_BUFFER_BIT,N.NEAREST);ne.bindFramebuffer(N.READ_FRAMEBUFFER,null),ne.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||I.isRenderTargetTexture||de.has(I)){let Tn=de.get(I),tn=de.get(H);ne.bindFramebuffer(N.READ_FRAMEBUFFER,Dp),ne.bindFramebuffer(N.DRAW_FRAMEBUFFER,Up);for(let ln=0;ln<Pe;ln++)It?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tn.__webglTexture,W,Ge+ln):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Tn.__webglTexture,W),Sn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,tn.__webglTexture,ge,Lt+ln):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,tn.__webglTexture,ge),W!==0?N.blitFramebuffer(Ye,Ke,Ae,Ue,rt,bt,Ae,Ue,N.COLOR_BUFFER_BIT,N.NEAREST):Sn?N.copyTexSubImage3D(Ct,ge,rt,bt,Lt+ln,Ye,Ke,Ae,Ue):N.copyTexSubImage2D(Ct,ge,rt,bt,Ye,Ke,Ae,Ue);ne.bindFramebuffer(N.READ_FRAMEBUFFER,null),ne.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Sn?I.isDataTexture||I.isData3DTexture?N.texSubImage3D(Ct,ge,rt,bt,Lt,Ae,Ue,Pe,St,qe,Et.data):H.isCompressedArrayTexture?N.compressedTexSubImage3D(Ct,ge,rt,bt,Lt,Ae,Ue,Pe,St,Et.data):N.texSubImage3D(Ct,ge,rt,bt,Lt,Ae,Ue,Pe,St,qe,Et):I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ge,rt,bt,Ae,Ue,St,qe,Et.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ge,rt,bt,Et.width,Et.height,St,Et.data):N.texSubImage2D(N.TEXTURE_2D,ge,rt,bt,Ae,Ue,St,qe,Et);N.pixelStorei(N.UNPACK_ROW_LENGTH,ht),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ms),N.pixelStorei(N.UNPACK_SKIP_ROWS,gn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,gr),ge===0&&H.generateMipmaps&&N.generateMipmap(Ct),ne.unbindTexture()},this.initRenderTarget=function(I){de.get(I).__webglFramebuffer===void 0&&le.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?le.setTextureCube(I,0):I.isData3DTexture?le.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?le.setTexture2DArray(I,0):le.setTexture2D(I,0),ne.unbindTexture()},this.resetState=function(){T=0,R=0,w=null,ne.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var Oc=class extends is{constructor(){super();let e=new jt;e.deleteAttribute("uv");let t=new ct({side:Kt}),n=new ct,i=new os(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Ce(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Nt(e,n,6),a=new at;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Ce(e,cr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ce(e,cr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Ce(e,cr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new Ce(e,cr(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new Ce(e,cr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ce(e,cr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function cr(s){return new ao({color:0,emissive:16777215,emissiveIntensity:s})}var wo=new D;function In(s,e,t,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;wo.copy(e),wo[n]=0,wo.normalize();let c=.5*o/(o+a),u=1-wo.angleTo(s)/l;return Math.sign(wo[t])===1?u*c:a/(o+a)+c+c*(1-u)}var Bc=class s extends jt{constructor(e=1,t=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new D,c=new D,u=new D(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=h.length/6,_=new D,m=.5/o;for(let p=0,v=0;p<h.length;p+=3,v+=2)switch(l.fromArray(h,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[p+0]=u.x*Math.sign(l.x)+c.x*r,h[p+1]=u.y*Math.sign(l.y)+c.y*r,h[p+2]=u.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:_.set(1,0,0),f[v+0]=In(_,c,"z","y",r,n),f[v+1]=1-In(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),f[v+0]=1-In(_,c,"z","y",r,n),f[v+1]=1-In(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),f[v+0]=1-In(_,c,"x","z",r,e),f[v+1]=In(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[v+0]=1-In(_,c,"x","z",r,e),f[v+1]=1-In(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[v+0]=1-In(_,c,"x","y",r,e),f[v+1]=1-In(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),f[v+0]=In(_,c,"x","y",r,e),f[v+1]=1-In(_,c,"y","x",r,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};var Fu=new Map,Ou=new Map,Bu=(s,e)=>{let t=Math.imul(s+17,374761393)^Math.imul(e+53,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295};function Oy(s){if(Ou.has(s))return Ou.get(s);let e=(u,h,d)=>{let f=u/d,g=h/d,_=Bu(u,h)-.5,m=Math.sin(f*Math.PI*2)*Math.sin(g*Math.PI*2),p=_*.16,v=239+_*9,x=1,y=.92;if(s==="asphalt"){let M=Bu(Math.floor(u/3),Math.floor(h/3));p=_*.42+M*.18,v=231+_*32+(M-.5)*12,y=.92+_*.08}if(s==="concrete"){let M=Math.min(f,1-f,g,1-g),T=Math.max(0,1-M*d/2);p=_*.12-T*.4,v=239+m*4+_*13-T*24,x=1-T*.22,y=.8+m*.08+_*.06}if(s==="metal"){let M=Math.max(0,1-Math.min(f,1-f)*d/2);p=_*.08-M*.25,v=243+_*7-M*10,x=1-M*.15,y=.74+_*.1}if(s==="cardboard"){let M=Math.max(0,1-Math.abs(g-.5)*d/2);p=_*.18-M*.08,v=241+_*19-M*9,x=1-M*.12,y=.97+_*.03}if(s==="wood"){let M=Math.sin(2*Math.PI*(g*83+Math.sin(f*Math.PI*4)*.16))+Math.sin(g*Math.PI*292)*.3;p=M*.12+_*.15,v=231+M*10+_*13,y=.88+M*.035}return s==="rubber"&&(p=_*.17,v=239+_*10,y=.96+_*.02),{h:p,c:v,ao:x,r:y}},t=1024,n=512,i=new Uint8Array(t*t*4),r=new Uint8Array(n*n*4),o=new Uint8Array(n*n*4),a=new Float32Array(n*n);for(let u=0;u<t;u++)for(let h=0;h<t;h++){let{c:d}=e(h,u,t),f=(u*t+h)*4,g=Math.max(0,Math.min(255,d));i.set([g,g,g,255],f)}for(let u=0;u<n;u++)for(let h=0;h<n;h++){let d=e(h,u,n),f=(u*n+h)*4;a[u*n+h]=d.h,o.set([d.ao*255,d.r*255,255,255],f)}for(let u=0;u<n;u++)for(let h=0;h<n;h++){let d=(p,v)=>a[(u+v+n)%n*n+(h+p+n)%n],f=(d(-1,0)-d(1,0))*1.3,g=(d(0,-1)-d(0,1))*1.3,_=Math.hypot(f,g,1),m=(u*n+h)*4;r.set([(f/_*.5+.5)*255,(g/_*.5+.5)*255,(1/_*.5+.5)*255,255],m)}let l=(u,h,d=!1)=>{let f=new ti(u,h,h);return f.wrapS=f.wrapT=jn,f.minFilter=fn,f.magFilter=Yt,f.generateMipmaps=!0,f.anisotropy=4,f.colorSpace=d?ut:Gn,f.needsUpdate=!0,f},c={map:l(i,t,!0),normal:l(r,n),orm:l(o,n)};return Ou.set(s,c),c}function He(s,e){let t=s+e;if(Fu.has(t))return Fu.get(t);let n=s==="floor"?"concrete":s==="paint"?"metal":s,i=Oy(n),r={asphalt:.98,concrete:.98,floor:.48,metal:.57,paint:.66,cardboard:1,wood:.92,rubber:1}[s],o=new ct({color:e,roughness:r,metalness:s==="metal"?.48:s==="paint"?.12:.01,map:i.map,normalMap:i.normal,roughnessMap:i.orm,aoMap:i.orm,aoMapIntensity:.28}),a={asphalt:.18,concrete:.1,floor:.055,metal:.09,paint:.065,cardboard:.12,wood:.2,rubber:.13}[s];return o.normalScale.setScalar(a),o.userData.role=s,o.userData.tileScale=s==="asphalt"?1.2:s==="metal"||s==="paint"||s==="wood"?2:s==="cardboard"?3:.35,Fu.set(t,o),o}var Eo;function zc(){if(Eo)return Eo;if(Eo=new ct({color:16052454,roughness:.84}),typeof document<"u"){let s=document.createElement("canvas");s.width=256,s.height=160;let e=s.getContext("2d");e.fillStyle="#f4f0e6",e.fillRect(0,0,256,160),e.fillStyle="#3f484c",e.font="bold 20px sans-serif",e.fillText("CARGO  \u2191\u2191",14,30),e.font="11px sans-serif",e.fillText("HANDLE WITH CARE",14,50);for(let n=0;n<72;n++){let i=n%5===0?3:1;n%3!==1&&e.fillRect(15+n*3,76,i,45)}e.fillRect(15,136,112,2);let t=new vn(s);t.colorSpace=ut,Eo.map=t}return Eo}function Gf(s,e){let t=s.getAttribute("position"),n=s.getAttribute("normal"),i=s.getAttribute("uv");if(i){for(let r=0;r<t.count;r++){let o=t.getX(r),a=t.getY(r),l=t.getZ(r);Math.abs(n.getY(r))>.5?i.setXY(r,o*e,l*e):Math.abs(n.getZ(r))>.5?i.setXY(r,o*e,a*e):i.setXY(r,l*e,a*e)}i.needsUpdate=!0}}var kc;function Hf(){if(kc)return kc;let s=256,e=new Uint8Array(s*s*4);for(let n=0;n<s;n++)for(let i=0;i<s;i++){let r=Math.hypot((i-s*.43)/s,(n-s*.61)/s),o=Math.sin(r*215+Math.sin(i*.035)*.35),a=235+o*10+(Bu(i,n)-.5)*8;e.set([a,a,a,255],(n*s+i)*4)}let t=new ti(e,s,s);return t.colorSpace=ut,t.needsUpdate=!0,t.generateMipmaps=!0,t.minFilter=fn,kc=new ct({color:12365462,map:t,roughness:.9}),kc}var ft={x:109.08,z:-90,width:66,depth:44,floor:1.66,front:-68},ku={x:87.3,z:-3.5575,axleZ:-8.5875},Wf={x:87.3,rootZ:-60.0615,axleZ:-65.0915},Vc=240;function lr(s,e,t,n,i,r){let o=[[s,0,r]],a=(c,u)=>{let h=o.at(-1),d=Math.hypot(c-h[0],u-h[2]);if(d<1e-8)return;let f=Math.max(1,Math.ceil(d/.35));for(let g=1;g<=f;g++)o.push([ve.lerp(h[0],c,g/f),0,ve.lerp(h[2],u,g/f)])},l=(c,u,h,d,f,g)=>{let _=o.at(-1),m=.3*i,p=[[_[0],_[2]],[_[0]+h*m,_[2]+d*m],[_[0]+2*h*m,_[2]+2*d*m],[c-2*f*m,u-2*g*m],[c-f*m,u-g*m],[c,u]];for(let v=1;v<=100;v++){let x=v/100,y=1-x,M=[y**5,5*y**4*x,10*y**3*x*x,10*y*y*x**3,5*y*x**4,x**5];o.push([p.reduce((T,R,w)=>T+R[0]*M[w],0),0,p.reduce((T,R,w)=>T+R[1]*M[w],0)])}};return a(s,n-i),l(s+i,n,0,1,1,0),a(e-i,n),l(e,n-i,1,0,0,-1),a(e,t+i),l(e-i,t,0,-1,-1,0),a(s+i,t),l(s,t+i,-1,0,0,1),a(s,r),o}var ur=lr(87.3,179,-49,45,30,ku.axleZ),Xf=[[Wf.x,0,Wf.axleZ],[ku.x,0,ku.axleZ]],Gc=lr(200,232,-61,57,16,-20),Hc=lr(-213,-87.3,-38,44,30,-5),Wc=lr(96,110,-108,-84,2.4,-90).map(([s,,e])=>[s,1.66,e]);function pn(s){let e=new Rn(s.map(t=>new D(...t)),!1,"centripetal");return e.arcLengthDivisions=6e3,e.updateArcLengths(),e}function hr(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Mt,c=0;for(let u=0;u<s.length;++u){let h=s[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=s[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=qf(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);let g=qf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function qf(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Dt(o,t,n),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){let _=u.getComponent(d,g);a.setComponent(d+h,g,_)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function zu(s,e){if(e===hu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===nr||e===So){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===nr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var O={white:16185074,stone:14936038,roof:14082018,blue:1269643,lightBlue:8038332,dark:3425875,road:11188670,green:10206124,box:13219996,water:6727612},Vu=new Map;function Tt(s,e=.72,t=.04){let n=[s,e,t].join(":");return Vu.has(n)||Vu.set(n,new ct({color:s,roughness:e,metalness:t})),Vu.get(n)}function P(s,e,t,n=O.white,i=0){let r=new Ce(i?new Bc(...e,2,i):new jt(...e),typeof n=="number"?Tt(n):n);return typeof n!="number"&&n.userData.tileScale&&Gf(r.geometry,n.userData.tileScale),r.position.set(...t),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}function nt(s,e,t,n,i=O.dark){let r=new Ce(new rn(e,e,t,10),Tt(i));return r.position.set(...n),r.castShadow=!0,s.add(r),r}function Hn(s,e,t,n=20,i="#366078",r=64){let o=document.createElement("canvas");o.width=1024,o.height=180;let a=o.getContext("2d");a.textAlign="center",a.textBaseline="middle",a.fillStyle=i,a.font=`600 ${r}px Arial, sans-serif`;let l=Math.min(r,r*960/Math.max(1,a.measureText(e).width));a.font=`600 ${l}px Arial, sans-serif`,a.fillText(e,512,90);let c=new vn(o);c.colorSpace=ut;let u=new Ce(new At(n,n*180/1024),new vt({map:c,transparent:!0,depthWrite:!1,side:Wt}));return u.position.set(...t),s.add(u),u}function en(s,e,t,n=20){let i=Hn(s,e,t,n);return i.rotation.x=-Math.PI/2,i}function Ft(s,e,t=1,n=0){let i=[[1.3,.95,1],[.95,1.15,.85],[1.6,.6,1.1],[.75,.65,.7],[1.25,.8,.85],[1.05,1.05,1.05]][n%6],r=[O.box,12364171,13878700],[o,a,l]=i,c=new fe;c.name="parcel",c.userData.dimensions=i.map(h=>h*t),c.position.set(...e),c.scale.setScalar(t),P(c,[o,a,l],[0,a/2,0],He("cardboard",r[n%3]),.025);let u=new Ce(new At(.4,.26),zc());return u.position.set(n%2?-.18:.18,a*.56,l/2+.006),c.add(u),P(c,[.14,.012,l+.01],[(n%3-1)*o*.12,a+.008,0],Tt(15064784,.26,0)),P(c,[.33,.014,.25],[o*.17,a+.01,.08],O.white),s.add(c),c}function on(s,e){let t=new fe;t.position.set(...e);for(let n of[-.5,0,.5])P(t,[1.6,.12,.18],[0,.06,n],He("wood",O.box));for(let n of[-.6,0,.6])for(let i of[-.5,0,.5])P(t,[.18,.05,.18],[n,.145,i],He("wood",O.box));for(let n of[-.6,-.3,0,.3,.6])P(t,[.16,.12,1.35],[n,.23,0],He("wood",12365462));for(let n of[-.6,-.3,0,.3,.6])for(let i of[-1,1]){let r=new Ce(new At(.16,.12),Hf());r.position.set(n,.23,i*.6754),i<0&&(r.rotation.y=Math.PI),t.add(r);let o=new Ce(new qr(.018,6),Tt(7169624,.85,.2));o.rotation.x=-Math.PI/2,o.position.set(n,.2904,i*.52),t.add(o)}return s.add(t),t}function Gu(s,e,t=O.white){let n=new fe;n.position.set(...e),P(n,[12.192,2.591,2.438],[0,1.2955,0],He("paint",t),.04);for(let i of[-1.23,1.23])for(let r=-5.8;r<=5.8;r+=.38)P(n,[.075,2.25,.045],[r,1.3,i],He("paint",t));for(let i of[.15,2.44])for(let r of[-1.24,1.24])P(n,[12.18,.12,.06],[0,i,r],t);return s.add(n),n}function Xc(s,e,t=0){let n=new fe;n.position.set(...e),n.rotation.y=t,P(n,[.43,.65,.27],[0,1.1,0],O.blue,.07);let i=new Ce(new Bt(.19,10,8),Tt(14271404));i.position.y=1.67,n.add(i);for(let r of[-.13,.13])P(n,[.15,.65,.19],[r,.4,0],O.dark,.035),P(n,[.16,.55,.16],[r*2.2,1.05,.02],O.blue,.04);return s.add(n),n}function Wn(s,e,t=9,n=!1,i=!0,r=[]){let o=pn(e),a=o.getLength(),l=Math.max(2,Math.ceil(a/.45)),c=(u,h,d,f=0,g=!1)=>{let _=[],m=[],p=[];for(let y=0;y<=l;y++){let M=o.getPointAt(y/l),T=o.getTangentAt(y/l),R=-T.z,w=T.x;for(let b of[1,-1]){let S=M.x+R*(f+b*u),C=M.z+w*(f+b*u);_.push(S,h,C),m.push(S*.8,C*.8)}if(y<l&&(!g||r.every(b=>{let S=o.getPointAt((y+.5)/l);return Math.hypot(S.x-b.x,S.z-b.z)>b.radius+1}))){let b=y*2;p.push(b,b+2,b+1,b+1,b+2,b+3)}}let v=new Mt;v.setAttribute("position",new it(_,3)),v.setAttribute("uv",new it(m,2)),v.setIndex(p),v.computeVertexNormals();let x=new Ce(v,d);return x.name="road-pavement",x.receiveShadow=!0,s.add(x),x};if(c(t/2+.65,.015,He("concrete",12896195)),c(t/2,.035,He("asphalt",9016471)),i){for(let u of[-1,1])c(.065,.037,Tt(15920867),u*(t/2-.32),!0);for(let u=16;u<a-10;u+=34){let h=o.getPointAt(u/a);if(r.some(m=>Math.hypot(h.x-m.x,h.z-m.z)<m.radius+2))continue;let d=o.getTangentAt(u/a),f=new fe;f.position.set(h.x,.038,h.z),f.rotation.y=-Math.atan2(d.z,d.x);let g=new Mi;g.moveTo(-1.8,-.13),g.lineTo(.25,-.13),g.lineTo(.25,-.65),g.lineTo(1.5,0),g.lineTo(.25,.65),g.lineTo(.25,.13),g.lineTo(-1.8,.13),g.closePath();let _=new Ce(new ro(g),Tt(15920867));_.rotation.x=-Math.PI/2,f.add(_),s.add(f)}}return o}function $e(s){s.updateMatrixWorld(!0);let e=s.matrixWorld.clone().invert(),t=new Map;s.traverse(n=>{for(let o=n.parent;o&&o!==s;o=o.parent)if(o.userData.batchBoundary)return;let i=n;if(!i.isMesh||i.isInstancedMesh||Array.isArray(i.material)||i.material.transparent)return;let r=t.get(i.material)||[];r.push(i),t.set(i.material,r)});for(let[n,i]of t){if(i.length<2)continue;let r=i.map(l=>{let c=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();c.applyMatrix4(e.clone().multiply(l.matrixWorld));for(let u of Object.keys(c.attributes))["position","normal","uv"].includes(u)||c.deleteAttribute(u);return c.getAttribute("normal")||c.computeVertexNormals(),c.getAttribute("uv")||c.setAttribute("uv",new it(new Float32Array(c.getAttribute("position").count*2),2)),c}),o=hr(r);if(r.forEach(l=>l.dispose()),!o)continue;let a=new Ce(o,n);a.castShadow=a.receiveShadow=!0,s.add(a),i.forEach(l=>{l.removeFromParent(),l.geometry.dispose()})}}function an(s,e){let t=new fe;t.name=e,t.userData.dynamicWorker=!0,s.add(t);let n=new fe;t.add(n),P(n,[.43,.62,.28],[0,1.13,0],O.blue,.04),P(n,[.34,.34,.3],[0,1.38,.01],14137437,.03);let i=new Ce(new Bt(.18,10,8),Tt(14271404));i.position.set(0,1.68,0),n.add(i),$e(n);let r=[-1,1].map(f=>{let g=new fe;return g.position.set(f*.12,.82,0),t.add(g),P(g,[.17,.72,.2],[0,-.35,0],O.dark,.025),P(g,[.19,.12,.3],[0,-.75,.04],O.dark,.025),$e(g),g}),o=[-1,1].map(f=>{let g=new fe;return g.position.set(f*.29,1.38,0),t.add(g),P(g,[.16,.52,.17],[0,-.23,0],O.blue,.03),P(g,[.12,.16,.13],[0,-.52,0],14271404,.02),$e(g),g});function a(f,g,_=0,m=0){let p=Math.sin(f*2*Math.PI/.95)*.42*Math.min(1,g);r.forEach((v,x)=>v.rotation.x=p*(x?1:-1)),o.forEach((v,x)=>{v.scale.y=1,v.position.z=m*.22,v.position.y=1.38-m,v.rotation.set(0,0,0),v.rotation.x=-_*1.15-p*(x?1:-1)*(1-_)}),n.position.y=-m,n.rotation.x=m*.6}let l=new D,c=NaN,u=0;function h(f,g,_=0,m=0,p){let v=new D(...f),x=v.x-l.x,y=v.z-l.z,M=Math.hypot(x,y),T=g-c,R=Number.isFinite(T)&&T>0&&T<.2?Math.min(1,M/T):0;R>.03?t.rotation.y=Math.atan2(x,y):p!==void 0&&(t.rotation.y=p),T>0&&T<.2?u+=M:u=g*.3,t.position.copy(v),a(u,R,_,m),l.copy(v),c=g}function d(f){t.updateWorldMatrix(!0,!0);for(let g of o){let _=g.getWorldPosition(new D),m=f.clampPoint(_,new D);m.y=f.max.y-f.min.y<.1?(f.min.y+f.max.y)/2:ve.clamp(m.y,f.min.y+.05,f.max.y-.035);let p=t.worldToLocal(m).sub(g.position),v=p.length();g.quaternion.setFromUnitVectors(new D(0,-1,0),p.normalize()),g.scale.y=ve.clamp(v/.52,.65,1.15)}}return{root:t,body:n,arms:o,legs:r,move:h,pose:a,hold:d}}var dr=ve.smoothstep;function qc(s){let e=(s%44+44)%44,t=dr(e,6,9)*(1-dr(e,35,38)),n=Math.max(dr(e,9,10)*(1-dr(e,17,18)),dr(e,28,29)*(1-dr(e,34,35)));return{door:t,bridge:n,permission:t>.999&&n>.999,stage:e<5?"Preparing to dock":e<10?"Positioning dock plate":e<17?"Loading permitted":e<29?"Returning empty":e<35?"Loading permitted":"Finishing operations"}}function Yc(s,e,t){let n=s.at(e),i=[0,.6,1.2,1.8].map(c=>s.at(e+c)),r=i.find(c=>Math.abs(c.steering)>.035&&Math.abs(c.speed)>.15),o=r?Math.sign(r.steering):0;if(i.every(c=>c.trailerHeading!==void 0)){o=0;for(let c=0;c<i.length-1;c++){let u=Math.atan2(Math.sin(i[c+1].trailerHeading-i[c].trailerHeading),Math.cos(i[c+1].trailerHeading-i[c].trailerHeading));if(Math.abs(u)>.003&&Math.max(Math.abs(i[c].speed),Math.abs(i[c+1].speed))>.15){o=Math.sign(u);break}}}let a=Math.abs(n.speed)<.02||Math.abs(s.at(e+.3).speed)<Math.abs(n.speed)-.03,l=t??3;if(t===void 0&&Math.abs(n.speed)<.02){for(let c=.05;c<2;c+=.05)if(Math.abs(s.at(e-c).speed)>.02){l=c;break}}return{turn:o,brake:a,pulse:Math.floor(e*2.4)%2===0,settle:Math.abs(n.speed)<.02?.005*Math.sin(l*7)*Math.exp(-l*2.5):0}}function Zc(s){return{angle:.18+.045*Math.sin(s*.06),strength:.65+.15*Math.sin(s*.18)}}var By={dock:44,air:90,rack:60,packing:96},Kc=s=>{let e=Math.max(0,Math.min(1,s));return e*e*(3-2*e)};function ki(s,e){let t=0;for(;t<e.length-2&&s>e[t+1][0];)t++;let n=e[t],i=e[t+1];return n[1]+(i[1]-n[1])*Kc((s-n[0])/(i[0]-n[0]))}function Xn(s,e,t=!1){let n=0;for(;n<e.length-2&&s>e[n+1][0];)n++;let i=e[n],r=e[n+1],o=Math.max(0,Math.min(1,(s-i[0])/(r[0]-i[0]))),a=t?o:Kc(o);return[i[1]+(r[1]-i[1])*a,i[2]+(r[2]-i[2])*a,i[3]+(r[3]-i[3])*a]}function li(s,e){let t=By[s],n=(e%t+t)%t,i=[0,0,0],r=[0,0,0],o=[0,0,0],a="",l=0,c=0,u=1,h=1,d=!1;if(s==="dock"&&(l=ki(n,[[0,1.66],[5,1.66],[10,.72375],[17,.72375],[22,1.66],[26,1.66],[29,.72375],[34,.72375],[38,1.66],[44,1.66]]),i=Xn(n,[[0,130.86,1.84,-70.5],[5,130.86,1.84,-66.25],[10,130.86,.72375+.18,-66.25],[14,130.86,.72375+.18,-63.65],[31,130.86,.72375+.18,-63.65],[34,130.86,.72375+.18,-66.25],[38,130.86,1.84,-66.25],[43,130.86,1.84,-70.5],[44,130.86,1.84,-70.5]]),r=Xn(n,[[0,130.86,1.66,-71.35],[5,130.86,1.66,-67.1],[10,130.86,.72375,-67.1],[14,130.86,.72375,-64.5],[17,130.86,.72375,-67.1],[22,130.86,1.66,-67.1],[26,130.86,1.66,-67.1],[29,130.86,.72375,-67.1],[31,130.86,.72375,-64.5],[34,130.86,.72375,-67.1],[38,130.86,1.66,-67.1],[43,130.86,1.66,-71.35],[44,130.86,1.66,-71.35]]),a=n>=14&&n<31?"van-floor":n<5||n>=43?"dock-floor":"lift"),s==="air"){let g=3.7128256362;l=ki(n,[[0,1.9],[3,.6],[6,.6],[13,g],[37,g],[44,.6],[48,.6],[53,1.9],[90,1.9]]),i=Xn(n,[[0,81.948,.6,132],[3,81.948,.6,132],[6,81.948,.6,135.3],[13,81.948,g,135.3],[19,81.948,g,138],[31,81.948,g,138],[37,81.948,g,135.3],[44,81.948,.6,135.3],[48,81.948,.6,132],[90,81.948,.6,132]]),a=n>=19&&n<31?"aircraft-deck":n<3||n>=48?"air-dolly":"air-loader",r=[84.1,.06,134.2]}if(s==="rack"){let f=ki(n,[[0,-96.2],[10,-96.2],[16,-99.35],[19,-99.35],[24,-96.2],[40,-96.2],[44,-99.35],[46,-99.35],[50,-96.2],[60,-96.2]]);c=ki(n,[[0,1.83],[3,1.83],[10,2.755],[16,2.755],[18,2.605],[24,2.605],[30,1.83],[34,1.83],[40,2.605],[44,2.605],[46,2.755],[50,2.755],[57,1.83],[60,1.83]]),o=[89.08,1.66,f],r=[89.08,1.66,f+1.15],i=n>=18&&n<44?[89.08,2.435,-101.2]:[89.08,c-.17,f-1.85],a=n>=18&&n<44?"rack":"forks"}return s==="packing"&&(i=Xn(n,[[0,87.48,2.87,-81],[28,123.08,2.87,-81],[32,123.08,2.66,-77.2],[34,123.08,2.66,-75.35],[39,123.08,2.66,-75.35],[40,123.08,2.76,-75.35],[44,128,2.76,-73.2],[45,128,2.02,-73.2],[52,128,2.02,-73.2],[53,128,2.76,-73.2],[54,126.7,2.76,-73.2],[57.5,126.7,2.76,-79.35],[60,129.88,2.76,-79.35],[62,129.88,2.76,-81],[66,129.88,1.84,-81],[91,87.48,1.84,-81],[96,87.48,2.87,-81]],!0),r=Xn(n,[[0,123.08,1.66,-74.7],[39,123.08,1.66,-74.7],[44,128,1.66,-72.55],[60,129.88,1.66,-78.7],[63,126.7,1.66,-78.7],[67,126.7,1.66,-73.9],[71,123.08,1.66,-74.7],[96,123.08,1.66,-74.7]]),n>=39&&n<45||n>=52&&n<60?r=[i[0],1.66,i[2]+.65]:n>=45&&n<52&&(r=[128,1.66,-72.55]),a=n<28?"conveyor":n<34?"diverter":n<39?"packing-table":n<45?"worker":n<52?"dispatch":n<60?"worker":n<62?"refeed-roller":n<66||n>=91?"refeed-lift":"return-belt",u=Kc((n-35.2)/1.2)*(1-Kc((n-93)/2)),h=n>=39&&n<93?1:0,d=n>=35&&n<35.2),{q:n,period:t,cargo:i,worker:r,machine:o,support:a,level:l,forkTop:c,closed:u,label:h,scan:d}}function Yf(s,e){let t=new fe;t.name="ambient-ground-equipment",s.add(t);let n=[],i={value:0};for(let[l,c]of[[-184,-100],[145,-118]]){nt(t,.07,5.5,[l,2.75,c],O.roof);let u=new fe;u.position.set(l,5.1,c),e.add(u),n.push(u);let h=new ct({color:O.blue,side:Wt,roughness:.9});h.onBeforeCompile=f=>{f.uniforms.windTime=i,f.vertexShader=`uniform float windTime;
`+f.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.z+=.09*sin(position.x*5.0-windTime*1.7)*smoothstep(-.8,.8,position.x);`)};let d=new Ce(new At(1.6,.7,8,3),h);d.position.x=.8,u.add(d)}for(let l of[103.5,115]){P(t,[.38,.06,.38],[62.1,.105,l],O.dark);let c=new Ce(new Yr(.13,.42,8),new ct({color:13217383}));c.position.set(62.1,.345,l),t.add(c)}for(let l of[62.35,63.65])P(t,[.055,.012,11.5],[l,.084,109.25],14403455);let r=new fe;r.name="intermittent-ground-crew",e.add(r);let o=an(r,"apron-ground-worker");$e(t);function a(l){let c=Zc(l);i.value=l,n.forEach(h=>h.rotation.y=-c.angle);let u=(l%180+180)%180;o.move(Xn(u,[[0,63,.075,104],[10,63,.075,104],[26,63,.075,114],[40,63,.075,114],[56,63,.075,104],[180,63,.075,104]]),l,.12,0,Math.PI)}return a(0),{root:r,worker:o,flags:n,equipment:t,update:a}}function Xt(s,e){let t=new fe;return t.name=e,t.userData.batchBoundary=!0,t.userData.detailFeature=e,s.add(t),t}function Zf(s,e,t,n=.1,i=.1){let r=nt(s,i,.08,[e,n,t],O.dark);return r.rotation.z=Math.PI/2,r}function Kf(s,e){let t=Xt(e,"dock-transfer"),n=Xt(s,"dock-transfer-static"),i=new fe;i.name="van-loading-lift",t.add(i),i.position.set(130.86,1.66,-66.25),P(i,[2.2,.1,2.8],[0,-.05,0],O.roof);for(let g of[-1.03,1.03])P(i,[.055,.9,.055],[g,.45,-1],O.blue),P(i,[.055,.9,.055],[g,.45,1],O.blue),P(i,[.055,.055,2],[g,.9,0],O.blue);P(i,[1.7,.035,.42],[0,-.018,-1.57],O.roof);let r=new fe;r.userData.batchBoundary=!0,r.position.set(0,-.018,1.3),i.add(r),P(r,[1.7,.035,.48],[0,0,.24],O.roof),$e(r),$e(i);let o=[];for(let g of[-.75,.75])for(let _ of[-1,1]){let m=P(t,[.1,1,.1],[130.86+g,.4,-66.25],O.dark);m.userData.sign=_,o.push(m)}let a=new fe;a.name="loading-dolly",t.add(a),P(a,[.95,.06,.9],[0,-.03,0],O.roof);for(let g of[-.37,.37])for(let _ of[-.34,.34])Zf(a,g,_,-.13244718,.05);P(a,[.8,.04,.78],[0,-.08,0],O.dark),$e(a);let l=new fe;a.add(l),l.userData.batchBoundary=!0;for(let g of[-.4,.4])P(l,[.045,.9,.045],[g,.45,-.5],O.blue);P(l,[.85,.05,.05],[0,.9,-.5],O.dark),$e(l);let c=Ft(a,[0,0,0],.6,4);c.name="van-transfer-parcel";let u=an(t,"van-loading-worker");for(let g of[129.4,132.3])P(n,[.08,.014,4],[g,ft.floor+.012,-70.2],13676631);$e(n);let h=new Ce(new Bt(.07,8,6),new ct({color:6002049,emissive:4164202,emissiveIntensity:.3}));h.position.set(133.41,3.14,-67.54),t.add(h);let d=li("dock",0);function f(g){d=li("dock",g);let _=qc(g);r.rotation.x=-(1-_.bridge)*Math.PI/2,h.material.color.setHex(_.permission?6002049:12886359),h.material.emissiveIntensity=_.permission?.9:.15,i.position.y=d.level,a.position.set(...d.cargo),c.userData.support=d.support,o.forEach(m=>{let p=d.level-.16;m.position.y=.08+p/2,m.scale.y=Math.hypot(p,2.25),m.rotation.x=m.userData.sign*Math.atan2(2.25,p)}),l.scale.y=1-.45*ve.smoothstep(d.cargo[2],-65,-63.65),u.move(d.worker,g,.8,d.worker[2]>-65?.4:0,0),u.root.rotation.y=Math.atan2(d.cargo[0]-d.worker[0],d.cargo[2]-d.worker[2])}return f(0),{root:t,equipment:n,cargo:c,carrier:a,worker:u,lift:i,bridge:r,update:f,get state(){return d}}}function Jf(s,e){let t=Xt(e,"rack-transfer"),n=Xt(s,"rack-transfer-static"),i=new fe;i.name="electric-stacker",t.add(i),P(i,[1.05,.45,1],[0,.42,.25],O.blue,.07),P(i,[.8,.18,.65],[0,.85,.42],O.dark);for(let u of[-.49,.49]){P(i,[.1,3.25,.1],[u,1.73,-.6],O.dark),P(i,[.1,.13,2.35],[u,.15,-.75],O.blue);for(let h of[-1.7,.58])Zf(i,u,h,.16,.15)}P(i,[1.05,.12,.12],[0,3.33,-.6],O.blue),P(i,[.4,.06,.2],[0,1.15,.65],O.dark),$e(i);let r=new fe;r.name="stacker-fork-carriage",i.add(r);for(let u of[-.26,.26])P(r,[.13,.1,2.05],[u,0,-1],O.roof);P(r,[.8,.45,.12],[0,.17,-.5],O.dark),$e(r);let o=new fe;o.name="rack-pallet-load",o.rotation.y=Math.PI/2,t.add(o),on(o,[0,0,0]);for(let u of[-.33,.33])Ft(o,[u,.29,0],.55,u<0?1:5);$e(o);let a=an(t,"stacker-operator");for(let u of[88.12,90.04])P(n,[.06,.014,2.5],[u,1.674,-98.05],13676631);$e(n);let l=li("rack",0);function c(u){l=li("rack",u+11),i.position.set(...l.machine),r.position.set(0,l.forkTop-1.66-.05,-.6),o.position.set(...l.cargo),o.userData.support=l.support,a.move(l.worker,u,.65,0,Math.PI)}return c(0),{root:t,equipment:n,machine:i,forks:r,cargo:o,worker:a,update:c,get state(){return l}}}function $f(s,e){let t=Xt(e,"packing-flow"),n=Xt(s,"packing-flow-static");for(let x=-80.85;x<-77.15;x+=.32){let y=ve.lerp(2.84,2.66,(x+80.85)/3.7),M=nt(n,.085,1.05,[123.08,y-.085,x],O.roof);M.rotation.z=Math.PI/2}for(let x of[122.5,123.66])P(n,[.09,.12,3.8],[x,2.61,-79],O.blue);for(let x of[122.6,123.55])for(let y of[-79.9,-77.7])P(n,[.1,.85,.1],[x,2.085,y],O.dark);P(n,[41.1,.08,.95],[108.65,1.8,-81],O.roof);for(let x of[87.48,129.88]){P(n,[3.5,.14,2.4],[x,4.12,-81],O.white);for(let y of[-82.15,-79.85])if(x>100&&y===-79.85){for(let M of[-1,1])P(n,[.9,2.42,.1],[x+M*1.3,2.91,y],O.blue);P(n,[1.7,.45,.1],[x,3.8,y],O.blue),P(n,[1.7,1.04,.1],[x,2.22,y],O.blue)}else P(n,[3.5,2.42,.1],[x,2.91,y],O.blue);P(n,[.15,2.42,2.4],[x+(x<100?-1.7:1.7),2.91,-81],O.white)}let i=[87.48,129.88].map(x=>P(t,[1.2,.08,.85],[x,2,-81],O.roof));P(n,[1.5,.12,1.3],[128,1.96,-73.2],O.roof);for(let x of[127.4,128.6])for(let y of[-73.7,-72.7])P(n,[.08,.24,.08],[x,1.78,y],O.dark);P(n,[.32,.12,.65],[124.6,2.72,-76.3],O.dark),nt(n,.16,.12,[124.6,2.94,-76.3],O.box).rotation.z=Math.PI/2,nt(n,.15,.28,[121.5,2.84,-76.2],O.white).rotation.z=Math.PI/2,P(n,[.28,.025,.38],[121.5,2.68,-75.9],O.white);for(let x=0;x<4;x++)P(n,[.6,.025,.55],[124.5,2.7+x*.028,-77.2],O.box);for(let x=0;x<3;x++)on(n,[90+x*1.9,1.66,-78.5]),Ft(n,[90+x*1.9,1.95,-78.5],.55,x+1);for(let x=-79.35;x>-80.3;x-=.22){let y=nt(n,.055,1.1,[129.88,2.705,x],O.roof);y.rotation.z=Math.PI/2}$e(n);let r=new fe;r.name="packing-order-parcel",t.add(r);let o=.845,a=.62,l=.65;P(r,[o,.025,l],[0,.013,0],He("cardboard",O.box));for(let x of[-1,1])P(r,[o,a,.025],[0,a/2,x*l/2],He("cardboard",O.box)),P(r,[.025,a,l],[x*o/2,a/2,0],He("cardboard",O.box));$e(r);let c=[];for(let x of[-1,1]){let y=new fe;y.position.set(0,a,x*l/2),r.add(y),P(y,[o,.018,l/2],[0,0,-x*l/4],He("cardboard",O.box)),y.userData.side=x,y.userData.axis="x",$e(y),c.push(y);let M=new fe;M.position.set(x*o/2,a,0),r.add(M),P(M,[o/2,.018,l],[-x*o/4,0,0],He("cardboard",O.box)),M.userData.side=x,M.userData.axis="z",$e(M),c.push(M)}let u=P(r,[.1,.012,l+.01],[0,a+.017,0],Tt(15064784,.25,0)),h=zc().clone();h.transparent=!0;let d=new Ce(new At(.25,.17),h);d.rotation.x=-Math.PI/2,d.position.set(.2,a+.026,.02),r.add(d);let f=new Ce(new Bt(.055,8,6),new vt({color:8174242}));f.position.set(123,3,-77.1),t.add(f);let g=P(t,[.9,.12,.09],[123.08,2.98,-80.4],O.blue),_=an(t,"packing-worker"),m=new fe;_.arms[1].add(m),m.position.set(0,-.53,.02),P(m,[.12,.16,.15],[0,0,0],O.dark),P(m,[.09,.025,.06],[0,-.06,.09],7841447);let p=li("packing",0);function v(x){p=li("packing",x+17),r.position.set(...p.cargo),r.userData.support=p.support;let y=p.q;c.forEach(M=>{let T=(1-p.closed)*Math.PI*.7*M.userData.side;M.userData.axis==="x"?M.rotation.x=T:M.rotation.z=-T}),u.scale.z=Math.max(.001,ki(y,[[0,0],[36.4,0],[38,1],[92,1],[94,0],[96,0]])),h.opacity=p.label,f.visible=p.scan,g.rotation.y=y>=27.7&&y<32.1?Math.PI/4:0,i[0].position.y=y>=91?p.cargo[1]-.04:ki(y,[[0,2.83],[1,2.83],[6,1.8],[96,1.8]]),i[1].position.y=y>=62&&y<66?p.cargo[1]-.04:ki(y,[[0,1.8],[52,1.8],[57,2.72],[62,2.72],[66,1.8],[96,1.8]]),_.move(p.worker,x,y>=32&&y<45||y>=52&&y<60?.85:.15,0,Math.PI),(y>=44&&y<45||y>=52&&y<53)&&_.pose(x*.3,0,.9,.35*(y<45?ve.smoothstep(y,44,45):1-ve.smoothstep(y,52,53))),(p.support==="worker"||y>=34&&y<39)&&(_.root.rotation.y=Math.atan2(p.cargo[0]-p.worker[0],p.cargo[2]-p.worker[2])),m.visible=y>=33.5&&y<35.3,p.support==="worker"&&_.hold(new Rt().setFromObject(r))}return v(0),{root:t,equipment:n,cargo:r,worker:_,flaps:c,update:v,get state(){return p}}}function jf(s,e,t){let n=new fe;n.name="warehouse-operational-equipment",s.add(n);let i=new fe;i.name="pallet-wrapper",i.position.set(ft.x+28,ft.floor,ft.z+8),e.add(i),nt(n,1.5,.15,[ft.x+28,ft.floor+.075,ft.z+8],O.dark),P(n,[.35,3.3,.4],[ft.x+30.2,ft.floor+1.65,ft.z+8],O.blue);let r=new fe;i.add(r),nt(r,1.35,.1,[0,.2,0],O.blue),on(r,[0,.25,0]);for(let g of[-.35,.35])for(let _ of[.54,1.22])Ft(r,[g,_,0],.7);let o=new Ce(new jt(1.7,1.8,1.45),new ct({color:15266285,transparent:!0,opacity:.17,roughness:.3,depthWrite:!1}));o.position.y=1.25,r.add(o);let a=new fe;a.position.x=2.05,i.add(a),nt(a,.12,.7,[0,0,0],O.white),P(a,[.4,.8,.45],[.25,0,0],O.blue),$e(r);let l=Kf(s,e),c=Jf(s,e),u=$f(s,e),h=[];for(let[g,_]of[[-221,130],[224,140]]){nt(n,.1,7,[g,3.5,_],O.roof);let m=new fe;m.position.set(g,6.8,_),e.add(m),h.push(m);for(let p=0;p<5;p++){let v=new Ce(new rn(.42-p*.065,.36-p*.065,.55,10,1,!0),new ct({color:p%2?15987432:12819040,side:Wt}));v.rotation.z=Math.PI/2,v.position.x=.3+p*.5,m.add(v)}$e(m)}let d=new zn({color:15398383,transparent:!0,opacity:.38});for(let g of[-1,1]){let _=new yn(new Mt().setFromPoints([new D(g*6,-.25,-24),new D(g*9,-.25,-29),new D(g*13,-.25,-36)]),d);t.add(_)}function f(g){l.update(g),c.update(g),u.update(g);let _=g%24,m=ve.clamp(_/18,0,1),p=m<.1?m*m/.18:m>.9?1-(1-m)**2/.18:(m-.05)/.9;r.rotation.y=p*4*Math.PI,a.position.y=.85+1.1*(.5-.5*Math.cos(p*2*Math.PI));let v=Zc(g);h.forEach((x,y)=>{x.rotation.y=-v.angle,x.rotation.z=.04*Math.sin(g*.9+y)-.08}),d.opacity=.18+Math.hypot(.74*Math.cos(g*.02),.2*Math.sin(g*.02))*.2}return{update:f,wrapper:i,dock:l,rack:c,packing:u,vanLift:l.lift}}function Qf(s,e=!1){s.updateWorldMatrix(!0,!0);let t=[],n=new Ve,i=new Rt;return s.traverse(r=>{let o=r;if(!o.isMesh||o.userData.renderBatchProxy)return;let a=!0;for(let c=o;c;c=c.parent)a=a&&(c.visible||c===o&&c.userData.renderBatched);if(!a||(o.geometry.computeBoundingBox(),!o.geometry.boundingBox))return;let l=(c,u="")=>{if(i.copy(o.geometry.boundingBox).applyMatrix4(c),i.max.y<.4||i.max.y-i.min.y<.015)return;let h={name:(o.name||o.parent?.name||"structure")+u,min:i.min.toArray(),max:i.max.toArray()},d=o.geometry.getAttribute("position"),f=o.geometry.index,g=f?.count??d.count;if(e&&g>36||g>108&&i.max.y-i.min.y>3&&Math.max(i.max.x-i.min.x,i.max.z-i.min.z)>12){h.triangles=[];for(let _=0;_<g;_+=3){let m=[0,1,2].map(p=>new D().fromBufferAttribute(d,f?f.getX(_+p):_+p).applyMatrix4(c));h.triangles.push(new Zn(m[0],m[1],m[2]))}}t.push(h)};if(o.isInstancedMesh){let c=o;for(let u=0;u<c.count;u++)c.getMatrixAt(u,n),n.premultiply(o.matrixWorld),l(n,":"+u)}else l(o.matrixWorld)}),t}function ky(){let s=document.createElement("canvas");s.width=512,s.height=256;let e=s.getContext("2d");e.font="600 48px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillStyle="#637c83";for(let n=0;n<8;n++)e.fillText((n<4?"E":"M")+String(n%4+1).padStart(2,"0"),64+n%4*128,64+Math.floor(n/4)*128);let t=new vn(s);return t.colorSpace=ut,new vt({map:t,transparent:!0,depthWrite:!1})}function ep(s){let e=Xt(s,"building-construction-detail"),t=Xt(s,"ground-use-detail"),n=Xt(s,"port-berthing-detail");for(let[c,u,h,d]of[[ft.x,ft.z,66,44],[-151,-78,57,35]]){for(let f of[-1,1]){let g=c+f*(h/2+.28),_=u-d/2+.5;nt(e,.1,10.7,[g,5.5,_],11845826),P(e,[.4,.26,.4],[g,10.9,_],O.roof),P(e,[.45,.22,.7],[g,.23,_+.2],O.roof),P(e,[.09,10.5,.09],[c+f*(h/2-.3),5.8,u+d/2+.3],O.roof)}for(let f of[-h*.33,0,h*.33])for(let g of[-1,1])P(e,[.08,4.6,.13],[c+f+g*2.72,4.15,u+d/2+.16],O.roof)}P(e,[2,.12,.12],[143,1.15,-69.6],O.roof),P(e,[.12,2,.12],[142.1,2.1,-69.6],O.roof),P(e,[.12,.1,2],[142.1,3.08,-70.6],O.roof);let i=new vt({color:7896436,transparent:!0,opacity:.08,depthWrite:!1}),r=new Nt(new At(.2,2.1),i,12),o=new at,a=0;for(let c of[86.12,88.48])for(let u=0;u<6;u++)o.rotation.x=-Math.PI/2,o.position.set(c,.086,-62+u*2.4),o.updateMatrix(),r.setMatrixAt(a++,o.matrix);t.add(r);let l=ky();for(let[c,u,h]of[[0,117,-21],[1,133,-21],[2,149,-21],[4,-135,21]]){let d=new At(2.9,1.45),f=d.getAttribute("uv");for(let _=0;_<f.count;_++)f.setXY(_,(f.getX(_)+c%4)/4,(f.getY(_)+1-Math.floor(c/4))/2);let g=new Ce(d,l);g.rotation.x=-Math.PI/2,g.position.set(u,.09,h),t.add(g)}for(let c of[14.5,19.5])P(t,[17,.015,.09],[-134,.08,c],12823652);for(let c of[-142.5,-125.5])P(t,[.09,.015,5],[c,.08,17],12823652);for(let c of[-1,1]){for(let[g,_]of[[-20,-17],[11,19]]){let m=new Rn([new D(c*64,4.65,g),new D(c*68.7,2.15,(g+_)/2),new D(c*74,1.55,_)]),p=new Ce(new oo(m,12,.045,5,!1),Tt(9142632));n.add(p)}let u=new D(c*63.9,4.6,-22),h=new D(c*73.2,.18,-27),d=h.clone().sub(u),f=new fe;f.position.copy(u).add(h).multiplyScalar(.5),f.quaternion.setFromUnitVectors(new D(0,0,1),d.clone().normalize()),n.add(f),P(n,[1.15,.16,1.2],[c*73.2,.08,-27],O.roof),P(f,[1.05,.12,d.length()],[0,0,0],O.roof);for(let g of[-.5,.5]){P(f,[.06,.06,d.length()],[g,.9,0],O.blue);for(let _=-d.length()/2;_<d.length()/2;_+=1.3)P(f,[.05,.9,.05],[g,.45,_],O.blue)}for(let g of[-20,10])P(n,[3.2,1.8,3],[c*67.4,-.75,g],12897994),P(n,[.55,1.1,2.8],[c*65.5,.45,g],O.dark)}for(let c of[e,t,n])$e(c);return{buildings:e,ground:t,port:n}}var zy=pn(ur),tp=1/0,Hu=0;for(let s=0;s<=6e3;s++){let e=zy.getPointAt(s/6e3),t=(e.x-179)**2+(e.z-7)**2;t<tp&&(tp=t,Hu=s/6e3)}var Vy={x:179,axleZ:7,gateZ:-12,stopU:Hu,arrive:19+76*Hu,hold:10},Jc=s=>ve.smoothstep(s,0,1);function Gy(s){let e=(s%Vc+Vc)%Vc,t=e-Vy.arrive,n=Jc((t-7)/3)*(1-Jc((e-105)/3));return{age:t,open:n,checking:t>=0&&t<7,released:t>=10&&e<105,stage:t<0?"Preparing customs filing":t<2?"Documents received":t<6?"Document review":t<10?"Awaiting release":e<105?"Released":"Awaiting next truck"}}function np(s,e){let t=new fe;t.name="us-customs-clearance",s.add(t),P(t,[12,.14,41],[164,0,4],13357515),P(t,[9,3.8,.28],[164,1.95,-13],O.white),P(t,[.28,3.8,13],[159.6,1.95,-6.5],O.white),P(t,[9,.3,4],[164,4,-11],O.roof),P(t,[.25,3.8,13],[168.4,1.95,-6.5],O.white),P(t,[4,.15,1.5],[164,1.15,-8],O.white),P(t,[.12,1,.9],[162.3,.6,-8],O.blue),P(t,[.12,1,.9],[165.7,.6,-8],O.blue),P(t,[1,.65,.09],[164,1.55,-8.55],O.dark),P(t,[.9,.02,.6],[165,1.25,-7.9],16381929);let n=Xt(e,"customs-detail"),i=an(n,"customs-document-operator"),r=document.createElement("canvas");r.width=512,r.height=256;let o=r.getContext("2d"),a=new vn(r);a.colorSpace=ut;let l=new Ce(new At(.88,.51),new vt({map:a}));l.position.set(164,1.57,-8.49),n.add(l);let c="",u=0;P(t,[9.3,1.35,.3],[164,4.15,.12],O.white),Hn(t,"U.S. CUSTOMS",[164,4.48,.29],8.5,"#185e80",82),Hn(t,"CLEARANCE",[164,3.88,.29],8.5,"#185e80",44),en(t,"DOCUMENT REVIEW",[164,.09,0],7),en(t,"INSPECTION IF REQUIRED",[164,.09,23],8);for(let M of[159.2,168.8])for(let T of[11,21])nt(t,.1,4,[M,2,T],O.blue);for(let M of[159.4,168.6])P(t,[1.3,.25,11],[M,4.15,16],O.white);P(t,[8,.25,2],[164,4.15,11.5],O.white),P(t,[10.5,.2,.22],[164,4.15,21.4],O.white),P(t,[3,.15,1.6],[164,1.05,17],O.roof);for(let M of[162.7,165.3])P(t,[.13,1,.8],[M,.5,17],O.dark);let h=new fe;h.name="optional-inspection-carton",h.position.set(163.7,1.14,17),n.add(h),P(h,[1,.025,.8],[0,.012,0],He("cardboard",O.box));for(let M of[-.4,.4])P(h,[1,.6,.025],[0,.3,M],He("cardboard",O.box));for(let M of[-.5,.5])P(h,[.025,.6,.8],[M,.3,0],He("cardboard",O.box));let d=new fe;d.position.set(0,.61,-.4),h.add(d),P(d,[1,.025,.8],[0,0,.4],He("cardboard",O.box));let f=an(n,"optional-examination-operator"),g=P(f.arms[1],[.14,.08,.25],[0,-.52,.08],O.dark);for(let M of[173.5,184.5])P(t,[.25,6.4,.25],[M,3.2,3],O.blue),P(t,[.75,.2,.75],[M,.1,3],O.roof);P(t,[11.3,.25,.3],[179,6.4,3],O.white),P(t,[.5,.3,.4],[179,6.12,3],O.dark),P(t,[7.7,.014,.25],[179,.065,-9],O.white);let _=new fe;_.name="customs-barrier-hinge",_.position.set(173.5,1,-12),e.add(_),P(_,[11,.16,.18],[5.5,0,0],O.white);for(let M=1;M<11;M+=1.5)P(_,[.6,.17,.19],[M,0,0],13075545);P(t,[.65,1.3,.65],[173.5,.65,-12],O.blue);let m=new fe;e.add(m),P(t,[.5,1.1,.4],[184.5,2,-12],O.dark),nt(t,.08,1.5,[184.5,.75,-12],O.dark);let p=new Ce(new Bt(.15,10,8),new vt({color:12674128})),v=p.clone();v.material=new vt({color:5672053}),p.position.set(184.5,2.25,-11.76),v.position.set(184.5,1.82,-11.76),m.add(p,v);let x=new fe;e.add(x),P(x,[.75,.025,.52],[0,0,0],O.white),P(x,[.38,.01,.06],[0,.02,0],O.blue),x.position.set(165,1.27,-7.9),$e(_);let y=Gy;return{bindClock(M){y=M},gate:_,work:n,screen:l,inspection:h,get screenUpdates(){return u},update(M){let T=y(M);_.rotation.z=T.open*Math.PI/2,p.visible=!T.released,v.visible=T.released;let R=Jc(T.age/2)*(1-Jc((T.age-6)/2));if(x.position.set(165-.55*R,1.27+.09*R,-7.9+.15*R),x.rotation.y=.08*Math.sin(T.age)*R,c!==T.stage){c=T.stage,u++,o.fillStyle="#214b5b",o.fillRect(0,0,512,256),o.fillStyle="#dceee6",o.font="600 50px Arial, sans-serif";let S=Math.min(50,50*456/Math.max(1,o.measureText(T.stage).width));o.font=`600 ${S}px Arial, sans-serif`,o.fillText(T.stage,28,115),o.font="24px Arial, sans-serif",o.fillText(T.released?"RELEASED":"DOCUMENT STATUS",28,190),a.needsUpdate=!0}i.move([164,.1,-7-.08*R],M,.15+.65*R,0,Math.PI),R>.35&&i.hold(new Rt().setFromObject(x));let w=(M+31)%120,b=ve.smoothstep(w,0,4)*(1-ve.smoothstep(w,12,16));d.rotation.x=-b*1.5,f.move([164,.1,18.2-b*.2],M,b*.8,b*.1,Math.PI),b>.6&&f.hold(new Rt().setFromObject(h)),g.rotation.z=b*.12*Math.sin(w*.7)},inspect:()=>({location:[179,0,7],barrier:_.rotation.z,stage:c,screenUpdates:u})}}function ip(s){let e=new fe;e.name="workstation-detail",e.userData.batchBoundary=!0,s.add(e);let t=1.66;for(let _ of[119.3,120.9])for(let m of[-72.4,-71.8])P(e,[.06,1.3,.06],[_,t+.65,m],He("paint",O.blue));for(let _ of[.16,.72,1.28]){P(e,[1.7,.06,.7],[120.1,t+_,-72.1],O.roof);for(let m=0;m<4;m++)P(e,[1.2,.024,.55],[120.1,t+_+.05+m*.027,-72.1],He("cardboard",O.box))}for(let _=0;_<3;_++)on(e,[79.8,t+_*.29,-74.3]);for(let _ of[129.1]){for(let m of[-72.25,-71.85])P(e,[.75,.055,.06],[_,t+.3,m],O.blue);for(let m of[-.32,.32])P(e,[.06,.65,.06],[_+m,t+.325,-72.05],O.blue);for(let m of[-.2,.2]){let p=P(e,[.21,.17,.32],[_+m,t+.42,-72.05],13216858);p.rotation.x=.18}}for(let[_,m,p]of[[133.41,2.75,-67.56],[139.28,2.85,-81.77],[84.1,1.08,133.88]]){P(e,[.18,.2,.07],[_,m,p],13742935);let v=nt(e,.052,.065,[_,m,p+.055],10111548);v.rotation.x=Math.PI/2}let n=document.createElement("canvas");n.width=1024,n.height=512;let i=n.getContext("2d");i.textBaseline="middle",i.textAlign="center",i.font="600 42px sans-serif",i.fillStyle="#edf0e9",i.fillRect(0,0,1024,512);let r=[],o=0;for(let _ of[-20,-6,8,22])for(let m of[-12,-2])for(let p of[1.2,3.7,6.2]){let v=o%8,x=Math.floor(o/8);i.fillStyle="#345768",i.fillText("A"+String(o+1).padStart(2,"0"),v*128+64,x*128+64);let y=new At(.7,.14),M=y.getAttribute("uv");for(let T=0;T<M.count;T++)M.setXY(T,(M.getX(T)+v)/8,(M.getY(T)+3-x)/4);y.translate(ft.x+_,p+1.16,ft.z+m+1.756),r.push(y),o++}let a=new vn(n);a.colorSpace=ut;let l=new Ce(hr(r),new vt({map:a}));l.name="rack-slot-label-atlas",e.add(l),r.forEach(_=>_.dispose());let c=new Nt(new Bt(.034,6,4),Tt(9345437,.4,.65),96),u=new at,h=0;for(let _ of[-20,-6,8,22])for(let m of[-12,-2])for(let p of[-3.96,3.96])for(let v of[1.2,3.7,6.2])for(let x of[-1,1])u.position.set(ft.x+_+p,v+1.16+x*.055,ft.z+m+1.8),u.updateMatrix(),c.setMatrixAt(h++,u.matrix);c.count=h,e.add(c);let d=pn(Wc),f=new vt({color:5857884,transparent:!0,opacity:.055,depthWrite:!1}),g=new Nt(new At(.08,.34),f,800);h=0;for(let _=1;_<400;_++){let m=_/400,p=d.getTangentAt((_-1)/400),v=d.getTangentAt((_+1)/400);if(p.angleTo(v)<.035)continue;let x=d.getPointAt(m),y=Math.atan2(v.x,v.z);for(let M of[-1,1])u.position.set(x.x+Math.cos(y)*M*.48,1.679,x.z-Math.sin(y)*M*.48),u.rotation.set(-Math.PI/2,0,-y),u.updateMatrix(),g.setMatrixAt(h++,u.matrix)}return g.count=h,e.add(g),$e(e),e}var pt={headway:110,cnOffset:55,usCount:6,cnCount:3,usCycle:660,cnCycle:330,shipSlots:[27.6,31.6],shipDeck:4.6,truckDeck:1.46},Ao={x:109.08,axleZ:-70.0915,turnZ:-14},Ro={x:-151,axleZ:-57.9915,turnZ:-1.4125},Ii=(s,e,t)=>{let n=s.at(-1),i=Math.ceil(Math.hypot(e-n[0],t-n[2])/.35);for(let r=1;r<=i;r++)s.push([n[0]+(e-n[0])*r/i,0,n[2]+(t-n[2])*r/i])};function xs(s,e,t,n,i,r,o){let a=s.at(-1),l=.3*Math.max(Math.abs(e-a[0]),Math.abs(t-a[2])),c=[[a[0],a[2]],[a[0]+n*l,a[2]+i*l],[a[0]+n*l*2,a[2]+i*l*2],[e-r*l*2,t-o*l*2],[e-r*l,t-o*l],[e,t]];for(let u=1;u<=120;u++){let h=u/120,d=1-h,f=[d**5,5*d**4*h,10*d**3*h*h,10*d*d*h**3,5*d*h**4,h**5];s.push([c.reduce((g,_,m)=>g+_[0]*f[m],0),0,c.reduce((g,_,m)=>g+_[1]*f[m],0)])}}var Co=[[139.08,0,-49]];xs(Co,109.08,-19,-1,0,0,1);Ii(Co,109.08,-14);var ui=[[109.08,0,-14]];Ii(ui,109.08,30);xs(ui,139.08,60,0,1,1,0);Ii(ui,160,60);xs(ui,190,30,1,0,0,-1);Ii(ui,190,-13);xs(ui,154,-49,0,-1,-1,0);Ii(ui,144,-49);var Io=[[-121,0,-38]];xs(Io,-151,-8,-1,0,0,1);Ii(Io,-151,-1.4125);var zi=[[-151,0,-1.4125]];Ii(zi,-151,3.5875);xs(zi,-121,33.5875,0,1,1,0);Ii(zi,-117.3,33.5875);xs(zi,-87.3,3.5875,1,0,0,-1);Ii(zi,-87.3,-1.4125);var sp=[Co,ui,Io,zi].map(s=>({points:s,width:8})),$c=[{x:139.08,z:-49,radius:9},{x:109.08,z:-49,radius:9},{x:111,z:44,radius:10},{x:-121,z:-38,radius:9},{x:-151,z:-38,radius:9},{x:-87.3,z:-1.4125,radius:8}];function op(s,e,t){let n=t/2,i=[-e*.33,0,e*.33];P(s,[e,2.7,.48],[0,9.4,n],He("metal",15133156));let r=-e/2;for(let[o,a]of i.entries()){let l=a-2.6;l>r&&P(s,[l-r,6.5,.45],[(r+l)/2,4.8,n],He("metal",O.white)),r=a+2.6;for(let h of[-1,1])P(s,[.26,4.8,.48],[a+h*2.55,4.05,n+.12],O.blue),P(s,[.35,3.65,.38],[a+h*2.18,3.5,n+.38],3754320,.04),P(s,[.27,.75,.32],[a+h*1.65,1.1,n+.22],2568762,.04),nt(s,.12,1.15,[a+h*2.85,.575,n+1.45],14003278),P(s,[.15,.15,.13],[a+h*2.85,.97,n+1.45],O.dark);P(s,[5.35,.28,.6],[a,6.6,n+.2],O.blue),P(s,[4.4,.38,.4],[a,6.25,n+.35],O.dark),P(s,[1.8,.035,1.1],[a,1.6445,n+.08],He("metal",7306113)).name="dock-leveler";for(let h=0;h<10;h++)P(s,[4.45,.09,.06],[a,6.85+h*.1,n+.3],O.roof);let c=Hn(s,String(o+1).padStart(2,"0"),[a,7.65,n+.3],2,"#416476",100);c.name="dock-bay-number",P(s,[.2,.65,.18],[a+3.15,2.5,n+.38],O.dark);let u=new Ce(new Bt(.075,8,6),new ct({color:9548956,emissive:5537376,emissiveIntensity:.5}));u.position.set(a+3.15,2.65,n+.51),s.add(u)}r<e/2&&P(s,[e/2-r,6.5,.45],[(r+e/2)/2,4.8,n],He("metal",O.white));for(let o=-e/2+3;o<e/2-2;o+=6)P(s,[3.5,.8,.08],[o,9.5,n+.28],11058115),P(s,[.07,.85,.1],[o,9.5,n+.35],O.white)}function rp(s,e,t,n){P(s,[n+10,.11,22],[e,-.04,t+11],He("concrete",13357259));for(let r=e-n/2-3;r<e+n/2+4;r+=6)P(s,[.025,.01,21],[r,.022,t+11],11779256);for(let r=t+3;r<t+22;r+=6)P(s,[n+8,.01,.025],[e,.022,r],11779256);for(let r of[-n*.33,0,n*.33])for(let o of[-1,1])P(s,[.11,.015,17],[e+r+o*1.85,.07,t+9],12822619),P(s,[.2,.012,7],[e+r+o*1.05,.075,t+5],10857640);let i=Tt(6846072);P(s,[n+6,.05,.35],[e,.07,t+18],i);for(let r=e-n/2-2;r<e+n/2+3;r+=.38)P(s,[.045,.02,.34],[r,.105,t+18],12108737)}function Hy(s,e,t,n=0){let i=new fe;i.name="street-light",i.position.set(e,0,t),i.rotation.y=n,s.add(i),nt(i,.24,.8,[0,.4,0],12831175),nt(i,.075,8,[0,4,0],9280414),P(i,[2.5,.1,.12],[1.1,7.95,0],9280414),P(i,[1.35,.1,.42],[2.35,7.9,0],O.dark),P(i,[1.2,.025,.33],[2.35,7.835,0],14934729)}function Wu(s,e,t){let n=t[0]-e[0],i=t[2]-e[2],r=Math.hypot(n,i),o=new fe;o.position.set(...e),o.rotation.y=-Math.atan2(i,n),s.add(o);for(let a=0;a<=r;a+=3)P(o,[.07,2,.07],[a,1,0],9345949);for(let a of[0,r])P(o,[.11,.09,.11],[a,2.02,0],5863813);for(let a of[.35,1,1.8])P(o,[r,.035,.035],[r/2,a,0],10135208);for(let a=.25;a<r;a+=.45)P(o,[.025,1.65,.025],[a,1,0],10792879)}function ap(s){let e=He("floor",13160137);P(s,[65,.035,38.5],[0,.4833,-2.25],e);for(let t of[-1,1])P(s,[29.6,.035,4.5],[t*17.7,.4833,19.25],e);for(let t of[-29,-13,1,15,29])P(s,[.1,.012,36],[t,.55,-1],13676631);for(let t of[-19,5.7,11.4])P(s,[60,.012,.1],[0,.55,t],13676631);for(let t of[-1,1])P(s,[26.3,.002,2.25],[t*16.35,.502,19.6],10271665);for(let t=-28;t<30;t+=2.1)Math.abs(t)>3.6&&P(s,[.75,.002,.09],[t,.504,19.6],15265512);for(let t of[-20,-6,8,22])for(let n of[-12,-2]){for(let i of[-4,4])for(let r of[-1.7,1.7])P(s,[.42,.6,.42],[t+i,.82,n+r],13149772),P(s,[.24,.04,.24],[t+i,.55,n+r],O.dark);for(let i of[1.2,3.7,6.2])for(let r of[-1.8,1.8])P(s,[8.2,.25,.11],[t,i+.02,n+r],12225867);for(let i of[-4,4]){let r=P(s,[.055,2.8,.055],[t+i,2.45,n],7114144);r.rotation.x=.92}}for(let[t,n]of[-20,-6,8,22].entries())Hn(s,"A"+(t+1),[n,7.7,-.14],1.7,"#496372",100);for(let t of[14,22]){P(s,[.8,.58,.1],[t-1,1.88,12.55],O.dark,.035),P(s,[.68,.44,.015],[t-1,1.9,12.612],9548986),P(s,[.12,.25,.12],[t-1,1.51,12.55],O.dark),P(s,[.62,.32,.55],[t+1.4,1.68,13],7902113,.04),P(s,[.38,.02,.4],[t+1.4,1.54,13.38],O.white),nt(s,.12,.14,[t+.8,1.62,14.2],11769969).rotation.x=Math.PI/2;for(let n=0;n<4;n++)P(s,[.85,.025,.7],[t-1.3,1.55+n*.03,14.2],12364172);P(s,[.7,.75,.65],[t+2.8,.91,14],6585994,.05)}for(let t of[-12,4]){for(let n of[8,10])P(s,[.16,1.45,.16],[t,2.12,n],O.blue);P(s,[.25,.16,2.3],[t,2.87,9],O.blue),P(s,[.28,.18,.32],[t,2.68,9],4348005)}for(let t=0;t<3;t++){on(s,[-18+t*3,.5,14]);for(let n=0;n<3;n++)Ft(s,[-18+t*3,.8+n*.95,14]);for(let n of[1.5,2.5])P(s,[1.4,.055,1.1],[-18+t*3,n,14],13883082)}for(let t of[-24,-8,8,24]){P(s,[5,.45,3],[t,11.1,-19],He("metal",12766413));for(let n=0;n<5;n++)P(s,[4.4,.035,.08],[t,11.35,-20+n*.45],O.dark)}for(let t=-27;t<=27;t+=9)P(s,[.18,1,.18],[t,9.65,-16],O.roof),P(s,[4.2,.1,.65],[t,9.1,-16],16052440);P(s,[1.6,2.7,.12],[31.6,1.85,-13],O.blue),Hn(s,"EXIT",[31.6,3.6,-12.91],1.2,"#587968",100);for(let t of[-15,12])nt(s,.12,.65,[31.5,1,t],12873557),P(s,[.3,.08,.25],[31.5,1.4,t],O.dark)}function cp(s){rp(s,ft.x,ft.front,ft.width),rp(s,-151,-60.5,57),Wu(s,[195.5,0,-48],[195.5,0,58]),Wu(s,[77,0,-117],[177,0,-117]),Wu(s,[-230,0,-112],[-230,0,47]);for(let[t,n,i]of[[115,20,0],[151,20,Math.PI],[151,-25,Math.PI],[115,-25,0],[192,-55,0],[237,-35,Math.PI],[237,12,Math.PI],[237,54,Math.PI],[-194,20,0],[-193,-8,0],[-145,-49,0]])Hy(s,t,n,i);for(let t of[85.25,89.35])P(s,[.14,.02,40],[t,.084,-33.5],13941360);for(let t of[-1,1]){let n=t*85;for(let i=-36;i<28;i+=5.5)P(s,[28,.018,.035],[n,.03,i],11385273);P(s,[.35,.06,68],[t*72.7,.05,-5],13874272);for(let i=-35;i<28;i+=3)P(s,[.37,.065,1.15],[t*72.7,.056,i],O.dark);for(let i of[-37,27])P(s,[3.5,.35,1],[t*80,.25,i],11977409)}for(let t of[-151,109.08])for(let n of[-19,19]){P(s,[6,.55,3.5],[t+n,11.95,t<0?-80:-109],He("metal",11648705));for(let i=0;i<2;i++)nt(s,.7,.1,[t+n+i*1.6-.8,12.3,t<0?-80:-109],O.dark)}P(s,[48,.06,39],[135,-.005,-4],He("concrete",12700101));for(let t of[-18,-1,16])P(s,[45,.015,.09],[135,.04,t],15787711);for(let t of[117,133,149,157])P(s,[.1,.015,34],[t,.04,-1],15787711);let e=new ct({color:15002856,transparent:!0,opacity:.15,depthWrite:!1,roughness:.6});for(let[t,n]of[151,154].entries())for(let[i,r]of[-12,-8].entries()){on(s,[n,.04,r]);let o=1+(t+i)%2;for(let a=0;a<o;a++)Ft(s,[n,.33+a*.72,r],.75,(t+i+a)%6);if(t===0){let a=new Ce(new jt(1.25,o*.75,1.15),e);a.position.set(n,.33+o*.375,r),s.add(a)}}for(let t of[207,241])for(let n of t<220?[-26,6,32]:[-26,12,48]){let i=new fe;i.position.set(t,0,n),i.rotation.y=t<220?Math.PI/2:-Math.PI/2,s.add(i),P(i,[9,.18,7],[0,.04,0],He("concrete",13225930)),P(i,[8,6.8,6],[0,3.5,0],He("metal",15133157),.1),P(i,[8.6,.35,6.6],[0,7.05,0],11451838),P(i,[1.8,2.6,.13],[-2,1.4,3.08],O.blue),P(i,[2.8,.14,1.4],[-2,4.3,3.35],10860220);for(let r of[-2,2])P(i,[2,1.4,.16],[r,5.5,3.1],7573918),P(i,[2.25,.12,.35],[r,4.75,3.16],O.white),P(i,[.08,1.4,.2],[r,5.5,3.2],O.white)}for(let t of[-20,16]){P(s,[10,5,12],[216,2.5,t],He("metal",15198691)),P(s,[10.5,.4,12.5],[216,5.2,t],O.roof),P(s,[.12,2.5,2],[221.06,1.3,t+2],O.blue);for(let n of[-3,1])P(s,[.12,1.4,2],[221.07,3.7,t+n],8034725)}for(let t of[144,148])P(s,[1.3,2,.8],[t,1,-70],He("metal",11187895)),P(s,[.15,.35,.04],[t+.35,1.1,-69.57],O.dark);P(s,[2.5,.5,1.5],[153,.25,-68],9545384,.12),P(s,[2.7,.12,1.6],[153,.55,-68],O.dark)}function lp(s={}){let e=new fe,t=new fe,n=new fe;e.name="cross-border-logistics-world",t.name="environment",e.add(t,n);let i=P(t,[540,1,330],[0,-1.9,0],15790831,4);i.castShadow=!1;for(let E of[-160,160])P(t,[170,1.4,300],[E,-.75,0],15527914,3);let r=new Ce(new At(150,285,40,50),new ct({color:O.water,roughness:.42,metalness:.06}));r.rotation.x=-Math.PI/2,r.position.y=-.42,r.receiveShadow=!0,t.add(r);let o={value:0};r.material.onBeforeCompile=E=>{E.uniforms.waterTime=o,E.vertexShader=`uniform float waterTime; varying vec2 waterSurface;
`+E.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
waterSurface=position.xy; transformed.z += .09*sin(position.x*.16+waterTime*.55)+.05*cos(position.y*.18+waterTime*.4);`),E.fragmentShader=`uniform float waterTime; varying vec2 waterSurface;
`+E.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal=normalize(normal+mat3(viewMatrix)*vec3(.035*sin(waterSurface.x*.55+waterTime*.32)+.020*cos(waterSurface.y*.81-waterTime*.22),0.0,.025*sin(waterSurface.y*.39-waterTime*.19)));`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=mix(.87,1.08,smoothstep(48.0,72.0,abs(waterSurface.x)));`)},r.castShadow=!1,Wn(t,Hc,10,!0,!0,$c),Wn(t,[[-151,0,-60.5],[-151,0,44]],7,!1,!1),Wn(t,ur,9,!0,!0,$c),Wn(t,Xf,7,!1,!1),Wn(t,Gc,6.5,!0),Wn(t,[[137,0,-61],[216,0,-61]],6.5,!1,!1);function a(E,U,B,F,z){let X=new fe;X.name=F,X.position.set(...E),t.add(X);let k=He("concrete",12963272);if(z){P(X,[U,1.66,B-5],[0,.83,-2.5],k);let K=(U-5.8)/2;for(let ee of[-1,1])P(X,[K,1.66,5],[ee*(2.9+K/2),.83,B/2-2.5],k)}else P(X,[U,1.66,B],[0,.83,0],k,.08);P(X,[U,10,.5],[0,5.5,-B/2],He("metal",O.white));for(let K of[-U/2,U/2]){P(X,[.45,10,B],[K,5.5,0],He("metal",O.white));for(let ee=-B/2;ee<=B/2;ee+=8)P(X,[.65,11,.65],[K,5.75,ee],O.stone)}if(P(X,[U,.6,.6],[0,11,B/2],O.white),z?(P(X,[U,1,6],[0,11.35,-B/2+3],O.roof),P(X,[8,.7,B-6],[-U/2+4,11.35,3],O.roof)):P(X,[U+1,1,B+1],[0,11.3,0],O.white,.3),op(X,U,B),z){X.traverse(K=>{K.name==="dock-leveler"&&Math.abs(K.position.x)<.01&&(K.position.z-=5)});for(let K of[-1,1])P(X,[.18,6.5,.18],[K*2.6,3.35,17],He("paint",O.blue)).name="recessed-dock-post",P(X,[.4,.08,.4],[K*2.6,.06,17],He("metal",8359053)).name="recessed-dock-post-base";for(let K of[-1,1]){for(let ee of[17.2,21.5])P(X,[.08,.9,.08],[K*3.1,2.11,ee],O.blue);P(X,[.07,.07,4.4],[K*3.1,2.56,19.35],O.blue)}P(X,[5.2,.2,.18],[0,6.6,17],O.blue)}P(X,[U*.65,2.05,.1],[0,9.2,B/2+.32],O.white);let Z=Hn(X,F,[0,9.1,B/2+.39],U*.6,"#075782");Z.name="warehouse-brand";for(let K=-U/2+3;K<U/2;K+=3)P(X,[.05,9,.05],[K,5.5,-B/2-.28],O.stone);return X}a([-151,0,-78],57,35,"ZHENGZHONG FULFILLMENT \xB7 CHINA ORIGIN",!1);let l=a([ft.x,0,ft.z],ft.width,ft.depth,"Zhengzhong Fulfillment",!0),c=new fe;c.position.y=1.16,l.add(c);for(let E of[-20,-6,8,22])for(let U of[-12,-2]){for(let B of[-4,4])for(let F of[-1.7,1.7])P(c,[.18,8,.18],[E+B,4.5,U+F],He("paint",O.blue));for(let B of[1.2,3.7,6.2]){P(c,[8.1,.15,3.5],[E,B,U],O.roof);for(let[F,z]of[-2.5,0,2.5].entries())for(let[X,k]of[-.8,.8].entries())E===-20&&U===-12&&B===1.2||E===22&&U===-2&&B===6.2&&F===2||Ft(c,[E+z,B+.1,U+k],1.12,(F+X+Math.round(E)+30+Math.round(B))%6)}}en(c,"RECEIVING",[-22,.54,17],15),en(c,"SORTING",[0,.54,14],14),en(c,"PACKING",[23,.54,17],12),P(c,[40.7,.18,1.65],[-.48,1.45,9],O.dark);for(let E=-20.8;E<19.7;E+=.45){let U=nt(c,.11,1.6,[E,1.6,9],O.roof);U.rotation.x=Math.PI/2}P(c,[43,.15,.12],[-1,1.7,8.05],O.blue),P(c,[35.3,.15,.12],[-4.85,1.7,9.95],O.blue),P(c,[5.3,.15,.12],[17.85,1.7,9.95],O.blue);for(let E=-21;E<21;E+=4)for(let U of[8.35,9.65])P(c,[.15,1,.15],[E,.99,U],O.dark);for(let E of[14,22]){P(c,[5,.2,3],[E,1.4,13.5],O.white);for(let U of[-1.9,1.9])for(let B of[-1,1])P(c,[.15,.9,.15],[E+U,.95,13.5+B],O.dark);E!==14&&(Ft(c,[E,1.55,13.5]),Xc(c,[E,.5,16],Math.PI))}for(let E of[[-26,.5,12],[-10,.5,12],[8,.5,6]])Xc(c,E);for(let E=0;E<6;E++)on(c,[-27+E%2*2,.5,-15+Math.floor(E/2)*4]),Ft(c,[-27+E%2*2,.79,-15+Math.floor(E/2)*4],1.2);let u=new fe;u.name="pallet-jack",n.add(u),P(u,[1,.2,1.3],[-.6,.4,0],O.blue);for(let E of[-.25,.25])P(u,[2.4,.1,.24],[1.3,.23,E],O.blue);nt(u,.09,1.5,[-.7,1.1,0],O.dark).rotation.z=-.3,on(u,[1.2,.11,0]),Ft(u,[1.2,.4,0],1.2);for(let E of[-.65,2.1])for(let U of[-.48,.48]){let B=nt(u,.1,.16,[E,.1,U],O.dark);B.rotation.z=Math.PI/2}Xc(u,[-1.7,0,0],-Math.PI/2);let h=pn(Wc);function d(E,U){let B=new fe;B.name=U,B.position.set(...E),t.add(B),P(B,[96,.12,14],[0,.02,0],He("asphalt",9214365),.7);for(let z=-40;z<=40;z+=8)P(B,[4,.02,.35],[z,.1,0],O.white);for(let z of[-1,1])for(let X of[-4,-2,2,4])P(B,[5,.02,.6],[z*38,.11,X],O.white);P(B,[120,.1,34],[0,.025,29],He("concrete",12832204),.6),P(B,[24,.1,42],[-53,.027,12],He("concrete",12832204),.5);let F=new fe;F.name="airport-terminal",F.position.z=E[0]>0?6:0,B.add(F),P(F,[38,8,12],[0,4,-32],O.white,.3),P(F,[38,.7,12],[0,8.3,-32],O.roof),P(F,[15,4,.2],[0,3.3,-25.85],O.dark),P(F,[15,.2,.3],[0,5.4,-25.7],O.blue),Hn(F,U,[0,7,-25.65],25),nt(F,1.3,13,[31,6.5,-28],O.white),P(F,[6,3,6],[31,13,-28],O.dark,.4),P(F,[6.5,.6,6.5],[31,14.8,-28],O.white);for(let z of[-33,-21,21,33])P(B,[3,.15,3],[z,.2,-23],O.blue),P(B,[.9,.7,.6],[z,.6,-23],O.white)}d([-128,0,98],"CHINA \xB7 AIR CARGO"),d([126,0,100],"U.S. \xB7 AIR CARGO");function f(E,U,B=!1){let F=new fe;F.position.set(...E),F.rotation.y=U,t.add(F);let z=new Mi;z.moveTo(-7,-22),z.lineTo(7,-22),z.lineTo(7,17),z.quadraticCurveTo(7,24,0,28),z.quadraticCurveTo(-7,24,-7,17),z.closePath();let X=new io(z,{depth:4,bevelEnabled:!0,bevelSegments:2,bevelSize:.4,bevelThickness:.3});X.rotateX(Math.PI/2);let k=new Ce(X,He("paint",O.blue));k.position.y=3.8,k.castShadow=!0,F.add(k),P(F,[13.4,.6,41],[0,4.3,-.2],O.white,.15),P(F,[11,7,7],[0,8,-16],O.white,.3),P(F,[11.1,1.2,6],[0,10.3,-15],O.dark),P(F,[12,.7,7.5],[0,12,-16],O.white),nt(F,.8,4,[3.5,14,-17],O.blue);for(let K of[-5.58,5.58])for(let ee of[-17.5,-16,-14.5,-13])P(F,[.07,1.18,.08],[K,10.3,ee],O.white);for(let K of[-4,-2,0,2,4])P(F,[.07,1.18,.08],[K,10.3,-11.96],O.white);let Z=B?[[-3.9,-5,2],[-3.9,9,2],[3.9,13,4]]:[[-3.9,-5,2],[-3.9,9,2],[3.9,-5,2],[3.9,9,2]];for(let[K,ee,Se]of Z)for(let Ie=0;Ie<Se;Ie++){let Me=Gu(F,[K,4.6+Ie*2.591,ee],Ie?O.white:13228511);Me.rotation.y=Math.PI/2}return F}for(let E of[-1,1]){let U=E*85;P(t,[32,2,69],[U,-1,-5],14541535,.4);for(let B of[-29,-17,7,19])P(t,[.6,1.5,2.6],[E*72.5,.5,B],O.dark),nt(t,.3,.5,[E*74,1.3,B],O.blue);for(let B of[-8.28,8.28])P(t,[.2,.08,45],[U+B,.02,-5],O.dark);for(let B of E===1?[24,31]:[-12,5])for(let F of E===1?[126,142]:[-184,-166])P(t,[14,.1,3.5],[F,.01,B],He("concrete",12766410)),Gu(t,[F,.07,B],F%3?13687255:7443365);f([E*57.4,0,-5],E===1?Math.PI:0,!0)}let g=f([0,0,-82],Math.PI/2);g.name="coastal-vessel",n.add(g),$e(g),en(t,"CHINA",[-166,.01,-113],44),en(t,"UNITED STATES",[181,.01,-76],49),en(t,"OCEAN FREIGHT",[0,-.29,-15],27);let _=[];for(let E=0;E<100;E++){let B=(E%2?1:-1)*(80+E*17.31%153),F=-132+E*29.17%262;F>-118&&F<144||_.push([B,0,F])}for(let E=-115;E<=135;E+=19)_.push([-237,0,E]);for(let E of[-126,-108,-89])for(let U of[158,177,194])_.push([U,0,E]);for(let E of[86,107,132])_.push([237,0,E]);let m=new Nt(new rn(.25,.4,3,7),Tt(11972512),_.length),p=new Nt(new so(2.4,1),Tt(O.green),_.length),v=new at;_.forEach((E,U)=>{v.position.set(E[0],1.5,E[2]),v.scale.set(1,1,1),v.updateMatrix(),m.setMatrixAt(U,v.matrix),v.position.y=4.1,v.scale.set(1,1.3,1),v.updateMatrix(),p.setMatrixAt(U,v.matrix)}),m.castShadow=p.castShadow=!0,t.add(m,p);let x=new Rn([[-128,8,98],[-70,34,87],[0,48,78],[70,34,87],[126,8,100]].map(E=>new D(...E))),y=new co({color:7117745,dashSize:2,gapSize:2,transparent:!0,opacity:.38}),M=new yn(new Mt().setFromPoints(x.getPoints(140)),y);M.computeLineDistances(),t.add(M);for(let{points:E,width:U}of sp)Wn(t,E,U,!1,!0,$c);for(let E of[Ao,Ro])Wn(t,[[E.x,0,E.axleZ-3],[E.x,0,E.turnZ]],7,!1,!1);en(t,"YARD RETURN",[190,.039,6],12).rotation.z=Math.PI/2,ap(c),cp(t);let T=np(t,n),R=jf(t,n,g),w=ep(t);ip(t);let b=Yf(t,n),S=s.audit?Qf(t,!0):[];$e(t),t.updateMatrixWorld(!0),t.traverse(E=>{E.matrixAutoUpdate=!1,E.matrixWorldAutoUpdate=!1});function C(E){T.update(E),R.update(E),b.update(E),g.position.set(37*Math.sin(E*.02),0,-82+10*Math.cos(E*.02)),g.rotation.y=Math.atan2(37*Math.cos(E*.02),-10*Math.sin(E*.02)),o.value=E;let U=E%36/36,B=h.getPointAt(U),F=h.getTangentAt(U);u.position.copy(B),u.rotation.y=-Math.atan2(F.z,F.x)}return{root:e,env:t,actors:n,sea:r,airArc:x,customs:T,operations:R,enrichment:w,ambient:b,obstacles:S,update:C}}var jc=class extends oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $u(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new ah(t)}),this.register(function(t){return new ch(t)}),this.register(function(t){return new lh(t)}),this.register(function(t){return new eh(t)}),this.register(function(t){return new th(t)}),this.register(function(t){return new nh(t)}),this.register(function(t){return new ih(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new sh(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new oh(t)}),this.register(function(t){return new rh(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new hh(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Ai.extractUrlBase(e);o=Ai.resolveURL(c,this.path)}else o=Ai.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Js(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===pp){try{o[st.KHR_BINARY_GLTF]=new dh(e)}catch(h){i&&i(h);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new yh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case st.KHR_MATERIALS_UNLIT:o[h]=new Ku;break;case st.KHR_DRACO_MESH_COMPRESSION:o[h]=new fh(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[h]=new ph;break;case st.KHR_MESH_QUANTIZATION:o[h]=new mh;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Wy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Zu=class{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Xe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Zt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new as(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new os(u),c.distance=h;break;case"spot":c=new mo(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),hi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Ku=class{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return vt}extendParams(e,t,n){let i=[];e.color=new Xe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ut))}return Promise.all(i)}},Ju=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},$u=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(a,a)}return Promise.all(r)}},ju=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Qu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},eh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Xe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ut)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},th=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},nh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Xe().setRGB(a[0],a[1],a[2],Zt),Promise.all(r)}},ih=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},sh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Xe().setRGB(a[0],a[1],a[2],Zt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ut)),Promise.all(r)}},rh=class{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},oh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},ah=class{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},ch=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},lh=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},uh=class{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}},hh=class{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Pn.TRIANGLES&&c.mode!==Pn.TRIANGLE_STRIP&&c.mode!==Pn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let g of h){let _=new Ve,m=new D,p=new kt,v=new D(1,1,1),x=new Nt(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,_.compose(m,p,v));for(let y in l)if(y==="_COLOR_0"){let M=l[y];x.instanceColor=new ni(M.array,M.itemSize,M.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);at.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},pp="glTF",Po=12,up={JSON:1313821514,BIN:5130562},dh=class{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Po),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Po,r=new DataView(e,Po),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===up.JSON){let c=new Uint8Array(e,Po+o,a);this.content=n.decode(c)}else if(l===up.BIN){let c=Po+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},fh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=xh[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=xh[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=fr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(let g in f.attributes){let _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(f)},a,c,Zt,d)})})}},ph=class{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},mh=class{constructor(){this.name=st.KHR_MESH_QUANTIZATION}},Qc=class extends bi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,v=1-m,x=p-d+h;for(let y=0;y!==a;y++){let M=o[_+y+a],T=o[_+y+l]*u,R=o[g+y+a],w=o[g+y]*u;r[y]=v*M+x*T+m*R+p*w}return r}},Xy=new kt,gh=class extends Qc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Xy.fromArray(r).normalize().toArray(r),r}},Pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hp={9728:qt,9729:Yt,9984:Ya,9985:$s,9986:us,9987:fn},dp={33071:Kn,33648:Os,10497:jn},Xu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qy={CUBICSPLINE:void 0,LINEAR:es,STEP:Qi},qu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Yy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ct({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bn})),s.DefaultMaterial}function _s(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Zy(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Ky(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Jy(s){let e,t=s.extensions&&s.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Yu(t.attributes):e=s.indices+":"+Yu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Yu(s.targets[n]);return e}function Yu(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function _h(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $y(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var jy=new Ve,yh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Wy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new ho(this.options.manager):this.textureLoader=new go(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Js(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return _s(r,a,i),hi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Ai.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Xu[i.type],a=fr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Dt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Xu[i.type],c=fr[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,m;if(f&&f!==h){let p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,x=t.cache.get(v);x||(_=new c(a,p*f,i.count*f/u),x=new Hs(_,f/u),t.cache.add(v,x)),m=new Ws(x,l,d%f/u,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new Dt(_,l,g);if(i.sparse!==void 0){let p=Xu.SCALAR,v=fr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,M=new v(o[1],x,i.sparse.count*p),T=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new Dt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,w=M.length;R<w;R++){let b=M[R];if(m.setX(b,T[R*l]),l>=2&&m.setY(b,T[R*l+1]),l>=3&&m.setZ(b,T[R*l+2]),l>=4&&m.setW(b,T[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=hp[d.magFilter]||Yt,u.minFilter=hp[d.minFilter]||fn,u.wrapS=dp[d.wrapS]||jn,u.wrapT=dp[d.wrapT]||jn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==qt&&u.minFilter!==Yt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Ut(_);m.needsUpdate=!0,d(m)}),t.load(Ai.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),hi(h,o),h.userData.mimeType=o.mimeType||$y(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ys,sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new zn,sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ct}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){let h=i[st.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Xe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Zt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,ut)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Wt);let u=r.alphaMode||qu.OPAQUE;if(u===qu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===qu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==vt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ue(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==vt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==vt){let h=r.emissiveFactor;a.emissive=new Xe().setRGB(h[0],h[1],h[2],Zt)}return r.emissiveTexture!==void 0&&o!==vt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ut)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),hi(h,r),t.associations.set(h,{materials:e}),r.extensions&&_s(i,h,r),h})}createUniqueName(e){let t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return fp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=Jy(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=fp(new Mt,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?Yy(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let _=u[f],m=o[f],p,v=c[f];if(m.mode===Pn.TRIANGLES||m.mode===Pn.TRIANGLE_STRIP||m.mode===Pn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new kr(_,v):new Ce(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Pn.TRIANGLE_STRIP?p.geometry=zu(p.geometry,So):m.mode===Pn.TRIANGLE_FAN&&(p.geometry=zu(p.geometry,nr));else if(m.mode===Pn.LINES)p=new Vr(_,v);else if(m.mode===Pn.LINE_STRIP)p=new yn(_,v);else if(m.mode===Pn.LINE_LOOP)p=new Gr(_,v);else if(m.mode===Pn.POINTS)p=new Hr(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ky(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),hi(p,r),m.extensions&&_s(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&_s(i,h[0],r),h[0];let d=new fe;r.extensions&&_s(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(ve.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ei(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new Ve;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new zr(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let f=i.channels[h],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let x=0,y=d.length;x<y;x++){let M=d[x],T=f[x],R=g[x],w=_[x],b=m[x];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let S=n._createAnimationTracks(M,T,R,w,b);if(S)for(let C=0;C<S.length;C++)p.push(S[C])}let v=new wi(r,void 0,p);return hi(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,jy)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Xs:c.length>1?u=new fe:c.length===1?u=c[0]:u=new at,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),hi(u,r),r.extensions&&_s(n,u,r),r.matrix!==void 0){let h=new Ve;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new fe;n.name&&(r.name=i.createUniqueName(n.name)),hi(r,n),n.extensions&&_s(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of i.associations)(d instanceof sn||d instanceof Ut)&&h.set(d,f);return u.traverse(d=>{let f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];Vi[r.path]===Vi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Vi[r.path]){case Vi.weights:c=ii;break;case Vi.rotation:c=si;break;case Vi.translation:case Vi.scale:c=ri;break;default:switch(n.itemSize){case 1:c=ii;break;case 2:case 3:default:c=ri;break}break}let u=i.interpolation!==void 0?qy[i.interpolation]:es,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+Vi[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=_h(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof si?gh:Qc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Qy(s,e,t){let n=e.attributes,i=new Rt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){let u=_h(fr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new D,l=new D;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=_h(fr[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new un;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function fp(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=xh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ot.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),hi(s,e),Qy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Zy(s,e.targets,t):s})}function el(s,e,t){let n=new Map,i=new Map,r=_=>{if(i.has(_))return i.get(_);let m=2166136261,p=[...Object.entries(_.attributes).sort(([y],[M])=>y.localeCompare(M)).map(([y,M])=>[y,M]),..._.index?[["index",_.index]]:[]],v="";for(let[y,M]of p){v+=`${y}:${M.count}:${M.itemSize}:${M.normalized};`;let T=new Uint8Array(M.array.buffer,M.array.byteOffset,M.array.byteLength);for(let R of T)m=Math.imul(m^R,16777619)}let x=v+(m>>>0);return i.set(_,x),x},o=(_,m)=>{let p=Object.keys(_.attributes);if(p.join()!==Object.keys(m.attributes).join())return!1;for(let v of[...p,"index"]){let x=v==="index"?_.index:_.attributes[v],y=v==="index"?m.index:m.attributes[v];if(!x||!y){if(x!==y)return!1;continue}if(x.array.length!==y.array.length)return!1;for(let M=0;M<x.array.length;M++)if(x.array[M]!==y.array[M])return!1}return!0};s.traverse(_=>{let m=_;if(!m.isMesh||!m.visible||Array.isArray(m.material)||m.material.transparent||m.instanceColor)return;for(let y=m.parent;y&&y!==s;y=y.parent)if(!y.visible&&!y.userData.dynamicVisibility)return;let p=e?.(m)??!1;for(let y=m;y&&y!==s;y=y.parent)!e&&y.userData.partId?.startsWith("wheel")&&(p=!0);if(!p)return;let v=[r(m.geometry),m.material.uuid,m.castShadow,m.receiveShadow,m.renderOrder].join("|"),x=n.get(v)??[];x.push(m),n.set(v,x)});let a=[],l=0,c=0;for(let _ of n.values()){if(_.length<2||!_.every(x=>o(x.geometry,_[0].geometry)))continue;let m=_.map(x=>{let y=x;return{mesh:x,version:y.isInstancedMesh?y.instanceMatrix.version:0,local:Array.from({length:y.isInstancedMesh?y.count:1},(M,T)=>{let R=new Ve;return y.isInstancedMesh&&y.getMatrixAt(T,R),R})}}),p=_[0],v=new Nt(p.geometry,p.material,m.reduce((x,y)=>x+y.local.length,0));v.name="wheel-draw-batch",v.userData.renderBatchProxy=!0,v.castShadow=p.castShadow,v.receiveShadow=p.receiveShadow,v.instanceMatrix.setUsage(hs),v.renderOrder=p.renderOrder,s.add(v),a.push({batch:v,sources:m}),_.forEach(x=>{x.visible=!1,x.userData.renderBatched=!0}),l+=_.length,c++}let u=t===!1?[]:t?[t]:e?[...new Set(a.flatMap(_=>_.sources.map(({mesh:m})=>{for(let p=m;p&&p!==s;p=p.parent)if(p.userData.dynamicWorker)return p;return m})))]:[s],h=new Ve,d=new Ve,f=new Ve;function g(){if(a.length){u.forEach(_=>_.updateWorldMatrix(!0,!0)),h.copy(s.matrixWorld).invert();for(let{batch:_,sources:m}of a){let p=0;for(let v of m){let x=v.mesh;x.isInstancedMesh&&x.instanceMatrix.version!==v.version&&(v.local.forEach((M,T)=>x.getMatrixAt(T,M)),v.version=x.instanceMatrix.version);let y=!0;for(let M=v.mesh.parent;M&&M!==s;M=M.parent)y=y&&M.visible;d.multiplyMatrices(h,v.mesh.matrixWorld),y||d.makeScale(0,0,0);for(let M of v.local)f.multiplyMatrices(d,M),_.setMatrixAt(p++,f)}_.instanceMatrix.needsUpdate=!0,_.computeBoundingSphere()}}}return g(),{update:g,entries:a,drawsBefore:l,drawsAfter:c}}function mp(s,e=new Set){let t=[];s.traverse(n=>t.push(n));for(let n of t){let i=new Map;for(let r of n.children){let o=r;if(!o.isMesh||o.isInstancedMesh||o.isSkinnedMesh||o.children.length||!o.visible||e.has(o)||Array.isArray(o.material)||o.material.transparent||o.morphTargetInfluences||Object.keys(o.geometry.morphAttributes).length||(o.updateMatrix(),o.matrix.determinant()<=0))continue;let a=Object.entries(o.geometry.attributes).map(([u,h])=>`${u}:${h.itemSize}:${h.normalized}:${h.array.constructor.name}`).sort().join(","),l=[o.material.uuid,o.castShadow,o.receiveShadow,o.renderOrder,o.layers.mask,o.frustumCulled,a].join("|"),c=i.get(l)??[];c.push(o),i.set(l,c)}for(let r of i.values()){if(r.length<2)continue;let o=r.map(u=>{let h=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();return h.applyMatrix4(u.matrix),h}),a=hr(o);if(o.forEach(u=>u.dispose()),!a)continue;let l=r[0],c=new Ce(a,l.material);c.name="rigid-batch",c.castShadow=l.castShadow,c.receiveShadow=l.receiveShadow,c.renderOrder=l.renderOrder,c.layers.mask=l.layers.mask,c.frustumCulled=l.frustumCulled,a.computeBoundingBox(),a.computeBoundingSphere(),n.add(c),r.forEach(u=>u.removeFromParent())}}}function gp(s){let e=s.getLength(),t=Math.ceil(e/.035),n=[],i=[0,0],r=[new ue,new ue],o=!1;for(let l=0;l<6;l++)for(let c=0;c<=t;c++){let u=s.getPointAt(c/t),h=s.getTangentAt(c/t),d=[{x:u.x,z:u.z,angle:Math.atan2(h.z,h.x)}];for(let f=0;f<2;f++){let g=d[f],_=f?1.55:1.25,m=new ue(g.x-_*Math.cos(g.angle),g.z-_*Math.sin(g.angle));if(!o)i[f]=g.angle;else{let p=m.clone().sub(r[f]),v=w=>(-Math.sin(w)*p.x+Math.cos(w)*p.y)/4.25,x=i[f],y=v(x),M=v(x+y/2),T=v(x+M/2),R=v(x+T);i[f]+=(y+2*M+2*T+R)/6}r[f].copy(m),d.push({x:m.x-3.25*Math.cos(i[f]),z:m.y-3.25*Math.sin(i[f]),angle:i[f]})}o=!0,l===5&&n.push(d)}function a(l){let c=(l%1+1)%1,u=c*t,h=Math.min(t-1,Math.floor(u)),d=u-h,f=n[h],g=n[h+1];return f.map((_,m)=>({x:ve.lerp(_.x,g[m].x,d),z:ve.lerp(_.z,g[m].z,d),angle:_.angle+Math.atan2(Math.sin(g[m].angle-_.angle),Math.cos(g[m].angle-_.angle))*d}))}return{at:a,length:e}}function xp(s,e){let t=Xt(e,"air-cargo-operation"),n=Xt(s,"air-cargo-static"),i=pn(lr(66,90,121,132,3,126)),r=gp(i),o=i.getLength(),a=0,l=1/0;for(let p=0;p<1e4;p++){let v=i.getPointAt(p/1e4),x=v.distanceToSquared(new D(86.448,0,132));x<l&&(l=x,a=p/1e4)}let c=[];for(let p=0;p<3;p++){let v=new fe;v.name=p?"air-flatbed-"+p:"air-tug",t.add(v),c.push(v),P(v,[p?3.1:2.5,.22,2.25],[0,p?.49:.46,0],p?O.roof:O.blue),p||(P(v,[1.05,.8,1.8],[.25,.98,0],O.white),P(v,[.7,.45,1.82],[.3,1.17,0],O.dark));for(let x of[-.95,.95])for(let y of[-.9,.9]){let M=nt(v,.22,.15,[x,.295,y],O.dark);M.rotation.x=Math.PI/2}if(p){P(v,[1.7,.09,.08],[2.4,.35,0],O.dark);for(let x=-1.3;x<1.4;x+=.28){let y=nt(v,.045,2.1,[x,.555,0],O.roof);y.rotation.x=Math.PI/2}}$e(v)}let u=new fe;u.name="air-loader-platform",u.position.set(81.948,.6,135.3),t.add(u),P(u,[2.5,.15,4.1],[0,-.075,0],O.roof);for(let p=-1.9;p<=2;p+=.28){let v=nt(u,.055,2.25,[0,-.055,p],O.roof);v.rotation.z=Math.PI/2}for(let p of[-1.25,1.25])P(u,[.07,.9,.07],[p,.45,0],O.blue),P(u,[.07,.07,3.1],[p,.9,0],O.blue);P(u,[2.2,.04,.25],[0,-.02,-2.13],O.roof),$e(u),P(n,[2.6,.28,3.1],[81.948,.26,135.8],O.blue);let h=[];for(let p of[81,82.9])for(let v of[-1,1]){let x=P(t,[.13,1,.13],[p,1.5,135.3],O.dark);x.userData.sign=v,h.push(x)}let d=new fe;d.name="aviation-pallet",t.add(d),P(d,[1.9,.075,1.2],[0,.0375,0],O.roof);for(let p of[-.42,.42])Ft(d,[p,.075,0],.58,p<0?2:0);let f=new fe;d.add(f);for(let p of[-.87,-.43,0,.43,.87])P(f,[.018,.75,.018],[p,.45,-.57],O.dark),P(f,[.018,.75,.018],[p,.45,.57],O.dark),P(f,[.018,.018,1.15],[p,.84,0],O.dark);for(let p of[.3,.55,.82])P(f,[1.78,.018,.018],[0,p,-.57],O.dark),P(f,[1.78,.018,.018],[0,p,.57],O.dark);$e(d);let g=an(t,"air-loader-operator");P(n,[.35,1.05,.3],[84.1,.525,133.7],O.blue),P(n,[.27,.13,.02],[84.1,.98,133.86],O.dark);for(let p of[108.32,109.14])for(let v of[138.734,139.266])P(n,[.27,.2,.3],[p,.1,v],13019736);for(let p of[73.8,103.2])P(n,[.1,.014,13],[p,.09,126.2],13480545);en(n,"GSE",[77,.1,122.8],3.6),$e(n),n.updateWorldMatrix(!0,!0),n.traverse(p=>{p.matrixAutoUpdate=!1,p.matrixWorldAutoUpdate=!1});let _=li("air",0);function m(p){_=li("air",p+23);let v=_.q,x=v<53?0:ve.smoothstep(v,53,90),y=r.at(a+x);if(c.forEach((M,T)=>{let R=y[T];M.position.set(R.x,0,R.z),M.rotation.y=-R.angle}),d.position.set(..._.cargo),d.rotation.y=0,v<6){let M=c[1],T=ve.smoothstep(v,3,6);d.position.set(ve.lerp(M.position.x,81.948,T),.6,ve.lerp(M.position.z,135.3,T)),d.rotation.y=M.rotation.y*(1-T)}else if(v>=44&&v<48){let M=c[1],T=ve.smoothstep(v,44,48);d.position.set(ve.lerp(81.948,M.position.x,T),.6,ve.lerp(135.3,M.position.z,T)),d.rotation.y=M.rotation.y*T}else if(v>=48){let M=c[1];d.position.set(M.position.x,.6,M.position.z),d.rotation.y=M.rotation.y}d.userData.support=_.support,u.position.y=_.level,h.forEach(M=>{let T=_.level-.4;M.position.y=.4+T/2,M.scale.y=Math.hypot(T,3.5),M.rotation.x=M.userData.sign*Math.atan2(3.5,T)}),g.move(_.worker,p,.45+.25*Math.sin(v*.6),0,Math.PI)}return m(0),{root:t,equipment:n,cargo:d,platform:u,bodies:c,worker:g,update:m,get state(){return _}}}var tl=s=>Math.atan2(Math.sin(s),Math.cos(s));function ys(s,e){let t=pn(s),n=t.getLength(),i=Math.ceil(n/.035),r=n/i,o=e.rearX-e.frontX,a=e.hitchX-e.rearX,l=e.trailerLength,c=[],u=e.wheelZ.map(()=>0),h=0,d=0,f=0,g=w=>new ue(-Math.cos(w),Math.sin(w)),_=w=>{let b=t.getTangentAt(ve.clamp(w,0,1));return Math.atan2(b.z,-b.x)};h=d=_(0);let m=0,p=0;for(let w=0;w<=i;w++){let b=w/i,S=t.getPointAt(b),C=_(b),E=.6/n,U=tl(_(Math.min(1,b+E))-_(Math.max(0,b-E)))/(n*(Math.min(1,b+E)-Math.max(0,b-E))),B=g(C),F=new ue(Math.sin(C),Math.cos(C)),z=B.clone().addScaledVector(F,l*U),X=we=>-z.dot(new ue(Math.sin(we),Math.cos(we)))/a,k=h;if(w){let we=X(h),G=X(h+r*we/2),Y=X(h+r*G/2),ie=X(h+r*Y);h+=r*(we+2*G+2*Y+ie)/6}let Z=g(h),K=w?r*z.dot(Z):0,ee=h-k,Se=K?ee/K:0,Ie=Math.atan(o*Se),Me=w?tl(C-d):0;e.wheelZ.forEach((we,G)=>{let Y=e.wheelKinds[G],ie=Y==="trailer"?(w?r:0)-Me*we:K*(Y==="front"?Math.hypot(1-Se*we,o*Se):1-Se*we);u[G]+=ie/e.radius}),f+=K,c.push({x:S.x+l*B.x+e.hitchX*Z.x,z:S.z+l*B.y+e.hitchX*Z.y,heading:h,trailerHeading:C,steering:Ie,spins:[...u],distance:f,speed:0,reversing:!1,phase:"forward"}),m=Math.max(m,Math.abs(Ie)),p=Math.max(p,Math.abs(tl(C-h))),d=C}let v=c.map((w,b)=>1+.85*Math.max(...[-12,0,12].map(S=>Math.abs(c[Math.max(0,Math.min(i,b+S))].steering)))/Math.max(.01,m)),x=new Float64Array(c.length);for(let w=1;w<=i;w++)x[w]=x[w-1]+r*(v[w-1]+v[w])/2;let y=w=>{let b=ve.clamp(w,0,1)*i,S=Math.min(i-1,Math.floor(b));return ve.lerp(x[S],x[S+1],b-S)};return{at:w=>{let b=ve.clamp(w,0,1)*i,S=Math.min(i-1,Math.floor(b)),C=b-S,E=c[S],U=c[S+1];return{...E,x:ve.lerp(E.x,U.x,C),z:ve.lerp(E.z,U.z,C),heading:ve.lerp(E.heading,U.heading,C),trailerHeading:E.trailerHeading+tl(U.trailerHeading-E.trailerHeading)*C,steering:ve.lerp(E.steering,U.steering,C),spins:E.spins.map((B,F)=>ve.lerp(B,U.spins[F],C)),distance:ve.lerp(E.distance,U.distance,C)}},travel:(w,b,S)=>{let C=y(w),E=y(b),U=ve.lerp(C,E,ve.clamp(S,0,1)),B=0,F=i;for(;F-B>1;){let X=B+F>>1;x[X]<U?B=X:F=X}let z=(U-x[B])/(x[F]-x[B]||1);return{u:(B+z)/i,factor:(E-C)/ve.lerp(v[B],v[F],z)}},nearest:(w,b)=>{let S=1/0,C=0;for(let F=0;F<=i;F++){let z=t.getPointAt(F/i),X=(z.x-w)**2+(z.z-b)**2;X<S&&(S=X,C=F)}let E=Math.max(0,(C-1)/i),U=Math.min(1,(C+1)/i),B=F=>{let z=t.getPointAt(F);return(z.x-w)**2+(z.z-b)**2};for(let F=0;F<36;F++){let z=(E*2+U)/3,X=(E+U*2)/3;B(z)<B(X)?U=X:E=z}return(E+U)/2},curve:t,length:n,rows:c,maxSteering:m,maxArticulation:p,dimensions:e}}var di=(s,e)=>(s%e+e)%e,cn=s=>ve.smoothstep(s,0,1),ev=s=>s<.15?s*s/(2*.15*(1-.15)):s>1-.15?1-(1-s)**2/(2*.15*(1-.15)):(s-.15/2)/(1-.15),tv=s=>Math.max(0,Math.min(1,s/.15,(1-s)/.15))/.85;function _p(s,e=5.2425){let t=ys(ur,s),n=ys(Hc,s),i={us:{main:t,approach:ys(Co,s),back:ys(ui,s)},cn:{main:n,approach:ys(Io,s),back:ys(zi,s)}},r=t.nearest(179,7),o=t.nearest(139.08,-49),a=t.nearest(144,-49),l=1-30/t.length,c=i.us.back.nearest(190,10),u=n.nearest(-87.3,-1.4125),h=n.nearest(-121,-38),d=1-30/i.cn.back.length;function f(v,x,y,M,T,R,w){let b=ve.clamp((M-T)/(R-T),0,1),S=v.travel(x,y,ev(b)),C=v.at(S.u);return C.speed=S.factor/(R-T)*tv(b),C.phase=w,C}let g=Object.fromEntries(["us","cn"].map(v=>{let x=i[v],y=v==="us"?0:u,M=v==="us"?o:h,T=x.main.at(y).spins,R=x.main.at(M).spins,w=x.approach.at(1),b=x.back.at(1),S=R.map((U,B)=>U-T[B]+w.spins[B]),C=x.main.at(a).spins,E=v==="us"?S.map((U,B)=>U+b.spins[B]+x.main.at(1).spins[B]-C[B]):S.map((U,B)=>U+b.spins[B]);return[v,{mainStart:T,mainBranch:R,approachEnd:w,backEnd:b,net:S,mergeSpins:C,total:E}]}));function _(v,x,y){let M=y+(v==="cn"?pt.cnOffset:0),T=v==="us"?pt.usCount:pt.cnCount,R=T*pt.headway,w=di(M-x*pt.headway,R),b=i[v],S=v==="us"?0:u,C=v==="us"?o:h,E=b.main.at(S),U="port",B=v==="cn",F=0,z=[],{mainStart:X,mainBranch:k,approachEnd:Z,backEnd:K,net:ee,mergeSpins:Se,total:Ie}=g[v],Me=v==="us"?Ao.axleZ-Ao.turnZ:Ro.axleZ-Ro.turnZ,we=X.map(()=>0);if(v==="us"){if(w<92?z=["port"]:w<160?(E=f(b.main,0,r,w,92,160,"to-customs"),U="to-customs"):w<250?(E=b.main.at(r),U="customs",z=["customs"]):w<282?(E=f(b.main,r,o,w,250,282,"released-to-warehouse"),U="released"):w<304&&(E=f(b.approach,0,1,w,282,304,"dock-approach"),we=k,U="warehouse"),w>=304&&w<396){E={...Z,spins:[...Z.spins],speed:0},we=k,U="warehouse",z=["dock"];let Y=Me;if(w<307)E.phase="open-before-reverse",Y=0;else if(w<339){let ie=(w-307)/32;Y=Me*cn(ie),E.speed=Me*6*ie*(1-ie)/32,E.reversing=!0,E.phase="reverse-to-dock"}else if(w>=367){let ie=ve.clamp((w-367)/26,0,1);Y=Me*(1-cn(ie)),E.speed=-Me*6*ie*(1-ie)/26,E.phase="leave-dock"}E.z+=Y,E.distance+=Y,E.spins=E.spins.map(ie=>ie+Y/s.radius)}w>=396&&w<572&&(we=ee,U="return",w<490?E=f(b.back,0,c,w,396,490,"return-bypass"):w<550?(E=b.back.at(c),U="queue"):E=f(b.back,c,1,w,550,572,"queue-advance")),w>=572&&(we=ee.map((Y,ie)=>Y+K.spins[ie]-Se[ie]),U="queue",w<588?E=f(b.main,a,l,w,572,588,"queue-advance"):w<650?E=b.main.at(l):E=f(b.main,l,1,w,650,660,"enter-port")),F=cn((w-304)/3)*(1-cn((w-393)/3)),B=w>=250}else{if(we=X.map(Y=>-Y),w<88)E=b.main.at(u),z=["port"];else if(w<140)E=f(b.main,u,h,w,88,140,"to-factory"),U="factory-approach";else if(w<160)E=f(b.approach,0,1,w,140,160,"factory-approach"),we=k.map((Y,ie)=>Y-X[ie]),U="factory-approach";else if(w<244){E={...Z,spins:[...Z.spins],speed:0},we=k.map((ie,se)=>ie-X[se]),U="warehouse",z=["dock"];let Y=Me;if(w<163)E.phase="open-before-reverse",Y=0;else if(w<197){let ie=(w-163)/34;Y=Me*cn(ie),E.speed=Me*6*ie*(1-ie)/34,E.reversing=!0,E.phase="reverse-to-factory"}else if(w>=215){let ie=ve.clamp((w-215)/26,0,1);Y=Me*(1-cn(ie)),E.speed=-Me*6*ie*(1-ie)/26,E.phase="leave-factory"}E.z+=Y,E.spins=E.spins.map(ie=>ie+Y/s.radius)}else we=ee,U="loaded-return",w<300?E=f(b.back,0,d,w,244,300,"loaded-return"):w<320?E=b.back.at(d):E=f(b.back,d,1,w,320,330,"enter-port");F=cn((w-160)/3)*(1-cn((w-241)/3))}let G=Math.floor((M-x*pt.headway)/R);return E.spins=E.spins.map((Y,ie)=>Y+we[ie]+G*Ie[ie]),{index:x,side:v,q:w,stage:U,cleared:B,doors:F,resources:z,pose:E}}function m(v){let x=di(v,pt.headway),y=Math.floor(v/pt.headway),M=y%2===0?0:1,T=1-M,R=pt.shipSlots[M],w=pt.shipSlots[T],b=pt.shipDeck,S=pt.truckDeck,C=2.591,E=22,U=-2.3,B=S,F=E,z=0,X=null,k=(ee,Se,Ie,Me)=>ve.lerp(ee,Se,cn((x-Ie)/(Me-Ie)));x<3?F=k(E,S+C,0,3):x<6?(F=S+C,z=cn((x-3)/2)):x<14?(B=k(S,E-C,6,14),F=B+C,z=1,X=y):x<24?(U=k(-2.3,R,14,24),B=E-C,F=E,z=1,X=y):x<34?(U=R,B=k(E-C,b,24,34),F=B+C,z=1,X=y):x<36?(U=R,B=b,F=b+C,z=1-cn(x-35)):x<43?(U=R,F=k(b+C,E,36,43)):x<48?(U=k(R,w,43,48),F=E):x<52?(U=w,F=k(E,b+C,48,52)):x<54.5?(U=w,F=b+C,z=cn((x-52)/2)):x<63?(U=w,B=k(b,E-C,54.5,63),F=B+C,z=1,X=y-1):x<73?(U=k(w,-2.3,63,73),B=E-C,F=E,z=1,X=y-1):x<81?(B=k(E-C,S,73,81),F=B+C,z=1,X=y-1):x<83?(F=S+C,z=1-cn(x-81)):F=k(S+C,E,83,108);let Z=x>=14&&x<24?(x-14)/10:x>=63&&x<73?(x-63)/10:-1,K=Z<0?0:.03*Math.sin(Math.PI*Z)**2*Math.sin(2*Math.PI*Z);return{age:x,k:y,x:U,bottom:B,spreaderTop:F,trolleyX:U,lock:z,token:X,target:M,source:T,sway:K}}function p(v,x){let y=x+(v==="cn"?pt.cnOffset:0),M=v==="us"?pt.usCount:pt.cnCount,T=Array.from({length:M},(F,z)=>_(v,z,x)),R=m(y),w=M+1,b=new Array(w),S=di(R.k,M),C=v==="us"?Math.PI:0,E=v==="us"?85:-85,U=(F,z)=>b[di(F,w)]={id:di(F,w),location:"ship",truck:null,slot:z,point:[E+Math.cos(C)*pt.shipSlots[z],pt.shipDeck,-5],yaw:C-Math.PI/2,doors:0},B=(F,z)=>{let X=T[z],k=X.pose,Z=e;b[di(F,w)]={id:di(F,w),location:"truck",truck:z,slot:null,point:[k.x+s.hitchX*Math.cos(k.heading)+Z*Math.cos(k.trailerHeading),pt.truckDeck,k.z-s.hitchX*Math.sin(k.heading)-Z*Math.sin(k.trailerHeading)],yaw:k.trailerHeading,doors:X.doors}};for(let F of T){let z=Math.floor((y-F.index*pt.headway)/(M*pt.headway))*M+F.index;F.index!==S&&B(z-1,F.index)}return R.age<6?B(R.k,S):R.age>=34&&U(R.k,R.target),R.age<54.5?U(R.k-1,R.source):R.age>=81&&B(R.k-1,S),R.token!==null&&(b[di(R.token,w)]={id:di(R.token,w),location:"hoist",truck:null,slot:null,point:[E+Math.cos(C)*(R.x+R.sway),R.bottom,-5],yaw:C-Math.PI/2,doors:0}),{side:v,vehicles:T,cargo:b,lift:R,active:S}}return{routes:i,vehicleAt:_,liftAt:m,at:v=>({us:p("us",v),cn:p("cn",v)}),customsAt:v=>{let x=di(v-160,pt.headway),y=cn((x-83)/7)*(1-cn((x-104)/4));return{age:x,open:y,checking:x<83,released:x>=90,stage:x<2?"Documents received":x<80?"Document review":x<90?"Awaiting release":"Released"}}}}function nl(s,e){let t=s==="cn",n=((e+(t?pt.cnOffset:0)-(t?200:342))%pt.headway+pt.headway)%pt.headway,i=t?-65:-77,r=t?-59:-69,o=t?5:8,a=t?1:3,l=t?6:10,c=o+a+l,u=0;n<o?u=ve.smoothstep(n,0,o):n<o+a?u=1:n<c&&(u=1-ve.smoothstep(n,o+a,c));let h=ve.lerp(i,r,u);return{age:n,z:h,home:i,tip:r,moving:n>0&&n<o||n>o+a&&n<c,active:n<c,wheelAngle:(h-i)/.09}}function vh(s,e){let t=new fe;t.name=`fleet-${e}-dock-operation`,t.userData.batchBoundary=!0,s.add(t);let n=e==="us"?109.08:-151,i=1.66,r=new fe;r.name=`fleet-${e}-dolly`,t.add(r),P(r,[1.75,.06,1.45],[0,.16,0],He("paint",O.blue)),on(r,[0,.19,0]);let o=new fe;o.name=`fleet-${e}-handling-parcels`,o.position.y=.48,r.add(o),Ft(o,[-.35,0,0],.6,0),Ft(o,[.35,0,0],.6,1);let a=new fe;a.userData.batchBoundary=!0,a.position.set(0,1.05,-.95),r.add(a),P(a,[1.45,.055,.055],[0,0,0],O.dark);for(let m of[-1,1])P(r,[.055,.88,.055],[m*.7,.61,-.95],O.blue);let l=new Nt(new rn(.09,.09,.08,10).rotateZ(Math.PI/2),Tt(O.dark,.96,0),4);l.instanceMatrix.setUsage(hs),l.castShadow=!0,r.add(l),$e(r);let c=an(t,`fleet-${e}-dock-worker`);c.root.userData.support="dock-floor";let u=new Ce(new Bt(.08,10,8),new vt({color:11635026}));u.position.set(n+2.35,3.1,e==="us"?-72.72:-59.82),t.add(u);let h=new at,d=nl(e,0),f=null;function g(m,p){d=nl(e,m);let v=p.vehicles.find(R=>R.resources.includes("dock")),x=!!v&&v.doors>.999&&Math.abs(v.pose.speed)<.001&&v.pose.z<-50;f=v?.index??null;let y=x?d.z:d.home,M=(y-d.home)/.09;r.position.set(n,i,y);let T=0;for(let R of[-.68,.68])for(let w of[-.52,.52])h.position.set(R,.09,w),h.rotation.set(M,0,0),h.updateMatrix(),l.setMatrixAt(T++,h.matrix);l.instanceMatrix.needsUpdate=!0,r.updateWorldMatrix(!0,!0),c.move([n,i,y-1.35],m,.7),c.root.rotation.y=0,c.hold(new Rt().setFromObject(a)),u.material.color.setHex(x?6002049:v?12886359:9722705)}let _=nl(e,0);return r.position.set(n,i,_.home),c.move([n,i,_.home-1.35],0,.7),{root:t,carrier:r,cargo:o,handle:a,worker:c,wheels:l,floor:i,update:g,get state(){return d},get owner(){return f}}}var Lo=(s,e)=>{let t=s.getObjectByName(e);if(!t)throw new Error("Missing fleet mechanism "+e);return t},nv=s=>Math.atan2(Math.sin(s),Math.cos(s));function yp(s,e,t,n){let i=Lo(e.scene,"container"),r=v=>t[v==="us"?0:1],o={us:[],cn:[]};function a(v,x,y,M){v.name=`fleet-${x}-${y+1}`,v.userData.fleetVehicle={side:x,index:y},s.actors.add(v),v.traverse(G=>{G.isMesh&&(G.castShadow=G.receiveShadow=!0)});let T=M?.cargo??Lo(v,"container"),R=M?.cargoCarrier??T.parent,w=M?.cargoHome.clone()??T.position.clone(),b=M?.cargoRotation.clone()??T.quaternion.clone();T.removeFromParent(),M?.turnLamps.forEach(G=>G.removeFromParent()),M?.beacon?.removeFromParent();let S=Lo(v,"trailer-articulation"),C=[];v.traverse(G=>{G.userData.partId?.startsWith("wheel")&&!G.name.endsWith("-spin")&&C.push(G)});let E=C.filter(G=>G.name.startsWith("wheel-front-")),U=C.filter(G=>G.name.startsWith("wheel-drive-")),B=C.filter(G=>G.name.startsWith("wheel-trailer-")),F=G=>G.reduce((Y,ie)=>Y+ie.position.x,0)/G.length,z={rearX:F(U),frontX:F(E),hitchX:S.position.x,trailerLength:F(B),radius:.60605,wheelZ:C.map(G=>G.position.z),wheelKinds:C.map(G=>G.name.includes("front")?"front":G.name.includes("trailer")?"trailer":"drive")},X=C.map(G=>Lo(v,G.name+"-spin")),k=["container-lock-front-right","container-lock-front-left","container-lock-rear-right","container-lock-rear-left"].map(G=>{let Y=Lo(v,G);return Y.children.find(ie=>ie.userData.sourceName==="load-corner")??Y}),Z=[-1,1].map(G=>P(v,[.05,.12,.12],[-10.58,.92,G*1.4],new ct({color:13214812,emissive:12683830,emissiveIntensity:0}))),K=new ct({color:9714998,emissive:10236713,emissiveIntensity:0}),ee=[-1,1].map(G=>P(S,[.04,.12,.23],[11.38,.02,G*.95],K)),Se=new Ce(new Bt(.095,8,6),new ct({color:14068299,emissive:13733913,emissiveIntensity:0}));Se.position.set(-8.2,3.4,0),v.add(Se);let Ie=[];v.traverse(G=>{G.name.startsWith("container-lock-")&&G.name.endsWith("-head")&&Ie.push(G)});let Me=[];v.traverse(G=>{/^(cab|cab-shell|cab-roof|cab-glass|hood)$/.test(G.userData.partId||"")&&Me.push(G)});let we=Me.map(G=>G.position.y);return{root:v,side:x,index:y,cargo:T,carrier:R,home:w,rotation:b,trailer:S,wheels:C,spins:X,fronts:E,seats:k,dimensions:z,turn:Z,brakes:ee,brakeMaterial:K,beacon:Se,cab:Me,cabHeights:we,chassisLocks:Ie}}for(let v of["us","cn"]){let x=v==="us"?pt.usCount:pt.cnCount,y=r(v);y.cart.visible=!1;for(let M=0;M<x;M++){let T=M===0?y.truck:v==="cn"&&M===1?n:e.scene.clone(!0);o[v].push(a(T,v,M,M===0?y:void 0))}}let l=_p(o.us[0].dimensions,o.us[0].home.x),c={us:[],cn:[]};function u(v,x,y,M){if(v.name=`fleet-${x}-container-${y}`,v.userData.dispatchCargo={side:x,id:y},v.visible=!0,v.traverse(R=>{R.isMesh&&(R.castShadow=R.receiveShadow=!0)}),!M){let R=Tt(O.stone);v.traverse(w=>{let b=w;if(!b.isInstancedMesh||!w.name.includes("end-panel"))return;R=Array.isArray(b.material)?b.material[0]:b.material;let S=new Ve;for(let C=0;C<b.count;C++)b.getMatrixAt(C,S),new D().setFromMatrixPosition(S).x>0&&b.setMatrixAt(C,new Ve().makeScale(0,0,0));b.instanceMatrix.needsUpdate=!0,b.computeBoundingBox(),b.computeBoundingSphere()}),M=[-1,1].map(w=>{let b=new fe;return b.position.set(6.085,1.2955,w*1.24),v.add(b),P(b,[.055,2.271,1.23],[0,0,-w*.615],R),P(b,[.075,1.7,.035],[.045,0,-w*.6],O.dark),b})}let T=v.getObjectByName("container-seal-tag");return T||(T=new fe,T.name="container-seal-tag",v.add(T),P(T,[.035,.22,.04],[6.135,.91,.04],11101776),P(T,[.036,.09,.1],[6.14,.83,.04],13743223)),T.userData.dynamicVisibility=!0,{root:v,side:x,id:y,doors:M,seal:T}}for(let v of["us","cn"]){let x=r(v);o[v].forEach((y,M)=>c[v].push(u(y.cargo,v,M,M===0&&v==="us"&&x.doorPivots.length?x.doorPivots:void 0))),c[v].push(u(i.clone(!0),v,o[v].length))}s.actors.traverse(v=>{v.name==="seal-verification-ray"&&(v.visible=!1)});let h=new yn(new Mt().setFromPoints([new D,new D]),new zn({color:6134682,transparent:!0,opacity:.22}));h.name="fleet-seal-verification-ray",s.actors.add(h),s.customs.bindClock(l.customsAt),s.customs.update(0);let d=[vh(s.actors,"us"),vh(s.actors,"cn")],f=l.at(0),g=0,_=(v,x)=>{if(x<92)return x;if(v==="us"){for(let[y,M]of[[160,250],[304,307],[339,367],[393,396],[490,550],[588,650]])if(x>=y&&x<M)return x-y}else for(let[y,M]of[[160,163],[197,215],[241,244],[300,320]])if(x>=y&&x<M)return x-y;return 3};function m(v){g=v,f=l.at(v);for(let M of["us","cn"]){let T=f[M],R=r(M);R.poseCrane(T.lift),o[M].forEach((w,b)=>{let S=T.vehicles[b],C=S.pose,E=Math.tan(C.steering)/(w.dimensions.rearX-w.dimensions.frontX),U=Yc({at:F=>l.vehicleAt(M,b,F).pose},v,_(M,S.q));w.root.position.set(C.x,0,C.z),w.root.rotation.y=C.heading,w.trailer.rotation.y=nv(C.trailerHeading-C.heading),w.wheels.forEach((F,z)=>{w.spins[z].rotation.z=C.spins[z],w.fronts.includes(F)&&(F.rotation.y=Math.atan2((w.dimensions.rearX-w.dimensions.frontX)*E,1-F.position.z*E))});let B=S.q<5?1:S.q<6?1-ve.smoothstep(S.q,5,6):S.q>=81?ve.smoothstep(S.q,81,82):0;w.chassisLocks.forEach(F=>F.rotation.y=B*Math.PI/2),w.turn.forEach((F,z)=>F.material.emissiveIntensity=U.turn&&U.turn>0==(z===1)&&U.pulse?1.25:0),w.brakeMaterial.emissiveIntensity=U.brake?.8:.05,w.beacon.material.emissiveIntensity=C.reversing?Math.sin(v*9)>.3?2:.1:0,w.cab.forEach((F,z)=>F.position.y=w.cabHeights[z]+U.settle)}),c[M].forEach((w,b)=>{let S=T.cargo[b];if(S.location==="truck"){let C=o[M][S.truck];w.root.parent!==C.carrier&&C.carrier.add(w.root),w.root.position.copy(C.home),w.root.quaternion.copy(C.rotation)}else{w.root.parent!==R.port&&R.port.add(w.root);let C=S.location==="ship"?pt.shipSlots[S.slot]:T.lift.x+T.lift.sway;w.root.position.set(C,S.location==="ship"?pt.shipDeck:T.lift.bottom,0),w.root.rotation.set(0,-Math.PI/2,0)}w.doors.forEach((C,E)=>C.rotation.y=(E===0?1:-1)*S.doors*Math.PI*1.5),w.seal.visible=S.location==="truck"&&S.doors<.001})}d.forEach((M,T)=>M.update(v,f[T===0?"us":"cn"]));let x=f.us.vehicles.find(M=>M.resources.includes("customs")),y=l.customsAt(v).age;if(h.visible=!!x&&y>=2&&y<6,h.visible){let M=f.us.cargo.find(b=>b.location==="truck"&&b.truck===x.index),T=c.us[M.id].root,R=T.localToWorld(new D(6.14,.9,.04)),w=h.geometry.getAttribute("position");w.setXYZ(0,185,1.6,18),w.setXYZ(1,R.x,R.y,R.z),w.needsUpdate=!0,h.geometry.computeBoundingSphere()}}function p(){return s.actors.updateWorldMatrix(!0,!0),["us","cn"].map(v=>({side:v,vehicles:f[v].vehicles.map(x=>({index:x.index,q:x.q,stage:x.stage,resources:x.resources,cleared:x.cleared,position:o[v][x.index].root.position.toArray(),speed:x.pose.speed,doors:x.doors})),cargo:c[v].map((x,y)=>({...f[v].cargo[y],uuid:x.root.uuid,actual:x.root.getWorldPosition(new D).toArray()})),crane:f[v].lift}))}return m(0),{members:o,containers:c,dispatch:l,docks:d,update:m,inspect:p,get frame(){return f},get time(){return g}}}function iv(s,e){let n=new Uint8Array(16384);for(let p=0;p<64;p++)for(let v=0;v<64;v++){let x=((v+.5)/64*2-1)**2+((p+.5)/64*2-1)**2,y=(p*64+v)*4;n.set([255,255,255,Math.pow(Math.max(0,1-x),2.2)*210],y)}let i=new ti(n,64,64);i.needsUpdate=!0;let r=new At(1,1),o=new ni(new Float32Array(e.length),1);r.setAttribute("contactOpacity",o);let a=new vt({color:3426128,map:i,transparent:!0,opacity:.24,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1});a.onBeforeCompile=p=>{p.vertexShader=`attribute float contactOpacity; varying float vContactOpacity;
`+p.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vContactOpacity=contactOpacity;`),p.fragmentShader=`varying float vContactOpacity;
`+p.fragmentShader.replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
diffuseColor.a*=vContactOpacity;`)},a.customProgramCacheKey=()=>"support-contact-v1";let l=new Nt(r,a,e.length);l.name="support-contact-shadows",l.frustumCulled=!1,l.renderOrder=1,l.instanceMatrix.setUsage(hs),s.add(l);let c=new D,u=new kt,h=new kt,d=new kt().setFromAxisAngle(new D(1,0,0),-Math.PI/2),f=new D,g=new Ve,_=new D(0,1,0);function m(){e.forEach((p,v)=>{p.object.updateWorldMatrix(!0,!1),p.object.getWorldPosition(c),p.offset&&c.copy(p.object.localToWorld(p.offset.clone()));let x=p.support(),y=Math.max(0,c.y-x),M=Math.max(0,1-y/1.3)*(p.strength??1),T=p.enabled?.()??!0;for(let w=p.object;w;w=w.parent)T=T&&w.visible;p.object.getWorldQuaternion(h);let R=new D(1,0,0).applyQuaternion(h);u.setFromAxisAngle(_,-Math.atan2(R.z,R.x)).multiply(d),c.y=x+.004,f.set(p.width*(1+y*.18),p.depth*(1+y*.18),1),g.compose(c,u,f),l.setMatrixAt(v,g),o.setX(v,T?M:0)}),l.instanceMatrix.needsUpdate=!0,o.needsUpdate=!0}return m(),{mesh:l,update:m,contacts:e}}function vp(s,e){let t=[];s.env.traverse(l=>{if(l.name==="parcel"&&l.userData.dimensions){let c=l.getWorldPosition(new D),[u,,h]=l.userData.dimensions;t.push({object:l,width:u*1.25,depth:h*1.25,support:()=>c.y,strength:.65})}});let{dock:n,rack:i,packing:r}=s.operations,o=e.airOperations,a=e.deliveryOperations;t.push({object:n.carrier,width:1.1,depth:1,support:()=>n.carrier.position.y-.18},{object:i.cargo,width:1.6,depth:1.5,support:()=>i.state.support==="rack"?2.435:1.66},{object:r.cargo,width:1,depth:.85,support:()=>r.state.support==="worker"?1.66:r.cargo.position.y},{object:o.cargo,width:2.2,depth:1.4,support:()=>o.cargo.position.y},{object:a.cargo,width:.55,depth:.5,support:()=>a.cargo.userData.support==="courier"?.14:a.cargo.position.y});for(let l of e.fleet?.docks??[])t.push({object:l.carrier,width:1.9,depth:1.8,support:()=>l.floor,strength:.7},{object:l.cargo,width:1.7,depth:1.3,support:()=>l.floor+.48,strength:.55});return s.actors.traverse(l=>{l.userData.dynamicWorker&&t.push({object:l,width:.7,depth:.6,support:()=>l.getWorldPosition(new D).y,strength:.6,enabled:()=>l.userData.support!=="cab-seat"})}),s.actors.traverse(l=>{l.userData.partId?.startsWith("wheel")&&!l.name.endsWith("-spin")&&t.push({object:l,width:.8,depth:.55,support:()=>.035,strength:.55})}),iv(s.root,t)}var Ln=ve.smoothstep,Mp=Gc.map(([s,e,t])=>[s+(Math.abs(s-232)<.001?4.5*Ln(16-t,0,12)*(1-Ln(-15-t,0,16)):0),e,t]);function sv(){let s=pn(Mp),e=s.getLength(),t=0,n=1/0;for(let c=0;c<1e4;c++){let u=s.getPointAt(c/1e4),h=(u.x-236.5)**2+(u.z+5)**2;h<n&&(n=h,t=c/1e4)}let i=56*t,r=i+44,o=.15,a=1-o/2;function l(c){let u=(c%100+100)%100,h=u-i,d,f;if(u<i){let T=u/i;d=t*(T-Math.max(0,T-1+o)**2/(2*o))/a,f=e/56/a*Math.min(1,(1-T)/o)}else if(u<r)d=t,f=0;else{let T=(u-r)/(100-r);d=t+(1-t)*(T<o?T*T/(2*o):T-o/2)/a,f=e/56/a*Math.min(1,T/o)}let g=s.getPointAt(d),_=s.getTangentAt(d),m=s.getTangentAt(Math.max(0,d-.001)),p=s.getTangentAt(Math.min(1,d+.001)),v=Math.atan2(m.x*p.z-m.z*p.x,m.x*p.x+m.z*p.z)/(e*.002),x=h>=0&&h<44,y=x?Ln(h,7,8.5)*(1-Ln(h,33,34.5)):0,M=x?Math.max(Ln(h,0,1.5)*(1-Ln(h,3,4.5)),Ln(h,35,36.5)*(1-Ln(h,41,42.5))):0;return{q:u,age:h,point:g,heading:-Math.atan2(_.z,_.x)+Math.PI,steering:-Math.atan(3.45*v),distance:(Math.floor(c/100)+d)*e,speed:f,door:y,cab:M,stopped:x,braking:x||u<i&&h>-6,collection:Math.floor(c/100)%2!==0}}return{at:l,curve:s,length:e,arrive:i,depart:r,stopU:t}}function bp(s,e,t,n){let i=Xt(e,"delivery-stop"),r=Xt(s,"delivery-stop-static"),o=sv(),a=new fe;a.position.y=.002,r.add(a),Wn(a,Mp.filter(([x,,y])=>x>231.99&&y<=18&&y>=-33),3,!1,!1),P(r,[3.2,.08,22],[236.3,.01,-5.5],12963275);for(let x of[235,237.65])P(r,[.08,.014,8.8],[x,.06,-5],O.white);for(let x of[-9.4,-.6])P(r,[2.65,.014,.1],[236.3,.06,x],O.white);P(r,[.6,.08,16],[237.4,.04,2],14080982),en(r,"D01",[236.2,.07,-10.7],2.1),en(r,"ENTRY",[237.4,.09,7],1.7),$e(r),r.updateWorldMatrix(!0,!0),r.traverse(x=>{x.matrixAutoUpdate=!1,x.matrixWorldAutoUpdate=!1});let l=Ft(i,[0,0,0],.45,3);l.name="delivery-parcel";let c=an(i,"delivery-courier"),u=new fe;t.add(u);let h=new ct({color:10964034,emissive:11807263,emissiveIntensity:.1}),d=new ct({color:13214300,emissive:12682015,emissiveIntensity:0});for(let x of[-.9,.9])P(u,[.03,.35,.1],[3.48,1,x],h);let f=[-1,1].map(x=>P(u,[.1,.08,.025],[-3.05,.9,x*1.08],d.clone())),g=new D(-2.4,.65,-.35),_=new D(3.18,.965,0),m=new D,p=o.at(0);function v(x){p=o.at(x),t.position.copy(p.point),t.rotation.y=p.heading,n([p.door,p.cab]),t.updateWorldMatrix(!0,!1);let y=p.age,M=p.collection,T=t.localToWorld(_.clone()),R=t.localToWorld(g.clone()),w=R.toArray();p.stopped&&(w=Xn(y,[[0,...R.toArray()],[1.5,...R.toArray()],[3,237.95,.14,-6.8],[7,237.95,.14,-1.6],[9,236.5,.14,-1.98],[11,237.2,.14,-1],[20,237.5,.14,10.15],[22,237.5,.14,10.15],[31,237.2,.14,-1],[33,...M?[236.5,.14,-1.98]:[237.95,.14,-1.6]],[35,237.95,.14,-1.6],[39,237.95,.14,-6.8],[41,...R.toArray()],[44,...R.toArray()]]));let b=p.stopped&&(M?y>=20&&y<33:y>=9&&y<22);if(c.move(w,x,b?.9:0,!p.stopped||y<1.5||y>41?.5:0,p.heading),M)if(p.stopped&&y>=20&&y<33){let C=Xn(y,[[20,237.5,.14,9.5],[22,237.5,1.1,9.5],[31,237.2,1.1,-1.65],[33,...T.toArray()]]);l.position.set(...C),l.userData.support=y<33?"courier":"van-floor"}else p.stopped&&y>=33||p.q>o.depart?(l.position.copy(T),l.userData.support="van-floor"):(l.position.set(237.5,.14,9.5),l.userData.support="entrance");else if(p.stopped&&y>=9&&y<22){let C=Xn(y,[[9,...T.toArray()],[11,237.2,1.1,-1.65],[20,237.5,1.1,9.5],[22,237.5,.14,9.5]]);l.position.set(...C),l.userData.support=y<22?"courier":"entrance"}else p.stopped&&y>=22||p.q>o.depart?(l.position.set(237.5,.14,9.5),l.userData.support="entrance"):(l.position.copy(T),l.userData.support="van-floor");if(b){c.root.rotation.y=Math.atan2(l.position.x-c.root.position.x,l.position.z-c.root.position.z);let C=M?Ln(y,19,20)*(1-Ln(y,20,22)):Ln(y,20,22)*(1-Ln(y,22,23)),E=(M?ve.smoothstep(y,31,33):1-ve.smoothstep(y,9,11))*.24;(C>.001||E>.001)&&c.pose(x*.35,0,.9,C*.7+E),c.hold(new Rt().setFromObject(l))}l.rotation.y=l.userData.support==="van-floor"?p.heading:0,c.root.userData.support=!p.stopped||y<1.5||y>41?"cab-seat":"ground";let S=Yc(o,x);h.emissiveIntensity=S.brake?1.3:.1,f.forEach((C,E)=>{C.material.emissiveIntensity=S.turn&&S.turn>0==(E===0)&&S.pulse?1.2:0})}return v(0),{root:i,equipment:r,journey:o,cargo:l,worker:c,update:v,get state(){return p}}}function pr(s,e){let t=s.getObjectByName(e);if(!t)throw new Error("Missing source mechanism: "+e);return t}function vs(s){let e=s.scene.clone(!0);return e.traverse(t=>{t.isMesh&&(t.castShadow=t.receiveShadow=!0)}),e}function il(s,e,t){let n=new xo(s),i=t.map(r=>{let o=wi.findByName(e,r);if(!o)throw new Error("Missing animation "+r);let a=n.clipAction(o);return a.setLoop(Cc,1),a.clampWhenFinished=!0,a.play(),a.paused=!0,a});return r=>{i.forEach((o,a)=>o.time=o.getClip().duration*ve.clamp(r[a]||0,0,.999999)),n.update(0)}}var rv=s=>new D(...s);async function Sp(s,e,t,n={}){let i=new jc,r={};for(let[k,Z]of[["crane","Loading quay cranes"],["truck","Loading container chassis"],["aircraft","Loading cargo aircraft"],["van","Loading delivery vehicles"]]){t(Z);let K=await fetch(e+k+".glb",{signal:n.signal});if(!K.ok)throw new Error("The "+k+" model could not load ("+K.status+").");let ee=r[k]=await i.parseAsync(await K.arrayBuffer(),e);if(n.onAsset?.(ee.scene),n.signal?.aborted)throw new DOMException("Scene loading was canceled.","AbortError");let Se=new Set;for(let Me of ee.animations)for(let we of Me.tracks){let G=mt.findNode(ee.scene,mt.parseTrackName(we.name).nodeName);G instanceof at&&Se.add(G)}ee.scene.traverse(Me=>{/^wheel-(front|rear)-(left|right)__pivot$/.test(Me.name)&&(Me.userData.partId=Me.name.replace("__pivot","")),(Me.name.startsWith("lock-")||Me.name.startsWith("container-lock-")||["cargo","cargo-ribs","hoist-ropes","trolley","spreader"].includes(Me.name)||Me.userData.partId?.startsWith("wheel"))&&Se.add(Me)});let Ie=new Map;ee.scene.traverse(Me=>{let we=Me;if(!we.isMesh||Array.isArray(we.material))return;let G=we.material;if(!G.isMeshStandardMaterial)return;let Y="";for(let se=Me;se&&se!==ee.scene;se=se.parent){let he=(se.userData.partId||se.name).toLowerCase();if(/tire|tread/.test(he)){Y="rubber";break}if(/glass|window|windscreen/.test(he)){Y="glass";break}/chassis|underride|landing-gear/.test(he)&&(Y=Y||"metal")}if(!Y||G.map)return;let ie=G.uuid+Y;if(!Ie.has(ie)){let se=G.clone();if(Y==="glass")se.roughness=.15,se.metalness=.05,se.envMapIntensity=1.15;else{let he=He(Y==="rubber"?"rubber":"metal",G.color.getHex());se.roughness=he.roughness,se.metalness=Y==="rubber"?0:.4,se.normalMap=he.normalMap,se.normalScale.copy(he.normalScale),se.roughnessMap=he.roughnessMap}Y==="metal"&&(se.onBeforeCompile=he=>{he.vertexShader=`varying float vDustHeight;
`+he.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vec4 dustPosition=vec4(transformed,1.0);
#ifdef USE_INSTANCING
dustPosition=instanceMatrix*dustPosition;
#endif
vDustHeight=(modelMatrix*dustPosition).y;`),he.fragmentShader=`varying float vDustHeight;
`+he.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.42,.40,.34),.045*(1.0-smoothstep(.4,1.6,vDustHeight)));`)},se.customProgramCacheKey=()=>"chassis-dust-v1"),Ie.set(ie,se)}we.material=Ie.get(ie)}),mp(ee.scene,Se)}let o=[],a=[];function l(k,Z){let K=new fe;K.position.set(k,0,-5),K.rotation.y=Z,s.actors.add(K);let ee=vs(r.crane);ee.scale.setScalar(2.3),K.add(ee),pr(ee,"cargo").visible=!1;let Se=ee.getObjectByName("cargo-ribs");Se&&(Se.visible=!1),pr(ee,"hoist-ropes").visible=!1;let Ie=pr(ee,"trolley"),Me=pr(ee,"spreader"),we=Me.position.x;Me.scale.x=2.259/(1.92*2.3),Me.scale.z=11.985/(5.2*2.3);let G=[];ee.traverse(le=>{le.name.startsWith("lock-")&&!le.name.endsWith("-head")&&G.push(le)}),G.forEach(le=>le.visible=!1);let Y=[];for(let le of[-1.1295,1.1295])for(let We of[-5.9925,5.9925]){let ze=new fe;ze.name="40ft-twistlock",ze.position.set(le,0,We),P(ze,[.065,.04,.15],[0,0,0],O.dark);let L=new Ce(new rn(.022,.022,.16,10),Tt(O.dark));L.position.y=.1,ze.add(L),K.add(ze),Y.push(ze)}let ie=Tt(4938082),se=[];for(let le=0;le<8;le++){let We=new Ce(new rn(.025,.025,1,6),ie);K.add(We),se.push(We)}let he=vs(r.truck);K.add(he),he.position.set(-2.3,0,-1.4425),he.rotation.y=-Math.PI/2;let Be=pr(he,"container"),lt=Be.parent,N=Be.position.clone(),ae=Be.quaternion.clone();Be.removeFromParent(),Be.visible=!0,K.add(Be);let re=new D(0,1,0),te=new fe;te.name="inactive-legacy-cart",te.visible=!1,s.actors.add(te);let ne=[],_e=[];function de(le){let We=le.sway??0;Ie.position.x=le.trolleyX/2.3;let ze=le.spreaderTop+.5865;Me.position.y=ze/2.3-12.72,Me.position.x=we+We/2.3,G.forEach(L=>L.rotation.y=le.lock*Math.PI/2),Y.forEach((L,A)=>{L.position.set(le.trolleyX+We+(A<2?-1:1)*1.1295,le.spreaderTop-.09,A%2?-5.9925:5.9925),L.rotation.y=le.lock*Math.PI/2});for(let L=0;L<8;L++){let A=L<4?-1:1,q=L%4<2?-1:1,j=L%2?-.075:.075,ce=new D(le.trolleyX+(A*.6+j)*2.3,29.256,q*2.1*2.3),Q=new D(A*.6*Me.scale.x*2.3+le.trolleyX+We,ze+.4*2.3,q*2.1*Me.scale.z*2.3),De=Q.clone().sub(ce);se[L].position.copy(ce).add(Q).multiplyScalar(.5),se[L].scale.y=De.length(),se[L].quaternion.setFromUnitVectors(re,De.normalize())}}return{port:K,crane:ee,truck:he,cargo:Be,cargoCarrier:lt,cargoHome:N,cargoRotation:ae,poseCrane:de,cart:te,doorPivots:ne,turnLamps:_e,preciseLocks:Y,ropes:se}}a.push(l(85,Math.PI),l(-85,0));let c=new fe;c.name="seal-reader-post",s.env.add(c),P(c,[.08,1.55,.08],[185,.775,18],O.blue),P(c,[.24,.18,.28],[185,1.6,18],O.dark);let u=vs(r.aircraft);u.name="cargo-aircraft",u.scale.setScalar(2.8),s.actors.add(u);let h=il(u,r.aircraft.animations,["gear-retract","cargo-door-open"]),d=new Rn([[-128,0,94],[-178,0,92],[-187,0,76],[-168,0,66],[-98,1,66],[-40,25,66],[40,34,66],[94,7,68],[148,0,68],[177,0,70],[183,0,90],[142,0,94]].map(k=>rv([k[0],k[1],k[2]+32])),!1,"catmullrom",.18);o.push(k=>{let Z=k%160,K=Z>=80,ee=Z%80,Se=0,Ie=0,Me=0;ee<13?Me=ee<3?ee/3:ee<10?1:1-(ee-10)/3:ee<65?Se=(ee-13)/52:(Se=1,Me=ee<68?(ee-65)/3:ee<77?1:1-(ee-77)/3);let we=d.getPointAt(K?1-Se:Se),G=d.getTangentAt(K?1-Se:Se);K&&G.negate(),u.position.copy(we),u.rotation.set(0,-Math.atan2(G.z,G.x)+Math.PI+Math.PI*ve.smoothstep(ee,77,80),-Math.atan2(G.y,Math.hypot(G.x,G.z))),Ie=ve.smoothstep(we.y,1.2,6),h([Ie,Me])});let f=vs(r.aircraft);f.name="parked-aircraft",f.scale.setScalar(2.8),f.position.set(92,0,139),f.rotation.y=Math.PI,s.actors.add(f),il(f,r.aircraft.animations,["cargo-door-open"])([1]);let _=xp(s.env,s.actors);o.push(_.update);let m=vs(r.van);m.name="dock-van",m.scale.setScalar(.75),m.position.set(ft.x+ft.width*.33,0,-61.9),m.rotation.y=Math.PI/2,s.actors.add(m);let p=il(m,r.van.animations,["Rear_Shutter_Open","Left_Cab_Door_Open"]);p([1,0]),o.push(k=>p([qc(k).door,0]));let v=vs(r.van);v.name="delivery-van",v.scale.setScalar(.75),s.actors.add(v);let x=il(v,r.van.animations,["Rear_Shutter_Open","Right_Cab_Door_Open"]),y=bp(s.env,s.actors,v,x);o.push(y.update);let M=[];v.traverse(k=>{k.userData.partId?.startsWith("wheel-")&&M.push(k)});let T=M.map(k=>{let Z=new fe;for(let K of[...k.children])K.isMesh&&Z.add(K);return k.add(Z),Z});o.push(k=>{let Z=y.state;M.forEach((K,ee)=>{K.name.includes("front")&&(K.rotation.y=Z.steering),T[ee].rotation.z=Z.distance/(.465*.75)})});let R=vs(r.truck);R.position.set(-151,0,-52.9615),R.rotation.y=Math.PI/2,s.actors.add(R);let w=pr(r.truck.scene,"trailer-articulation").clone(!0);w.name="maintenance-chassis",w.getObjectByName("container")?.removeFromParent(),w.position.set(-139,w.position.y,17),s.actors.add(w),w.traverse(k=>{let Z=k;Z.isMesh&&!Z.isInstancedMesh&&(Z.geometry=Z.geometry.clone())}),$e(w);let b=yp(s,r.truck,a,R);o.unshift(b.update);let S=[v,m,w].map(k=>el(k,k===w?()=>!0:void 0)),C=el(s.actors,k=>{for(let Z=k;Z&&Z!==s.actors;Z=Z.parent)if(Z.userData.dynamicWorker)return!0;return!1});C.entries.forEach(k=>k.batch.name="animated-worker-batch");let E=[new Set([a[1].port,...b.members.cn.map(k=>k.root),w]),new Set([a[0].port,...b.members.us.map(k=>k.root),v,m,f])],U=new Set([...S,C].flatMap(k=>k.entries.map(Z=>Z.batch))),B=E.map(k=>el(s.actors,Z=>{if(U.has(Z))return!1;for(let K=Z;K&&K!==s.actors;K=K.parent)if(k.has(K))return!0;return!1},!1));B.forEach(k=>k.entries.forEach(Z=>Z.batch.name="fleet-draw-batch")),s.actors.updateWorldMatrix(!0,!0),B.forEach(k=>k.update());let F=vp(s,{airOperations:_,deliveryOperations:y,fleet:b});function z(k){o.forEach(Z=>Z(k)),S[0].update(),C.update(),s.actors.updateWorldMatrix(!0,!0),B.forEach(Z=>Z.update()),F.update()}function X(){}return{update:z,dispose:X,fleet:b,contacts:F,fleetBatches:B,ports:a,assets:r,wheelBatches:S,workerBatches:C,airOperations:_,deliveryOperations:y,emptyChassis:w,inspect:()=>b.inspect()}}var sl=class{mode="tour";worldTime=0;tourTime=0;paused=!1;scrollProgress=0;get progress(){return this.mode==="scroll"?this.scrollProgress:Math.max(0,this.tourTime-2)%75/75}tick(e){this.paused||!Number.isFinite(e)||e<0||(this.worldTime+=e,this.mode==="tour"&&(this.tourTime+=e))}setMode(e){if(!["tour","scroll","overview"].includes(e))throw new Error("Unknown camera mode");this.mode=e}setProgress(e){this.scrollProgress=Number.isFinite(e)?Math.max(0,Math.min(1,e)):0}pageScroll(e){this.mode!=="overview"&&(this.setMode("scroll"),this.setProgress(e))}pause(){this.paused=!0}resume(){this.paused=!1}};var Tp=[{id:"overview",number:"00",title:`From China
to U.S. delivery`,description:"Follow the journey from origin to international freight, warehousing and final delivery.",en:"A CONNECTED LOGISTICS WORLD"},{id:"origin",number:"01",title:`The journey
starts here`,description:"Load, consolidate and prepare for departure. Every shipment starts at the origin.",en:"ORIGIN \xB7 CHINA"},{id:"ocean",number:"02",title:`Across oceans
connecting shores`,description:"From loading at the quay to unloading at the destination port, follow the ocean freight route.",en:"OCEAN FREIGHT"},{id:"air",number:"03",title:`Another route
through the skies`,description:"Loading, taxiing, takeoff and landing. Air and ocean freight offer separate routes to the U.S.",en:"AIR FREIGHT"},{id:"arrival",number:"04",title:`After arrival
the next leg`,description:"Quay cranes transfer containers to chassis trucks for the next stage of port operations.",en:"ARRIVAL \xB7 UNITED STATES"},{id:"customs",number:"05",title:`Documents checked
then cleared`,description:"File, review and inspect as needed. After release, cargo moves to the warehouse. Process illustration.",en:"U.S. CUSTOMS \xB7 CLEARANCE"},{id:"warehouse",number:"06",title:`Into the warehouse
step by step`,description:"From receiving to putaway, cargo follows a defined route through the warehouse.",en:"WAREHOUSE \xB7 RECEIVING"},{id:"sorting",number:"07",title:`From storage
to orders`,description:"Storage racks, sorting stations and packing benches form one connected workflow.",en:"SORTING & PACKING"},{id:"delivery",number:"08",title:`The final mile
onward to delivery`,description:"Dispatched parcels leave the warehouse in delivery vehicles, ready for their next stop.",en:"LAST-MILE DELIVERY"}],mr=[{p:0,target:[0,0,0],height:385,span:260,stage:0},{p:.09,target:[-151,3,-78],height:78,span:54,stage:1},{p:.23,target:[-75,8,-5],height:112,span:66,stage:2},{p:.36,target:[-115,8,92],height:105,span:63,stage:3},{p:.43,target:[0,20,95],height:158,span:85,stage:3},{p:.46,target:[86,3,133],height:66,span:50,stage:3},{p:.55,target:[80,8,-5],height:108,span:66,stage:4},{p:.61,target:[173,3,-1],height:64,span:47,stage:5},{p:.7,target:[104,3,-86],height:70,span:50,stage:6},{p:.735,target:[90,3,-99],height:42,span:34,stage:6},{p:.78,target:[110,4,-95],height:48,span:34,stage:7},{p:.86,target:[125,2,-76],height:45,span:30,stage:7},{p:.94,target:[214,2,16],height:90,span:59,stage:8},{p:.965,target:[236,2,0],height:48,span:35,stage:8},{p:1,target:[0,0,0],height:385,span:260,stage:0}];function ov(s,e=!1){let t=ve.clamp(s,0,1);if(e)return{...mr[0],target:new D(...mr[0].target)};let n=0;for(;n<mr.length-2&&t>mr[n+1].p;)n++;let i=mr[n],r=mr[n+1],o=ve.smoothstep((t-i.p)/(r.p-i.p),0,1);return{p:t,target:new D(...i.target).lerp(new D(...r.target),o),height:ve.lerp(i.height,r.height,o),span:ve.lerp(i.span,r.span,o),stage:o>.5?r.stage:i.stage}}var rl=class{camera=new Ei(-1,1,1,-1,.1,1500);target=new D;height=345;span=240;overhead=0;streetAngle=0;initialized=!1;update(e,t,n,i,r,o=!1,a=!1){let l=ov(e,t),c=i<760,u=Math.max(1,i)/Math.max(1,r);if(t){this.target.set(0,0,0),this.overhead=0,this.streetAngle=0,this.camera.position.copy(u<1.15?new D(430,760,0):new D(240,290,355)),this.camera.lookAt(this.target),this.camera.updateMatrixWorld(!0);let v=1/0,x=-1/0,y=1/0,M=-1/0;for(let S of[-274,274])for(let C of[-3,60])for(let E of[-169,169]){let U=new D(S,C,E).applyMatrix4(this.camera.matrixWorldInverse);v=Math.min(v,U.x),x=Math.max(x,U.x),y=Math.min(y,U.y),M=Math.max(M,U.y)}let T=Math.max(M-y,(x-v)/u)*1.045,R=T*u,w=(v+x)/2,b=(y+M)/2;return this.camera.left=w-R/2,this.camera.right=w+R/2,this.camera.top=b+T/2,this.camera.bottom=b-T/2,this.camera.updateProjectionMatrix(),this.height=T,this.span=R/1.18,this.initialized=!0,0}let h=!this.initialized||a?1:o?1-Math.exp(-n*5.75):1-Math.exp(-n*9);this.target.lerp(l.target,h),this.height=ve.lerp(this.height,l.height,h),this.span=ve.lerp(this.span,l.span,h),this.initialized=!0;let d=c?Math.max(this.height*1.04,this.span/u*1.18):this.height,f=c?0:d*u*.1;this.camera.left=-d*u/2-f,this.camera.right=d*u/2-f;let g=c?d*.02:0;this.camera.top=d/2+g,this.camera.bottom=-d/2+g;let _=ve.smoothstep(l.p,.7,.78)*(1-ve.smoothstep(l.p,.86,.94));this.overhead=ve.lerp(this.overhead,_,h);let m=c?new D(430,390,65):new D(240,290,355);m.lerp(c?new D(190,600,120):new D(140,600,240),this.overhead);let p=ve.smoothstep(l.p,.93,.955)*(1-ve.smoothstep(l.p,.98,1));return this.streetAngle=ve.lerp(this.streetAngle,p,h),m.lerp(c?new D(-330,480,130):new D(-300,330,200),this.streetAngle),this.camera.position.copy(this.target).add(m),this.camera.lookAt(this.target),this.camera.updateProjectionMatrix(),l.stage}};function Mh(s){let e=new Set,t=new Set,n=new Set;s.traverse(i=>{let r=i;if(r.geometry&&e.add(r.geometry),r.material)for(let o of Array.isArray(r.material)?r.material:[r.material]){t.add(o);for(let a of Object.values(o))a instanceof Ut&&n.add(a)}i.isInstancedMesh&&i.dispose(),i.isLight&&i.shadow?.dispose()}),e.forEach(i=>i.dispose()),t.forEach(i=>i.dispose()),n.forEach(i=>i.dispose())}var bh=new D,ol=new D,av=new D(-140,240,110);function wp(s,e){e.getWorldDirection(bh),ol.copy(e.position).addScaledVector(bh,-e.position.y/Math.min(-.01,bh.y)),ol.y=0;let t=ve.clamp(Math.max(e.right-e.left,e.top-e.bottom)*.72+35,65,310);return s.position.copy(ol).add(av),s.target.position.copy(ol),s.target.updateMatrixWorld(),Object.assign(s.shadow.camera,{left:-t,right:t,top:t,bottom:-t,near:1,far:850}),s.shadow.camera.updateProjectionMatrix(),t}function Ep(s,e,t){return Math.min(t,1.75,Math.sqrt(18e5/Math.max(1,s*e)))}var al=class{ratio;ceiling;frames=[];elapsed=0;stable=0;constructor(e,t,n){this.ratio=this.ceiling=Ep(e,t,n)}resize(e,t,n){return this.ratio=this.ceiling=Ep(e,t,n),this.frames=[],this.elapsed=this.stable=0,this.ratio}sample(e){if(e<=0||e>150||(this.frames.push(e),this.elapsed+=e,this.elapsed<4e3))return!1;let t=this.frames.sort((o,a)=>o-a),n=t[Math.floor(t.length/2)];this.frames=[],this.elapsed=0;let i=Math.min(this.ceiling,.8),r=this.ratio;return n>24?(this.ratio=Math.max(i,this.ratio-.12),this.stable=0):n<18?++this.stable>=3&&(this.ratio=Math.min(this.ceiling,this.ratio+.06),this.stable=0):this.stable=0,Math.abs(r-this.ratio)>.001}};async function Ap(s,e={}){if(e.signal?.aborted)throw new DOMException("Scene loading was canceled.","AbortError");let t=new fe,n=e.assetBase??new URL("assets/",document.baseURI).href,i=new sl;e.mode&&i.setMode(e.mode);let r;try{r=new Nc({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(N){throw e.onStatus?.("This device cannot display the 3D scene. Showing the poster."),N}let o=new al(s.clientWidth,s.clientHeight,window.devicePixelRatio);r.setClearColor(16119539),r.setPixelRatio(o.ratio),r.outputColorSpace=ut,r.toneMapping=Wa,r.toneMappingExposure=.92,r.shadowMap.enabled=!0,r.shadowMap.autoUpdate=!1,r.shadowMap.type=Na,r.domElement.setAttribute("aria-label","Zhengzhong Fulfillment 3D logistics process illustration"),r.domElement.style.visibility="hidden",s.append(r.domElement);let a=new is;t.add(a),a.background=new Xe(16119539),a.add(new fo(16054783,12898251,.9));let l=new as(16777215,2);l.position.set(-140,240,110),l.castShadow=!0,l.shadow.mapSize.set(2048,2048),l.shadow.camera.left=-260,l.shadow.camera.right=260,l.shadow.camera.top=210,l.shadow.camera.bottom=-210,l.shadow.camera.near=1,l.shadow.camera.far=650,l.shadow.bias=-15e-5,l.shadow.normalBias=.025,a.add(l);let c=new or(r),u=new Oc,h=c.fromScene(u,.04);a.environment=h.texture,a.environmentIntensity=.48,u.dispose(),c.dispose();let d=lp();a.add(d.root);let f=new rl,g=s.clientWidth,_=s.clientHeight,m=new ResizeObserver(()=>{g=s.clientWidth,_=s.clientHeight,C=!0,E=!0,M=performance.now()+800,r.setPixelRatio(o.resize(g,_,window.devicePixelRatio)),r.setSize(g,_,!1)});m.observe(s),r.setSize(g,_,!1);let p=!1,v=!1,x=0,y=performance.now(),M=0,T=-1,R=0,w=0,b=y,S=!1,C=!0,E=!0,U=0,B=0,F=-1/0,z=0,X=0,k,Z=r.getContext(),K=Z.getExtension("WEBGL_debug_renderer_info"),ee=K?Z.getParameter(K.UNMASKED_RENDERER_WEBGL):Z.getParameter(Z.RENDERER),Se=N=>{N.preventDefault(),S=!0,r.domElement.style.visibility="hidden",s.classList.add("context-lost"),e.onStatus?.("The 3D scene was interrupted. Showing the poster.")},Ie=()=>{p||(S=!1,y=performance.now(),C=!0,E=!0,M=y+800,F=-1/0,r.shadowMap.needsUpdate=!0,s.classList.remove("context-lost"),r.domElement.style.visibility=v?"visible":"hidden",e.onStatus?.("The 3D scene has been restored."))};r.domElement.addEventListener("webglcontextlost",Se),r.domElement.addEventListener("webglcontextrestored",Ie);let Me=()=>{y=performance.now()};document.addEventListener("visibilitychange",Me);function we(N){if(p)return;if(x=requestAnimationFrame(we),document.hidden||S||g<1||_<1){y=N;return}if(v&&N-y<1e3/60-.65)return;X=N-y;let ae=Math.min(1,Math.max(0,(N-y)/1e3));if(y=N,i.paused&&!C&&!E&&N>M)return;v&&!i.paused&&o.sample(ae*1e3)&&(r.setPixelRatio(o.ratio),C=!0);let re=performance.now();v&&i.tick(ae),d.update(i.worldTime),k?.update(i.worldTime),U=performance.now()-re;let te=E&&N>=M,ne=f.update(i.progress,i.mode==="overview"||i.mode==="tour"&&i.tourTime<2,ae,g,_,N<M,te);te&&(E=!1),ne!==T&&(T=ne,e.onStageChange?.(T)),N-F>=1e3/20&&(wp(l,f.camera),r.shadowMap.needsUpdate=!0,F=N);let _e=performance.now();r.render(a,f.camera),B=performance.now()-_e,C=!1,R++,z++,N-b>1500&&(w=R*1e3/(N-b),R=0,b=N)}x=requestAnimationFrame(we);let G=()=>lt();e.signal?.addEventListener("abort",G,{once:!0});try{if(k=await Sp(d,n,N=>e.onStatus?.(N),{signal:e.signal,onAsset:N=>{p?Mh(N):t.add(N)}}),p||e.signal?.aborted)throw new DOMException("Scene loading was canceled.","AbortError");v=!0,C=!0,E=!0,y=performance.now(),r.domElement.style.visibility="visible",e.onStatus?.("Scene ready"),s.classList.add("ready")}catch(N){throw lt(),N}function Y(N){i.setMode(N),M=performance.now()+800,C=!0,E=!0,e.onModeChange?.(N)}function ie(N){i.setProgress(N),C=!0,E=!0,M=Math.max(M,performance.now()+400)}function se(){i.pause(),e.onPauseChange?.(!0)}function he(){i.resume(),y=performance.now(),b=y,R=0,e.onPauseChange?.(!1)}function Be(){return{mode:i.mode,paused:i.paused,transitioning:E||performance.now()<M,worldTime:i.worldTime,tourTime:i.tourTime,progress:i.progress,fps:i.paused?0:w,drawCalls:r.info.render.calls,triangles:r.info.render.triangles,geometries:r.info.memory.geometries,textures:r.info.memory.textures,logicMs:U,submitMs:B,renderer:ee,width:g,height:_,pixelRatio:o.ratio,bufferPixels:r.domElement.width*r.domElement.height,ports:k?.inspect()??[]}}function lt(){p||(p=!0,cancelAnimationFrame(x),m.disconnect(),document.removeEventListener("visibilitychange",Me),r.domElement.removeEventListener("webglcontextlost",Se),r.domElement.removeEventListener("webglcontextrestored",Ie),e.signal?.removeEventListener("abort",G),s.classList.remove("ready","context-lost"),Mh(t),h.dispose(),r.dispose(),r.domElement.remove(),k?.dispose())}return{setMode:Y,setProgress:ie,pause:se,resume:he,dispose:lt,getDiagnostics:Be,getRenderSample:()=>({frames:z,lastFrameMs:X})}}var cv=new URL("./",import.meta.url).href,cl=new WeakMap;function lv(s){let e=document.querySelector("#hero-poster"),t=document.querySelector("#hero-status"),n=document.querySelector("#hero-animation-toggle"),i=document.querySelector("#hero-animation-retry"),r=document.querySelector("#hero-overview"),o=document.querySelector("#hero-tour"),a=document.querySelector("#hero-expand"),l=document.querySelector("#hero-visual")??s.closest(".hero-visual")??s,c=document.querySelector("#hero-stage-title"),u=document.querySelector("#hero-stage-description"),h=matchMedia("(prefers-reduced-motion: reduce)"),d,f,g=0,_=!1,m=!1,p=!1,v=!h.matches,x=!1,y=!1,M=!1,T=!1,R=!1,w="overview",b=se=>{t&&(t.textContent=se)},S=se=>{e&&(e.hidden=!se),s.querySelectorAll("canvas").forEach(he=>he.style.visibility=se?"hidden":"visible"),s.dataset.state=se?y?"error":p?"loading":"poster":"ready"},C=()=>v&&!x&&m&&!document.hidden&&!T;function E(){if(n&&(n.disabled=p,n.setAttribute("aria-pressed",String(x)),n.textContent=p?"Loading 3D animation\u2026":d?x?"Resume animation":"Pause animation":"Enable 3D animation"),i&&(i.hidden=!y&&!M),r&&(r.disabled=!d||p||M,r.setAttribute("aria-pressed",String(w==="overview"))),o&&(o.disabled=!d||p||M,o.setAttribute("aria-pressed",String(w==="tour"))),a){let se=document.fullscreenElement===l;a.disabled=R,a.textContent=se?"Exit expanded view":"Expand view",a.setAttribute("aria-expanded",String(se))}}function U(){d&&(C()?d.resume():d.pause(),E())}function B(){g++,f?.abort(),f=void 0,d?.dispose(),d=void 0,p=!1,s.classList.remove("ready","context-lost"),S(!0),E()}function F(se,he=!0){w=se,d?.setMode(se),E(),he&&b(se==="overview"?x?"Full scene view. Animation is paused.":"Full scene view. Logistics operations are running.":x?"Camera tour selected. Animation is paused.":"Camera tour selected. Logistics operations are running.")}async function z(){if(_||p||d||!v)return;let se=++g;f=new AbortController,p=!0,y=!1,M=!1,s.classList.remove("ready","context-lost"),S(!0),b("Loading the 3D logistics process illustration\u2026"),E();try{let he=await Ap(s,{assetBase:cv,mode:w,signal:f.signal,onStageChange:Be=>{if(se!==g||_)return;let lt=Tp[Be];c&&(c.textContent=lt.en),u&&(u.textContent=lt.description)},onModeChange:Be=>{se!==g||_||(w=Be,E())},onStatus:Be=>{se!==g||_||(Be.includes("interrupted")?(M=!0,S(!0),b("The 3D animation was interrupted. Showing the static preview."),E()):Be.includes("restored")?(M=!1,S(!1),b(x?"Animation paused.":"3D animation restored."),U()):Be!=="Scene ready"&&b(Be.endsWith(".")?Be:Be+"."))}});if(_||se!==g){he.dispose();return}d=he,p=!1,y=!1,S(!1),U(),b(x?"Animation paused.":w==="overview"?"Full scene view. This is a logistics process illustration.":"Camera tour selected. This is a logistics process illustration."),E()}catch(he){if(_||se!==g||(p=!1,d=void 0,he.name==="AbortError"))return;y=!0,S(!0),s.classList.remove("ready","context-lost"),b("The 3D animation could not load. The static preview is available. Try again when you are ready."),E()}}let X=()=>{d?(x=!x,U(),b(x?"Animation paused.":"Animation resumed.")):(v=!0,x=!1,z())},k=()=>{v=!0,y=!1,M=!1,B(),z()},Z=()=>F("overview"),K=()=>F("tour"),ee=async()=>{if(!(_||R)){if(typeof l.requestFullscreen!="function"||document.fullscreenEnabled===!1){b("Expanded view is not available in this browser. The full scene is still available here.");return}R=!0,E();try{document.fullscreenElement===l?await document.exitFullscreen():await l.requestFullscreen({navigationUI:"hide"})}catch{_||b("Expanded view could not open. You can continue viewing the full scene here.")}finally{R=!1,_||E()}}},Se=()=>{_||E()},Ie=()=>{U(),!document.hidden&&m&&v&&!d&&!y&&z()},Me=()=>{h.matches&&(x=!0,U(),b("Animation paused because your reduced motion preference is enabled."))},we=se=>{se.persisted?(T=!0,U()):ie()},G=se=>{se.persisted&&(T=!1,U(),m&&v&&!d&&!y&&z())},Y=new IntersectionObserver(se=>{_||(m=se.some(he=>he.target===s&&he.isIntersecting),U(),m&&v&&!d&&!p&&!y&&z())},{threshold:.01});Y.observe(s),n?.addEventListener("click",X),i?.addEventListener("click",k),r?.addEventListener("click",Z),o?.addEventListener("click",K),a?.addEventListener("click",ee),document.addEventListener("fullscreenchange",Se),document.addEventListener("visibilitychange",Ie),h.addEventListener("change",Me),window.addEventListener("pagehide",we),window.addEventListener("pageshow",G);function ie(){_||(_=!0,document.fullscreenElement===l&&document.exitFullscreen&&document.exitFullscreen().catch(()=>{}),B(),Y.disconnect(),n?.removeEventListener("click",X),i?.removeEventListener("click",k),r?.removeEventListener("click",Z),o?.removeEventListener("click",K),a?.removeEventListener("click",ee),document.removeEventListener("fullscreenchange",Se),document.removeEventListener("visibilitychange",Ie),h.removeEventListener("change",Me),window.removeEventListener("pagehide",we),window.removeEventListener("pageshow",G),cl.delete(s))}return S(!0),E(),b(h.matches?"Static preview. Your reduced motion preference is enabled.":"Static preview. The full scene will load when this section is visible."),{dispose:ie,start:z,getDiagnostics:()=>d?.getDiagnostics(),getRenderSample:()=>d?.getRenderSample(),setMode:se=>F(se,!1),setProgress:se=>d?.setProgress(se),getState:()=>({disposed:_,visible:m,loading:p,userEnabled:v,userPaused:x,failed:y,interrupted:M,cameraMode:w,expanded:document.fullscreenElement===l,canvasCount:s.querySelectorAll("canvas").length})}}function Rp(s=document.querySelector("#logistics-scene")){if(!s)return;let e=cl.get(s);if(e)return e;let t=lv(s);return cl.set(s,t),t}function mT(s=document.querySelector("#logistics-scene")){return s?cl.get(s):void 0}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>Rp(),{once:!0}):Rp();export{mT as getLogisticsHero,Rp as mountLogisticsHero};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
