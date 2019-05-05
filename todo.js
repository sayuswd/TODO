//データを取得する　Model機能
class todoModel {
  constructor() {
    this.todoLists = [];
    this.checkLists = [];
  }
}
let todoModel = new todoModel();

class checkModel {
  constructor() {
    this.checkLists = [];
  }
}
let checkModel = new checkModel();


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

let checkaddvalue = checkModel.checkModel.length;

function checkedIcon() {

  //.inputの値の取得
  //チェックボタンの値の追加
  let namecheck = 'input[name="check' + i + '"]';
  let namecheked = 'input[name="check' + i + '"]:checked';

  $(namecheck).click(function () {
    //値が入っていないinputか調べる
    if (namecheked == true) {
      for (let b = 0; b < namecheck; b++) {

        //要素のテキストを格納
        checkaddvalue = namecheked.val();
        //値が入っていないinputか調べる

        let checkedvalue = namecheck.prop('checked');
        alert(checkedvalue);
      }
    }
  });
}