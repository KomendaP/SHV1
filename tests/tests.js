/**
 * Created by Павло on 03.10.2015.
 */

module('Перший модуль');

test('Frist test - ok', function () {
   ok(true);
});

module('Другий модуль: ', {
    /**
     * runs before every test
     */
    setup: function () {},
    /**
     * Runs after test
     */
    teardown: function () {}
});

test('1 test - equal', function () {
    equal('1',1, 'String 1 == Number');
});
test('2 test - strictEqual', function () {
    strictEqual(1,1, 'Number and Number');
});
test('3 test - deepEqual', function () {
    var obj1 = { foo: "bar"},
        obj2 = { foo: "bar" };
    deepEqual( obj1, obj2, "Два обєкти можуть бути рівними" );
});
test('4 test - notDeepEqual', function () {
    var obj = { foo: "bar" };
    notDeepEqual( obj, { foo: "bla" }, "Different object, same key, different value, not equal" );
});

module('Третій модуль');
test('1 test expect', function (assertion) {
    var operation,
        result,
        calc;
    /**
     * test quantity expectation
     */
    assertion.expect(2);
    calc = function (x, operation) {
        return operation(x);
    };
    operation = function (x) {
        assertion.ok(true, "calc() calls operation function");
        return x * x;
    };
    result = calc(2, operation);
    assertion.equal(result, 4, "2 squared equals 4");
});
test('2 test expect', function () {
    expect(2);
    ok(true);
    ok(true);
});
test('3 test expect', 2, function () {
    ok(true);
    ok(true);
});

module('Асинхронні тести');
test('1 тест', function () {
    stop();
    setTimeout(function () {
        ok(true);
        start();
    }, 100);
});
test('2 тест', function () {
    stop();
    stop();
    setTimeout(function () {
        ok(true);
        start();
    }, 500);
    setTimeout(function () {
        ok(true);
        start();
    }, 100);
});
test('3 тест', function () {
    stop(2);
    setTimeout(function () {
        ok(true);
        start();
    }, 500);
    setTimeout(function () {
        ok(true);
        start();
    }, 100);
});
asyncTest('4 тест', function () {
    setTimeout(function () {
        ok(true);
        start();
    }, 100);
});

module('Fade In-Out');
asyncTest('fadeIn', function () {
    $('body').append('<div id="my">ola-la</div>');
    ok($('#my').length === 1);

    $('#my').fadeIn(500, function () {
        setTimeout(function () {
            ok($('#my').is(':visible'))
            start()
        }, 600);
        // $(this).fadeOut(500);
    });
})
/*
log,
testStart
testDone,
moduleStart,
moduleDone,
begin,
done,
QUnit.**** = function () {
    
}
*/
