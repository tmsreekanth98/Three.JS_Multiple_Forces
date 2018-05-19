//Multiple forces – direction and result with THREE.JS and PIE library
//Author: Sreekanth T M, NIT Agartala


//Pie library
var PIEcontrolElem;var PIEtitleElem;var PIEsourceElem;var PIEdeveloperElem;var PIEdesignerElem;var PIEtoplineElem;var PIEscreenElem;var PIEspeedElem;var PIEresetButton;var PIEstartButton;var PIEstopButton;var PIEpauseButton;var PIEresumeButton;var PIEslowdownButton;var PIEspeedupButton;var PIEhelpButton;var PIEinfoButton;var PIEhelpModal;var PIEhelpContent;var PIEhelpSpan;var PIEinfoModal;var PIEinfoContent;var PIEinfoSpan;var PIEcanvasW;var PIEcanvasH;var PIEcanvasAspect;var PIEaoiTLX;var PIEaoiTLY;var PIEaoiBRX;var PIEaoiBRY;var PIEaoiW;var PIEaoiH;var PIEaoiAspect;var PIEdislayTLX;var PIEdislayTLY;var PIEdislayBRX;var PIEdislayBRY;var PIEdisplayW;var PIEdisplayH;var PIEdisplayAspect;var PIEscene;var PIEcamera;var PIEcameraAngle;var PIEcameraAspect;var PIEcameraZ;var PIEcameraTarget;var PIErenderer;var PIEambientLight;var PIEspotLight;var PIEraycaster;var PIEsceneElements=[];var PIEdragElements=[];var PIEselectedDrag;var PIEselectedHover;var PIEdragPlane;var PIEmouseP;var PIEdragOffset;var PIEdragIntersect;var PIElastUpdateTime;var PIEpauseOffset;var PIEcurrentTime;var PIEoffsetTime;var PIEanimationON;var PIEanimationPaused;var PIEanimationSpeed;var PIEminAnimationSpeed;var PIEmaxAnimationSpeed;var PIEinputGUI;var PIEinputObject;var PIEitInput;var PIEsInput;var PIEcbInput;var PIEcInput;var PIEitInputNames=[];var PIEitInputHandles=[];var PIEsInputNames=[];var PIEsInputHandles=[];var PIEcbInputNames=[];var PIEcbInputHandles=[];var PIEcInputNames=[];var PIEcInputHandles=[];var PIEdisplayGUI;var PIEdisplayObject;var PIEitDisplay;var PIEsDisplay;var PIEcbDisplay;var PIEcDisplay;var PIEitDisplayNames=[];var PIEitDisplayHandles=[];var PIEsDisplayNames=[];var PIEsDisplayHandles=[];var PIEcbDisplayNames=[];var PIEcbDisplayHandles=[];var PIEcDisplayNames=[];var PIEcDisplayHandles=[];var PIEshowInput;var PIEshowDisplay;function PIEdummy(){}function PIEcreateGUIVariables(){PIEinputObject.it00="";PIEinputObject.it01="";PIEinputObject.it02="";PIEinputObject.it03="";PIEinputObject.it04="";PIEinputObject.it05="";PIEinputObject.it06="";PIEinputObject.it07="";PIEinputObject.it08="";PIEinputObject.it09="";PIEinputObject.it10="";PIEinputObject.it11="";PIEinputObject.it12="";PIEinputObject.it13="";PIEinputObject.it14="";PIEinputObject.it15="";PIEinputObject.it16="";PIEinputObject.it17="";PIEinputObject.it18="";PIEinputObject.it19="";PIEinputObject.s00=0;PIEinputObject.s01=0;PIEinputObject.s02=0;PIEinputObject.s03=0;PIEinputObject.s04=0;PIEinputObject.s05=0;PIEinputObject.s06=0;PIEinputObject.s07=0;PIEinputObject.s08=0;PIEinputObject.s09=0;PIEinputObject.s10=0;PIEinputObject.s11=0;PIEinputObject.s12=0;PIEinputObject.s13=0;PIEinputObject.s14=0;PIEinputObject.s15=0;PIEinputObject.s16=0;PIEinputObject.s17=0;PIEinputObject.s18=0;PIEinputObject.s19=0;PIEinputObject.cb00=false;PIEinputObject.cb01=false;PIEinputObject.cb02=false;PIEinputObject.cb03=false;PIEinputObject.cb04=false;PIEinputObject.cb05=false;PIEinputObject.cb06=false;PIEinputObject.cb07=false;PIEinputObject.cb08=false;PIEinputObject.cb09=false;PIEinputObject.cb10=false;PIEinputObject.cb11=false;PIEinputObject.cb12=false;PIEinputObject.cb13=false;PIEinputObject.cb14=false;PIEinputObject.cb15=false;PIEinputObject.cb16=false;PIEinputObject.cb17=false;PIEinputObject.cb18=false;PIEinputObject.cb19=false;PIEinputObject.c00=PIEdummy;PIEinputObject.c01=PIEdummy;PIEinputObject.c02=PIEdummy;PIEinputObject.c03=PIEdummy;PIEinputObject.c04=PIEdummy;PIEinputObject.c05=PIEdummy;PIEinputObject.c06=PIEdummy;PIEinputObject.c07=PIEdummy;PIEinputObject.c08=PIEdummy;PIEinputObject.c09=PIEdummy;PIEinputObject.c10=PIEdummy;PIEinputObject.c11=PIEdummy;PIEinputObject.c12=PIEdummy;PIEinputObject.c13=PIEdummy;PIEinputObject.c14=PIEdummy;PIEinputObject.c15=PIEdummy;PIEinputObject.c16=PIEdummy;PIEinputObject.c17=PIEdummy;PIEinputObject.c18=PIEdummy;PIEinputObject.c19=PIEdummy;PIEdisplayObject.it00="";PIEdisplayObject.it01="";PIEdisplayObject.it02="";PIEdisplayObject.it03="";PIEdisplayObject.it04="";PIEdisplayObject.it05="";PIEdisplayObject.it06="";PIEdisplayObject.it07="";PIEdisplayObject.it08="";PIEdisplayObject.it09="";PIEdisplayObject.it10="";PIEdisplayObject.it11="";PIEdisplayObject.it12="";PIEdisplayObject.it13="";PIEdisplayObject.it14="";PIEdisplayObject.it15="";PIEdisplayObject.it16="";PIEdisplayObject.it17="";PIEdisplayObject.it18="";PIEdisplayObject.it19="";PIEdisplayObject.s00=0;PIEdisplayObject.s01=0;PIEdisplayObject.s02=0;PIEdisplayObject.s03=0;PIEdisplayObject.s04=0;PIEdisplayObject.s05=0;PIEdisplayObject.s06=0;PIEdisplayObject.s07=0;PIEdisplayObject.s08=0;PIEdisplayObject.s09=0;PIEdisplayObject.s10=0;PIEdisplayObject.s11=0;PIEdisplayObject.s12=0;PIEdisplayObject.s13=0;PIEdisplayObject.s14=0;PIEdisplayObject.s15=0;PIEdisplayObject.s16=0;PIEdisplayObject.s17=0;PIEdisplayObject.s18=0;PIEdisplayObject.s19=0;PIEdisplayObject.cb00=false;PIEdisplayObject.cb01=false;PIEdisplayObject.cb02=false;PIEdisplayObject.cb03=false;PIEdisplayObject.cb04=false;PIEdisplayObject.cb05=false;PIEdisplayObject.cb06=false;PIEdisplayObject.cb07=false;PIEdisplayObject.cb08=false;PIEdisplayObject.cb09=false;PIEdisplayObject.cb10=false;PIEdisplayObject.cb11=false;PIEdisplayObject.cb12=false;PIEdisplayObject.cb13=false;PIEdisplayObject.cb14=false;PIEdisplayObject.cb15=false;PIEdisplayObject.cb16=false;PIEdisplayObject.cb17=false;PIEdisplayObject.cb18=false;PIEdisplayObject.cb19=false;PIEdisplayObject.c00=PIEdummy;PIEdisplayObject.c01=PIEdummy;PIEdisplayObject.c02=PIEdummy;PIEdisplayObject.c03=PIEdummy;PIEdisplayObject.c04=PIEdummy;PIEdisplayObject.c05=PIEdummy;PIEdisplayObject.c06=PIEdummy;PIEdisplayObject.c07=PIEdummy;PIEdisplayObject.c08=PIEdummy;PIEdisplayObject.c09=PIEdummy;PIEdisplayObject.c10=PIEdummy;PIEdisplayObject.c11=PIEdummy;PIEdisplayObject.c12=PIEdummy;PIEdisplayObject.c13=PIEdummy;PIEdisplayObject.c14=PIEdummy;PIEdisplayObject.c15=PIEdummy;PIEdisplayObject.c16=PIEdummy;PIEdisplayObject.c17=PIEdummy;PIEdisplayObject.c18=PIEdummy;PIEdisplayObject.c19=PIEdummy}function PIEshowDisplayPanel(){PIEinputGUI.domElement.style.display="none";PIEshowInput=false;PIEdisplayGUI.domElement.style.display="inline";PIEshowDisplay=true}function PIEshowInputPanel(){PIEdisplayGUI.domElement.style.display="none";PIEshowDisplay=false;PIEinputGUI.domElement.style.display="inline";PIEshowInput=true}function PIEsetupGUI(){PIEinputObject=new Object();PIEitInput=0;PIEsInput=0;PIEcbInput=0;PIEcInput=0;PIEdisplayObject=new Object();PIEitDisplay=0;PIEsDisplay=0;PIEcbDisplay=0;PIEcDisplay=0;PIEcreateGUIVariables();PIEinputGUI=new dat.gui.GUI();PIEdisplayGUI=new dat.gui.GUI();PIEshowInputPanel()}function loadExperiment(){var a;var b;if(!Detector.webgl){Detector.addGetWebGLMessage()}else{a="font-family: Monospace; background-color: #000; color: #000; margin: 0px; overflow: hidden;";b="font-family: Monospace; margin: 0px; overflow: hidden;";divStyle="position: fixed; left: 0px; top: 0px;";document.body.addEventListener("dragenter",PIEtableDragEnter,false);document.body.addEventListener("dragover",PIEtableDragOver,false);document.body.addEventListener("drop",PIEtableDrop,false);document.body.style=a;PIEscreenElem=document.createElement("div");PIEscreenElem.style.margin="0px";PIEscreenElem.style.padding="0px";document.body.appendChild(PIEscreenElem);PIEtoplineElem=document.createElement("div");PIEtoplineElem.style.backgroundColor="#000000";PIEtoplineElem.style.color="#fff";PIEtoplineElem.style.width="100%";PIEtoplineElem.style.position="absolute";PIEtoplineElem.style.left="0";PIEtoplineElem.style.top="0";document.body.appendChild(PIEtoplineElem);PIEsourceElem=document.createElement("span");PIEsourceElem.style=b;PIEtoplineElem.appendChild(PIEsourceElem);PIEdesignerElem=document.createElement("span");PIEdesignerElem.style=b;PIEtoplineElem.appendChild(PIEdesignerElem);PIEtitleElem=document.createElement("span");PIEtitleElem.style=b;PIEtoplineElem.appendChild(PIEtitleElem);PIEdeveloperElem=document.createElement("span");PIEdeveloperElem.style=b;PIEtoplineElem.appendChild(PIEdeveloperElem);PIEsourceElem.innerHTML='<a href="http://www.ekshiksha.org.in" target="_blank" style="color:#FF5454;"><b><u>ekshiksha</u></b></a>';PIEcanvasW=window.innerWidth;PIEcanvasH=window.innerHeight;PIEcanvasAspect=PIEcanvasW/PIEcanvasH;PIEanimationON=false;PIEanimationPaused=false;PIEanimationSpeed=1;PIEminAnimationSpeed=0.125;PIEmaxAnimationSpeed=4;PIEaddSystemButtons();PIEaddModalWindows();PIEscene=new THREE.Scene();PIEcameraAngle=30;PIEcamera=new THREE.PerspectiveCamera(PIEcameraAngle,PIEcanvasAspect,0.1,1000);PIEcameraTarget=new THREE.Vector3();PIErenderer=new THREE.WebGLRenderer({antialias:true});PIErenderer.setPixelRatio(window.devicePixelRatio);PIErenderer.setSize(PIEcanvasW,PIEcanvasH);PIErenderer.gammaInput=true;PIErenderer.gammaOutput=true;PIErenderer.shadowMap.enabled=true;PIEscreenElem.appendChild(PIErenderer.domElement);PIEsetupGUI();loadExperimentElements();lightX=PIEaoiTLX+PIEaoiW*0.25;lightY=PIEaoiBRY+PIEaoiH*0.75;lightZ=PIEcamera.position.z;PIEambientLight=new THREE.AmbientLight(16777215,0.3);PIEambientLight.position.set(lightX,lightY,lightZ);PIEscene.add(PIEambientLight);lightX=PIEaoiTLX+PIEaoiW*0.75;PIEspotLight=new THREE.PointLight(16777215);PIEspotLight.position.set(lightX,lightY,lightZ);PIEspotLight.castShadow=true;PIEscene.add(PIEspotLight);PIEraycaster=new THREE.Raycaster();PIEdragPlane=new THREE.Plane();PIEmouseP=new THREE.Vector2();PIEdragOffset=new THREE.Vector3();PIEdragIntersect=new THREE.Vector3();PIEselectedDrag=null;PIEselectedHover=null;window.addEventListener("resize",PIEresize,false);PIErenderer.domElement.addEventListener("mousemove",PIEmouseMove,false);PIErenderer.domElement.addEventListener("mousedown",PIEmouseDown,false);PIErenderer.domElement.addEventListener("mouseup",PIEmouseUp,false);PIErenderer.domElement.addEventListener("click",PIEmouseClick,false);updateExperimentElements(0,0);PIErenderer.render(PIEscene,PIEcamera)}}function PIEaddSystemButtons(){PIEresetButton=PIEaddButton("reset");PIEresetButton.style="background: none; border: none; box-sizing:border-box;";PIEresetButton.innerHTML='<img src="../PIE/images/ButtonRound.png" alt="reset" style="height: inherit; width: 60%;">';PIEresetButton.style.display="inline";PIEresetButton.addEventListener("click",PIEresetExperiment);PIEstartButton=PIEaddButton("start");PIEstartButton.style.display="inline";PIEstartButton.addEventListener("click",PIEstartAnimation);PIEstopButton=PIEaddButton("stop");PIEstopButton.style.display="none";PIEstopButton.addEventListener("click",PIEstopAnimation);PIEpauseButton=PIEaddButton("pause");PIEpauseButton.style="background: none; border: none; box-sizing:border-box;";PIEpauseButton.innerHTML='<img src="../PIE/images/ButtonPause.png" alt="pause" style="height: inherit; width: 60%;">';PIEpauseButton.style.display="inline";PIEpauseButton.style.visibility="hidden";PIEpauseButton.addEventListener("click",PIEpauseAnimation);PIEresumeButton=PIEaddButton("resume");PIEresumeButton.style="background: none; border: none; box-sizing:border-box;";PIEresumeButton.innerHTML='<img src="../PIE/images/ButtonPlay.png" alt="resume" style="height: inherit; width: 60%;">';PIEresumeButton.style.display="none";PIEresumeButton.style.visibility="hidden";PIEresumeButton.addEventListener("click",PIEresumeAnimation);PIEslowdownButton=PIEaddButton("<<");PIEslowdownButton.addEventListener("click",PIEslowdownAnimation);PIEspeedElem=document.createElement("span");PIEspeedElem.innerHTML=PIEanimationSpeed;PIEtoplineElem.appendChild(PIEspeedElem);PIEspeedupButton=PIEaddButton(">>");PIEspeedupButton.addEventListener("click",PIEspeedupAnimation);PIEinfoButton=PIEaddButton("info");PIEinfoButton.style="background: none; border: none; box-sizing:border-box;";PIEinfoButton.innerHTML='<img src="../PIE/images/ButtonInfo.png" alt="info" style="height: inherit; width: 60%;">';PIEinfoButton.addEventListener("click",PIEshowInfo);PIEhelpButton=PIEaddButton("help");PIEhelpButton.style="background: none; border: none; box-sizing:border-box;";PIEhelpButton.innerHTML='<img src="../PIE/images/ButtonHelp.png" alt="help" style="height: inherit; width: 60%;">';PIEhelpButton.addEventListener("click",PIEshowHelp)}function PIEaddModalWindows(){var a;var b;a="display: none; position: fixed; z-index: 1; padding-top: 100px; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4); color:#000;";ImodalContentStyle="background-color:rgb(236,236,236); background-color:rgba(236,236,236,0.95); margin: auto auto 200px; padding: 20px; border: 10px solid #008000; width: 80%;";HmodalContentStyle="background-color:rgb(236,236,236); background-color:rgba(236,236,236,0.95); margin: auto auto 200px; padding: 20px; border: 10px solid #F0F000; width: 80%;";PIEhelpModal=document.createElement("div");PIEhelpModal.style=a;PIEhelpModal.onclick=function(){PIEhelpModal.style.display="none"};PIEhelpContent=document.createElement("div");PIEhelpContent.style=HmodalContentStyle;PIEhelpSpan=document.createElement("span");PIEhelpSpan.className="close";PIEhelpSpan.style="color: #000000; float: right; font-size: 28px; font-weight: bold;";PIEhelpSpan.innerHTML="&times;";PIEhelpSpan.onclick=function(){PIEhelpModal.style.display="none"};PIEhelpSpan.onmouseover=function(){PIEhelpSpan.style="color: #000; text-decoration: none; cursor: pointer;"};PIEhelpSpan.onmouseout=function(){PIEhelpSpan.style="color: #000000; cursor: auto;"};PIEhelpContent.appendChild(PIEhelpSpan);PIEhelpModal.appendChild(PIEhelpContent);PIEscreenElem.appendChild(PIEhelpModal);PIEinfoModal=document.createElement("div");PIEinfoModal.style=a;PIEinfoModal.onclick=function(){PIEinfoModal.style.display="none"};PIEinfoContent=document.createElement("div");PIEinfoContent.style=ImodalContentStyle;PIEinfoSpan=document.createElement("span");PIEinfoSpan.className="close";PIEinfoSpan.style="color: #008000; float: right; font-size: 28px; font-weight: bold;";PIEinfoSpan.innerHTML="&times;";PIEinfoSpan.onclick=function(){PIEinfoModal.style.display="none"};PIEinfoSpan.onmouseover=function(){PIEinfoSpan.style="color: #000; text-decoration: none; cursor: pointer;"};PIEinfoSpan.onmouseout=function(){PIEinfoSpan.style="color: #008000; cursor: auto;"};PIEinfoContent.appendChild(PIEinfoSpan);PIEinfoModal.appendChild(PIEinfoContent);PIEscreenElem.appendChild(PIEinfoModal)}function PIEshowHelp(){PIEhelpModal.style.display="block"}function PIEupdateHelp(b){var a;PIEhelpContent.innerHTML="";PIEhelpContent.appendChild(PIEhelpSpan);a=PIEhelpContent.innerHTML;PIEhelpContent.innerHTML=a+b}function PIEappendHelp(b){var a;a=PIEhelpContent.innerHTML;PIEhelpContent.innerHTML=a+b}function PIEshowInfo(){PIEinfoModal.style.display="block"}function PIEupdateInfo(a){var b;PIEinfoContent.innerHTML="";PIEinfoContent.appendChild(PIEinfoSpan);b=PIEinfoContent.innerHTML;PIEinfoContent.innerHTML=b+a}function PIEappendInfo(a){var b;b=PIEinfoContent.innerHTML;PIEinfoContent.innerHTML=b+a}function PIEresize(){var b;var a;b=window.innerWidth;a=window.innerHeight;PIEcanvasW=b;PIEcanvasH=a;PIEcanvasAspect=PIEcanvasW/PIEcanvasH;PIErenderer.setSize(PIEcanvasW,PIEcanvasH);PIEadjustDisplayScene();PIErender()}function PIEsetExperimentTitle(a){PIEtitleElem.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><u>"+a+"</u></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}function PIEsetDeveloperName(a){PIEdeveloperElem.innerHTML="Created by : "+a}function PIEhideControlElement(){}function PIEshowControlElement(){}function PIEaddDualText(a,c,b){PIEaddInputText(a,c,b);PIEaddDisplayText(a,c)}function PIEaddDisplayText(b,c){var a;switch(PIEitDisplay){case 0:PIEdisplayObject.it00=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it00").name(b);break;case 1:PIEdisplayObject.it01=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it01").name(b);break;case 2:PIEdisplayObject.it02=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it02").name(b);break;case 3:PIEdisplayObject.it03=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it03").name(b);break;case 4:PIEdisplayObject.it04=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it04").name(b);break;case 5:PIEdisplayObject.it05=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it05").name(b);break;case 6:PIEdisplayObject.it06=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it06").name(b);break;case 7:PIEdisplayObject.it07=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it07").name(b);break;case 8:PIEdisplayObject.it08=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it08").name(b);break;case 9:PIEdisplayObject.it09=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it09").name(b);break;case 10:PIEdisplayObject.it10=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it10").name(b);break;case 11:PIEdisplayObject.it11=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it11").name(b);break;case 12:PIEdisplayObject.it12=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it12").name(b);break;case 13:PIEdisplayObject.it13=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it13").name(b);break;case 14:PIEdisplayObject.it14=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it14").name(b);break;case 15:PIEdisplayObject.it15=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it15").name(b);break;case 16:PIEdisplayObject.it16=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it16").name(b);break;case 17:PIEdisplayObject.it17=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it17").name(b);break;case 18:PIEdisplayObject.it18=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it18").name(b);break;case 19:PIEdisplayObject.it19=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it19").name(b);break;default:return;break}PIEitDisplayHandles.push(a);PIEitDisplayNames.push(b);PIEitDisplay++}function PIEaddInputText(b,d,c){var a;switch(PIEitInput){case 0:PIEinputObject.it00=d;a=PIEinputGUI.add(PIEinputObject,"it00").name(b);break;case 1:PIEinputObject.it01=d;a=PIEinputGUI.add(PIEinputObject,"it01").name(b);break;case 2:PIEinputObject.it02=d;a=PIEinputGUI.add(PIEinputObject,"it02").name(b);break;case 3:PIEinputObject.it03=d;a=PIEinputGUI.add(PIEinputObject,"it03").name(b);break;case 4:PIEinputObject.it04=d;a=PIEinputGUI.add(PIEinputObject,"it04").name(b);break;case 5:PIEinputObject.it05=d;a=PIEinputGUI.add(PIEinputObject,"it05").name(b);break;case 6:PIEinputObject.it06=d;a=PIEinputGUI.add(PIEinputObject,"it06").name(b);break;case 7:PIEinputObject.it07=d;a=PIEinputGUI.add(PIEinputObject,"it07").name(b);break;case 8:PIEinputObject.it08=d;a=PIEinputGUI.add(PIEinputObject,"it08").name(b);break;case 9:PIEinputObject.it09=d;a=PIEinputGUI.add(PIEinputObject,"it09").name(b);break;case 10:PIEinputObject.it10=d;a=PIEinputGUI.add(PIEinputObject,"it10").name(b);break;case 11:PIEinputObject.it11=d;a=PIEinputGUI.add(PIEinputObject,"it11").name(b);break;case 12:PIEinputObject.it12=d;a=PIEinputGUI.add(PIEinputObject,"it12").name(b);break;case 13:PIEinputObject.it13=d;a=PIEinputGUI.add(PIEinputObject,"it13").name(b);break;case 14:PIEinputObject.it14=d;a=PIEinputGUI.add(PIEinputObject,"it14").name(b);break;case 15:PIEinputObject.it15=d;a=PIEinputGUI.add(PIEinputObject,"it15").name(b);break;case 16:PIEinputObject.it16=d;a=PIEinputGUI.add(PIEinputObject,"it16").name(b);break;case 17:PIEinputObject.it17=d;a=PIEinputGUI.add(PIEinputObject,"it17").name(b);break;case 18:PIEinputObject.it18=d;a=PIEinputGUI.add(PIEinputObject,"it18").name(b);break;case 19:PIEinputObject.it19=d;a=PIEinputGUI.add(PIEinputObject,"it19").name(b);break;default:return;break}a.onFinishChange(c);PIEitInputHandles.push(a);PIEitInputNames.push(b);PIEitInput++}function PIEchangeDisplayText(b,d){var a;var c;a=null;for(c=0;(a==null)&&(c<PIEitDisplay);c++){if(PIEitDisplayNames[c]==b){a=PIEitDisplayHandles[c]}}if(a!=null){switch(c-1){case 0:PIEdisplayObject.it00=d;break;case 1:PIEdisplayObject.it01=d;break;case 2:PIEdisplayObject.it02=d;break;case 3:PIEdisplayObject.it03=d;break;case 4:PIEdisplayObject.it04=d;break;case 5:PIEdisplayObject.it05=d;break;case 6:PIEdisplayObject.it06=d;break;case 7:PIEdisplayObject.it07=d;break;case 8:PIEdisplayObject.it08=d;break;case 9:PIEdisplayObject.it09=d;break;case 10:PIEdisplayObject.it10=d;break;case 11:PIEdisplayObject.it11=d;break;case 12:PIEdisplayObject.it12=d;break;case 13:PIEdisplayObject.it13=d;break;case 14:PIEdisplayObject.it14=d;break;case 15:PIEdisplayObject.it15=d;break;case 16:PIEdisplayObject.it16=d;break;case 17:PIEdisplayObject.it17=d;break;case 18:PIEdisplayObject.it18=d;break;case 19:PIEdisplayObject.it19=d;break;default:break}a.updateDisplay()}}function PIEchangeInputText(b,d){var a;var c;a=null;for(c=0;(a==null)&&(c<PIEitInput);c++){if(PIEitInputNames[c]==b){a=PIEitInputHandles[c]}}if(a!=null){switch(c-1){case 0:PIEinputObject.it00=d;break;case 1:PIEinputObject.it01=d;break;case 2:PIEinputObject.it02=d;break;case 3:PIEinputObject.it03=d;break;case 4:PIEinputObject.it04=d;break;case 5:PIEinputObject.it05=d;break;case 6:PIEinputObject.it06=d;break;case 7:PIEinputObject.it07=d;break;case 8:PIEinputObject.it08=d;break;case 9:PIEinputObject.it09=d;break;case 10:PIEinputObject.it10=d;break;case 11:PIEinputObject.it11=d;break;case 12:PIEinputObject.it12=d;break;case 13:PIEinputObject.it13=d;break;case 14:PIEinputObject.it14=d;break;case 15:PIEinputObject.it15=d;break;case 16:PIEinputObject.it16=d;break;case 17:PIEinputObject.it17=d;break;case 18:PIEinputObject.it18=d;break;case 19:PIEinputObject.it19=d;break;default:break}a.updateDisplay()}}function PIEgetDisplayText(a){var d;var b;var c;d=false;for(b=0;(d==false)&&(b<PIEitDisplay);b++){if(PIEitDisplayNames[b]==a){d=true}}c="";if(d==true){switch(b-1){case 0:c=PIEdisplayObject.it00;break;case 1:c=PIEdisplayObject.it01;break;case 2:c=PIEdisplayObject.it02;break;case 3:c=PIEdisplayObject.it03;break;case 4:c=PIEdisplayObject.it04;break;case 5:c=PIEdisplayObject.it05;break;case 6:c=PIEdisplayObject.it06;break;case 7:c=PIEdisplayObject.it07;break;case 8:c=PIEdisplayObject.it08;break;case 9:c=PIEdisplayObject.it09;break;case 10:c=PIEdisplayObject.it10;break;case 11:c=PIEdisplayObject.it11;break;case 12:c=PIEdisplayObject.it12;break;case 13:c=PIEdisplayObject.it13;break;case 14:c=PIEdisplayObject.it14;break;case 15:c=PIEdisplayObject.it15;break;case 16:c=PIEdisplayObject.it16;break;case 17:c=PIEdisplayObject.it17;break;case 18:c=PIEdisplayObject.it18;break;case 19:c=PIEdisplayObject.it19;break;default:break}}return(c)}function PIEgetInputText(a){var d;var b;var c;d=false;for(b=0;(d==false)&&(b<PIEitInput);b++){if(PIEitInputNames[b]==a){d=true}}c="";if(d==true){switch(b-1){case 0:c=PIEinputObject.it00;break;case 1:c=PIEinputObject.it01;break;case 2:c=PIEinputObject.it02;break;case 3:c=PIEinputObject.it03;break;case 4:c=PIEinputObject.it04;break;case 5:c=PIEinputObject.it05;break;case 6:c=PIEinputObject.it06;break;case 7:c=PIEinputObject.it07;break;case 8:c=PIEinputObject.it08;break;case 9:c=PIEinputObject.it09;break;case 10:c=PIEinputObject.it10;break;case 11:c=PIEinputObject.it11;break;case 12:c=PIEinputObject.it12;break;case 13:c=PIEinputObject.it13;break;case 14:c=PIEinputObject.it14;break;case 15:c=PIEinputObject.it15;break;case 16:c=PIEinputObject.it16;break;case 17:c=PIEinputObject.it17;break;case 18:c=PIEinputObject.it18;break;case 19:c=PIEinputObject.it19;break;default:break}}return(c)}function PIEaddDualText(b,f,d,c,a,e){PIEaddInputSlider(b,f,d,c,a,e);PIEaddDisplaySlider(b,f,c,a,e)}function PIEaddDisplaySlider(c,f,d,b,e){var a;switch(PIEsDisplay){case 0:PIEdisplayObject.s00=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s00").min(d).max(b).step(e).name(c);break;case 1:PIEdisplayObject.s01=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s01").min(d).max(b).step(e).name(c);break;case 2:PIEdisplayObject.s02=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s02").min(d).max(b).step(e).name(c);break;case 3:PIEdisplayObject.s03=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s03").min(d).max(b).step(e).name(c);break;case 4:PIEdisplayObject.s04=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s04").min(d).max(b).step(e).name(c);break;case 5:PIEdisplayObject.s05=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s05").min(d).max(b).step(e).name(c);break;case 6:PIEdisplayObject.s06=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s06").min(d).max(b).step(e).name(c);break;case 7:PIEdisplayObject.s07=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s07").min(d).max(b).step(e).name(c);break;case 8:PIEdisplayObject.s08=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s08").min(d).max(b).step(e).name(c);break;case 9:PIEdisplayObject.s09=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s09").min(d).max(b).step(e).name(c);break;case 10:PIEdisplayObject.s10=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s10").min(d).max(b).step(e).name(c);break;case 11:PIEdisplayObject.s11=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s11").min(d).max(b).step(e).name(c);break;case 12:PIEdisplayObject.s12=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s12").min(d).max(b).step(e).name(c);break;case 13:PIEdisplayObject.s13=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s13").min(d).max(b).step(e).name(c);break;case 14:PIEdisplayObject.s14=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s14").min(d).max(b).step(e).name(c);break;case 15:PIEdisplayObject.s15=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s15").min(d).max(b).step(e).name(c);break;case 16:PIEdisplayObject.s16=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s16").min(d).max(b).step(e).name(c);break;case 17:PIEdisplayObject.s17=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s17").min(d).max(b).step(e).name(c);break;case 18:PIEdisplayObject.s18=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s18").min(d).max(b).step(e).name(c);break;case 19:PIEdisplayObject.s19=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s19").min(d).max(b).step(e).name(c);break;default:return;break}PIEsDisplayHandles.push(a);PIEsDisplayNames.push(c);PIEsDisplay++}function PIEaddInputSlider(c,g,e,d,b,f){var a;switch(PIEsInput){case 0:PIEinputObject.s00=g;a=PIEinputGUI.add(PIEinputObject,"s00").min(d).max(b).step(f).name(c);break;case 1:PIEinputObject.s01=g;a=PIEinputGUI.add(PIEinputObject,"s01").min(d).max(b).step(f).name(c);break;case 2:PIEinputObject.s02=g;a=PIEinputGUI.add(PIEinputObject,"s02").min(d).max(b).step(f).name(c);break;case 3:PIEinputObject.s03=g;a=PIEinputGUI.add(PIEinputObject,"s03").min(d).max(b).step(f).name(c);break;case 4:PIEinputObject.s04=g;a=PIEinputGUI.add(PIEinputObject,"s04").min(d).max(b).step(f).name(c);break;case 5:PIEinputObject.s05=g;a=PIEinputGUI.add(PIEinputObject,"s05").min(d).max(b).step(f).name(c);break;case 6:PIEinputObject.s06=g;a=PIEinputGUI.add(PIEinputObject,"s06").min(d).max(b).step(f).name(c);break;case 7:PIEinputObject.s07=g;a=PIEinputGUI.add(PIEinputObject,"s07").min(d).max(b).step(f).name(c);break;case 8:PIEinputObject.s08=g;a=PIEinputGUI.add(PIEinputObject,"s08").min(d).max(b).step(f).name(c);break;case 9:PIEinputObject.s09=g;a=PIEinputGUI.add(PIEinputObject,"s09").min(d).max(b).step(f).name(c);break;case 10:PIEinputObject.s10=g;a=PIEinputGUI.add(PIEinputObject,"s10").min(d).max(b).step(f).name(c);break;case 11:PIEinputObject.s11=g;a=PIEinputGUI.add(PIEinputObject,"s11").min(d).max(b).step(f).name(c);break;case 12:PIEinputObject.s12=g;a=PIEinputGUI.add(PIEinputObject,"s12").min(d).max(b).step(f).name(c);break;case 13:PIEinputObject.s13=g;a=PIEinputGUI.add(PIEinputObject,"s13").min(d).max(b).step(f).name(c);break;case 14:PIEinputObject.s14=g;a=PIEinputGUI.add(PIEinputObject,"s14").min(d).max(b).step(f).name(c);break;case 15:PIEinputObject.s15=g;a=PIEinputGUI.add(PIEinputObject,"s15").min(d).max(b).step(f).name(c);break;case 16:PIEinputObject.s16=g;a=PIEinputGUI.add(PIEinputObject,"s16").min(d).max(b).step(f).name(c);break;case 17:PIEinputObject.s17=g;a=PIEinputGUI.add(PIEinputObject,"s17").min(d).max(b).step(f).name(c);break;case 18:PIEinputObject.s18=g;a=PIEinputGUI.add(PIEinputObject,"s18").min(d).max(b).step(f).name(c);break;case 19:PIEinputObject.s19=g;a=PIEinputGUI.add(PIEinputObject,"s19").min(d).max(b).step(f).name(c);break;default:return;break}a.onFinishChange(e);PIEsInputHandles.push(a);PIEsInputNames.push(c);PIEsInput++}function PIEchangeDisplaySlider(b,d){var a;var c;a=null;for(c=0;(a==null)&&(c<PIEsDisplay);c++){if(PIEsDisplayNames[c]==b){a=PIEsDisplayHandles[c]}}if(a!=null){switch(c-1){case 0:PIEdisplayObject.s00=d;break;case 1:PIEdisplayObject.s01=d;break;case 2:PIEdisplayObject.s02=d;break;case 3:PIEdisplayObject.s03=d;break;case 4:PIEdisplayObject.s04=d;break;case 5:PIEdisplayObject.s05=d;break;case 6:PIEdisplayObject.s06=d;break;case 7:PIEdisplayObject.s07=d;break;case 8:PIEdisplayObject.s08=d;break;case 9:PIEdisplayObject.s09=d;break;case 10:PIEdisplayObject.s10=d;break;case 11:PIEdisplayObject.s11=d;break;case 12:PIEdisplayObject.s12=d;break;case 13:PIEdisplayObject.s13=d;break;case 14:PIEdisplayObject.s14=d;break;case 15:PIEdisplayObject.s15=d;break;case 16:PIEdisplayObject.s16=d;break;case 17:PIEdisplayObject.s17=d;break;case 18:PIEdisplayObject.s18=d;break;case 19:PIEdisplayObject.s19=d;break;default:break}a.updateDisplay()}}function PIEchangeInputSlider(b,d){var a;var c;a=null;for(c=0;(a==null)&&(c<PIEsInput);c++){if(PIEsInputNames[c]==b){a=PIEsInputHandles[c]}}if(a!=null){switch(c-1){case 0:PIEinputObject.s00=d;break;case 1:PIEinputObject.s01=d;break;case 2:PIEinputObject.s02=d;break;case 3:PIEinputObject.s03=d;break;case 4:PIEinputObject.s04=d;break;case 5:PIEinputObject.s05=d;break;case 6:PIEinputObject.s06=d;break;case 7:PIEinputObject.s07=d;break;case 8:PIEinputObject.s08=d;break;case 9:PIEinputObject.s09=d;break;case 10:PIEinputObject.s10=d;break;case 11:PIEinputObject.s11=d;break;case 12:PIEinputObject.s12=d;break;case 13:PIEinputObject.s13=d;break;case 14:PIEinputObject.s14=d;break;case 15:PIEinputObject.s15=d;break;case 16:PIEinputObject.s16=d;break;case 17:PIEinputObject.s17=d;break;case 18:PIEinputObject.s18=d;break;case 19:PIEinputObject.s19=d;break;default:break}a.updateDisplay()}}function PIEgetDisplaySlider(a){var d;var b;var c;d=false;for(b=0;(d==false)&&(b<PIEsDisplay);b++){if(PIEsDisplayNames[b]==a){d=true}}c=0;if(d==true){switch(b-1){case 0:c=PIEdisplayObject.s00;break;case 1:c=PIEdisplayObject.s01;break;case 2:c=PIEdisplayObject.s02;break;case 3:c=PIEdisplayObject.s03;break;case 4:c=PIEdisplayObject.s04;break;case 5:c=PIEdisplayObject.s05;break;case 6:c=PIEdisplayObject.s06;break;case 7:c=PIEdisplayObject.s07;break;case 8:c=PIEdisplayObject.s08;break;case 9:c=PIEdisplayObject.s09;break;case 10:c=PIEdisplayObject.s10;break;case 11:c=PIEdisplayObject.s11;break;case 12:c=PIEdisplayObject.s12;break;case 13:c=PIEdisplayObject.s13;break;case 14:c=PIEdisplayObject.s14;break;case 15:c=PIEdisplayObject.s15;break;case 16:c=PIEdisplayObject.s16;break;case 17:c=PIEdisplayObject.s17;break;case 18:c=PIEdisplayObject.s18;break;case 19:c=PIEdisplayObject.s19;break;default:break}}return(c)}function PIEgetInputSlider(a){var d;var b;var c;d=false;for(b=0;(d==false)&&(b<PIEsInput);b++){if(PIEsInputNames[b]==a){d=true}}c=0;if(d==true){switch(b-1){case 0:c=PIEinputObject.s00;break;case 1:c=PIEinputObject.s01;break;case 2:c=PIEinputObject.s02;break;case 3:c=PIEinputObject.s03;break;case 4:c=PIEinputObject.s04;break;case 5:c=PIEinputObject.s05;break;case 6:c=PIEinputObject.s06;break;case 7:c=PIEinputObject.s07;break;case 8:c=PIEinputObject.s08;break;case 9:c=PIEinputObject.s09;break;case 10:c=PIEinputObject.s10;break;case 11:c=PIEinputObject.s11;break;case 12:c=PIEinputObject.s12;break;case 13:c=PIEinputObject.s13;break;case 14:c=PIEinputObject.s14;break;case 15:c=PIEinputObject.s15;break;case 16:c=PIEinputObject.s16;break;case 17:c=PIEinputObject.s17;break;case 18:c=PIEinputObject.s18;break;case 19:c=PIEinputObject.s19;break;default:break}}return(c)}function PIEaddDualCheckbox(a,c,b){PIEaddInputCheckbox(a,c,b);PIEaddDisplayCheckbox(a,c)}function PIEaddDisplayCheckbox(b,d,c){var a;switch(PIEcbDisplay){case 0:PIEdisplayObject.cb00=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb00").name(b);break;case 1:PIEdisplayObject.cb01=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb01").name(b);break;case 2:PIEdisplayObject.cb02=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb02").name(b);break;case 3:PIEdisplayObject.cb03=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb03").name(b);break;case 4:PIEdisplayObject.cb04=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb04").name(b);break;case 5:PIEdisplayObject.cb05=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb05").name(b);break;case 6:PIEdisplayObject.cb06=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb06").name(b);break;case 7:PIEdisplayObject.cb07=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb07").name(b);break;case 8:PIEdisplayObject.cb08=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb08").name(b);break;case 9:PIEdisplayObject.cb09=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb09").name(b);break;case 10:PIEdisplayObject.cb10=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb10").name(b);break;case 11:PIEdisplayObject.cb11=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb11").name(b);break;case 12:PIEdisplayObject.cb12=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb12").name(b);break;case 13:PIEdisplayObject.cb13=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb13").name(b);break;case 14:PIEdisplayObject.cb14=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb14").name(b);break;case 15:PIEdisplayObject.cb15=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb15").name(b);break;case 16:PIEdisplayObject.cb16=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb16").name(b);break;case 17:PIEdisplayObject.cb17=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb17").name(b);break;case 18:PIEdisplayObject.cb18=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb18").name(b);break;case 19:PIEdisplayObject.cb19=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb19").name(b);break;default:return;break}a.onChange(c);PIEcbDisplayHandles.push(a);PIEcbDisplayNames.push(b);PIEcbDisplay++}function PIEaddInputCheckbox(b,d,c){var a;switch(PIEcbInput){case 0:PIEinputObject.cb00=d;a=PIEinputGUI.add(PIEinputObject,"cb00").name(b);break;case 1:PIEinputObject.cb01=d;a=PIEinputGUI.add(PIEinputObject,"cb01").name(b);break;case 2:PIEinputObject.cb02=d;a=PIEinputGUI.add(PIEinputObject,"cb02").name(b);break;case 3:PIEinputObject.cb03=d;a=PIEinputGUI.add(PIEinputObject,"cb03").name(b);break;case 4:PIEinputObject.cb04=d;a=PIEinputGUI.add(PIEinputObject,"cb04").name(b);break;case 5:PIEinputObject.cb05=d;a=PIEinputGUI.add(PIEinputObject,"cb05").name(b);break;case 6:PIEinputObject.cb06=d;a=PIEinputGUI.add(PIEinputObject,"cb06").name(b);break;case 7:PIEinputObject.cb07=d;a=PIEinputGUI.add(PIEinputObject,"cb07").name(b);break;case 8:PIEinputObject.cb08=d;a=PIEinputGUI.add(PIEinputObject,"cb08").name(b);break;case 9:PIEinputObject.cb09=d;a=PIEinputGUI.add(PIEinputObject,"cb09").name(b);break;case 10:PIEinputObject.cb10=d;a=PIEinputGUI.add(PIEinputObject,"cb10").name(b);break;case 11:PIEinputObject.cb11=d;a=PIEinputGUI.add(PIEinputObject,"cb11").name(b);break;case 12:PIEinputObject.cb12=d;a=PIEinputGUI.add(PIEinputObject,"cb12").name(b);break;case 13:PIEinputObject.cb13=d;a=PIEinputGUI.add(PIEinputObject,"cb13").name(b);break;case 14:PIEinputObject.cb14=d;a=PIEinputGUI.add(PIEinputObject,"cb14").name(b);break;case 15:PIEinputObject.cb15=d;a=PIEinputGUI.add(PIEinputObject,"cb15").name(b);break;case 16:PIEinputObject.cb16=d;a=PIEinputGUI.add(PIEinputObject,"cb16").name(b);break;case 17:PIEinputObject.cb17=d;a=PIEinputGUI.add(PIEinputObject,"cb17").name(b);break;case 18:PIEinputObject.cb18=d;a=PIEinputGUI.add(PIEinputObject,"cb18").name(b);break;case 19:PIEinputObject.cb19=d;a=PIEinputGUI.add(PIEinputObject,"cb19").name(b);break;default:return;break}a.onChange(c);PIEcbInputHandles.push(a);PIEcbInputNames.push(b);PIEcbInput++}function PIEchangeDisplayCheckbox(b,d){var a;var c;a=null;for(c=0;(a==null)&&(c<PIEcbDisplay);c++){if(PIEcbDisplayNames[c]==b){a=PIEcbDisplayHandles[c]}}if(a!=null){switch(c-1){case 0:PIEdisplayObject.cb00=d;break;case 1:PIEdisplayObject.cb01=d;break;case 2:PIEdisplayObject.cb02=d;break;case 3:PIEdisplayObject.cb03=d;break;case 4:PIEdisplayObject.cb04=d;break;case 5:PIEdisplayObject.cb05=d;break;case 6:PIEdisplayObject.cb06=d;break;case 7:PIEdisplayObject.cb07=d;break;case 8:PIEdisplayObject.cb08=d;break;case 9:PIEdisplayObject.cb09=d;break;case 10:PIEdisplayObject.cb10=d;break;case 11:PIEdisplayObject.cb11=d;break;case 12:PIEdisplayObject.cb12=d;break;case 13:PIEdisplayObject.cb13=d;break;case 14:PIEdisplayObject.cb14=d;break;case 15:PIEdisplayObject.cb15=d;break;case 16:PIEdisplayObject.cb16=d;break;case 17:PIEdisplayObject.cb17=d;break;case 18:PIEdisplayObject.cb18=d;break;case 19:PIEdisplayObject.cb19=d;break;default:break}a.updateDisplay()}}function PIEchangeInputCheckbox(b,d){var a;var c;a=null;for(c=0;(a==null)&&(c<PIEcbInput);c++){if(PIEcbInputNames[c]==b){a=PIEcbInputHandles[c]}}if(a!=null){switch(c-1){case 0:PIEinputObject.cb00=d;break;case 1:PIEinputObject.cb01=d;break;case 2:PIEinputObject.cb02=d;break;case 3:PIEinputObject.cb03=d;break;case 4:PIEinputObject.cb04=d;break;case 5:PIEinputObject.cb05=d;break;case 6:PIEinputObject.cb06=d;break;case 7:PIEinputObject.cb07=d;break;case 8:PIEinputObject.cb08=d;break;case 9:PIEinputObject.cb09=d;break;case 10:PIEinputObject.cb10=d;break;case 11:PIEinputObject.cb11=d;break;case 12:PIEinputObject.cb12=d;break;case 13:PIEinputObject.cb13=d;break;case 14:PIEinputObject.cb14=d;break;case 15:PIEinputObject.cb15=d;break;case 16:PIEinputObject.cb16=d;break;case 17:PIEinputObject.cb17=d;break;case 18:PIEinputObject.cb18=d;break;case 19:PIEinputObject.cb19=d;break;default:break}a.updateDisplay()}}function PIEgetDisplayCheckbox(a){var d;var b;var c;d=false;for(b=0;(d==false)&&(b<PIEcbDisplay);b++){if(PIEcbDisplayNames[b]==a){d=true}}c=false;if(d==true){switch(b-1){case 0:c=PIEdisplayObject.cb00;break;case 1:c=PIEdisplayObject.cb01;break;case 2:c=PIEdisplayObject.cb02;break;case 3:c=PIEdisplayObject.cb03;break;case 4:c=PIEdisplayObject.cb04;break;case 5:c=PIEdisplayObject.cb05;break;case 6:c=PIEdisplayObject.cb06;break;case 7:c=PIEdisplayObject.cb07;break;case 8:c=PIEdisplayObject.cb08;break;case 9:c=PIEdisplayObject.cb09;break;case 10:c=PIEdisplayObject.cb10;break;case 11:c=PIEdisplayObject.cb11;break;case 12:c=PIEdisplayObject.cb12;break;case 13:c=PIEdisplayObject.cb13;break;case 14:c=PIEdisplayObject.cb14;break;case 15:c=PIEdisplayObject.cb15;break;case 16:c=PIEdisplayObject.cb16;break;case 17:c=PIEdisplayObject.cb17;break;case 18:c=PIEdisplayObject.cb18;break;case 19:c=PIEdisplayObject.cb19;break;default:break}}return(c)}function PIEaddDualCommand(a,b){PIEaddInputCommand(a,b);PIEaddDisplayCommand(a,b)}function PIEaddDisplayCommand(b,c){var a;switch(PIEcDisplay){case 0:PIEdisplayObject.c00=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c00").name(b);break;case 1:PIEdisplayObject.c01=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c01").name(b);break;case 2:PIEdisplayObject.c02=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c02").name(b);break;case 3:PIEdisplayObject.c03=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c03").name(b);break;case 4:PIEdisplayObject.c04=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c04").name(b);break;case 5:PIEdisplayObject.c05=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c05").name(b);break;case 6:PIEdisplayObject.c06=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c06").name(b);break;case 7:PIEdisplayObject.c07=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c07").name(b);break;case 8:PIEdisplayObject.c08=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c08").name(b);break;case 9:PIEdisplayObject.c09=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c09").name(b);break;case 10:PIEdisplayObject.c10=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c10").name(b);break;case 11:PIEdisplayObject.c11=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c11").name(b);break;case 12:PIEdisplayObject.c12=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c12").name(b);break;case 13:PIEdisplayObject.c13=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c13").name(b);break;case 14:PIEdisplayObject.c14=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c14").name(b);break;case 15:PIEdisplayObject.c15=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c15").name(b);break;case 16:PIEdisplayObject.c16=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c16").name(b);break;case 17:PIEdisplayObject.c17=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c17").name(b);break;case 18:PIEdisplayObject.c18=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c18").name(b);break;case 19:PIEdisplayObject.c19=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c19").name(b);break;default:return;break}PIEcDisplayHandles.push(a);PIEcDisplayNames.push(b);PIEcDisplay++}function PIEaddInputCommand(b,c){var a;switch(PIEcInput){case 0:PIEinputObject.c00=c;a=PIEinputGUI.add(PIEinputObject,"c00").name(b);break;case 1:PIEinputObject.c01=c;a=PIEinputGUI.add(PIEinputObject,"c01").name(b);break;case 2:PIEinputObject.c02=c;a=PIEinputGUI.add(PIEinputObject,"c02").name(b);break;case 3:PIEinputObject.c03=c;a=PIEinputGUI.add(PIEinputObject,"c03").name(b);break;case 4:PIEinputObject.c04=c;a=PIEinputGUI.add(PIEinputObject,"c04").name(b);break;case 5:PIEinputObject.c05=c;a=PIEinputGUI.add(PIEinputObject,"c05").name(b);break;case 6:PIEinputObject.c06=c;a=PIEinputGUI.add(PIEinputObject,"c06").name(b);break;case 7:PIEinputObject.c07=c;a=PIEinputGUI.add(PIEinputObject,"c07").name(b);break;case 8:PIEinputObject.c08=c;a=PIEinputGUI.add(PIEinputObject,"c08").name(b);break;case 9:PIEinputObject.c09=c;a=PIEinputGUI.add(PIEinputObject,"c09").name(b);break;case 10:PIEinputObject.c10=c;a=PIEinputGUI.add(PIEinputObject,"c10").name(b);break;case 11:PIEinputObject.c11=c;a=PIEinputGUI.add(PIEinputObject,"c11").name(b);break;case 12:PIEinputObject.c12=c;a=PIEinputGUI.add(PIEinputObject,"c12").name(b);break;case 13:PIEinputObject.c13=c;a=PIEinputGUI.add(PIEinputObject,"c13").name(b);break;case 14:PIEinputObject.c14=c;a=PIEinputGUI.add(PIEinputObject,"c14").name(b);break;case 15:PIEinputObject.c15=c;a=PIEinputGUI.add(PIEinputObject,"c15").name(b);break;case 16:PIEinputObject.c16=c;a=PIEinputGUI.add(PIEinputObject,"c16").name(b);break;case 17:PIEinputObject.c17=c;a=PIEinputGUI.add(PIEinputObject,"c17").name(b);break;case 18:PIEinputObject.c18=c;a=PIEinputGUI.add(PIEinputObject,"c18").name(b);break;case 19:PIEinputObject.c19=c;a=PIEinputGUI.add(PIEinputObject,"c19").name(b);break;default:return;break}PIEcInputHandles.push(a);PIEcInputNames.push(b);PIEcInput++}function PIEchangeDisplayCommand(c,b,d){var a;var e;a=null;for(e=0;(a==null)&&(e<PIEcDisplay);e++){if(PIEcDisplayNames[e]==c){a=PIEcDisplayHandles[e]}}if(a!=null){switch(e-1){case 0:PIEdisplayObject.c00=d;break;case 1:PIEdisplayObject.c01=d;break;case 2:PIEdisplayObject.c02=d;break;case 3:PIEdisplayObject.c03=d;break;case 4:PIEdisplayObject.c04=d;break;case 5:PIEdisplayObject.c05=d;break;case 6:PIEdisplayObject.c06=d;break;case 7:PIEdisplayObject.c07=d;break;case 8:PIEdisplayObject.c08=d;break;case 9:PIEdisplayObject.c09=d;break;case 10:PIEdisplayObject.c10=d;break;case 11:PIEdisplayObject.c11=d;break;case 12:PIEdisplayObject.c12=d;break;case 13:PIEdisplayObject.c13=d;break;case 14:PIEdisplayObject.c14=d;break;case 15:PIEdisplayObject.c15=d;break;case 16:PIEdisplayObject.c16=d;break;case 17:PIEdisplayObject.c17=d;break;case 18:PIEdisplayObject.c18=d;break;case 19:PIEdisplayObject.c19=d;break;default:break}PIEcDisplayNames[e-1]=b;a.name(b);a.updateDisplay()}}function PIEchangeInputCommand(c,b,d){var a;var e;a=null;for(e=0;(a==null)&&(e<PIEcInput);e++){if(PIEcInputNames[e]==c){a=PIEcInputHandles[e]}}if(a!=null){switch(e-1){case 0:PIEinputObject.c00=d;break;case 1:PIEinputObject.c01=d;break;case 2:PIEinputObject.c02=d;break;case 3:PIEinputObject.c03=d;break;case 4:PIEinputObject.c04=d;break;case 5:PIEinputObject.c05=d;break;case 6:PIEinputObject.c06=d;break;case 7:PIEinputObject.c07=d;break;case 8:PIEinputObject.c08=d;break;case 9:PIEinputObject.c09=d;break;case 10:PIEinputObject.c10=d;break;case 11:PIEinputObject.c11=d;break;case 12:PIEinputObject.c12=d;break;case 13:PIEinputObject.c13=d;break;case 14:PIEinputObject.c14=d;break;case 15:PIEinputObject.c15=d;break;case 16:PIEinputObject.c16=d;break;case 17:PIEinputObject.c17=d;break;case 18:PIEinputObject.c18=d;break;case 19:PIEinputObject.c19=d;break;default:break}PIEcInputNames[e-1]=b;a.name(b);a.updateDisplay()}}function PIEaddButton(a){var b;button=document.createElement("button");button.setAttribute("id",a);button.innerHTML=a;PIEtoplineElem.appendChild(button);return(button)}function PIEadjustCamera(a,c,b){PIEcamera.position.x=a;PIEcamera.position.y=c;PIEcamera.position.z=b}function PIEturnCamera(a,c,b){PIEcameraTarget.x=a;PIEcameraTarget.y=c;PIEcameraTarget.z=b;PIEcamera.lookAt(PIEcameraTarget)}function PIEsetCameraAspect(a){PIEcameraAspect=a;PIEcamera.aspect=a}function PIEsetCameraFOV(a){PIEcameraAngle=a;PIEcamera.fov=a}function PIEsetCameraDepth(a){PIEcamera.far=a}function PIEsetAreaOfInterest(c,b,a,d){PIEaoiTLX=c;PIEaoiTLY=b;PIEaoiBRX=a;PIEaoiBRY=d;PIEaoiW=a-c;PIEaoiH=b-d;PIEaoiAspect=PIEaoiW/PIEaoiH;PIEcameraAngle=30;PIEcameraZ=((PIEaoiH/2)/Math.tan((PIEcameraAngle*Math.PI/180)/2));PIEadjustDisplayScene()}function PIEadjustDisplayScene(){var b;var a;b=0;a=0;if(PIEcanvasAspect>PIEaoiAspect){b=PIEcanvasAspect*(PIEaoiTLY-PIEaoiBRY)-(PIEaoiBRX-PIEaoiTLX);b/=2}else{if(PIEcanvasAspect<PIEaoiAspect){a=(PIEaoiBRX-PIEaoiTLX)/PIEcanvasAspect-(PIEaoiTLY-PIEaoiBRY);a/=2}}PIEdisplayTLX=PIEaoiTLX-b;PIEdisplayTLY=PIEaoiTLY+a;PIEdisplayBRX=PIEaoiBRX+b;PIEdisplayBRY=PIEaoiBRY-a;PIEdisplayW=PIEaoiW+2*b;PIEdisplayH=PIEaoiH+2*a;PIEdisplayAspect=PIEdisplayW/PIEdisplayH;PIEadjustCamera(PIEdisplayTLX+PIEdisplayW/2,PIEdisplayBRY+PIEdisplayH/2,PIEcameraZ);PIEturnCamera(PIEdisplayTLX+PIEdisplayW/2,PIEdisplayBRY+PIEdisplayH/2,0);PIEsetCameraFOV(2*Math.atan((PIEdisplayH/2)/PIEcameraZ)*180/Math.PI);PIEsetCameraAspect(PIEdisplayAspect)}function PIEremoveElement(b){var a;var c;PIEscene.remove(b);c=false;for(a=PIEsceneElements.length-1;(c==false)&&(a>=0);a--){if(b==PIEsceneElements[a]){while(a<PIEsceneElements.length-1){PIEsceneElements[a]=PIEsceneElements[a+1];a++}PIEsceneElements.pop();c=true}}}function PIEaddElement(a){a.receiveShadow=true;a.castShadow=true;PIEscene.add(a);a.dragStart=null;a.drag=null;a.dragEnd=null;a.hoverON=null;a.hoverOFF=null;a.click=null;PIEsceneElements.push(a);return(PIEsceneElements.length-1)}function PIEresetExperiment(){PIEstopAnimation();PIEanimationSpeed=1;PIEspeedElem.innerHTML=PIEanimationSpeed;resetExperiment();PIEshowInputPanel();PIErender()}function PIEspeedupAnimation(){if(PIEanimationSpeed<PIEmaxAnimationSpeed){PIEanimationSpeed*=2}PIEspeedElem.innerHTML=PIEanimationSpeed}function PIEslowdownAnimation(){if(PIEanimationSpeed>PIEminAnimationSpeed){PIEanimationSpeed/=2}PIEspeedElem.innerHTML=PIEanimationSpeed}function PIEstartAnimation(){if(PIEanimationON==false){PIElastUpdateTime=Date.now();PIEpauseOffset=0;PIEcurrentTime=0;PIEoffsetTime=0;PIEanimationON=true;PIEanimationPaused=false;PIEresumeButton.style.display="none";PIEresumeButton.style.visibility="hidden";PIEpauseButton.style.display="inline";PIEpauseButton.style.visibility="visible";PIEstartButton.style.display="none";PIEstopButton.style.display="inline";PIEshowDisplayPanel();PIEanimate()}}function PIEstopAnimation(){if(PIEanimationON==true){PIEpauseOffset=0;PIEcurrentTime=0;PIEoffsetTime=0;PIEanimationON=false;PIEanimationPaused=false;PIEresumeButton.style.display="none";PIEresumeButton.style.visibility="hidden";PIEpauseButton.style.display="inline";PIEpauseButton.style.visibility="hidden";PIEstopButton.style.display="none";PIEstartButton.style.display="inline";PIEshowInputPanel()}}function PIEanimate(){var b;var a;if((PIEanimationON==true)&&(PIEanimationPaused==false)){b=Date.now();a=(b-PIElastUpdateTime)*PIEanimationSpeed;if(a>0){PIEcurrentTime+=a;PIEoffsetTime=a;PIElastUpdateTime=b;updateExperimentElements(PIEcurrentTime,PIEoffsetTime)}requestAnimationFrame(PIEanimate);PIErender()}}function PIErender(){PIErenderer.render(PIEscene,PIEcamera)}function PIEpauseAnimation(){var a;if((PIEanimationON==true)&&(PIEanimationPaused==false)){a=Date.now();PIEpauseOffset=(a-PIElastUpdateTime);PIEpauseButton.style.display="none";PIEpauseButton.style.visibility="hidden";PIEresumeButton.style.display="inline";PIEresumeButton.style.visibility="visible";PIEanimationPaused=true}}function PIEresumeAnimation(){var a;if((PIEanimationON==true)&&(PIEanimationPaused==true)){PIEpauseButton.style.display="inline";PIEpauseButton.style.visibility="visible";PIEresumeButton.style.display="none";PIEresumeButton.style.visibility="hidden";a=Date.now();PIElastUpdateTime=a-PIEpauseOffset;PIEanimationPaused=false;PIEanimate()}}function PIEadjustAnimationTime(a){PIEcurrentTime-=a}function PIEdefaultHoverON(a){if((a!=null)&&((a.hoverON)!=null)){a.hoverON(a)}PIErender()}function PIEdefaultHoverOFF(a){if((a!=null)&&((a.hoverOFF)!=null)){a.hoverOFF(a)}PIErender()}function PIEdefaultDragStart(a){if((a.dragStart)!=null){a.dragStart(a)}PIErender()}function PIEdefaultDrag(a,b){if((a.drag)!=null){a.drag(a,b)}else{a.position.x=b.x;a.position.y=b.y;a.position.z=b.z}PIErender()}function PIEdefaultDragEnd(a){if((a.dragEnd)!=null){a.dragEnd(a)}PIErender()}function PIEsetHoverON(a,b){a.hoverON=b}function PIEsetHoverOFF(a,b){a.hoverOFF=b}function PIEsetDragStart(a,b){a.dragStart=b}function PIEsetDrag(a,b){a.drag=b}function PIEsetDragEnd(a,b){a.dragEnd=b}function PIEdragElement(a){PIEdragElements.push(a)}function PIEremoveDragElement(b){var a;var c;c=false;for(a=0;(c==false)&&(a<PIEdragElements.length);a++){if(PIEdragElements[a]==b){c=true}}if(c==true){while(a<=PIEdragElements.length){PIEdragElements[a-1]=PIEdragElements[a];a++}PIEdragElements.pop()}}function PIEmouseMove(b){var a;b.defaultPrevented=true;PIEmouseP.x=(b.clientX/PIEcanvasW)*2-1;PIEmouseP.y=-(b.clientY/PIEcanvasH)*2+1;PIEraycaster.setFromCamera(PIEmouseP,PIEcamera);if(PIEselectedDrag!=null){PIEraycaster.ray.intersectPlane(PIEdragPlane,PIEdragIntersect);PIEdefaultDrag(PIEselectedDrag,PIEdragIntersect.sub(PIEdragOffset))}else{a=PIEraycaster.intersectObjects(PIEsceneElements);if(a.length>0){PIEdragPlane.setFromNormalAndCoplanarPoint(PIEcamera.getWorldDirection(PIEdragPlane.normal),a[0].object.position);if(PIEselectedHover!=a[0].object){PIEdefaultHoverOFF(PIEselectedHover);PIEselectedHover=a[0].object;PIEdefaultHoverON(PIEselectedHover)}PIEscreenElem.style.cursor="pointer"}else{if(PIEselectedHover!=null){PIEdefaultHoverOFF(PIEselectedHover);PIEselectedHover=null;PIEscreenElem.style.cursor="auto"}}}}function PIEmouseDown(b){var a;b.defaultPrevented=true;PIEselectedDrag=null;PIEraycaster.setFromCamera(PIEmouseP,PIEcamera);a=PIEraycaster.intersectObjects(PIEdragElements);if(a.length>0){PIEselectedDrag=a[0].object;if(PIEraycaster.ray.intersectPlane(PIEdragPlane,PIEdragIntersect)){PIEdragOffset.copy(PIEdragIntersect).sub(PIEselectedDrag.position)}PIEscreenElem.style.cursor="move";PIEdefaultDragStart(PIEselectedDrag)}}function PIEmouseUp(b){var a;b.defaultPrevented=true;if(PIEselectedDrag!=null){PIEdefaultDragEnd(PIEselectedDrag);PIEselectedDrag=null}PIEscreenElem.style.cursor="auto"}function PIEsetClick(a,b){a.click=b}function PIEresetClick(a,b){a.click=null}function PIEmouseClick(c){var b;var a;var d;c.defaultPrevented=true;PIEraycaster.setFromCamera(PIEmouseP,PIEcamera);b=PIEraycaster.intersectObjects(PIEsceneElements);for(a=0;a<b.length;a++){d=b[a].object;if(d.click!=null){d.click(d)}}}var PIEtableData=[];var PIEtableRows=[];var PIEtableNames=[];var PIEtables=[];var PIEcurrentTable;var PIEdraggedTable;var PIEtableChangeHandlers=[];function PIEtableDragStart(b){var a;var c;PIEdraggedTable=b.target;a=window.getComputedStyle(PIEdraggedTable,null);c=(parseInt(a.getPropertyValue("left"))-b.clientX)+","+(parseInt(a.getPropertyValue("top"))-b.clientY);b.dataTransfer.setData("Text",c);b.dataTransfer.dropEffect="move";b.dataTransfer.setData("aTable",c);return(false)}function PIEtableDrop(a){var b;if(PIEdraggedTable!=null){b=a.dataTransfer.getData("Text").split(",");PIEdraggedTable.style.left=(a.clientX+parseInt(b[0],10))+"px";PIEdraggedTable.style.top=(a.clientY+parseInt(b[1],10))+"px";PIEdraggedTable=null;a.stopPropagation();a.preventDefault();return false}}function PIEtableDragEnter(a){a.preventDefault();return(false)}function PIEtableDragOver(a){a.preventDefault();return(false)}function PIEtableSetInputChange(a){var b;var d;var c;PIEtableChangeHandlers[PIEcurrentTable]=a;for(b=0;(b<PIEtableRows[PIEcurrentTable].length);b++){for(d=0;(d<PIEtableData[PIEcurrentTable][b].length);d++){if((PIEtableData[PIEcurrentTable][b][d]!=null)&&(PIEtableData[PIEcurrentTable][b][d].children.length>0)){c=PIEtableData[PIEcurrentTable][b][d].children[0];c.addEventListener("change",PIEtableInputChange,false)}}}}function PIEtableInputChange(a){a.preventDefault();PIEtableInputHandleEvent(a,PIEtableChangeHandlers);return(false)}function PIEtableInputHandleEvent(d,g){var f;var e;var h;var c;var a;var b;var i;i=false;f=d.target;for(e=0;(i==false)&&(e<PIEtables.length);e++){for(h=0;(i==false)&&(h<PIEtableRows[e].length);h++){for(c=0;(i==false)&&(c<PIEtableData[e][h].length);c++){if((PIEtableData[e][h][c]!=null)&&(f==PIEtableData[e][h][c].children[0])){i=true}}}}if(i==true){e--;h--;c--;if(g[e]!=null){g[e](h,c,f.value)}}}function PIEtableSelect(c){var a;var b;PIEcurrentTable=0;for(a=0;(a<PIEtableNames.length);a++){if(c==PIEtableNames[a]){PIEcurrentTable=a}}return PIEcurrentTable;}function PIEcreateTable(i,n,g,d){var c;var b;var m;var f;var a;var h;var l;var k;var j;var e;PIEtableChangeHandlers.push(null);PIEtableNames.push(i);PIEtableRows.push(new Array(0));PIEtableData.push(new Array(0));PIEtableChangeHandlers.push(null);PIEcurrentTable=PIEtableNames.length-1;c=document.createElement("div");c.draggable=true;c.addEventListener("dragstart",PIEtableDragStart,false);c.style.border="2px solid white";c.style.borderRadius="10px";c.style.display="inline-block";c.style.position="absolute";c.style.top="50px";c.style.left="1px";c.style.color="white";document.body.appendChild(c);b=document.createElement("div");b.style.display="inline-block";b.style.width="100%";b.style.padding="0px";c.appendChild(b);m=document.createElement("p");m.style.display="inline-block";m.style.width="100%";m.style.margin="auto";m.style.border="2 px solid white";m.style.borderRadius="10px";m.style.backgroundColor="#0020AA";b.appendChild(m);f=document.createElement("button");f.style.background="none";f.style.border="none";f.style.boxSizing="border-box";a=document.createElement("img");a.src="../PIE/images/TableAdd.png";a.alt="add";a.height="16";a.width="16";a.style.display="inline";f=document.createElement("button");f.style.background="none";f.style.border="none";f.style.boxSizing="border-box";a=document.createElement("img");a.src="../PIE/images/TableDelete.png";a.alt="delete";a.height="16";a.width="16";a.style.display="inline";a=document.createElement("span");a.style.padding="5px";a.style.margin="auto";a.style.align="center";a.innerHTML="<b>"+i+"</b>";m.appendChild(a);f=document.createElement("button");f.style.background="none";f.style.border="none";f.style.boxSizing="border-box";f.style.align="right";f.addEventListener("click",PIEtoggleTable,false);m.appendChild(f);a=document.createElement("img");a.src="../PIE/images/TableFold.png";a.alt="delete";a.height="16";a.width="16";a.style.display="inline";f.appendChild(a);a=document.createElement("div");h=document.createElement("table");h.style.display="inline-block";h.style.border="1px solid white";h.style.borderRadius="10px";h.style.padding="0px";h.style.backgroundColor="#0040BB";PIEtables.push(h);a.appendChild(h);c.appendChild(a);for(j=0;j<n;j++){for(e=0;e<g;e++){if(j==0){k=PIEcreateTableCell(j,e,d)}else{k=PIEcreateTableCell(j,e,false)}}}PIEupdateTable(PIEtables[PIEcurrentTable])}function PIEtoggleTable(e){var g;var c;var a;var h;var f;var d;var b;e=e||window.event;e.defaultPrevented=true;g=null;if(e.target){g=e.target}else{if(e.srcElement){g=e.srcElement}}if(g!=null){if(g.nodeType==3){g=g.parentNode}a=((g.parentNode).parentNode).parentNode;h=a.children;for(d=0;(d<h.length);d++){f=h[d].children;for(b=0;(b<f.length);b++){if(f[b].nodeName=="TABLE"){c=f[b];if(c.style.display=="inline-block"){c.style.display="none"}else{c.style.display="inline-block"}}}}}}function PIEupdateTable(){var c;var d;var a;var b;PIEtables[PIEcurrentTable].innerHTML="";for(c=0;(c<PIEtableRows[PIEcurrentTable].length);c++){a=PIEtableRows[PIEcurrentTable][c];PIEtables[PIEcurrentTable].appendChild(a);for(d=0;(d<PIEtableData[PIEcurrentTable][c].length);d++){b=PIEtableData[PIEcurrentTable][c][d];a.appendChild(b)}}}function PIEexpandCell(a){if((a.target.size+6)<a.target.value.length){a.target.size=a.target.value.length-6}}function PIEcreateInputElement(b,c){var a;a=document.createElement("input");a.style.color="#FFFFFF";a.style.backgroundColor="#0060CC";a.style.border="2px solid red";if(b>=7){a.size=(b-6)}else{a.size=1}a.addEventListener("keyup",PIEexpandCell,false);if(PIEtableChangeHandlers[PIEcurrentTable]!=null){a.addEventListener("change",PIEtableInputChange,false)}a.addEventListener("change",PIEtableInputChange,false);a.value=c;return(a)}function PIEsetColumnInput(a,b,e){var d;var c;for(c=0;(c<PIEtableRows[PIEcurrentTable].length)&&(PIEtableRows[PIEcurrentTable][c]!=null);c++){if(PIEtableData[PIEcurrentTable][c].length>a){if(PIEtableData[PIEcurrentTable][c][a]!=null){PIEtableData[PIEcurrentTable][c][a].innerHTML="";PIEtableData[PIEcurrentTable][c][a].appendChild(PIEcreateInputElement(b,e))}}}}function PIEsetRowInput(e,a,d){var c;var b;if((PIEtableRows[PIEcurrentTable].length>e)&&(PIEtableRows[PIEcurrentTable][e]!=null)){for(b=0;(b<PIEtableData[PIEcurrentTable][e].length);b++){if(PIEtableData[PIEcurrentTable][e][b]!=null){PIEtableData[PIEcurrentTable][e][b].innerHTML="";PIEtableData[PIEcurrentTable][e][b].appendChild(PIEcreateInputElement(a,d))}}}}function PIEsetCellInput(e,a,b,d){var c;while(PIEtableRows[PIEcurrentTable].length<=e){PIEtableRows[PIEcurrentTable].push(null);PIEtableData[PIEcurrentTable].push(new Array(0))}if(PIEtableRows[PIEcurrentTable][e]==null){PIEtableRows[PIEcurrentTable][e]=document.createElement("tr")}while(PIEtableData[PIEcurrentTable][e].length<=a){PIEtableData[PIEcurrentTable][e].push(null)}if(PIEtableData[PIEcurrentTable][e][a]==null){PIEtableData[PIEcurrentTable][e][a]=document.createElement("td")}PIEtableData[PIEcurrentTable][e][a].innerHTML="";c=PIEcreateInputElement(b,d);PIEtableData[PIEcurrentTable][e][a].appendChild(c)}function PIEcreateTableCell(c,b,d){var a;a=(d==true)?"th":"td";while(PIEtableRows[PIEcurrentTable].length<=c){PIEtableRows[PIEcurrentTable].push(null);PIEtableData[PIEcurrentTable].push(new Array(0))}if(PIEtableRows[PIEcurrentTable][c]==null){PIEtableRows[PIEcurrentTable][c]=document.createElement("tr")}while(PIEtableData[PIEcurrentTable][c].length<=b){PIEtableData[PIEcurrentTable][c].push(null)}if(PIEtableData[PIEcurrentTable][c][b]==null){PIEtableData[PIEcurrentTable][c][b]=document.createElement(a)}else{PIEtableData[PIEcurrentTable][c][b].innerHTML=""}}function PIEupdateTableRow(c,a){var b;for(b=0;b<a.length;b++){PIEupdateTableCell(c,b,a[b])}}function PIEupdateTableColumn(b,a){var c;for(c=0;c<a.length;c++){PIEupdateTableCell(c,b,a[b])}}function PIEupdateTableCell(c,a,b){while(PIEtableRows[PIEcurrentTable].length<=c){PIEtableRows[PIEcurrentTable].push(null);PIEtableData[PIEcurrentTable].push(new Array(0))}if(PIEtableRows[PIEcurrentTable][c]==null){PIEtableRows[PIEcurrentTable][c]=document.createElement("tr")}while(PIEtableData[PIEcurrentTable][c].length<=a){PIEtableData[PIEcurrentTable][c].push(null)}if(PIEtableData[PIEcurrentTable][c][a]==null){PIEtableData[PIEcurrentTable][c][a]=document.createElement("td")}if(PIEtableData[PIEcurrentTable][c][a].children.length==0){PIEtableData[PIEcurrentTable][c][a].innerHTML=b}else{PIEtableData[PIEcurrentTable][c][a].children[0].value=b}}function PIEsetTableRowStyle(d,a,c){var b;if(d<PIEtableRows[PIEcurrentTable].length){for(b=0;(b<PIEtableData[PIEcurrentTable][d].length);b++){PIEsetTableCellStyle(d,b,a,c)}}}function PIEsetTableColumnStyle(a,b,d){var c;for(c=0;(c<PIEtableRows[PIEcurrentTable].length);c++){if(a<PIEtableData[PIEcurrentTable][c].length){PIEsetTableCellStyle(c,a,b,d)}}}function PIEsetTableCellStyle(d,a,b,c){if(d<PIEtableRows[PIEcurrentTable].length){if(a<PIEtableData[PIEcurrentTable][rowI].length){if(b=="color"){PIEtableData[PIEcurrentTable][d][a].style.color=c}else{if(b=="backgroundColor"){PIEtableData[PIEcurrentTable][d][a].style.backgroundColor=c}else{if(b=="margin"){PIEtableData[PIEcurrentTable][d][a].style.margin=c}else{if(b=="padding"){PIEtableData[PIEcurrentTable][d][a].style.padding=c}else{if(b=="border"){PIEtableData[PIEcurrentTable][d][a].style.border=c}}}}}}}};


