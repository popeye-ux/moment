<template>
<Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="container custom-container-width mt-7 mb-7 p-0">
    <div class="row mx-4">
      <div class="col-sm-6"  data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="1500">
        <img
          class="img-fluid"
          :src="productDetail.imageUrl"
          :alt="productDetail.title"
          style="background-color: #ebedee"
        />
      </div>
      <div class="col-sm-6" data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1500">
        <p class="mb-1 mt-2 mt-sm-0">{{ productDetail.description }}</p>
        <p class="h2 pb-1 fw-bolder">{{ productDetail.title }}</p>
        <hr class="mb-5 mt-1" />
        <p>{{ productDetail.content }}</p>
        <div
          class="h5"
          v-if="productDetail.price === productDetail.origin_price"
        >
          {{ productDetail.price }} 元
        </div>
        <div v-else class="mt-6">
          <del class="h6"
            >原價 {{ $filters.currency(productDetail.origin_price) }} 元</del
          >
          <div class="h3 mb-4 fw-bolder">
            {{ $filters.currency(productDetail.price) }} 元
          </div>
        </div>
        <div>
          <div class="input-group">
            <input
              type="number"
              class="form-control"
              min="1"
              v-model.number="qty"
            />
            <button
              type="button"
              class="btn add-btn"
              @click="addToCart(productDetail.id)"
              :disabled="isLoadingItem === productDetail.id"
            >
              <span
                class="spinner-border spinner-border-sm"
                v-show="isLoadingItem === productDetail.id"
              ></span
              >加入購物車
            </button>
          </div>
        </div>
        <div class="mt-4">
          <router-link
            to="/cart"
            class="btn  btn-sm"
            ><i class="bi bi-bag-fill me-1"></i>檢視購物車</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <div class="container custom-container-width mb-5">
    <div class="row mb-5 mx-4">
      <div class="col-sm-6 d-flex flex-column justify-content-center mb-6"  data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <p class="lh-lg">{{ productDetail.story1 }}</p>
      </div>
      <div class="col-sm-6 mb-6" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <img
          class="img-fluid"
          :src="productDetail.imagesUrl[0]"
          :alt="productDetail.title"
        />
      </div>
      <div class="col-sm-6"  data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <img
          class="img-fluid"
          :src="productDetail.imagesUrl[1]"
          :alt="productDetail.title"
        />
      </div>
      <div class="col-sm-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <p class="lh-lg">{{ productDetail.others }}</p>
      </div>
    </div>
    <hr  data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500"/>
    <div class="row mt-2 align-items-start gy-5 mx-4" >
      <div class="col-sm-4" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <h3 class="fw-bolder">產品規格</h3>
      </div>
      <div class="col-sm-8">
        <div class="row">
          <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
            <span class="fw-bolder"
              ><i class="bi bi-gear-fill me-1"></i>動力：</span
            >{{ productDetail.movement }}
          </div>
          <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
            <span class="fw-bolder"
              ><i class="bi bi-watch me-1"></i>錶面直徑：</span
            >{{ productDetail.size }}
          </div>
          <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
            <span class="fw-bolder"
              ><i class="bi bi-droplet-fill me-1"></i>防水：</span
            >{{ productDetail.water }}
          </div>
          <div class="col mb-4" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
            <span class="fw-bolder"
              ><i class="bi bi-motherboard-fill me-1"></i>功能：</span
            >{{ productDetail.functions }}
          </div>
        </div>
      </div>
      <div class="col-sm-4" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <h3 class="fw-bolder">購物須知</h3>
      </div>
      <div class="col-sm-8" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <p>
          您下單後我們會立即確認訂單，並且安排出貨，預計 3~5
          天內收到您訂購的商品。 凡是購買 MOMENT 全系列錶款，在 3
          年保固期間都可以拿到我們服務據點免費維修，超過保固期間也能享有維修折扣。
        </p>
      </div>
      <div class="col-sm-4" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <h3 class="fw-bolder">退換貨說明</h3>
      </div>
      <div class="col-sm-8" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <p>
          在 MOMENT 官網購物，享有商品到貨日起 10
          天猶豫期，猶豫期內，可無條件退費。猶豫期並非試用期，
          所以，您所退回的商品必須是包裝完整、保存良好的狀態。
        </p>
      </div>
    </div>
    <hr data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500" />
  </div>
  <div class="container custom-container-width mt-3 mb-7">
    <div class="row mx-4">
      <div class="col-md-12" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500"><h3 class="fw-bolder">推薦商品</h3></div>
      <div class="col-md-3 mb-5" v-for="select in recommendLike" :key="select.id" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
        <div class="card-body">
          <img
            :src="select.imageUrl"
            class="card-img-top img-fluid product-item-img"
            :alt="select.title"
          />
          <div class="mt-4 text-center">
            <h6 class="card-subtitle text-info">{{ select.description }}</h6>
            <div class="product-title">
              <h5 class="card-title h4 font-monospace">{{ select.title }}</h5>
            </div>
            <div class="d-flex justify-content-evenly mx-3">
              <div class="card-text">
                NT$.{{ $filters.currency(select.price) }}
              </div>
              <div class="align-middle">
                <del class="card-text h6 text-info"
                  >NT$.{{ $filters.currency(select.origin_price) }}</del
                >
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-between">
          <router-link :to="`/product/${select.id}`" class="btn more-btn">
            查看更多
          </router-link>
          <button
            type="button"
            class="btn btn-primary add-btn"
            @click="addToCart(select.id)"
            :disabled="isLoadingItem === select.id"
          >
            <span
              class="spinner-border spinner-border-sm"
              v-show="isLoadingItem === select.id"
            ></span
            >加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '../libs/emitter'
import AOS from 'aos'
export default {
  data () {
    return {
      productDetail: {
        imagesUrl: []
      },
      qty: 1,
      isLoadingItem: '',
      products: [],
      recommendLike: [],
      isLoading: false
    }
  },
  watch: {
    $route () {
      window.scroll(0, 0)
      this.getProduct()
    }
  },
  methods: {
    getData () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then((response) => {
        this.products = response.data.products
        const currentId = this.productDetail.id
        this.recommendLike = this.products.filter(function (item) {
          if (item.id !== currentId && item.recommend === 1) {
            return item
          }
        })
        this.isLoading = false
      })
    },
    getProduct () {
      this.isLoading = true
      const { id } = this.$route.params
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http.get(url).then((response) => {
        this.productDetail = response.data.product
        this.getData()
        this.isLoading = false
      })
    },
    addToCart (id, qty = 1) {
      qty = this.qty
      const data = {
        product_id: id,
        qty
      }
      if (this.qty <= 0) {
        this.showAlert({ icon: 'error', title: '數量必須大於0' })
        return
      }
      this.isLoadingItem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .post(url, { data })
        .then((res) => {
          this.isLoadingItem = ''
          this.showAlert({ icon: 'success', title: `${res.data.message}` })
          emitter.emit('get-cart')
        })
        .catch((err) => {
          this.showAlert({ icon: 'error', title: `${err.message}` })
          this.isLoadingItem = ''
        })
    },
    showAlert (message) {
      this.$swal(message)
    }
  },
  mounted () {
    this.getProduct()
    window.scroll(0, 0)
    AOS.init()
  }
}
</script>
