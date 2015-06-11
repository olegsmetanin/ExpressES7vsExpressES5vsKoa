# expressES5vsES7vsKOA

Express 4.0 ES5 vs Babel ES7 async await vs Koa

$ node express_es7.js

$ wrk -t12 -c400 -d30s http://127.0.0.1:3000

Running 30s test @ http://127.0.0.1:3000

  12 threads and 400 connections

  Thread Stats   Avg      Stdev     Max   +/- Stdev

    Latency   232.56ms   12.69ms 344.70ms   82.72%

    Req/Sec   138.02     75.76   323.00     60.31%

  48144 requests in 30.09s, 9.09MB read

  Socket errors: connect 0, read 407, write 0, timeout 0

Requests/sec:   1599.95

Transfer/sec:    309.26KB


$ node express_es5.js

$ wrk -t12 -c400 -d30s http://127.0.0.1:3000

Running 30s test @ http://127.0.0.1:3000

  12 threads and 400 connections

  Thread Stats   Avg      Stdev     Max   +/- Stdev

    Latency   256.39ms   16.52ms 336.86ms   69.99%

    Req/Sec   131.26     64.01   320.00     66.26%

  45182 requests in 30.10s, 8.53MB read

  Socket errors: connect 0, read 312, write 0, timeout 0

Requests/sec:   1500.96

Transfer/sec:    290.13KB



$ node --harmony koa_es6.js

$ wrk -t12 -c400 -d30s http://127.0.0.1:3000

Running 30s test @ http://127.0.0.1:3000

  12 threads and 400 connections

  Thread Stats   Avg      Stdev     Max   +/- Stdev

    Latency   254.35ms   15.81ms 303.66ms   78.35%

    Req/Sec   134.26     68.29   323.00     68.33%

  45981 requests in 30.10s, 6.75MB read

  Socket errors: connect 0, read 249, write 0, timeout 0

Requests/sec:   1527.37

Transfer/sec:    229.70KB
