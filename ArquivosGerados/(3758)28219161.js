    public class Project {&#xD;&#xA;      private int ProjectNr;&#xD;&#xA;      private String Naam;&#xD;&#xA;      private GregorianCalendar BDatum;&#xD;&#xA;      private GregorianCalendar EDatum;&#xD;&#xA;      double Aanneemsom;&#xD;&#xA;      boolean Gefactureerd;&#xD;&#xA;      String Beschrijving;&#xD;&#xA;      List < Artikel > Artikelen;&#xD;&#xA;      List < Activiteit > Activiteiten;&#xD;&#xA;      public Project(int projectnr, String naam, GregorianCalendar bdatum,&#xD;&#xA;        GregorianCalendar edatum, double aansom, boolean fact, String besc) {&#xD;&#xA;        this.ProjectNr = projectnr;&#xD;&#xA;        this.Naam = naam;&#xD;&#xA;        this.BDatum = bdatum;&#xD;&#xA;        this.EDatum = edatum;&#xD;&#xA;        this.Aanneemsom = aansom;&#xD;&#xA;        this.Gefactureerd = fact;&#xD;&#xA;        this.Beschrijving = besc;&#xD;&#xA;      }&#xD;&#xA;      public int getProjectNr() {&#xD;&#xA;        return this.ProjectNr;&#xD;&#xA;      }&#xD;&#xA;      public String getNaam() {&#xD;&#xA;        return this.Naam;&#xD;&#xA;      }&#xD;&#xA;      public GregorianCalendar getBDatum() {&#xD;&#xA;        return this.BDatum;&#xD;&#xA;      }&#xD;&#xA;      public GregorianCalendar getEDatum() {&#xD;&#xA;        return this.EDatum;&#xD;&#xA;      }&#xD;&#xA;      public double getAanneemsom() {&#xD;&#xA;        return this.Aanneemsom;&#xD;&#xA;      }&#xD;&#xA;      public String getFactureerd() {&#xD;&#xA;        if (this.Gefactureerd == true) {&#xD;&#xA;          return "Ja";&#xD;&#xA;        } else {&#xD;&#xA;          return "Nee";&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      public String getBeschrijving() {&#xD;&#xA;        return this.Beschrijving;&#xD;&#xA;      }&#xD;&#xA;    }