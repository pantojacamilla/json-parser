    const searchBar = document.forms['search-books'].querySelector('input');&#xD;&#xA;    searchBar.addEventListener('keyup', function(e) {&#xD;&#xA;        const term = e.target.value.toLocaleLowerCase();&#xD;&#xA;        const books = list.getElementsByTagName('h5');&#xD;&#xA;        Array.from(books).forEach(function(books) {&#xD;&#xA;            const title = book.firstElementChild.textContent;&#xD;&#xA;            if (title.toLowerCase().indexOf(term) != -1) {&#xD;&#xA;                book.style.display = 'block';&#xD;&#xA;            } else {&#xD;&#xA;                book.style.display = 'none';&#xD;&#xA;            }&#xD;&#xA;        })&#xD;&#xA;    })