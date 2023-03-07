import rxAxios from "@silence_zhpf/rx_axios";
import { type Observable } from "rxjs";
import { pickData, toOption } from "antd-observable";
import { type Option } from "antd-observable/dist/antd-observable";

export function options(url: string): Observable<Option[]>;
export function options(url: string, field: string): Observable<Option[]>;
export function options(url: string, field: Option): Observable<Option[]>;
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
