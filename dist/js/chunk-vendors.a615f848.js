"use strict";(self["webpackChunkumphathi"]=self["webpackChunkumphathi"]||[]).push([[998],{4258:function(t,e,n){n.d(e,{Jn:function(){return K},qX:function(){return B},Xd:function(){return q},Mq:function(){return W},ZF:function(){return G},KN:function(){return J}});var r=n(909),i=n(4594),s=n(4589);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.0",l=new i.Yd("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",y="@firebase/auth-compat",v="@firebase/database",w="@firebase/database-compat",_="@firebase/functions",b="@firebase/functions-compat",E="@firebase/installations",I="@firebase/installations-compat",T="@firebase/messaging",S="@firebase/messaging-compat",k="@firebase/performance",C="@firebase/performance-compat",A="@firebase/remote-config",R="@firebase/remote-config-compat",N="@firebase/storage",O="@firebase/storage-compat",D="@firebase/firestore",P="@firebase/firestore-compat",L="firebase",x="9.0.0",M="[DEFAULT]",U={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[y]:"fire-auth-compat",[v]:"fire-rtdb",[w]:"fire-rtdb-compat",[_]:"fire-fn",[b]:"fire-fn-compat",[E]:"fire-iid",[I]:"fire-iid-compat",[T]:"fire-fcm",[S]:"fire-fcm-compat",[k]:"fire-perf",[C]:"fire-perf-compat",[A]:"fire-rc",[R]:"fire-rc-compat",[N]:"fire-gcs",[O]:"fire-gcs-compat",[D]:"fire-fst",[P]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},F=new Map,V=new Map;function j(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function q(t){const e=t.name;if(V.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;V.set(e,t);for(const n of F.values())j(n,t);return!0}function B(t,e){return t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},H=new s.LL("app","Firebase",$);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=x;function G(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw H.create("bad-app-name",{appName:String(i)});const o=F.get(i);if(o){if((0,s.vZ)(t,o.options)&&(0,s.vZ)(n,o.config))return o;throw H.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of V.values())a.addComponent(r);const c=new z(t,n,a);return F.set(i,c),c}function W(t=M){const e=F.get(t);if(!e)throw H.create("no-app",{appName:t});return e}function J(t,e,n){var i;let s=null!==(i=U[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}q(new r.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(t){q(new r.wA("platform-logger",(t=>new o(t)),"PRIVATE")),J(c,u,t),J("fire-js","")}X()},6052:function(t,e,n){n.d(e,{Xb:function(){return ae},v0:function(){return er},e5:function(){return ce}});var r=n(4589),i=n(4258),s=n(655),o=n(4594),a=n(909);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),h=new o.Yd("@firebase/auth");function d(t,...e){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${i.Jn}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw m(t,...e)}function p(t,...e){return m(t,...e)}function g(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),s=new r.LL("auth","Firebase",i);return s.create(e,{appName:t.name})}function m(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function y(t,e,...n){if(!t)throw m(e,...n)}function v(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function w(t,e){t||v(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=new Map;function b(t){w(t instanceof Function,"Expected a class definition");let e=_.get(t);return e?(w(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e){const n=(0,i.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const s=n.initialize({options:e});return s}function I(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(b);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function S(){return"http:"===k()||"https:"===k()}function k(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t,e){this.shortDelay=t,this.longDelay=e,w(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t,e){w(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},P=new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function x(t,e,n,i,s={}){return M(t,s,(()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(O.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),O.fetch()(F(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))}))}async function M(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},D),e);try{const e=new V(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw j(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw j(t,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(t,a,o);f(t,a)}}catch(s){if(s instanceof r.ZR)throw s;f(t,"network-request-failed")}}async function U(t,e,n,r,i={}){const s=await x(t,e,n,r,i);return"mfaPendingCredential"in s&&f(t,"multi-factor-auth-required",{serverResponse:s}),s}function F(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?N(t.config,i):`${t.config.apiScheme}://${i}`}class V{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"timeout"))),P.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(t,e){return x(t,"POST","/v1/accounts:delete",e)}async function B(t,e){return x(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e=!1){const n=(0,r.m9)(t),i=await n.getIdToken(e),s=K(i);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:$(z(s.auth_time)),issuedAtTime:$(z(s.iat)),expirationTime:$(z(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function z(t){return 1e3*Number(t)}function K(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.tV)(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",s),null}}function G(t){const e=K(t);return y(e,"internal-error"),y("undefined"!==typeof e.exp,"internal-error"),y("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.ZR&&J(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function J({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){var e;const n=t.auth,r=await t.getIdToken(),i=await W(t,B(n,{idToken:r}));y(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?et(s.providerUserInfo):[],a=tt(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Y(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Z(t){const e=(0,r.m9)(t);await Q(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function et(t){return t.map((t=>{var{providerId:e}=t,n=(0,s._T)(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){const n=await M(t,{},(()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=F(t,i,"/v1/token",`key=${s}`);return O.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){y(t.idToken,"internal-error"),y("undefined"!==typeof t.idToken,"internal-error"),y("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):G(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return y(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await nt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new rt;return n&&(y("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(y("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){y("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class st{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=(0,s._T)(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new Y(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await W(this,this.stsTokenManager.getToken(this.auth,t));return y(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return H(this,t)}reload(){return Z(this)}_assign(t){this!==t&&(y(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new st(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await W(this,q(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:_,isAnonymous:b,providerData:E,stsTokenManager:I}=e;y(w&&I,t,"internal-error");const T=rt.fromJSON(this.name,I);y("string"===typeof w,t,"internal-error"),it(l,t.name),it(h,t.name),y("boolean"===typeof _,t,"internal-error"),y("boolean"===typeof b,t,"internal-error"),it(d,t.name),it(f,t.name),it(p,t.name),it(g,t.name),it(m,t.name),it(v,t.name);const S=new st({uid:w,auth:t,email:h,emailVerified:_,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:v});return E&&Array.isArray(E)&&(S.providerData=E.map((t=>Object.assign({},t)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new rt;r.updateFromServerResponse(e);const i=new st({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Q(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const at=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class ut{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ct(this.userKey,r.apiKey,i),this.fullPersistenceKey=ct("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?st._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ut(b(at),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||b(at);const s=ct(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=st._fromJSON(t,e);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(c){}}))),new ut(i,t,n)):new ut(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mt(e))return"Blackberry";if(yt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||ft(e))&&!e.includes("edge/"))return"Chrome";if(gt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=(0,r.z$)()){return/firefox\//i.test(t)}function dt(t=(0,r.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ft(t=(0,r.z$)()){return/crios\//i.test(t)}function pt(t=(0,r.z$)()){return/iemobile/i.test(t)}function gt(t=(0,r.z$)()){return/android/i.test(t)}function mt(t=(0,r.z$)()){return/blackberry/i.test(t)}function yt(t=(0,r.z$)()){return/webos/i.test(t)}function vt(t=(0,r.z$)()){return/iphone|ipad|ipod/i.test(t)}function wt(t=(0,r.z$)()){var e;return vt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function _t(){return(0,r.w1)()&&10===document.documentMode}function bt(t=(0,r.z$)()){return vt(t)||gt(t)||yt(t)||mt(t)||/windows phone/i.test(t)||pt(t)}function Et(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e=[]){let n;switch(t){case"Browser":n=lt((0,r.z$)());break;case"Worker":n=`${lt((0,r.z$)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kt(this),this.idTokenSubscription=new kt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=b(e)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await ut.create(this,t),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);r&&r!==i||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Q(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.m9)(t):null;return e&&y(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&y(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(b(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&b(t)||this._popupRedirectResolver;y(e,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[b(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return y(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=It(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function St(t){return(0,r.m9)(t)}class kt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.ne)((t=>this.observer=t))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return v("not implemented")}_getIdTokenResponse(t){return v("not implemented")}_linkToIdToken(t,e){return v("not implemented")}_getReauthenticationResolver(t){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(t,e){return x(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rt(t,e){return U(t,"POST","/v1/accounts:signInWithPassword",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Nt(t,e){return U(t,"POST","/v1/accounts:signInWithEmailLink",L(t,e))}async function Ot(t,e){return U(t,"POST","/v1/accounts:signInWithEmailLink",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Ct{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Dt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Dt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Rt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Nt(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return At(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ot(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(t,e){return U(t,"POST","/v1/accounts:signInWithIdp",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="http://localhost";class xt extends Ct{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new xt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=(0,s._T)(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new xt(n,r);return Object.assign(o,i),o}_getIdTokenResponse(t){const e=this.buildRequest();return Pt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Pt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Pt(t,e)}buildRequest(){const t={requestUri:Lt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(t,e){return x(t,"POST","/v1/accounts:sendVerificationCode",L(t,e))}async function Ut(t,e){return U(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,e))}async function Ft(t,e){const n=await U(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,e));if(n.temporaryProof)throw j(t,"account-exists-with-different-credential",n);return n}const Vt={["USER_NOT_FOUND"]:"user-not-found"};async function jt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return U(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,n),Vt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Ct{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new qt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new qt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Ut(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Ft(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return jt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new qt({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $t(t){const e=(0,r.zd)((0,r.pd)(t))["link"],n=e?(0,r.zd)((0,r.pd)(e))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(t))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||e||t}class Ht{constructor(t){var e,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=Bt(null!==(i=c["mode"])&&void 0!==i?i:null);y(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=$t(t);try{return new Ht(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zt{constructor(){this.providerId=zt.PROVIDER_ID}static credential(t,e){return Dt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Ht.parseLink(e);return y(n,"argument-error"),Dt._fromEmailAndCode(t,n.code,n.tenantId)}}zt.PROVIDER_ID="password",zt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",zt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Kt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt extends Gt{constructor(){super("facebook.com")}static credential(t){return xt._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Wt.credential(t.oauthAccessToken)}catch(e){return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Wt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt extends Gt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return xt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Jt.credential(e,n)}catch(r){return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com",Jt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends Gt{constructor(){super("github.com")}static credential(t){return xt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Xt.credential(t.oauthAccessToken)}catch(e){return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com",Xt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends Gt{constructor(){super("twitter.com")}static credential(t,e){return xt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Yt.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qt(t,e){return U(t,"POST","/v1/accounts:signUp",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.TWITTER_SIGN_IN_METHOD="twitter.com",Yt.PROVIDER_ID="twitter.com";class Zt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await st._fromIdTokenResponse(t,n,r),s=te(n),o=new Zt({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=te(n);return new Zt({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function te(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee extends r.ZR{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,ee.prototype),this.appName=t.name,this.code=e.code,this.tenantId=null!==(i=t.tenantId)&&void 0!==i?i:void 0,this.serverResponse=e.customData.serverResponse}static _fromErrorAndOperation(t,e,n,r){return new ee(t,e,n,r)}}function ne(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ee._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(t,e,n=!1){const r=await W(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zt._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ie(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await W(t,ne(r,i,e,t),n);y(s.idToken,r,"internal-error");const o=K(s.idToken);y(o,r,"internal-error");const{sub:a}=o;return y(t.uid===a,r,"user-mismatch"),Zt._forOperation(t,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&f(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(t,e,n=!1){const r="signIn",i=await ne(t,r,e),s=await Zt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function oe(t,e){return se(St(t),e)}async function ae(t,e,n){const r=St(t),i=await Qt(r,{returnSecureToken:!0,email:e,password:n}),s=await Zt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function ce(t,e,n){return oe((0,r.m9)(t),zt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ue(t,e){return x(t,"POST","/v2/accounts/mfaEnrollment:start",Object.assign({tenantId:t.tenantId},e))}new WeakMap;const le="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,e){this.storage=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(le,"1"),this.storage.removeItem(le),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){const t=(0,r.z$)();return dt(t)||vt(t)}const fe=1e3,pe=10;class ge extends he{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=de()&&Et(),this.fallbackToPolling=bt(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);_t()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,pe):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),fe)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ge.type="LOCAL";const me=ge;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends he{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}ye.type="SESSION";const ve=ye;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new _e(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await we(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function be(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_e.receivers=[];class Ee{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=be("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return window}function Te(t){Ie().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return"undefined"!==typeof Ie()["WorkerGlobalScope"]&&"function"===typeof Ie()["importScripts"]}async function ke(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Ce(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Ae(){return Se()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="firebaseLocalStorageDb",Ne=1,Oe="firebaseLocalStorage",De="fbase_key";class Pe{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Le(t,e){return t.transaction([Oe],e?"readwrite":"readonly").objectStore(Oe)}function xe(){const t=indexedDB.deleteDatabase(Re);return new Pe(t).toPromise()}function Me(){const t=indexedDB.open(Re,Ne);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Oe,{keyPath:De})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Oe)?e(n):(n.close(),await xe(),e(await Me()))}))}))}async function Ue(t,e,n){const r=Le(t,!0).put({[De]:e,value:n});return new Pe(r).toPromise()}async function Fe(t,e){const n=Le(t,!1).get(e),r=await new Pe(n).toPromise();return void 0===r?null:r.value}function Ve(t,e){const n=Le(t,!0).delete(e);return new Pe(n).toPromise()}const je=800,qe=3;class Be{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Me()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>qe)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Se()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_e._getInstance(Ae()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await ke(),!this.activeServiceWorker)return;this.sender=new Ee(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Ce()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Me();return await Ue(t,le,"1"),await Ve(t,le),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ue(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>Fe(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Ve(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Le(t,!1).getAll();return new Pe(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),je)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Be.type="LOCAL";const $e=Be;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t,e){return x(t,"POST","/v2/accounts/mfaSignIn:start",Object.assign({tenantId:t.tenantId},e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ze(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Ke(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",ze().appendChild(r)}))}function Ge(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ge("rcb"),new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const We="recaptcha";async function Je(t,e,n){var r;const i=await n.verify();try{let s;if(y("string"===typeof i,t,"argument-error"),y(n.type===We,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){y("enroll"===e.type,t,"internal-error");const n=await ue(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{y("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;y(n,t,"missing-multi-factor-info");const o=await He(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Mt(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe{constructor(t){this.providerId=Xe.PROVIDER_ID,this.auth=St(t)}verifyPhoneNumber(t,e){return Je(this.auth,t,(0,r.m9)(e))}static credential(t,e){return qt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Xe.credentialFromTaggedObject(e)}static credentialFromError(t){return Xe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?qt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ye(t,e){return e?b(e):(y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe.PROVIDER_ID="phone",Xe.PHONE_SIGN_IN_METHOD="phone";class Qe extends Ct{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Pt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Pt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Pt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Ze(t){return se(t.auth,new Qe(t),t.bypassAuthState)}function tn(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),ie(n,new Qe(t),t.bypassAuthState)}async function en(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),re(n,new Qe(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Ze;case"linkViaPopup":case"linkViaRedirect":return en;case"reauthViaPopup":case"reauthViaRedirect":return tn;default:f(this.auth,"internal-error")}}resolve(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new R(2e3,1e4);class sn extends nn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return y(t,this.auth,"internal-error"),t}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const t=be();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,rn.get())};t()}}sn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const on="pendingRedirect",an=new Map;class cn extends nn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=an.get(this.auth._key());if(!t){try{const e=await un(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}an.set(this.auth._key(),t)}return t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function un(t,e){const n=hn(e),r="true"===await ln(t)._get(n);return await ln(t)._remove(n),r}function ln(t){return b(t._redirectPersistence)}function hn(t){return ct(on,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(t,e,n=!1){const r=St(t),i=Ye(r,e),s=new cn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fn=6e5;class pn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!yn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!mn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=fn&&this.cachedEventUids.clear(),this.cachedEventUids.has(gn(t))}saveEventToCache(t){this.cachedEventUids.add(gn(t)),this.lastProcessedEventTime=Date.now()}}function gn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function mn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function yn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(t,e={}){return x(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_n=/^https?/;async function bn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vn(t);for(const r of e)try{if(En(r))return}catch(n){}f(t,"unauthorized-domain")}function En(t){const e=T(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!_n.test(n))return!1;if(wn.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new R(3e4,6e4);function Tn(){const t=Ie().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Sn(t){return new Promise(((e,n)=>{var r,i,s;function o(){Tn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tn(),n(p(t,"network-request-failed"))},timeout:In.get()})}if(null===(i=null===(r=Ie().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Ie().gapi)||void 0===s?void 0:s.load)){const e=Ge("iframefcb");return Ie()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},Ke(`https://apis.google.com/js/api.js?onload=${e}`)}o()}})).catch((t=>{throw kn=null,t}))}let kn=null;function Cn(t){return kn=kn||Sn(t),kn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new R(5e3,15e3),Rn="__/auth/iframe",Nn="emulator/auth/iframe",On={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Dn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pn(t){const e=t.config;y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?N(e,Nn):`https://${t.config.authDomain}/${Rn}`,s={apiKey:e.apiKey,appName:t.name,v:i.Jn},o=Dn.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function Ln(t){const e=await Cn(t),n=Ie().gapi;return y(n,t,"internal-error"),e.open({where:document.body,url:Pn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:On,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=p(t,"network-request-failed"),s=Ie().setTimeout((()=>{r(i)}),An.get());function o(){Ie().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mn=500,Un=600,Fn="_blank",Vn="http://localhost";class jn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function qn(t,e,n,i=Mn,s=Un){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},xn),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=ft(l)?Fn:n),ht(l)&&(e=e||Vn,u.scrollbars="yes");const h=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(wt(l)&&"_self"!==c)return Bn(e||"",c),new jn(null);const d=window.open(e||"",c,h);y(d,t,"popup-blocked");try{d.focus()}catch(f){}return new jn(d)}function Bn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n="__/auth/handler",Hn="emulator/auth/handler";function zn(t,e,n,s,o,a){y(t.config.authDomain,t,"auth-domain-config-required"),y(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(e instanceof Kt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.xb)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Gt){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Kn(t)}?${(0,r.xO)(u).slice(1)}`}function Kn({config:t}){return t.emulator?N(t,Hn):`https://${t.authDomain}/${$n}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="webStorageSupport";class Wn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ve,this._completeRedirectFn=dn}async _openPopup(t,e,n,r){var i;w(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=zn(t,e,n,T(),r);return qn(t,s,be())}async _openRedirect(t,e,n,r){return await this._originValidation(t),Te(zn(t,e,n,T(),r)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n}async initAndGetManager(t){const e=await Ln(t),n=new pn(t);return e.register("authEvent",(e=>{y(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Gn,{type:Gn},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Gn];void 0!==i&&e(!!i),f(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=bn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return bt()||dt()||vt()}}const Jn=Wn;var Xn="@firebase/auth",Yn="0.17.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qn{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tr(t){(0,i.Xd)(new a.wA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(e=>{y(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),y(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:It(t)},o=new Tt(e,r);return I(o,n),o})(r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(t=>{const e=St(t.getProvider("auth").getImmediate());return(t=>new Qn(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(Xn,Yn,Zn(t))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t=(0,i.Mq)()){const e=(0,i.qX)(t,"auth");return e.isInitialized()?e.getImmediate():E(t,{popupRedirectResolver:Jn,persistence:[$e,me,ve]})}tr("Browser")},909:function(t,e,n){n.d(e,{wA:function(){return s},H0:function(){return l}});var r=n(655),i=n(4589),s=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),o="[DEFAULT]",a=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new i.BH;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(s){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(u(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(f){}try{for(var i=(0,r.XA)(this.instancesDeferred.entries()),s=i.next();!s.done;s=i.next()){var a=(0,r.CR)(s.value,2),c=a[0],l=a[1],h=this.normalizeInstanceIdentifier(c);try{var d=this.getOrInitializeService({instanceIdentifier:h});l.resolve(d)}catch(f){}}}catch(p){e={error:p}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=o),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return(0,r.mG)(this,void 0,void 0,(function(){var t;return(0,r.Jh)(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all((0,r.ev)((0,r.ev)([],(0,r.CR)(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),(0,r.CR)(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=o),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t=o),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var i=t.options,s=void 0===i?{}:i,o=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:s});try{for(var c=(0,r.XA)(this.instancesDeferred.entries()),u=c.next();!u.done;u=c.next()){var l=(0,r.CR)(u.value,2),h=l[0],d=l[1],f=this.normalizeInstanceIdentifier(h);o===f&&d.resolve(a)}}catch(p){e={error:p}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(e)throw e.error}}return a},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&t(s,r),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,i,s=this.onInitCallbacks.get(e);if(s)try{for(var o=(0,r.XA)(s),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(t,e)}catch(u){}}}catch(l){n={error:l}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e=t.instanceIdentifier,n=t.options,r=void 0===n?{}:n,i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:c(e),options:r}),this.instances.set(e,i),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(s){}return i||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=o),this.component?this.component.multipleInstances?t:o:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();function c(t){return t===o?void 0:t}function u(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){var e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new a(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}()},4594:function(t,e,n){
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function r(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var i;n.d(e,{in:function(){return s},Yd:function(){return h}});var s,o=[];(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(s||(s={}));var a={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},c=s.INFO,u=(i={},i[s.DEBUG]="log",i[s.VERBOSE]="log",i[s.INFO]="info",i[s.WARN]="warn",i[s.ERROR]="error",i),l=function(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(e<t.logLevel)){var s=(new Date).toISOString(),o=u[e];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[o].apply(console,r(["["+s+"]  "+t.name+":"],n))}},h=function(){function t(t){this.name=t,this._logLevel=c,this._logHandler=l,this._userLogHandler=null,o.push(this)}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in s))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"===typeof t?a[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,s.DEBUG],t)),this._logHandler.apply(this,r([this,s.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,s.VERBOSE],t)),this._logHandler.apply(this,r([this,s.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,s.INFO],t)),this._logHandler.apply(this,r([this,s.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,s.WARN],t)),this._logHandler.apply(this,r([this,s.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,s.ERROR],t)),this._logHandler.apply(this,r([this,s.ERROR],t))},t}()},4589:function(t,e,n){n.d(e,{BH:function(){return c},LL:function(){return v},ZR:function(){return y},tV:function(){return a},ne:function(){return C},vZ:function(){return E},pd:function(){return k},m9:function(){return O},z$:function(){return u},ru:function(){return h},d:function(){return f},xb:function(){return b},w1:function(){return p},uI:function(){return l},b$:function(){return d},Mn:function(){return g},xO:function(){return T},zd:function(){return S}});var r=n(655),i=function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},s=function(t){var e=[],n=0,r=0;while(n<t.length){var i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){s=t[n++];var o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<t.length;i+=3){var s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|u>>6,f=63&u;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<t.length;){var s=n[t.charAt(i++)],o=i<t.length,a=o?n[t.charAt(i)]:0;++i;var c=i<t.length,u=c?n[t.charAt(i)]:64;++i;var l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==s||null==a||null==u||null==h)throw Error();var d=s<<2|a>>4;if(r.push(d),64!==u){var f=a<<4&240|u>>2;if(r.push(f),64!==h){var p=u<<6&192|h;r.push(p)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},a=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var c=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return t.prototype.wrapCallback=function(t){var e=this;return function(n,r){n?e.reject(n):e.resolve(r),"function"===typeof t&&(e.promise.catch((function(){})),1===t.length?t(n):t(n,r))}},t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function l(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function h(){var t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function f(){return u().indexOf("Electron/")>=0}function p(){var t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return u().indexOf("MSAppHost/")>=0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var m="FirebaseError",y=function(t){function e(n,r,i){var s=t.call(this,r)||this;return s.code=n,s.customData=i,s.name=m,Object.setPrototypeOf(s,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,v.prototype.create),s}return(0,r.ZT)(e,t),e}(Error),v=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n}return t.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=e[0]||{},i=this.service+"/"+t,s=this.errors[t],o=s?w(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",c=new y(i,a,r);return c},t}();function w(t,e){return t.replace(_,(function(t,n){var r=e[n];return null!=r?String(r):"<"+n+"?>"}))}var _=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function E(t,e){if(t===e)return!0;for(var n=Object.keys(t),r=Object.keys(e),i=0,s=n;i<s.length;i++){var o=s[i];if(!r.includes(o))return!1;var a=t[o],c=e[o];if(I(a)&&I(c)){if(!E(a,c))return!1}else if(a!==c)return!1}for(var u=0,l=r;u<l.length;u++){o=l[u];if(!n.includes(o))return!1}return!0}function I(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t){for(var e=[],n=function(t,n){Array.isArray(n)?n.forEach((function(n){e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))})):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))},r=0,i=Object.entries(t);r<i.length;r++){var s=i[r],o=s[0],a=s[1];n(o,a)}return e.length?"&"+e.join("&"):""}function S(t){var e={},n=t.replace(/^\?/,"").split("&");return n.forEach((function(t){if(t){var n=t.split("="),r=n[0],i=n[1];e[decodeURIComponent(r)]=decodeURIComponent(i)}})),e}function k(t){var e=t.indexOf("?");if(!e)return"";var n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){function t(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}t.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},t.prototype.compress_=function(t,e){e||(e=0);var n=this.W_;if("string"===typeof t)for(var r=0;r<16;r++)n[r]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(r=0;r<16;r++)n[r]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var s,o,a=this.chain_[0],c=this.chain_[1],u=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(s=l^c&(u^l),o=1518500249):(s=c^u^l,o=1859775393):r<60?(s=c&u|l&(c|u),o=2400959708):(s=c^u^l,o=3395469782);i=(a<<5|a>>>27)+s+h+o+n[r]&4294967295;h=l,l=u,u=4294967295&(c<<30|c>>>2),c=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},t.prototype.update=function(t,e){if(null!=t){void 0===e&&(e=t.length);var n=e-this.blockSize,r=0,i=this.buf_,s=this.inbuf_;while(r<e){if(0===s)while(r<=n)this.compress_(t,r),r+=this.blockSize;if("string"===typeof t){while(r<e)if(i[s]=t.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else while(r<e)if(i[s]=t[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=e}},t.prototype.digest=function(){var t=[],e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&e,e/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)t[r]=this.chain_[n]>>i&255,++r;return t}})();function C(t,e){var n=new A(t,e);return n.subscribe.bind(n)}var A=function(){function t(t,e){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((function(){t(n)})).catch((function(t){n.error(t)}))}return t.prototype.next=function(t){this.forEachObserver((function(e){e.next(t)}))},t.prototype.error=function(t){this.forEachObserver((function(e){e.error(t)})),this.close(t)},t.prototype.complete=function(){this.forEachObserver((function(t){t.complete()})),this.close()},t.prototype.subscribe=function(t,e,n){var r,i=this;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=R(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=N),void 0===r.error&&(r.error=N),void 0===r.complete&&(r.complete=N);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(t){}})),this.observers.push(r),s},t.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var e=0;e<this.observers.length;e++)this.sendOne(e,t)},t.prototype.sendOne=function(t,e){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[t])try{e(n.observers[t])}catch(r){"undefined"!==typeof console&&console.error&&console.error(r)}}))},t.prototype.close=function(t){var e=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((function(){e.observers=void 0,e.onNoObservers=void 0})))},t}();function R(t,e){if("object"!==typeof t||null===t)return!1;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i in t&&"function"===typeof t[i])return!0}return!1}function N(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(t){return t&&t._delegate?t._delegate:t}},2262:function(t,e,n){n.d(e,{Bj:function(){return o},qq:function(){return b},Fl:function(){return Kt},X3:function(){return Ot},PG:function(){return Rt},$y:function(){return Nt},dq:function(){return Ut},Xl:function(){return Pt},Jd:function(){return S},WL:function(){return Ht},qj:function(){return St},iH:function(){return Ft},lk:function(){return C},Um:function(){return kt},XI:function(){return Vt},IU:function(){return Dt},j:function(){return A},X$:function(){return O},SU:function(){return Bt}});var r=n(3577);let i;const s=[];class o{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}else 0}on(){this.active&&(s.push(this),i=this)}off(){this.active&&(s.pop(),i=s[s.length-1])}stop(t){if(this.active){if(this.effects.forEach((t=>t.stop())),this.cleanups.forEach((t=>t())),this.scopes&&this.scopes.forEach((t=>t.stop(!0))),this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function a(t,e){e=e||i,e&&e.active&&e.effects.push(t)}const c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},u=t=>(t.w&g)>0,l=t=>(t.n&g)>0,h=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=g},d=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];u(i)&&!l(i)?i.delete(t):e[n++]=i,i.w&=~g,i.n&=~g}e.length=n}},f=new WeakMap;let p=0,g=1;const m=30,y=[];let v;const w=Symbol(""),_=Symbol("");class b{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!y.includes(this))try{return y.push(v=this),k(),g=1<<++p,p<=m?h(this):E(this),this.fn()}finally{p<=m&&d(this),g=1<<--p,C(),y.pop();const t=y.length;v=t>0?y[t-1]:void 0}}stop(){this.active&&(E(this),this.onStop&&this.onStop(),this.active=!1)}}function E(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let I=!0;const T=[];function S(){T.push(I),I=!1}function k(){T.push(I),I=!0}function C(){const t=T.pop();I=void 0===t||t}function A(t,e,n){if(!R())return;let r=f.get(t);r||f.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=c());const s=void 0;N(i,s)}function R(){return I&&void 0!==v}function N(t,e){let n=!1;p<=m?l(t)||(t.n|=g,n=!u(t)):n=!t.has(v),n&&(t.add(v),v.deps.push(t))}function O(t,e,n,i,s,o){const a=f.get(t);if(!a)return;let u=[];if("clear"===e)u=[...a.values()];else if("length"===n&&(0,r.kJ)(t))a.forEach(((t,e)=>{("length"===e||e>=i)&&u.push(t)}));else switch(void 0!==n&&u.push(a.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&u.push(a.get("length")):(u.push(a.get(w)),(0,r._N)(t)&&u.push(a.get(_)));break;case"delete":(0,r.kJ)(t)||(u.push(a.get(w)),(0,r._N)(t)&&u.push(a.get(_)));break;case"set":(0,r._N)(t)&&u.push(a.get(w));break}if(1===u.length)u[0]&&D(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);D(c(t))}}function D(t,e){for(const n of(0,r.kJ)(t)?t:[...t])(n!==v||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const P=(0,r.fY)("__proto__,__v_isRef,__isVue"),L=new Set(Object.getOwnPropertyNames(Symbol).map((t=>Symbol[t])).filter(r.yk)),x=j(),M=j(!1,!0),U=j(!0),F=V();function V(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=Dt(this);for(let e=0,i=this.length;e<i;e++)A(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Dt)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){S();const n=Dt(this)[e].apply(this,t);return C(),n}})),t}function j(t=!1,e=!1){return function(n,i,s){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_raw"===i&&s===(t?e?Et:bt:e?_t:wt).get(n))return n;const o=(0,r.kJ)(n);if(!t&&o&&(0,r.RI)(F,i))return Reflect.get(F,i,s);const a=Reflect.get(n,i,s);if((0,r.yk)(i)?L.has(i):P(i))return a;if(t||A(n,"get",i),e)return a;if(Ut(a)){const t=!o||!(0,r.S0)(i);return t?a.value:a}return(0,r.Kn)(a)?t?Ct(a):St(a):a}}const q=$(),B=$(!0);function $(t=!1){return function(e,n,i,s){let o=e[n];if(!t&&(i=Dt(i),o=Dt(o),!(0,r.kJ)(e)&&Ut(o)&&!Ut(i)))return o.value=i,!0;const a=(0,r.kJ)(e)&&(0,r.S0)(n)?Number(n)<e.length:(0,r.RI)(e,n),c=Reflect.set(e,n,i,s);return e===Dt(s)&&(a?(0,r.aU)(i,o)&&O(e,"set",n,i,o):O(e,"add",n,i)),c}}function H(t,e){const n=(0,r.RI)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&O(t,"delete",e,void 0,i),s}function z(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&L.has(e)||A(t,"has",e),n}function K(t){return A(t,"iterate",(0,r.kJ)(t)?"length":w),Reflect.ownKeys(t)}const G={get:x,set:q,deleteProperty:H,has:z,ownKeys:K},W={get:U,set(t,e){return!0},deleteProperty(t,e){return!0}},J=(0,r.l7)({},G,{get:M,set:B}),X=t=>(0,r.Kn)(t)?St(t):t,Y=t=>(0,r.Kn)(t)?Ct(t):t,Q=t=>t,Z=t=>Reflect.getPrototypeOf(t);function tt(t,e,n=!1,r=!1){t=t["__v_raw"];const i=Dt(t),s=Dt(e);e!==s&&!n&&A(i,"get",e),!n&&A(i,"get",s);const{has:o}=Z(i),a=r?Q:n?Y:X;return o.call(i,e)?a(t.get(e)):o.call(i,s)?a(t.get(s)):void(t!==i&&t.get(e))}function et(t,e=!1){const n=this["__v_raw"],r=Dt(n),i=Dt(t);return t!==i&&!e&&A(r,"has",t),!e&&A(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function nt(t,e=!1){return t=t["__v_raw"],!e&&A(Dt(t),"iterate",w),Reflect.get(t,"size",t)}function rt(t){t=Dt(t);const e=Dt(this),n=Z(e),r=n.has.call(e,t);return r||(e.add(t),O(e,"add",t,t)),this}function it(t,e){e=Dt(e);const n=Dt(this),{has:i,get:s}=Z(n);let o=i.call(n,t);o||(t=Dt(t),o=i.call(n,t));const a=s.call(n,t);return n.set(t,e),o?(0,r.aU)(e,a)&&O(n,"set",t,e,a):O(n,"add",t,e),this}function st(t){const e=Dt(this),{has:n,get:r}=Z(e);let i=n.call(e,t);i||(t=Dt(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&O(e,"delete",t,void 0,s),o}function ot(){const t=Dt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&O(t,"clear",void 0,void 0,n),r}function at(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=Dt(s),a=e?Q:t?Y:X;return!t&&A(o,"iterate",w),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}}function ct(t,e,n){return function(...i){const s=this["__v_raw"],o=Dt(s),a=(0,r._N)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?Q:e?Y:X;return!e&&A(o,"iterate",u?_:w),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return"delete"!==t&&this}}function lt(){const t={get(t){return tt(this,t)},get size(){return nt(this)},has:et,add:rt,set:it,delete:st,clear:ot,forEach:at(!1,!1)},e={get(t){return tt(this,t,!1,!0)},get size(){return nt(this)},has:et,add:rt,set:it,delete:st,clear:ot,forEach:at(!1,!0)},n={get(t){return tt(this,t,!0)},get size(){return nt(this,!0)},has(t){return et.call(this,t,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:at(!0,!1)},r={get(t){return tt(this,t,!0,!0)},get size(){return nt(this,!0)},has(t){return et.call(this,t,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:at(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{t[i]=ct(i,!1,!1),n[i]=ct(i,!0,!1),e[i]=ct(i,!1,!0),r[i]=ct(i,!0,!0)})),[t,n,e,r]}const[ht,dt,ft,pt]=lt();function gt(t,e){const n=e?t?pt:ft:t?dt:ht;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.RI)(n,i)&&i in e?n:e,i,s)}const mt={get:gt(!1,!1)},yt={get:gt(!1,!0)},vt={get:gt(!0,!1)};const wt=new WeakMap,_t=new WeakMap,bt=new WeakMap,Et=new WeakMap;function It(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:It((0,r.W7)(t))}function St(t){return t&&t["__v_isReadonly"]?t:At(t,!1,G,mt,wt)}function kt(t){return At(t,!1,J,yt,_t)}function Ct(t){return At(t,!0,W,vt,bt)}function At(t,e,n,i,s){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=Tt(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return s.set(t,c),c}function Rt(t){return Nt(t)?Rt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Nt(t){return!(!t||!t["__v_isReadonly"])}function Ot(t){return Rt(t)||Nt(t)}function Dt(t){const e=t&&t["__v_raw"];return e?Dt(e):t}function Pt(t){return(0,r.Nj)(t,"__v_skip",!0),t}function Lt(t){R()&&(t=Dt(t),t.dep||(t.dep=c()),N(t.dep))}function xt(t,e){t=Dt(t),t.dep&&D(t.dep)}const Mt=t=>(0,r.Kn)(t)?St(t):t;function Ut(t){return Boolean(t&&!0===t.__v_isRef)}function Ft(t){return qt(t,!1)}function Vt(t){return qt(t,!0)}class jt{constructor(t,e){this._shallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Dt(t),this._value=e?t:Mt(t)}get value(){return Lt(this),this._value}set value(t){t=this._shallow?t:Dt(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:Mt(t),xt(this,t))}}function qt(t,e){return Ut(t)?t:new jt(t,e)}function Bt(t){return Ut(t)?t.value:t}const $t={get:(t,e,n)=>Bt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ut(i)&&!Ut(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Ht(t){return Rt(t)?t:new Proxy(t,$t)}class zt{constructor(t,e,n){this._setter=e,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new b(t,(()=>{this._dirty||(this._dirty=!0,xt(this))})),this["__v_isReadonly"]=n}get value(){const t=Dt(this);return Lt(t),t._dirty&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Kt(t,e){let n,i;(0,r.mf)(t)?(n=t,i=r.dG):(n=t.get,i=t.set);const s=new zt(n,i,(0,r.mf)(t)||!t.set);return s}Promise.resolve()},6252:function(t,e,n){n.d(e,{Fl:function(){return r.Fl},PG:function(){return r.PG},$y:function(){return r.$y},dq:function(){return r.dq},qj:function(){return r.qj},iH:function(){return r.iH},SU:function(){return r.SU},P$:function(){return C},HY:function(){return Yt},$d:function(){return tn},j4:function(){return ue},kq:function(){return Ee},iD:function(){return ce},_:function(){return ge},Us:function(){return Vt},uE:function(){return be},Uk:function(){return _e},Wm:function(){return me},aZ:function(){return L},FN:function(){return Ue},Q6:function(){return P},h:function(){return xn},f3:function(){return I},Y3:function(){return yn},wF:function(){return K},Jd:function(){return X},ic:function(){return J},wg:function(){return re},Cn:function(){return d},JJ:function(){return E},dD:function(){return h},Ko:function(){return Ce},WI:function(){return Ae},up:function(){return Gt},U2:function(){return R},nK:function(){return D},Y8:function(){return T},YP:function(){return Nn},w5:function(){return f},wy:function(){return Dt}});var r=n(2262),i=n(3577);new Set;new Map;Object.create(null),Object.create(null);function s(t,e,...n){const r=t.vnode.props||i.kT;let s=n;const o=e.startsWith("update:"),a=o&&e.slice(7);if(a&&a in r){const t=`${"modelValue"===a?"model":a}Modifiers`,{number:e,trim:o}=r[t]||i.kT;o?s=n.map((t=>t.trim())):e&&(s=n.map(i.He))}let c;let u=r[c=(0,i.hR)(e)]||r[c=(0,i.hR)((0,i._A)(e))];!u&&o&&(u=r[c=(0,i.hR)((0,i.rs)(e))]),u&&tn(u,t,6,s);const l=r[c+"Once"];if(l){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,tn(l,t,6,s)}}function o(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(void 0!==s)return s;const a=t.emits;let c={},u=!1;if(!(0,i.mf)(t)){const r=t=>{const n=o(t,e,!0);n&&(u=!0,(0,i.l7)(c,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return a||u?((0,i.kJ)(a)?a.forEach((t=>c[t]=null)):(0,i.l7)(c,a),r.set(t,c),c):(r.set(t,null),null)}function a(t,e){return!(!t||!(0,i.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,i.RI)(t,(0,i.rs)(e))||(0,i.RI)(t,e))}let c=null,u=null;function l(t){const e=c;return c=t,u=t&&t.type.__scopeId||null,e}function h(t){u=t}function d(){u=null}function f(t,e=c,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&oe(-1);const i=l(e),s=t(...n);return l(i),r._d&&oe(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function p(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[a],slots:c,attrs:u,emit:h,render:d,renderCache:f,data:p,setupState:y,ctx:v,inheritAttrs:w}=t;let _;const b=l(t);try{let t;if(4&n.shapeFlag){const e=s||r;_=Ie(d.call(e,e,f,o,y,p,v)),t=u}else{const n=e;0,_=Ie(n.length>1?n(o,{attrs:u,slots:c,emit:h}):n(o,null)),t=e.props?u:g(u)}let l=_;if(t&&!1!==w){const e=Object.keys(t),{shapeFlag:n}=l;e.length&&7&n&&(a&&e.some(i.tR)&&(t=m(t,a)),l=we(l,t))}0,n.dirs&&(l.dirs=l.dirs?l.dirs.concat(n.dirs):n.dirs),n.transition&&(l.transition=n.transition),_=l}catch(E){ee.length=0,en(E,t,1),_=me(Zt)}return l(b),_}const g=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.F7)(n))&&((e||(e={}))[n]=t[n]);return e},m=(t,e)=>{const n={};for(const r in t)(0,i.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function y(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:c,patchFlag:u}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&u>=0))return!(!i&&!c||c&&c.$stable)||r!==o&&(r?!o||v(r,o,l):!!o);if(1024&u)return!0;if(16&u)return r?v(r,o,l):!!o;if(8&u){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!a(l,n))return!0}}return!1}function v(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!a(n,s))return!0}return!1}function w({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const _=t=>t.__isSuspense;function b(t,e){e&&e.pendingBranch?(0,i.kJ)(t)?e.effects.push(...t):e.effects.push(t):Tn(t)}function E(t,e){if(Me){let n=Me.provides;const r=Me.parent&&Me.parent.provides;r===n&&(n=Me.provides=Object.create(r)),n[t]=e}else 0}function I(t,e,n=!1){const r=Me||c;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.mf)(e)?e.call(r.proxy):e}else 0}function T(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return G((()=>{t.isMounted=!0})),X((()=>{t.isUnmounting=!0})),t}const S=[Function,Array],k={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:S,onEnter:S,onAfterEnter:S,onEnterCancelled:S,onBeforeLeave:S,onLeave:S,onAfterLeave:S,onLeaveCancelled:S,onBeforeAppear:S,onAppear:S,onAfterAppear:S,onAppearCancelled:S},setup(t,{slots:e}){const n=Ue(),i=T();let s;return()=>{const o=e.default&&P(e.default(),!0);if(!o||!o.length)return;const a=(0,r.IU)(t),{mode:c}=a;const u=o[0];if(i.isLeaving)return N(u);const l=O(u);if(!l)return N(u);const h=R(l,a,i,n);D(l,h);const d=n.subTree,f=d&&O(d);let p=!1;const{getTransitionKey:g}=l.type;if(g){const t=g();void 0===s?s=t:t!==s&&(s=t,p=!0)}if(f&&f.type!==Zt&&(!he(l,f)||p)){const t=R(f,a,i,n);if(D(f,t),"out-in"===c)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,n.update()},N(u);"in-out"===c&&l.type!==Zt&&(t.delayLeave=(t,e,n)=>{const r=A(i,f);r[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return u}}},C=k;function A(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function R(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:y,onAppearCancelled:v}=e,w=String(t.key),_=A(n,t),b=(t,e)=>{t&&tn(t,r,9,e)},E={mode:s,persisted:o,beforeEnter(e){let r=a;if(!n.isMounted){if(!i)return;r=g||a}e._leaveCb&&e._leaveCb(!0);const s=_[w];s&&he(t,s)&&s.el._leaveCb&&s.el._leaveCb(),b(r,[e])},enter(t){let e=c,r=u,s=l;if(!n.isMounted){if(!i)return;e=m||c,r=y||u,s=v||l}let o=!1;const a=t._enterCb=e=>{o||(o=!0,b(e?s:r,[t]),E.delayedLeave&&E.delayedLeave(),t._enterCb=void 0)};e?(e(t,a),e.length<=1&&a()):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();b(h,[e]);let s=!1;const o=e._leaveCb=n=>{s||(s=!0,r(),b(n?p:f,[e]),e._leaveCb=void 0,_[i]===t&&delete _[i])};_[i]=t,d?(d(e,o),d.length<=1&&o()):o()},clone(t){return R(t,e,n,r)}};return E}function N(t){if(M(t))return t=we(t),t.children=null,t}function O(t){return M(t)?t.children?t.children[0]:void 0:t}function D(t,e){6&t.shapeFlag&&t.component?D(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function P(t,e=!1){let n=[],r=0;for(let i=0;i<t.length;i++){const s=t[i];s.type===Yt?(128&s.patchFlag&&r++,n=n.concat(P(s.children,e))):(e||s.type!==Zt)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function L(t){return(0,i.mf)(t)?{setup:t,name:t.name}:t}const x=t=>!!t.type.__asyncLoader;const M=t=>t.type.__isKeepAlive;RegExp,RegExp;function U(t,e){return(0,i.kJ)(t)?t.some((t=>U(t,e))):(0,i.HD)(t)?t.split(",").indexOf(e)>-1:!!t.test&&t.test(e)}function F(t,e){j(t,"a",e)}function V(t,e){j(t,"da",e)}function j(t,e,n=Me){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}t()});if(H(e,r,n),n){let t=n.parent;while(t&&t.parent)M(t.parent.vnode)&&q(r,e,n,t),t=t.parent}}function q(t,e,n,r){const s=H(e,t,r,!0);Y((()=>{(0,i.Od)(r[e],s)}),n)}function B(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function $(t){return 128&t.shapeFlag?t.ssContent:t}function H(t,e,n=Me,i=!1){if(n){const s=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),Fe(n);const s=tn(e,n,t,i);return Ve(),(0,r.lk)(),s});return i?s.unshift(o):s.push(o),o}}const z=t=>(e,n=Me)=>(!$e||"sp"===t)&&H(t,e,n),K=z("bm"),G=z("m"),W=z("bu"),J=z("u"),X=z("bum"),Y=z("um"),Q=z("sp"),Z=z("rtg"),tt=z("rtc");function et(t,e=Me){H("ec",t,e)}let nt=!0;function rt(t){const e=at(t),n=t.proxy,s=t.ctx;nt=!1,e.beforeCreate&&st(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:_,destroyed:b,unmounted:I,render:T,renderTracked:S,renderTriggered:k,errorCaptured:C,serverPrefetch:A,expose:R,inheritAttrs:N,components:O,directives:D,filters:P}=e,L=null;if(h&&it(h,s,L,t.appContext.config.unwrapInjectedRef),c)for(const r in c){const t=c[r];(0,i.mf)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Kn)(e)&&(t.data=(0,r.qj)(e))}if(nt=!0,a)for(const E in a){const t=a[E],e=(0,i.mf)(t)?t.bind(n,n):(0,i.mf)(t.get)?t.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(t)&&(0,i.mf)(t.set)?t.set.bind(n):i.dG,c=(0,r.Fl)({get:e,set:o});Object.defineProperty(s,E,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)ot(u[r],s,n,r);if(l){const t=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{E(e,t[e])}))}function x(t,e){(0,i.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(d&&st(d,t,"c"),x(K,f),x(G,p),x(W,g),x(J,m),x(F,y),x(V,v),x(et,C),x(tt,S),x(Z,k),x(X,_),x(Y,I),x(Q,A),(0,i.kJ)(R))if(R.length){const e=t.exposed||(t.exposed={});R.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===i.dG&&(t.render=T),null!=N&&(t.inheritAttrs=N),O&&(t.components=O),D&&(t.directives=D)}function it(t,e,n=i.dG,s=!1){(0,i.kJ)(t)&&(t=dt(t));for(const o in t){const n=t[o];let a;a=(0,i.Kn)(n)?"default"in n?I(n.from||o,n.default,!0):I(n.from||o):I(n),(0,r.dq)(a)&&s?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[o]=a}}function st(t,e,n){tn((0,i.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function ot(t,e,n,r){const s=r.includes(".")?Pn(n,r):()=>n[r];if((0,i.HD)(t)){const n=e[t];(0,i.mf)(n)&&Nn(s,n)}else if((0,i.mf)(t))Nn(s,t.bind(n));else if((0,i.Kn)(t))if((0,i.kJ)(t))t.forEach((t=>ot(t,e,n,r)));else{const r=(0,i.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.mf)(r)&&Nn(s,r,t)}else 0}function at(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((t=>ct(c,t,o,!0))),ct(c,e,o)):c=e,s.set(e,c),c}function ct(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&ct(t,s,n,!0),i&&i.forEach((e=>ct(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=ut[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const ut={data:lt,props:pt,emits:pt,methods:pt,computed:pt,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:pt,directives:pt,watch:gt,provide:lt,inject:ht};function lt(t,e){return e?t?function(){return(0,i.l7)((0,i.mf)(t)?t.call(this,this):t,(0,i.mf)(e)?e.call(this,this):e)}:e:t}function ht(t,e){return pt(dt(t),dt(e))}function dt(t){if((0,i.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ft(t,e){return t?[...new Set([].concat(t,e))]:e}function pt(t,e){return t?(0,i.l7)((0,i.l7)(Object.create(null),t),e):e}function gt(t,e){if(!t)return e;if(!e)return t;const n=(0,i.l7)(Object.create(null),t);for(const r in e)n[r]=ft(t[r],e[r]);return n}function mt(t,e,n,s=!1){const o={},a={};(0,i.Nj)(a,de,1),t.propsDefaults=Object.create(null),vt(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=s?o:(0,r.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function yt(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.IU)(o),[l]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;vt(t,e,o,a)&&(h=!0);for(const s in u)e&&((0,i.RI)(e,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=wt(l,u,s,void 0,t,!0)):delete o[s]);if(a!==u)for(const t in a)e&&(0,i.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];const c=e[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,i._A)(s);o[e]=wt(l,u,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function vt(t,e,n,s){const[o,c]=t.propsOptions;let u,l=!1;if(e)for(let r in e){if((0,i.Gg)(r))continue;const h=e[r];let d;o&&(0,i.RI)(o,d=(0,i._A)(r))?c&&c.includes(d)?(u||(u={}))[d]=h:n[d]=h:a(t.emitsOptions,r)||h!==s[r]&&(s[r]=h,l=!0)}if(c){const e=(0,r.IU)(n),s=u||i.kT;for(let r=0;r<c.length;r++){const a=c[r];n[a]=wt(o,e,a,s[a],t,!(0,i.RI)(s,a))}}return l}function wt(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&(0,i.mf)(t)){const{propsDefaults:i}=s;n in i?r=i[n]:(Fe(s),r=i[n]=t.call(null,e),Ve())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function _t(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!(0,i.mf)(t)){const r=t=>{u=!0;const[n,r]=_t(t,e,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return r.set(t,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,i._A)(o[h]);bt(t)&&(a[t]=i.kT)}else if(o){0;for(const t in o){const e=(0,i._A)(t);if(bt(e)){const n=o[t],r=a[e]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const t=Tt(Boolean,r.type),n=Tt(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,i.RI)(r,"default"))&&c.push(e)}}}}const l=[a,c];return r.set(t,l),l}function bt(t){return"$"!==t[0]}function Et(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function It(t,e){return Et(t)===Et(e)}function Tt(t,e){return(0,i.kJ)(e)?e.findIndex((e=>It(e,t))):(0,i.mf)(e)&&It(e,t)?0:-1}const St=t=>"_"===t[0]||"$stable"===t,kt=t=>(0,i.kJ)(t)?t.map(Ie):[Ie(t)],Ct=(t,e,n)=>{const r=f(((...t)=>kt(e(...t))),n);return r._c=!1,r},At=(t,e,n)=>{const r=t._ctx;for(const s in t){if(St(s))continue;const n=t[s];if((0,i.mf)(n))e[s]=Ct(s,n,r);else if(null!=n){0;const t=kt(n);e[s]=()=>t}}},Rt=(t,e)=>{const n=kt(e);t.slots.default=()=>n},Nt=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,i.Nj)(e,"_",n)):At(e,t.slots={})}else t.slots={},e&&Rt(t,e);(0,i.Nj)(t.slots,de,1)},Ot=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,i.l7)(s,e),n||1!==t||delete s._):(o=!e.$stable,At(e,s)),a=e}else e&&(Rt(t,e),a={default:1});if(o)for(const i in s)St(i)||i in a||delete s[i]};function Dt(t,e){const n=c;if(null===n)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=i.kT]=e[o];(0,i.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&Ln(n),s.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function Pt(t,e,n,i){const s=t.dirs,o=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];o&&(c.oldValue=o[a].value);let u=c.dir[i];u&&((0,r.Jd)(),tn(u,n,8,[t.el,c,t,e]),(0,r.lk)())}}function Lt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xt=0;function Mt(t,e){return function(n,r=null){null==r||(0,i.Kn)(r)||(r=null);const s=Lt(),o=new Set;let a=!1;const c=s.app={_uid:xt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Mn,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,i.mf)(t.install)?(o.add(t),t.install(c,...e)):(0,i.mf)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(i,o,u){if(!a){const l=me(n,r);return l.appContext=s,o&&e?e(l,i):t(l,i,u),a=!0,c._container=i,i.__vue_app__=c,l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c}};return c}}function Ut(){}const Ft=b;function Vt(t){return jt(t)}function jt(t,e){Ut();const{insert:n,remove:s,patchProp:o,createElement:a,createText:c,createComment:u,setText:l,setElementText:h,parentNode:d,nextSibling:f,setScopeId:g=i.dG,cloneNode:m,insertStaticContent:v}=t,_=(t,e,n,r=null,i=null,s=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!he(t,e)&&(r=X(t),z(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Qt:b(t,e,n,r);break;case Zt:E(t,e,n,r);break;case te:null==t&&I(e,n,r,o);break;case Yt:P(t,e,n,r,i,s,o,a,c);break;default:1&h?k(t,e,n,r,i,s,o,a,c):6&h?L(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,Q)}null!=l&&i&&qt(l,t&&t.ref,s,e||t,!e)},b=(t,e,r,i)=>{if(null==t)n(e.el=c(e.children),r,i);else{const n=e.el=t.el;e.children!==t.children&&l(n,e.children)}},E=(t,e,r,i)=>{null==t?n(e.el=u(e.children||""),r,i):e.el=t.el},I=(t,e,n,r)=>{[t.el,t.anchor]=v(t.children,e,n,r)},T=({el:t,anchor:e},r,i)=>{let s;while(t&&t!==e)s=f(t),n(t,r,i),t=s;n(e,r,i)},S=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=f(t),s(t),t=n;s(e)},k=(t,e,n,r,i,s,o,a,c)=>{o=o||"svg"===e.type,null==t?C(e,n,r,i,s,o,a,c):N(t,e,i,s,o,a,c)},C=(t,e,r,s,c,u,l,d)=>{let f,p;const{type:g,props:y,shapeFlag:v,transition:w,patchFlag:_,dirs:b}=t;if(t.el&&void 0!==m&&-1===_)f=t.el=m(t.el);else{if(f=t.el=a(t.type,u,y&&y.is,y),8&v?h(f,t.children):16&v&&R(t.children,f,null,s,c,u&&"foreignObject"!==g,l,d),b&&Pt(t,null,s,"created"),y){for(const e in y)"value"===e||(0,i.Gg)(e)||o(f,e,null,y[e],u,t.children,s,c,J);"value"in y&&o(f,"value",null,y.value),(p=y.onVnodeBeforeMount)&&Bt(p,s,t)}A(f,t,t.scopeId,l,s)}b&&Pt(t,null,s,"beforeMount");const E=(!c||c&&!c.pendingBranch)&&w&&!w.persisted;E&&w.beforeEnter(f),n(f,e,r),((p=y&&y.onVnodeMounted)||E||b)&&Ft((()=>{p&&Bt(p,s,t),E&&w.enter(f),b&&Pt(t,null,s,"mounted")}),c)},A=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let s=0;s<r.length;s++)g(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;A(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},R=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?Te(t[u]):Ie(t[u]);_(null,c,e,n,r,i,s,o,a)}},N=(t,e,n,r,s,a,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:d,dirs:f}=e;l|=16&t.patchFlag;const p=t.props||i.kT,g=e.props||i.kT;let m;(m=g.onVnodeBeforeUpdate)&&Bt(m,n,e,t),f&&Pt(e,t,n,"beforeUpdate");const y=s&&"foreignObject"!==e.type;if(d?O(t.dynamicChildren,d,u,n,r,y,a):c||q(t,e,u,null,n,r,y,a,!1),l>0){if(16&l)D(u,e,p,g,n,r,s);else if(2&l&&p.class!==g.class&&o(u,"class",null,g.class,s),4&l&&o(u,"style",p.style,g.style,s),8&l){const i=e.dynamicProps;for(let e=0;e<i.length;e++){const a=i[e],c=p[a],l=g[a];l===c&&"value"!==a||o(u,a,c,l,s,t.children,n,r,J)}}1&l&&t.children!==e.children&&h(u,e.children)}else c||null!=d||D(u,e,p,g,n,r,s);((m=g.onVnodeUpdated)||f)&&Ft((()=>{m&&Bt(m,n,e,t),f&&Pt(e,t,n,"updated")}),r)},O=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Yt||!he(c,u)||70&c.shapeFlag)?d(c.el):n;_(c,u,l,null,r,i,s,o,!0)}},D=(t,e,n,r,s,a,c)=>{if(n!==r){for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&o(t,u,h,l,c,e.children,s,a,J)}if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||o(t,u,n[u],null,c,e.children,s,a,J);"value"in r&&o(t,"value",n.value,r.value)}},P=(t,e,r,i,s,o,a,u,l)=>{const h=e.el=t?t.el:c(""),d=e.anchor=t?t.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=e;g&&(u=u?u.concat(g):g),null==t?(n(h,r,i),n(d,r,i),R(e.children,r,d,s,o,a,u,l)):f>0&&64&f&&p&&t.dynamicChildren?(O(t.dynamicChildren,p,r,s,o,a,u),(null!=e.key||s&&e===s.subTree)&&$t(t,e,!0)):q(t,e,r,d,s,o,a,u,l)},L=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):U(e,n,r,i,s,o,c):F(t,e,c)},U=(t,e,n,r,i,s,o)=>{const a=t.component=xe(t,r,i);if(M(t)&&(a.ctx.renderer=Q),He(a),a.asyncDep){if(i&&i.registerDep(a,V),!t.el){const t=a.subTree=me(Zt);E(null,t,e,n)}}else V(a,t,e,n,i,s,o)},F=(t,e,n)=>{const r=e.component=t.component;if(y(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,e,n);r.next=e,bn(r.update),r.update()}else e.component=t.component,e.el=t.el,r.vnode=e},V=(t,e,n,s,o,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:r,u:s,parent:u,vnode:h}=t,f=n;0,l.allowRecurse=!1,n?(n.el=h.el,j(t,n,c)):n=h,r&&(0,i.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&Bt(e,u,n,h),l.allowRecurse=!0;const g=p(t);0;const m=t.subTree;t.subTree=g,_(m,g,d(m.el),X(m),t,o,a),n.el=g.el,null===f&&w(t,g.el),s&&Ft(s,o),(e=n.props&&n.props.onVnodeUpdated)&&Ft((()=>Bt(e,u,n,h)),o)}else{let r;const{el:c,props:u}=e,{bm:h,m:d,parent:f}=t,g=x(e);if(l.allowRecurse=!1,h&&(0,i.ir)(h),!g&&(r=u&&u.onVnodeBeforeMount)&&Bt(r,f,e),l.allowRecurse=!0,c&&tt){const n=()=>{t.subTree=p(t),tt(c,t.subTree,t,o,null)};g?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=p(t);0,_(null,r,n,s,t,o,a),e.el=r.el}if(d&&Ft(d,o),!g&&(r=u&&u.onVnodeMounted)){const t=e;Ft((()=>Bt(r,f,t)),o)}256&e.shapeFlag&&t.a&&Ft(t.a,o),t.isMounted=!0,e=n=s=null}},l=new r.qq(u,(()=>wn(t.update)),t.scope),h=t.update=l.run.bind(l);h.id=t.uid,l.allowRecurse=h.allowRecurse=!0,h()},j=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,yt(t,e.props,i,n),Ot(t,e.children,n),(0,r.Jd)(),Sn(void 0,t.update),(0,r.lk)()},q=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,d=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void $(u,d,n,r,i,s,o,a,c);if(256&f)return void B(u,d,n,r,i,s,o,a,c)}8&p?(16&l&&J(u,i,s),d!==u&&h(n,d)):16&l?16&p?$(u,d,n,r,i,s,o,a,c):J(u,i,s,!0):(8&l&&h(n,""),16&p&&R(d,n,r,i,s,o,a,c))},B=(t,e,n,r,s,o,a,c,u)=>{t=t||i.Z6,e=e||i.Z6;const l=t.length,h=e.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=e[f]=u?Te(e[f]):Ie(e[f]);_(t[f],r,n,null,s,o,a,c,u)}l>h?J(t,s,o,!0,!1,d):R(e,n,r,s,o,a,c,u,d)},$=(t,e,n,r,s,o,a,c,u)=>{let l=0;const h=e.length;let d=t.length-1,f=h-1;while(l<=d&&l<=f){const r=t[l],i=e[l]=u?Te(e[l]):Ie(e[l]);if(!he(r,i))break;_(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=t[d],i=e[f]=u?Te(e[f]):Ie(e[f]);if(!he(r,i))break;_(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const t=f+1,i=t<h?e[t].el:r;while(l<=f)_(null,e[l]=u?Te(e[l]):Ie(e[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)z(t[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const t=e[l]=u?Te(e[l]):Ie(e[l]);null!=t.key&&m.set(t.key,l)}let y,v=0;const w=f-g+1;let b=!1,E=0;const I=new Array(w);for(l=0;l<w;l++)I[l]=0;for(l=p;l<=d;l++){const r=t[l];if(v>=w){z(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=f;y++)if(0===I[y-g]&&he(r,e[y])){i=y;break}void 0===i?z(r,s,o,!0):(I[i-g]=l+1,i>=E?E=i:b=!0,_(r,e[i],n,null,s,o,a,c,u),v++)}const T=b?Ht(I):i.Z6;for(y=T.length-1,l=w-1;l>=0;l--){const t=g+l,i=e[t],d=t+1<h?e[t+1].el:r;0===I[l]?_(null,i,n,d,s,o,a,c,u):b&&(y<0||l!==T[y]?H(i,n,d,2):y--)}}},H=(t,e,r,i,s=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void H(t.component.subTree,e,r,i);if(128&l)return void t.suspense.move(e,r,i);if(64&l)return void a.move(t,e,r,Q);if(a===Yt){n(o,e,r);for(let t=0;t<u.length;t++)H(u[t],e,r,i);return void n(t.anchor,e,r)}if(a===te)return void T(t,e,r);const h=2!==i&&1&l&&c;if(h)if(0===i)c.beforeEnter(o),n(o,e,r),Ft((()=>c.enter(o)),s);else{const{leave:t,delayLeave:i,afterLeave:s}=c,a=()=>n(o,e,r),u=()=>{t(o,(()=>{a(),s&&s()}))};i?i(o,a,u):u()}else n(o,e,r)},z=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=t;if(null!=a&&qt(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const f=1&l&&d,p=!x(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&Bt(g,e,t),6&l)W(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);f&&Pt(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,Q,r):u&&(s!==Yt||h>0&&64&h)?J(u,e,n,!1,!0):(s===Yt&&384&h||!i&&16&l)&&J(c,e,n),r&&K(t)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&Ft((()=>{g&&Bt(g,e,t),f&&Pt(t,null,e,"unmounted")}),n)},K=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Yt)return void G(n,r);if(e===te)return void S(t);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,s=()=>e(n,o);r?r(t.el,o,s):s()}else o()},G=(t,e)=>{let n;while(t!==e)n=f(t),s(t),t=n;s(e)},W=(t,e,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=t;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,z(a,t,e,n)),c&&Ft(c,e),Ft((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},J=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)z(t[o],e,n,r,i)},X=t=>6&t.shapeFlag?X(t.component.subTree):128&t.shapeFlag?t.suspense.next():f(t.anchor||t.el),Y=(t,e,n)=>{null==t?e._vnode&&z(e._vnode,null,null,!0):_(e._vnode||null,t,e,null,null,null,n),kn(),e._vnode=t},Q={p:_,um:z,m:H,r:K,mt:U,mc:R,pc:q,pbc:O,n:X,o:t};let Z,tt;return e&&([Z,tt]=e(Q)),{render:Y,hydrate:Z,createApp:Mt(Y,Z)}}function qt(t,e,n,s,o=!1){if((0,i.kJ)(t))return void t.forEach(((t,r)=>qt(t,e&&((0,i.kJ)(e)?e[r]:e),n,s,o)));if(x(s)&&!o)return;const a=4&s.shapeFlag?Xe(s.component)||s.component.proxy:s.el,c=o?null:a,{i:u,r:l}=t;const h=e&&e.r,d=u.refs===i.kT?u.refs={}:u.refs,f=u.setupState;if(null!=h&&h!==l&&((0,i.HD)(h)?(d[h]=null,(0,i.RI)(f,h)&&(f[h]=null)):(0,r.dq)(h)&&(h.value=null)),(0,i.HD)(l)){const t=()=>{d[l]=c,(0,i.RI)(f,l)&&(f[l]=c)};c?(t.id=-1,Ft(t,n)):t()}else if((0,r.dq)(l)){const t=()=>{l.value=c};c?(t.id=-1,Ft(t,n)):t()}else(0,i.mf)(l)&&Ze(l,u,12,[c,d])}function Bt(t,e,n,r=null){tn(t,e,7,[n,r])}function $t(t,e,n=!1){const r=t.children,s=e.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=Te(s[i]),e.el=t.el),n||$t(t,e))}}function Ht(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}const zt=t=>t.__isTeleport;const Kt="components";function Gt(t,e){return Jt(Kt,t,!0,e)||t}const Wt=Symbol();function Jt(t,e,n=!0,r=!1){const s=c||Me;if(s){const n=s.type;if(t===Kt){const t=Ye(n);if(t&&(t===e||t===(0,i._A)(e)||t===(0,i.kC)((0,i._A)(e))))return n}const o=Xt(s[t]||n[t],e)||Xt(s.appContext[t],e);return!o&&r?n:o}}function Xt(t,e){return t&&(t[e]||t[(0,i._A)(e)]||t[(0,i.kC)((0,i._A)(e))])}const Yt=Symbol(void 0),Qt=Symbol(void 0),Zt=Symbol(void 0),te=Symbol(void 0),ee=[];let ne=null;function re(t=!1){ee.push(ne=t?null:[])}function ie(){ee.pop(),ne=ee[ee.length-1]||null}let se=1;function oe(t){se+=t}function ae(t){return t.dynamicChildren=se>0?ne||i.Z6:null,ie(),se>0&&ne&&ne.push(t),t}function ce(t,e,n,r,i,s){return ae(ge(t,e,n,r,i,s,!0))}function ue(t,e,n,r,i){return ae(me(t,e,n,r,i,!0))}function le(t){return!!t&&!0===t.__v_isVNode}function he(t,e){return t.type===e.type&&t.key===e.key}const de="__vInternal",fe=({key:t})=>null!=t?t:null,pe=({ref:t})=>null!=t?(0,i.HD)(t)||(0,r.dq)(t)||(0,i.mf)(t)?{i:c,r:t}:t:null;function ge(t,e=null,n=null,r=0,s=null,o=(t===Yt?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fe(e),ref:e&&pe(e),scopeId:u,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(Se(l,n),128&o&&t.normalize(l)):n&&(l.shapeFlag|=(0,i.HD)(n)?8:16),se>0&&!a&&ne&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&ne.push(l),l}const me=ye;function ye(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==Wt||(t=Zt),le(t)){const r=we(t,e,!0);return n&&Se(r,n),r}if(Qe(t)&&(t=t.__vccOpts),e){e=ve(e);let{class:t,style:n}=e;t&&!(0,i.HD)(t)&&(e.class=(0,i.C_)(t)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),e.style=(0,i.j5)(n))}const c=(0,i.HD)(t)?1:_(t)?128:zt(t)?64:(0,i.Kn)(t)?4:(0,i.mf)(t)?2:0;return ge(t,e,n,s,o,c,a,!0)}function ve(t){return t?(0,r.X3)(t)||de in t?(0,i.l7)({},t):t:null}function we(t,e,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=t,c=e?ke(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&fe(c),ref:e&&e.ref?n&&s?(0,i.kJ)(s)?s.concat(pe(e)):[s,pe(e)]:pe(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Yt?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&we(t.ssContent),ssFallback:t.ssFallback&&we(t.ssFallback),el:t.el,anchor:t.anchor};return u}function _e(t=" ",e=0){return me(Qt,null,t,e)}function be(t,e){const n=me(te,null,t);return n.staticCount=e,n}function Ee(t="",e=!1){return e?(re(),ue(Zt,null,t)):me(Zt,null,t)}function Ie(t){return null==t||"boolean"===typeof t?me(Zt):(0,i.kJ)(t)?me(Yt,null,t.slice()):"object"===typeof t?Te(t):me(Qt,null,String(t))}function Te(t){return null===t.el||t.memo?t:we(t)}function Se(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),Se(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||de in e?3===r&&c&&(1===c.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=c}}else(0,i.mf)(e)?(e={default:e,_ctx:c},n=32):(e=String(e),64&r?(n=16,e=[_e(e)]):n=8);t.children=e,t.shapeFlag|=n}function ke(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C_)([e.class,r.class]));else if("style"===t)e.style=(0,i.j5)([e.style,r.style]);else if((0,i.F7)(t)){const n=e[t],i=r[t];n!==i&&(e[t]=n?[].concat(n,i):i)}else""!==t&&(e[t]=r[t])}return e}function Ce(t,e,n,r){let s;const o=n&&n[r];if((0,i.kJ)(t)||(0,i.HD)(t)){s=new Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(t))if(t[Symbol.iterator])s=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}function Ae(t,e,n={},r,i){if(c.isCE)return me("slot","default"===e?null:{name:e},r&&r());let s=t[e];s&&s._c&&(s._d=!1),re();const o=s&&Re(s(n)),a=ue(Yt,{key:n.key||`_${e}`},o||(r?r():[]),o&&1===t._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Re(t){return t.some((t=>!le(t)||t.type!==Zt&&!(t.type===Yt&&!Re(t.children))))?t:null}const Ne=t=>t?je(t)?Xe(t)||t.proxy:Ne(t.parent):null,Oe=(0,i.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ne(t.parent),$root:t=>Ne(t.root),$emit:t=>t.emit,$options:t=>at(t),$forceUpdate:t=>()=>wn(t.update),$nextTick:t=>yn.bind(t.proxy),$watch:t=>Dn.bind(t)}),De={get({_:t},e){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 0:return s[e];case 1:return o[e];case 3:return n[e];case 2:return a[e]}else{if(s!==i.kT&&(0,i.RI)(s,e))return c[e]=0,s[e];if(o!==i.kT&&(0,i.RI)(o,e))return c[e]=1,o[e];if((h=t.propsOptions[0])&&(0,i.RI)(h,e))return c[e]=2,a[e];if(n!==i.kT&&(0,i.RI)(n,e))return c[e]=3,n[e];nt&&(c[e]=4)}}const d=Oe[e];let f,p;return d?("$attrs"===e&&(0,r.j)(t,"get",e),d(t)):(f=u.__cssModules)&&(f=f[e])?f:n!==i.kT&&(0,i.RI)(n,e)?(c[e]=3,n[e]):(p=l.config.globalProperties,(0,i.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;if(s!==i.kT&&(0,i.RI)(s,e))s[e]=n;else if(r!==i.kT&&(0,i.RI)(r,e))r[e]=n;else if((0,i.RI)(t.props,e))return!1;return("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return void 0!==n[a]||t!==i.kT&&(0,i.RI)(t,a)||e!==i.kT&&(0,i.RI)(e,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(Oe,a)||(0,i.RI)(s.config.globalProperties,a)}};const Pe=Lt();let Le=0;function xe(t,e,n){const a=t.type,c=(e?e.appContext:t.appContext)||Pe,u={uid:Le++,vnode:t,type:a,parent:e,appContext:c,root:null,next:null,subTree:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(c.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_t(a,c),emitsOptions:o(a,c),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:a.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return u.ctx={_:u},u.root=e?e.root:u,u.emit=s.bind(null,u),t.ce&&t.ce(u),u}let Me=null;const Ue=()=>Me||c,Fe=t=>{Me=t,t.scope.on()},Ve=()=>{Me&&Me.scope.off(),Me=null};function je(t){return 4&t.vnode.shapeFlag}let qe,Be,$e=!1;function He(t,e=!1){$e=e;const{props:n,children:r}=t.vnode,i=je(t);mt(t,n,i,e),Nt(t,r);const s=i?ze(t,e):void 0;return $e=!1,s}function ze(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,De));const{setup:s}=n;if(s){const n=t.setupContext=s.length>1?Je(t):null;Fe(t),(0,r.Jd)();const o=Ze(s,t,0,[t.props,n]);if((0,r.lk)(),Ve(),(0,i.tI)(o)){if(o.then(Ve,Ve),e)return o.then((n=>{Ke(t,n,e)})).catch((e=>{en(e,t,0)}));t.asyncDep=o}else Ke(t,o,e)}else Ge(t,e)}function Ke(t,e,n){(0,i.mf)(e)?t.render=e:(0,i.Kn)(e)&&(t.setupState=(0,r.WL)(e)),Ge(t,n)}function Ge(t,e,n){const s=t.type;if(!t.render){if(qe&&!s.render){const e=s.template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=qe(e,c)}}t.render=s.render||i.dG,Be&&Be(t)}Fe(t),(0,r.Jd)(),rt(t),(0,r.lk)(),Ve()}function We(t){return new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}})}function Je(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=We(t))},slots:t.slots,emit:t.emit,expose:e}}function Xe(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in Oe?Oe[n](t):void 0}}))}function Ye(t){return(0,i.mf)(t)&&t.displayName||t.name}function Qe(t){return(0,i.mf)(t)&&"__vccOpts"in t}function Ze(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){en(s,e,n)}return i}function tn(t,e,n,r){if((0,i.mf)(t)){const s=Ze(t,e,n,r);return s&&(0,i.tI)(s)&&s.catch((t=>{en(t,e,n)})),s}const s=[];for(let i=0;i<t.length;i++)s.push(tn(t[i],e,n,r));return s}function en(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,s=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,s))return;r=r.parent}const o=e.appContext.config.errorHandler;if(o)return void Ze(o,null,10,[t,i,s])}nn(t,n,i,r)}function nn(t,e,n,r=!0){console.error(t)}let rn=!1,sn=!1;const on=[];let an=0;const cn=[];let un=null,ln=0;const hn=[];let dn=null,fn=0;const pn=Promise.resolve();let gn=null,mn=null;function yn(t){const e=gn||pn;return t?e.then(this?t.bind(this):t):e}function vn(t){let e=an+1,n=on.length;while(e<n){const r=e+n>>>1,i=Cn(on[r]);i<t?e=r+1:n=r}return e}function wn(t){on.length&&on.includes(t,rn&&t.allowRecurse?an+1:an)||t===mn||(null==t.id?on.push(t):on.splice(vn(t.id),0,t),_n())}function _n(){rn||sn||(sn=!0,gn=pn.then(An))}function bn(t){const e=on.indexOf(t);e>an&&on.splice(e,1)}function En(t,e,n,r){(0,i.kJ)(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?r+1:r)||n.push(t),_n()}function In(t){En(t,un,cn,ln)}function Tn(t){En(t,dn,hn,fn)}function Sn(t,e=null){if(cn.length){for(mn=e,un=[...new Set(cn)],cn.length=0,ln=0;ln<un.length;ln++)un[ln]();un=null,ln=0,mn=null,Sn(t,e)}}function kn(t){if(hn.length){const t=[...new Set(hn)];if(hn.length=0,dn)return void dn.push(...t);for(dn=t,dn.sort(((t,e)=>Cn(t)-Cn(e))),fn=0;fn<dn.length;fn++)dn[fn]();dn=null,fn=0}}const Cn=t=>null==t.id?1/0:t.id;function An(t){sn=!1,rn=!0,Sn(t),on.sort(((t,e)=>Cn(t)-Cn(e)));try{for(an=0;an<on.length;an++){const t=on[an];t&&!1!==t.active&&Ze(t,null,14)}}finally{an=0,on.length=0,kn(t),rn=!1,gn=null,(on.length||cn.length||hn.length)&&An(t)}}const Rn={};function Nn(t,e,n){return On(t,e,n)}function On(t,e,{immediate:n,deep:s,flush:o,onTrack:a,onTrigger:c}=i.kT){const u=Me;let l,h,d=!1,f=!1;if((0,r.dq)(t)?(l=()=>t.value,d=!!t._shallow):(0,r.PG)(t)?(l=()=>t,s=!0):(0,i.kJ)(t)?(f=!0,d=t.some(r.PG),l=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?Ln(t):(0,i.mf)(t)?Ze(t,u,2):void 0))):l=(0,i.mf)(t)?e?()=>Ze(t,u,2):()=>{if(!u||!u.isUnmounted)return h&&h(),tn(t,u,3,[p])}:i.dG,e&&s){const t=l;l=()=>Ln(t())}let p=t=>{h=v.onStop=()=>{Ze(t,u,4)}},g=f?[]:Rn;const m=()=>{if(v.active)if(e){const t=v.run();(s||d||(f?t.some(((t,e)=>(0,i.aU)(t,g[e]))):(0,i.aU)(t,g)))&&(h&&h(),tn(e,u,3,[t,g===Rn?void 0:g,p]),g=t)}else v.run()};let y;m.allowRecurse=!!e,y="sync"===o?m:"post"===o?()=>Ft(m,u&&u.suspense):()=>{!u||u.isMounted?In(m):m()};const v=new r.qq(l,y);return e?n?m():g=v.run():"post"===o?Ft(v.run.bind(v),u&&u.suspense):v.run(),()=>{v.stop(),u&&u.scope&&(0,i.Od)(u.scope.effects,v)}}function Dn(t,e,n){const r=this.proxy,s=(0,i.HD)(t)?t.includes(".")?Pn(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.mf)(e)?o=e:(o=e.handler,n=e);const a=Me;Fe(this);const c=On(s,o.bind(r),n);return a?Fe(a):Ve(),c}function Pn(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function Ln(t,e=new Set){if(!(0,i.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))Ln(t.value,e);else if((0,i.kJ)(t))for(let n=0;n<t.length;n++)Ln(t[n],e);else if((0,i.DM)(t)||(0,i._N)(t))t.forEach((t=>{Ln(t,e)}));else if((0,i.PO)(t))for(const n in t)Ln(t[n],e);return t}function xn(t,e,n){const r=arguments.length;return 2===r?(0,i.Kn)(e)&&!(0,i.kJ)(e)?le(e)?me(t,null,[e]):me(t,e):me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&le(n)&&(n=[n]),me(t,e,n))}Symbol("");const Mn="3.2.11"},9963:function(t,e,n){n.d(e,{Fl:function(){return i.Fl},FN:function(){return i.FN},f3:function(){return i.f3},PG:function(){return i.PG},$y:function(){return i.$y},dq:function(){return i.dq},Y3:function(){return i.Y3},wF:function(){return i.wF},Jd:function(){return i.Jd},JJ:function(){return i.JJ},qj:function(){return i.qj},iH:function(){return i.iH},SU:function(){return i.SU},YP:function(){return i.YP},ri:function(){return gt},bM:function(){return it},nr:function(){return rt},F8:function(){return lt},iM:function(){return ut}});var r=n(3577),i=n(6252);n(2262);const s="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=new Map,c={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?o.createElementNS(s,t):o.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>o.createTextNode(t),createComment:t=>o.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>o.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const i=n?n.previousSibling:e.lastChild;let s=a.get(t);if(!s){const e=o.createElement("template");if(e.innerHTML=r?`<svg>${t}</svg>`:t,s=e.content,r){const t=s.firstChild;while(t.firstChild)s.appendChild(t.firstChild);s.removeChild(t)}a.set(t,s)}return e.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function u(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function l(t,e,n){const i=t.style,s=i.display;if(n)if((0,r.HD)(n))e!==n&&(i.cssText=n);else{for(const t in n)d(i,t,n[t]);if(e&&!(0,r.HD)(e))for(const t in e)null==n[t]&&d(i,t,"")}else t.removeAttribute("style");"_vod"in t&&(i.display=s)}const h=/\s*!important$/;function d(t,e,n){if((0,r.kJ)(n))n.forEach((n=>d(t,e,n)));else if(e.startsWith("--"))t.setProperty(e,n);else{const i=g(t,e);h.test(n)?t.setProperty((0,r.rs)(i),n.replace(h,""),"important"):t[i]=n}}const f=["Webkit","Moz","ms"],p={};function g(t,e){const n=p[e];if(n)return n;let i=(0,r._A)(e);if("filter"!==i&&i in t)return p[e]=i;i=(0,r.kC)(i);for(let r=0;r<f.length;r++){const n=f[r]+i;if(n in t)return p[e]=n}return e}const m="http://www.w3.org/1999/xlink";function y(t,e,n,i,s){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(m,e.slice(6,e.length)):t.setAttributeNS(m,e,n);else{const i=(0,r.Pq)(e);null==n||i&&!(0,r.yA)(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function v(t,e,n,i,s,o,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,s,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName){t._value=n;const r=null==n?"":n;return t.value!==r&&(t.value=r),void(null==n&&t.removeAttribute(e))}if(""===n||null==n){const i=typeof t[e];if("boolean"===i)return void(t[e]=(0,r.yA)(n));if(null==n&&"string"===i)return t[e]="",void t.removeAttribute(e);if("number"===i){try{t[e]=0}catch(c){}return void t.removeAttribute(e)}}try{t[e]=n}catch(u){0}}let w=Date.now,_=!1;if("undefined"!==typeof window){w()>document.createEvent("Event").timeStamp&&(w=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);_=!!(t&&Number(t[1])<=53)}let b=0;const E=Promise.resolve(),I=()=>{b=0},T=()=>b||(E.then(I),b=w());function S(t,e,n,r){t.addEventListener(e,n,r)}function k(t,e,n,r){t.removeEventListener(e,n,r)}function C(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=R(e);if(r){const o=s[e]=N(r,i);S(t,n,o,a)}else o&&(k(t,n,o,a),s[e]=void 0)}}const A=/(?:Once|Passive|Capture)$/;function R(t){let e;if(A.test(t)){let n;e={};while(n=t.match(A))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[(0,r.rs)(t.slice(2)),e]}function N(t,e){const n=t=>{const r=t.timeStamp||w();(_||r>=n.attached-1)&&(0,i.$d)(O(t,n.value),e,5,[t])};return n.value=t,n.attached=T(),n}function O(t,e){if((0,r.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t(e)))}return e}const D=/^on[a-z]/,P=(t,e,n,i,s=!1,o,a,c,h)=>{"class"===e?u(t,i,s):"style"===e?l(t,n,i):(0,r.F7)(e)?(0,r.tR)(e)||C(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):L(t,e,i,s))?v(t,e,i,o,a,c,h):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),y(t,e,i,s))};function L(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&D.test(e)&&(0,r.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!D.test(e)||!(0,r.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const x="transition",M="animation",U=(t,{slots:e})=>(0,i.h)(i.P$,q(t),e);U.displayName="Transition";const F={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},V=(U.props=(0,r.l7)({},i.P$.props,F),(t,e=[])=>{(0,r.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)}),j=t=>!!t&&((0,r.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function q(t){const e={};for(const r in t)r in F||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=B(s),m=g&&g[0],y=g&&g[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:_,onLeave:b,onLeaveCancelled:E,onBeforeAppear:I=v,onAppear:T=w,onAppearCancelled:S=_}=e,k=(t,e,n)=>{z(t,e?h:c),z(t,e?l:a),n&&n()},C=(t,e)=>{z(t,p),z(t,f),e&&e()},A=t=>(e,n)=>{const r=t?T:w,s=()=>k(e,t,n);V(r,[e,s]),K((()=>{z(e,t?u:o),H(e,t?h:c),j(r)||W(e,i,m,s)}))};return(0,r.l7)(e,{onBeforeEnter(t){V(v,[t]),H(t,o),H(t,a)},onBeforeAppear(t){V(I,[t]),H(t,u),H(t,l)},onEnter:A(!1),onAppear:A(!0),onLeave(t,e){const n=()=>C(t,e);H(t,d),Q(),H(t,f),K((()=>{z(t,d),H(t,p),j(b)||W(t,i,y,n)})),V(b,[t,n])},onEnterCancelled(t){k(t,!1),V(_,[t])},onAppearCancelled(t){k(t,!0),V(S,[t])},onLeaveCancelled(t){C(t),V(E,[t])}})}function B(t){if(null==t)return null;if((0,r.Kn)(t))return[$(t.enter),$(t.leave)];{const e=$(t);return[e,e]}}function $(t){const e=(0,r.He)(t);return e}function H(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function z(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function K(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let G=0;function W(t,e,n,r){const i=t._endId=++G,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=J(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),s()},d=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,d)}function J(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(x+"Delay"),s=r(x+"Duration"),o=X(i,s),a=r(M+"Delay"),c=r(M+"Duration"),u=X(a,c);let l=null,h=0,d=0;e===x?o>0&&(l=x,h=o,d=s.length):e===M?u>0&&(l=M,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?x:M:null,d=l?l===x?s.length:c.length:0);const f=l===x&&/\b(transform|all)(,|$)/.test(n[x+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function X(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>Y(e)+Y(t[n]))))}function Y(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Q(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=t=>{const e=t.props["onUpdate:modelValue"];return(0,r.kJ)(e)?t=>(0,r.ir)(e,t):e};function tt(t){t.target.composing=!0}function et(t){const e=t.target;e.composing&&(e.composing=!1,nt(e,"input"))}function nt(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const rt={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=Z(s);const o=i||s.props&&"number"===s.props.type;S(t,e?"change":"input",(e=>{if(e.target.composing)return;let i=t.value;n?i=i.trim():o&&(i=(0,r.He)(i)),t._assign(i)})),n&&S(t,"change",(()=>{t.value=t.value.trim()})),e||(S(t,"compositionstart",tt),S(t,"compositionend",et),S(t,"change",et))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},o){if(t._assign=Z(o),t.composing)return;if(document.activeElement===t){if(n)return;if(i&&t.value.trim()===e)return;if((s||"number"===t.type)&&(0,r.He)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const it={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=(0,r.DM)(e);S(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,r.He)(ot(t)):ot(t)));t._assign(t.multiple?s?new Set(e):e:e[0])})),t._assign=Z(i)},mounted(t,{value:e}){st(t,e)},beforeUpdate(t,e,n){t._assign=Z(n)},updated(t,{value:e}){st(t,e)}};function st(t,e){const n=t.multiple;if(!n||(0,r.kJ)(e)||(0,r.DM)(e)){for(let i=0,s=t.options.length;i<s;i++){const s=t.options[i],o=ot(s);if(n)(0,r.kJ)(e)?s.selected=(0,r.hq)(e,o)>-1:s.selected=e.has(o);else if((0,r.WV)(ot(s),e))return void(t.selectedIndex!==i&&(t.selectedIndex=i))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function ot(t){return"_value"in t?t._value:t.value}const at=["ctrl","shift","alt","meta"],ct={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>at.some((n=>t[`${n}Key`]&&!e.includes(n)))},ut=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=ct[e[t]];if(r&&r(n,e))return}return t(n,...r)},lt={beforeMount(t,{value:e},{transition:n}){t._vod="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):ht(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),ht(t,!0),r.enter(t)):r.leave(t,(()=>{ht(t,!1)})):ht(t,e))},beforeUnmount(t,{value:e}){ht(t,e)}};function ht(t,e){t.style.display=e?t._vod:"none"}const dt=(0,r.l7)({patchProp:P},c);let ft;function pt(){return ft||(ft=(0,i.Us)(dt))}const gt=(...t)=>{const e=pt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=mt(t);if(!i)return;const s=e._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function mt(t){if((0,r.HD)(t)){const e=document.querySelector(t);return e}return t}},3577:function(t,e,n){function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{Z6:function(){return _},kT:function(){return w},NO:function(){return E},dG:function(){return b},_A:function(){return G},kC:function(){return X},Nj:function(){return tt},l7:function(){return k},aU:function(){return Q},RI:function(){return R},rs:function(){return J},yA:function(){return c},ir:function(){return Z},kJ:function(){return N},mf:function(){return L},e1:function(){return s},S0:function(){return $},_N:function(){return O},tR:function(){return S},Kn:function(){return U},F7:function(){return T},PO:function(){return B},tI:function(){return F},Gg:function(){return H},DM:function(){return D},Pq:function(){return a},HD:function(){return x},yk:function(){return M},WV:function(){return g},hq:function(){return m},fY:function(){return r},C_:function(){return f},j5:function(){return u},Od:function(){return C},zw:function(){return y},hR:function(){return Y},He:function(){return et},W7:function(){return q}});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(t){return!!t||""===t}function u(t){if(N(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=x(r)?d(r):u(r);if(i)for(const t in i)e[t]=i[t]}return e}return x(t)||U(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(t){const e={};return t.split(l).forEach((t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function f(t){let e="";if(x(t))e=t;else if(N(t))for(let n=0;n<t.length;n++){const r=f(t[n]);r&&(e+=r+" ")}else if(U(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function p(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=g(t[r],e[r]);return n}function g(t,e){if(t===e)return!0;let n=P(t),r=P(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=N(t),r=N(e),n||r)return!(!n||!r)&&p(t,e);if(n=U(t),r=U(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!g(t[n],e[n]))return!1}}return String(t)===String(e)}function m(t,e){return t.findIndex((t=>g(t,e)))}const y=t=>null==t?"":N(t)||U(t)&&(t.toString===V||!L(t.toString))?JSON.stringify(t,v,2):String(t),v=(t,e)=>e&&e.__v_isRef?v(t,e.value):O(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:D(e)?{[`Set(${e.size})`]:[...e.values()]}:!U(e)||N(e)||B(e)?e:String(e),w={},_=[],b=()=>{},E=()=>!1,I=/^on[^a-z]/,T=t=>I.test(t),S=t=>t.startsWith("onUpdate:"),k=Object.assign,C=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},A=Object.prototype.hasOwnProperty,R=(t,e)=>A.call(t,e),N=Array.isArray,O=t=>"[object Map]"===j(t),D=t=>"[object Set]"===j(t),P=t=>t instanceof Date,L=t=>"function"===typeof t,x=t=>"string"===typeof t,M=t=>"symbol"===typeof t,U=t=>null!==t&&"object"===typeof t,F=t=>U(t)&&L(t.then)&&L(t.catch),V=Object.prototype.toString,j=t=>V.call(t),q=t=>j(t).slice(8,-1),B=t=>"[object Object]"===j(t),$=t=>x(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,H=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),z=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},K=/-(\w)/g,G=z((t=>t.replace(K,((t,e)=>e?e.toUpperCase():"")))),W=/\B([A-Z])/g,J=z((t=>t.replace(W,"-$1").toLowerCase())),X=z((t=>t.charAt(0).toUpperCase()+t.slice(1))),Y=z((t=>t?`on${X(t)}`:"")),Q=(t,e)=>!Object.is(t,e),Z=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},tt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},et=t=>{const e=parseFloat(t);return isNaN(e)?t:e}},5503:function(t,e,n){n.d(e,{ZF:function(){return r.ZF}});var r=n(4258),i="firebase",s="9.0.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,s,"app")},6690:function(t,e,n){n.d(e,{Xb:function(){return r.Xb},v0:function(){return r.v0},e5:function(){return r.e5}});var r=n(6052)},4956:function(t,e,n){n.d(e,{hJ:function(){return Uu},PL:function(){return al},ad:function(){return ju},IO:function(){return il}});var r=n(4258),i=n(909),s=n(4594),o=n(4589),a=function(t,e){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},a(t,e)};function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function u(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var l,h="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},d=d||{},f=h||self;function p(){}function g(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function m(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function y(t){return Object.prototype.hasOwnProperty.call(t,v)&&t[v]||(t[v]=++w)}var v="closure_uid_"+(1e9*Math.random()>>>0),w=0;function _(t,e,n){return t.call.apply(t.bind,arguments)}function b(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function E(t,e,n){return E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_:b,E.apply(null,arguments)}function I(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function T(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function S(){this.s=this.s,this.o=this.o}var k=0,C={};S.prototype.s=!1,S.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=k)){var t=y(this);delete C[t]}},S.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var A=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},R=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"===typeof t?t.split(""):t,s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function N(t){t:{for(var e=Wn,n=t.length,r="string"===typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function O(t){return Array.prototype.concat.apply([],arguments)}function D(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function P(t){return/^[\s\xa0]*$/.test(t)}var L,x=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function M(t,e){return-1!=t.indexOf(e)}function U(t,e){return t<e?-1:t>e?1:0}t:{var F=f.navigator;if(F){var V=F.userAgent;if(V){L=V;break t}}L=""}function j(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function q(t){var e={};for(var n in t)e[n]=t[n];return e}var B="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(var s=0;s<B.length;s++)n=B[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function H(t){return H[" "](t),t}function z(t){var e=it;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}H[" "]=p;var K,G=M(L,"Opera"),W=M(L,"Trident")||M(L,"MSIE"),J=M(L,"Edge"),X=J||W,Y=M(L,"Gecko")&&!(M(L.toLowerCase(),"webkit")&&!M(L,"Edge"))&&!(M(L,"Trident")||M(L,"MSIE"))&&!M(L,"Edge"),Q=M(L.toLowerCase(),"webkit")&&!M(L,"Edge");function Z(){var t=f.document;return t?t.documentMode:void 0}t:{var tt="",et=function(){var t=L;return Y?/rv:([^\);]+)(\)|;)/.exec(t):J?/Edge\/([\d\.]+)/.exec(t):W?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Q?/WebKit\/(\S+)/.exec(t):G?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(et&&(tt=et?et[1]:""),W){var nt=Z();if(null!=nt&&nt>parseFloat(tt)){K=String(nt);break t}}K=tt}var rt,it={};function st(){return z((function(){for(var t=0,e=x(String(K)).split("."),n=x("9").split("."),r=Math.max(e.length,n.length),i=0;0==t&&i<r;i++){var s=e[i]||"",o=n[i]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;t=U(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||U(0==s[2].length,0==o[2].length)||U(s[2],o[2]),s=s[3],o=o[3]}while(0==t)}return 0<=t}))}if(f.document&&W){var ot=Z();rt=ot||(parseInt(K,10)||void 0)}else rt=void 0;var at=rt,ct=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{f.addEventListener("test",p,e),f.removeEventListener("test",p,e)}catch(n){}return t}();function ut(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function lt(t,e){if(ut.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Y){t:{try{H(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ht[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&lt.Z.h.call(this)}}ut.prototype.h=function(){this.defaultPrevented=!0},T(lt,ut);var ht={2:"touch",3:"pen",4:"mouse"};lt.prototype.h=function(){lt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var dt="closure_listenable_"+(1e6*Math.random()|0),ft=0;function pt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++ft,this.ca=this.fa=!1}function gt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function mt(t){this.src=t,this.g={},this.h=0}function yt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=A(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(gt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function vt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}mt.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=vt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new pt(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var wt="closure_lm_"+(1e6*Math.random()|0),_t={};function bt(t,e,n,r,i){if(r&&r.once)return Tt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)bt(t,e[s],n,r,i);return null}return n=Ot(n),t&&t[dt]?t.N(e,n,m(r)?!!r.capture:!!r,i):Et(t,e,n,!1,r,i)}function Et(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=m(i)?!!i.capture:!!i,a=Rt(t);if(a||(t[wt]=a=new mt(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=It(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ct||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Ct(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function It(){function t(n){return e.call(t.src,t.listener,n)}var e=At;return t}function Tt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Tt(t,e[s],n,r,i);return null}return n=Ot(n),t&&t[dt]?t.O(e,n,m(r)?!!r.capture:!!r,i):Et(t,e,n,!0,r,i)}function St(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)St(t,e[s],n,r,i);else r=m(r)?!!r.capture:!!r,n=Ot(n),t&&t[dt]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=vt(s,n,r,i),-1<n&&(gt(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Rt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=vt(e,n,r,i)),(n=-1<t?e[t]:null)&&kt(n))}function kt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[dt])yt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ct(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Rt(e))?(yt(n,t),0==n.h&&(n.src=null,e[wt]=null)):gt(t)}}}function Ct(t){return t in _t?_t[t]:_t[t]="on"+t}function At(t,e){if(t.ca)t=!0;else{e=new lt(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&kt(t),t=n.call(r,e)}return t}function Rt(t){return t=t[wt],t instanceof mt?t:null}var Nt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ot(t){return"function"===typeof t?t:(t[Nt]||(t[Nt]=function(e){return t.handleEvent(e)}),t[Nt])}function Dt(){S.call(this),this.i=new mt(this),this.P=this,this.I=null}function Pt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new ut(e,t);else if(e instanceof ut)e.target=e.target||t;else{var i=e;e=new ut(r,t),$(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Lt(o,r,!0,e)&&i}if(o=e.g=t,i=Lt(o,r,!0,e)&&i,i=Lt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Lt(o,r,!1,e)&&i}function Lt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&yt(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}T(Dt,S),Dt.prototype[dt]=!0,Dt.prototype.removeEventListener=function(t,e,n,r){St(this,t,e,n,r)},Dt.prototype.M=function(){if(Dt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)gt(n[r]);delete e.g[t],e.h--}}this.I=null},Dt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Dt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var xt=f.JSON.stringify;function Mt(){var t=zt,e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Ut,Ft=function(){function t(){this.h=this.g=null}return t.prototype.add=function(t,e){var n=Vt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n},t}(),Vt=new(function(){function t(t,e){this.i=t,this.j=e,this.h=0,this.g=null}return t.prototype.get=function(){var t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t},t}())((function(){return new jt}),(function(t){return t.reset()})),jt=function(){function t(){this.next=this.g=this.h=null}return t.prototype.set=function(t,e){this.h=t,this.g=e,this.next=null},t.prototype.reset=function(){this.next=this.g=this.h=null},t}();function qt(t){f.setTimeout((function(){throw t}),0)}function Bt(t,e){Ut||$t(),Ht||(Ut(),Ht=!0),zt.add(t,e)}function $t(){var t=f.Promise.resolve(void 0);Ut=function(){t.then(Kt)}}var Ht=!1,zt=new Ft;function Kt(){for(var t;t=Mt();){try{t.h.call(t.g)}catch(n){qt(n)}var e=Vt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ht=!1}function Gt(t,e){Dt.call(this),this.h=t||1,this.g=e||f,this.j=E(this.kb,this),this.l=Date.now()}function Wt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Jt(t,e,n){if("function"===typeof t)n&&(t=E(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=E(t.handleEvent,t)}return 2147483647<Number(e)?-1:f.setTimeout(t,e||0)}function Xt(t){t.g=Jt((function(){t.g=null,t.i&&(t.i=!1,Xt(t))}),t.j);var e=t.h;t.h=null,t.m.apply(null,e)}T(Gt,Dt),l=Gt.prototype,l.da=!1,l.S=null,l.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Pt(this,"tick"),this.da&&(Wt(this),this.start()))}},l.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},l.M=function(){Gt.Z.M.call(this),Wt(this),delete this.g};var Yt=function(t){function e(e,n){var r=t.call(this)||this;return r.m=e,r.j=n,r.h=null,r.i=!1,r.g=null,r}return c(e,t),e.prototype.l=function(t){this.h=arguments,this.g?this.i=!0:Xt(this)},e.prototype.M=function(){t.prototype.M.call(this),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},e}(S);function Qt(t){S.call(this),this.h=t,this.g={}}T(Qt,S);var Zt=[];function te(t,e,n,r){Array.isArray(n)||(n&&(Zt[0]=n.toString()),n=Zt);for(var i=0;i<n.length;i++){var s=bt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ee(t){j(t.g,(function(t,e){this.g.hasOwnProperty(e)&&kt(t)}),t),t.g={}}function ne(){this.g=!0}function re(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function ie(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function se(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ae(t,n)+(r?" "+r:"")}))}function oe(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ae(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return xt(n)}catch(a){return e}}Qt.prototype.M=function(){Qt.Z.M.call(this),ee(this)},Qt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ne.prototype.Aa=function(){this.g=!1},ne.prototype.info=function(){};var ce={},ue=null;function le(){return ue=ue||new Dt}function he(t){ut.call(this,ce.Ma,t)}function de(t){var e=le();Pt(e,new he(e,t))}function fe(t,e){ut.call(this,ce.STAT_EVENT,t),this.stat=e}function pe(t){var e=le();Pt(e,new fe(e,t))}function ge(t,e){ut.call(this,ce.Na,t),this.size=e}function me(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return f.setTimeout((function(){t()}),e)}ce.Ma="serverreachability",T(he,ut),ce.STAT_EVENT="statevent",T(fe,ut),ce.Na="timingevent",T(ge,ut);var ye={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ve={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function we(){}function _e(t){return t.h||(t.h=t.i())}function be(){}we.prototype.h=null;var Ee,Ie={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Te(){ut.call(this,"d")}function Se(){ut.call(this,"c")}function ke(){}function Ce(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Qt(this),this.P=Re,t=X?125:void 0,this.W=new Gt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ae}function Ae(){this.i=null,this.g="",this.h=!1}T(Te,ut),T(Se,ut),T(ke,we),ke.prototype.g=function(){return new XMLHttpRequest},ke.prototype.i=function(){return{}},Ee=new ke;var Re=45e3,Ne={},Oe={};function De(t,e,n){t.K=1,t.v=rn(Ye(e)),t.s=n,t.U=!0,Pe(t,null)}function Pe(t,e){t.F=Date.now(),Ue(t),t.A=Ye(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),wn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ae,t.g=Sr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Yt(E(t.Ia,t,t.g),t.O)),te(t.V,t.g,"readystatechange",t.gb),e=t.H?q(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),de(1),re(t.j,t.u,t.A,t.m,t.X,t.s)}function Le(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function xe(t,e,n){for(var r,i=!0;!t.I&&t.C<n.length;){if(r=Me(t,n),r==Oe){4==e&&(t.o=4,pe(14),i=!1),se(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ne){t.o=4,pe(15),se(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}se(t.j,t.m,r,null),Be(t,r)}Le(t)&&r!=Oe&&r!=Ne&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,pe(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),yr(e),e.L=!0,pe(11))):(se(t.j,t.m,n,"[Invalid Chunked Response]"),qe(t),je(t))}function Me(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Oe:(n=Number(e.substring(n,r)),isNaN(n)?Ne:(r+=1,r+n>e.length?Oe:(e=e.substr(r,n),t.C=r+n,e)))}function Ue(t){t.Y=Date.now()+t.P,Fe(t,t.P)}function Fe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=me(E(t.eb,t),e)}function Ve(t){t.B&&(f.clearTimeout(t.B),t.B=null)}function je(t){0==t.l.G||t.I||_r(t.l,t)}function qe(t){Ve(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Wt(t.W),ee(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Be(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Cn(n.i,t)))if(n.I=t.N,!t.J&&Cn(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(s){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;wr(n),ar(n)}mr(n),pe(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=me(E(n.ab,n),6e3));if(1>=kn(n.i)&&n.ka){try{n.ka()}catch(s){}n.ka=void 0}}else Er(n,11)}else if((t.J||n.g==t)&&wr(n),!P(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){var s=i[e];if(n.U=s[0],s=s[1],2==n.G)if("c"==s[0]){n.J=s[1],n.la=s[2];var o=s[3];null!=o&&(n.ma=o,n.h.info("VER="+n.ma));var a=s[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var c=s[5];null!=c&&"number"===typeof c&&0<c&&(r=1.5*c,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var u=t.g;if(u){var l=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.i;!h.g&&(M(l,"spdy")||M(l,"quic")||M(l,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(An(h,h.h),h.h=null))}if(r.D){var d=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;d&&(r.sa=d,nn(r.F,r.D,d))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var f=t;if(r.oa=Tr(r,r.H?r.la:null,r.W),f.J){Rn(r.i,f);var p=f,g=r.K;g&&p.setTimeout(g),p.B&&(Ve(p),Ue(p)),r.g=f}else gr(r);0<n.l.length&&lr(n)}else"stop"!=s[0]&&"close"!=s[0]||Er(n,7);else 3==n.G&&("stop"==s[0]||"close"==s[0]?"stop"==s[0]?Er(n,7):or(n):"noop"!=s[0]&&n.j&&n.j.wa(s),n.A=0)}de(4)}catch(s){}}function $e(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(g(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function He(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(g(t)||"string"===typeof t)R(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(g(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=$e(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function ze(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof ze)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ke(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Ge(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Ge(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function Ge(t,e){return Object.prototype.hasOwnProperty.call(t,e)}l=Ce.prototype,l.setTimeout=function(t){this.P=t},l.gb=function(t){t=t.target;var e=this.L;e&&3==tr(t)?e.l():this.Ia(t)},l.Ia=function(t){try{if(t==this.g)t:{var e=tr(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>e)&&(3!=e||X||this.g&&(this.h.h||this.g.ga()||er(this.g)))){this.I||4!=e||7==n||de(8==n||0>=r?3:2),Ve(this);var i=this.g.ba();this.N=i;e:if(Le(this)){var s=er(this.g);t="";var o=s.length,a=4==tr(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){qe(this),je(this);var c="";break e}this.h.i=new f.TextDecoder}for(n=0;n<o;n++)this.h.h=!0,t+=this.h.i.decode(s[n],{stream:a&&n==o-1});s.splice(0,o),this.h.g+=t,this.C=0,c=this.h.g}else c=this.g.ga();if(this.i=200==i,ie(this.j,this.u,this.A,this.m,this.X,e,i),this.i){if(this.$&&!this.J){e:{if(this.g){var u,l=this.g;if((u=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(u)){var h=u;break e}}h=null}if(!(i=h)){this.i=!1,this.o=3,pe(12),qe(this),je(this);break t}se(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Be(this,i)}this.U?(xe(this,e,c),X&&this.i&&3==e&&(te(this.V,this.W,"tick",this.fb),this.W.start())):(se(this.j,this.m,c,null),Be(this,c)),4==e&&qe(this),this.i&&!this.I&&(4==e?_r(this.l,this):(this.i=!1,Ue(this)))}else 400==i&&0<c.indexOf("Unknown SID")?(this.o=3,pe(12)):(this.o=0,pe(13)),qe(this),je(this)}}}catch(e){}},l.fb=function(){if(this.g){var t=tr(this.g),e=this.g.ga();this.C<e.length&&(Ve(this),xe(this,t,e),this.i&&4!=t&&Ue(this))}},l.cancel=function(){this.I=!0,qe(this)},l.eb=function(){this.B=null;var t=Date.now();0<=t-this.Y?(oe(this.j,this.A),2!=this.K&&(de(3),pe(17)),qe(this),this.o=2,je(this)):Fe(this,this.Y-t)},l=ze.prototype,l.R=function(){Ke(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},l.T=function(){return Ke(this),this.g.concat()},l.get=function(t,e){return Ge(this.h,t)?this.h[t]:e},l.set=function(t,e){Ge(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},l.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var We=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Je(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Xe(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Xe){this.g=void 0!==e?e:t.g,Qe(this,t.j),this.s=t.s,Ze(this,t.i),tn(this,t.m),this.l=t.l,e=t.h;var n=new gn;n.i=e.i,e.g&&(n.g=new ze(e.g),n.h=e.h),en(this,n),this.o=t.o}else t&&(n=String(t).match(We))?(this.g=!!e,Qe(this,n[1]||"",!0),this.s=an(n[2]||""),Ze(this,n[3]||"",!0),tn(this,n[4]),this.l=an(n[5]||"",!0),en(this,n[6]||"",!0),this.o=an(n[7]||"")):(this.g=!!e,this.h=new gn(null,this.g))}function Ye(t){return new Xe(t)}function Qe(t,e,n){t.j=n?an(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ze(t,e,n){t.i=n?an(e,!0):e}function tn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function en(t,e,n){e instanceof gn?(t.h=e,bn(t.h,t.g)):(n||(e=cn(e,fn)),t.h=new gn(e,t.g))}function nn(t,e,n){t.h.set(e,n)}function rn(t){return nn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function sn(t){return t instanceof Xe?Ye(t):new Xe(t,void 0)}function on(t,e,n,r){var i=new Xe(null,void 0);return t&&Qe(i,t),e&&Ze(i,e),n&&tn(i,n),r&&(i.l=r),i}function an(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function cn(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,un),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function un(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Xe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(cn(e,ln,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(cn(e,ln,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(cn(n,"/"==n.charAt(0)?dn:hn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",cn(n,pn)),t.join("")};var ln=/[#\/\?@]/g,hn=/[#\?:]/g,dn=/[#\?]/g,fn=/[#\?@]/g,pn=/#/g;function gn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function mn(t){t.g||(t.g=new ze,t.h=0,t.i&&Je(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function yn(t,e){mn(t),e=_n(t,e),Ge(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ge(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ke(t)))}function vn(t,e){return mn(t),e=_n(t,e),Ge(t.g.h,e)}function wn(t,e,n){yn(t,e),0<n.length&&(t.i=null,t.g.set(_n(t,e),D(n)),t.h+=n.length)}function _n(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bn(t,e){e&&!t.j&&(mn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(yn(this,e),wn(this,n,t))}),t)),t.j=e}l=gn.prototype,l.add=function(t,e){mn(this),this.i=null,t=_n(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},l.forEach=function(t,e){mn(this),this.g.forEach((function(n,r){R(n,(function(n){t.call(e,n,r,this)}),this)}),this)},l.T=function(){mn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},l.R=function(t){mn(this);var e=[];if("string"===typeof t)vn(this,t)&&(e=O(e,this.g.get(_n(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=O(e,t[n])}return e},l.set=function(t,e){return mn(this),this.i=null,t=_n(this,t),vn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},l.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},l.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var En=function(){function t(t,e){this.h=t,this.g=e}return t}();function In(t){this.l=t||Tn,f.PerformanceNavigationTiming?(t=f.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(f.g&&f.g.Ea&&f.g.Ea()&&f.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Tn=10;function Sn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function kn(t){return t.h?1:t.g?t.g.size:0}function Cn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function An(t,e){t.g?t.g.add(e):t.h=e}function Rn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Nn(t){var e,n;if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){var r=t.i;try{for(var i=u(t.g.values()),s=i.next();!s.done;s=i.next()){var o=s.value;r=r.concat(o.D)}}catch(a){e={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}return D(t.i)}function On(){}function Dn(){this.g=new On}function Pn(t,e,n){var r=n||"";try{He(t,(function(t,n){var i=t;m(t)&&(i=xt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Ln(t,e){var n=new ne;if(f.Image){var r=new Image;r.onload=I(xn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=I(xn,n,r,"TestLoadImage: error",!1,e),r.onabort=I(xn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=I(xn,n,r,"TestLoadImage: timeout",!1,e),f.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function xn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function Mn(t){this.l=t.$b||null,this.j=t.ib||!1}function Un(t,e){Dt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Fn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}In.prototype.cancel=function(){var t,e;if(this.i=Nn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=u(this.g.values()),r=n.next();!r.done;r=n.next()){var i=r.value;i.cancel()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.g.clear()}},On.prototype.stringify=function(t){return f.JSON.stringify(t,void 0)},On.prototype.parse=function(t){return f.JSON.parse(t,void 0)},T(Mn,we),Mn.prototype.g=function(){return new Un(this.l,this.j)},Mn.prototype.i=function(t){return function(){return t}}({}),T(Un,Dt);var Fn=0;function Vn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function jn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,qn(t)}function qn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}l=Un.prototype,l.open=function(t,e){if(this.readyState!=Fn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,qn(this)},l.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||f).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},l.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,jn(this)),this.readyState=Fn},l.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qn(this)),this.g&&(this.readyState=3,qn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof f.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},l.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?jn(this):qn(this),3==this.readyState&&Vn(this)}},l.Ua=function(t){this.g&&(this.response=this.responseText=t,jn(this))},l.Ta=function(t){this.g&&(this.response=t,jn(this))},l.ha=function(){this.g&&jn(this)},l.setRequestHeader=function(t,e){this.v.append(t,e)},l.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},l.getAllResponseHeaders=function(){if(!this.h)return"";for(var t=[],e=this.h.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Un.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Bn=f.JSON.parse;function $n(t){Dt.call(this),this.headers=new ze,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Hn,this.K=this.L=!1}T($n,Dt);var Hn="",zn=/^https?$/i,Kn=["POST","PUT"];function Gn(t){return W&&st()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Wn(t){return"content-type"==t.toLowerCase()}function Jn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Xn(t),Qn(t)}function Xn(t){t.D||(t.D=!0,Pt(t,"complete"),Pt(t,"error"))}function Yn(t){if(t.h&&"undefined"!=typeof d&&(!t.C[1]||4!=tr(t)||2!=t.ba()))if(t.v&&4==tr(t))Jt(t.Fa,0,t);else if(Pt(t,"readystatechange"),4==tr(t)){t.h=!1;try{var e,n=t.ba();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var s=String(t.H).match(We)[1]||null;if(!s&&f.self&&f.self.location){var o=f.self.location.protocol;s=o.substr(0,o.length-1)}i=!zn.test(s?s.toLowerCase():"")}e=i}if(e)Pt(t,"complete"),Pt(t,"success");else{t.m=6;try{var a=2<tr(t)?t.g.statusText:""}catch(c){a=""}t.j=a+" ["+t.ba()+"]",Xn(t)}}finally{Qn(t)}}}function Qn(t,e){if(t.g){Zn(t);var n=t.g,r=t.C[0]?p:null;t.g=null,t.C=null,e||Pt(t,"ready");try{n.onreadystatechange=r}catch(i){}}}function Zn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(f.clearTimeout(t.A),t.A=null)}function tr(t){return t.g?t.g.readyState:0}function er(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Hn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function nr(t){var e="";return j(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function rr(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=nr(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):nn(t,e,n))}function ir(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function sr(t){this.za=0,this.l=[],this.h=new ne,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ir("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ir("baseRetryDelayMs",5e3,t),this.$a=ir("retryDelaySeedMs",1e4,t),this.Ya=ir("forwardChannelMaxRetries",2,t),this.ra=ir("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new In(t&&t.concurrentRequestLimit),this.Ca=new Dn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function or(t){if(cr(t),3==t.G){var e=t.V++,n=Ye(t.F);nn(n,"SID",t.J),nn(n,"RID",e),nn(n,"TYPE","terminate"),fr(t,n),e=new Ce(t,t.h,e,void 0),e.K=2,e.v=rn(Ye(n)),n=!1,f.navigator&&f.navigator.sendBeacon&&(n=f.navigator.sendBeacon(e.v.toString(),"")),!n&&f.Image&&((new Image).src=e.v,n=!0),n||(e.g=Sr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ue(e)}Ir(t)}function ar(t){t.g&&(yr(t),t.g.cancel(),t.g=null)}function cr(t){ar(t),t.u&&(f.clearTimeout(t.u),t.u=null),wr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&f.clearTimeout(t.m),t.m=null)}function ur(t,e){t.l.push(new En(t.Za++,e)),3==t.G&&lr(t)}function lr(t){Sn(t.i)||t.m||(t.m=!0,Bt(t.Ha,t),t.C=0)}function hr(t,e){return!(kn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=me(E(t.Ha,t,e),br(t,t.C)),t.C++,!0))}function dr(t,e){var n;n=e?e.m:t.V++;var r=Ye(t.F);nn(r,"SID",t.J),nn(r,"RID",n),nn(r,"AID",t.U),fr(t,r),t.o&&t.s&&rr(r,t.o,t.s),n=new Ce(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=pr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),An(t.i,n),De(n,r,e)}function fr(t,e){t.j&&He({},(function(t,n){nn(e,n,t)}))}function pr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?E(t.j.Oa,t.j,t):null;t:for(var i=t.l,s=-1;;){var o=["count="+n];-1==s?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);for(var a=!0,c=0;c<n;c++){var u=i[c].h,l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{Pn(l,o,"req"+u+"_")}catch(ri){r&&r(l)}}if(a){r=o.join("&");break t}}return t=t.l.splice(0,n),e.D=t,r}function gr(t){t.g||t.u||(t.Y=1,Bt(t.Ga,t),t.A=0)}function mr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=me(E(t.Ga,t),br(t,t.A)),t.A++,!0)}function yr(t){null!=t.B&&(f.clearTimeout(t.B),t.B=null)}function vr(t){t.g=new Ce(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ye(t.oa);nn(e,"RID","rpc"),nn(e,"SID",t.J),nn(e,"CI",t.N?"0":"1"),nn(e,"AID",t.U),fr(t,e),nn(e,"TYPE","xmlhttp"),t.o&&t.s&&rr(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=rn(Ye(e)),n.s=null,n.U=!0,Pe(n,t)}function wr(t){null!=t.v&&(f.clearTimeout(t.v),t.v=null)}function _r(t,e){var n=null;if(t.g==e){wr(t),yr(t),t.g=null;var r=2}else{if(!Cn(t.i,e))return;n=e.D,Rn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=le(),Pt(r,new ge(r,n,e,i)),lr(t)}else gr(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&hr(t,e)||2==r&&mr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Er(t,5);break;case 4:Er(t,10);break;case 3:Er(t,6);break;default:Er(t,2)}}function br(t,e){var n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Er(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=E(t.jb,t);n||(n=new Xe("//www.google.com/images/cleardot.gif"),f.location&&"http"==f.location.protocol||Qe(n,"https"),rn(n)),Ln(n.toString(),r)}else pe(2);t.G=0,t.j&&t.j.va(e),Ir(t),cr(t)}function Ir(t){t.G=0,t.I=-1,t.j&&(0==Nn(t.i).length&&0==t.l.length||(t.i.i.length=0,D(t.l),t.l.length=0),t.j.ua())}function Tr(t,e,n){var r=sn(n);if(""!=r.i)e&&Ze(r,e+"."+r.i),tn(r,r.m);else{var i=f.location;r=on(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&j(t.aa,(function(t,e){nn(r,e,t)})),e=t.D,n=t.sa,e&&n&&nn(r,e,n),nn(r,"VER",t.ma),fr(t,r),r}function Sr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new $n(new Mn({ib:!0})):new $n(t.qa),e.L=t.H,e}function kr(){}function Cr(){if(W&&!(10<=Number(at)))throw Error("Environmental error: no available transport.")}function Ar(t,e){Dt.call(this),this.g=new sr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!P(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!P(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Or(this)}function Rr(t){Te.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Nr(){Se.call(this),this.status=1}function Or(t){this.g=t}l=$n.prototype,l.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ee.g(),this.C=this.u?_e(this.u):_e(Ee),this.g.onreadystatechange=E(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Jn(this,s)}t=n||"";var i=new ze(this.headers);r&&He(r,(function(t,e){i.set(e,t)})),r=N(i.T()),n=f.FormData&&t instanceof f.FormData,!(0<=A(Kn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Zn(this),0<this.B&&((this.K=Gn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=E(this.pa,this)):this.A=Jt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Jn(this,s)}},l.pa=function(){"undefined"!=typeof d&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pt(this,"timeout"),this.abort(8))},l.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pt(this,"complete"),Pt(this,"abort"),Qn(this))},l.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qn(this,!0)),$n.Z.M.call(this)},l.Fa=function(){this.s||(this.F||this.v||this.l?Yn(this):this.cb())},l.cb=function(){Yn(this)},l.ba=function(){try{return 2<tr(this)?this.g.status:-1}catch(t){return-1}},l.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},l.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Bn(e)}},l.Da=function(){return this.m},l.La=function(){return"string"===typeof this.j?this.j:String(this.j)},l=sr.prototype,l.ma=8,l.G=1,l.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},l.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;var e=new Ce(this,this.h,t,void 0),n=this.s;if(this.P&&(n?(n=q(n),$(n,this.P)):n=this.P),null===this.o&&(e.H=n),this.ja)t:{for(var r=0,i=0;i<this.l.length;i++){var s=this.l[i];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(r+=s,4096<r){r=i;break t}if(4096===r||i===this.l.length-1){r=i+1;break t}}r=1e3}else r=1e3;r=pr(this,e,r),i=Ye(this.F),nn(i,"RID",t),nn(i,"CVER",22),this.D&&nn(i,"X-HTTP-Session-Id",this.D),fr(this,i),this.o&&n&&rr(i,this.o,n),An(this.i,e),this.Ra&&nn(i,"TYPE","init"),this.ja?(nn(i,"$req",r),nn(i,"SID","null"),e.$=!0,De(e,i,null)):De(e,i,r),this.G=2}}else 3==this.G&&(t?dr(this,t):0==this.l.length||Sn(this.i)||dr(this))},l.Ga=function(){if(this.u=null,vr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=me(E(this.bb,this),t)}},l.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,pe(10),ar(this),vr(this))},l.ab=function(){null!=this.v&&(this.v=null,ar(this),mr(this),pe(19))},l.jb=function(t){t?(this.h.info("Successfully pinged google.com"),pe(2)):(this.h.info("Failed to ping google.com"),pe(1))},l=kr.prototype,l.xa=function(){},l.wa=function(){},l.va=function(){},l.ua=function(){},l.Oa=function(){},Cr.prototype.g=function(t,e){return new Ar(t,e)},T(Ar,Dt),Ar.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Bt(E(t.hb,t,e))),pe(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Tr(t,null,t.W),lr(t)},Ar.prototype.close=function(){or(this.g)},Ar.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ur(this.g,e)}else this.v?(e={},e.__data__=xt(t),ur(this.g,e)):ur(this.g,t)},Ar.prototype.M=function(){this.g.j=null,delete this.j,or(this.g),delete this.g,Ar.Z.M.call(this)},T(Rr,Te),T(Nr,Se),T(Or,kr),Or.prototype.xa=function(){Pt(this.g,"a")},Or.prototype.wa=function(t){Pt(this.g,new Rr(t))},Or.prototype.va=function(t){Pt(this.g,new Nr(t))},Or.prototype.ua=function(){Pt(this.g,"b")},Cr.prototype.createWebChannel=Cr.prototype.g,Ar.prototype.send=Ar.prototype.u,Ar.prototype.open=Ar.prototype.m,Ar.prototype.close=Ar.prototype.close,ye.NO_ERROR=0,ye.TIMEOUT=8,ye.HTTP_ERROR=6,ve.COMPLETE="complete",be.EventType=Ie,Ie.OPEN="a",Ie.CLOSE="b",Ie.ERROR="c",Ie.MESSAGE="d",Dt.prototype.listen=Dt.prototype.N,$n.prototype.listenOnce=$n.prototype.O,$n.prototype.getLastError=$n.prototype.La,$n.prototype.getLastErrorCode=$n.prototype.Da,$n.prototype.getStatus=$n.prototype.ba,$n.prototype.getResponseJson=$n.prototype.Qa,$n.prototype.getResponseText=$n.prototype.ga,$n.prototype.send=$n.prototype.ea;var Dr=function(){return new Cr},Pr=function(){return le()},Lr=ye,xr=ve,Mr=ce,Ur={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Fr=Mn,Vr=be,jr=$n;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}qr.UNAUTHENTICATED=new qr(null),qr.GOOGLE_CREDENTIALS=new qr("google-credentials-uid"),qr.FIRST_PARTY=new qr("first-party-uid"),qr.MOCK_USER=new qr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Br="9.0.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new s.Yd("@firebase/firestore");function Hr(){return $r.logLevel}function zr(t,...e){if($r.logLevel<=s["in"].DEBUG){const n=e.map(Wr);$r.debug(`Firestore (${Br}): ${t}`,...n)}}function Kr(t,...e){if($r.logLevel<=s["in"].ERROR){const n=e.map(Wr);$r.error(`Firestore (${Br}): ${t}`,...n)}}function Gr(t,...e){if($r.logLevel<=s["in"].WARN){const n=e.map(Wr);$r.warn(`Firestore (${Br}): ${t}`,...n)}}function Wr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t="Unexpected state"){const e=`FIRESTORE (${Br}) INTERNAL ASSERTION FAILED: `+t;throw Kr(e),new Error(e)}function Xr(t,e){t||Jr()}function Yr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Zr extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${t}`}}class ni{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(qr.UNAUTHENTICATED)))}shutdown(){}}class ri{constructor(t){this.t=t,this.currentUser=qr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new ti;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ti,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{zr("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(zr("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ti)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(zr("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Xr("string"==typeof e.accessToken),new ei(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Xr(null===t||"string"==typeof t),new qr(t)}}class ii{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=qr.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class si{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ii(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(qr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oi.T=-1;class ci{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=ai(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function ui(t,e){return t<e?-1:t>e?1:0}function li(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Zr(Qr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Zr(Qr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Zr(Qr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Zr(Qr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return hi.fromMillis(Date.now())}static fromDate(t){return hi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new hi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ui(this.nanoseconds,t.nanoseconds):ui(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t){this.timestamp=t}static fromTimestamp(t){return new di(t)}static min(){return new di(new hi(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function pi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t,e,n){void 0===e?e=0:e>t.length&&Jr(),void 0===n?n=t.length-e:n>t.length-e&&Jr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===mi.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof mi?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class yi extends mi{construct(t,e,n){return new yi(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Zr(Qr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new yi(e)}static emptyPath(){return new yi([])}}const vi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wi extends mi{construct(t,e,n){return new wi(t,e,n)}static isValidIdentifier(t){return vi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wi.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new wi(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Zr(Qr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Zr(Qr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Zr(Qr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Zr(Qr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new wi(e)}static emptyPath(){return new wi([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _i{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new _i(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new _i(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ui(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}_i.EMPTY_BYTE_STRING=new _i("");const bi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ei(t){if(Xr(!!t),"string"==typeof t){let e=0;const n=bi.exec(t);if(Xr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ii(t.seconds),nanos:Ii(t.nanos)}}function Ii(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ti(t){return"string"==typeof t?_i.fromBase64String(t):_i.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ki(t){const e=t.mapValue.fields.__previous_value__;return Si(e)?ki(e):e}function Ci(t){const e=Ei(t.mapValue.fields.__local_write_time__.timestampValue);return new hi(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t){return null==t}function Ri(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ni{constructor(t){this.path=t}static fromPath(t){return new Ni(yi.fromString(t))}static fromName(t){return new Ni(yi.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===yi.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return yi.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ni(new yi(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Si(t)?4:10:Jr()}function Di(t,e){const n=Oi(t);if(n!==Oi(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ci(t).isEqual(Ci(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ei(t.timestampValue),r=Ei(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ti(t.bytesValue).isEqual(Ti(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ii(t.geoPointValue.latitude)===Ii(e.geoPointValue.latitude)&&Ii(t.geoPointValue.longitude)===Ii(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ii(t.integerValue)===Ii(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ii(t.doubleValue),r=Ii(e.doubleValue);return n===r?Ri(n)===Ri(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return li(t.arrayValue.values||[],e.arrayValue.values||[],Di);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(fi(n)!==fi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Di(n[i],r[i])))return!1;return!0}(t,e);default:return Jr()}}function Pi(t,e){return void 0!==(t.values||[]).find((t=>Di(t,e)))}function Li(t,e){const n=Oi(t),r=Oi(e);if(n!==r)return ui(n,r);switch(n){case 0:return 0;case 1:return ui(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ii(t.integerValue||t.doubleValue),r=Ii(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return xi(t.timestampValue,e.timestampValue);case 4:return xi(Ci(t),Ci(e));case 5:return ui(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ti(t),r=Ti(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=ui(n[i],r[i]);if(0!==t)return t}return ui(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ui(Ii(t.latitude),Ii(e.latitude));return 0!==n?n:ui(Ii(t.longitude),Ii(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Li(n[i],r[i]);if(t)return t}return ui(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=ui(r[o],s[o]);if(0!==t)return t;const e=Li(n[r[o]],i[s[o]]);if(0!==e)return e}return ui(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Jr()}}function xi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ui(t,e);const n=Ei(t),r=Ei(e),i=ui(n.seconds,r.seconds);return 0!==i?i:ui(n.nanos,r.nanos)}function Mi(t){return Ui(t)}function Ui(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ei(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ti(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Ni.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Ui(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Ui(t.fields[i])}`;return n+"}"}(t.mapValue):Jr();var e,n}function Fi(t){return!!t&&"integerValue"in t}function Vi(t){return!!t&&"arrayValue"in t}function ji(t){return!!t&&"nullValue"in t}function qi(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bi(t){return!!t&&"mapValue"in t}function $i(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return pi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=$i(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$i(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t){this.value=t}static empty(){return new Hi({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Bi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=$i(e)}setAll(t){let e=wi.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=$i(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Bi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Di(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Bi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){pi(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Hi($i(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zi{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new zi(t,0,di.min(),Hi.empty(),0)}static newFoundDocument(t,e,n){return new zi(t,1,e,n,0)}static newNoDocument(t,e){return new zi(t,2,e,Hi.empty(),0)}static newUnknownDocument(t,e){return new zi(t,3,e,Hi.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Hi.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Hi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof zi&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new zi(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.A=null}}function Gi(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Ki(t,e,n,r,i,s,o)}function Wi(t){const e=Yr(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Zi(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ai(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=us(e.startAt)),e.endAt&&(t+="|ub:",t+=us(e.endAt)),e.A=t}return e.A}function Ji(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Mi(e.value)}`;var e})).join(", ")}]`),Ai(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: "+us(t.startAt)),t.endAt&&(e+=", endAt: "+us(t.endAt)),`Target(${e})`}function Xi(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!hs(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Di(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!fs(t.startAt,e.startAt)&&fs(t.endAt,e.endAt)}function Yi(t){return Ni.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Qi extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new ts(t,e,n):"array-contains"===e?new is(t,n):"in"===e?new ss(t,n):"not-in"===e?new os(t,n):"array-contains-any"===e?new as(t,n):new Qi(t,e,n)}static R(t,e,n){return"in"===e?new es(t,n):new ns(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(Li(e,this.value)):null!==e&&Oi(this.value)===Oi(e)&&this.P(Li(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Jr()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Zi(t){return t.field.canonicalString()+t.op.toString()+Mi(t.value)}class ts extends Qi{constructor(t,e,n){super(t,e,n),this.key=Ni.fromName(n.referenceValue)}matches(t){const e=Ni.comparator(t.key,this.key);return this.P(e)}}class es extends Qi{constructor(t,e){super(t,"in",e),this.keys=rs("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ns extends Qi{constructor(t,e){super(t,"not-in",e),this.keys=rs("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function rs(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Ni.fromName(t.referenceValue)))}class is extends Qi{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Vi(e)&&Pi(e.arrayValue,this.value)}}class ss extends Qi{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Pi(this.value.arrayValue,e)}}class os extends Qi{constructor(t,e){super(t,"not-in",e)}matches(t){if(Pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Pi(this.value.arrayValue,e)}}class as extends Qi{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Vi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Pi(this.value.arrayValue,t)))}}class cs{constructor(t,e){this.position=t,this.before=e}}function us(t){return`${t.before?"b":"a"}:${t.position.map((t=>Mi(t))).join(",")}`}class ls{constructor(t,e="asc"){this.field=t,this.dir=e}}function hs(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ds(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Ni.comparator(Ni.fromName(o.referenceValue),n.key):Li(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function fs(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Di(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function gs(t,e,n,r,i,s,o,a){return new ps(t,e,n,r,i,s,o,a)}function ms(t){return new ps(t)}function ys(t){return!Ai(t.limit)&&"F"===t.limitType}function vs(t){return!Ai(t.limit)&&"L"===t.limitType}function ws(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function _s(t){for(const e of t.filters)if(e.v())return e.field;return null}function bs(t){return null!==t.collectionGroup}function Es(t){const e=Yr(t);if(null===e.V){e.V=[];const t=_s(e),n=ws(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new ls(t)),e.V.push(new ls(wi.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new ls(wi.keyField(),t))}}}return e.V}function Is(t){const e=Yr(t);if(!e.S)if("F"===e.limitType)e.S=Gi(e.path,e.collectionGroup,Es(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Es(e)){const e="desc"===i.dir?"asc":"desc";t.push(new ls(i.field,e))}const n=e.endAt?new cs(e.endAt.position,!e.endAt.before):null,r=e.startAt?new cs(e.startAt.position,!e.startAt.before):null;e.S=Gi(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}function Ts(t,e,n){return new ps(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ss(t,e){return Xi(Is(t),Is(e))&&t.limitType===e.limitType}function ks(t){return`${Wi(Is(t))}|lt:${t.limitType}`}function Cs(t){return`Query(target=${Ji(Is(t))}; limitType=${t.limitType})`}function As(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Ni.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!ds(t.startAt,Es(t),e))&&(!t.endAt||!ds(t.endAt,Es(t),e))}(t,e)}function Rs(t){return(e,n)=>{let r=!1;for(const i of Es(t)){const t=Ns(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Ns(t,e,n){const r=t.field.isKeyField()?Ni.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Li(r,i):Jr()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Jr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ri(e)?"-0":e}}function Ds(t){return{integerValue:""+t}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(){this._=void 0}}function Ls(t,e,n){return t instanceof Us?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Fs?Vs(t,e):t instanceof js?qs(t,e):function(t,e){const n=Ms(t,e),r=$s(n)+$s(t.C);return Fi(n)&&Fi(t.C)?Ds(r):Os(t.N,r)}(t,e)}function xs(t,e,n){return t instanceof Fs?Vs(t,e):t instanceof js?qs(t,e):n}function Ms(t,e){return t instanceof Bs?Fi(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Us extends Ps{}class Fs extends Ps{constructor(t){super(),this.elements=t}}function Vs(t,e){const n=Hs(e);for(const r of t.elements)n.some((t=>Di(t,r)))||n.push(r);return{arrayValue:{values:n}}}class js extends Ps{constructor(t){super(),this.elements=t}}function qs(t,e){let n=Hs(e);for(const r of t.elements)n=n.filter((t=>!Di(t,r)));return{arrayValue:{values:n}}}class Bs extends Ps{constructor(t,e){super(),this.N=t,this.C=e}}function $s(t){return Ii(t.integerValue||t.doubleValue)}function Hs(t){return Vi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Fs&&e instanceof Fs||t instanceof js&&e instanceof js?li(t.elements,e.elements,Di):t instanceof Bs&&e instanceof Bs?Di(t.C,e.C):t instanceof Us&&e instanceof Us}(t.transform,e.transform)}function Ks(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Gs{}function Ws(t,e,n){t instanceof Qs?function(t,e,n){const r=t.value.clone(),i=eo(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Zs?function(t,e,n){if(!Ks(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=eo(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(to(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Js(t,e,n){t instanceof Qs?function(t,e,n){if(!Ks(t.precondition,e))return;const r=t.value.clone(),i=no(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(Ys(e),r).setHasLocalMutations()}(t,e,n):t instanceof Zs?function(t,e,n){if(!Ks(t.precondition,e))return;const r=no(t.fieldTransforms,n,e),i=e.data;i.setAll(to(t)),i.setAll(r),e.convertToFoundDocument(Ys(e),i).setHasLocalMutations()}(t,e,n):function(t,e){Ks(t.precondition,e)&&e.convertToNoDocument(di.min())}(t,e)}function Xs(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&li(t,e,((t,e)=>zs(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Ys(t){return t.isFoundDocument()?t.version:di.min()}class Qs extends Gs{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Zs extends Gs{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function to(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function eo(t,e,n){const r=new Map;Xr(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,xs(o,a,n[i]))}return r}function no(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Ls(t,s,e))}return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ro{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var io,so;function oo(t){if(void 0===t)return Kr("GRPC error has no .code"),Qr.UNKNOWN;switch(t){case io.OK:return Qr.OK;case io.CANCELLED:return Qr.CANCELLED;case io.UNKNOWN:return Qr.UNKNOWN;case io.DEADLINE_EXCEEDED:return Qr.DEADLINE_EXCEEDED;case io.RESOURCE_EXHAUSTED:return Qr.RESOURCE_EXHAUSTED;case io.INTERNAL:return Qr.INTERNAL;case io.UNAVAILABLE:return Qr.UNAVAILABLE;case io.UNAUTHENTICATED:return Qr.UNAUTHENTICATED;case io.INVALID_ARGUMENT:return Qr.INVALID_ARGUMENT;case io.NOT_FOUND:return Qr.NOT_FOUND;case io.ALREADY_EXISTS:return Qr.ALREADY_EXISTS;case io.PERMISSION_DENIED:return Qr.PERMISSION_DENIED;case io.FAILED_PRECONDITION:return Qr.FAILED_PRECONDITION;case io.ABORTED:return Qr.ABORTED;case io.OUT_OF_RANGE:return Qr.OUT_OF_RANGE;case io.UNIMPLEMENTED:return Qr.UNIMPLEMENTED;case io.DATA_LOSS:return Qr.DATA_LOSS;default:return Jr()}}(so=io||(io={}))[so.OK=0]="OK",so[so.CANCELLED=1]="CANCELLED",so[so.UNKNOWN=2]="UNKNOWN",so[so.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",so[so.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",so[so.NOT_FOUND=5]="NOT_FOUND",so[so.ALREADY_EXISTS=6]="ALREADY_EXISTS",so[so.PERMISSION_DENIED=7]="PERMISSION_DENIED",so[so.UNAUTHENTICATED=16]="UNAUTHENTICATED",so[so.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",so[so.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",so[so.ABORTED=10]="ABORTED",so[so.OUT_OF_RANGE=11]="OUT_OF_RANGE",so[so.UNIMPLEMENTED=12]="UNIMPLEMENTED",so[so.INTERNAL=13]="INTERNAL",so[so.UNAVAILABLE=14]="UNAVAILABLE",so[so.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ao{constructor(t,e){this.comparator=t,this.root=e||uo.EMPTY}insert(t,e){return new ao(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,uo.BLACK,null,null))}remove(t){return new ao(this.comparator,this.root.remove(t,this.comparator).copy(null,null,uo.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new co(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new co(this.root,t,this.comparator,!1)}getReverseIterator(){return new co(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new co(this.root,t,this.comparator,!0)}}class co{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class uo{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:uo.RED,this.left=null!=r?r:uo.EMPTY,this.right=null!=i?i:uo.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new uo(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return uo.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return uo.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,uo.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,uo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Jr();if(this.right.isRed())throw Jr();const t=this.left.check();if(t!==this.right.check())throw Jr();return t+(this.isRed()?0:1)}}uo.EMPTY=null,uo.RED=!0,uo.BLACK=!1,uo.EMPTY=new class{constructor(){this.size=0}get key(){throw Jr()}get value(){throw Jr()}get color(){throw Jr()}get left(){throw Jr()}get right(){throw Jr()}copy(t,e,n,r,i){return this}insert(t,e,n){return new uo(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lo{constructor(t){this.comparator=t,this.data=new ao(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ho(this.data.getIterator())}getIteratorFrom(t){return new ho(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof lo))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new lo(this.comparator);return e.data=t,e}}class ho{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new ao(Ni.comparator);function po(){return fo}const go=new ao(Ni.comparator);function mo(){return go}new ao(Ni.comparator);const yo=new lo(Ni.comparator);function vo(...t){let e=yo;for(const n of t)e=e.add(n);return e}const wo=new lo(ui);function _o(){return wo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Eo.createSynthesizedTargetChangeForCurrentChange(t,e)),new bo(di.min(),n,_o(),po(),vo())}}class Eo{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Eo(_i.EMPTY_BYTE_STRING,e,vo(),vo(),vo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t,e,n,r){this.k=t,this.removedTargetIds=e,this.key=n,this.$=r}}class To{constructor(t,e){this.targetId=t,this.O=e}}class So{constructor(t,e,n=_i.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class ko{constructor(){this.F=0,this.M=Ro(),this.L=_i.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=vo(),e=vo(),n=vo();return this.M.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Jr()}})),new Eo(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=Ro()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class Co{constructor(t){this.tt=t,this.et=new Map,this.nt=po(),this.st=Ao(),this.it=new lo(ui)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ct(t){this.forEachTarget(t,(e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:Jr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach(((t,n)=>{this.ht(n)&&e(n)}))}ft(t){const e=t.targetId,n=t.O.count,r=this.dt(e);if(r){const t=r.target;if(Yi(t))if(0===n){const n=new Ni(t.path);this.at(e,n,zi.newNoDocument(n,di.min()))}else Xr(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach(((n,r)=>{const i=this.dt(r);if(i){if(n.current&&Yi(i.target)){const e=new Ni(i.target.path);null!==this.nt.get(e)||this.gt(r,e)||this.at(r,e,zi.newNoDocument(e,t))}n.K&&(e.set(r,n.W()),n.G())}}));let n=vo();this.st.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.dt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))}));const r=new bo(t,e,this.it,this.nt,n);return this.nt=po(),this.st=Ao(),this.it=new lo(ui),r}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}at(t,e,n){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,e)?r.H(e,1):r.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new ko,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new lo(ui),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||zr("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Et(t)}lt(t){this.et.set(t,new ko),this.tt.getRemoteKeysForTarget(t).forEach((e=>{this.at(t,e,null)}))}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function Ao(){return new ao(Ni.comparator)}function Ro(){return new ao(Ni.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Oo=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Do{constructor(t,e){this.databaseId=t,this.D=e}}function Po(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lo(t,e){return t.D?e.toBase64():e.toUint8Array()}function xo(t){return Xr(!!t),di.fromTimestamp(function(t){const e=Ei(t);return new hi(e.seconds,e.nanos)}(t))}function Mo(t,e){return function(t){return new yi(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Uo(t){const e=yi.fromString(t);return Xr(ra(e)),e}function Fo(t,e){const n=Uo(e);if(n.get(1)!==t.databaseId.projectId)throw new Zr(Qr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Zr(Qr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ni(Bo(n))}function Vo(t,e){return Mo(t.databaseId,e)}function jo(t){const e=Uo(t);return 4===e.length?yi.emptyPath():Bo(e)}function qo(t){return new yi(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Bo(t){return Xr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function $o(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Jr()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.D?(Xr(void 0===e||"string"==typeof e),_i.fromBase64String(e||"")):(Xr(void 0===e||e instanceof Uint8Array),_i.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Qr.UNKNOWN:oo(t.code);return new Zr(e,t.message||"")}(o);n=new So(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fo(t,r.document.name),s=xo(r.document.updateTime),o=new Hi({mapValue:{fields:r.document.fields}}),a=zi.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Io(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Fo(t,r.document),s=r.readTime?xo(r.readTime):di.min(),o=zi.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Io([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Fo(t,r.document),s=r.removedTargetIds||[];n=new Io([],s,i,null)}else{if(!("filter"in e))return Jr();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new ro(r),s=t.targetId;n=new To(s,i)}}return n}function Ho(t,e){return{documents:[Vo(t,e.path)]}}function zo(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Vo(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Vo(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(qi(t.value))return{unaryFilter:{field:Zo(t.field),op:"IS_NAN"}};if(ji(t.value))return{unaryFilter:{field:Zo(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(qi(t.value))return{unaryFilter:{field:Zo(t.field),op:"IS_NOT_NAN"}};if(ji(t.value))return{unaryFilter:{field:Zo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zo(t.field),op:Qo(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Zo(t.field),direction:Yo(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.D||Ai(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Jo(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Jo(e.endAt)),n}function Ko(t){let e=jo(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Xr(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Wo(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new ls(ta(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ai(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Xo(n.startAt));let u=null;return n.endAt&&(u=Xo(n.endAt)),gs(e,i,o,s,a,"F",c,u)}function Go(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Jr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Wo(t){return t?void 0!==t.unaryFilter?[na(t)]:void 0!==t.fieldFilter?[ea(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Wo(t))).reduce(((t,e)=>t.concat(e))):Jr():[]}function Jo(t){return{before:t.before,values:t.position}}function Xo(t){const e=!!t.before,n=t.values||[];return new cs(n,e)}function Yo(t){return No[t]}function Qo(t){return Oo[t]}function Zo(t){return{fieldPath:t.canonicalString()}}function ta(t){return wi.fromServerFormat(t.fieldPath)}function ea(t){return Qi.create(ta(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return Jr()}}(t.fieldFilter.op),t.fieldFilter.value)}function na(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ta(t.unaryFilter.field);return Qi.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ta(t.unaryFilter.field);return Qi.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ta(t.unaryFilter.field);return Qi.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ta(t.unaryFilter.field);return Qi.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return Jr()}}function ra(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=oa(e)),e=sa(t.get(n),e);return oa(e)}function sa(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function oa(t){return t+""}class aa{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}aa.store="owner",aa.key="owner";class ca{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}ca.store="mutationQueues",ca.keyPath="userId";class ua{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}ua.store="mutations",ua.keyPath="batchId",ua.userMutationsIndex="userMutationsIndex",ua.userMutationsKeyPath=["userId","batchId"];class la{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,ia(e)]}static key(t,e,n){return[t,ia(e),n]}}la.store="documentMutations",la.PLACEHOLDER=new la;class ha{constructor(t,e,n,r,i,s){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}ha.store="remoteDocuments",ha.readTimeIndex="readTimeIndex",ha.readTimeIndexPath="readTime",ha.collectionReadTimeIndex="collectionReadTimeIndex",ha.collectionReadTimeIndexPath=["parentPath","readTime"];class da{constructor(t){this.byteSize=t}}da.store="remoteDocumentGlobal",da.key="remoteDocumentGlobalKey";class fa{constructor(t,e,n,r,i,s,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}fa.store="targets",fa.keyPath="targetId",fa.queryTargetsIndexName="queryTargetsIndex",fa.queryTargetsKeyPath=["canonicalId","targetId"];class pa{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}pa.store="targetDocuments",pa.keyPath=["targetId","path"],pa.documentTargetsIndex="documentTargetsIndex",pa.documentTargetsKeyPath=["path","targetId"];class ga{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}ga.key="targetGlobalKey",ga.store="targetGlobal";class ma{constructor(t,e){this.collectionId=t,this.parent=e}}ma.store="collectionParents",ma.keyPath=["collectionId","parent"];class ya{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}ya.store="clientMetadata",ya.keyPath="clientId";class va{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}va.store="bundles",va.keyPath="bundleId";class wa{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}wa.store="namedQueries",wa.keyPath="name";ca.store,ua.store,la.store,ha.store,fa.store,aa.store,ga.store,pa.store,ya.store,da.store,ma.store,va.store,wa.store;const _a="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ba{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Jr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ea(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ea?e:Ea.resolve(e)}catch(t){return Ea.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ea.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ea.reject(e)}static resolve(t){return new Ea(((e,n)=>{e(t)}))}static reject(t){return new Ea(((e,n)=>{n(t)}))}static waitFor(t){return new Ea(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Ea.resolve(!1);for(const n of t)e=e.next((t=>t?Ea.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ta{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Ws(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Js(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Js(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(di.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),vo())}isEqual(t){return this.batchId===t.batchId&&li(this.mutations,t.mutations,((t,e)=>Xs(t,e)))&&li(this.baseMutations,t.baseMutations,((t,e)=>Xs(t,e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sa{constructor(t,e,n,r,i=di.min(),s=di.min(),o=_i.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Sa(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Sa(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Sa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t){this.Wt=t}}function Ca(t){const e=Ko({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ts(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Aa{constructor(){this.Gt=new Ra}addToCollectionParentIndex(t,e){return this.Gt.add(e),Ea.resolve()}getCollectionParents(t,e){return Ea.resolve(this.Gt.getEntries(e))}}class Ra{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new lo(yi.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new lo(yi.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Na(t,Na.DEFAULT_COLLECTION_PERCENTILE,Na.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Na.DEFAULT_COLLECTION_PERCENTILE=10,Na.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Na.DEFAULT=new Na(41943040,Na.DEFAULT_COLLECTION_PERCENTILE,Na.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Na.DISABLED=new Na(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oa{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new Oa(0)}static ie(){return new Oa(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Da(t){if(t.code!==Qr.FAILED_PRECONDITION||t.message!==_a)throw t;zr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pa{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){pi(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return gi(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.changes=new Pa((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:di.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:zi.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ea.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xa{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Rn(t,e,n)))}Rn(t,e,n){return this.He.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}bn(t,e){t.forEach(((t,n)=>{for(const r of e)r.applyToLocalView(n)}))}Pn(t,e){return this.He.getEntries(t,e).next((e=>this.vn(t,e).next((()=>e))))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.bn(e,t)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Ni.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):bs(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new Ni(e)).next((t=>{let e=mo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Sn(t,e,n){const r=e.collectionGroup;let i=mo();return this.Ht.getCollectionParents(t,r).next((s=>Ea.forEach(s,(s=>{const o=function(t,e){return new ps(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.Dn(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}Dn(t,e,n){let r,i;return this.He.getDocumentsMatchingQuery(t,e,n).next((n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(i=e,this.Cn(t,i,r).next((t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=zi.newInvalidDocument(n),r=r.insert(n,i)),Js(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((t,n)=>{As(e,n)||(r=r.remove(t))})),r)))}Cn(t,e,n){let r=vo();for(const s of e)for(const t of s.mutations)t instanceof Zs&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.He.getEntries(t,r).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=r}static kn(t,e){let n=vo(),r=vo();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ma(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(di.min())?this.Fn(t,e):this.On.Pn(t,r).next((i=>{const o=this.Mn(e,i);return(ys(e)||vs(e))&&this.Ln(e.limitType,o,r,n)?this.Fn(t,e):(Hr()<=s["in"].DEBUG&&zr("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Cs(e)),this.On.getDocumentsMatchingQuery(t,e,n).next((t=>(o.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}Mn(t,e){let n=new lo(Rs(t));return e.forEach(((e,r)=>{As(t,r)&&(n=n.add(r))})),n}Ln(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(t,e){return Hr()<=s["in"].DEBUG&&zr("QueryEngine","Using full collection scan to execute query:",Cs(e)),this.On.getDocumentsMatchingQuery(t,e,di.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t,e,n,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new ao(ui),this.qn=new Pa((t=>Wi(t)),Xi),this.Kn=di.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new xa(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Un)))}}function Va(t,e,n,r){return new Fa(t,e,n,r)}async function ja(t,e){const n=Yr(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.In.getAllMutationBatches(t).next((o=>(s=o,r=n.persistence.getMutationQueue(e),i=new xa(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t)))).next((e=>{const n=[],r=[];let o=vo();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.Pn(t,o).next((t=>({Wn:t,removedBatchIds:n,addedBatchIds:r})))}))}));return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function qa(t){const e=Yr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ze.getLastRemoteSnapshotVersion(t)))}function Ba(t,e){const n=Yr(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const o=[];e.targetChanges.forEach(((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(t,e.removedDocuments,s).next((()=>n.ze.addMatchingKeys(t,e.addedDocuments,s))));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,u),function(t,e,n){return Xr(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&o.push(n.ze.updateTargetData(t,u))}}));let a=po();if(e.documentUpdates.forEach(((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push($a(t,s,e.documentUpdates,r,void 0).next((t=>{a=t}))),!r.isEqual(di.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next((e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Ea.waitFor(o).next((()=>s.apply(t))).next((()=>n.Qn.vn(t,a))).next((()=>a))})).then((t=>(n.Un=i,t)))}function $a(t,e,n,r,i){let s=vo();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=po();return n.forEach(((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(di.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}function Ha(t,e){const n=Yr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.ze.getTargetData(t,e).next((i=>i?(r=i,Ea.resolve(r)):n.ze.allocateTargetId(t).next((i=>(r=new Sa(e,i,0,t.currentSequenceNumber),n.ze.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Un.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t}))}async function za(t,e,n){const r=Yr(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Ia(t))throw t;zr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function Ka(t,e,n){const r=Yr(t);let i=di.min(),s=vo();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Yr(t),i=r.qn.get(n);return void 0!==i?Ea.resolve(r.Un.get(i)):r.ze.getTargetData(e,n)}(r,t,Is(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Bn.getDocumentsMatchingQuery(t,e,n?i:di.min(),n?s:vo()))).next((t=>({documents:t,Gn:s})))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ga{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return Ea.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:xo(n.createTime)}),Ea.resolve()}getNamedQuery(t,e){return Ea.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:Ca(t.bundledQuery),readTime:xo(t.readTime)}}(e)),Ea.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(){this.Zn=new lo(Ja.ts),this.es=new lo(Ja.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Ja(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new Ja(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}cs(t){const e=new Ni(new yi([])),n=new Ja(e,t),r=new Ja(e,t+1),i=[];return this.es.forEachInRange([n,r],(t=>{this.rs(t),i.push(t.key)})),i}us(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new Ni(new yi([])),n=new Ja(e,t),r=new Ja(e,t+1);let i=vo();return this.es.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Ja(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ja{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return Ni.comparator(t.key,e.key)||ui(t.ls,e.ls)}static ns(t,e){return ui(t.ls,e.ls)||Ni.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new lo(Ja.ts)}checkEmpty(t){return Ea.resolve(0===this.In.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new Ta(i,e,n,r);this.In.push(s);for(const o of r)this.ds=this.ds.add(new Ja(o.key,i)),this.Ht.addToCollectionParentIndex(t,o.key.path.popLast());return Ea.resolve(s)}lookupMutationBatch(t,e){return Ea.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this._s(n),i=r<0?0:r;return Ea.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return Ea.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return Ea.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ja(e,0),r=new Ja(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(t=>{const e=this.ws(t.ls);i.push(e)})),Ea.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new lo(ui);return e.forEach((t=>{const e=new Ja(t,0),r=new Ja(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],(t=>{n=n.add(t.ls)}))})),Ea.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Ni.isDocumentKey(i)||(i=i.child(""));const s=new Ja(new Ni(i),0);let o=new lo(ui);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)}),s),Ea.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this.ws(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Xr(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return Ea.forEach(e.mutations,(r=>{const i=new Ja(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ds=n}))}te(t){}containsKey(t,e){const n=new Ja(e,0),r=this.ds.firstAfterOrEqual(n);return Ea.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,Ea.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new ao(Ni.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ea.resolve(n?n.document.clone():zi.newInvalidDocument(e))}getEntries(t,e){let n=po();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():zi.newInvalidDocument(t))})),Ea.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=po();const i=new Ni(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||As(e,i)&&(r=r.insert(i.key,i.clone()))}return Ea.resolve(r)}Es(t,e){return Ea.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Qa(this)}getSize(t){return Ea.resolve(this.size)}}class Qa extends La{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(n))):this.Se.removeEntry(n)})),Ea.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t){this.persistence=t,this.Ts=new Pa((t=>Wi(t)),Xi),this.lastRemoteSnapshotVersion=di.min(),this.highestTargetId=0,this.Is=0,this.As=new Wa,this.targetCount=0,this.Rs=Oa.se()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),Ea.resolve()}getLastRemoteSnapshotVersion(t){return Ea.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ea.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Ea.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),Ea.resolve()}ae(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Oa(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,Ea.resolve()}updateTargetData(t,e){return this.ae(e),Ea.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,Ea.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Ea.waitFor(i).next((()=>r))}getTargetCount(t){return Ea.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Ea.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Ea.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Ea.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),Ea.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Ea.resolve(n)}containsKey(t,e){return Ea.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t,e){this.bs={},this.Le=new oi(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new Za(this),this.Ht=new Aa,this.He=function(t,e){return new Ya(t,e)}(this.Ht,(t=>this.referenceDelegate.Ps(t))),this.N=new ka(e),this.Je=new Ga(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Xa(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){zr("MemoryPersistence","Starting transaction:",t);const r=new ec(this.Le.next());return this.referenceDelegate.vs(),n(r).next((t=>this.referenceDelegate.Vs(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ss(t,e){return Ea.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class ec extends ba{constructor(t){super(),this.currentSequenceNumber=t}}class nc{constructor(t){this.persistence=t,this.Ds=new Wa,this.Cs=null}static Ns(t){return new nc(t)}get xs(){if(this.Cs)return this.Cs;throw Jr()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),Ea.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),Ea.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Ea.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach((t=>this.xs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ea.forEach(this.xs,(n=>{const r=Ni.fromPath(n);return this.ks(t,r).next((t=>{t||e.removeEntry(r)}))})).next((()=>(this.Cs=null,e.apply(t))))}updateLimboDocument(t,e){return this.ks(t,e).next((t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())}))}Ps(t){return 0}ks(t,e){return Ea.or([()=>Ea.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(){this.activeTargetIds=_o()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ic{constructor(){this.yi=new rc,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new rc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{Ei(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,r){const i=this.Bi(t,e);zr("RestConnection","Sending: ",i,n);const s={};return this.Ui(s,r),this.qi(t,i,s,n).then((t=>(zr("RestConnection","Received: ",t),t)),(e=>{throw Gr("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}Ki(t,e,n,r){return this.Li(t,e,n,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+Br,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=ac[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,r){return new Promise(((i,s)=>{const o=new jr;o.listenOnce(xr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Lr.NO_ERROR:const e=o.getResponseJson();zr("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Lr.TIMEOUT:zr("Connection",'RPC "'+t+'" timed out'),s(new Zr(Qr.DEADLINE_EXCEEDED,"Request time out"));break;case Lr.HTTP_ERROR:const n=o.getStatus();if(zr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Qr).indexOf(e)>=0?e:Qr.UNKNOWN}(t.status);s(new Zr(e,t.message))}else s(new Zr(Qr.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Zr(Qr.UNAVAILABLE,"Connection failed."));break;default:Jr()}}finally{zr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Dr(),i=Pr(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new Fr({})),this.Ui(s.initMessageHeaders,e),(0,o.uI)()||(0,o.b$)()||(0,o.d)()||(0,o.w1)()||(0,o.Mn)()||(0,o.ru)()||(s.httpHeadersOverwriteParam="$httpHeaders");const a=n.join("");zr("Connection","Creating WebChannel: "+a,s);const c=r.createWebChannel(a,s);let u=!1,l=!1;const h=new cc({vi:t=>{l?zr("Connection","Not sending because WebChannel is closed:",t):(u||(zr("Connection","Opening WebChannel transport."),c.open(),u=!0),zr("Connection","WebChannel sending:",t),c.send(t))},Vi:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,Vr.EventType.OPEN,(()=>{l||zr("Connection","WebChannel transport opened.")})),d(c,Vr.EventType.CLOSE,(()=>{l||(l=!0,zr("Connection","WebChannel transport closed"),h.$i())})),d(c,Vr.EventType.ERROR,(t=>{l||(l=!0,Gr("Connection","WebChannel transport errored:",t),h.$i(new Zr(Qr.UNAVAILABLE,"The operation could not be completed")))})),d(c,Vr.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];Xr(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){zr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=io[t];if(void 0!==e)return oo(e)}(t),n=i.message;void 0===e&&(e=Qr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),l=!0,h.$i(new Zr(e,n)),c.close()}else zr("Connection","WebChannel received:",n),h.Oi(n)}})),d(i,Mr.STAT_EVENT,(t=>{t.stat===Ur.PROXY?zr("Connection","Detected buffering proxy"):t.stat===Ur.NOPROXY&&zr("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.ki()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(t){return new Do(t,!0)}class dc{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&zr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Ji=Date.now(),t()))),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,e,n,r,i,s){this.Oe=t,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=s,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new dc(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,(()=>this.dr())))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===Qr.RESOURCE_EXHAUSTED?(Kr(e.toString()),Kr("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===Qr.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then((t=>{this.sr===e&&this.yr(t)}),(e=>{t((()=>{const t=new Zr(Qr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)}))}))}yr(t){const e=this.gr(this.sr);this.stream=this.Er(t),this.stream.Si((()=>{e((()=>(this.state=2,this.listener.Si())))})),this.stream.Ci((t=>{e((()=>this.pr(t)))})),this.stream.onMessage((t=>{e((()=>this.onMessage(t)))}))}ur(){this.state=4,this.rr.Xi((async()=>{this.state=0,this.start()}))}pr(t){return zr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget((()=>this.sr===t?e():(zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class pc extends fc{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,i),this.N=r}Er(t){return this.nr.ji("Listen",t)}onMessage(t){this.rr.reset();const e=$o(this.N,t),n=function(t){if(!("targetChange"in t))return di.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?di.min():e.readTime?xo(e.readTime):di.min()}(t);return this.listener.Tr(e,n)}Ir(t){const e={};e.database=qo(this.N),e.addTarget=function(t,e){let n;const r=e.target;return n=Yi(r)?{documents:Ho(t,r)}:{query:zo(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Lo(t,e.resumeToken):e.snapshotVersion.compareTo(di.min())>0&&(n.readTime=Po(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=Go(this.N,t);n&&(e.labels=n),this.wr(e)}Ar(t){const e={};e.database=qo(this.N),e.removeTarget=t,this.wr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gc extends class{}{constructor(t,e,n){super(),this.credentials=t,this.nr=e,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new Zr(Qr.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Li(t,e,n,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qr.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new Zr(Qr.UNKNOWN,t.toString())}))}Ki(t,e,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Ki(t,e,n,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qr.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new Zr(Qr.UNKNOWN,t.toString())}))}terminate(){this.Dr=!0}}class mc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve()))))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(Kr(e),this.$r=!1):zr("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei((t=>{n.enqueueAndForget((async()=>{kc(this)&&(zr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Yr(t);e.Kr.add(4),await wc(e),e.Wr.set("Unknown"),e.Kr.delete(4),await vc(e)}(this))}))})),this.Wr=new mc(n,r)}}async function vc(t){if(kc(t))for(const e of t.jr)await e(!0)}async function wc(t){for(const e of t.jr)await e(!1)}function _c(t,e){const n=Yr(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),Sc(n)?Tc(n):Pc(n).cr()&&Ec(n,e))}function bc(t,e){const n=Yr(t),r=Pc(n);n.qr.delete(e),r.cr()&&Ic(n,e),0===n.qr.size&&(r.cr()?r.lr():kc(n)&&n.Wr.set("Unknown"))}function Ec(t,e){t.Gr.Y(e.targetId),Pc(t).Ir(e)}function Ic(t,e){t.Gr.Y(e),Pc(t).Ar(e)}function Tc(t){t.Gr=new Co({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.qr.get(e)||null}),Pc(t).start(),t.Wr.Or()}function Sc(t){return kc(t)&&!Pc(t).ar()&&t.qr.size>0}function kc(t){return 0===Yr(t).Kr.size}function Cc(t){t.Gr=void 0}async function Ac(t){t.qr.forEach(((e,n)=>{Ec(t,e)}))}async function Rc(t,e){Cc(t),Sc(t)?(t.Wr.Lr(e),Tc(t)):t.Wr.set("Unknown")}async function Nc(t,e,n){if(t.Wr.set("Online"),e instanceof So&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.qr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.qr.delete(r),t.Gr.removeTarget(r))}(t,e)}catch(n){zr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Oc(t,n)}else if(e instanceof Io?t.Gr.rt(e):e instanceof To?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(di.min()))try{const e=await qa(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Gr._t(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.qr.get(r);i&&t.qr.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.qr.get(e);if(!n)return;t.qr.set(e,n.withResumeToken(_i.EMPTY_BYTE_STRING,n.snapshotVersion)),Ic(t,e);const r=new Sa(n.target,e,1,n.sequenceNumber);Ec(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){zr("RemoteStore","Failed to raise snapshot:",e),await Oc(t,e)}}async function Oc(t,e,n){if(!Ia(e))throw e;t.Kr.add(1),await wc(t),t.Wr.set("Offline"),n||(n=()=>qa(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{zr("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await vc(t)}))}async function Dc(t,e){const n=Yr(t);e?(n.Kr.delete(2),await vc(n)):e||(n.Kr.add(2),await wc(n),n.Wr.set("Unknown"))}function Pc(t){return t.zr||(t.zr=function(t,e,n){const r=Yr(t);return r.Cr(),new pc(e,r.nr,r.credentials,r.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Si:Ac.bind(null,t),Ci:Rc.bind(null,t),Tr:Nc.bind(null,t)}),t.jr.push((async e=>{e?(t.zr.hr(),Sc(t)?Tc(t):t.Wr.set("Unknown")):(await t.zr.stop(),Cc(t))}))),t.zr}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lc{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Lc(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Zr(Qr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xc(t,e){if(Kr("AsyncQueue",`${e}: ${t}`),Ia(t))return new Zr(Qr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Ni.comparator(e.key,n.key):(t,e)=>Ni.comparator(t.key,e.key),this.keyedMap=mo(),this.sortedSet=new ao(this.comparator)}static emptySet(t){return new Mc(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Mc))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Mc;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(){this.Jr=new ao(Ni.comparator)}track(t){const e=t.doc.key,n=this.Jr.get(e);n?0!==t.type&&3===n.type?this.Jr=this.Jr.insert(e,t):3===t.type&&1!==n.type?this.Jr=this.Jr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jr=this.Jr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jr=this.Jr.remove(e):1===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):Jr():this.Jr=this.Jr.insert(e,t)}Yr(){const t=[];return this.Jr.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Fc{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Fc(t,e,Mc.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ss(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(){this.Xr=void 0,this.listeners=[]}}class jc{constructor(){this.queries=new Pa((t=>ks(t)),Ss),this.onlineState="Unknown",this.Zr=new Set}}async function qc(t,e){const n=Yr(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Vc),i)try{s.Xr=await n.onListen(r)}catch(t){const n=xc(t,`Initialization of query '${Cs(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.eo(n.onlineState),s.Xr&&e.no(s.Xr)&&zc(n)}async function Bc(t,e){const n=Yr(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function $c(t,e){const n=Yr(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.no(i)&&(r=!0);e.Xr=i}}r&&zc(n)}function Hc(t,e,n){const r=Yr(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function zc(t){t.Zr.forEach((t=>{t.next()}))}class Kc{constructor(t,e,n){this.query=t,this.so=e,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Fc(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.io?this.oo(t)&&(this.so.next(t),e=!0):this.ao(t,this.onlineState)&&(this.co(t),e=!0),this.ro=t,e}onError(t){this.so.error(t)}eo(t){this.onlineState=t;let e=!1;return this.ro&&!this.io&&this.ao(this.ro,t)&&(this.co(this.ro),e=!0),e}ao(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.uo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}oo(t){if(t.docChanges.length>0)return!0;const e=this.ro&&this.ro.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}co(t){t=Fc.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.io=!0,this.so.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gc{constructor(t){this.key=t}}class Wc{constructor(t){this.key=t}}class Jc{constructor(t,e){this.query=t,this._o=e,this.mo=null,this.current=!1,this.yo=vo(),this.mutatedKeys=vo(),this.po=Rs(t),this.Eo=new Mc(this.po)}get To(){return this._o}Io(t,e){const n=e?e.Ao:new Uc,r=e?e.Eo:this.Eo;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=ys(this.query)&&r.size===this.query.limit?r.last():null,c=vs(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=As(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Ro(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.po(l,a)>0||c&&this.po(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),ys(this.query)||vs(this.query))for(;s.size>this.query.limit;){const t=ys(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Eo:s,Ao:n,Ln:o,mutatedKeys:i}}Ro(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Eo;this.Eo=t.Eo,this.mutatedKeys=t.mutatedKeys;const i=t.Ao.Yr();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Jr()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.po(t.doc,e.doc))),this.bo(n);const s=e?this.Po():[],o=0===this.yo.size&&this.current?1:0,a=o!==this.mo;return this.mo=o,0!==i.length||a?{snapshot:new Fc(this.query,t.Eo,r,i,t.mutatedKeys,0===o,a,!1),vo:s}:{vo:s}}eo(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new Uc,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(t){return!this._o.has(t)&&!!this.Eo.has(t)&&!this.Eo.get(t).hasLocalMutations}bo(t){t&&(t.addedDocuments.forEach((t=>this._o=this._o.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this._o=this._o.delete(t))),this.current=t.current)}Po(){if(!this.current)return[];const t=this.yo;this.yo=vo(),this.Eo.forEach((t=>{this.Vo(t.key)&&(this.yo=this.yo.add(t.key))}));const e=[];return t.forEach((t=>{this.yo.has(t)||e.push(new Wc(t))})),this.yo.forEach((n=>{t.has(n)||e.push(new Gc(n))})),e}So(t){this._o=t.Gn,this.yo=vo();const e=this.Io(t.documents);return this.applyChanges(e,!0)}Do(){return Fc.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class Xc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Yc{constructor(t){this.key=t,this.Co=!1}}class Qc{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.No={},this.xo=new Pa((t=>ks(t)),Ss),this.ko=new Map,this.$o=new Set,this.Oo=new ao(Ni.comparator),this.Fo=new Map,this.Mo=new Wa,this.Lo={},this.Bo=new Map,this.Uo=Oa.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function Zc(t,e){const n=fu(t);let r,i;const s=n.xo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const t=await Ha(n.localStore,Is(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await tu(n,e,r,"current"===s),n.isPrimaryClient&&_c(n.remoteStore,t)}return i}async function tu(t,e,n,r){t.Ko=(e,n,r)=>async function(t,e,n,r){let i=e.view.Io(n);i.Ln&&(i=await Ka(t.localStore,e.query,!1).then((({documents:t})=>e.view.Io(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return au(t,e.targetId,o.vo),o.snapshot}(t,e,n,r);const i=await Ka(t.localStore,e,!0),s=new Jc(e,i.Gn),o=s.Io(i.documents),a=Eo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);au(t,n,c.vo);const u=new Xc(e,n,s);return t.xo.set(e,u),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}async function eu(t,e){const n=Yr(t),r=n.xo.get(e),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter((t=>!Ss(t,e)))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await za(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),bc(n.remoteStore,r.targetId),su(n,r.targetId)})).catch(Da)):(su(n,r.targetId),await za(n.localStore,r.targetId,!0))}async function nu(t,e){const n=Yr(t);try{const t=await Ba(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Fo.get(e);r&&(Xr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Co=!0:t.modifiedDocuments.size>0?Xr(r.Co):t.removedDocuments.size>0&&(Xr(r.Co),r.Co=!1))})),await lu(n,t,e)}catch(t){await Da(t)}}function ru(t,e,n){const r=Yr(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xo.forEach(((n,r)=>{const i=r.view.eo(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Yr(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.eo(e)&&(r=!0)})),r&&zc(n)}(r.eventManager,e),t.length&&r.No.Tr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function iu(t,e,n){const r=Yr(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fo.get(e),s=i&&i.key;if(s){let t=new ao(Ni.comparator);t=t.insert(s,zi.newNoDocument(s,di.min()));const n=vo().add(s),i=new bo(di.min(),new Map,new lo(ui),t,n);await nu(r,i),r.Oo=r.Oo.remove(s),r.Fo.delete(e),uu(r)}else await za(r.localStore,e,!1).then((()=>su(r,e,n))).catch(Da)}function su(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach((e=>{t.Mo.containsKey(e)||ou(t,e)}))}function ou(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);null!==n&&(bc(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),uu(t))}function au(t,e,n){for(const r of n)r instanceof Gc?(t.Mo.addReference(r.key,e),cu(t,r)):r instanceof Wc?(zr("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||ou(t,r.key)):Jr()}function cu(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(zr("SyncEngine","New document in limbo: "+n),t.$o.add(r),uu(t))}function uu(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new Ni(yi.fromString(e)),r=t.Uo.next();t.Fo.set(r,new Yc(n)),t.Oo=t.Oo.insert(n,r),_c(t.remoteStore,new Sa(Is(ms(n.path)),r,2,oi.T))}}async function lu(t,e,n){const r=Yr(t),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach(((t,a)=>{o.push(r.Ko(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Ma.kn(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.No.Tr(i),await async function(t,e){const n=Yr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ea.forEach(e,(e=>Ea.forEach(e.Nn,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Ea.forEach(e.xn,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Ia(t))throw t;zr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Un.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(t,i)}}}(r.localStore,s))}async function hu(t,e){const n=Yr(t);if(!n.currentUser.isEqual(e)){zr("SyncEngine","User change. New user:",e.toKey());const t=await ja(n.localStore,e);n.currentUser=e,function(t,e){t.Bo.forEach((t=>{t.forEach((t=>{t.reject(new Zr(Qr.CANCELLED,e))}))})),t.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await lu(n,t.Wn)}}function du(t,e){const n=Yr(t),r=n.Fo.get(e);if(r&&r.Co)return vo().add(r.key);{let t=vo();const r=n.ko.get(e);if(!r)return t;for(const e of r){const r=n.xo.get(e);t=t.unionWith(r.view.To)}return t}}function fu(t){const e=Yr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=nu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=du.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iu.bind(null,e),e.No.Tr=$c.bind(null,e.eventManager),e.No.jo=Hc.bind(null,e.eventManager),e}class pu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=hc(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return Va(this.persistence,new Ua,t.initialUser,this.N)}Go(t){return new tc(nc.Ns,this.N)}Wo(t){return new ic}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ru(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=hu.bind(null,this.syncEngine),await Dc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new jc}createDatastore(t){const e=hc(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new uc(r));var r;return function(t,e,n){return new gc(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>ru(this.syncEngine,t,0),s=oc.bt()?new oc:new sc,new yc(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Qc(t,e,n,r,i,s);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Yr(t);zr("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await wc(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Yo(this.observer.next,t)}error(t){this.observer.error?this.Yo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Xo(){this.muted=!0}Yo(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yu{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=qr.UNAUTHENTICATED,this.clientId=ci.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,(async t=>{zr("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Zr(Qr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=xc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function vu(t,e){t.asyncQueue.verifyOperationInProgress(),zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await ja(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function wu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _u(t);zr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>async function(t,e){const n=Yr(t);n.asyncQueue.verifyOperationInProgress(),zr("RemoteStore","RemoteStore received new credentials");const r=kc(n);n.Kr.add(3),await wc(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Kr.delete(3),await vc(n)}(e.remoteStore,t))),t.onlineComponents=e}async function _u(t){return t.offlineComponents||(zr("FirestoreClient","Using default OfflineComponentProvider"),await vu(t,new pu)),t.offlineComponents}async function bu(t){return t.onlineComponents||(zr("FirestoreClient","Using default OnlineComponentProvider"),await wu(t,new gu)),t.onlineComponents}async function Eu(t){const e=await bu(t),n=e.eventManager;return n.onListen=Zc.bind(null,e.syncEngine),n.onUnlisten=eu.bind(null,e.syncEngine),n}function Iu(t,e,n={}){const r=new ti;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new mu({next:n=>{e.enqueueAndForget((()=>Bc(t,o))),n.fromCache&&"server"===r.source?i.reject(new Zr(Qr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Kc(n,s,{includeMetadataChanges:!0,uo:!0});return qc(t,o)}(await Eu(t),t.asyncQueue,e,n,r))),r.promise}class Tu{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Su{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Su&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t,e,n){if(!n)throw new Zr(Qr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Au(t,e,n,r){if(!0===e&&!0===r)throw new Zr(Qr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ru(t){if(Ni.isDocumentKey(t))throw new Zr(Qr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Nu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){if(t.constructor){const e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());if(e&&e.length>1)return e[1]}return null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Jr()}function Ou(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Zr(Qr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nu(t);throw new Zr(Qr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Du{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Zr(Qr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Zr(Qr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Au("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Du({}),this._settingsFrozen=!1,t instanceof Su?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Zr(Qr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Su(t.options.projectId)}(t))}get app(){if(!this._app)throw new Zr(Qr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Zr(Qr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Du(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new ni;switch(t.type){case"gapi":const e=t.client;return Xr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new si(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Zr(Qr.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ku.get(t);e&&(zr("ComponentProvider","Removing Datastore"),ku.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mu(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Lu(this.firestore,t,this._key)}}class xu{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new xu(this.firestore,t,this._query)}}class Mu extends xu{constructor(t,e,n){super(t,e,ms(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Lu(this.firestore,null,new Ni(t))}withConverter(t){return new Mu(this.firestore,t,this._path)}}function Uu(t,e,...n){if(t=(0,o.m9)(t),Cu("collection","path",e),t instanceof Pu){const r=yi.fromString(e,...n);return Ru(r),new Mu(t,null,r)}{if(!(t instanceof Lu||t instanceof Mu))throw new Zr(Qr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(yi.fromString(e,...n));return Ru(r),new Mu(t.firestore,null,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fu{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new dc(this,"async_queue_retry"),this.Ea=()=>{const t=lc();t&&zr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=lc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ta(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=lc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ea)}}enqueue(t){if(this.Ta(),this.wa)return new Promise((()=>{}));const e=new ti;return this.Ia((()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.da.push(t),this.Aa())))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(T){if(!Ia(T))throw T;zr("AsyncQueue","Operation failed with retryable error: "+T)}this.da.length>0&&this.rr.Xi((()=>this.Aa()))}}Ia(t){const e=this.fa.then((()=>(this.ga=!0,t().catch((t=>{throw this.ma=t,this.ga=!1,Kr("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),t})).then((t=>(this.ga=!1,t))))));return this.fa=e,e}enqueueAfterDelay(t,e,n){this.Ta(),this.pa.indexOf(t)>-1&&(e=0);const r=Lc.createAndSchedule(this,t,e,n,(t=>this.Ra(t)));return this._a.push(r),r}Ta(){this.ma&&Jr()}verifyOperationInProgress(){}async ba(){let t;do{t=this.fa,await t}while(t!==this.fa)}Pa(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.ba().then((()=>{this._a.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ba()}))}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}class Vu extends Pu{constructor(t,e){super(t,e),this.type="firestore",this._queue=new Fu,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Bu(this),this._firestoreClient.terminate()}}function ju(t=(0,r.Mq)()){return(0,r.qX)(t,"firestore").getImmediate()}function qu(t){return t._firestoreClient||Bu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Bu(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Tu(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new yu(t._credentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $u{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Zr(Qr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wi(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hu{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Hu(_i.fromBase64String(t))}catch(t){throw new Zr(Qr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Hu(_i.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zu{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Zr(Qr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Zr(Qr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ui(this._lat,t._lat)||ui(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=new RegExp("[~\\*/\\[\\]]");function Gu(t,e,n){if(e.search(Ku)>=0)throw Wu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $u(...e.split("."))._internalPath}catch(r){throw Wu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Zr(Qr.INVALID_ARGUMENT,a+t+c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ju{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Lu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Xu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Yu("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Xu extends Ju{data(){return super.data()}}function Yu(t,e){return"string"==typeof e?Gu(t,e):e instanceof $u?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Zu extends Ju{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new tl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Yu("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class tl extends Zu{data(t={}){return super.data(t)}}class el{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Qu(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new tl(this._firestore,this._userDataWriter,n.key,n,new Qu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Zr(Qr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new tl(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Qu(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new tl(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Qu(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:nl(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function nl(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Jr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rl(t){if(vs(t)&&0===t.explicitOrderBy.length)throw new Zr(Qr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function il(t,...e){for(const n of e)t=n._apply(t);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sl{convertValue(t,e="none"){switch(Oi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ii(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ti(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Jr()}}convertObject(t,e){const n={};return pi(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new zu(Ii(t.latitude),Ii(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ki(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ci(t));default:return null}}convertTimestamp(t){const e=Ei(t);return new hi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=yi.fromString(t);Xr(ra(n));const r=new Su(n.get(1),n.get(3)),i=new Ni(n.popFirst(5));return r.isEqual(e)||Kr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends sl{constructor(t){super(),this.firestore=t}convertBytes(t){return new Hu(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Lu(this.firestore,null,e)}}function al(t){t=Ou(t,xu);const e=Ou(t.firestore,Vu),n=qu(e),r=new ol(e);return rl(t._query),Iu(n,t._query).then((n=>new el(e,r,t,n)))}var cl;!function(t){Br=t}(r.Jn),(0,r.Xd)(new i.wA("firestore",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new Vu(n,new ri(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r}),"PUBLIC")),(0,r.KN)("@firebase/firestore","3.0.2",cl)},655:function(t,e,n){n.d(e,{ZT:function(){return i},_T:function(){return s},mG:function(){return o},Jh:function(){return a},XA:function(){return c},CR:function(){return u},ev:function(){return l}});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}function o(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,s){function o(t){try{c(r.next(t))}catch(e){s(e)}}function a(t){try{c(r["throw"](t))}catch(e){s(e)}}function c(t){t.done?n(t.value):i(t.value).then(o,a)}c((r=r.apply(t,e||[])).next())}))}function a(t,e){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return c([t,e])}}function c(s){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,r&&(i=2&s[0]?r["return"]:s[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(i=o.trys,!(i=i.length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}Object.create;function c(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,s=n.call(t),o=[];try{while((void 0===e||e-- >0)&&!(r=s.next()).done)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s["return"])&&n.call(s)}finally{if(i)throw i.error}}return o}function l(t,e,n){if(n||2===arguments.length)for(var r,i=0,s=e.length;i<s;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}Object.create},2119:function(t,e,n){n.d(e,{p7:function(){return te},PO:function(){return z},tv:function(){return re}});var r=n(6252),i=n(2262);
/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const s="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=t=>s?Symbol(t):"_vr_"+t,a=o("rvlm"),c=o("rvd"),u=o("r"),l=o("rl"),h=o("rvl"),d="undefined"!==typeof window;function f(t){return t.__esModule||s&&"Module"===t[Symbol.toStringTag]}const p=Object.assign;function g(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const m=()=>{};const y=/\/$/,v=t=>t.replace(y,"");function w(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),s=e.slice(a+1,c>-1?c:e.length),i=t(s)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=C(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function _(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function b(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function E(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&I(e.matched[r],n.matched[i])&&T(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function I(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function T(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!S(t[n],e[n]))return!1;return!0}function S(t,e){return Array.isArray(t)?k(t,e):Array.isArray(e)?k(e,t):t===e}function k(t,e){return Array.isArray(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function C(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var A,R;(function(t){t["pop"]="pop",t["push"]="push"})(A||(A={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(R||(R={}));function N(t){if(!t)if(d){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),v(t)}const O=/^[^#]+#/;function D(t,e){return t.replace(O,"#")+e}function P(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const L=()=>({left:window.pageXOffset,top:window.pageYOffset});function x(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=P(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function M(t,e){const n=history.state?history.state.position-e:-1;return n+t}const U=new Map;function F(t,e){U.set(t,e)}function V(t){const e=U.get(t);return U.delete(t),e}let j=()=>location.protocol+"//"+location.host;function q(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),b(n,"")}const o=b(n,t);return o+r+i}function B(t,e,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=q(t,location),c=n.value,u=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((t=>{t(n.value,c,{delta:l,type:A.pop,direction:l?l>0?R.forward:R.back:R.unknown})}))};function c(){o=n.value}function u(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function l(){const{history:t}=window;t.state&&t.replaceState(p({},t.state,{scroll:L()}),"")}function h(){for(const t of s)t();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function $(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?L():null}}function H(t){const{history:e,location:n}=window,r={value:q(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:j()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=p({},e.state,$(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function a(t,n){const o=p({},i.value,e.state,{forward:t,scroll:L()});s(o.current,o,!0);const a=p({},$(r.value,t,null),{position:o.position+1},n);s(t,a,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function z(t){t=N(t);const e=H(t),n=B(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=p({location:"",base:t,go:r,createHref:D.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function K(t){return"string"===typeof t||t&&"object"===typeof t}function G(t){return"string"===typeof t||"symbol"===typeof t}const W={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},J=o("nf");var X;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(X||(X={}));function Y(t,e){return p(new Error,{type:t,[J]:!0},e)}function Q(t,e){return t instanceof Error&&J in t&&(null==e||!!(t.type&e))}const Z="[^/]+?",tt={sensitive:!1,strict:!1,start:!0,end:!0},et=/[.+*?^${}()[\]/\\]/g;function nt(t,e){const n=p({},tt,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const t=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let e=0;e<l.length;e++){const r=l[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(et,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:c}=r;s.push({name:t,repeatable:n,optional:a});const h=c||Z;if(h!==Z){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function rt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function it(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=rt(r[n],i[n]);if(t)return t;n++}return i.length-r.length}const st={type:0,value:""},ot=/[a-zA-Z0-9_]/;function at(t){if(!t)return[[]];if("/"===t)return[[st]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ot.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function ct(t,e,n){const r=nt(at(t.path),n);const i=p(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function ut(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,a=ht(t);a.aliasOf=r&&r.record;const u=gt(e,t),l=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)l.push(p({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a}))}let h,d;for(const e of l){const{path:l}=e;if(n&&"/"!==l[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(l&&r+l)}if(h=ct(e,n,u),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&t.name&&!ft(h)&&o(t.name)),"children"in a){const t=a.children;for(let e=0;e<t.length;e++)s(t[e],h,r&&r.children[e])}r=r||h,c(h)}return d?()=>{o(d)}:m}function o(t){if(G(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function a(){return n}function c(t){let e=0;while(e<n.length&&it(t,n[e])>=0)e++;n.splice(e,0,t),t.record.name&&!ft(t)&&r.set(t.record.name,t)}function u(t,e){let i,s,o,a={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw Y(1,{location:t});o=i.record.name,a=p(lt(e.params,i.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params),s=i.stringify(a)}else if("path"in t)s=t.path,i=n.find((t=>t.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw Y(1,{location:t,currentLocation:e});o=i.record.name,a=p({},e.params,t.params),s=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:c,meta:pt(c)}}return e=gt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function lt(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ht(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:dt(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function dt(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ft(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pt(t){return t.reduce(((t,e)=>p(t,e.meta)),{})}function gt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const mt=/#/g,yt=/&/g,vt=/\//g,wt=/=/g,_t=/\?/g,bt=/\+/g,Et=/%5B/g,It=/%5D/g,Tt=/%5E/g,St=/%60/g,kt=/%7B/g,Ct=/%7C/g,At=/%7D/g,Rt=/%20/g;function Nt(t){return encodeURI(""+t).replace(Ct,"|").replace(Et,"[").replace(It,"]")}function Ot(t){return Nt(t).replace(kt,"{").replace(At,"}").replace(Tt,"^")}function Dt(t){return Nt(t).replace(bt,"%2B").replace(Rt,"+").replace(mt,"%23").replace(yt,"%26").replace(St,"`").replace(kt,"{").replace(At,"}").replace(Tt,"^")}function Pt(t){return Dt(t).replace(wt,"%3D")}function Lt(t){return Nt(t).replace(mt,"%23").replace(_t,"%3F")}function xt(t){return null==t?"":Lt(t).replace(vt,"%2F")}function Mt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Ut(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(bt," "),n=t.indexOf("="),s=Mt(n<0?t:t.slice(0,n)),o=n<0?null:Mt(t.slice(n+1));if(s in e){let t=e[s];Array.isArray(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Ft(t){let e="";for(let n in t){const r=t[n];if(n=Pt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map((t=>t&&Dt(t))):[r&&Dt(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Vt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=Array.isArray(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}function jt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function qt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=t=>{!1===t?a(Y(4,{from:n,to:e})):t instanceof Error?a(t):K(t)?a(Y(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch((t=>a(t)))}))}function Bt(t,e,n,r){const i=[];for(const s of t)for(const t in s.components){let o=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if($t(o)){const a=o.__vccOpts||o,c=a[e];c&&i.push(qt(c,n,r,s,t))}else{let a=o();0,i.push((()=>a.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const o=f(i)?i.default:i;s.components[t]=o;const a=o.__vccOpts||o,c=a[e];return c&&qt(c,n,r,s,t)()}))))}}return i}function $t(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Ht(t){const e=(0,r.f3)(u),n=(0,r.f3)(l),s=(0,i.Fl)((()=>e.resolve((0,i.SU)(t.to)))),o=(0,i.Fl)((()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(I.bind(null,r));if(o>-1)return o;const a=Jt(t[e-2]);return e>1&&Jt(r)===a&&i[i.length-1].path!==a?i.findIndex(I.bind(null,t[e-2])):o})),a=(0,i.Fl)((()=>o.value>-1&&Wt(n.params,s.value.params))),c=(0,i.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&T(n.params,s.value.params)));function h(n={}){return Gt(n)?e[(0,i.SU)(t.replace)?"replace":"push"]((0,i.SU)(t.to)).catch(m):Promise.resolve()}return{route:s,href:(0,i.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:h}}const zt=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ht,setup(t,{slots:e}){const n=(0,i.qj)(Ht(t)),{options:s}=(0,r.f3)(u),o=(0,i.Fl)((()=>({[Xt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&e.default(n);return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Kt=zt;function Gt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Wt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function Jt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xt=(t,e,n)=>null!=t?t:null!=e?e:n,Yt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=(0,r.f3)(h),o=(0,i.Fl)((()=>t.route||s.value)),u=(0,r.f3)(c,0),l=(0,i.Fl)((()=>o.value.matched[u]));(0,r.JJ)(c,u+1),(0,r.JJ)(a,l),(0,r.JJ)(h,o);const d=(0,i.iH)();return(0,r.YP)((()=>[d.value,l.value,t.name]),(([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&I(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=o.value,s=l.value,a=s&&s.components[t.name],c=t.name;if(!a)return Qt(n.default,{Component:a,route:i});const u=s.props[t.name],h=u?!0===u?i.params:"function"===typeof u?u(i):u:null,f=t=>{t.component.isUnmounted&&(s.instances[c]=null)},g=(0,r.h)(a,p({},h,e,{onVnodeUnmounted:f,ref:d}));return Qt(n.default,{Component:g,route:i})||g}}});function Qt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const Zt=Yt;function te(t){const e=ut(t.routes,t),n=t.parseQuery||Ut,s=t.stringifyQuery||Ft,o=t.history;const a=jt(),c=jt(),f=jt(),y=(0,i.XI)(W);let v=W;d&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=g.bind(null,(t=>""+t)),I=g.bind(null,xt),T=g.bind(null,Mt);function S(t,n){let r,i;return G(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function k(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function C(){return e.getRoutes().map((t=>t.record))}function R(t){return!!e.getRecordMatcher(t)}function N(t,r){if(r=p({},r||y.value),"string"===typeof t){const i=w(n,t,r.path),s=e.resolve({path:i.path},r),a=o.createHref(i.fullPath);return p(i,s,{params:T(s.params),hash:Mt(i.hash),redirectedFrom:void 0,href:a})}let i;if("path"in t)i=p({},t,{path:w(n,t.path,r.path).path});else{const e=p({},t.params);for(const t in e)null==e[t]&&delete e[t];i=p({},t,{params:I(t.params)}),r.params=I(r.params)}const a=e.resolve(i,r),c=t.hash||"";a.params=b(T(a.params));const u=_(s,p({},t,{hash:Ot(c),path:a.path})),l=o.createHref(u);return p({fullPath:u,hash:c,query:s===Ft?Vt(t.query):t.query||{}},a,{redirectedFrom:void 0,href:l})}function O(t){return"string"===typeof t?w(n,t,y.value.path):p({},t)}function D(t,e){if(v!==t)return Y(8,{from:e,to:t})}function P(t){return q(t)}function U(t){return P(p(O(t),{replace:!0}))}function j(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=O(r):{path:r},r.params={}),p({query:t.query,hash:t.hash,params:t.params},r)}}function q(t,e){const n=v=N(t),r=y.value,i=t.state,o=t.force,a=!0===t.replace,c=j(n);if(c)return q(p(O(c),{state:i,force:o,replace:a}),e||n);const u=n;let l;return u.redirectedFrom=e,!o&&E(s,r,n)&&(l=Y(16,{to:u,from:r}),it(r,r,!0,!1)),(l?Promise.resolve(l):$(u,r)).catch((t=>Q(t)?t:et(t,u,r))).then((t=>{if(t){if(Q(t,2))return q(p(O(t.to),{state:i,force:o,replace:a}),e||u)}else t=z(u,r,!0,a,i);return H(u,r,t),t}))}function B(t,e){const n=D(t,e);return n?Promise.reject(n):Promise.resolve()}function $(t,e){let n;const[r,i,s]=ne(t,e);n=Bt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qt(r,t,e))}));const o=B.bind(null,t,e);return n.push(o),ee(n).then((()=>{n=[];for(const r of a.list())n.push(qt(r,t,e));return n.push(o),ee(n)})).then((()=>{n=Bt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push(qt(r,t,e))}));return n.push(o),ee(n)})).then((()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(qt(i,t,e));else n.push(qt(r.beforeEnter,t,e));return n.push(o),ee(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=Bt(s,"beforeRouteEnter",t,e),n.push(o),ee(n)))).then((()=>{n=[];for(const r of c.list())n.push(qt(r,t,e));return n.push(o),ee(n)})).catch((t=>Q(t,8)?t:Promise.reject(t)))}function H(t,e,n){for(const r of f.list())r(t,e,n)}function z(t,e,n,r,i){const s=D(t,e);if(s)return s;const a=e===W,c=d?history.state:{};n&&(r||a?o.replace(t.fullPath,p({scroll:a&&c&&c.scroll},i)):o.push(t.fullPath,i)),y.value=t,it(t,e,n,a),rt()}let K;function J(){K=o.listen(((t,e,n)=>{const r=N(t),i=j(r);if(i)return void q(p(i,{replace:!0}),r).catch(m);v=r;const s=y.value;d&&F(M(s.fullPath,n.delta),L()),$(r,s).catch((t=>Q(t,12)?t:Q(t,2)?(q(t.to,r).then((t=>{Q(t,20)&&!n.delta&&n.type===A.pop&&o.go(-1,!1)})).catch(m),Promise.reject()):(n.delta&&o.go(-n.delta,!1),et(t,r,s)))).then((t=>{t=t||z(r,s,!1),t&&(n.delta?o.go(-n.delta,!1):n.type===A.pop&&Q(t,20)&&o.go(-1,!1)),H(r,s,t)})).catch(m)}))}let X,Z=jt(),tt=jt();function et(t,e,n){rt(t);const r=tt.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function nt(){return X&&y.value!==W?Promise.resolve():new Promise(((t,e)=>{Z.add([t,e])}))}function rt(t){X||(X=!0,J(),Z.list().forEach((([e,n])=>t?n(t):e())),Z.reset())}function it(e,n,i,s){const{scrollBehavior:o}=t;if(!d||!o)return Promise.resolve();const a=!i&&V(M(e.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>o(e,n,a))).then((t=>t&&x(t))).catch((t=>et(t,e,n)))}const st=t=>o.go(t);let ot;const at=new Set,ct={currentRoute:y,addRoute:S,removeRoute:k,hasRoute:R,getRoutes:C,resolve:N,options:t,push:P,replace:U,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:a.add,beforeResolve:c.add,afterEach:f.add,onError:tt.add,isReady:nt,install(t){const e=this;t.component("RouterLink",Kt),t.component("RouterView",Zt),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),d&&!ot&&y.value===W&&(ot=!0,P(o.location).catch((t=>{0})));const n={};for(const s in W)n[s]=(0,i.Fl)((()=>y.value[s]));t.provide(u,e),t.provide(l,(0,i.qj)(n)),t.provide(h,y);const r=t.unmount;at.add(t),t.unmount=function(){at.delete(t),at.size<1&&(v=W,K&&K(),y.value=W,ot=!1,X=!1),r()}}};return ct}function ee(t){return t.reduce(((t,e)=>t.then((()=>e()))),Promise.resolve())}function ne(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>I(t,s)))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>I(t,a)))||i.push(a))}return[n,r,i]}function re(){return(0,r.f3)(u)}},4709:function(t,e,n){n.d(e,{MT:function(){return W},oR:function(){return l}});var r=n(6252),i=n(2262);function s(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator?window:"undefined"!==typeof n.g?n.g:{}}const a="devtools-plugin:setup";function c(t,e){const n=s();if(n)n.emit(a,t,e);else{const n=o(),r=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];r.push({pluginDescriptor:t,setupFn:e})}}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var u="store";function l(t){return void 0===t&&(t=null),(0,r.f3)(null!==t?t:u)}function h(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function d(t){return null!==t&&"object"===typeof t}function f(t){return t&&"function"===typeof t.then}function p(t,e){return function(){return t(e)}}function g(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function m(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;v(t,n,[],t._modules.root,!0),y(t,n,e)}function y(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,o={};h(s,(function(e,n){o[n]=p(e,t),Object.defineProperty(t.getters,n,{get:function(){return o[n]()},enumerable:!0})})),t._state=(0,i.qj)({data:e}),t.strict&&T(t),r&&n&&t._withCommit((function(){r.data=null}))}function v(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!s&&!i){var a=S(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){a[c]=r.state}))}var u=r.context=w(t,o,n);r.forEachMutation((function(e,n){var r=o+n;b(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:o+n,i=e.handler||e;E(t,r,i,u)})),r.forEachGetter((function(e,n){var r=o+n;I(t,r,e,u)})),r.forEachChild((function(r,s){v(t,e,n.concat(s),r,i)}))}function w(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var s=k(n,r,i),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=e+c),t.dispatch(c,o)},commit:r?t.commit:function(n,r,i){var s=k(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c),t.commit(c,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return _(t,e)}},state:{get:function(){return S(t.state,n)}}}),i}function _(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function b(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function E(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return f(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function I(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function T(t){(0,r.YP)((function(){return t._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function S(t,e){return e.reduce((function(t,e){return t[e]}),t)}function k(t,e,n){return d(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var C="vuex bindings",A="vuex:mutations",R="vuex:actions",N="vuex",O=0;function D(t,e){c({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[C]},(function(n){n.addTimelineLayer({id:A,label:"Vuex Mutations",color:P}),n.addTimelineLayer({id:R,label:"Vuex Actions",color:P}),n.addInspector({id:N,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===N)if(n.filter){var r=[];V(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[F(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===N){var r=n.nodeId;_(e,r),n.state=j(B(e._modules,r),"root"===r?e.getters:e._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===N){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit((function(){n.set(e._state.data,i,n.state.value)}))}})),e.subscribe((function(t,e){var r={};t.payload&&(r.payload=t.payload),r.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(N),n.sendInspectorState(N),n.addTimelineEvent({layerId:A,event:{time:Date.now(),title:t.type,data:r}})})),e.subscribeAction({before:function(t,e){var r={};t.payload&&(r.payload=t.payload),t._id=O++,t._time=Date.now(),r.state=e,n.addTimelineEvent({layerId:R,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:r}})},after:function(t,e){var r={},i=Date.now()-t._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},t.payload&&(r.payload=t.payload),r.state=e,n.addTimelineEvent({layerId:R,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:r}})}})}))}var P=8702998,L=6710886,x=16777215,M={label:"namespaced",textColor:x,backgroundColor:L};function U(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function F(t,e){return{id:e||"root",label:U(e),tags:t.namespaced?[M]:[],children:Object.keys(t._children).map((function(n){return F(t._children[n],e+n+"/")}))}}function V(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[M]:[]}),Object.keys(e._children).forEach((function(i){V(t,e._children[i],n,r+i+"/")}))}function j(t,e,n){e="root"===n?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(r.length){var s=q(e);i.getters=Object.keys(s).map((function(t){return{key:t.endsWith("/")?U(t):t,editable:!1,value:$((function(){return s[t]}))}}))}return i}function q(t){var e={};return Object.keys(t).forEach((function(n){var r=n.split("/");if(r.length>1){var i=e,s=r.pop();r.forEach((function(t){i[t]||(i[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),i=i[t]._custom.value})),i[s]=$((function(){return t[n]}))}else e[n]=$((function(){return t[n]}))})),e}function B(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,r,i){var s=t[r];if(!s)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?s:s._children}),"root"===e?t:t.root._children)}function $(t){try{return t()}catch(e){return e}}var H=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},z={namespaced:{configurable:!0}};z.namespaced.get=function(){return!!this._rawModule.namespaced},H.prototype.addChild=function(t,e){this._children[t]=e},H.prototype.removeChild=function(t){delete this._children[t]},H.prototype.getChild=function(t){return this._children[t]},H.prototype.hasChild=function(t){return t in this._children},H.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},H.prototype.forEachChild=function(t){h(this._children,t)},H.prototype.forEachGetter=function(t){this._rawModule.getters&&h(this._rawModule.getters,t)},H.prototype.forEachAction=function(t){this._rawModule.actions&&h(this._rawModule.actions,t)},H.prototype.forEachMutation=function(t){this._rawModule.mutations&&h(this._rawModule.mutations,t)},Object.defineProperties(H.prototype,z);var K=function(t){this.register([],t,!1)};function G(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;G(t.concat(r),e.getChild(r),n.modules[r])}}K.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},K.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},K.prototype.update=function(t){G([],this.root,t)},K.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new H(e,n);if(0===t.length)this.root=i;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],i)}e.modules&&h(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},K.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},K.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};function W(t){return new J(t)}var J=function(t){var e=this;void 0===t&&(t={});var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var i=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new K(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var s=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(s,t,e)},this.commit=function(t,e,n){return c.call(s,t,e,n)},this.strict=r;var u=this._modules.root.state;v(this,u,[],this._modules.root),y(this,u),n.forEach((function(t){return t(e)}))},X={state:{configurable:!0}};J.prototype.install=function(t,e){t.provide(e||u,this),t.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&D(t,this)},X.state.get=function(){return this._state.data},X.state.set=function(t){0},J.prototype.commit=function(t,e,n){var r=this,i=k(t,e,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},J.prototype.dispatch=function(t,e){var n=this,r=k(t,e),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(u){0}e(t)}))}))}},J.prototype.subscribe=function(t,e){return g(t,this._subscribers,e)},J.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return g(n,this._actionSubscribers,e)},J.prototype.watch=function(t,e,n){var i=this;return(0,r.YP)((function(){return t(i.state,i.getters)}),e,Object.assign({},n))},J.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},J.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),v(this,this.state,t,this._modules.get(t),n.preserveState),y(this,this.state)},J.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=S(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),m(this)},J.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},J.prototype.hotUpdate=function(t){this._modules.update(t),m(this,!0)},J.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(J.prototype,X);Z((function(t,e){var n={};return Y(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=tt(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),Z((function(t,e){var n={};return Y(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var s=tt(this.$store,"mapMutations",t);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),Z((function(t,e){var n={};return Y(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||tt(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),Z((function(t,e){var n={};return Y(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var s=tt(this.$store,"mapActions",t);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));function Y(t){return Q(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function Q(t){return Array.isArray(t)||d(t)}function Z(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function tt(t,e,n){var r=t._modulesNamespaceMap[n];return r}}}]);
//# sourceMappingURL=chunk-vendors.a615f848.js.map