package cn.springcloud.admin;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class SClientWebApplication {

	private static Logger logger = LoggerFactory.getLogger(SClientWebApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(SClientWebApplication.class, args);
		logger.info("我是启动日志");
	}
}
