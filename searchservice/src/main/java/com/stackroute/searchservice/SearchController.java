package com.stackroute.searchservice;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

//Annotation which implies that this is a conroller class
@RestController
@CrossOrigin
//Annotation which navigates to api/vi in localhost
@RequestMapping("/api/v1")
public class SearchController {

	
	@Autowired
	private RestTemplate restTemplate;
	
	//Rest template for all news
	@GetMapping("/news")
	public ResponseEntity<?>  getNews(){
		
		HttpHeaders headers = new HttpHeaders();
		
		//API URL
		String url = "https://newsapi.org/v2/everything?q=tesla&from=2021-04-30&sortBy=publishedAt&apiKey=53e73ba270df4585a6436da45994a91e";
	    headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	    HttpEntity<String> entity = new HttpEntity<>(headers);
		
	    return this.restTemplate.exchange(url, HttpMethod.GET, entity,Object.class);
	}
	//Rest template for sports news
	@GetMapping("/snews")
	
		public ResponseEntity<?>  getSportsNews(){
		
		HttpHeaders headers = new HttpHeaders();
		
		//API URL
		String url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=53e73ba270df4585a6436da45994a91e";
	    headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	    HttpEntity<String> entity = new HttpEntity<>(headers);
		
	    return this.restTemplate.exchange(url, HttpMethod.GET, entity,Object.class);
	}	
	
		//Rest template for Business news
		@GetMapping("/bnews")
		
			public ResponseEntity<?>  getBusinessNews(){
			
			HttpHeaders headers = new HttpHeaders();
			
			//API URL
			String url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=53e73ba270df4585a6436da45994a91e";
		    headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		    HttpEntity<String> entity = new HttpEntity<>(headers);
			
		    return this.restTemplate.exchange(url, HttpMethod.GET, entity,Object.class);
		}
		
		//Rest template for Tech news
				@GetMapping("/tnews")
				
					public ResponseEntity<?>  getTechNews(){
					HttpHeaders headers = new HttpHeaders();
					//API URL
					String url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=53e73ba270df4585a6436da45994a91e";
				    headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
				    HttpEntity<String> entity = new HttpEntity<>(headers);
					
				    return this.restTemplate.exchange(url, HttpMethod.GET, entity,Object.class);
				}
				
				
				@GetMapping("/search")
				public ResponseEntity<?>  getsearchNews(@RequestParam String queryParam){
				HttpHeaders headers = new HttpHeaders();
				String url = "https://newsapi.org/v2/everything?apiKey=53e73ba270df4585a6436da45994a91e&q="+queryParam;
				headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
			    HttpEntity<String> entity = new HttpEntity<>(headers);
				
			    return this.restTemplate.exchange(url, HttpMethod.GET, entity,Object.class);
			}
}
