//データを取得する　Model機能
class Model {
  constructor() {
    this.todoLists = [];
    this.checkLists = [];
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

  for (i = 0; i < inputaddvalue; i++) {
    //要素のテキストを格納

    if (todoModel.todoLists[i] != "") {
      //値が入っているclassを量産しないための調整

      let p_code = 'todo_text';
      let p_codeplas = 'todo_text';
      p_codeplas = '#' + p_code + i;
      p_code += i;


      const htmlcode = '<div class="code' + i + '"><label><input type="checkbox" name="check' + i + '" /><span class="checkbox-icon"></span><p id="' + p_code + '"></p></label></div>';

      $(".todo_section").append(htmlcode);
      $(p_codeplas).text(todoModel.todoLists[i]);

      $("#textinput").val("");

      let d_code = 'd_button';
      d_code += i;

      const deletebutton = '<div class="delete_button' + i + '"><input type="button" class="' + d_code + '" value="Delete"/></div>';
      $(".todo_section").append(deletebutton);

      let delete_ind = i;

      //Model部分のデータの削除
      //$('.todo_section').on('click', ".d_button" + i, function () {
      $(".d_button" + i).click(function () {
        //削除ボタンの作成 
        if (!confirm('削除しますか？')) {
          return false;
        } else {
          todoModel.todoLists.splice(delete_ind, 1);
          viewModel();
          return;
        }
      });

      checkedIcon();

    }
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
  }

});

function checkedIcon() {

  //チェックボタンの値の追加

  let checked_icon = $(".code" + i).prop("checked");
  if (checked_icon = true) {

    let checkedvalue = todoModel.checkLists.length;

    for (c = 0; c < checkedvalue; c++) {
      todoModel.checkLists.push(checked_icon);

      viewModel();
    
    }
  }
}