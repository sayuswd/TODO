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

  if (todoModel.todoLists.length >= 1 && todoModel.todoLists.length === 1) {
    const htmlcode01 = '<label><input type="checkbox" name="check1" /><span class="checkbox-icon"></span><p class="todo_text01"></p></label>';
    $("#todo_text").html(htmlcode01);
    $(".todo_text01").text(todoModel.todoLists[0]);
    //deletebuttonの実装01
    const deletebutton01 = '<input type="button" class="d_button01" value="Delete"/>';
    $(".deletebutton").html(deletebutton01);
  }
  if (todoModel.todoLists.length >= 2 && todoModel.todoLists.length === 2) {
    const htmlcode02 = '<label><input type="checkbox" class="check2"/><span class="checkbox-icon"></span><p class="todo_text02"></p></label>';
    $("#todo_text").append(htmlcode02);
    $(".todo_text02").text(todoModel.todoLists[1]);
    //deletebuttonの実装02
    const deletebutton02 = '<input type="button" class="d_button02" value="Delete"/>';
    $(".deletebutton").append(deletebutton02);
  }
  if (todoModel.todoLists.length >= 3 && todoModel.todoLists.length === 3) {
    const htmlcode03 = '<label><input type="checkbox" name="check3"/><span class="checkbox-icon"></span><p class="todo_text03"></p></label>';
    $("#todo_text").append(htmlcode03);
    $(".todo_text03").text(todoModel.todoLists[2]);
    //deletebuttonの実装０１
    const deletebutton03 = '<input type="button" class="d_button03" value="Delete"/>';
    $(".deletebutton").append(deletebutton03);
  }
}

//登録ボタンが押されたら追加
$('.addbutton').click(function () {
  //入力した文字を取得
  let input_value = $('#textinput').val();

  //もし、入力されていたら表示
  if (todoModel.todoLists.length === 0 && input_value !== "") {

    //Modelにinputされたデータを格納する
    todoModel.todoLists.push(input_value);
    viewModel();
    return;
  }


  if (todoModel.todoLists.length === 1) {
    //Modelにinputされたデータを格納する
    todoModel.todoLists.push(input_value);
    viewModel();
    return;
  }

  if (todoModel.todoLists.length === 2) {
    //Modelにinputされたデータを格納する
    todoModel.todoLists.push(input_value);
    viewModel();
    return;
  }

});

//削除ボタンの作成

  $(document).on('click',".d_button01",function () {
    if (!confirm('削除しますか？')) {
      return false;
    } else {
      todoModel.todoLists.splice(0,1); //1番目から1つ削除
      viewModel();
      return;
    }
  });





//文字が入力されたときに実行
$('#textinput').keyup(function () {

});