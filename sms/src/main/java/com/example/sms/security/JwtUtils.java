package com.example.sms.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;
import java.security.Key;
import java.util.Date;

@Component
public class JwtUtils {

    private final String jwtSecret =
            "yourVerySecretKeyThatIsAtLeast32CharactersLong!!";

    private final int jwtExpirationMs = 86400000; // 1 day

    // 🔑 Create signing key
    private Key key() {
        return Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }

    // 🔐 Generate JWT token
    public String generateToken(String username, String role) {
        return Jwts.builder()
                .setSubject(username)
                .claim("role", role)
                .setIssuedAt(new Date())
                .setExpiration(
                        new Date(System.currentTimeMillis() + jwtExpirationMs)
                )
                .signWith(key(), SignatureAlgorithm.HS256)
                .compact();
    }

    // 👤 Extract username from token  ⭐ IMPORTANT NAME
    public String getUserNameFromJwtToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key())
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    // ✅ Validate JWT token
    public boolean validateJwtToken(String token) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(key())
                    .build()
                    .parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            System.out.println("Invalid JWT: " + e.getMessage());
        }
        return false;
    }
}