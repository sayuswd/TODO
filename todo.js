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

  $(".todo_section").html("");

  for (let i = 0; i < inputaddvalue; i++) {
    //要素のテキストを格納

    if (todoModel.todoLists[i] != "") {
    //値が入っているclassを量産しないための調整

      let p_code = 'todo_text';
      let p_codeplas = 'todo_text';
      p_codeplas = '#' + p_code + i;
      p_code += i;


      const htmlcode = '<div class="code"><label><input type="checkbox" name="check' + i + '" /><span class="checkbox-icon"></span><p id="' + p_code + '"></p></label></div>';

      $(".todo_section").append(htmlcode);
      $(p_codeplas).text(todoModel.todoLists[i]);


      let d_code = 'd_button';
      d_code += i;

      const deletebutton = '<div class="delete_button' + i + '"><input type="button" class="' + d_code + '" value="Delete"/></div>';
      $(".todo_section").append(deletebutton);

    }
  }
}



//表示した文字を削除する　　View機能
function resetviewModel() {
  //deleteを押した時の表示機能
  if (true) {
    $(htmlcode).empty();
    $(deletebutton).empty();
  } else {
    return;
  }
}

//登録ボタンが押されたら追加
$('.addbutton').click(function () {
  //入力した文字を取得
  let input_value = $('#textinput').val();

  //もし、入力されていたら表示
  if (input_value !== "") {

    //Modelにinputされたデータを格納する
    todoModel.todoLists.push(input_value);
    viewModel();
    return;
  }

});

//Model部分のデータの削除
$('.todo_section').on('click', deletebutton, function () {
  //削除ボタンの作成 
  if (!confirm('削除しますか？')) {
    return false;
  } else {
    todoModel.todoLists == []; //1番目から1つ削除
    resetviewModel();
    return;
  }
});






//文字が入力されたときに実行
$('#textinput').keyup(function () {

});