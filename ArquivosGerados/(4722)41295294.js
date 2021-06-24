    func getTitles(catId: Int) {&#xD;&#xA;        let catIdString = String(catId)&#xD;&#xA;        let titlesEndPoint: String = MY_ENDPOINT + catIdString&#xD;&#xA;        // Add auth key&#xD;&#xA;        let titlesEndPointWithParams = titlesEndPoint + "?PARAMETER"&#xD;&#xA;        guard let titlesUrl = URL(string: titlesEndPointWithParams) else {&#xD;&#xA;            print("Error: cannot create URL")&#xD;&#xA;            return&#xD;&#xA;        }&#xD;&#xA;        &#xD;&#xA;        let titlesUrlRequest = URLRequest(url: titlesUrl)&#xD;&#xA;        &#xD;&#xA;        // set up the session&#xD;&#xA;        let config = URLSessionConfiguration.default&#xD;&#xA;        let session = URLSession(configuration: config)&#xD;&#xA;        &#xD;&#xA;        // make the request&#xD;&#xA;        let task = session.dataTask(with: titlesUrlRequest) {&#xD;&#xA;            (data, response, error) in&#xD;&#xA;            // check for any errors&#xD;&#xA;            guard error == nil else {&#xD;&#xA;                print("error calling GET on listCategoryTitles")&#xD;&#xA;                print(error)&#xD;&#xA;                return&#xD;&#xA;            }&#xD;&#xA;            // make sure we got data&#xD;&#xA;            guard let titlesData = data else {&#xD;&#xA;                print("Error: did not receive data")&#xD;&#xA;                return&#xD;&#xA;            }&#xD;&#xA;            // parse the JSON&#xD;&#xA;            do {&#xD;&#xA;                guard let allTitles = try JSONSerialization.jsonObject(with: titlesData, options: []) as? [String: AnyObject] else {&#xD;&#xA;                    print("error converting data to JSON")&#xD;&#xA;                    return&#xD;&#xA;                }&#xD;&#xA;                if let titlesJson = allTitles["data"] as? [String: Any] {&#xD;&#xA;                    if let titlesArray = titlesJson["titles"] as? Array<AnyObject> {&#xD;&#xA;                        self.books = []&#xD;&#xA;                        for (index, value) in titlesArray.enumerated() {&#xD;&#xA;                            var book = Book()&#xD;&#xA;                            book.bookTitle = value["title"] as? String&#xD;&#xA;                            book.bookAuthor = value["author"] as? String&#xD;&#xA;                            if let imageSource = value["_links"] as? Array<AnyObject> {&#xD;&#xA;                                book.bookImageSource = imageSource[1]["href"] as? String&#xD;&#xA;                            }&#xD;&#xA;                            self.books?.append(book)&#xD;&#xA;                        }&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;                &#xD;&#xA;            } catch  {&#xD;&#xA;                print("error converting data to JSON")&#xD;&#xA;                return&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        task.resume()&#xD;&#xA;    }