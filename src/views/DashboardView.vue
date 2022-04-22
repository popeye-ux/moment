<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">MOMENT 管理後台</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item me-4">
            <router-link to="/" class="nav-link">回到前台</router-link>
          </li>
          <li class="nav-item me-4">
            <router-link to="/admin/products" class="nav-link">產品管理</router-link>
          </li>
          <li class="nav-item me-4">
            <router-link to="/admin/orders" class="nav-link">訂單管理</router-link>
          </li>
          <li class="nav-item me-4">
            <router-link to="/admin/coupon" class="nav-link">優惠券管理</router-link>
          </li>
          <li class="nav-item me-4">
            <router-link to="/admin/article" class="nav-link">文章管理</router-link>
          </li>
          <li class="nav-item me-4">
            <a href="#" @click.prevent="signOut" class="nav-link">登出管理介面</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view v-if="checkLoginSuccess"></router-view>
</template>

<script>
export default {
  data () {
    return {
      checkLoginSuccess: false
    }
  },
  mounted () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    this.$http.defaults.headers.common.Authorization = token
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      const url = `${process.env.VUE_APP_API}api/user/check`
      this.$http
        .post(url)
        .then(() => {
          this.checkLoginSuccess = true
        })
        .catch((err) => {
          alert(err)
          this.$router.push('/login')
        })
    },
    signOut () {
      document.cookie = 'hexToken=;expires=;'
      alert('token 已清除')
      this.$router.push('/login')
    }
  }

}
</script>

<style lang="scss" scoped>
body{
  background: #fff;
}
</style>
