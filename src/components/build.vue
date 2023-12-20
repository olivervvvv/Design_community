<!-- file:build.vue -->
<template>
  <div class="line"></div>
  <div class="body">
    <div class="leftbody">
      <ImageUpload />
      <div class="titleinput">
        標題:
        <input type="text" class="titletext">
      </div>
      <div class="switchbutton">

        <div class="py-3 d-flex justify-content-center">
          <div>允許使用者進行評論
        <label class="switch">
          <input type="checkbox">
          <span class="slider"></span>
        </label>
        ON
            </div>
        </div>
      </div>
    </div>
    
    <div class="rightbody">
      
        <div class="inputtext">
          設計公司名稱:
          <input type="text" class="companyname">
        </div>
        <div class="inputtext">
          案件名稱:
          <input type="text" class="casename">
        </div>
        <div class="inputtext">
          施工範圍:
          <select name="" id="">
            <option value="badroom">房間</option>
            <option value="livingroom">客廳</option>
            <option value="kitchon">廚房</option>
          </select>
        </div>
        <div class="inputtext">
          設計發想:
          <input type="text" class="designIdeastext">
        </div>
        <div class="inputtext">
          設計公司連結:
          <input type="text" class="companylink">
        </div>
        <div class="star-mark">
          <span class="starlink">點擊星星就能打分</span>
          <ul class="star">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul><br>
          <!-- <div class="result"><span class="mark"></span><span class="detail"></span></div> -->
          <div class="help-info">
            <span class="mark"></span>&nbsp;<span class="decri"></span><br>
            <span class="detail"></span>
          </div>
        </div>
        <div class="action">
          <button type="button" class="buildbutton">建立</button>
        </div>
    </div>
  </div>
</template>

