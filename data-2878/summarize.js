function summarize(events) {
  const byCode = {};
  for (const e of events) {
    byCode[e.code] = (byCode[e.code] || 0) + 1;
  }
  return Object.entries(byCode).sort((a, b) => b[1] - a[1]);
}
module.exports = { summarize };
