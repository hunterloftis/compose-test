```
(v0.10.38, 1.4.28):~/test/strawman (master)$ heroku docker:init
Overwriting existing 'Dockerfile'
Wrote Dockerfile
Overwriting existing 'docker-compose.yml'
Wrote docker-compose.yml
(v0.10.38, 1.4.28):~/test/strawman (master)$ docker-compose up
Recreating strawman_herokuPostgresql_1...
Recreating strawman_herokuRedis_1...
Recreating strawman_worker_1...
Recreating strawman_web_1...
Attaching to strawman_herokuPostgresql_1, strawman_herokuRedis_1, strawman_worker_1, strawman_web_1
worker_1           | listening on 3001
herokuRedis_1      | 1:C 22 May 19:29:33.085 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
herokuRedis_1      |                 _._
herokuRedis_1      |            _.-``__ ''-._
herokuRedis_1      |       _.-``    `.  `_.  ''-._           Redis 3.0.1 (00000000/0) 64 bit
herokuRedis_1      |   .-`` .-```.  ```\/    _.,_ ''-._
herokuRedis_1      |  (    '      ,       .-`  | `,    )     Running in standalone mode
herokuRedis_1      |  |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
herokuRedis_1      |  |    `-._   `._    /     _.-'    |     PID: 1
herokuRedis_1      |   `-._    `-._  `-./  _.-'    _.-'
herokuRedis_1      |  |`-._`-._    `-.__.-'    _.-'_.-'|
herokuRedis_1      |  |    `-._`-._        _.-'_.-'    |           http://redis.io
herokuRedis_1      |   `-._    `-._`-.__.-'_.-'    _.-'
herokuRedis_1      |  |`-._`-._    `-.__.-'    _.-'_.-'|
herokuRedis_1      |  |    `-._`-._        _.-'_.-'    |
herokuRedis_1      |   `-._    `-._`-.__.-'_.-'    _.-'
herokuRedis_1      |       `-._    `-.__.-'    _.-'
herokuRedis_1      |           `-._        _.-'
herokuRedis_1      |               `-.__.-'
herokuRedis_1      |
herokuRedis_1      | 1:M 22 May 19:29:33.087 # Server started, Redis version 3.0.1
herokuRedis_1      | 1:M 22 May 19:29:33.087 # WARNING overcommit_memory is set to 0! Background save may fail under low memory condition. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
herokuRedis_1      | 1:M 22 May 19:29:33.087 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
herokuRedis_1      | 1:M 22 May 19:29:33.087 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
herokuRedis_1      | 1:M 22 May 19:29:33.087 * The server is now ready to accept connections on port 6379
herokuPostgresql_1 | LOG:  database system was interrupted; last known up at 2015-05-22 19:28:46 UTC
herokuPostgresql_1 | LOG:  database system was not properly shut down; automatic recovery in progress
herokuPostgresql_1 | LOG:  record with zero length at 0/16A8178
herokuPostgresql_1 | LOG:  redo is not required
herokuPostgresql_1 | LOG:  database system is ready to accept connections
herokuPostgresql_1 | LOG:  autovacuum launcher started
web_1              | listening on 3000
```
