//データの保持　Model機能　配列で格納
class Model {
  constructor() {
    this.todoLists = [];
    this.checkLists = [];
  }
}
let todoModel = new Model();


//表示機能　View機能
function viewModel() {

  //配列の要素数を取得
  let inputaddvalue = todoModel.todoLists.length;

  $(".inputlist_set").html("");

  //格納した複数の要素の抜き出し
  for (let i = 0; i < inputaddvalue; i++) {

    //classの調整部分
    if (todoModel.todoLists[i] != "") {

      let delete_code = 'd_button';
      delete_code += i;
      //Htmlの表示部分の設定
      const deletebutton = '<input type="button" class="' + delete_code + '" value="Delete"/></div>';
      const htmlset = '<div class="allset"><input type="checkbox" class="set" name="check' + i + '" />' + todoModel.todoLists[i] + deletebutton;

      //表示するためにappendでHTMLを取得する
      $(".inputlist_set").append(htmlset);

      //inputのチェックボックスの表示設定
      if (todoModel.checkLists[i] == true) {
        $('input[name="check' + i + '"]').prop("checked", true);
      } else if (todoModel.checkLists[i] == false) {
        $('input[name="check' + i + '"]').prop("checked", false);
      }

      //input type="text"のリセット
      $("#textinput").val("");

      //Deleteボタンの設定へ
      deleteButtonSet(i);

      //チェックボタンの設定へ
      checkedIcon(i);


    }

  }
}


//Deleteボタンの設定
function deleteButtonSet(deletebuttonnum) {
  const delete_ind = deletebuttonnum;

  //Model部分のデータの削除
  $(".d_button" + delete_ind).click(function () {
    //削除する場合上のiの値と連動
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

$(function(){
//登録ボタンが押されたら追加
$('.addbutton').click(function () {
  //入力した文字を取得
  let input_value = $('#textinput').val();

  //もし、入力されていたら表示
  if (input_value !== "") {

    //Modelにinputされたデータを格納する
    //input type="text"で入力された値
    todoModel.todoLists.push(input_value);
    //falseを仮で取得
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
});

//チェックボタンの値の取得
function checkedIcon(checkednumber) {

  let check_ind = 'input[name="check' + checkednumber + '"]';



  $(check_ind).click(function () {
    //もしチェックされていたらチェックされたfalseの値を新しく代入
    if ($(check_ind).prop('checked')) {
      todoModel.checkLists[checkednumber] = true;
    } else {
      todoModel.checkLists[checkednumber] = false;
    }
    viewModel();
  });
}