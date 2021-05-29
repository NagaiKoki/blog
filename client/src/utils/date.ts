import dayjs from "dayjs";

export const formatDate = (
  date: string | number,
  format = "YYYY/MM/DD"
): string => {
  const strDate = dayjs(date).format(format);
  return strDate;
};
