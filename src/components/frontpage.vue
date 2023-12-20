<template>
    <div class="body">

        <div class="postcontent">
            <div class="card " style="max-height: full;">
                <img src="../../public/K2A000978N000000000PAA.png" class="card-img-top overflow-y-auto" alt="..." >
                <div class="card-body">
                  <h5 class="card-title">〈畫山陰圖〉</h5>
                  <p class="card-text">唐王維畫山陰圖　卷</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">畫卷前段是一林木環繞的平坡，二人對坐交談，一人臨水濯足；後段有岩塊斜向如屏壁，一人乘舟自後而出。此畫以細筆勾勒樹石水紋，設色清雅，兼有青綠與水墨山水意趣。據文獻記載，五代流傳有山陰圖，描繪王羲之與三友人在山陰蘭亭聚會，米芾曾見古本，並請李公麟另繪一本，後世傳摹甚多。然該本王羲之為站姿，與本卷坐姿人物不似。拖尾米芾題跋內容與此畫無關，應是後人偽仿。
                  </li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">讚</a>
                  <a href="#" class="card-link">留言</a>
                </div>
              </div>
            <div class="card " style="max-height: full;">
                <img src="../../public/K2A002571N000000000PAA.png" class="card-img-top overflow-y-auto" alt="..." >
                <div class="card-body">
                  <h5 class="card-title">〈橅宋苑畫榴下雄雞圖〉</h5>
                  <p class="card-text">清 鄒一桂〈橅宋苑畫榴下雄雞圖〉</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">鄒一桂（1686－1772），號小山，江蘇無錫人。雍正五年（1727）進士，官至禮部侍郎。能詩善畫，師承惲壽平，著有《小山畫譜》。 畫中公雞挺立石上，取「石」與「室」、「雞」與「吉」諧音，寓意「室上大吉」﹔再以「冠」與「官」、「鳴」與「名」諧音，象徵獲取「功名」。鄒一桂畫風清潤秀逸，著色雅艷，因作品多屬應制之作，故用筆特為工整。本幅款署辛未（1751）九月，時六十六歲。</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">讚</a>
                  <a href="#" class="card-link">留言</a>
                </div>
              </div>
              <div class="card " style="max-height: full;">
                <img src="../../public/K2A000980N000000000PAA.png" class="card-img-top overflow-y-auto" alt="..." >
                <div class="card-body">
                  <h5 class="card-title">〈內人雙陸圖〉　卷</h5>
                  <p class="card-text">唐 周昉〈內人雙陸圖〉</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">周昉（活動於西元八世紀末），善畫道釋人物仕女。此圖繪有一雙陸桌，桌內有雙陸棋盤，本為胡人遊戲，玩法以異木為盤，盤中彼此內外個有六梁，故得名。 月牙凳為唐代新興家具，專為貴族婦女所坐，此凳為典型式樣。凳的四角及腿足都有精心雕飾。腿足外側是直角線，內部為曲線雕花腿，兩腿之間形成一個壺門輪廓。此凳座面為竹藤類的編織物，外型裝飾追求華麗正與唐代風尚相符合。</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">讚</a>
                  <a href="#" class="card-link">留言</a>
                </div>
              </div>
        </div>
        <div class="advertise max-h-[70vh] max-w-[250px] min-h-[200px]">
          <div class="max-h-[300px]">
            <img src="../../public/9.png" alt="" class="adimg max-h-[300px]">
            <label for="" class="adtext1">ad</label>
            <label for="" class="adtext2"><h3>4won設計公司</h3></label>
          </div>
          <div class="downAdBox">
            <label for="" class="adtext3">
              <MapPinIcon class="h-6 w-6 text-gray-500" />
              <h6>位置</h6>
              <h6>台中</h6></label>
              <label for="" class="adtext3">
                <ShieldCheckIcon class="h-6 w-6 text-gray-500" />
                <h6>經驗</h6>
                <h6>10年</h6></label>
                <label for="" class="adtext3">
                  <PencilSquareIcon class="h-6 w-6 text-gray-500" />
                  <h6>風格</h6>
                  <h6>和風、現代</h6></label>

          </div>
        </div>
    </div>
</template>

<script setup>
import {
  MapPinIcon,
  ShieldCheckIcon,
  PencilSquareIcon,

} from '@heroicons/vue/24/outline'
</script>

<style lang="scss" scoped>
.downAdBox{
  position: absolute;
  top: 75%;
  left: 2px;
  width: 100%;
  height: 25%;
}
.adtext1{
  position: absolute;
  top: 2px;
  right: 2px;
  z-index: 1;
  color: white;
}
.adtext2{
  position: absolute;
  top: 60%;
  left: 2px;
  z-index: 1;
  color: rgb(255, 255, 255);
}
.adtext3{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  z-index: 1;
  color: rgb(0, 0, 0);
  margin-bottom: 3%;
  h6{
    margin-left: 0%;
    margin-bottom: 0;
    width: 35%;
  }
}
.body{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
.postcontent{
    width: 45%;
    height: 100vw;
    border: 1px solid blanchedalmond;
}
.advertise{
  position: relative;
    margin-left: 8%;
    margin-right: 5%;
    width: 30%;
    height: 500px;
    border: 1px solid blanchedalmond;
}
.adimg{
  position: absolute;
  z-index: 0;
  width: 100%;
  overflow: hidden;
}
.card{
  margin-bottom: 10px;
}
</style>