const quiz = [
    {
        question: '１＋１は？',
        answers: [
            '1',
            '2',
            '3',
            '4'
        ],
        correct: '2'
    },
    {
        question: '2＋2は？',
        answers: [
            '1',
            '2',
            '3',
            '4'
        ],
        correct: '4'
    },
    {
        question: '3＋3は？',
        answers: [
            '1',
            '2',
            '3',
            '6'
        ],
        correct: '6'
    }
];

const quizLenght = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

//定数の文字列をHTMLに反映
const setupQuiz = () => {
    document.getElementById('js-questions').textContent = quiz[quizIndex].question;
    let = buttonIndex = 0;
    let buttonLength = $button.length
    while (buttonIndex < buttonLength) {
        //命令
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解！');
        score++
    } else {
        window.alert('不正解！');
    }

    quizIndex++;
    if(quizIndex < quizLenght){
        //問題数がまだあればこちらを実行
        setupQuiz();
    } else {
        //問題数がもうなければこちらを実行
        window.alert('終了！！あなたの正解数は' + score + ' / ' + quizLenght + 'です！');
    }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}

// $button[0].addEventListener('click', (e) => {
//     clickHandler(e);
// });
// $button[1].addEventListener('click', (e) => {
//     clickHandler(e);

// });
// $button[2].addEventListener('click', (e) => {
//     clickHandler(e);

// });
// $button[3].addEventListener('click', (e) => {
//     clickHandler(e);

// });


// 　if(){
//    window.alert('正解！');
// } else{
//     window.alert('不正解！');
// }
// });
