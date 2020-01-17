// 用户管理
export const state = () => ({
  // 接口返回数据结构
  userInfo: {
    token: "",
    user: {}
  }
});

//给state的数据赋值的方法，mutations第一个参数必须时state

export const mutations = {
  setUserInfo(state, data) {
    state.userInfo = data;
  }
};
