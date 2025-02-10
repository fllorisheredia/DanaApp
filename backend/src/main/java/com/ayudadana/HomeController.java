package com.ayudadana;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "/index.html"; // Carga el archivo index.html desde src/main/resources/static
    }
}
