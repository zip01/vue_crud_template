import request from '@/plugin/axios'

export function List (data) {
  return request({
    url: '/admin/bankcard/list',
    method: 'POST',
    data
  })
}

export function Add (data) {
  return request({
    url: '/admin/bankcard/save',
    method: 'POST',
    data
  })
}

export function Update (data) {
  return request({
    url: '/admin/bankcard/update',
    method: 'POST',
    data
  })
}

export function Delete (data) {
  return request({
    url: '/admin/bankcard/delete',
    method: 'POST',
    data
  })
}

export function GetByShopIdAndBankcardNo (data) {
    return request({
        url: '/admin/bankcard/getByShopIdAndBankcardNo',
        method: 'POST',
        data
    })
}
