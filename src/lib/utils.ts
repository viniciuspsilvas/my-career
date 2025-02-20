import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function addCommasAndAnd(list: string[]) {
  if (list.length < 3) {
    return list.join(" and ");
  }

  return `${list.slice(0, -1).join(", ")}, and ${list[list.length - 1]}`;
}