//Drag Controls JS code
/*
 * @author zz85 / https://github.com/zz85
 * @author mrdoob / http://mrdoob.com
 * Running this will allow you to drag three.js objects around the screen.
 */

THREE.DragControls = function ( _objects, _camera, _domElement ) {

	if ( _objects instanceof THREE.Camera ) {

		console.warn( 'THREE.DragControls: Constructor now expects ( objects, camera, domElement )' );
		var temp = _objects; _objects = _camera; _camera = temp;

	}

	var _plane = new THREE.Plane();
	var _raycaster = new THREE.Raycaster();

	var _mouse = new THREE.Vector2();
	var _offset = new THREE.Vector3();
	var _intersection = new THREE.Vector3();

	var _selected = null, _hovered = null;

	//

	var scope = this;

	function activate() {

		_domElement.addEventListener( 'mousemove', onDocumentMouseMove, false );
		_domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );
		_domElement.addEventListener( 'mouseup', onDocumentMouseUp, false );

	}

	function deactivate() {

		_domElement.removeEventListener( 'mousemove', onDocumentMouseMove, false );
		_domElement.removeEventListener( 'mousedown', onDocumentMouseDown, false );
		_domElement.removeEventListener( 'mouseup', onDocumentMouseUp, false );

	}

	function dispose() {

		deactivate();

	}

	function onDocumentMouseMove( event ) {

		event.preventDefault();

		_mouse.x = ( event.clientX / _domElement.width ) * 2 - 1;
		_mouse.y = - ( event.clientY / _domElement.height ) * 2 + 1;

		_raycaster.setFromCamera( _mouse, _camera );

		if ( _selected && scope.enabled ) {

			if ( _raycaster.ray.intersectPlane( _plane, _intersection ) ) {

				_selected.position.copy( _intersection.sub( _offset ) );

			}

			scope.dispatchEvent( { type: 'drag', object: _selected } );

			return;

		}

		_raycaster.setFromCamera( _mouse, _camera );

		var intersects = _raycaster.intersectObjects( _objects );

		if ( intersects.length > 0 ) {

			var object = intersects[ 0 ].object;

			_plane.setFromNormalAndCoplanarPoint( _camera.getWorldDirection( _plane.normal ), object.position );

			if ( _hovered !== object ) {

				scope.dispatchEvent( { type: 'hoveron', object: object } );

				_domElement.style.cursor = 'pointer';
				_hovered = object;

			}

		} else {

			if ( _hovered !== null ) {

				scope.dispatchEvent( { type: 'hoveroff', object: _hovered } );

				_domElement.style.cursor = 'auto';
				_hovered = null;

			}

		}

	}

	function onDocumentMouseDown( event ) {

		event.preventDefault();

		_raycaster.setFromCamera( _mouse, _camera );

		var intersects = _raycaster.intersectObjects( _objects );

		if ( intersects.length > 0 ) {

			_selected = intersects[ 0 ].object;

			if ( _raycaster.ray.intersectPlane( _plane, _intersection ) ) {

				_offset.copy( _intersection ).sub( _selected.position );

			}

			_domElement.style.cursor = 'move';

			scope.dispatchEvent( { type: 'dragstart', object: _selected } );

		}


	}

	function onDocumentMouseUp( event ) {

		event.preventDefault();

		if ( _selected ) {

			scope.dispatchEvent( { type: 'dragend', object: _selected } );

			_selected = null;

		}

		_domElement.style.cursor = 'auto';

	}

	activate();

	// API

	this.enabled = true;

	this.activate = activate;
	this.deactivate = deactivate;
	this.dispose = dispose;

	// Backward compatibility

	this.setObjects = function () {

		console.error( 'THREE.DragControls: setObjects() has been removed.' );

	};

	this.on = function ( type, listener ) {

		console.warn( 'THREE.DragControls: on() has been deprecated. Use addEventListener() instead.' );
		scope.addEventListener( type, listener );

	};

	this.off = function ( type, listener ) {

		console.warn( 'THREE.DragControls: off() has been deprecated. Use removeEventListener() instead.' );
		scope.removeEventListener( type, listener );

	};

	this.notify = function ( type ) {

		console.error( 'THREE.DragControls: notify() has been deprecated. Use dispatchEvent() instead.' );
		scope.dispatchEvent( { type: type } );

	};

};

