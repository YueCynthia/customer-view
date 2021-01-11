import request from '@/utils/request'

// 客户访问获取活动信息
export const getCustomerActivity = (params) => {
  return request({
    url: '/activity/getActivity',
    method: 'post',
    params
  })
}
