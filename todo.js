//データを取得する　Model機能
class Model {
  constructor() {
    this.todoLists = [];
  }
}
let todoModel = new Model();


//文字を表示する　　View機能
function viewModel() {
  //HTMLに表示する機能

  if (todoModel.todoLists.length > 0) {
    const htmlcode01 = '<label><input type="checkbox"/><span class="checkbox-icon"></span><p class="todo_text01"></p></label>';
    $("#todo_text").html(htmlcode01);
    $(".todo_text01").text(todoModel.todoLists[0]);
  }
  if (todoModel.todoLists.length > 1) {
    const htmlcode02 = '<label><input type="checkbox"/><span class="checkbox-icon"></span><p class="todo_text02"></p></label>';
    $("#todo_text").append(htmlcode02);
    $(".todo_text02").text(todoModel.todoLists[1]);
  }
  if (todoModel.todoLists.length > 2) {
    const htmlcode03 = '<label><input type="checkbox"/><span class="checkbox-icon"></span><p class="todo_text03"></p></label>';
    $("#todo_text").append(htmlcode03);
    $(".todo_text03").text(todoModel.todoLists[2]);
  }
}

//登録ボタンが押されたら追加
$('.addbutton').click(function () {
  //入力した文字を取得
  let input_value = $('#textinput').val();

  //もし、入力されていたら表示
  if (todoModel.todoLists.length == 0) {

    //Modelにinputされたデータを格納する
    todoModel.todoLists.push(input_value);
    viewModel();
  }

  if (todoModel.todoLists.length >1 && todoModel.todoLists.length == 1) {
    //Modelにinputされたデータを格納する
    todoModel.todoLists.push(input_value);
    viewModel();
  }

  if (todoModel.todoLists.length >2 && todoModel.todoLists.length == 2) {
    //Modelにinputされたデータを格納する
    todoModel.todoLists.push(input_value);
    viewModel();
  }

});

//削除ボタンの作成

$(function () {

  $('.deletebutton').click(function () {

    todoModel.todoLists.pop();
    viewModel();

  });
  
});



//文字が入力されたときに実行
$('#textinput').keyup(function () {

});