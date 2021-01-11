/* eslint-disable */
import Mock from 'mockjs'
Mock.setup({timeout: 1000})

const getCustomerActivity = () => {
  return {}
}
Mock.mock(/\/activity\/getActivity/, `post`, getCustomerActivity)
// Mock.mock(/\/wechat\/jssdkSign.do/, `get`, wxConfig)
// Mock.mock(`${path}/system/login.serv`, `post`, login)