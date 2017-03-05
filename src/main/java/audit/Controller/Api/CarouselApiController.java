package audit.Controller.Api;

import audit.Model.*;
import audit.Model.DTO.CarouselDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Nettle on 2017/2/8.
 */
@Controller
@RequestMapping("/api/carousel")
public class CarouselApiController {

    @Autowired
    private CarouselRepository carouselRepository;

    @RequestMapping(value = "", method = RequestMethod.GET)
    private @ResponseBody
    List<CarouselDTO> getCarousels() {
        List<CarouselDTO> carouselDTOS = new ArrayList<CarouselDTO>();
        List<Carousel> carousels = carouselRepository.findAllByDeleted(false);
        for (Carousel carousel:carousels)
            carouselDTOS.add(new CarouselDTO(carousel));
        return carouselDTOS;
    }

}
