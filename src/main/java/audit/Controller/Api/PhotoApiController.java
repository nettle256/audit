package audit.Controller.Api;

/**
 * Created by Nettle on 2017/2/10.
 */

import audit.Model.*;
import audit.Model.DTO.PhotoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/api/photo")
public class PhotoApiController {

    @Autowired
    private  PhotoRepository photoRepository;

    @RequestMapping(value = "", method = RequestMethod.GET)
    private @ResponseBody
    List<PhotoDTO> getPhotos() {
        List<PhotoDTO> photoDTOS = new ArrayList<PhotoDTO>();
        List<Photo> photos = photoRepository.findAllByDeleted(false);
        for (Photo photo:photos)
            photoDTOS.add(new PhotoDTO(photo));
        return photoDTOS;
    }

}
