package audit.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Nettle on 2017/1/22.
 */

@Controller
public class Kernel {
    @RequestMapping("/")
    private String index() {
        return "app";
    }
}
