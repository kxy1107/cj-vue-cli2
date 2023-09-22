const appStore = {
  state: {
    pageWidth: 1120,
    pageHeight: 700,
    token: "",
    userInfo: {
      nickname: "",
      avatar: "",
    },
  },
  mutations: {
    setUserInfo: (state, userInfo) => {
      state.userInfo = userInfo;
    },
    setPageSize: (state, pageInfo) => {
      state.pageWidth = pageInfo.clientWidth;
      state.pageHeight = pageInfo.clientHeight;
    },
  },
};

export default appStore;
