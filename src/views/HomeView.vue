<template>
  <div class="container-fluid marqueeContainer">
    <div class="marquee running js-marquee d-sm-block">
      <div class="marquee-inner">
        <span
          >The Moment is forever. The Moment is forever. The Moment is forever.
        </span>
      </div>
    </div>
    <div class="container mb-5 px-0">
      <div class="row gx-0">
        <div class="col col-sm-3 col-lg-4 .d-none .d-sm-block">
          <div class="l-section-top .d-none .d-sm-block">
            <div class="c-scrolldown">
              <div class="Fade-line .d-none .d-sm-block"></div>
            </div>
            <div class="line-title .d-none .d-sm-block">
              把生命中的每一刻<br />在指針的轉動間化為永恆
            </div>
          </div>
        </div>
        <div
          class="col col-sm-9 col-lg-5 main-bg"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <swiper
            :slides-per-view="1"
            :space-between="1000"
            :pagination="pagination"
            :loop="true"
            :modules="modules"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: false,
            }"
          >
            <swiper-slide v-for="item in recommendLike" :key="item.id">
              <router-link :to="`/product/${item.id}`">
                <img :src="item.imagesUrl[2]" alt="item.title" />
              </router-link>
            </swiper-slide>
          </swiper>
        </div>
        <div class="col col-lg-3 .d-none .d-md-block"></div>
      </div>
    </div>
  </div>
  <div class="container mt-7 mb-7">
    <div class="row">
      <div
        class="col-12 col-lg-6 mb-lg-7 px-4 mb-3"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img class="img-fluid" src="@/assets/img/home-img.jpg" alt="牽手圖" />
      </div>
      <div
        class="col-12 col-lg-6 mb-lg-7 px-4 mb-7 ps-lg-5"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <small>CONCEPT</small>
        <h2 class="mt-3 mb-lg-7 mb-5">在乎您對時光的珍惜</h2>
        <p>世界上最快而又最慢、最長而又最短、最平凡而又最珍貴的就是時間！</p>
        <p>
          一刻時光屋，80年來，陪伴許多人走過人生重要階段，從縱情青春到執子之手，由成家立業到功成名就，每一個歡樂、悲傷、惆悵與得意的時刻！
        </p>
        <p class="mb-5">串起時光的過去、現在與未來，一刻時光屋始終在乎！</p>
        <router-link to="/about"
          ><div class="more-circle">more</div></router-link
        >
      </div>
      <div
        class="col-12 col-lg-6 mb-7 mb-lg-7 pe-lg-5 px-4 order-2 order-lg-1"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <small>Excellent Art</small>
        <h2 class="mt-3 mb-lg-7 mb-5">時光工匠的競技場</h2>
        <p>
          一刻時光屋引進全世界最頂級製錶工匠的精心之作，每隻手錶都是匠心獨具，各有巧思，戴上這些精心之作，您可以感受到職人工藝究極的熱情與理智！
        </p>
        <p>這就是製錶工匠之魂的競技場！</p>
        <p class="mb-5">何不來我們的網路商店欣賞名家手錶！</p>
        <router-link to="/products"
          ><div class="more-circle"><span>more</span></div></router-link
        >
      </div>
      <div
        class="col-12 col-lg-6 mb-lg-7 mb-3 px-4 order-1 order-lg-2"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img class="img-fluid" src="@/assets/img/home-img2.jpg" alt="錶面圖" />
      </div>
      <div
        class="col-12 col-lg-6 mb-lg-7 mb-3 px-4 order-3"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img class="img-fluid" src="@/assets/img/home-img3.jpg" alt="手錶圖" />
      </div>
      <div
        class="col-12 col-lg-6 mb-lg-7 mb-3 px-4 ps-lg-5 order-4"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <small>Delivery</small>
        <h2 class="mt-3 mb-lg-7 mb-5">時光不待人</h2>
        <p>
          不管是犒賞過去的辛勞、或是現在功成名就的戰利品，抑或是對未來的期許。
        </p>
        <p>一刻時光屋知道您等待到手的焦急心情！</p>
        <p class="mb-5">我們將在最短的時間內將您的禮物送達！</p>
        <router-link to="/faq"
          ><div class="more-circle"><span>more</span></div></router-link
        >
      </div>
    </div>
  </div>
  <div class="container mb-5">
    <div class="row">
      <div
        class="col"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div
          class="
            sea-festival
            d-flex
            align-items-center
            justify-content-center
            px-5
          "
        >
          <div style="color: #fff" class="text-center mt-7">
            <h2 class="campaign-title">
              夏日海洋節
            </h2>
            <p class="campaign-text">
              即將到來的夏日，何不戴著我們為您精心準備了的潛水錶，盡情享受海洋的浪潮！
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row mb-7" style="overflow-x: hidden">
      <div class="col-12 text-center mb-4">
        <h2 class="campaign-subtitle">精選潛水錶</h2>
      </div>
      <div>
        <swiper
          :breakpoints="{
            '480': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '640': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '768': {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            '992': {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            '1200': {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }"
          :loop = "true"
          :modules="modules"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide v-for="item in hotSale" :key="item.id">
            <router-link :to="`/product/${item.id}`">
              <div class="card h-100">
                <div class="card-body">
                  <img
                    :src="item.imageUrl"
                    class="card-img-top img-fluid"
                    :alt="item.title"
                    style="background-color: #ebedee"
                  />
                  <div class="mt-4 text-center">
                    <h6 class="card-subtitle text-info">
                      {{ item.description }}
                    </h6>
                    <div class="product-title">
                      <h5 class="card-title h4 font-monospace">
                        {{ item.title }}
                      </h5>
                    </div>
                    <div class="d-flex justify-content-evenly mx-3">
                      <div class="card-text">
                        NT$.{{ $filters.currency(item.price) }}
                      </div>
                      <div class="align-middle">
                        <del class="card-text h6 text-info"
                          >NT$.{{ $filters.currency(item.origin_price) }}</del
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer d-flex justify-content-between mb-3">
                  <router-link :to="`/product/${item.id}`" class="btn more-btn">
                    查看更多
                  </router-link>
                  <button
                    type="button"
                    class="btn add-btn"
                    @click.prevent="addToCart(item.id)"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
  <div class="home-foot">
    <div class="container">
      <div
        class="row d-flex justify-content-center align-items-center mail-box"
      >
        <div class="col-12 col-md-8 col-lg-5 text-center">
          <h3>訂閱一刻時光周報</h3>
          <Form
            ref="form"
            @submit="submitEmail"
            v-slot="{ errors }"
            class="input-group mb-3"
          >
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              rules="email|required"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              v-model="email"
            ></Field>
            <button
              type="submit"
              class="btn add-btn"
              @submit="submitEmail"
              :disabled="Object.keys(errors).length > 0"
            >
              訂閱
            </button>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'
import { Pagination, Autoplay } from 'swiper'
import AOS from 'aos'
import emitter from '../libs/emitter'
export default {
  data () {
    return {
      products: [],
      recommendLike: [],
      hotSale: [],
      modules: [Pagination, Autoplay],
      email: '',
      pagination: {
        clickable: true,
        type: 'bullets',
        renderBullet: function (index, className) {
          return `<span class=${className}><span class="number">${
            index + 1
          }</span><svg viewBox="0 0 60 60" class="circle-front">
               <circle cx="30" cy="30" r="15"/>
              </svg></span>`
        }
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    getData () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then((response) => {
        this.products = response.data.products
        this.recommendLike = this.products.filter(function (item) {
          if (item.recommend === 1) {
            return item
          }
        })
        this.hotSale = this.products.filter(function (item) {
          if (item.sale === 1) {
            return item
          }
        })
      })
    },
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .post(url, { data })
        .then((res) => {
          if (data.qty <= 0) {
            alert('數量必須大於0')
            return
          }
          this.showAlert({
            icon: 'success',
            title: `${res.data.message}`,
            showConfirmButton: false,
            timer: 1500
          })
          emitter.emit('get-cart')
        })
        .catch((err) => {
          this.showAlert({ icon: 'success', title: `${err.message}` })
        })
    },
    submitEmail () {
      this.email = ''
      this.$refs.form.resetForm()
      this.showAlert({ icon: 'success', title: '訂閱成功' })
    },
    showAlert (message) {
      this.$swal(message)
    }
  },
  mounted () {
    this.getData()
    window.scroll(0, 0)
    AOS.init()
  }
}
</script>

<style lang="scss">
@import "@/assets/stylesheets/helpers/swiper.scss";
@import "@/assets/stylesheets/helpers/pagination.scss";
@import "@/assets/stylesheets/helpers/swiper-vars.scss";
@import "@/assets/stylesheets/helpers/fadeline.scss";
@import "@/assets/stylesheets/helpers/marquee.scss";
</style>
