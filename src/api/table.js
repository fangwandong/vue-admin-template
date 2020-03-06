import request from '@/utils/request'

export function getList(params) {
  return request({
    url: 'http://localhost:9528/testAll',
    method: 'get',
    params
  })
}
