package net.easyfinance.core.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {

    @Value("${view.frontend-managed-urls}")
    private String[] frontendManagedUrls;

    @Value("${view.forward-to-frontend-url}")
    private String forwardToFrontendUrl;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/resources/");
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        for (String path : frontendManagedUrls) {
            registry.addViewController(path).setViewName(forwardToFrontendUrl);
        }
    }
}