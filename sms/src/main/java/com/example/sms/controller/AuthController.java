package com.example.sms.controller;

import com.example.sms.dto.JwtResponse;
import com.example.sms.dto.LoginRequest;
import com.example.sms.security.JwtUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    // ✅ MANUAL CONSTRUCTOR (fixes compile error)
    public AuthController(AuthenticationManager authenticationManager,
                          JwtUtils jwtUtils) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(
            @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        String token = jwtUtils.generateToken(
                loginRequest.getUsername(),
                "ROLE_ADMIN"
        );

        return ResponseEntity.ok(
                new JwtResponse(token, loginRequest.getUsername(), "ROLE_ADMIN")
        );
    }
}