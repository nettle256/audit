package audit.Model.DTO;

import audit.Model.Carousel;

/**
 * Created by Nettle on 2017/2/8.
 */
public class CarouselDTO {
    private Long id;
    private Long index;
    private String imageUrl;
    private String text;
    private Long connect;
    private Long theme;

    public CarouselDTO() {}

    public CarouselDTO(Carousel carousel) {
        this.id = carousel.getId();
        this.index = carousel.getIdx();
        this.imageUrl = "/photo/" + carousel.getImageUrl();
        this.text = carousel.getText();
        this.connect = carousel.getConnectId();
        this.theme = carousel.getConnectTheme();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIndex() {
        return index;
    }

    public void setIndex(Long index) {
        this.index = index;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Long getConnect() {
        return connect;
    }

    public void setConnect(Long connect) {
        this.connect = connect;
    }

    public Long getTheme() {
        return theme;
    }

    public void setTheme(Long theme) {
        this.theme = theme;
    }
}
