package controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;


@Controller
@EnableWebMvc
@Slf4j
public class MainController {

    @RequestMapping(value = {"/status"})
    @ResponseBody
    public Rest getVersion() {
        Rest res = new Rest();
        res.setResult("App is running OK");
        return res;
    }

    //////////////////////////////////////////////////////////////////////////////////
    //View

    @RequestMapping(value = "/")
    public String greeting() {
        return "index.html";
    }


}

