<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        <div class="titleDiv">
          <img
            alt="Vue logo"
            src="@/assets/logo.png"
            id="vue-logo"
            class="logoImg"
          />
          <h1 class="titleText">ToDo</h1>
        </div>
        <div class="titleMenuDiv">
          <a-menu
            v-model="current"
            mode="horizontal"
            theme="dark"
            class="topNavMenu"
          >
            <a-menu-item key="app">
              <router-link to="/">
                <a-icon type="check" />
                ToDo App
              </router-link>
            </a-menu-item>
            <a-menu-item key="about">
              <router-link to="/about">
                <a-icon type="question" />
                About
              </router-link>
            </a-menu-item>
          </a-menu>
        </div>
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
      <a-layout-footer>
        2020 &copy; Abdullah Jalil
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ['app']
    };
  }
};
</script>

<style lang="less"></style>
