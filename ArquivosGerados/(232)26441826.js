    public boolean inCollision(double x, double y, furniture f) {&#xD;&#xA;        if (x + radius <= f.getXpos(0) || x + radius > f.getXpos(2)) {&#xD;&#xA;            System.out.println("False");&#xD;&#xA;            return false;&#xD;&#xA;        }&#xD;&#xA;        if (y + radius < f.getYpos(0) || y + radius > f.getYpos(2)) {&#xD;&#xA;            System.out.println("False");&#xD;&#xA;            return false;&#xD;&#xA;        }&#xD;&#xA;        System.out.println("True");&#xD;&#xA;        return true;&#xD;&#xA;    }