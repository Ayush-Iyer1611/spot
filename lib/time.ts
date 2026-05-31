export function formatIST(
  date: Date
) {
  return new Intl.DateTimeFormat(
    "en-IN",
    {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    }
  ).format(date);
}

export function getISTTime() {
  return new Date().toLocaleString(
    "en-IN",
    {
      timeZone: "Asia/Kolkata",
    }
  );
}