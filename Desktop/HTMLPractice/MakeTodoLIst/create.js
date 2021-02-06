import {
  saveTodoList,
  getTodoList,
  saveFinishID,
  removeFinishID,
} from './storage';
import { checkClear } from './remove';

const todoBox = document.querySelector('.todoBox');
let finishID = [];

function makeTodoList(state) {
  if (state.id > localStorage.key(localStorage.length - 1)) {
    saveTodoList(state);
  }
  const list = getTodoList(state.id);

  if (list !== null) {
    const todobox = document.createElement('div');
    todobox.id = state.id;
    if (getTodoList('finish') && getTodoList('finish').includes(state.id)) {
      todobox.classList.add('finish');
    }
    const todo = document.createElement('span');
    const doneBnt = document.createElement('button');
    const delBnt = document.createElement('button');
    const now = `<span id="stampTime">${
      JSON.parse(localStorage.getItem(`${state.id}`)).time
    }</span>`;
    todo.innerText = JSON.parse(localStorage.getItem(`${state.id}`)).text;
    doneBnt.innerText = '✔︎';
    doneBnt.id = 'done';
    delBnt.innerText = '❌';
    delBnt.id = 'remove';
    todobox.append(todo);
    todobox.innerHTML += now;
    todobox.prepend(doneBnt);
    todobox.append(delBnt);
    todoBox.prepend(todobox);
  }
  checkClear();
}

function doneTodoList(state) {
  let temp = [];
  for (let i = 0, len = localStorage.length; i < len; ++i) {
    temp.push(localStorage.key(i));
  }
  finishID = finishID.filter((element) => temp.includes(element));
  const findListBox = document.getElementById(`${state.id}`);
  if (findListBox.classList.contains('finish')) {
    findListBox.classList.remove('finish');
    finishID = finishID.filter((finish) => finish !== state.id);
    removeFinishID(state.id);
  } else {
    findListBox.classList.add('finish');
    finishID.push(state.id);
    saveFinishID(finishID);
  }
}

export { makeTodoList, doneTodoList };
