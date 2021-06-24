    import java.io.IOException;&#xD;&#xA;    import java.nio.file.Files;&#xD;&#xA;    import java.nio.file.Paths;&#xD;&#xA;    import java.util.ArrayList;&#xD;&#xA;    import java.util.List;&#xD;&#xA;    public class Deck {&#xD;&#xA;      private ArrayList < Card > cards;&#xD;&#xA;      public Deck() {&#xD;&#xA;        cards = new ArrayList < Card > ();&#xD;&#xA;      }&#xD;&#xA;      public List < Card > buildDeck() throws IOException {&#xD;&#xA;        List < String > cardLines = Files.readAllLines(Paths.get("cards.txt"));&#xD;&#xA;        // build card objects&#xD;&#xA;        List < Card > result = new ArrayList < Card > ();&#xD;&#xA;        for (int i = 0; i < cardLines.size(); i += 2) { //if lines read are smaller than file then read for another card&#xD;&#xA;          cards.add(new Card(cardLines.get(i), cardLines.get(i + 1))); //add new card to cards array&#xD;&#xA;        }&#xD;&#xA;        return result;&#xD;&#xA;      }&#xD;&#xA;      /*public void shuffle() {&#xD;&#xA;    		// fill in&#xD;&#xA;    	}*/&#xD;&#xA;    }