THREE.DragControls.prototype = Object.create( THREE.EventDispatcher.prototype );
THREE.DragControls.prototype.constructor = THREE.DragControls;



//Actual Experiment code begins


var myTableTop;  // Table top variable
var myHeavyBlock; //Heavy myHeavyBlock

//Movable weights
var weight1;
var weight2;
var weight3;
var weight4;
var weight5;
var weight6;

var weightHolder1;
var weightHolder2;

var weight1side;
var weight2side;
var weight3side;
var weight4side;
var weight5side;
var weight6side;

var initialWeight1pos;
var initialWeight2pos;
var initialWeight3pos;
var initialWeight4pos;
var initialWeight5pos;
var initialWeight6pos;

var weightDifference; //Weight difference between left and right.
var leftWeight; //Left total weight
var rightWeight;//Right total weight.

var blockAcc;
var blockVel;

var timeElapsed;
var startTime;
var clock;

//Arrows
var RarrowCenter;
var RarrowLeft;
var RarrowRight;
var LarrowCenter;
var LarrowLeft;
var LarrowRight;

var trials;

//Weight labels
var Wtext1;
var Wtext2;
var Wtext3;
var Wtext4;
var Wtext5;
var Wtext6;
var WtextCenter;

function initialiseScene(){
  leftWeight=0;
  rightWeight=0;
  weightDifference=0;


  RarrowCenter.visible=false;
  RarrowRight.visible=false;
  RarrowLeft.visible=false;
  LarrowCenter.visible=false;
  LarrowRight.visible=false;
  LarrowLeft.visible=false;

}



