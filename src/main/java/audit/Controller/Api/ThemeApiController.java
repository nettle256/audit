package audit.Controller.Api;

import audit.Model.Theme;
import audit.Model.ThemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Nettle on 2017/2/6.
 */

@Controller
@RequestMapping("/api/theme")
public class ThemeApiController {
    @Autowired
    ThemeRepository themeRepository;

    /*
     * 获取栏目列表
     */
    @RequestMapping(value = "", method = RequestMethod.GET)
    private @ResponseBody
    List<Theme> getThemes() {
        return themeRepository.findByDeleted(false);
    }

}
