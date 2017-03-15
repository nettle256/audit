package audit.Model;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by Nettle on 2017/2/27.
 */
public interface NewsRepository extends JpaRepository<News, Long> {
    public News findById(Long id);
    public News findByIdAndDeleted(Long id, Boolean deleted);
    public List<News> findByThemeAndDeleted(Long theme, Boolean deleted);
    public List<News> findAllByDeleted(Boolean deleted);
    public List<News> findAllByPublished(Boolean published);
    public List<News> findAllByPublishedAndDeleted(Boolean published, Boolean deleted);
    public Page<News> findAllByTitleContainingAndDeleted(String title, Boolean deleted, Pageable pageable);
    public Page<News> findAllByTitleContainingAndThemeAndDeleted(String title, Long theme, Boolean deleted, Pageable pageable);
}