var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Multiple forces–direction and result Experiment Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a heavy block constrained by thread and pulleys on a table. User can hang different weights provided at the end of thread to balance out the forces and find the resultant.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The animation is controlled by the weights hanging on either side of the thread. The two stages of the experiment are:</p>";
    helpContent = helpContent + "<h3>The Setup Stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can drag and drop different weights provided onto the thread's ends. Once setup stage is completed then we can proceed to next step upon the click of Start button.</p>";
    helpContent = helpContent + "<h3>The Animation Stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the heavy block will move along the table obeying laws of physics.</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the values of the experiment variables during animation.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Time Elapsed: &nbsp;&nbsp;:&nbsp;Shows the time as the block moves.</li>";
    helpContent = helpContent + "<li>BlockX: &nbsp;&nbsp;:&nbsp;Shows the X position of the heavy block.</li>";
    //helpContent = helpContent + "<li>VX&nbsp;:&nbsp;Shows the X velocity of the ball.</li>";
    //helpContent = helpContent + "<li>VY&nbsp;:&nbsp;Shows the Y velocity of the ball.</li>";
    helpContent = helpContent + "</ul>";
    //helpContent = helpContent + "<p>In addition you will also see two sliders showing potential and kinetic energy.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    helpContent = helpContent + "<h3>Observations</h3>";
    helpContent = helpContent + "<p>An observation table has been provided which will fill automatically after each experiment trial. A new trial is automatically started after the previous trial ends. To clear the Observation table, click the Reset button.</p>";
    helpContent = helpContent + "<h3>The drag and drop</h3>";
    helpContent = helpContent + "<p>You can drag and drop weights on the thread. Add weights before clicking START, to obtain different weight combinations. Experiment ends if weight reaches top of the string or block reaches end of table!.</p>";
    helpContent = helpContent + "<h3>Note: If you need to modify weights during an animation cycle, click stop and then click Remove Weights from control panel and the system will pause and weights will all be removed back into their original position.</h3>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Multiple forces – direction and result Experiment Info</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a block of weight on a table constrained by pulleys and strings, such that motion is permitted according to the resultant force acting on the heavy block.</p>";
    infoContent = infoContent + "<h3>Resultant Force</h3><p>A resultant force is the single force obtained by combining a system of forces acting on a rigid body. The defining feature of a resultant force is that it has the same effect on the rigid body as the original system of forces.</p>";
    infoContent = infoContent + "<p>The resultant force acting on the heavy block is the difference between the force acting on both the sides</p>";
    infoContent = infoContent + "<p>This resultant force causes displacement of the heavy block along the direction of the resultant force with a constant acceleration.</p>";
    infoContent = infoContent + "<p>If equal weight is applied on both the pulleys, then the resultant force will be zero and the heavy block will not move.</p>";
  //  infoContent = infoContent + "<p>When the ball collides with the left or the right wall, the velocity in the X direction reverses while the velocity in the Y direction reamains the same.</p>";
  //  infoContent = infoContent + "<p>When the ball collides with the top or the bottom wall, the velocity in the Y direction reverses while the velocity in the Y direction reamains the same.</p>";
    infoContent = infoContent + "<h3>The weights</h3>";
    infoContent = infoContent + "<p>The small weight denotes a weight of 1kg. The larger weight deonotes a weight of 3kg. The heavy block has been given a weight of 50kg.</p>";
    /*infoContent = infoContent + "<p>The ball may not retain it's original shape and texture. The cricket ball loses it's shine.</p>";
    infoContent = infoContent + "<p>Some of the energy is lost because of the deformation of the ball. The energy loss means that the kinetic energy of the ball will be reduced after impact.</p>";
    infoContent = infoContent + "<p>The coefficient of restitution specifies how much of the velocity will be retained after impact.</p>";
    infoContent = infoContent + "<p>The coefficient of restitution does not affect te velocity in the direction parallel to the impact.</p>";
    infoContent = infoContent + "<p>When the ball collides with the left or the right wall, the magnitude of the velocity in the X direction will reduce as per the coefficient of restitution. The magnitude and sign in Y direction remains the same.</p>";
    infoContent = infoContent + "<p>When the ball collides with the top or the bottom wall, the magnitude of the velocity in the Y direction will reduce as per the coefficient of restitution. The magnitude and sign in X direction remains the same.</p>";
    */infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}






