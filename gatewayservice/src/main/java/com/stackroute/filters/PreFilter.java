package com.stackroute.filters;

import com.netflix.zuul.ZuulFilter;

public class PreFilter extends ZuulFilter {
	
	@Override
	public String filterType() {
		return "pre";
	}

	@Override
	public int filterOrder() {
		return 0;
	}

	@Override
	public boolean shouldFilter() {
		return true;
	}

	@Override
	public Object run() {
		return null;
	}

}