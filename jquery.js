$(document).ready(function(){
    let time = 0;
    let mid = 0;
    let now;

    let min_time = 0;
    let sec_time = 0;

    let count;

    let min = $("#min");
    let sec = $("#sec");

    let start = $("#start");
    let stop = $("#stop");
    let reset = $("#reset");

    //startボタンが押された時の処理
    start.click(function(){
        now = new Date(); //現在時刻
        count = setInterval(counter, 10);
        toggle();
    });

    //stopボタンが押された時の処理
    stop.click(function(){
        mid += (new Date() - now)/1000;
        clearInterval(count);
        toggle();
    });

    //resetボタンが押された時の処理
    reset.click(function(){
        mid = 0;
        min.html("0");
        sec.html("00.00");
        reset.prop("disabled", true);
    });

    //時間の計算
    function counter(){

        time = mid + ((new Date() - now)/1000);

        //60秒経過した時の処理
        if(time > 60){
            mid = 0;
            min_time ++;
            now = new Date();
            time = 0;
            sec.html();
        }

        //秒数が10秒より小さかったら01, 02のようにする
        if(time < 10){
            sec.html("0"+time.toFixed(2));
        }else{
            sec.html(time.toFixed(2));
        }
        min.html(min_time);
    }

    //ボタンの切り替え
    function toggle(){
        if(!start.prop("disabled")){
            start.prop("disabled", true);
            stop.prop("disabled", false);
            reset.prop("disabled", true);
        }else{
            start.prop("disabled", false);
            stop.prop("disabled", true);
            reset.prop("disabled", false);
        }
    }
});