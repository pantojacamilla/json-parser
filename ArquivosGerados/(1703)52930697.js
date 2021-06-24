    package com.example;&#xD;&#xA;    import org.springframework.beans.factory.annotation.Value;&#xD;&#xA;    import org.springframework.boot.*;&#xD;&#xA;    import org.springframework.boot.autoconfigure.*;&#xD;&#xA;    import org.springframework.core.io.Resource;&#xD;&#xA;    import org.springframework.web.bind.annotation.*;&#xD;&#xA;    @RestController&#xD;&#xA;    @EnableAutoConfiguration&#xD;&#xA;    public class HelloWorld {&#xD;&#xA;        @Value("classpath:json/test.json")&#xD;&#xA;        private Resource resourceFile;&#xD;&#xA;        @RequestMapping("/")&#xD;&#xA;        Resource home() {&#xD;&#xA;            return resourceFile;&#xD;&#xA;        }&#xD;&#xA;        public static void main(String[] args) throws Exception {&#xD;&#xA;            SpringApplication.run(HelloWorld.class, args);&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA; 