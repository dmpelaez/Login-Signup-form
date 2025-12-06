export let dates = JSON.parse(localStorage.getItem('save')) || [];

export function saveStorage() {
  localStorage.setItem('save', JSON.stringify(dates));
}

export function date(formatDates) {
  dates.push({
    formatDates: formatDates,
  });
};

