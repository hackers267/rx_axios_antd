import {type Observable} from "rxjs";
import {type Option, pickData, toOption} from "antd-observable";
import rxAxios from "@silence_zhpf/rx_axios";

/**
 * 直接查询options,一般用于直接返回的data字段是一个字符串或数字数组
 * @public
 * @param url - 请求地址
 */
export function options(url: string): Observable<Option[]>;
/**
 * 把对象数组中的某个字段值同时映射为options中的value和label选项
 * @public
 * @param url - 请求地址
 * @param field - 同时作为value和label的字段名
 */
export function options(url: string, field: string): Observable<Option[]>;
/**
 * 把对象数组中的指定的两个字段值映射为options中的value和label选项
 * @public
 * @param url - 请求地址
 * @param field - 需要映射的value和label
 */
export function options(url: string, field: Option): Observable<Option[]>;
/**
 * 请求options
 * @public
 * @param url
 * @param config
 */
export function options(
  url: string,
  config?: string | Option
): Observable<Option[]> {
  if (config === undefined) {
    return rxAxios.post(url).pipe(pickData(), toOption());
  }
  if (typeof config === "string") {
    return rxAxios.post(url).pipe(pickData(), toOption(config));
  }
  return rxAxios.post(url).pipe(pickData(), toOption(config));
}
