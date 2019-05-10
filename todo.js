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

  for (let i = 0; i < inputaddvalue; i++) {
    //要素のテキストを格納

    if (todoModel.todoLists[i] != "") {
      //値が入っているclassを量産しないための調整

      let d_code = 'd_button';
      d_code += i;

      const deletebutton = '<input type="button" class="' + d_code + '" value="Delete"/></div>';
      const htmlcode = '<div class="allset"><input type="checkbox" class="set" name="check' + i + '" />' + todoModel.todoLists[i] + deletebutton;

      $(".todo_section").append(htmlcode);

      $("#textinput").val("");

      //Deleteボタン
      deleteButtonSet(i);

      //チェックボタンの値の取得
      checkedIcon(i);

    }

  }
}


//Deleteボタン
function deleteButtonSet(deletebuttonnum) {
  const delete_ind = deletebuttonnum;

  //Model部分のデータの削除
  $(".d_button" + delete_ind).click(function () {
    //削除ボタンの作成 
    if (!confirm('削除しますか？')) {
      return false;
    } else {
      todoModel.todoLists.splice(delete_ind, 1);
      todoModel.checkLists.splice(delete_ind, 1);

      viewModel();
      return;
    }

  });
}

//登録ボタンが押されたら追加
$('.addbutton').click(function () {
  //入力した文字を取得
  let input_value = $('#textinput').val();

  //もし、入力されていたら表示
  if (input_value !== "") {

    //Modelにinputされたデータを格納する
    todoModel.todoLists.push(input_value);
    todoModel.checkLists.push(false);
    viewModel();
  }

});

//エンターキーの設定
$('#textinput').keypress(function (e) {
  if (e.which == 13) {
    $('.addbutton').click();
  }
});

//チェックボタンの値の取得
function checkedIcon(checkednumber) {

  let check_ind = 'input[name="check' + checkednumber + '"]';

  $(check_ind).click(function () {

    //もしチェックされていたらチェックされた値を表示する
    if ($(check_ind).prop('checked', true)) {

      //Modelにinputされたデータを取得する
      let Checklistvalue = todoModel.checkLists.prop('checked');

      //データの個数の確認
      $(Checklistvalue).each(function (number) {

        if (number == true) {
          $('input[name="check' + checkednumber + '"]').prop('checked', false);
        } else {
          $('input[name="check' + checkednumber + '"]').prop('checked', true);
        }

      });
    }
  });
}

