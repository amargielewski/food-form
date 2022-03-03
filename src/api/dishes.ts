import { apiService } from "services";
import { Dish } from "types";

const requestUrl = "/dishe";

export type RequestData = Dish;

export const dishesPOST = (data: RequestData) =>
  apiService.post(requestUrl, data);
