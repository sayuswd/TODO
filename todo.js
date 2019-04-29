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
    const htmlcode01 = '<div class="code01"><label><input type="checkbox" name="check1" /><span class="checkbox-icon"></span><p class="todo_text01"></p></label></div>';
    $("#todo_text").html(htmlcode01);
    $(".todo_text01").text(todoModel.todoLists[0]);
    //deletebuttonの実装01
    const deletebutton01 = '<div class="delete_button01"><input type="button" class="d_button01" value="Delete"/></div>';
    $(".deletebutton").html(deletebutton01);
  }
  if (todoModel.todoLists.length >= 2 && todoModel.todoLists.length === 2) {
    const htmlcode02 = '<div class="code02"><label><input type="checkbox" class="check2"/><span class="checkbox-icon"></span><p class="todo_text02"></p></label></div>';
    $("#todo_text").append(htmlcode02);
    $(".todo_text02").text(todoModel.todoLists[1]);
    //deletebuttonの実装02
    const deletebutton02 = '<div class="delete_button02"><input type="button" class="d_button02" value="Delete"/></div>';
    $(".deletebutton").append(deletebutton02);
  }
  if (todoModel.todoLists.length >= 3 && todoModel.todoLists.length === 3) {
    const htmlcode03 = '<div class="code03"><label><input type="checkbox" name="check3"/><span class="checkbox-icon"></span><p class="todo_text03"></p></label></div>';
    $("#todo_text").append(htmlcode03);
    $(".todo_text03").text(todoModel.todoLists[2]);
    //deletebuttonの実装０１
    const deletebutton03 = '<div class="delete_button03"><input type="button" class="d_button03" value="Delete"/></div>';
    $(".deletebutton").append(deletebutton03);
  }
}

//表示した文字を削除する　　View機能
function resetviewModel() {
  //deleteを押した時の表示機能
    if ('input[class="d_button01"]:checked') {
      $(".code01").empty();
      $(".delete_button01").empty();
    }else{
      return;
    }
    if ('input[class="d_button02"]:checked') {
      $(".code02").empty();
      $(".delete_button02").empty();
    }else{
      return;
    }
    if ('input[class="d_button02"]:checked') {
      $(".code03").empty();
      $(".delete_button03").empty();
    }else{
      return;
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

//Model部分のデータの削除
$('.deletebutton').on('click', ".d_button01", function () {
  //削除ボタンの作成 01
  if (!confirm('削除しますか？')) {
    return false;
  } else {
    todoModel.todoLists.splice(0, 1); //1番目から1つ削除
    resetviewModel();
    return;
  }
});
$('.deletebutton').on('click', ".d_button02", function () {
  //削除ボタンの作成 02
  if (!confirm('削除しますか？')) {
    return false;
  } else {
    todoModel.todoLists.splice(1, 1); //2番目から1つ削除
    resetviewModel();
    return;
  }
});
$('.deletebutton').on('click', ".d_button03", function () {
  //削除ボタンの作成 03
  if (!confirm('削除しますか？')) {
    return false;
  } else {
    todoModel.todoLists.splice(2, 1); //3番目から1つ削除
    resetviewModel();
    return;
  }
});




//文字が入力されたときに実行
$('#textinput').keyup(function () {

});