const breakPointMixin = {
  data() {
    return {
      windowSize: {
        x: 0,
        y: 0,
      },
      drawer: false,
      group: null,
      maxWidth: 1024,
    };
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.windowSize = {
        x: window.innerWidth,
        y: window.innerHeight,
      };
    },
  },
  computed: {
    isMobile: function () {
      console.log(this.windowSize.x < this.maxWidth);
      return this.windowSize.x < this.maxWidth;
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};

export default breakPointMixin;
