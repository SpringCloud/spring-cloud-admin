# spring-cloud-admin
Spring Cloud管控平台

## 功能
 日志实时查看
 在线测试文档，集成swagger
 区分环境，开发，测试，预发，生产


## journal
http://localhost:8081/api/journal

```json
[
	{
		"application": {
			"id": "69866be9",
			"name": "spring-boot-admin-sample",
			"managementUrl": "http://my.com.cn:8081/actuator/",
			"healthUrl": "http://my.com.cn:8081/actuator/health/",
			"serviceUrl": "http://my.com.cn:8081/",
			"statusInfo": {
				"status": "UP",
				"timestamp": 1540176563955,
				"details": {
					"hystrix": {
						"status": "UP"
					},
					"diskSpace": {
						"status": "UP",
						"total": 193274572800,
						"free": 161479372800,
						"threshold": 10485760
					},
					"status": "UP"
				}
			},
			"source": "http-api",
			"metadata": {
				"user.name": "user",
				"user.password": "******"
			},
			"info": {
				"scm-url": "https://github.com/codecentric/spring-boot-admin/spring-boot-admin-dependencies/spring-boot-admin-build/spring-boot-admin-samples/spring-boot-admin-sample",
				"build-url": "http://travis-ci.org/@env.TRAVIS_REPO_SLUG@/builds/@env.TRAVIS_BUILD_ID@",
				"stage": "test",
				"build": {
					"artifact": "spring-boot-admin-sample",
					"name": "Spring Boot Admin Sample",
					"time": 1538709175000,
					"version": "1.5.8-SNAPSHOT",
					"group": "de.codecentric"
				}
			}
		},
		"timestamp": 1540176563982,
		"type": "STATUS_CHANGE",
		"from": {
			"status": "UNKNOWN",
			"timestamp": 1540176563861,
			"details": {}
		},
		"to": {
			"status": "UP",
			"timestamp": 1540176563955,
			"details": {
				"hystrix": {
					"status": "UP"
				},
				"diskSpace": {
					"status": "UP",
					"total": 193274572800,
					"free": 161479372800,
					"threshold": 10485760
				},
				"status": "UP"
			}
		}
	},
	{
		"application": {
			"id": "69866be9",
			"name": "spring-boot-admin-sample",
			"managementUrl": "http://my.com.cn:8081/actuator/",
			"healthUrl": "http://my.com.cn:8081/actuator/health/",
			"serviceUrl": "http://my.com.cn:8081/",
			"statusInfo": {
				"status": "UNKNOWN",
				"timestamp": 1540176563861,
				"details": {}
			},
			"source": "http-api",
			"metadata": {
				"user.name": "user",
				"user.password": "******"
			},
			"info": {}
		},
		"timestamp": 1540176563866,
		"type": "REGISTRATION"
	}
]
```

## 查询应用的接口
http://localhost:8081/api/applications

```json
[
	{
		"id": "69866be9",
		"name": "spring-boot-admin-sample",
		"managementUrl": "http://my.com.cn:8081/actuator/",
		"healthUrl": "http://my.com.cn:8081/actuator/health/",
		"serviceUrl": "http://my.com.cn:8081/",
		"statusInfo": {
			"status": "UP",
			"timestamp": 1540177436133,
			"details": {
				"hystrix": {
					"status": "UP"
				},
				"diskSpace": {
					"status": "UP",
					"total": 193274572800,
					"free": 161479344128,
					"threshold": 10485760
				},
				"status": "UP"
			}
		},
		"source": "http-api",
		"metadata": {
			"user.name": "user",
			"user.password": "******"
		},
		"info": {
			"scm-url": "https://github.com/codecentric/spring-boot-admin/spring-boot-admin-dependencies/spring-boot-admin-build/spring-boot-admin-samples/spring-boot-admin-sample",
			"build-url": "http://travis-ci.org/@env.TRAVIS_REPO_SLUG@/builds/@env.TRAVIS_BUILD_ID@",
			"stage": "test",
			"build": {
				"artifact": "spring-boot-admin-sample",
				"name": "Spring Boot Admin Sample",
				"time": 1538709175000,
				"version": "1.5.8-SNAPSHOT",
				"group": "de.codecentric"
			}
		}
	}
]
```

## 具体的应用
http://localhost:8081/api/applications/69866be9

