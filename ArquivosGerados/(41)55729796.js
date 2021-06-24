    <?php&#xD;&#xA;    class Order{&#xD;&#xA;        private $conn;&#xD;&#xA;        public $SparePartID;&#xD;&#xA;        public $OrderID;&#xD;&#xA;        public $Price;&#xD;&#xA;        public $Quantity;&#xD;&#xA;        public function __construct($db){&#xD;&#xA;            $this->conn = $db;&#xD;&#xA;        }&#xD;&#xA;        function orderDetails($arr)&#xD;&#xA;        {&#xD;&#xA;           $query=  "INSERT INTO sparepartorderdetails (SparePartID, OrderID, Quantity, Price) VALUES&#xD;&#xA;          (:SparePartID, :OrderID, :qty, :Price) ";&#xD;&#xA;          &#xD;&#xA;            $stmt = $this->conn->prepare($query);&#xD;&#xA;            foreach($arr as $item)&#xD;&#xA;            {&#xD;&#xA;                $stmt->bindValue(':SparePartID', $item[0]);&#xD;&#xA;                $stmt->bindValue(':qty', $item[1]);&#xD;&#xA;                $stmt->bindValue(':Price', $item[2]);&#xD;&#xA;                $stmt->bindValue(':OrderID', $item[3]);&#xD;&#xA;              if($stmt->execute()){&#xD;&#xA;                return true;&#xD;&#xA;            }&#xD;&#xA;            else{&#xD;&#xA;                $this->conn->errorInfo();&#xD;&#xA;            }&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;    }