//Function to load the Table top
function loadCenterTable(){

  var texture = new THREE.TextureLoader();
  texture.load( 'woodred.jpg', function(texture){

    var geometry = new THREE.BoxGeometry(8.5,0.5,10);
    myTableTop = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({map:texture}));
    myTableTop.position.set(0,0,0)
    myTableTop.castShadow = true;
    PIEaddElement(myTableTop);
    myTableTop.rotation.x+=Math.PI/8;
    myTableTop.castShadow=false;
    PIErender();

    var edges = new THREE.EdgesGeometry( geometry );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    myTableTop.add(line);
    PIErender();


    //legs of table
      var geometry = new THREE.BoxGeometry(0.5,6,0.5);
      myTableTop = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({map:texture}));
      myTableTop.position.set(-3.2,-4.2,2.5)
      myTableTop.castShadow = true;
      PIEaddElement(myTableTop);
      myTableTop.rotation.x+=Math.PI/8;
      myTableTop.castShadow=false;

      var edges = new THREE.EdgesGeometry( geometry );
      var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );
      myTableTop.add(line);
      PIErender();

    //leg
      var geometry = new THREE.BoxGeometry(0.5,6,0.5);
      myTableTop = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({map:texture}));
      myTableTop.position.set(3.2,-4.2,2.5)
      myTableTop.castShadow = true;
      PIEaddElement(myTableTop);
      myTableTop.rotation.x+=Math.PI/8;
      myTableTop.castShadow=false;
      PIErender();

      var edges = new THREE.EdgesGeometry( geometry );
      var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );
      myTableTop.add(line);
      PIErender();



      var geometry = new THREE.BoxGeometry(0.5,6,0.5);
      myTableTop = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({map:texture}));
      myTableTop.position.set(-3.2,-4.2,-3.5)
      myTableTop.castShadow = true;
      PIEaddElement(myTableTop);
      myTableTop.rotation.x+=Math.PI/8;
      myTableTop.castShadow=false;
      PIErender();

      var edges = new THREE.EdgesGeometry( geometry );
      var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );
      myTableTop.add(line);
      PIErender();

    //leg4
      var geometry = new THREE.BoxGeometry(0.5,6,0.5);
      myTableTop = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({map:texture}));
      myTableTop.position.set(3.2,-4.2,-3.5)
      myTableTop.castShadow = true;
      PIEaddElement(myTableTop);
      myTableTop.rotation.x+=Math.PI/8;
      myTableTop.castShadow=false;
      PIErender();

      var edges = new THREE.EdgesGeometry( geometry );
      var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );
      myTableTop.add(line);
      PIErender();

  } );
  PIErender();

}