```json
{
	"id": "69866be9",
	"name": "spring-boot-admin-sample",
	"managementUrl": "http://my.com.cn:8081/actuator/",
	"healthUrl": "http://my.com.cn:8081/actuator/health/",
	"serviceUrl": "http://my.com.cn:8081/",
	"statusInfo": {
		"status": "UP",
		"timestamp": 1540177656142,
		"details": {
			"hystrix": {
				"status": "UP"
			},
			"diskSpace": {
				"status": "UP",
				"total": 193274572800,
				"free": 161479372800,
				"threshold": 10485760
			},
			"status": "UP"
		}
	},
	"source": "http-api",
	"metadata": {
		"user.name": "user",
		"user.password": "******"
	},
	"info": {
		"scm-url": "https://github.com/codecentric/spring-boot-admin/spring-boot-admin-dependencies/spring-boot-admin-build/spring-boot-admin-samples/spring-boot-admin-sample",
		"build-url": "http://travis-ci.org/@env.TRAVIS_REPO_SLUG@/builds/@env.TRAVIS_BUILD_ID@",
		"stage": "test",
		"build": {
			"artifact": "spring-boot-admin-sample",
			"name": "Spring Boot Admin Sample",
			"time": 1538709175000,
			"version": "1.5.8-SNAPSHOT",
			"group": "de.codecentric"
		}
	}
}
```

## info
http://localhost:8081/api/applications/69866be9/info

```json
{
	"scm-url": "https://github.com/codecentric/spring-boot-admin/spring-boot-admin-dependencies/spring-boot-admin-build/spring-boot-admin-samples/spring-boot-admin-sample",
	"build-url": "http://travis-ci.org/@env.TRAVIS_REPO_SLUG@/builds/@env.TRAVIS_BUILD_ID@",
	"stage": "test",
	"build": {
		"artifact": "spring-boot-admin-sample",
		"name": "Spring Boot Admin Sample",
		"time": 1538709175000,
		"version": "1.5.8-SNAPSHOT",
		"group": "de.codecentric"
	}
}
```
## health
http://localhost:8081/api/applications/69866be9/health

```json
{
	"status": "UP",
	"diskSpace": {
		"status": "UP",
		"total": 193274572800,
		"free": 161479372800,
		"threshold": 10485760
	},
	"hystrix": {
		"status": "UP"
	}
}
```
## metrics
http://localhost:8081/api/applications/69866be9/metrics

```json
{
	"mem": 344581,
	"mem.free": 124809,
	"processors": 8,
	"instance.uptime": 1073812,
	"uptime": 1081163,
	"systemload.average": -1.0,
	"heap.committed": 260096,
	"heap.init": 260096,
	"heap.used": 133238,
	"heap": 4159488,
	"nonheap.committed": 87728,
	"nonheap.init": 7488,
	"nonheap.used": 84500,
	"nonheap": 0,
	"threads.peak": 32,
	"threads.daemon": 26,
	"threads.totalStarted": 43,
	"threads": 31,
	"classes": 9463,
	"classes.loaded": 9463,
	"classes.unloaded": 0,
	"gc.g1_young_generation.count": 7,
	"gc.g1_young_generation.time": 60,
	"gc.g1_old_generation.count": 0,
	"gc.g1_old_generation.time": 0,
	"httpsessions.max": -1,
	"httpsessions.active": 68
}
```
## logfile
http://localhost:8081/api/applications/69866be9/logfile

```log
HttpSessionSecurityContextRepository : No HttpSession currently exists
2018-10-12 16:23:01.926 DEBUG 23028 --- [http-nio-8081-exec-12] w.c.HttpSessionSecurityContextRepository : No SecurityContext was available from the HttpSession: null. A new one will be created.
```
## env
http://localhost:8081/api/applications/69866be9/env

