<template>
    <div class="container">
        <div class="row justify-content-center">
          <h1 class="mb-4 h4 fw-bolder">請先登入產品後台</h1>
          <div class="col-10">
            <Form class="form-login" @submit.prevent="login" v-slot="{ errors }">
              <div class="mb-4">
                <label for="usernameInput" class="form-label">Email address</label>
                <Field
                  type="email"
                  name="Email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['Email'] }"
                  rules="required"
                  id="usernameInput"
                  placeholder="name@example.com"
                  v-model="user.username"
                  required
                  autofocus
                ></Field>
                <error-message name="Email" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-4">
                <label for="passwordInput" class="form-label">Password</label>
                <Field
                  type="password"
                  class="form-control"
                  id="passwordInput"
                  name="Password"
                  placeholder="Password"
                  :class="{ 'is-invalid': errors['Password'] }"
                  v-model="user.password"
                  rules="required"
                  required
                ></Field>
                <error-message name="Password" class="invalid-feedback"></error-message>
              </div>
              <button
                class="btn btn-lg btn-primary w-100 mt-4"
                type="button"
                @click.prevent="login()"
              >
                登入
              </button>
            </Form>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.$http.post(api, this.user).then((res) => {
        const { token, expired } = res.data
        // console.log(res)
        // 寫入 cookie token
        // expires 設置有效時間
        document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`
        this.$router.push('/admin')
      }).catch((err) => {
        // console.dir(err.response.data.message)
        alert(err.response.data.message)
      })
    }

  }
}
</script>
<style lang="scss" scoped>
body{
  background: #fff;
}
</style>
