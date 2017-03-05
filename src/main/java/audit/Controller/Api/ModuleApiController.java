package audit.Controller.Api;

import audit.Model.*;
import audit.Model.DTO.MessageDTO;
import audit.Model.DTO.ModuleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by Nettle on 2017/2/8.
 */
@Controller
@RequestMapping("/api/module")
public class ModuleApiController {

    @Autowired
    private ModuleRepository moduleRepository;

    @Autowired
    private ArticleRepository articleRepository;

    @RequestMapping(value = "", method = RequestMethod.GET)
    private @ResponseBody
    List<ModuleDTO> getModule() {
        List<ModuleDTO> moduleDTOS = new ArrayList<ModuleDTO>();
        List<Module> modules = moduleRepository.findAllByDeleted(false);
        for (Module module:modules) {
            moduleDTOS.add(new ModuleDTO(module));
        }
        return moduleDTOS;
    }

    @RequestMapping(value = "/{id:[0-9]+}", method = RequestMethod.GET)
    private ResponseEntity<ModuleDTO> getSingleModule(
            @PathVariable(value="id") Long id
    )   {
        Module module = moduleRepository.findById(id);
        Article article = articleRepository.findById(module.getArticleId());
        return new ResponseEntity<ModuleDTO>(new ModuleDTO(module, article), HttpStatus.OK);
    }

}
