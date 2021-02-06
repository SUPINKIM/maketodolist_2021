function getTime() {
  let time = '';
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let AmOrPm = hours >= 12 ? 'pm' : 'am';

  hours = hours % 12 || 12;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  time = hours + ':' + minutes + AmOrPm;
  return time;
}

function saveTodoList(state) {
  let now = getTime();
  localStorage.setItem(
    `${state.id}`,
    JSON.stringify({ text: state.item, time: now })
  );
}

function saveFinishID(arr) {
  if (localStorage.getItem('finish') !== null) {
    arr = Array.from(
      new Set([...arr, ...localStorage.getItem('finish').split(',')])
    );
    localStorage.removeItem('finish');
  }
  localStorage.setItem('finish', arr);
}

function removeFinishID(id) {
  if (localStorage.getItem('finish') !== null) {
    let arr = localStorage.getItem('finish').split(',');
    arr = arr.filter((finish) => finish !== id);
    localStorage.removeItem('finish');
    localStorage.setItem('finish', arr);
  }
}

function getTodoList(id) {
  return localStorage.getItem(`${id}`);
}

function deleteTodoListLocal(id) {
  localStorage.removeItem(`${id}`);
}

function deleteAllLocal() {
  localStorage.clear();
}

export {
  saveTodoList,
  getTodoList,
  deleteTodoListLocal,
  deleteAllLocal,
  saveFinishID,
  removeFinishID,
};
