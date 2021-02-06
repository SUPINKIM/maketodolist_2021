import { createStore } from 'redux';
import { makeTodoList, doneTodoList } from './create';
import { checkClear, deleteTodoList, deleteAll } from './remove';

//DOM 레퍼런스 작성
const main = document.querySelector('.glass'),
  todoForm = document.getElementById('inputForm'),
  input = todoForm.querySelector('input'),
  inputBnt = todoForm.querySelector('button'),
  todoBox = document.querySelector('.todoBox'),
  clear = document.getElementById('clear');

function showLocalStorage() {
  let order = [];
  if (localStorage.length !== 0) {
    for (let i = 0, len = localStorage.length; i < len; ++i) {
      order.push(localStorage.key(i));
    }
    order = order.filter((ids) => ids !== 'finish');
    order.sort((a, b) => a - b);
    order.forEach((element) => store.dispatch(ShowTodoList(element)));
  }
}

//액션 정의
const showTodoList = 'showTodoList';
const addTodoList = 'addTodoList';
const removeTodoList = 'removeTodoList';
const finishTodoList = 'finishTodoList';
const removeAll = 'removeAll';

//액션 함수 정의
const ShowTodoList = (listID) => ({ type: showTodoList, listID });
const AddList = (listitem) => ({ type: addTodoList, listitem });
const RemoveList = (listID) => ({ type: removeTodoList, listID });
const DoneList = (listID) => ({ type: finishTodoList, listID });
const RemoveAll = () => ({ type: removeAll });

//초기값 설정
const initialState = {
  id: 0,
  item: '',
  add: false,
  remove: false,
  done: false,
  all: false,
  lastkey: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case showTodoList:
      return {
        ...state,
        id: action.listID,
        item: JSON.parse(localStorage.getItem(`${action.listID}`)).text,
        add: true,
        remove: false,
        done: false,
        all: false,
        lastkey: action.listID,
      };
    case addTodoList:
      return {
        ...state,
        id: parseInt(state.lastkey) + 1,
        item: action.listitem,
        add: true,
        remove: false,
        done: false,
        all: false,
        lastkey: parseInt(state.lastkey) + 1,
      };
    case removeTodoList:
      return {
        ...state,
        id: action.listID,
        add: false,
        remove: true,
        done: false,
        all: false,
        lastkey: state.lastkey,
      };
    case finishTodoList:
      return {
        ...state,
        id: action.listID,
        add: false,
        remove: false,
        done: true,
        all: false,
        lastkey: state.lastkey,
      };
    case removeAll:
      return {
        ...state,
        add: false,
        remove: false,
        done: false,
        all: true,
        lastkey: 0,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const render = () => {
  const state = store.getState();
  //makeTodoList(state);
  const { add, remove, done, all } = state;
  if (add) {
    makeTodoList(state);
  } else if (remove) {
    deleteTodoList(state);
  } else if (done) {
    doneTodoList(state);
  } else if (all) {
    deleteAll();
  } else {
  }
};

render();
store.subscribe(render);

todoForm.addEventListener(
  'submit',
  (e) => {
    e.preventDefault();
    const currentValue = input.value;
    store.dispatch(AddList(currentValue));
    input.value = '';
  },
  false
);

todoBox.addEventListener(
  'click',
  (e) => {
    if (e.target.id === 'remove') {
      const currentDeleteBnt = e.target.parentNode.id;
      store.dispatch(RemoveList(currentDeleteBnt));
    } else if (e.target.id === 'done') {
      const currentDeleteBnt = e.target.parentNode.id;
      store.dispatch(DoneList(currentDeleteBnt));
    }
  },
  false
);

clear.addEventListener('click', (e) => {
  const background = document.createElement('div');
  background.id = 'confirm_bg';
  const confirm = document.createElement('div');
  confirm.id = 'confirm';
  confirm.innerHTML +=
    '<div>작성하신 ToDo 리스트를 정말 다 지우시겠어요? <br>맞다면 확인을, 아니라면 취소를 눌러주세요.</div>';
  confirm.innerHTML += '<button id="cancle">취소</button>';
  confirm.innerHTML += '<button id="ok">확인</button>';
  main.append(confirm);
  main.append(background);
  const cancle = document.getElementById('cancle');
  const ok = document.getElementById('ok');
  cancle.addEventListener(
    'click',
    (e) => {
      confirm.remove();
      background.remove();
    },
    false
  );
  ok.addEventListener(
    'click',
    (e) => {
      store.dispatch(RemoveAll());
      confirm.remove();
      background.remove();
      checkClear();
    },
    false
  );
});

showLocalStorage();
checkClear();
