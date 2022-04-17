<template>
 <Loading :active="isLoading" :z-index="1060"></Loading>
<div class="container">
  <h2 class="text-center">這是訂單管理</h2>
   <div class="text-end pt-5">
      <button
        class="btn btn-outline-danger"
        type="button"
        @click="removeAllOrders"
        :disabled="orderData.length === 0"
      >
        刪除全部訂單
      </button>
    </div>
    <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item in orderData" :key="item.id">
        <tr v-if="orderData.length" :class="{ 'text-secondary': !item.is_paid }">
          <td>{{ getDate (item.create_at) }}</td>
          <td><span>{{ item.user.email }}</span></td>
          <td>
            <table class="table">
              <tbody>
                <tr v-for="(orderItem, i) in item.products" :key="i">
                  <td width="100">{{ orderItem.product.title }}</td>
                  <td width="50">數量 {{ orderItem.qty }} {{ orderItem.product.unit }}</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td class="text-right">{{ $filters.currency(item.total) }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`${item.id}`"
                v-model="item.is_paid"
                @change="updateOrder(item)"
              />
              <label class="form-check-label" :for="`${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button" @click="openOrderModal(item)">
                檢視
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button" @click="openDelModal(item)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <pagination :pages="pagination" @get-products="getOrder"></pagination>
</div>
<order-modal ref="orderModal" :order="tempOrder" @update-paid="updateOrder"></order-modal>
<del-order-modal
    ref="delOrder"
    :temp-order="tempOrder"
    @update="getOrder"
  ></del-order-modal>
</template>
<script>
import pagination from '@/components/PaginationComp.vue'
import DelOrderModal from '@/components/DelOrderModal.vue'
import OrderModal from '@/components/OrderModal.vue'
export default {
  data () {
    return {
      orderData: {},
      pagination: {},
      isLoading: false,
      tempOrder: {}
      // page: 1
    }
  },
  components: {
    pagination,
    DelOrderModal,
    OrderModal
  },
  methods: {
    getOrder (page = 1) {
      // this.page = page
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.orderData = res.data.orders
          this.pagination = res.data.pagination
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    getDate (timestamp) {
      const date = new Date(timestamp * 1000)
      return date.toLocaleDateString()
    },
    updateOrder (item) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      if (!paid.is_paid === true) {
        paid.paid_day = Date.now()
      } else {
        paid.paid_day = ''
      }
      this.$http
        .put(url, { data: item })
        .then((res) => {
          this.getOrder(this.page)
          alert('訂單已更新')
          this.isLoading = false
        })
        .catch((err) => {
          alert(err)
        })
    },
    openOrderModal (item) {
      this.tempOrder = { ...item }
      this.$refs.orderModal.openModal()
    },
    openDelModal (item) {
      this.tempOrder = { ...item }
      this.$refs.delOrder.openModal()
    },
    removeAllOrders () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/all`
      this.$http
        .delete(url)
        .then((res) => {
          this.getOrder(this.page)
          alert('訂單' + res.message)
          this.isLoading = false
        })
        .catch((err) => {
          alert(err)
        })
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>
