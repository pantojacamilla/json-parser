        <nav>&#xD;&#xA;             <ul class="pagination pagination-lg">&#xD;&#xA;                 <li class="page-item"&#xD;&#xA;                     :class="{ 'disabled': meta_data.prev_page_url === null }">&#xD;&#xA;                     <a href="#"&#xD;&#xA;                         class="page-link"&#xD;&#xA;                         @click="next(meta_data.current_page-1)">&#xD;&#xA;                         &laquo;&#xD;&#xA;                     </a>&#xD;&#xA;                 </li>&#xD;&#xA;                 <li class="page-item"&#xD;&#xA;                     v-for="page in meta_data.last_page"&#xD;&#xA;                     :key="page"&#xD;&#xA;                     :class="{ 'active':meta_data.current_page === page }">&#xD;&#xA;                     <a href="#"&#xD;&#xA;                         @click.prevent="next(page)"&#xD;&#xA;                         class="page-link">&#xD;&#xA;                         {{ page }}&#xD;&#xA;                     </a>&#xD;&#xA;                 </li>&#xD;&#xA;                 <li class="page-item"&#xD;&#xA;                     :class="{ 'disabled': meta_data.current_page === meta_data.last_page }">&#xD;&#xA;                    <a  href="#"&#xD;&#xA;                         class="page-link"&#xD;&#xA;                         @click="next(meta_data.current_page+1)">&#xD;&#xA;                         &raquo;&#xD;&#xA;                    </a>&#xD;&#xA;                 </li>&#xD;&#xA;            </ul>&#xD;&#xA;        </nav>