$(document).ready( function () {

    /*-------------------
        Variáveis de controle do game
    -----------------------------------*/
    let questionsQuantity = 0;
    let doQuestion = [];

    /*--------------
        Perguntas
    ------------------*/
    const questions = [
        {   // Question 0
            question: 'Qual dessas linguagens não é considerada uma linguagem de programação?',
            answers: ['PHP', 'JavaScript', 'Python', 'HTML'],
            correctAnswer: 'answer3'
        },
        {   // Question 1
            question: 'Em que ano o Brasil foi descoberto?',
            answers: ['1500', '1789', '1398', '1499'],
            correctAnswer: 'answer0'
        },
        {   // Question 2
            question: 'Qual a capital de Portugal?',
            answers: ['Porto', 'Veneza', 'Lisboa', 'Berlim'],
            correctAnswer: 'answer2'
        },
        {   // Question 3
            question: 'Qual a maioridade penal no Brasil?',
            answers: ['21', '16', '17', '18'],
            correctAnswer: 'answer3'
        },
        {   // Question 4
            question: 'Linus Torswald foi o criador do...?',
            answers: ['Basic', 'Linux', 'Ipod', 'JavaScript'],
            correctAnswer: 'answer1'
        },
    ];

    questionsQuantity = questions.length - 1;

    sortQuestions(questionsQuantity);

    function sortQuestions (questionsQuantity) {
        /*--------------
            Gera um numero aleatório
        -----------------------------*/
        let randomNumber = Number((Math.random() * questionsQuantity).toFixed());
        console.log(randomNumber);

        /*--------------
            Verificar se a pergunta sorteada já foi feita
        --------------------------------------------------*/

        if (!doQuestion.includes(randomNumber)) { // Se não está incluido
            doQuestion.push(randomNumber);

            /*--------------
                preencher o html com os dados da questão sorteada
            ------------------------------------------------------*/
            let questionSelected = questions[randomNumber].question;
            console.log(questionSelected);

            $('.question').html(questionSelected);
            $('.question').attr('data-indice', randomNumber);
            
            for (let i = 0; i < questions.length; i++) {
                $('#answer' + i).html(questions[randomNumber].answers[i]);
            }

            // let answer0 = questions[randomNumber].question[0];
            // let answer1 = questions[randomNumber].question[1];
            // let answer2 = questions[randomNumber].question[2];
            // let answer3 = questions[randomNumber].question[3];

            // $('#answer0').html(answer0)
            // $('#answer1').html(answer1)
            // $('#answer2').html(answer2)
            // $('#answer3').html(answer3)
            

            /*--------------
                Embaralhar as respostas
            -----------------------------*/
            let containerParentDiv = $('.answers');
            let buttonAnswers = containerParentDiv.children(); // pega todos os filhos
            
            for (let i = 1; i < buttonAnswers.length; i++) {
                containerParentDiv.append(
                    buttonAnswers.eq(Math.floor(Math.random() * buttonAnswers.length))
                ) // eq pega o indice
            }
        } else {
            console.log('A pergunta já foi feita');

            if (doQuestion.length < questionsQuantity + 1){
                return sortQuestions(questionsQuantity);

            } else {
                // console.log('Acabaram as perguntas');

                $('#quiz').addClass('hidden');
                $('#statusMessage').html('PARABÉNS, <br/> Você venceu o jogo!!!');
                $('#statusMessage').addClass('congratulations');
                $('#status').removeClass('hidden');
            }
        }
    }

    $('.answer-btn').click( function () {
        if ( $('#quiz').attr('data-status')!=='bloqued') {
            /*--------------
            Percorre todas as repostas com essa class e desmarca a classe selecionada
            ------------------------------------------------------------------------------*/
            restartButtons();

            /*--------------
                Adiciona a classe na resposta selecionada
            ----------------------------------------------*/
            $(this).addClass('selected');
        }
    })

    $('#confirm').click( function () {
        /*--------------
            Pega o índice da pergunta
        -----------------------------*/
        let indiceQuestion = $(".question").attr('data-indice');
        
        /*--------------
            Qual é a resposta certa?
        -----------------------------*/
        let correctAnswerAboutQuestion = questions[indiceQuestion].correctAnswer;

        /*--------------
            Qual foi a resposta que o usuário selecionou
        -----------------------------*/
        $('.answer-btn').each( function () {
            if ($(this).hasClass('selected')) {
                let choiceAnswer = $(this).attr('id');

                if (correctAnswerAboutQuestion == choiceAnswer) {
                    console.log('Você acertou!!!!');
                    nextQuestion();
                } else {
                    console.log('ERROUuuuuuuuu');
                    $('#quiz').attr('data-status', 'bloqued');
                    $('#confirm').addClass('hidden');
                    $('#'+ correctAnswerAboutQuestion).addClass('correct');
                    $('#'+ choiceAnswer).removeClass('selected');
                    $('#'+ choiceAnswer).addClass('error');

                    setTimeout( function () {
                        gameOver();
                    }, 4000)
                }
            }
        });
    })

    function restartGame() {
        $('#quiz').attr('data-status', 'ok');
        $('#confirm').removeClass('hidden');
        doQuestion = [];
        restartButtons();
        sortQuestions (questionsQuantity);
        $('#quiz').removeClass('hidden');
        $('#status').addClass('hidden');
    }

    function nextQuestion() {
        restartButtons();
        sortQuestions (questionsQuantity);
    }

    function restartButtons() {
        $('.answer-btn').each( function () {
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            }

            if ($(this).hasClass('correct')) {
                $(this).removeClass('correct');
            }

            if ($(this).hasClass('error')) {
                $(this).removeClass('error');
            }
        })
    }

    function gameOver() {
        $('#quiz').addClass('hidden');
        $('#statusMessage').html('GAME OVER!!!');
        $('#statusMessage').addClass('you-lose');
        $('#status').removeClass('hidden');
    }

    $('#newGame').click( function () {
        restartGame();
    })
});
