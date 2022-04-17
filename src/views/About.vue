<template>
<!-- <Loading :active="isLoading" :z-index="1060"></Loading> -->
  <div class="container-fluid mt-3 p-0">
    <div class="headPic d-flex align-items-center justify-content-center">
      <span class="head-title">About</span>
    </div>
  </div>
  <div class="container my-6">
    <div class="row p-5 mb-5 text-center mx-1 mx-lg-4">
      <h2 class="fw-bolder" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">時間是偉大的作者，它會給每個人寫出完美的結局</h2>
    </div>
    <div class="row row row-cols-1 row-cols-sm-2 g-5 mx-1 mx-lg-4">
      <div class="col mb-5" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <img class="img-fluid" src="@/assets/img/about1.jpg" alt="修錶師傅" />
      </div>
      <div class="col d-flex flex-column justify-content-center mb-6" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <p>
          時間是沒有時限的，但是對人類來說時間是有限的。<br />高爾基說過：時間是最公平合理的
          ，它從不多給誰一分。有限的生命，每一刻的美好都值得珍惜。
        </p>
        <p>
          這也是 Moment 一刻時光屋 創辦人 毛新一
          所秉持的理念，時間是可以讓世界變得更加的美好，何不為世界的美好而做一份努力呢？
        </p>
      </div>
      <div class="col d-flex flex-column justify-content-center mb-6 order-2 order-lg-1" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <p>
          一刻時光屋 日治時代 1938
          年從基隆田寮河畔一間小舖起家，創辦人毛新一師從日本工匠緋村劍心，學習修理鐘錶，太平洋
          戰爭開始後，師傅緋村劍心前往南洋服役，毛新一季成其在田寮河畔的店鋪做起鐘錶維修的
          生意，其間躲過基隆大空襲，直到二戰結束，金瓜石掏金客湧入，基隆商機蓬勃，一刻鐘錶
          行也在那時站穩腳步，奠定根基。
        </p>
      </div>
      <div class="col mb-5 order-1 order-lg-2" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <img class="img-fluid" src="@/assets/img/about2.jpg" alt="基隆老照片" />
      </div>
      <div class="col mb-5 order-3 order-lg-3" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <img class="img-fluid" src="@/assets/img/about3.jpg" alt="修錶師傅" />
      </div>
      <div class="col d-flex flex-column justify-content-center mb-6 order-4 order-lg-4" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <p>
          1960年代，台灣開始經濟起飛，一刻鐘錶行也開始引入國外高端機械錶，尤其是創辦人深感於瑞士製錶工藝的精湛，
          引入了多個品牌的瑞士機械錶，並拆解深研奇機械結構，為客戶進行維修保養與調校。許多顧客從南部到基隆的本店修費與維修。
        </p>
        <p>
          1970年代，一刻鐘錶行為服務廣大顧客，在台北大稻埕開了第一家分店，後來台中店與高雄店也陸續展店，迄今全台有21家分店。
        </p>
        <p>
          2006年，一刻時光屋 Moment
          網站成立，開始進行網路銷售與客戶服務，全世界的客戶都可以再往上購買手表與進行維修諮詢。一刻鐘錶行也秉持初心為客戶提供最真誠的服務。
        </p>
      </div>
    </div>
    <div class="row p-5 text-center">
      <h3 class="fw-bolder" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        珍惜為您服務的機會，一如您珍惜生命中每一個美好時刻
      </h3>
    </div>
  </div>
</template>
<script>
import AOS from 'aos'
export default {
  data () {
    return {
      isLoading: false
    }
  },
  mounted () {
    window.scroll(0, 0)
    AOS.init()
  }
}
</script>
