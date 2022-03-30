package com.stackroute.favoriteservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.List;

@EnableSwagger2
@SpringBootApplication
@EnableEurekaClient
public class FavoriteserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FavoriteserviceApplication.class, args);
	}

//	@Bean
//	CorsConfigurationSource corsConfigurationSource() {
//		CorsConfiguration corsConfig = new CorsConfiguration();
//		corsConfig.setAllowedOrigins(List.of("*"));
//		corsConfig.setMaxAge(3600L);
//		corsConfig.addAllowedMethod("*");
//		corsConfig.addAllowedHeader("*");
//
//		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//		source.registerCorsConfiguration("/**", corsConfig);
//		return source;
//	}
}