```json
{
	"profiles": [
		"secure"
	],
	"server.ports": {
		"local.server.port": 8081
	},
	"servletContextInitParams": {},
	"systemProperties": {
		"sun.desktop": "windows",
		"java.specification.version": "11",
	},
	"systemEnvironment": {
		"USERDOMAIN_ROAMINGPROFILE": "my.com.cn",
		"LOCALAPPDATA": "C:\\Users\\BKJKSH\\AppData\\Local",
		"PROCESSOR_LEVEL": "6",
		"=::": "::\\"
	},
	"applicationConfig: [classpath:/application.yml]#secure": {
		"spring.profiles": "secure",
		"spring.boot.admin.username": "user",
		"spring.boot.admin.password": "******",
		"spring.boot.admin.client.metadata.user.name": "user",
		"spring.boot.admin.client.metadata.user.password": "******",
		"security.user.name": "user",
		"security.user.password": "******"
	},
	"applicationConfig: [classpath:/application.yml]": {
		"info.scm-url": "https://github.com/codecentric/spring-boot-admin/spring-boot-admin-dependencies/spring-boot-admin-build/spring-boot-admin-samples/spring-boot-admin-sample",
		"info.build-url": "http://travis-ci.org/@env.TRAVIS_REPO_SLUG@/builds/@env.TRAVIS_BUILD_ID@",
		"info.stage": "test",
		"logging.file": "target/boot-admin-sample.log",
		"endpoints.cors.max-age": 1800,
		"management.context-path": "/actuator",
		"server.port": 8081,
		"spring.application.name": "spring-boot-admin-sample",
		"spring.boot.admin.url": "http://localhost:8081",
		"spring.profiles.active[0]": "secure"
	},
	"springCloudClientHostInfo": {
		"spring.cloud.client.hostname": "my.com.cn",
		"spring.cloud.client.ipAddress": "172.23.34.56"
	},
	"defaultProperties": {
		"spring.aop.proxyTargetClass": "true"
	}
}
```
## loggers
http://localhost:8081/api/applications/69866be9/loggers

```json
{
	"levels": [
		"OFF",
		"ERROR",
		"WARN",
		"INFO",
		"DEBUG",
		"TRACE"
	],
	"loggers": {
		"ROOT": {
			"configuredLevel": "INFO",
			"effectiveLevel": "INFO"
		},
		"com": {
			"configuredLevel": null,
			"effectiveLevel": "INFO"
		},
		"com.netflix": {
			"configuredLevel": null,
			"effectiveLevel": "INFO"
		},
		"com.netflix.config": {
			"configuredLevel": null,
			"effectiveLevel": "INFO"
		},
		"com.netflix.config.ConcurrentCompositeConfiguration": {
			"configuredLevel": null,
			"effectiveLevel": "INFO"
		}
	}
}
```


## 修改日志级别

http://localhost:8081/api/applications/69866be9/loggers/org.springframework.beans.BeanUtils

注意：格式是 `POST /api/applications/69866be9/loggers/{logger-name}`

Request Body 是
```json
{"configuredLevel":"WARN"}
```

## JMX

### 查看所有JMX信息
http://localhost:8081/api/applications/69866be9/jolokia/

```json
{
	"request": {
		"type": "list"
	},
	"value": {
		"jdk.management.jfr": {},
		"java.util.logging": {
			"type=Logging": {
				"op": {
					"getLoggerLevel": {
						"args": [
							{
								"name": "p0",
								"type": "java.lang.String",
								"desc": "p0"
							}
						],
						"ret": "java.lang.String",
						"desc": "getLoggerLevel"
					},
					"getParentLoggerName": {
						"args": [
							{
								"name": "p0",
								"type": "java.lang.String",
								"desc": "p0"
							}
						],
						"ret": "java.lang.String",
						"desc": "getParentLoggerName"
					},
					"setLoggerLevel": {
						"args": [
							{
								"name": "p0",
								"type": "java.lang.String",
								"desc": "p0"
							},
							{
								"name": "p1",
								"type": "java.lang.String",
								"desc": "p1"
							}
						],
						"ret": "void",
						"desc": "setLoggerLevel"
					}
				},
				"attr": {
					"LoggerNames": {
						"rw": false,
						"type": "[Ljava.lang.String;",
						"desc": "LoggerNames"
					},
					"ObjectName": {
						"rw": false,
						"type": "javax.management.ObjectName",
						"desc": "ObjectName"
					}
				},
				"class": "sun.management.ManagementFactoryHelper$PlatformLoggingImpl",
				"desc": "Information on the management interface of the MBean"
			}
		},
		"org.springframework.cloud.endpoint": {
			"name=refreshEndpoint,type=RefreshEndpoint": {
				"op": {
					"refresh": {
						"args": [],
						"ret": "[Ljava.lang.String;",
						"desc": "refresh"
					}
				},
				"class": "org.springframework.cloud.endpoint.RefreshEndpoint",
				"desc": ""
			}
		},
		"org.springframework.cloud.netflix.zuul": {
			"name=zuulEndpoint,type=RoutesEndpoint": {
				"class": "org.springframework.cloud.netflix.zuul.RoutesEndpoint",
				"desc": "Can be used to list the reverse proxy routes"
			}
		},
		"Tomcat": {},
		"java.nio": {},
		"org.springframework.boot": {
		},
		"JMImplementation": {},
		"java.lang": {
		}
	},
	"timestamp": 1540178802,
	"status": 200
}
```

