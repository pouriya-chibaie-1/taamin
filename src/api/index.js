import axiosApi from "./axios";

export async function getData() {
  const res = await axiosApi.get("api/part/getpartlist3?groupcode=0");
  return res.data;
}
export async function getPartGroupList() {
  const res = await axiosApi.get("api/part/getpartgrouplist");
  return res.data;
}
export async function getProductFromPartGroup(id) {
  const res = await axiosApi.get(`api/part/getpartlist3?groupcode=${id}`);
  return res.data;
}
