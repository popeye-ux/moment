<template>
<Loading :active="isLoading" :z-index="1060"></Loading>
 <div class="container-fluid mt-3 p-0">
    <div class="headPic-webstore headPic-all d-flex align-items-center justify-content-center">
      <span class="head-title">Webstore</span>
    </div>
  </div>
  <div class="container wrapper mt-7">
    <div class="row row-cols-1 row-cols-sm-2  row-cols-lg-4 mx-1 mx-lg-4">
      <div class="col mb-6" v-for="item in products" :key="item.id" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
     <router-link :to="`/product/${item.id}`">
        <div class="card h-100">
          <div class="card-body">
            <img
              :src="item.imageUrl"
              class="card-img-top img-fluid"
              :alt="item.title"
              style="background-color:#ebedee"
            />
            <div class="mt-4 text-center">
              <h6 class="card-subtitle text-info">{{ item.description }}</h6>
              <div class="product-title"><h5 class="card-title h4 font-monospace">{{ item.title }}</h5></div>
              <div class="d-flex justify-content-evenly mx-3">
                <div class="card-text">NT$.{{ $filters.currency(item.price) }}</div>
                <div class="align-middle"><del class="card-text h6 text-info">NT$.{{ $filters.currency(item.origin_price) }}</del></div>
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
              :disabled="isLoadingItem === item.id"
            >
              <span
                class="spinner-border spinner-border-sm fill"
                v-show="isLoadingItem === item.id"
              ></span
              >加入購物車
            </button>
          </div>
        </div>
        </router-link>
      </div>
    </div>
  </div>
  <div class="container mt-3 mb-7">
    <div class="row">
      <pagination :pages="pagination" @get-products="getData"></pagination>
    </div>
  </div>
</template>

<script>
import emitter from '../libs/emitter'
import pagination from '@/components/PaginationComp.vue'
import AOS from 'aos'
export default {
  data () {
    return {
      products: [],
      isLoadingItem: '',
      pagination,
      isLoading: false
    }
  },
  components: {
    pagination
  },
  methods: {
    getData (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.$http.get(url).then((response) => {
        const { products, pagination } = response.data
        this.products = products
        this.pagination = pagination
        this.isLoading = false
      })
    },
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      this.isLoadingItem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .post(url, { data })
        .then((res) => {
          if (data.qty <= 0) {
            alert('數量必須大於0')
            return
          }
          this.isLoadingItem = ''
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
          this.isLoadingItem = ''
        })
    },
    showAlert (message) {
      this.$swal(message)
      AOS.init()
    }
  },
  mounted () {
    this.getData()
    window.scroll(0, 0)
    AOS.init()
  }
}
</script>
