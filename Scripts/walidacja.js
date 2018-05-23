function check() {
    isGood = true;
    obj1 = document.getElementById('login');
    obj2 = document.getElementById('password');
    obj3 = document.getElementById('name');
    obj4 = document.getElementById('lastname');
    obj5 = document.getElementById('mail');
    obj6 = document.getElementById('pesel');
    txt1 = obj1.value;
    txt2 = obj2.value;
    txt3 = obj3.value;
    txt4 = obj4.value;
    txt5 = obj5.value;
    txt6 = obj6.value;

    var expression1 = /^[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+\-\=\.]{5,30}$/g
    wynik1 = expression1.test(txt1);
    if (!wynik1) {
        obj1.style.borderColor = 'red';
        isGood = false;
    }
    else obj1.style.borderColor = '#aaaaaa';

    var expression2 = /^[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+\-\=\.]{5,25}$/g
    wynik2 = expression2.test(txt2);
    if (!wynik2) {
        obj2.style.borderColor = 'red';
        isGood = false;
    }
    else obj2.style.borderColor = '#aaaaaa';

    var expression3 = /^[A-ZŁŻŚ]{1}[a-ząćęśółżź]+((\s)[A-ZŁŻŚ]{1}[a-ząćęśółżź]+)?$/g
    wynik3 = expression3.test(txt3);
    if (!wynik3) {
        obj3.style.borderColor = 'red';
        isGood = false;
    }
    else obj3.style.borderColor = '#aaaaaa';

    var expression4 = /^[A-ZŁŻŚ]{1}[a-ząćęśółżź]+((-|\s)[A-ZŁŻŚ]{1}[a-ząćęśółżź]+)?$/g
    wynik4 = expression4.test(txt4);

    if (!wynik4) {
        obj4.style.borderColor = 'red';
        isGood = false;
    }
    else obj4.style.borderColor = '#aaaaaa';

    var expression5 = /^[a-zA-Z0-9\.\-_]+\@[a-zA-Z0-9\.\-_]+\.[a-z]{2,4}$/g
    wynik5 = expression5.test(txt5);
    if (!wynik5) {
        obj5.style.borderColor = 'red';
        isGood = false;
    }
    else obj5.style.borderColor = '#aaaaaa';

    var expression6 = /^(\d{2}((([02][13578]|[13][02])31)|(?:(?:[02][1,3-9]|[13][0-2]))(?:29|30))(\d{5}))$|^(?:(?:(?:0[48]|[2468][048]|[13579][26])(?:(02|22)29)\d{5}|(?:002229)(\d{5})))$|^(?:\d{2})(?:(?:[02][1-9])|(?:[13][0-2]))(?:0[1-9]|1\d|2[0-8])\d{5}$/g
    wynik6 = expression6.test(txt6);
    if (!wynik6) {
        obj6.style.borderColor = 'red';
        isGood = false;
    }
    else obj6.style.borderColor = '#aaaaaa';

	/*if(isGood)
	{document.getElementById('p1').type = 'submit';}
	else 
	{document.getElementById('p1').type = 'button';}
*/
}