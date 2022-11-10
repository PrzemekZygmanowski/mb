const getDataMixin = {
  data() {
    return {
      loading: false,
      error: false,
      response: null,
      backendUrl: process.env.VUE_APP_BACKEND_URL,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    async fetchData() {
      this.error = false;
      this.loading = true;
      let url;
      try {
        url = new URL(this.backendUrl + this.urlSuffix);
        url.searchParams.append("populate", "deep");
      } catch (error) {
        console.error("There was an error!", error);
        return;
      }
      if (url) {
        const res = await fetch(url);
        if (!res.ok) {
          this.loading = false;
          this.error = true;
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        this.response = await res.json();
        if (this.response) this.loading = false;
      }
    },
  },
};

export default getDataMixin;