<script>
  
  import ImageUpload from "@/components/ImageUpload.vue";
  export default {
    components: {
      ImageUpload,
    },
    methods: {
      
      },
      mounted() {
        var MARK_INFO = [
               '1分|很不滿意|差得太離譜，與賣家描述的嚴重不符，非常不滿',
               '2分|不滿意|部分有破損，與賣家描述的不符，不滿意',
               '3分|一般|質量一般，沒有賣家描述的那麼好',
               '4分|滿意|質量不錯，與賣家描述的基本一致，還是挺滿意的',
               '5分|非常滿意|質量非常好，與賣家描述的完全一致，非常滿意'
            ];
   

function delegateEvent(delegateElement, targetTag, eventName, handler) {
	delegateElement.addEventListener(eventName, function (event) {
		var target = event.target;
		if (target.nodeName.toLowerCase() === targetTag.toLowerCase()) {
			return handler(event);
		}
	} ,false);
}

function hasClass(element, className) {
	return (new RegExp('(^|\\s)' + className + '($|\\s)')).test(element.className);
}

function addClass(element, newClassName) {
	if (!hasClass(element, newClassName)) {
		element.className += element.className ? (' ' + newClassName) : newClassName; 
	}
}

function removeClass(element, oldClassName) {
	if (hasClass(element, oldClassName)) {
		element.className = element.className.replace(new RegExp('(^|\\s)' + oldClassName + '($|\\s)'), ' ').trim(); 
	}
}

function lightenStar(stars, activeIndex) {
	for (var i = 0; i <= activeIndex; i++) {
		addClass(stars[i], 'light');
	}
}

function darkenStar(stars) {
	for (var i = 0; i < stars.length; i++) {
		removeClass(stars[i], 'light');
	}
}

var starMark = document.getElementsByClassName('star-mark')[0];
var stars = starMark.getElementsByClassName('star')[0].getElementsByTagName('li');
var helpInfo = starMark.getElementsByClassName('help-info')[0];
var cnofirmIndex = -1;

delegateEvent(starMark, 'li', 'click', function (event) {
	var target = event.target;
	var markResult = starMark.getElementsByClassName('result')[0];
	cnofirmIndex = Array.prototype.indexOf.call(stars, target);
	lightenStar(stars, cnofirmIndex);

	var markNumDiv = markResult.getElementsByClassName('mark')[0];
	var markDetailDiv = markResult.getElementsByClassName('detail')[0];
	var infos = MARK_INFO[cnofirmIndex].split('|');
	markNumDiv.textContent = infos[0];
	markDetailDiv.textContent = '（' +　infos[2] + '）';
});

delegateEvent(starMark, 'li', 'mouseover', function (event) {
	var target = event.target;
	var hoverIndex = Array.prototype.indexOf.call(stars, target);
	darkenStar(stars);
	lightenStar(stars, hoverIndex);

	helpInfo.style.display = 'block';
	helpInfo.style.left = (hoverIndex + 1) * 25 + 'px';

	var helpMark = helpInfo.getElementsByClassName('mark')[0];
	var helpDescri = helpInfo.getElementsByClassName('decri')[0];
	var helpDetail = helpInfo.getElementsByClassName('detail')[0];
	var infos = MARK_INFO[hoverIndex].split('|');
	helpMark.textContent = infos[0];
	helpDescri.textContent = infos[1];
	helpDetail.textContent = infos[2];
});

delegateEvent(starMark, 'li', 'mouseout', function (event) {
	var target = event.target;
	darkenStar(stars);
	lightenStar(stars, cnofirmIndex);
	helpInfo.style.display = 'none';
});

  },
};
  </script>
  
  <style lang="scss" scoped>
    .line{
      border:1px solid rgba(rgb(125, 108, 147), 0.5);
    }
  .body {
    margin-top: 50px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center; /* Use 'align-items' to center vertically */
  }
  
  .leftbody {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
  }
  .inputtext{
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    font-size: 15pt;
    
    input{
      margin-left: 15px;
      border: none; /* 移除所有邊框 */
      outline: none; /* 移除聚焦時的外邊框（可選） */
      border-radius: 5px;
      background-color: #e0dede;
    }
    select{
      margin-left: 15px;
      border: none; /* 移除所有邊框 */
      width: 210px;
      border-radius: 5px;
      text-align: center;
      font-size: 13pt;
      background-color: #e0dede;
    }
  }
  .companyname{
    position: relative;
    right: 0;
    width: 170px;
  }
  .casename{
    width: 210px;
  }
  .designIdeastext{
    width: 210px;
  }
  .companylink{
    width: 170px;
  }
  .action{
    display: flex;
    width: 30%;
    margin-left: 62%;
  }
  .buildbutton{
    border: none; /* 移除所有邊框 */
    outline: none; /* 移除聚焦時的外邊框（可選） */
    border-radius: 5px;
    font-size: 13pt;
    width: 60px;
    height: 40px;
    border: 1px solid black;
  }
  .rightbody {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 15%;
    width: 60%;
    height: 100%;
  }
  .titleinput{
    position: relative;
    top: 15px;
    left: 0;
    font-size: 15pt;
    display: flex;
    justify-content: center;

  }
  .titletext{
    margin-left: 12px;
    border: none; /* 移除所有邊框 */
    outline: none; /* 移除聚焦時的外邊框（可選） */
    border-radius: 5px;
    height: 30px;
    width: 170px;
    padding: 0;
    background-color: #e0dede;
  }
  .switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 2px;
  top: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: green;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.switchbutton{
  position: relative;
  top: 50px;
  
}
.starlink{
  font-size: 12pt;
  color: black;
}
ul {
	 		margin: 0;
	 		padding: 0;
	 	}
		.star-mark {
			position: relative;
			font-size: 12px;
			width: 500px;
			margin: 0;
			color: #999;
      height: 50px;
		}
		.star-mark .star {
			display: inline-block;
			margin-left: 10px;
			list-style: none;
			vertical-align: middle;
		}
		.star-mark .star li {
			float: left;
			width: 24px;
			height: 19px;
			background: url(https://pandoraui.github.io/learning-javascript/lesson4/img/star.png) no-repeat;
		}
		.star-mark .star li.light {
			background-position: 0 -28px;
		}
		.star-mark .result {
			display: inline-block;
			margin-left: 10px;
		}
		.star-mark .result .mark {
			font-weight: 700;
			color: #f00;
		}
		.star-mark .help-info {
			display: none;
			position: absolute;
		    top: 20px;
		    width: 159px;
		    height: 60px;
			padding: 7px 10px 0;
			line-height: 1.5;
			background: url(https://pandoraui.github.io/learning-javascript/lesson4/img/icon.gif) no-repeat;
		}
		.star-mark .help-info .mark,.decri {
			color: #f00;
		}
  </style>