import store from '@/store'
import request from '@/utils/request'
import axios from 'axios'

/**
 * Get cloud function list
 * @param {*} query
 * @param {*} page
 * @param {*} pageSize
 */
export function getFunctions(query, page, pageSize) {
  const appid = store.state.app.appid
  return request({
    url: `/apps/${appid}/function`,
    method: 'get',
    params: {
      ...query,
      page,
      limit: pageSize
    }
  })
}

/**
 * Get a cloud function
 * @param {*} query
 * @param {*} page
 * @param {*} pageSize
 */
export function getFunctionById(func_id) {
  const appid = store.state.app.appid
  return request({
    url: `/apps/${appid}/function/${func_id}`,
    method: 'get'
  })
}

/**
 * Create a cloud function
 * @param {string} appid
 * @param {object} function_data
 * @returns
 */
export function createFunction(function_data) {
  const appid = store.state.app.appid
  return request({
    url: `/apps/${appid}/function/create`,
    method: 'post',
    data: function_data
  })
}

/**
 * Update the basic info of cloud function
 * @param {string} func_id
 * @param {object} function_data
 * @returns
 */
export function updateFunction(func_id, function_data) {
  const appid = store.state.app.appid
  return request({
    url: `/apps/${appid}/function/${func_id}/info`,
    method: 'post',
    data: function_data
  })
}

/**
 * Delete a cloud function
 * @param {*} func_id
 * @returns
 */
export function deleteFunction(func_id) {
  const appid = store.state.app.appid
  return request({
    url: `/apps/${appid}/function/${func_id}`,
    method: 'delete'
  })
}

/**
 * Publish functions
 */
export function publishFunctions() {
  const appid = store.state.app.appid
  return request({
    url: `/apps/${appid}/function/publish`,
    method: 'post'
  })
}

/**
 * Debug cloud function
 */
export async function launchFunction(functionName, data, debug = false) {
  const appid = store.state.app.appid
  const res = await axios({
    url: `/app-api/${appid}/func/invoke/${functionName}`,
    method: 'post',
    data: data,
    headers: {
      'debug-token': debug
    }
  })

  return res.data
}

/**
 * 加载依赖包的类型声明文件
 * @param {string} packageName
 * @returns
 */
export async function loadPackageTypings(packageName) {
  const appid = store.state.app.appid
  const res = await axios({
    url: `/app-api/${appid}/typing/package?packageName=${packageName}`,
    method: 'GET'
  })

  return res.data
}