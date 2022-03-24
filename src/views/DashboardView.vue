<template>
  <AdminNav></AdminNav>
  <router-view v-if="checkLoginSuccess"></router-view>
</template>
<script>
import AdminNav from '@/components/AdminNav.vue'
export default {
  components: {
    AdminNav
  },
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
      // this.url要加上，不然沒有cookie的時候，不會導向登入頁面
      const url = `${process.env.VUE_APP_API}api/user/check`
      this.$http
        .post(url)
        .then((res) => {
          // console.log(res.data);
          this.checkLoginSuccess = true
        })
        .catch((err) => {
          console.log(err)
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
