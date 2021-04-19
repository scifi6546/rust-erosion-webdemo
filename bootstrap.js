/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.wasm": function() {
/******/ 			return {
/******/ 				"./ski_tycoon_v2_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_59cb74e423758ede": function() {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_new_59cb74e423758ede"]();
/******/ 					},
/******/ 					"__wbg_stack_558ba5917b466edd": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_stack_558ba5917b466edd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_4bb6c2a97407129a": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_error_4bb6c2a97407129a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_WebGl2RenderingContext_b192c490bf258ec9": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_instanceof_WebGl2RenderingContext_b192c490bf258ec9"](p0i32);
/******/ 					},
/******/ 					"__wbg_bindVertexArray_4bd5f620268351e1": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_bindVertexArray_4bd5f620268351e1"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_bufferData_cf055952ee025779": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_bufferData_cf055952ee025779"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_createVertexArray_b469f57b7a7bfdb5": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_createVertexArray_b469f57b7a7bfdb5"](p0i32);
/******/ 					},
/******/ 					"__wbg_deleteVertexArray_d6c9973587714a23": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_deleteVertexArray_d6c9973587714a23"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_texImage2D_989b2e447ddd3b09": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32,p7i32,p8i32,p9i32,p10i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_texImage2D_989b2e447ddd3b09"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32,p7i32,p8i32,p9i32,p10i32);
/******/ 					},
/******/ 					"__wbg_texImage2D_c320c806c170f47f": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32,p7i32,p8i32,p9i32,p10i32,p11i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_texImage2D_c320c806c170f47f"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32,p7i32,p8i32,p9i32,p10i32,p11i32);
/******/ 					},
/******/ 					"__wbg_uniformMatrix4fv_44e1e2a14b675656": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_uniformMatrix4fv_44e1e2a14b675656"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_activeTexture_298427e83e4eeca9": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_activeTexture_298427e83e4eeca9"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_attachShader_f9821559836fd9cf": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_attachShader_f9821559836fd9cf"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_bindBuffer_be002f821869cc4d": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_bindBuffer_be002f821869cc4d"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_bindFramebuffer_b1aa93ec590fe94e": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_bindFramebuffer_b1aa93ec590fe94e"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_bindTexture_5cebe79630be7aa9": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_bindTexture_5cebe79630be7aa9"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_blendFunc_c0d487bcd495939c": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_blendFunc_c0d487bcd495939c"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_checkFramebufferStatus_0b52fbc6151fd550": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_checkFramebufferStatus_0b52fbc6151fd550"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_clear_a7228c3d35f15751": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_clear_a7228c3d35f15751"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_clearColor_b6e19585f3d85852": function(p0i32,p1f32,p2f32,p3f32,p4f32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_clearColor_b6e19585f3d85852"](p0i32,p1f32,p2f32,p3f32,p4f32);
/******/ 					},
/******/ 					"__wbg_clearDepth_e021148fc9a11c48": function(p0i32,p1f32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_clearDepth_e021148fc9a11c48"](p0i32,p1f32);
/******/ 					},
/******/ 					"__wbg_compileShader_6007a1c3d7a9f1a4": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_compileShader_6007a1c3d7a9f1a4"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createBuffer_46a77ad2a47521ca": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_createBuffer_46a77ad2a47521ca"](p0i32);
/******/ 					},
/******/ 					"__wbg_createFramebuffer_61705899f6afeca7": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_createFramebuffer_61705899f6afeca7"](p0i32);
/******/ 					},
/******/ 					"__wbg_createProgram_2fd9cd65d673ff0f": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_createProgram_2fd9cd65d673ff0f"](p0i32);
/******/ 					},
/******/ 					"__wbg_createShader_5c0d85c4c8723a9f": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_createShader_5c0d85c4c8723a9f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createTexture_8d12fe2154c25b65": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_createTexture_8d12fe2154c25b65"](p0i32);
/******/ 					},
/******/ 					"__wbg_deleteBuffer_e237f3223f3d8c21": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_deleteBuffer_e237f3223f3d8c21"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_deleteFramebuffer_82d0613639733d21": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_deleteFramebuffer_82d0613639733d21"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_deleteTexture_22da2d250501679d": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_deleteTexture_22da2d250501679d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_depthFunc_0f9a1abcec324637": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_depthFunc_0f9a1abcec324637"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_drawArrays_c9c2ec0e3d08fed3": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_drawArrays_c9c2ec0e3d08fed3"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_enable_a99cc2635b2a74e2": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_enable_a99cc2635b2a74e2"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_enableVertexAttribArray_a27ef1fa263d2552": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_enableVertexAttribArray_a27ef1fa263d2552"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_framebufferTexture2D_93b363fabb533e57": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_framebufferTexture2D_93b363fabb533e57"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32);
/******/ 					},
/******/ 					"__wbg_getAttribLocation_79fc4bda7c13e8e5": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_getAttribLocation_79fc4bda7c13e8e5"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_getError_c7b1a71bf7cd437e": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_getError_c7b1a71bf7cd437e"](p0i32);
/******/ 					},
/******/ 					"__wbg_getProgramInfoLog_b64b19f60fb48fd9": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_getProgramInfoLog_b64b19f60fb48fd9"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getProgramParameter_100170e28cb3feb9": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_getProgramParameter_100170e28cb3feb9"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getShaderInfoLog_a12110bbd1c66011": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_getShaderInfoLog_a12110bbd1c66011"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getShaderParameter_2f93bc313b24e89c": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_getShaderParameter_2f93bc313b24e89c"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getUniformLocation_336d92cf8d923ec9": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_getUniformLocation_336d92cf8d923ec9"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_linkProgram_a79bb2f3cb237873": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_linkProgram_a79bb2f3cb237873"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_shaderSource_90a1677f3bd1361f": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_shaderSource_90a1677f3bd1361f"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_texParameteri_a17b14299391b68c": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_texParameteri_a17b14299391b68c"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_uniform1i_8e2a897041bdb1b4": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_uniform1i_8e2a897041bdb1b4"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_uniform3f_e50e8a8671ca9174": function(p0i32,p1i32,p2f32,p3f32,p4f32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_uniform3f_e50e8a8671ca9174"](p0i32,p1i32,p2f32,p3f32,p4f32);
/******/ 					},
/******/ 					"__wbg_uniform4f_f8ee01fb3bf7eef1": function(p0i32,p1i32,p2f32,p3f32,p4f32,p5f32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_uniform4f_f8ee01fb3bf7eef1"](p0i32,p1i32,p2f32,p3f32,p4f32,p5f32);
/******/ 					},
/******/ 					"__wbg_useProgram_c250f3fa8a9a94cb": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_useProgram_c250f3fa8a9a94cb"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_vertexAttribPointer_2253d86b29f3236e": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_vertexAttribPointer_2253d86b29f3236e"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32);
/******/ 					},
/******/ 					"__wbg_viewport_83e8121d2480d726": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_viewport_83e8121d2480d726"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_5993230e7331f098": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_instanceof_Window_5993230e7331f098"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_85584f745133c6ad": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_document_85584f745133c6ad"](p0i32);
/******/ 					},
/******/ 					"__wbg_getElementById_85c96642ffb33978": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_getElementById_85c96642ffb33978"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_debug_ffc3cfd5a3254ed9": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_debug_ffc3cfd5a3254ed9"](p0i32);
/******/ 					},
/******/ 					"__wbg_error_e25c602bf2cc97d2": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_error_e25c602bf2cc97d2"](p0i32);
/******/ 					},
/******/ 					"__wbg_info_7011d9c63a97990c": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_info_7011d9c63a97990c"](p0i32);
/******/ 					},
/******/ 					"__wbg_log_be5faf67a2e8b869": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_log_be5faf67a2e8b869"](p0i32);
/******/ 					},
/******/ 					"__wbg_warn_703e3122e4d88974": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_warn_703e3122e4d88974"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlCanvasElement_46dcfe68d7a9fa74": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_instanceof_HtmlCanvasElement_46dcfe68d7a9fa74"](p0i32);
/******/ 					},
/******/ 					"__wbg_getContext_cbecd1fc57539f80": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_getContext_cbecd1fc57539f80"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_get_47bf656299aac357": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_get_47bf656299aac357"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_length_3b0ecd9be9d5f14e": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_length_3b0ecd9be9d5f14e"](p0i32);
/******/ 					},
/******/ 					"__wbg_call_e5847d15cc228e4f": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_call_e5847d15cc228e4f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_2349ba6aefe72376": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_newnoargs_2349ba6aefe72376"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_get_b9d14ba83d712c42": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_get_b9d14ba83d712c42"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_self_35a0fda3eb965abe": function() {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_self_35a0fda3eb965abe"]();
/******/ 					},
/******/ 					"__wbg_window_88a6f88dd3a474f1": function() {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_window_88a6f88dd3a474f1"]();
/******/ 					},
/******/ 					"__wbg_globalThis_1d843c4ad7b6a1f5": function() {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_globalThis_1d843c4ad7b6a1f5"]();
/******/ 					},
/******/ 					"__wbg_global_294ce70448e8fbbf": function() {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_global_294ce70448e8fbbf"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_buffer_0be9fb426f2dd82b": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_buffer_0be9fb426f2dd82b"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithbyteoffsetandlength_bd0eff154c76128b": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_newwithbyteoffsetandlength_bd0eff154c76128b"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_number_get": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbindgen_number_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_boolean_get": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbindgen_boolean_get"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbindgen_memory"]();
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.wasm":"e7c487d889af251096ab"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\n// asynchronously. This `bootstrap.js` file does the single async import, so\n// that no one else needs to worry about it again.\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });