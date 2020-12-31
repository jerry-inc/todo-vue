<template>
  <div class="home" :style="homeDivStyle">
    <a-row type="flex" justify="center" align="top" class="contentRow">
      <a-col :span="18" class="contentCol">
        <to-do />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import ToDo from '@/components/ToDo.vue';

export default {
  name: 'Home',
  data() {
    return {
      windowHeight: ''
    };
  },
  components: {
    ToDo
  },
  computed: {
    homeDivStyle: function() {
      return 'height: ' + (this.windowHeight - 64 - 69) + 'px';
    }
  },
  methods: {
    setPageHeight() {
      this.windowHeight = JSON.parse(JSON.stringify(window.innerHeight));
    }
  },
  mounted() {
    window.addEventListener('resize', this.setPageHeight);
    this.setPageHeight();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setPageHeight);
  }
};
</script>
