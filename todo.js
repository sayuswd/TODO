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

  //inputの値を調べる
  let inputaddvalue = todoModel.todoLists.length;
  //要素の数ループ
  for (let i = 0; i < inputaddvalue; i++) {
    //要素のテキストを格納
    //let codeform = todoModel.todoLists).eq(i);

    const htmlcode = '<div class="code"><label><input type="checkbox" name="check' + i + '" /><span class="checkbox-icon"></span><p class="todo_text' + i + '"></p></label></div>';
    let p_code = '.todo_text';
    p_code += i;

    $(".todo_section").append(htmlcode);
    $(p_code).text(todoModel.todoLists[i]);
    return;
  }
}



//表示した文字を削除する　　View機能
function resetviewModel() {
  //deleteを押した時の表示機能
  if ('input[class="d_button01"]:checked') {
    $(".code01").empty();
    $(".delete_button01").empty();
  } else {
    return;
  }
  if ('input[class="d_button02"]:checked') {
    $(".code02").empty();
    $(".delete_button02").empty();
  } else {
    return;
  }
  if ('input[class="d_button02"]:checked') {
    $(".code03").empty();
    $(".delete_button03").empty();
  } else {
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
$('.todo_section').on('click', ".d_button01", function () {
  //削除ボタンの作成 01
  if (!confirm('削除しますか？')) {
    return false;
  } else {
    todoModel.todoLists.splice(0, 1); //1番目から1つ削除
    resetviewModel();
    return;
  }
});
$('.todo_section').on('click', ".d_button02", function () {
  //削除ボタンの作成 02
  if (!confirm('削除しますか？')) {
    return false;
  } else {
    todoModel.todoLists.splice(1, 1); //2番目から1つ削除
    resetviewModel();
    return;
  }
});
$('.todo_section').on('click', ".d_button03", function () {
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