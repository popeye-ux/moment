<template>
  <div
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="couponModal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="isNew">新增優惠卷</span>
            <span v-else>編輯優惠卷</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">標題</label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder=" 請輸入標題"
              v-model="tempCoupon.title"
            />
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <input
              type="text"
              class="form-control"
              id="coupon_code"
              placeholder="請輸入優惠碼"
              v-model="tempCoupon.code"
            />
          </div>
          <div class="mb-3">
            <label for="due_date">到期日</label>
            <input
              type="date"
              class="form-control"
              id="due_date"
              v-model="due_date"
            />
          </div>
          <div class="mb-3">
            <label for="price">折扣百分比</label>
            <input
              type="number"
              class="form-control"
              id="price"
              min="0"
              placeholder="請輸入折扣百分比"
              v-model.number="tempCoupon.percent"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                v-model="tempCoupon.is_enabled"
                id="is_enabled"
              />
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="updateCoupon(tempCoupon)"
          >
            {{ isNew ? "建立新優惠券" : "更新優惠券" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: {
    coupon: {
      type: Object,
      default () {
        return {}
      }
    },
    isNew: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tempCoupon: {},
      due_date: '',
      modal: ''
    }
  },
  emits: ['update-coupon'],
  mounted () {
    this.modal = new Modal(this.$refs.couponModal, {
      keyboard: false,
      backdrop: 'static'
    })
  },
  watch: {
    coupon () {
      this.tempCoupon = JSON.parse(JSON.stringify(this.coupon))
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
        .toISOString()
        .split('T');
      [this.due_date] = dateAndTime // 因為單向數據流的關係，所以要用深拷貝另外見一個物件來存資料
    },
    due_date () {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
    }
  },
  methods: {
    updateCoupon (tempCoupon) {
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'
      if (!tempCoupon.is_enabled) {
        tempCoupon.is_enabled = 0
      }
      let newCoupon = tempCoupon
      if (!this.isNew) {
        httpMethod = 'put'
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${tempCoupon.id}`
        newCoupon = this.tempCoupon
      }
      this.$http[httpMethod](url, { data: newCoupon })
        .then((res) => {
          this.$emit('update-coupon')
          if (this.isNew) {
            alert('新增優惠券')
          } else {
            alert('優惠券已更新')
          }
          this.hideModal()
        })
        .catch((err) => {
          alert(err)
        })
    },
    openModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  }
}
</script>
