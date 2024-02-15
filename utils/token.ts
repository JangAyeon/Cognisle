import { getCookie, removeCookie, setCookie } from "@/utils/cookie"

export const getRefreshToken = () => {
  return getCookie("refreshToken")
}

export const setRefreshToken = (token: string, options?: object) => {
  return setCookie("refreshToken", token, options)
}

export const removeRefreshToken = (options?: object) => {
  return removeCookie("refreshToken", options)
}
