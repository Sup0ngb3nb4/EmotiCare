import moment from "moment";

export const convertToLongDateFormat = (value) => {
  if (value) {
    return moment(value, ["YYYY-MM-DD"]).format("DD MMMM, YYYY");
  }
  return value;
};

export const convertToShortDateFormat = (value) => {
  if (value) {
    return moment(value, ["YYYY-MM-DD"]).format("DD-MM-YYYY");
  }
  return value;
};

export const convertToShortDateFormatReverse = (value) => {
  if (value) {
    return moment(value, ["DD-MM-YYYY"]).format("YYYY-MM-DD");
  }
  return value;
};

export const convertToDayDateFormat = (value) => {
  if (value) {
    return moment(value, ["YYYY-MM-DD"]).format("ddd, DD MMM, YYYY");
  }
  return value;
};
export const convertToDBDateFormat = (value) => {
  if (value) {
    return moment(value).format("YYYY-MM-DD");
  }
  return value;
};

export const convertToTimeFormat = (value) => {
  if (value) {
    return moment(value).format("HH:mm");
  }
  return value;
};
