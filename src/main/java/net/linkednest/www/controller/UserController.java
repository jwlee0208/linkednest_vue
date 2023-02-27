package net.linkednest.www.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.bridge.Message;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.http.HttpResponse;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Slf4j
@Controller
@CrossOrigin(origins = {"http://localhost:9090"})
public class UserController {

    @PostMapping(value = "/registUser")
    public ResponseEntity registUser(HttpServletRequest request) {

        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String nickname = request.getParameter("nickname");

        log.info("[registUser] username : {}, password : {}, nickname : {}", username, password, nickname);

        Map<String, Object> resObj  = new HashMap<>();
        resObj.put("returnCode", "10000");
        resObj.put("username", username);

        return new ResponseEntity(resObj, HttpStatus.OK);
    }

    @PostMapping(value = "/login")
    public ResponseEntity login(HttpServletRequest request) {

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        log.info("[login] username : {}, password : {}, nickname : {}", username, password);

        Map<String, Object> resObj  = new HashMap<>();
        resObj.put("returnCode", "10000");
        resObj.put("username", username);
        resObj.put("token", UUID.randomUUID());
        return ResponseEntity.ok(resObj);
    }
}
