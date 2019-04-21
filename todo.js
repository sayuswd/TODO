//データを取得する　Model機能
class Model {
  constructor() {
    this.todoLists = [];
  }
}
let todoModel = new Model();

//文字を表示する　　View機能
function viewModel(todo_text) {
  //HTMLに表示する機能
  let inputDate = todo_text;

  $(inputDate).text(todoModel.todoLists[0]);

}

//登録ボタンが押されたら追加
$('.addbutton').click(function () {
  //入力した文字を取得
  let input_value = $('#textinput').val();

  //もし、入力されていたら表示
  if (input_value != "") {

    //Modelにinputされたデータを準備する
    todoModel.todoLists.push(input_value);

    viewModel(".todo_text01");


  } else {
    return;
  }

});

//文字が入力されたときに実行
$('#textinput').keyup(function () {

});