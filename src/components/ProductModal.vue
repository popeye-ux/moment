<template>
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div
          :class="isNew ? 'bg-primary' : 'bg-success'"
          class="modal-header text-white"
        >
          <h5 id="productModalLabel" class="modal-title text-center">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
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
            <div class="col-sm-8">
              <div class="form-floating mb-3">
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="tempProduct.title"
                />
                <label for="title" class="form-label">標題</label>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <div class="form-floating">
                    <input
                      id="category"
                      type="text"
                      class="form-control"
                      placeholder="請輸入分類"
                      v-model="tempProduct.category"
                    />
                    <label for="category" class="form-label">分類</label>
                  </div>
                </div>
                <div class="mb-3 col-md-6">
                  <div class="form-floating">
                    <input
                      id="unit"
                      type="text"
                      class="form-control"
                      placeholder="請輸入單位"
                      v-model="tempProduct.unit"
                    />
                    <label for="unit" class="form-label">單位</label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <div class="form-floating">
                    <input
                      id="origin_price"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入原價"
                      v-model="tempProduct.origin_price"
                    />
                    <label for="origin_price" class="form-label">原價</label>
                  </div>
                </div>
                <div class="mb-3 col-md-6">
                  <div class="form-floating">
                    <input
                      id="price"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入售價"
                      v-model="tempProduct.price"
                    />
                    <label for="price" class="form-label">售價</label>
                  </div>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="mb-3 col-md-6">
                  <div class="form-floating">
                    <input
                      id="movement"
                      type="text"
                      class="form-control"
                      placeholder="請輸入機心規格"
                      v-model="tempProduct.movement"
                    />
                    <label for="movement" class="form-label">動力</label>
                  </div>
                </div>
                <div class="mb-3 col-md-6">
                  <div class="form-floating">
                    <input
                      id="size"
                      type="text"
                      class="form-control"
                      placeholder="請輸入錶面直徑"
                      v-model="tempProduct.size"
                    />
                    <label for="size" class="form-label">錶面直徑</label>
                  </div>
                </div>
                <div class="mb-3 col-md-6">
                  <div class="form-floating">
                    <input
                      id="water"
                      type="text"
                      class="form-control"
                      placeholder="請輸入售價"
                      v-model="tempProduct.water"
                    />
                    <label for="water" class="form-label">防水</label>
                  </div>
                </div>
                <div class="mb-3 col-md-6">
                  <div class="form-floating">
                    <input
                      id="functions"
                      type="text"
                      class="form-control"
                      placeholder="請輸入功能"
                      v-model="tempProduct.functions"
                    />
                    <label for="functions" class="form-label">功能</label>
                  </div>
                </div>
              </div>
              <hr />
              <div class="mb-3">
                <div class="form-floating">
                  <textarea
                    id="description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品描述"
                    v-model="tempProduct.description"
                  ></textarea>
                  <label for="description" class="form-label">產品描述</label>
                </div>
              </div>
              <div class="mb-3">
                <div class="form-floating">
                  <textarea
                    id="content"
                    type="text"
                    class="form-control"
                    placeholder="請輸入說明內容"
                    v-model="tempProduct.content"
                  ></textarea>
                  <label for="content" class="form-label">說明內容</label>
                </div>
              </div>
              <div class="mb-3">
                <div class="form-floating">
                  <textarea
                    id="story1"
                    type="text"
                    class="form-control"
                    placeholder="請輸入故事"
                    v-model="tempProduct.story1"
                  ></textarea>
                  <label for="story21" class="form-label">故事</label>
                </div>
              </div>
              <div class="mb-3">
                <div class="form-floating">
                  <textarea
                    id="others"
                    type="text"
                    class="form-control"
                    placeholder="請輸入其他內容"
                    v-model="tempProduct.others"
                  ></textarea>
                  <label for="others" class="form-label">其他</label>
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="tempProduct.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="recommend"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="tempProduct.recommend"
                  />
                  <label class="form-check-label" for="recommend"
                    >推薦商品</label
                  >
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="sale"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="tempProduct.sale"
                  />
                  <label class="form-check-label" for="sale">行銷活動</label>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="uploadImg" class="form-label">新增主圖</label>
                <input
                  type="file"
                  class="form-control mb-3"
                  id="uploadImg"
                  ref="pathClear"
                  @change="upload('main', $event)"
                /><img class="img-fluid" :src="tempProduct.imageUrl" />
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm d-block w-100"
                  v-if="tempProduct.imageUrl"
                  @click="tempProduct.imageUrl = ''"
                >
                  刪除檔案
                </button>
              </div>
              <div class="mb-3">
                <div v-if="Array.isArray(tempProduct.imagesUrl)">
                  <label for="uploadImgs" class="form-label">多圖設置</label>
                  <input
                    v-if="
                      !tempProduct.imagesUrl.length ||
                      tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                    "
                    type="file"
                    class="form-control mb-3"
                    id="uploadImgs"
                    ref="pathesClear"
                    @change="upload('sub', $event)"
                  />
                  <template
                    v-for="(img, index) in tempProduct.imagesUrl"
                    :key="index"
                  >
                    <img
                      class="img-fluid"
                      :src="tempProduct.imagesUrl[index]"
                    />
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm d-block w-100 mb-3"
                      @click="tempProduct.imagesUrl.splice(index, 1)"
                    >
                      刪除檔案
                    </button>
                  </template>
                </div>
                <div v-else>
                  <label for="uploadImgs" class="form-label">多圖設置</label>
                  <input
                    type="file"
                    class="form-control"
                    id="uploadImgs"
                    placeholder="請輸入圖片網址b"
                    @change="upload('sub', $event)"
                  />
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
          <button type="button" class="btn btn-primary" @click="updateProduct">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: ['product', 'isNew'],
  emits: ['get-data'],
  data () {
    return {
      modal: '',
      tempProduct: {}
    }
  },
  watch: {
    product () {
      this.tempProduct = JSON.parse(JSON.stringify(this.product))
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.productModal, {
      keyboard: false,
      backdrop: 'static'
    })
  },
  methods: {
    updateProduct () {
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let http = 'post'
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
        http = 'put'
      }
      this.$http[http](url, { data: this.tempProduct })
        .then((response) => {
          alert(response.data.message)
          this.$emit('get-data')
          this.modal.hide()
        })
        .catch((err) => {
          alert(err.message)
        })
    },
    openModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    },
    upload (isMain, event) {
      const file = event.target.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', file)
      this.$http
        .post(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`,
          formData
        )
        .then((res) => {
          console.log(res.data.imageUrl)
          if (isMain === 'main') {
            this.tempProduct.imageUrl = res.data.imageUrl
            this.$refs.pathClear.value = ''
          } else if (
            isMain === 'sub' &&
            !Array.isArray(this.tempProduct.imagesUrl)
          ) {
            this.tempProduct.imagesUrl = []
            this.tempProduct.imagesUrl.push(res.data.imageUrl)
            this.$refs.pathesClear.value = ''
          } else if (
            isMain === 'sub' &&
            Array.isArray(this.tempProduct.imagesUrl)
          ) {
            this.tempProduct.imagesUrl.push(res.data.imageUrl)
            this.$refs.pathesClear.value = ''
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
