import dayjs from "dayjs";

export const formatDate = (
  date: string | number,
  format = "YYYY/MM/DD"
): string => {
  const day = new Date(Number(date) * 1000);
  const strDate = dayjs().format(format);
  return strDate;
};
