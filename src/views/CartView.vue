<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="container-fluid mt-3 p-0">
    <div class="headPic-cart d-flex align-items-center justify-content-center">
      <span class="head-title">Cart</span>
    </div>
  </div>
  <div class="container mb-7">
    <div class="text-end pt-5">
      <button
        class="btn btn-outline-danger"
        type="button"
        :disabled="cartData.carts.length === 0"
        @click="cleanAllCart"
      >
        清空購物車
      </button>
    </div>
    <div class="table-responsive">
      <table class="table align-middle mt-3 cart-table">
        <thead>
          <tr>
            <th class="text-start cart-name">產品名稱</th>
            <th class="text-center cart-num">數量</th>
            <th class="text-end cart-del">刪除</th>
          </tr>
        </thead>
        <tbody>
          <!-- 判斷購物車資料有沒有存在 -->
          <template v-if="cartData.carts.length">
            <tr v-for="item in cartData.carts" :key="item.id">
              <!-- 商品圖 -->
              <!-- 商品名稱 -->
              <td class="text-start">
                <div class="d-flex-column d-sm-flex justify-content-start align-items-center cart-name-pict">
                  <div
                    class="d-sm-block cart-product-img"
                    :style="{
                      backgroundImage: `url(${item.product.imageUrl})`,
                    }"
                  ></div>
                  <b>{{ item.product.title }}</b>
                </div>
              </td>
              <td class="text-center">
                <small>單價 {{ $filters.currency(item.product.price) }}元</small
                ><br />
                <b>合計 {{ $filters.currency(item.total) }}元</b>
                <div class="input-group input-group-sm text-center d-flex-row mt-2">
                  <div class="input-group mb-3">
                    <select
                      name=""
                      id=""
                      class="form-select cart-select"
                      v-model="item.qty"
                      @change="updateCartItem(item)"
                      :disabled="isLoadingItem === item.id"
                      width="100px"
                    >
                      <option
                        :value="num"
                        v-for="num in 20"
                        :key="`${num}${item.id}`"
                      >
                        {{ num }}
                      </option>
                    </select>
                  </div>
                </div>
              </td>
              <td class="text-end cart-end">
                <button
                  type="button"
                  class="btn text-danger fs-4"
                  @click="removeCartItem(item.id)"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="6" class="text-end text-danger fw-bolder pt-3">
              <h3 class="fw-bolder">
                總價 {{ $filters.currency(cartData.total) }}元
              </h3>
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="d-flex justify-content-between">
      <router-link to="/products" class="btn more-btn btn-lg mt-3 fw-bolder"
        >繼續選購</router-link
      >
      <router-link
        to="/orderinform"
        class="btn add-btn btn-lg mt-3 fw-bolder"
        :class="{ disabled: cartData.carts.length === 0 }"
        >下一步</router-link
      >
    </div>
  </div>
</template>
<script>
import emitter from '../libs/emitter'
export default {
  data () {
    return {
      cartData: {
        carts: []
      },
      isLoadingItem: '',
      isLoading: false,
      originPriceTotal: 0
    }
  },
  methods: {
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then((res) => {
        this.cartData = res.data.data
        const cartItems = this.cartData.carts
        const amount = cartItems.reduce(function (acc, item) {
          return acc + parseInt(item.product.origin_price) * parseInt(item.qty)
        }, 0)
        this.originalPriceTotal = amount
        this.isLoading = false
      })
    },
    removeCartItem (id) {
      this.isLoadingItem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.isLoadingItem = ''
      this.$http
        .delete(url)
        .then((res) => {
          this.showAlert({
            icon: 'success',
            title: `${res.data.message}`,
            showConfirmButton: false,
            timer: 1500
          })
          emitter.emit('get-cart')
          this.getCart()
        })
        .catch((err) => {
          this.showAlert({ icon: 'error', title: `${err.message}` })
        })
    },
    updateCartItem (item) {
      const data = {
        product_id: item.id,
        qty: item.qty
      }
      this.isLoadingItem = item.id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.$http
        .put(url, { data })
        .then((res) => {
          this.getCart()
          emitter.emit('get-cart')
          this.showAlert({
            icon: 'success',
            title: `${res.data.message}`,
            showConfirmButton: false,
            timer: 1500
          })
          this.isLoadingItem = ''
        })
        .catch((err) => {
          this.showAlert({ icon: 'error', title: `${err.message}` })
          this.isLoadingItem = ''
        })
    },
    cleanAllCart () {
      this.$swal({
        icon: 'question',
        title: '確認刪除購物車?',
        showConfirmButton: true,
        showCancelButton: true
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.isLoading = true
          const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
          this.$http
            .delete(url)
            .then((res) => {
              this.getCart()
              emitter.emit('get-cart')
              this.isLoading = false
            })
            .catch((err) => {
              alert(err.data.message)
            })
        }
      })
    },
    showAlert (message) {
      this.$swal(message)
    }
  },
  mounted () {
    this.getCart()
    window.scroll(0, 0)
  }
}
</script>
