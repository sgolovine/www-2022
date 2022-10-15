import dayjs from "dayjs"

export const formatDate = (date: string): string => {
  return dayjs(date).format("MMM DD YYYY")
}

export const formatListItemDate = (date: string): string => {
  if (dayjs().isAfter(dayjs(date), "year")) {
    return dayjs(date).format("MMM D, YYYY")
  }
  return dayjs(date).format("MMM D")
}
