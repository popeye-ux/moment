<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <h2 class="text-center">這是後台產品列表</h2>
  <div class="container">
    <div class="text-end mt-4">
      <button type="button" class="btn btn-primary" @click="openModal('new')">
        建立新的產品
      </button>
    </div>
    <table class="table table-striped table-hover mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品圖片</th>
          <th>產品名稱</th>
          <th width="150" class="text-end px-5">原價</th>
          <th width="150" class="text-end px-5">售價</th>
          <th width="100">是否啟用</th>
          <th width="120" class="text-center">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td class="align-middle">{{ item.category }}</td>
          <td>
            <div
              class="admin-product-img"
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
            ></div>
          </td>
          <td class="align-middle">{{ item.title }}</td>
          <td class="text-end align-middle px-5">
            {{ $filters.currency(item.origin_price) }}
          </td>
          <td class="text-end align-middle px-5">
            {{ $filters.currency(item.price) }}
          </td>
          <td class="align-middle">
            <button
              type="button"
              class="btn btn-light btn-act"
              :class="item.is_enabled ? 'text-success' : 'text-danger'"
              @click="
                (item.is_enabled = !item.is_enabled),
                  updateProduct(item.id, item)
              "
            >
              {{ item.is_enabled ? "啟用" : "未啟用" }}
            </button>
          </td>
          <td class="align-middle text-center">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-success btn-sm"
                @click="openModal('edit', item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#delProductModal"
                @click="openModal('delete', item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :pages="pagination" @get-products="getData"></pagination>
  </div>
  <product-modal
    ref="productModal"
    :product="tempProduct"
    :is-new="isNew"
    @get-data="getData"
  ></product-modal>
  <del-product-modal
    ref="delProductModal"
    :temp-product="tempProduct"
    @update="getData"
  ></del-product-modal>
</template>

<script>
import DelProductModal from '@/components/DelProductModal.vue'
import ProductModal from '@/components/ProductModal.vue'
import pagination from '@/components/PaginationComp.vue'
export default {
  data () {
    return {
      products: [],
      tempProduct: {
        imagesUrl: []
      },
      isNew: false,
      pagination: {},
      isLoading: false
    }
  },
  mounted () {
    this.getData()
  },
  components: {
    ProductModal,
    DelProductModal,
    pagination
  },
  methods: {
    getData (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.$http
        .get(url)
        .then((response) => {
          const { products, pagination } = response.data
          this.products = products
          this.pagination = pagination
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    updateProduct (id, item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${id}`
      const http = 'put'
      this.$http[http](url, { data: item })
        .then((response) => {
          alert(response.data.message)
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    openModal (status, item) {
      if (status === 'new') {
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
        this.$refs.productModal.openModal()
      } else if (status === 'edit') {
        this.tempProduct = { ...item }
        this.isNew = false
        this.$refs.productModal.openModal()
      }
      if (status === 'delete') {
        this.tempProduct = { ...item }
        this.$refs.delProductModal.openModal()
      }
    }
  }
}
</script>
