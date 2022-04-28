/* 
    Задание 5:

    Вывести в консоль с помощью цикла WHILE все нечетные числа от 21 до 67
    
*/


function task1(){
    for (let i = 10; i <= 50; i++){
        if (!(i % 2)){
            console.log(i);
        }
    }
}

function task2(){
    let aboutMe = {
        name : 'Anton',
        last_name: 'Suprun',
        age: 20,
        pet: true,
    };
    console.log(aboutMe);
}

function task3(){
    //  "В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей,
    // что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам"
    const array = [
        'я в Симбирск,',//0
        'в трактире.',//1
        'с утра',//2
        'В ту же ночь',//3
        'Я остановился',//4
        'для закупки', //5
        'что и было поручено Савельичу.',//6
        'приехал,',//7
        'где должен был',//8
        'нужных вещей',//9
        'отправился по лавкам',//10
        'пробыть сутки',//11
        'Савельич'//12
    ]

    let result = '';
    let arrayNambe = [3,7,0,8,11,5,9,6,4,1,12,2,10];

    for(let i = 0; i <= arrayNambe.length; i++){
        result += array[arrayNambe[i]] + " ";
    }

    console.log(result);
}


function task4(){
    function aboutMe(firstName,lastName){
        const fullName = `${firstName} ${lastName}`;
        console.log(fullName);
    }
    aboutMe('Anton','Suprun');
}


function task5(){
    let i = 21;
    while(i <= 67){
        if(i % 2){console.log(i);}
        i++;
    }
}

console.log("task1");
task1();
console.log("task2");
task2();
console.log("task3");
task3();
console.log("task4");
task4();
console.log("task5");
task5();