### 查看单个JMX选项

POST http://localhost:8081/api/applications/69866be9/dump

Request body 是
``` json
{
	"type": "read",
	"mbean": "org.springframework.cloud.context.scope.refresh:name=refreshScope,type=RefreshScope",
	"config": {
		"ignoreErrors": true
	}
}
```

Response body 是
```json
{
	"request": {
		"mbean": "org.springframework.cloud.context.scope.refresh:name=refreshScope,type=RefreshScope",
		"type": "read"
	},
	"value": {},
	"timestamp": 1540179995,
	"status": 200
}
```

### 执行JMX操作

POST http://localhost:8081/api/applications/69866be9/dump

Request body 是
``` json
{
	"type": "exec",
	"mbean": "org.springframework.cloud.context.scope.refresh:name=refreshScope,type=RefreshScope",
	"operation": "refresh(java.lang.String)",
	"arguments": [
		"abc"
	]
}
```

Response body 是
```json
{
	"request": {
		"mbean": "org.springframework.cloud.context.scope.refresh:name=refreshScope,type=RefreshScope",
		"arguments": [
			"abc"
		],
		"type": "exec",
		"operation": "refresh(java.lang.String)"
	},
	"value": false,
	"timestamp": 1540180017,
	"status": 200
}
```


## 实时线程信息
http://localhost:8081/api/applications/69866be9/dump

```json
[
	{
		"threadName": "Reference Handler",
		"threadId": 2,
		"blockedTime": -1,
		"blockedCount": 1,
		"waitedTime": -1,
		"waitedCount": 0,
		"lockName": null,
		"lockOwnerId": -1,
		"lockOwnerName": null,
		"daemon": true,
		"inNative": false,
		"suspended": false,
		"threadState": "RUNNABLE",
		"priority": 10,
		"stackTrace": [
			{
				"classLoaderName": null,
				"moduleName": "java.base",
				"moduleVersion": "11",
				"methodName": "waitForReferencePendingList",
				"fileName": "Reference.java",
				"lineNumber": -2,
				"className": "java.lang.ref.Reference",
				"nativeMethod": true
			},
			{
				"classLoaderName": null,
				"moduleName": "java.base",
				"moduleVersion": "11",
				"methodName": "processPendingReferences",
				"fileName": "Reference.java",
				"lineNumber": 241,
				"className": "java.lang.ref.Reference",
				"nativeMethod": false
			},
			{
				"classLoaderName": null,
				"moduleName": "java.base",
				"moduleVersion": "11",
				"methodName": "run",
				"fileName": "Reference.java",
				"lineNumber": 213,
				"className": "java.lang.ref.Reference$ReferenceHandler",
				"nativeMethod": false
			}
		],
		"lockedMonitors": [],
		"lockedSynchronizers": [],
		"lockInfo": null
	},
]
```
## 审计信息
http://localhost:8081/api/applications/69866be9/auditevents?after=2018-10-22T03:01:00%2B0000

```json
{
	"events": [
		{
			"timestamp": "2018-10-22T03:01:10+0000",
			"principal": "user",
			"type": "AUTHENTICATION_SUCCESS",
			"data": {
				"details": {
					"remoteAddress": "127.0.0.1",
					"sessionId": null
				}
			}
		},
	]
}
```
## trace
http://localhost:8081/api/applications/69866be9/trace

```json
[
	{
		"timestamp": 1540179163456,
		"info": {
			"method": "GET",
			"path": "",
			"query": "",
			"remote": true,
			"proxy": "69866be9-trace",
			"headers": {
				"request": {
					"accept": "application/json, text/plain, */*",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36",
					"referer": "http://localhost:8081/",
					"accept-language": "zh-CN,zh;q=0.9",
					"authorization": "Basic dXNlcjpwYXNz",
					"x-forwarded-host": "localhost:8081",
					"x-forwarded-proto": "http",
					"x-forwarded-prefix": "/api/applications/69866be9/trace",
					"x-forwarded-port": "8081",
					"x-forwarded-for": "0:0:0:0:0:0:0:1",
					"Accept-Encoding": "gzip"
				}
			}
		}
	},
]
```
## 堆栈导出

http://localhost:8081/api/applications/69866be9/heapdump

**Stop the world ! 慎用**
