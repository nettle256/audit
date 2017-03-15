package audit.Model.DTO;

import audit.Model.News;
import org.springframework.data.domain.Page;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Nettle on 2017/3/15.
 */
public class NewsPageDTO {
    private int totalPages;
    private int number;
    private Long total;
    private List<NewsDTO> content;

    NewsPageDTO() {};

    public NewsPageDTO(Page<News> newsPage) {
        this.totalPages = newsPage.getTotalPages();
        this.number = newsPage.getNumber();
        this.total = newsPage.getTotalElements();
        this.content = new ArrayList<NewsDTO>();
        List<News> newsList = newsPage.getContent();
        for (News singleNews:newsList)
            this.content.add(new NewsDTO(singleNews));
    }

    public int getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(int totalPages) {
        this.totalPages = totalPages;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public List<NewsDTO> getContent() {
        return content;
    }

    public void setContent(List<NewsDTO> content) {
        this.content = content;
    }

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }
}
