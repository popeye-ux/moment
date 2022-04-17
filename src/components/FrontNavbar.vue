<template>
  <nav class="navbar navbar-expand-lg navbar-light mt-3 sticky-top" id="nav">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand ms-lg-5">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1194 178"
          style="enable-background: new 0 0 1194 178"
          xml:space="preserve"
        >
          <path
            class="logo-black"
            d="M173.97,3.14v171.77h-32.9V87.97l-53.81,64.62L33.68,87.97v86.94H0.78V3.14H2.9l84.36,99.16l84.59-99.16H173.97z"
            shape-rendering="geometricPrecision"
          />
          <path
            class="logo-black"
            d="M627.28,3.14v171.77h-32.9V87.97l-53.81,64.62l-53.58-64.62v86.94h-32.9V3.14h2.11l84.36,99.16l84.59-99.16H627.28z"
            shape-rendering="geometricPrecision"
          />
          <path
            class="logo-black"
            d="M719.76,32.04v43h83.18v29.84h-83.18v40.42h93.76v29.61H686.86V2.9h126.66v29.14H719.76z"
            shape-rendering="geometricPrecision"
          />
          <path
            class="logo-black"
            d="M1015.04,174.91L902,72.69v102.22h-32.9V3.14h3.52L985.66,107V3.14h32.9v171.77H1015.04z"
            shape-rendering="geometricPrecision"
          />
          <path
            class="logo-black"
            d="M1194.22,32.04h-49.11v142.87h-32.9V32.04h-49.35V2.9h131.36V32.04z"
            shape-rendering="geometricPrecision"
          />
          <path
            class="logo-yellow"
            d="M314.23,0.5c-49.15,0-89,39.85-89,89c0,49.15,39.85,89,89,89s89-39.85,89-89C403.23,40.35,363.38,0.5,314.23,0.5z M314.23,152.5c-34.79,0-63-28.21-63-63s28.21-63,63-63s63,28.21,63,63S349.02,152.5,314.23,152.5z"
            shape-rendering="geometricPrecision"
          />
          <path
            class="logo-yellow"
            d="M309.08,89.3l-8.14,6.97c-0.79,0.68-0.88,1.86-0.21,2.65l2.11,2.46c0.68,0.79,1.86,0.88,2.65,0.21l8.55-7.32l7.4,7.4c0.73,0.73,1.9,0.73,2.63,0l2.32-2.32c0.73-0.73,0.73-1.9,0-2.63l-7.01-7.01l37.48-32.08c0.79-0.68,0.88-1.86,0.21-2.65l-2.11-2.46c-0.68-0.79-1.86-0.88-2.65-0.21l-37.89,32.44l-26.9-26.9c-0.73-0.73-1.9-0.73-2.63,0l-2.32,2.32c-0.73,0.73-0.73,1.9,0,2.63L309.08,89.3z"
            shape-rendering="geometricPrecision"
          />
        </svg>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavHam"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNav"
        ref="collapse"
      >
        <ul class="navbar-nav">
          <li class="nav-item me-5">
            <router-link
              to="/about"
              class="nav-link bottom-line effect-1"
              @click="closeNavHam"
              >About</router-link
            >
          </li>
          <li class="nav-item me-5">
            <router-link
              to="/products"
              class="nav-link bottom-line effect-1"
              @click="closeNavHam"
              >Webstore</router-link
            >
          </li>
          <li class="nav-item me-5">
            <router-link
              to="/faq"
              class="nav-link bottom-line effect-1"
              @click="closeNavHam"
              >FAQ</router-link
            >
          </li>
          <li class="nav-item me-5 pt-1">
            <router-link
              to="/cart"
              v-if="cartData.carts.length !== 0"
              class="position-relative"
              @click="closeNavHam"
              ><i class="bi bi-bag-fill align-middle"></i
              ><span
                class="
                  position-absolute
                  top-0
                  start-90
                  translate-middle
                  badge
                  rounded-pill
                  bg-danger
                "
                v-if="cartData.carts.length > 0"
                >{{ cartData.carts.length }}</span
              ></router-link
            >
            <a href="#" v-if="cartData.carts.length === 0">
              <div class="btn-group">
                <button
                  type="button"
                  class="border-0 bg-transparent"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-expanded="false"
                >
                  <i class="bi bi-bag-fill align-middle"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-end rounded-3">
                  <li> <p class="px-2 fw-normal text-center text-muted mb-0 pb-2">目前沒有商品喔</p></li>
                  <li class="d-flex justify-content-center">
                    <router-link
                      to="/products"
                      class="btn btn-primary btn-sm dropdownBtn rounded-3"
                      type="button"
                       @click="closeNavHam"
                    >
                      <p class="text-white mb-0">購物去</p>
                    </router-link>
                  </li>
                </ul>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
svg {
  width: 140px;
}
.logo-black {
  fill: #0e0e0e;
}
.logo-yellow {
  fill: #ffad2d;
}
</style>
<script>
import emitter from '@/libs/emitter'
import closeNavMixins from '@/mixins/closeNavMixins'

export default {
  data () {
    return {
      cartData: {
        carts: []
      },
      dropdown: ''
    }
  },
  mixins: [closeNavMixins],
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .get(url)
        .then((res) => {
          // 取得購物車
          this.cartData = res.data.data
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  mounted () {
    this.getCart()
    emitter.on('get-cart', () => {
      this.getCart()
    })
  }
}
</script>
