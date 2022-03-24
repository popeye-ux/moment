<template>
  <div class="container mt-7">
    <div class="row row-cols-3 row-cols-sm-3">
      <div class="col text-center">
        <div
          class="
            check-step check-step-finished
            d-flex
            flex-column
            justify-content-center
          "
        >
          <i class="bi bi-check2-circle check-step-icon"></i>
          <span>STEP 1</span>
          <span>確認訂單</span>
        </div>
      </div>
      <div class="col text-center">
        <div
          class="
            check-step check-step-finished
            d-flex
            flex-column
            justify-content-center
          "
        >
          <i class="bi bi-check2-circle check-step-icon"></i>
          <span>STEP 2</span>
          <span>建立訂單</span>
        </div>
      </div>
      <div class="col text-center">
        <div class="check-step d-flex flex-column justify-content-center"
        :class="{'check-step-finished':order.is_paid}"
        >
          <i class="bi bi-dash-circle-dotted check-step-icon" v-if="!order.is_paid"></i>
          <i class="bi bi-check2-circle check-step-icon" v-else></i>
          <span>STEP 3</span>
          <span>完成訂單</span>
        </div>
      </div>
    </div>
    <div class="row text-center mt-7" v-if="order.is_paid">
        <h2 class="fw-bolder">訂單已完成付款，謝謝您的訂購！</h2>
    </div>
  </div>
  <div class="container my-7">
    <div class="row row-cols-1 row-cols-sm-2">
      <div class="col">
        <h3 class="fw-bold">訂購商品</h3>
        <table class="table">
          <thead>
            <tr>
              <th style="width: 100px"></th>
              <th></th>
              <th class="text-end" style="width: 150px"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td>
                <div
                  style="
                    height: 100px;
                    background-size: cover;
                    background-position: center center;
                  "
                  :style="{ backgroundImage: `url(${item.product.imageUrl})` }"
                ></div>
              </td>
              <td class="align-middle">
                {{ item.product.title }}<br />
                <small>數量:{{ item.qty }}</small>
              </td>
              <td class="ps-3 align-middle text-end">
                {{ $filters.currency(item.product.price) }} 元
              </td>
            </tr>
          </tbody>
          <tfoot>
              <tr>
                  <td colspan="3" class="text-end"><h4 class="text-danger">總金額 {{$filters.currency(order.total)}} 元</h4> </td>
              </tr>
          </tfoot>
        </table>
      </div>
      <div class="col">
          <h3 class="fw-bold">訂單資訊<span class="fw-normal fs-5 text-danger">({{order.is_paid ? '已付款':'未付款'}})</span></h3>
        <table class="table">
          <thead>
            <tr>
              <th style="width: 150px"></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="align-middle">訂單金額</td>
              <td>
                <h2 class="text-danger align-middle">
                  {{ $filters.currency(order.total) }} 元
                </h2>
              </td>
            </tr>
            <tr>
              <td>訂單編號</td>
              <td>{{ order.id }}</td>
            </tr>
            <tr>
              <td>訂單日期</td>
              <td>{{ getDate(order.create_at) }}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>{{ user.email }}</td>
            </tr>
            <tr>
              <td>收件人姓名</td>
              <td>{{ user.name }}</td>
            </tr>
            <tr>
              <td>收件人電話</td>
              <td>{{ user.tel }}</td>
            </tr>
            <tr>
              <td>收件地址</td>
              <td>{{ user.address }}</td>
            </tr>
            <tr>
              <td>備註</td>
              <td>
                <p class="col" v-if="order.message">{{ order.message }}</p>
                <p class="col" v-else>無</p>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" class="btn add-btn w-100 py-3 mt-2"
          v-if="!order.is_paid"
          @click="payOrder">信用卡付款</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      order: {},
      user: {},
      products: {},
      is_paid: false
    }
  },
  watch: {
    is_paid () {
      console.log(this.is_paid)
      this.is_paid = this.order.is_paid
    }
  },
  methods: {
    getOrder () {
      const { id } = this.$route.params
      console.log(id)
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${id}`
      this.$http.get(url).then((res) => {
        console.log(res)
        this.order = res.data.order
        this.user = res.data.order.user
        this.products = res.data.order.products
        console.log(this.products)
        console.log(this.order)
      })
    },
    getDate (timestamp) {
      const date = new Date(timestamp * 1000)
      return date.toLocaleDateString()
    },
    payOrder () {
      const { id } = this.$route.params
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${id}`
      this.$http.post(url)
        .then(res => {
          // console.log(res)
          this.showAlert({ icon: 'success', title: `${res.data.message}` })
          this.getOrder()
        })
    },
    showAlert (message) {
      // Use sweetalert2
      this.$swal(message)
    }
  },
  mounted () {
    this.getOrder()
    window.scroll(0, 0)
  }
}
</script>
