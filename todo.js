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

      let d_code = 'd_button';
      d_code += i;

      const deletebutton = '<input type="button" class="' + d_code + '" value="Delete"/></div>';
      const htmlcode = '<div><input type="checkbox" class="set" name="check' + i + '" />' + todoModel.todoLists[i] + deletebutton;

      $(".todo_section").append(htmlcode);

      $("#textinput").val("");


      let delete_ind = i;

      //Model部分のデータの削除
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

  let check_ind = i;
  let namecheck = 'input[name="check' + i + '"]';
  todoModel.checkLists.push(check_ind);

  for (let b = 0; b < todoModel.checkLists.length; b++) {
    //checkListsにinputのデータを格納する
    // if (todoModel.checkLists.length == i ) {

    $(namecheck).click(function () {
      //.inputの値の取得
      //チェックボタンの値の追加

      //チェックされたinputか調べる
      if ($(namecheck).prop('checked')) {
        namecheck.prop()
          (namecheck).prop('checked', true);
        viewModel();
      }

    });
  }
  //}
}