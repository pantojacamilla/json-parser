    @SpringBootApplication&#xD;&#xA;    @EnableJpaRepositories("rest.api.repository")&#xD;&#xA;    @EnableMongoRepositories("rest.api.repository")&#xD;&#xA;    @EnableTransactionManagement&#xD;&#xA;    @EnableConfigurationProperties&#xD;&#xA;    @EnableCaching&#xD;&#xA;    public class Application extends SpringBootServletInitializer{&#xD;&#xA;    public static final long LOGGED_IN_USER = 1L;&#xD;&#xA;	public static void main(String[] args) {&#xD;&#xA;		SpringApplication.run(Application.class, args);&#xD;&#xA;	}&#xD;&#xA;	@Override&#xD;&#xA;	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {&#xD;&#xA;		return application.sources(Application.class);&#xD;&#xA;	}&#xD;&#xA;	@Bean&#xD;&#xA;	public FilterRegistrationBean corsFilter() {&#xD;&#xA;		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();&#xD;&#xA;		CorsConfiguration config = new CorsConfiguration();&#xD;&#xA;		config.setAllowCredentials(true);&#xD;&#xA;		config.addAllowedOrigin("*");&#xD;&#xA;		config.addAllowedHeader("Access-Control-Expose-Headers");&#xD;&#xA;		config.addAllowedHeader("X-Requested-With");&#xD;&#xA;		config.addAllowedHeader("Authorization");&#xD;&#xA;		config.addAllowedHeader("Content-Type");&#xD;&#xA;		config.addAllowedHeader("If-None-Match");&#xD;&#xA;		config.addAllowedHeader("Access-Control-Allow-Headers");&#xD;&#xA;		config.addExposedHeader("Access-Control-Allow-Origin");&#xD;&#xA;		config.addExposedHeader("Access-Control-Allow-Headers");&#xD;&#xA;		config.addExposedHeader("ETag");&#xD;&#xA;		config.addAllowedMethod("GET");&#xD;&#xA;		config.addAllowedMethod("POST");&#xD;&#xA;		config.addAllowedMethod("PUT");&#xD;&#xA;		config.addAllowedMethod("DELETE");&#xD;&#xA;		config.addAllowedMethod("OPTIONS");&#xD;&#xA;		config.addAllowedMethod("HEAD");&#xD;&#xA;		source.registerCorsConfiguration("/**", config);&#xD;&#xA;		FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));&#xD;&#xA;		bean.setOrder(0);&#xD;&#xA;		return bean;&#xD;&#xA;	}&#xD;&#xA;    }&#xD;&#xA;    @RepositoryRestController&#xD;&#xA;    @CrossOrigin(methods = {RequestMethod.GET,&#xD;&#xA;        RequestMethod.POST,&#xD;&#xA;        RequestMethod.PUT,&#xD;&#xA;        RequestMethod.DELETE,&#xD;&#xA;        RequestMethod.OPTIONS,&#xD;&#xA;        RequestMethod.HEAD})&#xD;&#xA;    public class PostController {&#xD;&#xA;    private PostRepository postRepository;&#xD;&#xA;    private UserRepository userRepository;&#xD;&#xA;    private LikeRepository likeRepository;&#xD;&#xA;    private DislikeRepository dislikeRepository;&#xD;&#xA;    @Autowired&#xD;&#xA;    PagedResourcesAssembler pagedResourcesAssembler;&#xD;&#xA;    protected PostController() {&#xD;&#xA;    }&#xD;&#xA;    @Autowired&#xD;&#xA;    public PostController(PostRepository postRepository, UserRepository userRepository, LikeRepository likeRepository, DislikeRepository dislikeRepository) {&#xD;&#xA;        this.postRepository = postRepository;&#xD;&#xA;        this.userRepository = userRepository;&#xD;&#xA;        this.likeRepository = likeRepository;&#xD;&#xA;        this.dislikeRepository = dislikeRepository;&#xD;&#xA;    }&#xD;&#xA;    @ResponseBody&#xD;&#xA;    @RequestMapping(value = "/posts", method = RequestMethod.GET)&#xD;&#xA;    public ResponseEntity<PagedResources<PersistentEntityResource>> getAll(HttpRequest request,&#xD;&#xA;                                                                           Pageable pageable,&#xD;&#xA;                                                                           PersistentEntityResourceAssembler resourceAssembler) {&#xD;&#xA;            Page<Post> page = postRepository.findAll(pageable);&#xD;&#xA;            return ResponseEntity&#xD;&#xA;                    .ok()&#xD;&#xA;                    .cacheControl(CacheControl.maxAge(5, TimeUnit.SECONDS))&#xD;&#xA;                    .eTag(String.valueOf(page.hashCode()))&#xD;&#xA;                    .body(pagedResourcesAssembler.toResource(page, resourceAssembler));&#xD;&#xA;    }&#xD;&#xA;    @ResponseBody&#xD;&#xA;    @RequestMapping(value = "/posts", method = RequestMethod.POST)&#xD;&#xA;    public ResponseEntity<PersistentEntityResource> sendPost(@RequestBody Post post,&#xD;&#xA;                                                             PersistentEntityResourceAssembler resourceAssembler,&#xD;&#xA;                                                             UriComponentsBuilder b) {&#xD;&#xA;        User sender = userRepository.findOne(1L);&#xD;&#xA;        URI loc = null;&#xD;&#xA;        post.setSender(sender);&#xD;&#xA;        post = postRepository.save(post);&#xD;&#xA;        UriComponents uriComponents =&#xD;&#xA;                b.path("/posts/{id}").buildAndExpand(post.getIdentify());&#xD;&#xA;        HttpHeaders headers = new HttpHeaders();&#xD;&#xA;        return ResponseEntity&#xD;&#xA;                .ok()&#xD;&#xA;                .cacheControl(CacheControl.maxAge(5, TimeUnit.SECONDS))&#xD;&#xA;                .location(uriComponents.toUri())&#xD;&#xA;                .eTag(String.valueOf(post.getVersion()))&#xD;&#xA;                .body(resourceAssembler.toFullResource(post));&#xD;&#xA;    }&#xD;&#xA;    @ResponseBody&#xD;&#xA;    @RequestMapping(value = "/posts/{id}", method = RequestMethod.PUT)&#xD;&#xA;    public PersistentEntityResource edit(@PathVariable(value = "id") long id, @RequestBody Post post, PersistentEntityResourceAssembler resourceAssembler) {&#xD;&#xA;        Post editedPost = postRepository.findOne(id);&#xD;&#xA;        editedPost.setCreated(post.getCreated());&#xD;&#xA;        editedPost.setText(post.getText());&#xD;&#xA;        postRepository.save(editedPost);&#xD;&#xA;        return resourceAssembler.toFullResource(editedPost);&#xD;&#xA;    }&#xD;&#xA;    @ResponseBody&#xD;&#xA;    @RequestMapping(value = "/posts/{id}/likes", method = RequestMethod.POST)&#xD;&#xA;    public PersistentEntityResource likePost(@PathVariable(value = "id") long id, PersistentEntityResourceAssembler resourceAssembler) {&#xD;&#xA;        final boolean isAlreadyLiked = false;&#xD;&#xA;        User userWhoLikesIt = userRepository.findOne(1L);&#xD;&#xA;        Post post = postRepository.findOne(id);&#xD;&#xA;        post.setLiked(post.getLiked() + 1);&#xD;&#xA;        Likey like = new Likey(userWhoLikesIt);&#xD;&#xA;        likeRepository.save(like);&#xD;&#xA;        return resourceAssembler.toFullResource(like);&#xD;&#xA;    }&#xD;&#xA;    @ResponseBody&#xD;&#xA;    @RequestMapping(value = "/posts/{id}/dislikes", method = RequestMethod.POST)&#xD;&#xA;    public PersistentEntityResource dislikePost(@PathVariable(value = "id") long id, PersistentEntityResourceAssembler resourceAssembler) {&#xD;&#xA;        User userWhoDislikesIt = userRepository.findOne(1L);&#xD;&#xA;        DisLike dislike = new DisLike(userWhoDislikesIt);&#xD;&#xA;        dislikeRepository.save(dislike);&#xD;&#xA;        return resourceAssembler.toFullResource(dislike);&#xD;&#xA;    }&#xD;&#xA;    @ResponseBody&#xD;&#xA;    @RequestMapping(value = "/posts/{id}/likes", method = RequestMethod.GET)&#xD;&#xA;    public ResponseEntity<PagedResources<PersistentEntityResource>> getLikes(HttpRequest request,&#xD;&#xA;                                                                           Pageable pageable,&#xD;&#xA;                                                                           PersistentEntityResourceAssembler resourceAssembler) {&#xD;&#xA;        Page<Likey> page = likeRepository.findAll(pageable);&#xD;&#xA;        return ResponseEntity&#xD;&#xA;                .ok()&#xD;&#xA;                .cacheControl(CacheControl.maxAge(5, TimeUnit.SECONDS))&#xD;&#xA;                .eTag(String.valueOf(page.hashCode()))&#xD;&#xA;                .body(pagedResourcesAssembler.toResource(page, resourceAssembler));&#xD;&#xA;    }&#xD;&#xA;    @ResponseBody&#xD;&#xA;    @RequestMapping(value = "/posts/{id}/dislikes", method = RequestMethod.GET)&#xD;&#xA;    public ResponseEntity<PagedResources<PersistentEntityResource>> getDislikes(HttpRequest request,&#xD;&#xA;                                                                           Pageable pageable,&#xD;&#xA;                                                                           PersistentEntityResourceAssembler resourceAssembler) {&#xD;&#xA;        Page<DisLike> page = dislikeRepository.findAll(pageable);&#xD;&#xA;        return ResponseEntity&#xD;&#xA;                .ok()&#xD;&#xA;                .cacheControl(CacheControl.maxAge(5, TimeUnit.SECONDS))&#xD;&#xA;                .eTag(String.valueOf(page.hashCode()))&#xD;&#xA;                .body(pagedResourcesAssembler.toResource(page, resourceAssembler));&#xD;&#xA;    }