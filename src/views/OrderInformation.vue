<template>
<Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="container mt-7">
    <div class="row row-cols-3 row-cols-sm-3">
      <div class="col text-center">
        <div class="check-step check-step-finished d-flex flex-column justify-content-center">
          <i class="bi bi-check2-circle check-step-icon"></i>
          <span>STEP 1</span>
          <span>確認訂單</span>
        </div>
      </div>
      <div class="col text-center">
        <div class="check-step  d-flex flex-column justify-content-center">
          <i class="bi bi-dash-circle-dotted check-step-icon"></i>
          <span>STEP 2</span>
          <span>建立訂單</span>
        </div>
      </div>
      <div class="col text-center">
        <div class="check-step  d-flex flex-column justify-content-center">
          <i class="bi bi-dash-circle-dotted check-step-icon"></i>
          <span>STEP 3</span>
          <span>完成訂單</span>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-7">
    <div class="row">
      <div class="col-12 col-md-6 pe-md-5">
        <h3 class="mb-3 fw-bold">確認訂單內容</h3>
        <table class="table align-middle">
          <thead>
            <tr>
              <th class="order-table-100"></th>
              <th class="order-table-150">品名</th>
              <th class="text-center order-table-150">單價</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cartData.carts">
              <tr v-for="item in cartData.carts" :key="item.id">
                <td>
                  <div class="order-info-product-img"
              :style="{ backgroundImage: `url(${item.product.imageUrl})` }"
            ></div>
                </td>
                <td class="py-3">
                  {{ item.product.title }}<br>
                  <small>數量 {{ item.qty }} 隻</small>
                </td>
                <td class="text-center py-3">
                  {{ $filters.currency(item.product.price) }} 元
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-end">
                 總計 {{ $filters.currency(cartData.total) }} 元
              </td>
            </tr>
            <tr>
              <td colspan="4">
                <div class="input-group my-3 input-group-sm">
                  <input
                    type="text"
                    class="form-control"
                    v-model="coupon_code"
                    placeholder="請輸入優惠碼"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn add-btn"
                      type="button"
                      :disabled="isDiscount"
                      @click="addCouponCode"
                    >
                      套用優惠碼
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            <tr v-if="cartData.final_total !== cartData.total">
              <td colspan="4" class="text-end text-danger fw-bolder fs-4">
                優惠後總金額 {{ $filters.currency(cartData.final_total) }} 元
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="col-12 col-md-6 ps-md-5 justify-content-center">
        <h3 class="mb-3 fw-bold">填寫訂購資訊<span class="form-note"> (標註 * 為必填資訊)</span></h3>
        <Form ref="form" @submit="submitOrders" v-slot="{ errors }">
          <div class="mb-3">
            <label for="email" class="form-label">Email<span class="form-note">*</span></label>
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              rules="email|required"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              v-model="form.user.email"
            ></Field>
            <ErrorMessage
              name="email"
              class="invalid-feedback"
            ></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名<span class="form-note">*</span></label>
            <Field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            ></Field>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話<span class="form-note">*</span></label>
            <Field
              id="tel"
              name="電話"
              type="text"
              class="form-control"
              :rules="isPhone"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              v-model="form.user.tel"
            ></Field>
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">收件人地址<span class="form-note">*</span></label>
            <Field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
            ></Field>
            <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <div class="text-end">
            <button
              type="submit"
              class="btn btn-lg w-100 add-btn"
              @submit="submitOrders"
              :disabled="Object.keys(errors).length > 0"
            >
              送出訂單
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '../libs/emitter'
export default {
  data () {
    return {
      cartData: {},
      isLoadingItem: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      coupon_code: 'truelove2022',
      isDiscount: false,
      isLoading: false
    }
  },
  watch: {
    'cartData.total': function () {
      if (this.cartData.total === this.cartData.final_total) {
        this.isDiscount = false
      } else {
        this.isDiscount = true
        this.coupon_code = '已經輸入過優惠碼'
      }
    }
  },
  methods: {
    // validate
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .get(url)
        .then((res) => {
          this.cartData = res.data.data
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.message)
        })
    },
    submitOrders () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http
        .post(url, { data: order })
        .then((res) => {
          this.showAlert({
            icon: 'success',
            title: `${res.data.message}`,
            showConfirmButton: false,
            timer: 1500
          })
          this.isLoadingItem = ''
          this.getCart()
          this.$refs.form.resetForm()
          this.form.message = ''
          emitter.emit('get-cart')
          this.$router.push(`/checkout/${res.data.orderId}`)
        })
        .catch((err) => {
          alert(err.message)
        })
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.isLoading = true
      this.$http
        .post(url, { data: coupon })
        .then((res) => {
          this.getCart()
          this.showAlert({
            icon: 'success',
            title: `${res.data.message}`,
            showConfirmButton: false,
            timer: 1500
          })
          this.coupon_code = ''
          this.isDiscount = true
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
          this.showAlert({ icon: 'error', title: '您輸入無效的優惠碼！' })
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
