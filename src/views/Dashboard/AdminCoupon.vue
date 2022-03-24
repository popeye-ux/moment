<template>
<Loading :active="isLoading" :z-index="1060"></Loading>
  <h2 class="text-center">這是優惠卷管理</h2>
  <div class="container">
    <div class="text-end mt-4">
      <button
        class="btn btn-primary"
        type="button"
        @click="openCouponModal(true)"
      >
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ getDate(item.due_date) }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`${item.id}`"
                v-model="item.is_enabled"
                :true-value="1"
                :false-value="0"
                @change="updateEnable(item)"
              />
              <label class="form-check-label" :for="`${item.id}`">
                <span v-if="item.is_enabled === 1">啟用</span>
                <span v-else>未啟用</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openCouponModal(false, item)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openDelModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <coupon-modal
      :coupon="tempCoupon"
      :is-new="isNew"
      ref="couponModal"
      @update-coupon="getCoupons"
    ></coupon-modal>
    <del-coupon-modal
      ref="delCoupon"
      :temp-coupon="tempCoupon"
      @update="getCoupons"
    ></del-coupon-modal>
  </div>
</template>
<script>
import couponModal from '@/components/CouponModal.vue'
import delCouponModal from '@/components/DelCoupon.vue'
export default {
  data () {
    return {
      coupons: [],
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      isLoading: false,
      isNew: false
    }
  },
  components: {
    couponModal,
    delCouponModal
  },
  methods: {
    getDate (timestamp) {
      const date = new Date(timestamp * 1000)
      return date.toLocaleDateString()
    },
    getCoupons () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.$http
        .get(url)
        .then((res) => {
          console.log(res)
          this.coupons = res.data.coupons
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    updateEnable (item) {
      console.log(item)
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
      this.$http
        .put(url, { data: item })
        .then((res) => {
          console.log(res)
          alert('優惠券已更新')
          this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false
          console.log(err)
        })
    },
    updateCoupon (tempCoupon) {
      this.isLoading = true
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'
      let data = tempCoupon
      if (!this.isNew) {
        httpMethod = 'put'
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${tempCoupon.id}`
        data = this.tempCoupon
      }
      this.$http[httpMethod](url, { data })
        .then((res) => {
          console.log(res)
          this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false
          console.log(err)
        })
    },
    openCouponModal (isNew, item) {
      this.isNew = isNew
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
      } else {
        this.tempCoupon = { ...item }
      }
      this.$refs.couponModal.openModal()
    },
    openDelModal (item) {
      this.tempCoupon = { ...item }
      this.$refs.delCoupon.openModal()
    }
  },
  mounted () {
    this.getCoupons()
  }
}
</script>
