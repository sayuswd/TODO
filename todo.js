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

  $(".todo_text01").text(todoModel.todoLists[0]);
  $(".todo_text02").text(todoModel.todoLists[1]);
  $(".todo_text03").text(todoModel.todoLists[2]);

}

//登録ボタンが押されたら追加
$('.addbutton').click(function () {
  //入力した文字を取得
  let input_value = $('#textinput').val();

  //もし、入力されていたら表示
  if (input_value != "") {

    //Modelにinputされたデータを準備する
    todoModel.todoLists.push(input_value);

    viewModel();


  } else {
    return;
  }

});

//文字が入力されたときに実行
$('#textinput').keyup(function () {

});