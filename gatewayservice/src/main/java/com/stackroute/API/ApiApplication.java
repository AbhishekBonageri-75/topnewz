package com.stackroute.API;

import org.springframework.boot.SpringApplication;


import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.stackroute.filters.ErrorFilter;
import com.stackroute.filters.PostFilter;
import com.stackroute.filters.PreFilter;
import com.stackroute.filters.RouteFilter;

import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
@EnableDiscoveryClient
@SpringBootApplication(exclude= {DataSourceAutoConfiguration.class})
@EnableZuulProxy
@RefreshScope
public class ApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}
	@Bean
	 public PreFilter preFilter() {
	  return new PreFilter();
	 }

	 @Bean
	 public PostFilter postFilter() {
	  return new PostFilter();
	 }

	 @Bean
	 public ErrorFilter errorFilter() {
	  return new ErrorFilter();
	 }

	 @Bean
	 public RouteFilter routeFilter() {
	  return new RouteFilter();
	 }

}
