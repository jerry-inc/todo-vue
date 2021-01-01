<template>
  <div class="about">
    <a-row type="flex" justify="center" align="top" class="contentRow">
      <a-col :xs="22" :md="22" class="contentCol">
        <!-- Logos Row -->
        <a-row type="flex" justify="center" align="top">
          <a-col :xs="4" :md="4">
            <img src="@/assets/logo.png" class="techIcons" />
          </a-col>
          <a-col :xs="4" :md="4">
            <img src="@/assets/ant.png" class="techIcons" />
          </a-col>
          <a-col :xs="4" :md="4">
            <img src="@/assets/firebase.png" class="techIcons" />
          </a-col>
        </a-row>
        <!-- Tech Titles Name Row -->
        <a-row type="flex" justify="center" align="top">
          <a-col :xs="12" :md="12">
            <div class="techText">
              <span class="boldText">VueJs &nbsp;</span>
              <span class="plus">&nbsp; + &nbsp;</span>
              <span class="boldText">&nbsp; Ant Design Vue &nbsp;</span>
              <span class="plus">&nbsp; + &nbsp;</span>
              <span class="boldText">&nbsp; Firebase Firestone Storage</span>
            </div>
          </a-col>
        </a-row>
        <!-- Features and plans Row -->
        <a-row type="flex" justify="center" align="top" :gutter="10">
          <a-col :xs="22" :md="5">
            <a-list size="small" :data-source="features">
              <a-list-item slot="renderItem" slot-scope="item">
                {{ item }}
              </a-list-item>
              <div slot="header">
                <span class="boldText">Features</span>
              </div>
            </a-list>
          </a-col>
          <a-col :xs="22" :md="5">
            <a-list size="small" :data-source="futurePlans">
              <a-list-item slot="renderItem" slot-scope="item">
                {{ item }}
              </a-list-item>
              <div slot="header">
                <span class="boldText">Plans</span>
              </div>
            </a-list>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      windowHeight: '',
      features: [
        'A simple Todo list App for practicing Vue with Ant Design',
        'Ant Design Components used: (layout, nav, input, button, list, pagination, notifications, popConfirm) ',
        'Vuex store is used to fetch data',
        'Firebase Firestone Storage is used to save Data',
        'Used Vue Router for Navigation',
        'Responsive Design'
      ],
      futurePlans: [
        'Saving data in database',
        'Date picker for adding new task'
      ]
    };
  }
};
</script>

<style scoped lang="less">
.techIcons {
  height: 150px;
}

@media screen and (max-width: 576px) {
  .techIcons {
    height: 60px;
  }
}

@media screen and (min-width: 578px) and (max-width: 768px) {
  .techIcons {
    height: 100px;
  }
}

.techText {
  text-align: center;
}

.boldText {
  font-weight: bold;
}
.plus {
  color: #ee0b0b;
}
</style>
