package dio.web.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class WelcomeControler {
    @GetMapping("/")
    public String welcome(){
        return "Welcome to a Spring Boot REST API";
    }
}