//Funtion to load Heavy Block Element
function loadHeavyBlock(){
  var geometry = new THREE.BoxGeometry(3,1.5,3);
  myHeavyBlock = new THREE.Mesh(geometry,new THREE.MeshLambertMaterial({color:0x808080}));
  PIEaddElement(myHeavyBlock);
  myHeavyBlock.position.set(0,0.7,1);
  myHeavyBlock.rotation.x+=Math.PI/8;
  myHeavyBlock.castShadow=false;
  var edges = new THREE.EdgesGeometry( geometry );
  var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );
  myHeavyBlock.add(line);
}


function loadGround(){
  //ground
  var loader = new THREE.TextureLoader();
  loader.load('tile1.jpg',function(texture){
    var ground = new THREE.Mesh(new THREE.PlaneGeometry(40,24,32),new THREE.MeshLambertMaterial({map:texture}));
    PIEaddElement(ground);
    ground.position.set(0,-8,-8);
    ground.rotation.x-=Math.PI*0.375;
    ground.castShadow=false;
    PIErender();
  });

    //Back wall
    var ground = new THREE.Mesh(new THREE.PlaneGeometry(41,26,32),new THREE.MeshBasicMaterial({color:0x001407}));
    PIEaddElement(ground);
    ground.position.set(0,0,-20);
    //ground.rotation.x-=Math.PI*0.375;
    ground.castShadow=false;
    PIErender();
  //});
}



var leftString;
var rightString;

//Function to load all thread elements
function loadStrings(z){
  //Center string
  var curve = new THREE.CubicBezierCurve3(
  new THREE.Vector3( -5, 1, z ),
  new THREE.Vector3( 5, 1, z ),
  new THREE.Vector3(5, 1, z ),
  new THREE.Vector3( 5, 1, z )
  );
  var tube = new THREE.TubeGeometry(curve, 40, 0.05, 20, false);
  var mesh = new THREE.Mesh(tube, new THREE.MeshBasicMaterial({color: "white"}));
  PIEaddElement(mesh);
  mesh.castShadow=false;


  //left strings
  var curve = new THREE.CubicBezierCurve3(
  new THREE.Vector3( -5.44, 7, z ),
  new THREE.Vector3( -5.44, -2, z ),
  new THREE.Vector3( -5.44, -2, z ),
  new THREE.Vector3( -5.44, -3.5, z )
  );
  var tube = new THREE.TubeGeometry(curve, 40, 0.05, 20, false);
  leftString = new THREE.Mesh(tube, new THREE.MeshBasicMaterial({color: 0xffffff}));
  PIEaddElement(leftString);
  mesh.castShadow=false;

  var curve = new THREE.CubicBezierCurve3(
  new THREE.Vector3( -5.44, 0.6, 1),
  new THREE.Vector3( -5.44, 2,1 ),
  new THREE.Vector3( -5.44, 4,1 ),
  new THREE.Vector3( -5.44, 7.2, 1)
  );
  var tube = new THREE.TubeGeometry(curve, 40, 0.05, 40, false);
  var mesh = new THREE.Mesh(tube, new THREE.MeshBasicMaterial({color: 0x001407}));
  PIEaddElement(mesh);
  PIEdragElement(mesh);
  mesh.castShadow=false;


  //right string
  var curve = new THREE.CubicBezierCurve3(
  new THREE.Vector3( 5.44, 7.1, z ),
  new THREE.Vector3( 5.44, -2, z ),
  new THREE.Vector3( 5.44, -2, z ),
  new THREE.Vector3( 5.44, -3.5, z )
  );
  var tube = new THREE.TubeGeometry(curve, 40, 0.05, 20, false);
  rightString = new THREE.Mesh(tube, new THREE.MeshBasicMaterial({color: "white"}));
  PIEaddElement(rightString);
  mesh.castShadow=true;

  var curve = new THREE.CubicBezierCurve3(
  new THREE.Vector3( 5.44, 0.6, z ),
  new THREE.Vector3( 5.44, 0.6, z ),
  new THREE.Vector3( 5.44, 0.6, z ),
  new THREE.Vector3( 5.44, 7.2, z )
  );
  var tube = new THREE.TubeGeometry(curve, 40, 0.05, 20, false);
  var mesh = new THREE.Mesh(tube, new THREE.MeshBasicMaterial({color: 0x001407}));
  PIEaddElement(mesh);
  mesh.castShadow=false;

  PIErender();

}




//Function to load all Pulleys
function loadPulley(z){
  var rPulley = new THREE.Mesh(new THREE.TorusGeometry(0.5,0.15,7,20),new THREE.MeshLambertMaterial({color: 0x080808}));
  rPulley.position.set(4.85,0.45,z);
  PIEaddElement(rPulley);
  rPulley.rotation.x+=Math.PI/8;

  var lPulley = new THREE.Mesh(new THREE.TorusGeometry(0.5,0.15,7,20),new THREE.MeshLambertMaterial({color: 0x080808}));
  lPulley.position.set(-4.85,0.45,z);
  PIEaddElement(lPulley);
  lPulley.rotation.x+=Math.PI/8;

  var rPulleyStand = new THREE.Mesh(new THREE.BoxGeometry(0.2,0.9,0.4),new THREE.MeshLambertMaterial({color:0x080808}));
  rPulleyStand.position.set(4.5,0,z);
  PIEaddElement(rPulleyStand);
  rPulleyStand.rotation.x+=Math.PI/8;
  rPulleyStand.rotation.z-=Math.PI/4;

  var rPulleyStand = new THREE.Mesh(new THREE.BoxGeometry(0.2,0.9,0.4),new THREE.MeshLambertMaterial({color:0x080808}));
  rPulleyStand.position.set(-4.5,0,z);
  PIEaddElement(rPulleyStand);
  rPulleyStand.rotation.x+=Math.PI/8;
  rPulleyStand.rotation.z+=Math.PI/4;
}


//Function to load weights
function loadWeights(){
  var geometry;
  //WT HOLDER

  var backShelf=new THREE.Mesh(new THREE.BoxGeometry(5,5,0),new THREE.MeshLambertMaterial({color:"#101010"}));
  PIEaddElement(backShelf);
  backShelf.position.set(9.75,1.5,0);

  var line1=new THREE.Mesh(new THREE.BoxGeometry(5,0.15,1),new THREE.MeshLambertMaterial({color:"#010101"}));
  PIEaddElement(line1);
  line1.position.set(9.75,1.75,0.5);

  var line2=new THREE.Mesh(new THREE.BoxGeometry(5,0.15,1),new THREE.MeshLambertMaterial({color:"#010101"}));
  PIEaddElement(line2);
  line2.position.set(9.75,-0.37,0.5);

  var leftshelf=new THREE.Mesh(new THREE.BoxGeometry(0.15,5,1),new THREE.MeshLambertMaterial({color:"#010101"}));
  PIEaddElement(leftshelf);
  leftshelf.position.set(7,1.5,1);

  var rightshelf=new THREE.Mesh(new THREE.BoxGeometry(0.15,5,1),new THREE.MeshLambertMaterial({color:"#010101"}));
  PIEaddElement(rightshelf);
  rightshelf.position.set(12,1.5,1);

  weightHolder1 = new THREE.Mesh(new THREE.CylinderGeometry(0.45,0.45,0.1,32),new THREE.MeshLambertMaterial({color:0xffffff}));
  PIEaddElement(weightHolder1);
  weightHolder1.position.set(5.44,-3.5,1);

  weightHolder2 = new THREE.Mesh(new THREE.CylinderGeometry(0.45,0.45,0.1,32),new THREE.MeshLambertMaterial({color:0xffffff}));
  PIEaddElement(weightHolder2);
  weightHolder2.position.set(-5.44,-3.5,1);

  //Draggable weights



  geometry = new THREE.CylinderGeometry(0.45,0.45,0.25,32);
  var edges = new THREE.EdgesGeometry( geometry );
  var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
  weight1 = new THREE.Mesh(geometry,new THREE.MeshLambertMaterial({color:0x2f273c}));
  weight1.add(Wtext1);
  PIEaddElement(weight1);
  PIEdragElement(weight1);
  PIEsetDrag(weight1,dragLimitsWeight1);
  weight1.position.set(8,2,1);
  weight1.castShadow=false;

  PIErender();


  weight2= new THREE.Mesh(new THREE.CylinderGeometry(0.45,0.45,0.25,32),new THREE.MeshLambertMaterial({color:0x2f273c}));
  weight2.position.set(9.5,2,1);
  PIEaddElement(weight2);
  PIEdragElement(weight2);
  PIEsetDrag(weight2,dragLimitsWeight2);
  weight2.castShadow=false;

  weight3 = new THREE.Mesh(new THREE.CylinderGeometry(0.45,0.45,0.25,32),new THREE.MeshLambertMaterial({color:0x2f273c}));
  weight3.position.set(11,2,1);
  PIEaddElement(weight3);
  PIEdragElement(weight3);
  PIEsetDrag(weight3,dragLimitsWeight3);
  weight3.castShadow=false;

  weight4 = new THREE.Mesh(new THREE.CylinderGeometry(0.45,0.45,0.5,32),new THREE.MeshLambertMaterial({color:0x3c0e3c}));
  weight4.position.set(8,0,1);
  PIEaddElement(weight4);
  PIEdragElement(weight4);
  PIEsetDrag(weight4,dragLimitsWeight4);
  weight4.castShadow=false;

  weight5 = new THREE.Mesh(new THREE.CylinderGeometry(0.45,0.45,0.5,32),new THREE.MeshLambertMaterial({color:0x3c0e3c}));
  weight5.position.set(9.5,0,1);
  PIEaddElement(weight5);
  PIEdragElement(weight5);
  PIEsetDrag(weight5,dragLimitsWeight5);
  weight5.castShadow=false;

  weight6 = new THREE.Mesh(new THREE.CylinderGeometry(0.45,0.45,0.5,32),new THREE.MeshLambertMaterial({color:0x3c0e3c}));
  weight6.position.set(11,0,1);
  PIEaddElement(weight6);
  PIEdragElement(weight6);
  PIEsetDrag(weight6,dragLimitsWeight6);
  weight6.castShadow=false;

  weightarray1=[];
  weightarray2=[];
  weightarray3=[];
  weightarray4=[];
  weightarray5=[];
  weightarray6=[];

  weightarray1[0]=weight1;
  weightarray2[0]=weight2;
  weightarray3[0]=weight3;
  weightarray4[0]=weight4;
  weightarray5[0]=weight5;
  weightarray6[0]=weight6;


  controls1 = new THREE.DragControls (weightarray1, PIEcamera, PIErenderer.domElement );
  controls1.addEventListener( 'dragend', DropFunction1 );

  controls2 = new THREE.DragControls (weightarray2, PIEcamera, PIErenderer.domElement );
  controls2.addEventListener( 'dragend', DropFunction2 );

  controls3 = new THREE.DragControls (weightarray3, PIEcamera, PIErenderer.domElement );
  controls3.addEventListener( 'dragend', DropFunction3 );

  controls4 = new THREE.DragControls (weightarray4, PIEcamera, PIErenderer.domElement );
  controls4.addEventListener( 'dragend', DropFunction4 );

  controls5 = new THREE.DragControls (weightarray5, PIEcamera, PIErenderer.domElement );
  controls5.addEventListener( 'dragend', DropFunction5 );

  controls6 = new THREE.DragControls (weightarray6, PIEcamera, PIErenderer.domElement );
  controls6.addEventListener( 'dragend', DropFunction6 );

  //loadLabels();
}

var leftHeight=0,rightHeight=0;

function DropFunction1(event){
  maxSide = MaxWeightCheck(); //returns the side with maximum hanging weight.
  if(weight1side=="left"){
    if(bigontopleft==1){
      leftHeight+=0.375;
      bigontopleft=0;
    }
    else{
      leftHeight+=0.25
    }
    weight1.position.y=leftHeight+weightHolder2.position.y;
    weight1.position.x=-5.44;
    PIEremoveDragElement(weight1);
    controls1.enabled=false;
    controls1.removeEventListener( 'dragend', DropFunction1 );
    PIEremoveDragElement(weight1);
  }
  else if(weight1side=="right"){
    if(bigontopright==1){
      rightHeight+=0.375;
      bigontopright=0;
    }
    else{
      rightHeight+=0.25
    }
    weight1.position.y=rightHeight+weightHolder1.position.y;
    weight1.position.x=5.44;
    PIEremoveDragElement(weight1);
    controls1.enabled=false;
    controls1.removeEventListener( 'dragend', DropFunction1 );
    PIEremoveDragElement(weight1);
  }
  else{
    maxSide = MaxWeightCheck();
  }
  Wtext1.position.set(weight1.position.x-0.18,weight1.position.y-0.12,weight1.position.z+0.25);
  PIErender();
}


function DropFunction2(event){
  maxSide = MaxWeightCheck(); //returns the side with maximum hanging weight.
  if(weight2side=="left"){
    if(bigontopleft==1){
      leftHeight+=0.375;
      bigontopleft=0;
    }
    else{
      leftHeight+=0.25
    }
    weight2.position.y=leftHeight+weightHolder2.position.y;
    weight2.position.x=-5.44;
    PIEremoveDragElement(weight2);
    controls2.enabled=false;
    controls2.removeEventListener( 'dragend', DropFunction2 );
    PIEremoveDragElement(weight2);
  }
  else if(weight2side=="right"){
    if(bigontopright==1){
      rightHeight+=0.375;
      bigontopright=0;
    }
    else{
      rightHeight+=0.25
    }
    weight2.position.y=rightHeight+weightHolder1.position.y;
    weight2.position.x=5.44;
    PIEremoveDragElement(weight2);
    controls2.enabled=false;
    controls2.removeEventListener( 'dragend', DropFunction2 );
    PIEremoveDragElement(weight2);
  }
  else{
    maxSide = MaxWeightCheck();
  }
  Wtext2.position.set(weight2.position.x-0.18,weight2.position.y-0.12,weight2.position.z+0.25);
}


function DropFunction3(event){
  maxSide = MaxWeightCheck(); //returns the side with maximum hanging weight.
  if(weight3side=="left"){
    if(bigontopleft==1){
      leftHeight+=0.375;
      bigontopleft=0;
    }
    else{
      leftHeight+=0.25
    }
    weight3.position.y=leftHeight+weightHolder2.position.y;
    weight3.position.x=-5.44;
    PIEremoveDragElement(weight3);
    controls3.enabled=false;
    controls3.removeEventListener( 'dragend', DropFunction3 );
    PIEremoveDragElement(weight3);
  }
  else if(weight3side=="right"){
    if(bigontopright==1){
      rightHeight+=0.375;
      bigontopright=0;
    }
    else{
      rightHeight+=0.25
    }
    weight3.position.y=rightHeight+weightHolder1.position.y;
    weight3.position.x=5.44;
    PIEremoveDragElement(weight3);
    controls3.enabled=false;
    controls3.removeEventListener( 'dragend', DropFunction3 );
    PIEremoveDragElement(weight3);
  }
  else{
    maxSide = MaxWeightCheck();
  }
  Wtext3.position.set(weight3.position.x-0.18,weight3.position.y-0.12,weight3.position.z+0.25);
}


var bigontopleft=0,bigontopright=0;
function DropFunction4(event){
  maxSide = MaxWeightCheck(); //returns the side with maximum hanging weight.
  if(weight4side=="left"){
    leftHeight+=0.4;
    weight4.position.y=leftHeight+weightHolder2.position.y;
    weight4.position.x=-5.44;
    PIEremoveDragElement(weight4);
    controls4.enabled=false;
    controls4.removeEventListener( 'dragend', DropFunction4 );
    PIEremoveDragElement(weight4);
    bigontopleft=1;
  }
  else if(weight4side=="right"){
    rightHeight+=0.4;
    weight4.position.y=rightHeight+weightHolder1.position.y;
    weight4.position.x=5.44;
    PIEremoveDragElement(weight4);
    controls4.enabled=false;
    controls4.removeEventListener( 'dragend', DropFunction4 );
    PIEremoveDragElement(weight4);
    bigontopright=1;
  }
  else{
    maxSide = MaxWeightCheck();
  }
  Wtext4.position.set(weight4.position.x-0.23,weight4.position.y-0.12,weight4.position.z+0.25);
}

