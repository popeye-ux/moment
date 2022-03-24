<template>
  <div
    id="delCoupon"
    ref="delCoupon"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delCouponLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delCouponLabel" class="modal-title">
            <span>刪除優惠券</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempCoupon.title }}</strong>
          訂單(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
            @click="delOrder"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: ['tempCoupon'],
  data () {
    return {
      modal: ''
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.delCoupon, {
      keyboard: false,
      backdrop: 'static'
    })
  },
  methods: {
    delOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.$http.delete(url)
        .then(res => {
          console.log(res)
          this.$emit('update')
          this.hideModal()
          alert('優惠券已刪除')
          // this.delOrder.hide();
          // this.getProducts();
        })
        .catch(err => {
          console.dir(err)
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
