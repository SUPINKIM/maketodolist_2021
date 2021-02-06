import { deleteTodoListLocal, deleteAllLocal, removeFinishID } from './storage';

const clearBnt = document.getElementById('clear');

function checkClear() {
  const todobox = document.querySelector('.todoBox');
  if (!todobox.hasChildNodes()) {
    clearBnt.disabled = true;
    deleteAllLocal();
  } else {
    clearBnt.disabled = false;
  }
}

function deleteTodoList(state) {
  deleteTodoListLocal(state.id);
  removeFinishID(state.id);
  const box = document.getElementById(`${state.id}`);
  box.remove();
  checkClear();
}

function deleteAll() {
  deleteAllLocal();
  const todobox = document.querySelector('.todoBox');
  while (todobox.hasChildNodes()) {
    todobox.removeChild(todobox.firstChild);
  }
}

export { checkClear, deleteTodoList, deleteAll };
