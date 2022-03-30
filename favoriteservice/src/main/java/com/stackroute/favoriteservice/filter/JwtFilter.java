//package com.stackroute.favoriteservice.filter;
//
//import io.jsonwebtoken.Jwts;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
//
//import java.util.ArrayList;
//
//public class JwtFilter extends BasicAuthenticationFilter {
//    private final String SECRET = "secretkey";
//    private final String TOKEN_PREFIX = "Bearer ";
//    private final String HEADER_STRING = "Authorization";
//
//    public JwtFilter(AuthenticationManager authManager) {
//        super(authManager);
//    }
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest req,
//                                    HttpServletResponse res,
//                                    FilterChain chain) throws IOException, ServletException {
//        String header = req.getHeader(HEADER_STRING);
//
//        if (header == null || !header.startsWith(TOKEN_PREFIX)) {
//            chain.doFilter(req, res);
//            return;
//        }
//        System.out.println("header: " + header);
//
//        try {
//            UsernamePasswordAuthenticationToken authentication = getAuthentication(req);
//
//            System.out.println("authentication: " + authentication);
//
//            SecurityContextHolder.getContext().setAuthentication(authentication);
//            chain.doFilter(req, res);
//        }catch (Exception e) {
//            res.setStatus(HttpServletResponse.SC_FORBIDDEN);
//            res.getWriter().println("Invalid Token");
//        }
//    }
//
//    private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) throws Exception {
//        String token = request.getHeader(HEADER_STRING);
//        if (token == null) return null;
//        // parse the token.
//        String user = Jwts.parser()
//                .setSigningKey(SECRET)
//                .parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
//                .getBody()
//                .getId();
//
//        if (user == null) return null;
//
//        return new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>());
//    }
//}
