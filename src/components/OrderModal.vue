<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="orderModal"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單細節</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h3>用戶資料</h3>
              <table class="table">
                <tbody v-if="tempOrder.user">
                  <tr>
                    <td>
                      <label for="name" class="form-label">姓名</label>
                      <input
                        id="name"
                        type="text"
                        class="form-control"
                        v-model="tempOrder.user.name"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="email" class="form-label">Email</label>
                      <input
                        id="email"
                        type="email"
                        class="form-control"
                        v-model="tempOrder.user.email"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="tel" class="form-label">電話</label>
                      <input
                        id="tel"
                        type="tel"
                        class="form-control"
                        v-model="tempOrder.user.tel"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="address" class="form-label">地址</label>
                      <input
                        id="address"
                        type="text"
                        class="form-control"
                        v-model="tempOrder.user.address"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h3>訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ tempOrder.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ getDate(tempOrder.create_at) }}</td>
                  </tr>
                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="tempOrder.is_paid">
                        {{ paidOrder(tempOrder) }}
                      </span>
                      <span v-else>尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong v-if="tempOrder.is_paid" class="text-success"
                        >已付款</strong
                      >
                      <span v-else class="text-muted">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>{{ tempOrder.total }}</td>
                  </tr>
                </tbody>
              </table>
              <h3>選購商品</h3>
              <table class="table">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr v-for="item in tempOrder.products" :key="item.id">
                    <th>
                      {{ item.product.title }}
                    </th>
                    <td>{{ item.qty }} / {{ item.product.unit }}</td>
                    <td class="text-end"></td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-end">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    v-model="tempOrder.is_paid"
                    @click="paidOrder(tempOrder)"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    <span v-if="tempOrder.is_paid">已付款</span>
                    <span v-else>未付款</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
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
            class="btn btn-primary"
            @click="update"
          >
            修改付款狀態
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
    order: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      status: {},
      modal: '',
      tempOrder: this.order,
      isPaid: false,
      paid: {}
    }
  },
  emits: ['update-paid'],
  mounted () {
    this.modal = new Modal(this.$refs.orderModal, {
      keyboard: false,
      backdrop: 'static'
    })
  },
  watch: {
    order () {
      this.tempOrder = this.order
    }
  },
  methods: {
    paidOrder (tempOrder) {
      this.paid = {
        is_paid: tempOrder.is_paid
      }
      if (this.paid.is_paid === true) {
        this.paid.paid_day = Date.now()
        this.paid.paid_day = new Date(this.paid.paid_day)
        return this.paid.paid_day.toLocaleDateString()
      } else {
        this.paid.paid_day = ''
      }
    },
    update () {
      this.$emit('update-paid', this.tempOrder)
      this.modal.hide()
    },
    getDate (timestamp) {
      const date = new Date(timestamp * 1000)
      return date.toLocaleDateString()
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
