  //文字が入力されたときに実行
  $('#textinput').keyup(function () {
    //入力した文字を取得
    const input_textvalue = $('#textinput').val();

    //登録ボタンが押されたら追加
    $('.addbutton').click(function () {
      //もし、入力されていたら表示

      if (input_textvalue != "") {
      
      const nextvalue1 = $(".todo_text01").val();
      const nextvalue2 = $(".todo_text02").val();
      const nextvalue3 = $(".todo_text03").val();

        //入力した文字を表示 NO.1
        $(".todo_text01").text(input_textvalue);
        //文字の検索
        

        if (nextvalue2 != nextvalue1) {
          //入力した文字を表示 NO.2
          $(".todo_text02").text(input_textvalue);
        }

        if (nextvalue3 != nextvalue2 || nextvalue3 != nextvalue1 ) {
          //入力した文字を表示 NO.3
          $(".todo_text03").text(input_textvalue);
        }
      } else {
        return;
      }

    });
  });