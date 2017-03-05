package audit.Controller.Api;

import audit.Model.*;
import audit.Model.DTO.MessageDTO;
import audit.Model.DTO.NewsDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by Nettle on 2017/2/27.
 */
@Controller
@RequestMapping("/api/news")
public class NewsApiController {

    @Autowired
    NewsRepository newsRepository;

    @Autowired
    ArticleRepository articleRepository;

    @RequestMapping(value = "", method = RequestMethod.GET)
    private @ResponseBody List<NewsDTO> getAllNews() {
        List<NewsDTO> newsDTOList = new ArrayList<NewsDTO>();
        List<News> newsList = newsRepository.findAll();
        for (News news: newsList)
            newsDTOList.add(new NewsDTO(news));
        return newsDTOList;
    }

    @RequestMapping(value = "/trash", method = RequestMethod.GET)
    private @ResponseBody List<NewsDTO> getAllTrashNews() {
        List<NewsDTO> newsDTOList = new ArrayList<NewsDTO>();
        List<News> newsList = newsRepository.findAllByDeleted(true);
        for (News news: newsList)
            newsDTOList.add(new NewsDTO(news));
        return newsDTOList;
    }

    @RequestMapping(value = "/{id:[0-9]+}", method = RequestMethod.GET)
    private ResponseEntity<NewsDTO> getSingleNews(
            @PathVariable(value="id") Long id
    ) {
        try {
            News news = newsRepository.findById(id);
            Article article = articleRepository.findById(news.getArticleId());
            return new ResponseEntity<NewsDTO>(new NewsDTO(news, article), HttpStatus.OK);
        }   catch (Exception e) {
            return new ResponseEntity<NewsDTO>((NewsDTO) null, HttpStatus.BAD_REQUEST);
        }
    }
}