function DropFunction5(event){
  maxSide = MaxWeightCheck(); //returns the side with maximum hanging weight.
  if(weight5side=="left"){
    leftHeight+=0.4;
    weight5.position.y=leftHeight+weightHolder2.position.y;
    weight5.position.x=-5.44;
    PIEremoveDragElement(weight5);
    controls5.enabled=false;
    controls5.removeEventListener( 'dragend', DropFunction5 );
    PIEremoveDragElement(weight5);
    bigontopleft=1;
  }
  else if(weight5side=="right"){
    rightHeight+=0.4;
    weight5.position.y=rightHeight+weightHolder1.position.y;
    weight5.position.x=5.44;
    PIEremoveDragElement(weight5);
    controls5.enabled=false;
    controls5.removeEventListener( 'dragend', DropFunction5 );
    PIEremoveDragElement(weight5);
    bigontopright=1;
  }
  else{
    maxSide = MaxWeightCheck();
  }
  Wtext5.position.set(weight5.position.x-0.23,weight5.position.y-0.12,weight5.position.z+0.25);
}


function DropFunction6(event){
  maxSide = MaxWeightCheck(); //returns the side with maximum hanging weight.
  if(weight6side=="left"){
    leftHeight+=0.4;
    weight6.position.y=leftHeight+weightHolder2.position.y;
    weight6.position.x=-5.44;
    PIEremoveDragElement(weight6);
    controls6.enabled=false;
    controls6.removeEventListener( 'dragend', DropFunction6 );
    PIEremoveDragElement(weight6);
    bigontopleft=1;
  }
  else if(weight6side=="right"){
    rightHeight+=0.4;
    weight6.position.y=rightHeight+weightHolder1.position.y;
    weight6.position.x=5.44;
    PIEremoveDragElement(weight6);
    controls6.enabled=false;
    controls6.removeEventListener( 'dragend', DropFunction6 );
    PIEremoveDragElement(weight6);
    bigontopright=1;
  }
  else{
    maxSide = MaxWeightCheck();
  }
  Wtext6.position.set(weight6.position.x-0.23,weight6.position.y-0.12,weight6.position.z+0.25);
}


function loadLabels(){
  //Labels for Weights
  var loader = new THREE.FontLoader();
  loader.load( 'droid_sans_regular.typeface.json', function ( font ) {
	var geometry = new THREE.TextGeometry( '1kg', {
		font: font,
		size: 0.21,
		height: 0.21,
	} );
  var material = new THREE.MeshPhongMaterial({color:0xffffff});
  //W labels across weights
  Wtext1 = new THREE.Mesh(geometry,material);
  PIEaddElement(Wtext1);
  Wtext1.position.set(weight1.position.x-0.18,weight1.position.y-0.12,weight1.position.z+0.25);
  //Wtext1.rotation.y-=Math.PI/10;

  Wtext2 = new THREE.Mesh(geometry,material);
  PIEaddElement(Wtext2);
  Wtext2.position.set(weight2.position.x-0.18,weight2.position.y-0.12,weight2.position.z+0.25);
  //Wtext2.rotation.y-=Math.PI/10;

  Wtext3 = new THREE.Mesh(geometry,material);
  PIEaddElement(Wtext3);
  Wtext3.position.set(weight3.position.x-0.18,weight3.position.y-0.12,weight3.position.z+0.25);
  //Wtext3.rotation.y-=Math.PI/10;


  var geometry = new THREE.TextGeometry( '3kg', {
		font: font,
		size: 0.25,
		height: 0.25,
		curveSegments: 1,
    bevelThickness: 0,
       bevelSize: 5,
        bevelEnabled: false
	} );

  //3W labels across WEIGHTS
  Wtext4 = new THREE.Mesh(geometry,material);
  PIEaddElement(Wtext4);
  Wtext4.position.set(weight4.position.x-0.23,weight4.position.y-0.12,weight4.position.z+0.25);
  //Wtext4.rotation.y-=Math.PI/10;

  Wtext5 = new THREE.Mesh(geometry,material);
  PIEaddElement(Wtext5);
  Wtext5.position.set(weight5.position.x-0.23,weight5.position.y-0.12,weight5.position.z+0.25);
  //Wtext5.rotation.y-=Math.PI/10;

  Wtext6 = new THREE.Mesh(geometry,material);
  PIEaddElement(Wtext6);
  Wtext6.position.set(weight6.position.x-0.23,weight6.position.y-0.12,weight6.position.z+0.25);
  //Wtext6.rotation.y-=Math.PI/10;


  var geometry = new THREE.TextGeometry( '50kg', {
		font: font,
		size: 0.6,
		height: 0.6,
    bevelThickness: 0,
       bevelSize: 1,
        bevelEnabled: false
	} );

  //50W label
  var material = new THREE.MeshPhongMaterial({color:0x000000});
  WtextCenter = new THREE.Mesh(geometry,material);
  PIEaddElement(WtextCenter);
  WtextCenter.rotation.x+=Math.PI/8;
  WtextCenter.position.set(myHeavyBlock.position.x-0.9,myHeavyBlock.position.y-0.7,myHeavyBlock.position.z+0.8);
  PIErender();
});

}


function timeHandler(){}
function XHandler(){}

//On body load running function
function loadExperimentElements(){
  PIEscene.background = new THREE.Color(0x203000);
  loadCenterTable();
  loadGround();
  PIEsetExperimentTitle("Multiple forces–direction and result");
  PIEsetDeveloperName("Sreekanth T M");
  PIEaddInputSlider("Time:",0.0,timeHandler,0.0,20.0,0.1);
  PIEaddDisplayText("Timer (ms):",0.0);
  PIEaddInputSlider("BlockX:",0.0,XHandler,0.0,3.0,0.1);
  PIEaddDisplayText("BlockX: ",0.0);
  PIEaddInputCommand("Remove Weights",removeWeights);
  loadRightArrows();
  loadLeftArrows();

  initialiseScene();
  initialiseHelp();
  initialiseInfo();

  document.getElementById('start').addEventListener('click',AnimationStart);
  document.getElementById('stop').addEventListener('click',AnimationStop);

  var loader = new THREE.FontLoader();

  loader.load( 'optimer_regular.typeface.json', function ( font ) {
	var geometry = new THREE.TextGeometry( 'WEIGHTS', {
		font: font,
		size: 0.5,
		height: 0.05,
		curveSegments: 1,
    bevelThickness: 0,
       bevelSize: 5,
        bevelEnabled: false
	} );
  var material = new THREE.MeshBasicMaterial({color:"white"});
  var text = new THREE.Mesh(geometry,material);
  PIEaddElement(text);
  text.position.set(8.5,3,0);
  //text.rotation.y-=Math.PI/10;

} );

  loadWeights();


  loadObservationTable();
  trials=1;

  PIEsetAreaOfInterest(-12,8,12,-8);
  loadHeavyBlock();
  loadStrings(1);
  loadPulley(1);

  resetExperiment();
}


function removeWeights(){
  leftHeight=0;
  rightHeight=0;
	bigontopleft=0;
	bigontopright=0;
  controls1.enabled=true;
  controls2.enabled=true;
  controls3.enabled=true;
  controls4.enabled=true;
  controls5.enabled=true;
  controls6.enabled=true;
  controls1.addEventListener( 'dragend', DropFunction1 );
  controls2.addEventListener( 'dragend', DropFunction2 );
  controls3.addEventListener( 'dragend', DropFunction3 );
  controls4.addEventListener( 'dragend', DropFunction4 );
  controls5.addEventListener( 'dragend', DropFunction5 );
  controls6.addEventListener( 'dragend', DropFunction6 );
  PIEdragElement(weight1);
  PIEsetDrag(weight1,dragLimitsWeight1);
  PIEdragElement(weight2);
  PIEsetDrag(weight2,dragLimitsWeight2);
  PIEdragElement(weight3);
  PIEsetDrag(weight3,dragLimitsWeight3);
  PIEdragElement(weight4);
  PIEsetDrag(weight4,dragLimitsWeight4);
  PIEdragElement(weight5);
  PIEsetDrag(weight5,dragLimitsWeight5);
  PIEdragElement(weight6);
  PIEsetDrag(weight6,dragLimitsWeight6);

  weight1.position.set(8,2,1);
  weight2.position.set(9.5,2,1);
  weight3.position.set(11,2,1);
  weight4.position.set(8,0,1);
  weight5.position.set(9.5,0,1);
  weight6.position.set(11,0,1);

  Wtext1.position.set(weight1.position.x-0.14,weight1.position.y-0.12,weight1.position.z+0.25);
  Wtext2.position.set(weight2.position.x-0.14,weight2.position.y-0.12,weight2.position.z+0.25);
  Wtext3.position.set(weight3.position.x-0.14,weight3.position.y-0.12,weight3.position.z+0.25);
  Wtext4.position.set(weight4.position.x-0.20,weight4.position.y-0.12,weight4.position.z+0.25);
  Wtext5.position.set(weight5.position.x-0.20,weight5.position.y-0.12,weight5.position.z+0.25);
  Wtext6.position.set(weight6.position.x-0.20,weight6.position.y-0.12,weight6.position.z+0.25);
  PIErender();
}


function loadRightArrows(){
  var dir = new THREE.Vector3( 1,0, 0 );
  dir.normalize();
  var origin = new THREE.Vector3( -1.5, 3, 1 );
  var length = 3;
  var hex = 0xffffff;
  RarrowCenter = new THREE.ArrowHelper( dir, origin, length, hex );
  PIEaddElement(RarrowCenter);

  var dir = new THREE.Vector3( 0,1, 0 );
  dir.normalize();
  var origin = new THREE.Vector3( -6.5, -3, 1 );
  var length = 3;
  var hex = 0xffffff;
  RarrowLeft = new THREE.ArrowHelper( dir, origin, length, hex );
  PIEaddElement(RarrowLeft);

  var dir = new THREE.Vector3( 0,-1, 0 );
  dir.normalize();
  var origin = new THREE.Vector3( 6.5, 0, 1 );
  var length = 3;
  var hex = 0xffffff;
  RarrowRight = new THREE.ArrowHelper( dir, origin, length, hex );
  PIEaddElement(RarrowRight);
}


function loadLeftArrows(){
  var dir = new THREE.Vector3( -1,0, 0 );
  dir.normalize();
  var origin = new THREE.Vector3( 1.5, 3, 1 );
  var length = 3;
  var hex = 0xffffff;
  LarrowCenter = new THREE.ArrowHelper( dir, origin, length, hex );
  PIEaddElement(LarrowCenter);

  var dir = new THREE.Vector3( 0,1, 0 );
  dir.normalize();
  var origin = new THREE.Vector3( 6.5, -3, 1 );
  var length = 3;
  var hex = 0xffffff;
  LarrowLeft = new THREE.ArrowHelper( dir, origin, length, hex );
  PIEaddElement(LarrowLeft);

  var dir = new THREE.Vector3( 0,-1, 0 );
  dir.normalize();
  var origin = new THREE.Vector3( -6.5, 0, 1 );
  var length = 3;
  var hex = 0xffffff;
  LarrowRight = new THREE.ArrowHelper( dir, origin, length, hex );
  PIEaddElement(LarrowRight);
}





//Checking which side has maximum weight.
function MaxWeightCheck(){
  var maxSide="center";
  leftWeight=0;
  rightWeight=0;
  weightDifference=0;

  weight1side="";
  weight2side="";
  weight3side="";
  weight4side="";
  weight5side="";
  weight6side="";
  //Adding weight 1 into system.
  if((weight1.position.x>=5.2 && weight1.position.x<=5.65)&&(weight1.position.y<=0)){
    rightWeight+=1;
    weight1side="right";
    //PIEremoveDragElement(weight1);
  }
  if(weight1.position.x<=-5.2 && weight1.position.x>=-5.65&&(weight1.position.y<=0)){
    leftWeight+=1;
    weight1side="left";
    //PIEremoveDragElement(weight1);
  }

  //Adding weight2 into system.
  if((weight2.position.x>=5.2 && weight2.position.x<=5.65)&&(weight2.position.y<=0)){
    rightWeight+=1;
    weight2side="right";
    //PIEremoveDragElement(weight2);
  }
  if(weight2.position.x<=-5.2 && weight2.position.x>=-5.65&&(weight2.position.y<=0)){
    leftWeight+=1;
    weight2side="left";
    //PIEremoveDragElement(weight2);
  }

  //Adding weight 3 into system.
  if((weight3.position.x>=5.2 && weight3.position.x<=5.65)&&(weight3.position.y<=0)){
    rightWeight+=1;
    weight3side="right";
    //PIEremoveDragElement(weight3);
  }
  if(weight3.position.x<=-5.2 && weight3.position.x>=-5.65&&(weight3.position.y<=0)){
    leftWeight+=1;
    weight3side="left";
    //PIEremoveDragElement(weight3);
  }


  //Adding weight 4 into system . weight 4 has double the weight of weight 1/2/3.
  if((weight4.position.x>=5.2 && weight4.position.x<=5.65)&&(weight4.position.y<=0)){
    rightWeight+=3;
    weight4side="right";
    //PIEremoveDragElement(weight4);
  }
  if(weight4.position.x<=-5.2 && weight4.position.x>=-5.65&&(weight4.position.y<=0)){
    leftWeight+=3;
    weight4side="left";
    //PIEremoveDragElement(weight4);
  }

  //Adding weight 5
  if((weight5.position.x>=5.2 && weight5.position.x<=5.65)&&(weight5.position.y<=0)){
    rightWeight+=3;
    weight5side="right";
    //PIEremoveDragElement(weight5);
  }
  if(weight5.position.x<=-5.2 && weight5.position.x>=-5.65&&(weight5.position.y<=0)){
    leftWeight+=3;
    weight5side="left";
    //PIEremoveDragElement(weight5);
  }

  //Adding weight 6 to system.
  if((weight6.position.x>=5.2 && weight6.position.x<=5.65)&&(weight6.position.y<=0)){
    rightWeight+=3;
    weight6side="right";
    //PIEremoveDragElement(weight6);
  }
  if(weight6.position.x<=-5.2 && weight6.position.x>=-5.65&&(weight6.position.y<=0)){
    leftWeight+=3;
    weight6side="left";
    //PIEremoveDragElement(weight6);
  }


  if(rightWeight>leftWeight){
    weightDifference = rightWeight-leftWeight;
    maxSide="right";
  }
  else if(rightWeight<leftWeight){
    weightDifference = leftWeight-rightWeight;
    maxSide="left";
  }
  else{
    maxSide="center";
  }
  return maxSide;
}



function loadObservationTable(){
  PIEcreateTable("Observations", 10, 6, true);
  var header=["S","Left  ","Right  ","Net","Direc-","Time"];
  PIEupdateTableRow(0, header);
  var header1=["&nbsp&nbspNo","&nbsp&nbspWt ","&nbsp&nbspWt ","&nbsp&nbspWt ","-tion","(sec)"];
  PIEupdateTableRow(1, header1);
  //PIEsetRowInput(1, 9, "");
  PIEsetRowInput(2, 9, "");
  PIEsetRowInput(3, 9, "");
  PIEsetRowInput(4, 9, "");
  PIEsetRowInput(5, 9, "");
//  PIEsetRowInput(6, 9, "");

  //var t=PIEtableSelect("Observations");
  //var tab = PIEtableSelect("Observations");

  //tab.position.set(0,0,0);
  PIEresize();
}



function Mini(a,b){
  if(a<b){
      return a;
  }
  else {
      return b;
  }
}

//DRAG Limits of weights
function dragLimitsWeight1(element,newpos){
  //alert("Hey");
  var MinPos =  Mini(weightHolder1.position.y,weightHolder2.position.y);
  if(newpos.y<=MinPos+0.12){
    weight1.position.y=MinPos+0.12;
  }
  else{
    weight1.position.y=newpos.y;
  }
  weight1.position.x=newpos.x;
  Wtext1.position.set(weight1.position.x-0.12,weight1.position.y-0.12,weight1.position.z+0.25);
  //alert("h");
  //element.position.set(newpos.x,MinPos+0.12,0);

}

function dragLimitsWeight2(element,newpos){
  var MinPos =  Mini(weightHolder1.position.y,weightHolder2.position.y);
  if(newpos.y<=MinPos+0.12){
    weight2.position.y=MinPos+0.12;
  }
  else{
    weight2.position.y=newpos.y;
  }
  weight2.position.x=newpos.x;
  Wtext2.position.set(weight2.position.x-0.12,weight2.position.y-0.12,weight2.position.z+0.25);

}

function dragLimitsWeight3(element,newpos){
  var MinPos =  Mini(weightHolder1.position.y,weightHolder2.position.y);
  if(newpos.y<=MinPos+0.12){
    weight3.position.y=MinPos+0.12;
  }
  else{
    weight3.position.y=newpos.y;
  }
  weight3.position.x=newpos.x;
  Wtext3.position.set(weight3.position.x-0.12,weight3.position.y-0.12,weight3.position.z+0.25);

}

function dragLimitsWeight4(element,newpos){
  var MinPos =  Mini(weightHolder1.position.y,weightHolder2.position.y);
  if(newpos.y<=MinPos+0.25){
    weight4.position.y=MinPos+0.25;
  }
  else{
    weight4.position.y=newpos.y;
  }
  weight4.position.x=newpos.x;
  Wtext4.position.set(weight4.position.x-0.20,weight4.position.y-0.12,weight4.position.z+0.25);

}

function dragLimitsWeight5(element,newpos){
  var MinPos =  Mini(weightHolder1.position.y,weightHolder2.position.y);
  if(newpos.y<=MinPos+0.25){
    weight5.position.y=MinPos+0.25;
  }
  else{
    weight5.position.y=newpos.y;
  }
  weight5.position.x=newpos.x;
  Wtext5.position.set(weight5.position.x-0.20,weight5.position.y-0.12,weight5.position.z+0.25);

}

