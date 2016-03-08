/*
*Author: YzpHelios
*Finish time: 2016/3/8
*/

window.onload = function() {
	function byId(obj){
		return document.getElementById(obj);
	};

	var oBtnWrap = document.getElementById('btn-wrap');
	var oConWrap = document.getElementById('con-wrap');
	var btnA1 = oBtnWrap.getElementsByTagName('p');
	var oLi = oConWrap.getElementsByTagName('li');
	var obBtnAtrr=[];
	var num = 0;

	/*点击左侧按钮*/
	for (var i=0; i<btnA1.length; ++i){
					btnA1[i].index=i;
					btnA1[i].onclick=function(){
						var zIndex=this.index;
						btnA1[num].className='';
						for (var i=0; i<btnA1.length; ++i){
							btnA1[i].className="";
						};
						this.className ="active";
						for (var j=0; j<oLi.length; ++j){
							oLi[j].style.display="none";
						}
						oLi[zIndex].style.display="block";
					};
				};
	banner1('a');
	banner1('b');
	banner1('c');
	banner1('d');
	function banner1(obj) {
		var sobj = byId(obj);
		var ospan =sobj.getElementsByTagName('span');
		var oimg = sobj.getElementsByTagName('p');

		for(var i = 0; i < ospan.length; ++i){
			ospan[i].index = i;
			ospan[i].onmouseover = function(){
				var zIndex = this.index;
				ospan[num].className = '';
				for(var i = 0; i < ospan.length; ++i){
					ospan[i].className = "";
				};
				this.className = "curr";
				for(var j = 0; j < ospan.length; ++j){
					oimg[j].style.display = "none";
				}
				oimg[zIndex].style.display = "block";
			};
		}
	};



}