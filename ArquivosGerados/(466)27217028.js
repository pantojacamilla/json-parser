    public boolean equals(Object obj) {&#xD;&#xA;           //if (obj instanceof Segment) {&#xD;&#xA;               //Segment other = (Segment) obj;&#xD;&#xA;               //return p1 == other.getP1() && p2 == other.getP2();&#xD;&#xA;           //}&#xD;&#xA;           //else {&#xD;&#xA;              &#xD;&#xA;               //throw new IllegalArgumentException("undefined");&#xD;&#xA;           //}&#xD;&#xA;          &#xD;&#xA;           if(obj == null)&#xD;&#xA;               return false;&#xD;&#xA;           if(this == obj)&#xD;&#xA;               return true;&#xD;&#xA;           //if(!(obj instanceof Segment))&#xD;&#xA;               //return false;&#xD;&#xA;          &#xD;&#xA;           else if(obj.getClass() != this.getClass())&#xD;&#xA;               return false;&#xD;&#xA;          &#xD;&#xA;               else {&#xD;&#xA;                   Segment S = (Segment)obj;&#xD;&#xA;           if (this.getP1() == S.getP1() &&&#xD;&#xA;                       this.getP2() == S.getP2())&#xD;&#xA;               return true;&#xD;&#xA;          &#xD;&#xA;           else if(this.getP1() != S.getP1() &&&#xD;&#xA;                   this.getP2() != S.getP2()){&#xD;&#xA;               return true;}&#xD;&#xA;          &#xD;&#xA;           return false;&#xD;&#xA;          &#xD;&#xA;               }      &#xD;&#xA;               //else if(obj.getP1() != this.getP1() &&&#xD;&#xA;                   //   obj.getP2() != this.getP2());&#xD;&#xA;           //   return false;&#xD;&#xA;          &#xD;&#xA;      &#xD;&#xA;       }