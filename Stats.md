## MacBook Pro (Retina, 13-inch, Mid 2014), 2.6 GHz Intel Core i5

```bash
node express_es7.js

wrk -t12 -c400 -d30s http://127.0.0.1:3000
Running 30s test @ http://127.0.0.1:3000
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   226.63ms    8.24ms 338.28ms   76.19%
    Req/Sec   143.84     67.07   323.00     67.40%
  50650 requests in 30.10s, 9.56MB read
  Socket errors: connect 0, read 286, write 0, timeout 0
Requests/sec:   1682.74
Transfer/sec:    325.26KB
```

```bash
node express_es5.js

wrk -t12 -c400 -d30s http://127.0.0.1:3000
Running 30s test @ http://127.0.0.1:3000
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   242.38ms    7.62ms 296.77ms   80.06%
    Req/Sec   137.84     71.76   323.00     66.23%
  47524 requests in 30.10s, 8.97MB read
  Socket errors: connect 0, read 270, write 6, timeout 0
Requests/sec:   1578.63
Transfer/sec:    305.13KB
```

```bash
node --harmony koa_es6.js

wrk -t12 -c400 -d30s http://127.0.0.1:3000
Running 30s test @ http://127.0.0.1:3000
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   231.83ms   10.61ms 280.57ms   71.21%
    Req/Sec   142.33     72.02   323.00     66.52%
  49753 requests in 30.10s, 7.31MB read
  Socket errors: connect 0, read 265, write 2, timeout 0
Requests/sec:   1653.15
Transfer/sec:    248.62KB
```