function dragLimitsWeight6(element,newpos){
  var MinPos =  Mini(weightHolder1.position.y,weightHolder2.position.y);
  if(newpos.y<=MinPos+0.25){
    weight6.position.y=MinPos+0.25;
  }
  else{
    weight6.position.y=newpos.y;
  }
  weight6.position.x=newpos.x;
  Wtext6.position.set(weight6.position.x-0.20,weight6.position.y-0.12,weight6.position.z+0.25);

}




var tCheck=0; //variable to detect number of experiment trials.
var Bcheck=0; //Variable to detect boundary condition.
var maxSide;  //to store the maximum weight side.
var LarrowCheck=0;
var RarrowCheck=0;
var ext=0;
var autoReset=0;
//var centerBalance="center";
var animationStatus=0;
function AnimationStart(){

  /*if(leftWeight==0&&rightWeight==0){
    alert("Add Weights first and then click START to begin simulation!");
    PIEstopAnimation();
  }
  else{
    animationStatus=1;
    /*hide.visible=true;
    PIEremoveDragElement(weight1);
    PIEremoveDragElement(weight2);
    PIEremoveDragElement(weight3);
    PIEremoveDragElement(weight4);
    PIEremoveDragElement(weight5);
    PIEremoveDragElement(weight6);*/
  //}
  animationStatus=1;
  PIErender();
}

function AnimationStop(){
  animationStatus=0;
  //hide.visible=false;
  /*PIEdragElement(weight1);
  PIEsetDrag(weight1,dragLimitsWeight1);
  PIEdragElement(weight2);
  PIEsetDrag(weight2,dragLimitsWeight2);
  PIEdragElement(weight3);
  PIEsetDrag(weight3,dragLimitsWeight3);
  PIEdragElement(weight4);
  PIEsetDrag(weight4,dragLimitsWeight4);
  PIEdragElement(weight5);
  PIEsetDrag(weight5,dragLimitsWeight5);
  PIEdragElement(weight6);
  PIEsetDrag(weight6,dragLimitsWeight6);*/
  PIErender();
}

//ANIMATION FUNCTION. Moves Elements in the screen according to laws of physics.
function updateExperimentElements(t,dt){

  blockAcc = (weightDifference)/50;     //Considering the heavy block having mass 100kg.

  /*****Boundary Conditions******/
  if(myHeavyBlock.position.x>=2.65||ext==1){
    myHeavyBlock.position.x=2.65;
    Bcheck=1;
    if(tCheck==0){
      trials++;
      tCheck=1;
    }

      if(ext==1){
        ext=0;
        alert("Experiment Stopped since weight reached top of string!! Time: "+t/1000+". Resetting scene.");
        PIEupdateTableCell(trials, 0, ""+trials-1);
        PIEupdateTableCell(trials, 1, ""+leftWeight+"kg");
        PIEupdateTableCell(trials, 2, ""+rightWeight+"kg");
        PIEupdateTableCell(trials, 3, ""+weightDifference+"kg");
        PIEupdateTableCell(trials, 4, ""+maxSide);
        PIEupdateTableCell(trials, 5, ""+timeElapsed/1000+"s");
      }
      else{
        alert("Experiment successfull! Time taken: "+t/1000+"s\nResetting experiment to perform again");
        //PIEsetRowInput(trials, 8, "");
        PIEupdateTableCell(trials, 0, ""+trials-1);
        PIEupdateTableCell(trials, 1, ""+leftWeight+"kg");
        PIEupdateTableCell(trials, 2, ""+rightWeight+"kg");
        PIEupdateTableCell(trials, 3, ""+weightDifference+"kg");
        PIEupdateTableCell(trials, 4, ""+maxSide);
        PIEupdateTableCell(trials, 5, ""+timeElapsed/1000+"s");
      }

      autoReset=1;
    resetExperiment();

    PIEstopAnimation();
    PIErender();
    return;
  }

  if(myHeavyBlock.position.x<=-2.65||ext==1){
    myHeavyBlock.position.x=-2.65;
    Bcheck=1;
    if(tCheck==0){
      trials++;
      tCheck=1;
    }

    if(ext==1){
      ext=0;
      alert("Experiment Stopped since weight reached top of string!! Time: "+t/1000+". Resetting scene.");
      PIEupdateTableCell(trials, 0, ""+trials-1);
      PIEupdateTableCell(trials, 1, ""+leftWeight+"kg");
      PIEupdateTableCell(trials, 2, ""+rightWeight+"kg");
      PIEupdateTableCell(trials, 3, ""+weightDifference+"kg");
      PIEupdateTableCell(trials, 4, ""+maxSide);
      PIEupdateTableCell(trials, 5, ""+timeElapsed/1000+"s");
    }
    else{
      alert("Experiment successfull! Time taken: "+t/1000+"s\nResetting experiment to perform again");
      PIEupdateTableCell(trials, 0, ""+trials-1);
      PIEupdateTableCell(trials, 1, ""+leftWeight+"kg");
      PIEupdateTableCell(trials, 2, ""+rightWeight+"kg");
      PIEupdateTableCell(trials, 3, ""+weightDifference+"kg");
      PIEupdateTableCell(trials, 4, ""+maxSide);
      PIEupdateTableCell(trials, 5, ""+timeElapsed/1000+"s");
    }

    PIEstopAnimation();
      autoReset=1;
    resetExperiment();

    PIErender();
  }


    initialWeight1pos = weight1.position.y;
    initialWeight2pos = weight2.position.y;
    initialWeight3pos = weight3.position.y;
    initialWeight4pos = weight4.position.y;
    initialWeight5pos = weight5.position.y;
    initialWeight6pos = weight6.position.y;



    //If equal weight is applied
    if(maxSide=="center"){
      LarrowCenter.visible=false;
      LarrowRight.visible=false;
      LarrowLeft.visible=false;
      LarrowCheck=0;
      RarrowCheck=0;
      RarrowCenter.visible=false;
      RarrowRight.visible=false;
      RarrowLeft.visible=false;
      PIEstopAnimation();
      alert("Forces are equal! The system is balanced.")
      /*if(weightHolder1.position.y>weightHolder2.position.y){
        centerBalance="right";
      }
      else{
        centerBalance="left"
      }*/
    }

  //Right side has maximum weight
  if(maxSide=="right"){
    myHeavyBlock.position.x+=(blockAcc)*(t/1000)*(dt/1000);     //Physics for accelerating the heavy block. ds=(a*t*dt)

    if(weight1.position.y<=0){
      switch(weight1side){
        case "right" : weight1.position.y-=(blockAcc)*(t/1000)*(dt/1000);
                      break;
        case "left" : if(weight1.position.y<=-0.25) weight1.position.y+=(blockAcc)*(t/1000)*(dt/1000);
                      else ext=1;
                      break;
      }
      //PIEremoveDragElement(weight1);
    }

    if(weight2.position.y<=0){
      switch(weight2side){
        case "right" : weight2.position.y-=(blockAcc)*(t/1000)*(dt/1000);
                      break;
        case "left" : if(weight2.position.y<=-0.25)weight2.position.y+=(blockAcc)*(t/1000)*(dt/1000);
                      else ext=1;
                      break;
      }
      //PIEremoveDragElement(weight2);
    }


    if(weight3.position.y<=0){
      switch(weight3side){
        case "right" : weight3.position.y-=(blockAcc)*(t/1000)*(dt/1000);
                      break;
        case "left" : if(weight3.position.y<=-0.25) weight3.position.y+=(blockAcc)*(t/1000)*(dt/1000);
                      else ext=1;
                      break;
      }
      //PIEremoveDragElement(weight3);
    }


    if(weight4.position.y<=0){
      switch(weight4side){
        case "right" : weight4.position.y-=(blockAcc)*(t/1000)*(dt/1000);
                      break;
        case "left" : if(weight4.position.y<=-0.25) weight4.position.y+=(blockAcc)*(t/1000)*(dt/1000);
                      else ext=1;
                      break;
      }
      //PIEremoveDragElement(weight4);
    }


    if(weight5.position.y<=0){
      switch(weight5side){
        case "right" : weight5.position.y-=(blockAcc)*(t/1000)*(dt/1000);
                      break;
        case "left" : if(weight5.position.y<=-0.25)weight5.position.y+=(blockAcc)*(t/1000)*(dt/1000);
                      else ext=1;
                      break;
      }
    //  PIEremoveDragElement(weight5);
    }


    if(weight6.position.y<=0){
      switch(weight6side){
        case "right" : weight6.position.y-=(blockAcc)*(t/1000)*(dt/1000);
                      break;
        case "left" : if(weight6.position.y<=-0.25)weight6.position.y+=(blockAcc)*(t/1000)*(dt/1000);
                      else ext=1;
                      break;
      }
      //PIEremoveDragElement(weight6);
    }


    //label movement
    Wtext1.position.y=weight1.position.y-0.12;
    Wtext2.position.y=weight2.position.y-0.12;
    Wtext3.position.y=weight3.position.y-0.12;
    Wtext4.position.y=weight4.position.y-0.12;
    Wtext5.position.y=weight5.position.y-0.12;
    Wtext6.position.y=weight6.position.y-0.12;
    WtextCenter.position.x=myHeavyBlock.position.x-0.9;
    if(Bcheck==0){
      rightString.position.y-=(blockAcc)*(t/1000)*(dt/1000);
      leftString.position.y+=(blockAcc)*(t/1000)*(dt/1000);
      weightHolder1.position.y-=(blockAcc)*(t/1000)*(dt/1000);
      weightHolder2.position.y+=(blockAcc)*(t/1000)*(dt/1000);
      timeElapsed =t;
      PIEchangeDisplayText("Timer (ms):",timeElapsed);
      PIEchangeDisplayText("BlockX: ",myHeavyBlock.position.x+"");
    }


    if(RarrowCheck==0){
      LarrowCenter.visible=false;
      LarrowRight.visible=false;
      LarrowLeft.visible=false;
      RarrowCenter.visible=true;
      RarrowRight.visible=true;
      RarrowLeft.visible=true;
      RarrowCheck=1;
    }

  }

  //Left side has the maximum weight situation
  if(maxSide=="left"){
    myHeavyBlock.position.x-=(blockAcc)*(t/1000)*(dt/1000);

    switch(weight1side){
      case "right" : if(weight1.position.y<=-0.25) weight1.position.y+=(blockAcc)*(t/1000)*(dt/1000);
                      else ext=1;
                    break;
      case "left" : weight1.position.y-=(blockAcc)*(t/1000)*(dt/1000);
                    break;
    }

    switch(weight2side){
      case "right" : if(weight2.position.y<=-0.25)weight2.position.y+=(blockAcc)*(t/1000)*(dt/1000);
                    else ext=1;
                    break;
      case "left" : weight2.position.y-=(blockAcc)*(t/1000)*(dt/1000);
                    break;
    }

    switch(weight3side){
      case "right" : if(weight3.position.y<=-0.25) weight3.position.y+=(blockAcc)*(t/1000)*(dt/1000);
                    else ext=1;
                    break;
      case "left" : weight3.position.y-=(blockAcc)*(t/1000)*(dt/1000);
                    break;
    }

    switch(weight4side){
      case "right" : if(weight4.position.y<=-0.25) weight4.position.y+=(blockAcc)*(t/1000)*(dt/1000);
                    else ext=1;
                    break;
      case "left" : weight4.position.y-=(blockAcc)*(t/1000)*(dt/1000);
                    break;
    }

    switch(weight5side){
      case "right" : if(weight5.position.y<=-0.25)weight5.position.y+=(blockAcc)*(t/1000)*(dt/1000);
                    else ext=1;
                    break;
      case "left" : weight5.position.y-=(blockAcc)*(t/1000)*(dt/1000);
                    break;
    }

    switch(weight6side){
      case "right" : if(weight6.position.y<=-0.25)weight6.position.y+=(blockAcc)*(t/1000)*(dt/1000);
                    else ext=1;
                    break;
      case "left" : weight6.position.y-=(blockAcc)*(t/1000)*(dt/1000);
                    break;
    }

    /*PIEremoveDragElement(weight1);
    PIEremoveDragElement(weight2);
    PIEremoveDragElement(weight3);
    PIEremoveDragElement(weight4);
    PIEremoveDragElement(weight5);
    PIEremoveDragElement(weight6);*/
    //Label movement
    Wtext1.position.y=weight1.position.y-0.12;
    Wtext2.position.y=weight2.position.y-0.12;
    Wtext3.position.y=weight3.position.y-0.12;
    Wtext4.position.y=weight4.position.y-0.12;
    Wtext5.position.y=weight5.position.y-0.12;
    Wtext6.position.y=weight6.position.y-0.12;
    WtextCenter.position.x=myHeavyBlock.position.x-0.9;

    //string movements
    if(Bcheck==0){
      rightString.position.y+=(blockAcc)*(t/1000)*(dt/1000);
      leftString.position.y-=(blockAcc)*(t/1000)*(dt/1000);
      weightHolder1.position.y+=(blockAcc)*(t/1000)*(dt/1000);
      weightHolder2.position.y-=(blockAcc)*(t/1000)*(dt/1000);
      timeElapsed =t;
      PIEchangeDisplayText("Timer (ms):",timeElapsed);
      PIEchangeDisplayText("BlockX: ",myHeavyBlock.position.x);
    }

    if(LarrowCheck==0){
      RarrowCenter.visible=false;
      RarrowRight.visible=false;
      RarrowLeft.visible=false;
      LarrowCenter.visible=true;
      LarrowRight.visible=true;
      LarrowLeft.visible=true;
      LarrowCheck=1;
    }

  }
  PIErender();
}



//Resetting the experiment.
function resetExperiment(){
  initialiseScene();

  LarrowCheck=0;
  RarrowCheck=0;

  myHeavyBlock.position.set(0,0.7,1);
  weight1.position.set(8,2,1);
  weight2.position.set(9.5,2,1);
  weight3.position.set(11,2,1);
  weight4.position.set(8,0,1);
  weight5.position.set(9.5,0,1);
  weight6.position.set(11,0,1);

  //Label reset
/*  Wtext1.position.set(weight1.position.x-0.14,weight1.position.y-0.12,weight1.position.z+0.25);
  Wtext2.position.set(weight2.position.x-0.14,weight2.position.y-0.12,weight2.position.z+0.25);
  Wtext3.position.set(weight3.position.x-0.14,weight3.position.y-0.12,weight3.position.z+0.25);
  Wtext4.position.set(weight4.position.x-0.20,weight4.position.y-0.12,weight4.position.z+0.25);
  Wtext5.position.set(weight5.position.x-0.20,weight5.position.y-0.12,weight5.position.z+0.25);
  Wtext6.position.set(weight6.position.x-0.20,weight6.position.y-0.12,weight6.position.z+0.25);*/

  //WtextCenter.position.set(myHeavyBlock.position.x-0.7,myHeavyBlock.position.y-0.7,myHeavyBlock.position.z+0.8);
  //WtextCenter.position.y=myHeavyBlock.position.y;
  if(autoReset==0){
    /*PIEsetRowInput(1, 12, "");
    PIEsetRowInput(2, 12, "");
    PIEsetRowInput(3, 12, "");
    PIEsetRowInput(4, 12, "");*/
    //PIEsetRowInput(5, 12, "");
    //PIEsetRowInput(6, 12, "");

    for(var i=2;i<=trials;i++){
      PIEupdateTableCell(i, 0, "");
      PIEupdateTableCell(i, 1, "");
      PIEupdateTableCell(i, 2, "");
      PIEupdateTableCell(i, 3, "");
      PIEupdateTableCell(i, 4, "");
      PIEupdateTableCell(i, 5, "");
    }
    //document.getElementById("").style.display='none';
    //loadObservationTable();
    //PIEtableSelect("Observations").visible=false;

    autoReset=1;
    trials=1;
  }
  else{
    autoReset=0;
  }

  //hide.visible=false;

  PIEremoveElement(WtextCenter);
  PIEremoveElement(Wtext1);
  PIEremoveElement(Wtext2);
  PIEremoveElement(Wtext3);
  PIEremoveElement(Wtext4);
  PIEremoveElement(Wtext5);
  PIEremoveElement(Wtext6);

  loadLabels();
  weightHolder1.position.set(5.44,-3.5,1);
  weightHolder2.position.set(-5.44,-3.5,1);

  leftHeight=0;
  rightHeight=0;

  controls1.enabled=true;
  controls2.enabled=true;
  controls3.enabled=true;
  controls4.enabled=true;
  controls5.enabled=true;
  controls6.enabled=true;
  controls1.addEventListener( 'dragend', DropFunction1 );
  controls2.addEventListener( 'dragend', DropFunction2 );
  controls3.addEventListener( 'dragend', DropFunction3 );
  controls4.addEventListener( 'dragend', DropFunction4 );
  controls5.addEventListener( 'dragend', DropFunction5 );
  controls6.addEventListener( 'dragend', DropFunction6 );
  PIEdragElement(weight1);
  PIEsetDrag(weight1,dragLimitsWeight1);
  PIEdragElement(weight2);
  PIEsetDrag(weight2,dragLimitsWeight2);
  PIEdragElement(weight3);
  PIEsetDrag(weight3,dragLimitsWeight3);
  PIEdragElement(weight4);
  PIEsetDrag(weight4,dragLimitsWeight4);
  PIEdragElement(weight5);
  PIEsetDrag(weight5,dragLimitsWeight5);
  PIEdragElement(weight6);
  PIEsetDrag(weight6,dragLimitsWeight6);
	bigontopleft=0;
	bigontopright=0;

  leftString.position.y=0;
  rightString.position.y=0;

  Bcheck=0;
  tCheck=0;
  timeElapsed=0;

  weight1side="";
  weight2side="";
  weight3side="";
  weight4side="";
  weight5side="";
  weight6side="";

  maxSide="";
  weightDifference=0;


}
